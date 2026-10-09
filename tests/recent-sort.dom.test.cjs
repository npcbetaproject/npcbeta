const {JSDOM}=require('jsdom'),fs=require('fs'),assert=require('node:assert/strict');
(async()=>{
const w=new JSDOM(fs.readFileSync('docs/index.html','utf8'),{url:'https://example.com/',runScripts:'outside-only'}).window;
w.scrollTo=()=>{};w.localStorage.setItem('npc-beta-saved','["mira-fen"]');w.localStorage.setItem('npc-beta-session','["cassian-holt"]');
w.fetch=async p=>({ok:true,json:async()=>JSON.parse(fs.readFileSync('docs/'+p))});
w.eval(['portraits','character-portraits','generator','locations','generated-visuals','app'].map(p=>fs.readFileSync('docs/js/'+p+'.js','utf8')).join('\n')+'\nwindow.test={state,visibleCharacters,comparePublished,setView,ensureLocations,visibleLocations};');
await new Promise(r=>setTimeout(r,20));const t=w.test,d=w.document;
assert.equal(t.state.sort,'recent');assert.deepEqual(Array.from(t.visibleCharacters().slice(0,4),x=>x.id),['harl-mercer','mara-flint','jory-pike','bess-crowley']);
assert.equal(t.comparePublished({}, {publishedAt:'2026-10-07T00:00:00Z'})>0,true);assert.equal(t.comparePublished({publishedAt:'invalid'},{}),0);
d.querySelector('#character-sort').value='name';d.querySelector('#character-sort').dispatchEvent(new w.Event('change'));assert.equal(t.visibleCharacters()[0].name,'Aretha Frostcrest');
t.setView('locations');await t.ensureLocations();assert.deepEqual(Array.from(t.visibleLocations().slice(0,5),x=>x.id),['wizards-tower','ship','mine-quarry','academy-library','traveling-carnival']);
const select=d.querySelector('#location-sort');select.value='name';select.dispatchEvent(new w.Event('change'));assert.equal(t.visibleLocations()[0].id,'abandoned-logging-camp');
select.value='recent';select.dispatchEvent(new w.Event('change'));d.querySelector('[data-template-id="ritual-chamber"] button').click();t.setView('session');assert.equal(d.querySelector('input[data-location-field="displayName"]').value,'Ritual Chamber');
assert.equal(w.localStorage.getItem('npc-beta-saved'),'["mira-fen"]');assert.equal(w.localStorage.getItem('npc-beta-session'),'["cassian-holt"]');w.close();console.log('PASS: recent defaults, pack order, date fallback, name sorting, dungeon Session and existing storage');
})().catch(e=>{console.error(e);process.exit(1)});
