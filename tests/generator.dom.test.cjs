const {JSDOM}=require('jsdom');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const html=fs.readFileSync('docs/index.html','utf8');
const options=JSON.parse(fs.readFileSync('docs/data/generator/options.json'));
const names=JSON.parse(fs.readFileSync('docs/data/generator/names.json'));
const initialStorage={'npc-beta-saved':'["mira-fen"]','npc-beta-session':'["cassian-holt"]'};
async function setup(storage=initialStorage, failure){
 const dom=new JSDOM(html,{url:'http://localhost/npcbeta/',runScripts:'outside-only'});const w=dom.window;
 w.scrollTo=()=>{};w.fetch=async url=>({ok: !(failure==='data'&&url.includes('generator')),json:async()=>JSON.parse(fs.readFileSync('docs/'+url,'utf8'))});
 for(const [key,value]of Object.entries(storage))w.localStorage.setItem(key,value);
 if(failure==='storage'){w.Storage.prototype.getItem=()=>{throw Error('blocked')};w.Storage.prototype.setItem=()=>{throw Error('quota')};}
 w.eval(fs.readFileSync('docs/js/generator.js','utf8')+'\n'+fs.readFileSync('docs/js/locations.js','utf8')+'\n'+fs.readFileSync('docs/js/app.js','utf8')+'\nwindow.test={generator,state,chooseDifferent,rollGenerator,supportedResult,validateGeneratorData,setView,ensureGenerator,sessionEntries,visibleSessionEntries,copyName,writeStorage};');
 await new Promise(r=>setTimeout(r,10)); w.test.setView('generator');await w.test.ensureGenerator();return dom;
}
(async()=>{
 const dom=await setup(),w=dom.window,t=w.test;
 const snapshot=()=>JSON.parse(JSON.stringify(t.generator.current));const click=id=>w.document.querySelector(id).click();
 assert.equal(options.locations.length,23);t.validateGeneratorData(options,names);
 assert.throws(()=>t.validateGeneratorData({...options,locations:[{id:'x',label:'x',professionIds:['missing']}]},names));
 assert.equal(t.chooseDifferent(['only'],'only'),'only');
 let before=snapshot();t.rollGenerator('name');assert.notEqual(t.generator.current.name,before.name);assert.equal(t.generator.current.locationId,before.locationId);assert.equal(t.generator.current.professionId,before.professionId);click('#undo-generator');assert.deepEqual(snapshot(),before);assert.equal(w.document.querySelector('#undo-generator').disabled,true);
 for(const location of options.locations){const name=t.generator.current.name;t.rollGenerator('location',location.id);assert(t.supportedResult(t.generator.current));assert.equal(t.generator.current.name,name);assert.equal(w.document.querySelectorAll('#generator-profession option').length,location.professionIds.length);}
 before=snapshot();t.rollGenerator('profession');assert.equal(t.generator.current.name,before.name);assert.equal(t.generator.current.locationId,before.locationId);assert.notEqual(t.generator.current.professionId,before.professionId);
 before=snapshot();t.rollGenerator('location');assert.equal(t.generator.current.name,before.name);assert.notEqual(t.generator.current.locationId,before.locationId);assert(t.supportedResult(t.generator.current));
 before=snapshot();const manual=options.locations.find(l=>l.id===before.locationId).professionIds.find(id=>id!==before.professionId);t.rollGenerator('profession',manual);assert.equal(t.generator.current.professionId,manual);click('#undo-generator');assert.deepEqual(snapshot(),before);
 for(let i=0;i<1000;i++){before=snapshot();t.rollGenerator('all');assert(t.supportedResult(t.generator.current));assert.notEqual(t.generator.current.name,before.name);assert.notEqual(t.generator.current.locationId,before.locationId);}
 const stored=snapshot();click('#add-generated');click('#add-generated');assert.equal(t.generator.records.length,1);assert.equal(w.document.querySelectorAll('#cast-list .cast-entry').length,2);assert.equal(w.document.querySelector('#add-generated').disabled,true);
 w.navigator.clipboard={writeText:async text=>{w.copied=text}};click('#copy-name');await Promise.resolve();assert.equal(w.copied,stored.name);
 t.setView('session');assert.equal(w.document.querySelectorAll('#character-grid .cast-entry').length,2);
 const generated=()=>[...w.document.querySelectorAll('#character-grid .cast-entry')].find(el=>el.querySelector('h3').textContent===stored.name);
 generated().querySelector('button').click();await Promise.resolve();assert.equal(w.copied,stored.name);
 w.document.querySelector('#character-grid .cast-profile').click();assert(w.document.querySelector('#detail-panel').classList.contains('open'));click('.back-button');
 const persisted={};for(let i=0;i<w.localStorage.length;i++){const k=w.localStorage.key(i);persisted[k]=w.localStorage.getItem(k)};
 const refresh=await setup(persisted);assert.deepEqual(JSON.parse(JSON.stringify(refresh.window.test.generator.current)),stored);assert.equal(refresh.window.test.sessionEntries().length,2);refresh.window.close();
 generated().querySelectorAll('button')[1].click();assert.equal(t.generator.records.length,0);assert.deepEqual(snapshot(),stored);assert.equal(w.document.querySelectorAll('#cast-list .cast-entry').length,1);
 t.setView('generator');click('#add-generated');w.document.querySelectorAll('#cast-list .cast-entry')[1].querySelectorAll('button')[1].click();assert.equal(t.generator.records.length,0);
 assert.equal(w.localStorage.getItem('npc-beta-saved'),initialStorage['npc-beta-saved']);assert.equal(w.localStorage.getItem('npc-beta-session'),initialStorage['npc-beta-session']);
 t.state.query='Cassian';assert.equal(t.visibleSessionEntries().length,1);t.state.query='no match';assert.equal(t.visibleSessionEntries().length,0);t.state.query='';
 w.navigator.clipboard.writeText=async()=>{throw Error('denied')};await t.copyName('test');await new Promise(r=>setTimeout(r,30));assert.match(w.document.querySelector('#action-feedback').textContent,/Could not copy/);
 dom.window.close();
 const blocked=await setup({},'storage');blocked.window.document.querySelector('#add-generated').click();assert.equal(blocked.window.test.generator.records.length,1);assert.match(blocked.window.document.querySelector('#storage-warning').textContent,/cannot be saved/);blocked.window.close();
 const bad=await setup({'npc-beta-saved':'{broken','npc-beta-session':'{}','npc-beta:generator:v1:state':'null'});assert(bad.window.test.generator.current);bad.window.test.writeStorage('npc-beta-saved',[]);assert.equal(bad.window.localStorage.getItem('npc-beta-saved'),'{broken');bad.window.close();
 const failed=await setup({},'data');assert.equal(failed.window.document.querySelector('#generator-error').hidden,false);failed.window.close();
 const malicious=await setup({'npc-beta:generator:v1:session':JSON.stringify([{id:'generated-x',name:'<img src=x onerror=alert(1)>',locationId:'forest',professionId:'hunter',locationLabel:'<script>x</script>',professionLabel:'Hunter',createdAt:'2026-01-01'}])});assert.equal(malicious.window.document.querySelectorAll('#cast-list img, #cast-list script').length,0);malicious.window.close();
 console.log('PASS: DOM integration — 23 mappings, 1,000 rolls, reroll isolation, manual changes, undo, session add/copy/remove, duplicate prevention, refresh, legacy data, filters, storage/data failures and safe text');
})().catch(error=>{console.error(error);process.exit(1)});
