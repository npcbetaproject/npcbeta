const {JSDOM}=require('jsdom'),fs=require('node:fs'),assert=require('node:assert/strict');
const chars=JSON.parse(fs.readFileSync('docs/data/characters/index.json'));
const config=JSON.parse(fs.readFileSync('docs/data/characters/location-fit-categories.json'));
const expected=['settlements','roads-travel','wilderness','dungeons-ruins','castles-estates','waterfront'];
(async()=>{
const seed={'npc-beta-saved':'["nessa-vale","harthos-ravenmoor","kaelen-ashford"]','npc-beta-session':'["nessa-vale","harthos-ravenmoor","kaelen-ashford"]','npc-beta:generator:v1:session':JSON.stringify([{id:'generated-sailor',name:'Sailor',professionId:'sailor',professionLabel:'Sailor',locationId:'ship',locationLabel:'Ship',createdAt:'2026-10-07'},{id:'generated-unknown',name:'Legacy',professionId:'old',professionLabel:'Old',locationId:'old',locationLabel:'Old',createdAt:'2026-10-07'}])};
const w=new JSDOM(fs.readFileSync('docs/index.html','utf8'),{url:'https://example.com/',runScripts:'outside-only'}).window;w.scrollTo=()=>{};w.fetch=async p=>({ok:true,json:async()=>JSON.parse(fs.readFileSync('docs/'+p))});
for(const [k,v] of Object.entries(seed))w.localStorage.setItem(k,v);
w.eval(['portraits','character-portraits','generator','locations','generated-visuals','app'].map(n=>fs.readFileSync('docs/js/'+n+'.js','utf8')).join('\n')+'\nwindow.test={state,visibleCharacters,visibleSessionEntries,validateLocationFitCategories,setView};');
await new Promise(r=>setTimeout(r,30));const t=w.test,d=w.document;
assert.deepEqual(config.categories.map(x=>x.id),expected);assert.deepEqual([...d.querySelectorAll('#location-filters [data-filter]')].map(x=>x.value),expected);assert.deepEqual([...d.querySelectorAll('#location-filters span')].map(x=>x.textContent),['All Locations',...config.categories.map(x=>x.label)]);
t.validateLocationFitCategories(config,chars);
for(const invalid of [[],['Town'],['settlements','settlements']])assert.throws(()=>t.validateLocationFitCategories(config,[{...chars[0],locationFitCategoryIds:invalid}]),/Invalid NPC/);
assert.throws(()=>t.validateLocationFitCategories({...config,categories:[...config.categories,config.categories[0]]},chars),/Duplicate/);
assert.deepEqual(Object.keys(config.generatorLocationCategoryIds).sort(),JSON.parse(fs.readFileSync('docs/data/generator/options.json')).locations.map(x=>x.id).sort());
const all=d.querySelector('[data-all-locations]'),allRoles=d.querySelector('[data-all-roles]');assert(all.checked);assert.equal(t.visibleCharacters().length,chars.length);assert.equal(t.state.sort,'recent');const first=t.visibleCharacters()[0].id;
const select=(id,on=true,group='location')=>{const el=d.querySelector(`[data-filter="${group}"][value="${id}"]`);el.checked=on;el.dispatchEvent(new w.Event('change',{bubbles:true}));};
const ids=()=>Array.from(t.visibleCharacters(),x=>x.id).sort();
for(const id of expected){all.click();select(id);assert.deepEqual(ids(),chars.filter(x=>x.locationFitCategoryIds.includes(id)).map(x=>x.id).sort());assert(!all.checked);assert.match(d.querySelector('#results-note').textContent,new RegExp('^'+ids().length+' character'));}
all.click();select('roads-travel');select('dungeons-ruins');assert.equal(ids().filter(x=>x==='cassian-holt').length,1);assert(ids().includes('sergorn-wolffall'));assert(ids().includes('aretha-frostcrest'));all.click();assert.equal(t.visibleCharacters().length,chars.length);assert.equal(t.visibleCharacters()[0].id,first);
select('waterfront');select('underworld',true,'role');assert.deepEqual(ids(),['nessa-vale']);const search=d.querySelector('#character-search');search.value='Ferryman';search.dispatchEvent(new w.Event('input'));assert.equal(ids().length,0);allRoles.click();assert.deepEqual(ids(),['harthos-ravenmoor']);search.value='';search.dispatchEvent(new w.Event('input'));
t.setView('saved');assert.deepEqual(ids(),['harthos-ravenmoor','nessa-vale']);t.setView('session');assert.deepEqual(Array.from(t.visibleSessionEntries(),x=>x.id).sort(),['generated-sailor','harthos-ravenmoor','nessa-vale']);assert.match(d.querySelector('#results-note').textContent,/3 of 5/);
all.click();assert.equal(t.visibleSessionEntries().length,5);select('castles-estates');assert.deepEqual(Array.from(t.visibleSessionEntries(),x=>x.id),['kaelen-ashford']);select('military-authority',true,'role');d.querySelector('.clear-filters').click();assert(all.checked);assert(allRoles.checked);assert.equal(t.visibleSessionEntries().length,5);
select('roads-travel');select('roads-travel',false);assert(all.checked);assert.equal(t.state.sort,'recent');const sort=d.querySelector('#character-sort');sort.value='name';sort.dispatchEvent(new w.Event('change'));select('waterfront');all.click();assert.equal(t.state.sort,'name');
for(const [k,v] of Object.entries(seed))assert.equal(w.localStorage.getItem(k),v);
d.querySelector('.filter-toggle').click();assert.equal(d.querySelector('.filter-toggle').getAttribute('aria-expanded'),'true');assert(d.querySelector('#filter-panel').classList.contains('open'));w.close();console.log('PASS: six categories/order, all NPC assignments, invalid IDs, overlaps/OR, Role/search AND, All Locations/reset, counts, Saved/mixed Session, generator mapping, mobile controls, sort and storage');
})().catch(e=>{console.error(e);process.exit(1)});
