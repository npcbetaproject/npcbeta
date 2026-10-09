const {JSDOM}=require('jsdom'), fs=require('node:fs'), assert=require('node:assert/strict');
const characters=JSON.parse(fs.readFileSync('docs/data/characters/index.json'));
const config=JSON.parse(fs.readFileSync('docs/data/characters/role-categories.json'));
const expected=['adventurers','merchants-crafters','hospitality-entertainment','scholars-magic','faith-healing','military-authority','workers-services','underworld'];
(async()=>{
const seed={
 'npc-beta-saved':JSON.stringify(['mira-fen','nessa-vale','seren-dawnsong']),
 'npc-beta-session':JSON.stringify(['mira-fen','nessa-vale','seren-dawnsong']),
 'npc-beta:generator:v1:session':JSON.stringify([
 {id:'generated-blacksmith',name:'Personal Smith',locationId:'village',professionId:'blacksmith',locationLabel:'Village',professionLabel:'Blacksmith',createdAt:'2026-10-07T02:00:00Z'},
 {id:'generated-cultist',name:'Personal Cultist',locationId:'ruins',professionId:'cultist',locationLabel:'Ruins',professionLabel:'Cultist',createdAt:'2026-10-07T02:00:00Z'},
 {id:'generated-unknown',name:'Legacy Person',locationId:'village',professionId:'old-profession',locationLabel:'Village',professionLabel:'Old profession',createdAt:'2026-10-07T02:00:00Z'}])};
const w=new JSDOM(fs.readFileSync('docs/index.html','utf8'),{url:'https://example.com/npcbeta/',runScripts:'outside-only'}).window;
w.scrollTo=()=>{};w.fetch=async path=>({ok:true,json:async()=>JSON.parse(fs.readFileSync('docs/'+path))});
for(const [key,value]of Object.entries(seed))w.localStorage.setItem(key,value);
w.eval(['portraits','character-portraits','generator','locations','generated-visuals','session-board','app'].map(n=>fs.readFileSync('docs/js/'+n+'.js','utf8')).join('\n')+'\nwindow.test={state,visibleCharacters,visibleSessionEntries,validateRoleCategories,setView,render,openDetail};');
await new Promise(r=>setTimeout(r,30));const t=w.test,d=w.document;
assert.deepEqual(config.categories.map(x=>x.id),expected);
assert.deepEqual([...d.querySelectorAll('#role-filters [data-filter="role"]')].map(x=>x.value),expected);
assert.deepEqual([...d.querySelectorAll('#role-filters span')].map(x=>x.textContent),['All Roles',...config.categories.map(x=>x.label)]);
t.validateRoleCategories(config,characters);
assert.throws(()=>t.validateRoleCategories(config,[{...characters[0],roleCategoryIds:[]}]),/Invalid NPC/);
assert.throws(()=>t.validateRoleCategories(config,[{...characters[0],roleCategoryIds:['villain']}]),/Invalid NPC/);
assert.throws(()=>t.validateRoleCategories(config,[{...characters[0],roleCategoryIds:['adventurers','adventurers']}]),/Invalid NPC/);
assert.throws(()=>t.validateRoleCategories({...config,categories:[...config.categories,config.categories[0]]},characters),/Duplicate/);
const options=JSON.parse(fs.readFileSync('docs/data/generator/options.json'));
assert.deepEqual(Object.keys(config.generatorProfessionCategoryIds).sort(),options.professions.map(x=>x.id).sort());
const all=d.querySelector('[data-all-roles]');assert(all.checked);assert.equal(t.visibleCharacters().length,characters.length);
assert.equal(t.state.sort,'recent');const first=t.visibleCharacters()[0].id;
const select=(id,on=true)=>{const el=d.querySelector(`#role-filters input[value="${id}"]`);el.checked=on;el.dispatchEvent(new w.Event('change',{bubbles:true}));};
const ids=()=>Array.from(t.visibleCharacters(),x=>x.id).sort();
for(const id of expected){all.click();select(id);assert.deepEqual(ids(),characters.filter(x=>x.roleCategoryIds.includes(id)).map(x=>x.id).sort());assert(!all.checked);}
all.click();select('merchants-crafters');select('faith-healing');assert.equal(ids().filter(x=>x==='mira-fen').length,1);assert(ids().includes('brother-alden'));assert(ids().includes('norzor-stormfield'));
select('merchants-crafters',false);select('faith-healing',false);assert(all.checked);assert.equal(t.visibleCharacters().length,characters.length);assert.equal(t.visibleCharacters()[0].id,first);
select('merchants-crafters');const search=d.querySelector('#character-search');search.value='blacksmith';search.dispatchEvent(new w.Event('input'));assert.deepEqual(ids(),['norzor-stormfield']);assert.match(d.querySelector('#results-note').textContent,/1 character/);assert.equal(d.querySelector('.role-line span').textContent,'Blacksmith');
t.openDetail(t.state.characters.find(x=>x.id==='norzor-stormfield'));assert.match(d.querySelector('.detail-meta').textContent,/Blacksmith/);
const loc=d.querySelector('#location-filters input[value="wilderness"]');loc.checked=true;loc.dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(t.visibleCharacters().length,0);loc.checked=false;loc.dispatchEvent(new w.Event('change',{bubbles:true}));
search.value='';search.dispatchEvent(new w.Event('input'));select('merchants-crafters',false);select('scholars-magic');t.setView('saved');assert.deepEqual(ids(),['seren-dawnsong']);
t.setView('session');assert.deepEqual(Array.from(t.visibleSessionEntries(),x=>x.id),['seren-dawnsong']);
all.click();select('merchants-crafters');assert.deepEqual(Array.from(t.visibleSessionEntries(),x=>x.id).sort(),['generated-blacksmith','mira-fen']);
all.click();select('underworld');assert.deepEqual(Array.from(t.visibleSessionEntries(),x=>x.id),['nessa-vale']);assert(!config.generatorProfessionCategoryIds.cultist.includes('underworld'));
all.click();assert.equal(t.visibleSessionEntries().length,6);assert.equal(d.querySelectorAll('#character-grid .session-row').length,6);
select('underworld');d.querySelector('.clear-filters').click();assert(all.checked);assert.equal(t.visibleSessionEntries().length,6);
const sort=d.querySelector('#character-sort');sort.value='role';sort.dispatchEvent(new w.Event('change'));select('faith-healing');assert.equal(t.state.sort,'role');all.click();assert.equal(t.state.sort,'role');
for(const [key,value]of Object.entries(seed))assert.equal(w.localStorage.getItem(key),value);
const toggle=d.querySelector('.filter-toggle');toggle.click();assert.equal(toggle.getAttribute('aria-expanded'),'true');assert(d.querySelector('#filter-panel').classList.contains('open'));select('faith-healing');assert(d.querySelector('#role-filters input[value="faith-healing"]').checked);
w.close();console.log('PASS: eight configured categories, all 16 assignments, invalid IDs, overlaps/OR, All Roles, AND search/location, professions, counts, Saved/Session, generated mappings, sort and storage preservation');
})().catch(e=>{console.error(e);process.exit(1)});
