const {JSDOM}=require('jsdom'),fs=require('node:fs'),assert=require('node:assert/strict');
(async()=>{for(const pinValue of [null,'{broken','{"npcs":[],"locations":"bad"}']){
 const dom=new JSDOM(fs.readFileSync('docs/index.html','utf8'),{url:'https://example.com/#session',runScripts:'outside-only'}),w=dom.window;w.scrollTo=()=>{};
 w.localStorage.setItem('npc-beta-session','["mira-fen"]');if(pinValue!==null)w.localStorage.setItem('npc-beta:session-board:v1:pins',pinValue);
 w.fetch=async path=>({ok:true,json:async()=>JSON.parse(fs.readFileSync('docs/'+path))});w.eval(['portraits','character-portraits','generator','locations','generated-visuals','session-board','app'].map(n=>fs.readFileSync('docs/js/'+n+'.js','utf8')).join('\n'));
 await new Promise(r=>setTimeout(r,30));const d=w.document;assert.equal(d.querySelector('.session-pin-button').getAttribute('aria-pressed'),'false');d.querySelector('.session-pin-button').click();assert.equal(w.localStorage.getItem('npc-beta-session'),'["mira-fen"]');
 if(pinValue!==null)assert.equal(w.localStorage.getItem('npc-beta:session-board:v1:pins'),pinValue);else assert.deepEqual(JSON.parse(w.localStorage.getItem('npc-beta:session-board:v1:pins')),{npcs:['mira-fen'],locations:[]});dom.window.close();
}console.log('PASS: legacy entries default unpinned, sidecar storage, malformed pin data preserved without overwrite');})().catch(e=>{console.error(e);process.exit(1)});
