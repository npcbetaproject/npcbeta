const {JSDOM}=require('jsdom'),fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{
 const w=new JSDOM(fs.readFileSync('docs/index.html','utf8'),{url:'https://example.com/npcbeta/',runScripts:'outside-only'}).window;
 w.scrollTo=()=>{};w.localStorage.setItem('npc-beta-saved','["mira-fen"]');w.localStorage.setItem('npc-beta-session','["cassian-holt"]');
 w.fetch=async path=>({ok:true,json:async()=>JSON.parse(fs.readFileSync('docs/'+path))});
 w.eval(['portraits','character-portraits','generator','locations','generated-visuals','app'].map(n=>fs.readFileSync('docs/js/'+n+'.js','utf8')).join('\n')+'\nwindow.test={generator,setView,ensureGenerator};');
 await new Promise(r=>setTimeout(r,20));const t=w.test,d=w.document;t.setView('generator');await t.ensureGenerator();
 const first={...t.generator.current};d.querySelector('#add-roll-next').click();
 assert.equal(t.generator.records.length,1);assert.deepEqual(JSON.parse(JSON.stringify(t.generator.records[0])).name,first.name);
 assert.equal(t.generator.records[0].locationId,first.locationId);assert.equal(t.generator.records[0].professionId,first.professionId);assert.notEqual(t.generator.current.name,first.name);
 d.querySelector('#undo-generator').click();assert.equal(t.generator.current.name,first.name);assert.equal(t.generator.records.length,1);
 d.querySelector('#add-roll-next').click();assert.equal(t.generator.records.length,1);assert.notEqual(t.generator.current.name,first.name);
 d.querySelector('#add-generated').click();assert.equal(t.generator.records.length,2);assert(d.querySelector('#add-generated').disabled);
 assert.equal(JSON.parse(w.localStorage.getItem('npc-beta:generator:v1:session')).length,2);assert.equal(w.localStorage.getItem('npc-beta-saved'),'["mira-fen"]');assert.equal(w.localStorage.getItem('npc-beta-session'),'["cassian-holt"]');
 assert.deepEqual([...d.querySelectorAll('.generator-fields select')].map(x=>x.id),['generator-location','generator-profession']);assert(!d.querySelector('.generator-intro'));
 console.log('PASS: Add & Roll Next, Undo, duplicate prevention, ordinary Add, persisted cast and existing selections');w.close();
})().catch(e=>{console.error(e);process.exit(1)});
