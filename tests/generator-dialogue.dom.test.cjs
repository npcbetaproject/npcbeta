const {JSDOM}=require('jsdom');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const html=fs.readFileSync('docs/index.html','utf8');
const options=JSON.parse(fs.readFileSync('docs/data/generator/options.json'));
const names=JSON.parse(fs.readFileSync('docs/data/generator/names.json'));
const initialStorage={'npc-beta-saved':'["mira-fen"]','npc-beta-session':'["cassian-holt"]'};
async function setup(storage=initialStorage, failure){
 const dom=new JSDOM(html,{url:'http://localhost/npcbeta/',runScripts:'outside-only'});const w=dom.window;
 w.scrollTo=()=>{};w.fetch=async url=>({ok: !((failure==='data'&&url.includes('generator'))||(failure==='dialogue'&&url.includes('dialogue.json'))),json:async()=>JSON.parse(fs.readFileSync('docs/'+url,'utf8'))});
 for(const [key,value]of Object.entries(storage))w.localStorage.setItem(key,value);
 if(failure==='storage'){w.Storage.prototype.getItem=()=>{throw Error('blocked')};w.Storage.prototype.setItem=()=>{throw Error('quota')};}
 w.eval(fs.readFileSync('docs/js/generator.js','utf8')+'\n'+fs.readFileSync('docs/js/locations.js','utf8')+'\n'+fs.readFileSync('docs/js/generated-visuals.js','utf8')+'\n'+fs.readFileSync('docs/js/session-board.js','utf8')+'\n'+fs.readFileSync('docs/js/app.js','utf8')+'\nwindow.test={generator,state,chooseDifferent,rollGenerator,supportedResult,validateGeneratorData,setView,ensureGenerator,sessionEntries,visibleSessionEntries,copyName,writeStorage};');
 await new Promise(r=>setTimeout(r,10)); w.test.setView('generator');await w.test.ensureGenerator();return dom;
}
(async()=>{
 const dialogue=JSON.parse(fs.readFileSync('docs/data/generator/dialogue.json'));
 assert.equal(Object.values(dialogue).reduce((n,rows)=>n+Object.keys(rows).length,0),156);
 const dom=await setup(),w=dom.window,t=w.test;
 const preview=()=>w.document.querySelector('#generator-dialogue');
 const check=()=>{const r=t.generator.current;assert.equal(preview().textContent,dialogue[r.locationId][r.professionId]);assert.equal(preview().hidden,false);};
 for(const location of options.locations){
  t.rollGenerator('location',location.id);
  for(const profession of location.professionIds){t.rollGenerator('profession',profession);check();}
 }
 const previous=JSON.parse(JSON.stringify(t.generator.current));
 t.rollGenerator('all');check();w.document.querySelector('#undo-generator').click();
 assert.deepEqual(JSON.parse(JSON.stringify(t.generator.current)),previous);check();
 t.rollGenerator('name');check();
 const persisted={};for(let i=0;i<w.localStorage.length;i++){const k=w.localStorage.key(i);persisted[k]=w.localStorage.getItem(k);}
 const restored=await setup(persisted);assert.equal(restored.window.document.querySelector('#generator-dialogue').textContent,preview().textContent);restored.window.close();
 // A missing lookup must leave the generator usable and clear stale preview text.
 t.generator.dialogue=null;t.rollGenerator('name');assert(preview().hidden);assert.equal(preview().textContent,'');
 dom.window.close();
 const missing=await setup({},'dialogue');assert(missing.window.test.generator.current);missing.window.close();
 console.log('PASS all 156 dialogue pairings, reroll, Undo, reload and missing lookup');
})().catch(error=>{console.error(error);process.exit(1)});
