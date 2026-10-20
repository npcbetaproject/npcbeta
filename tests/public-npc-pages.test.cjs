const assert=require('node:assert/strict'),fs=require('node:fs'),{JSDOM}=require('jsdom');
const records=JSON.parse(fs.readFileSync('docs/data/characters/index.json'));
const site=JSON.parse(fs.readFileSync('docs/data/site.json'));
const url=c=>`${site.origin}${site.basePath}npcs/${c.slug}/`;
const scripts=['portraits','character-portraits','generator','locations','pro','generated-visuals','session-board','npc-urls','app'];
(async()=>{
assert.equal(new Set(records.map(c=>c.slug)).size,records.length);
const initial=new JSDOM(fs.readFileSync('docs/index.html','utf8')).window.document;
for(const c of records){
 assert(initial.querySelector(`a[href="npcs/${c.slug}/"]`));
 const html=fs.readFileSync(`docs/npcs/${c.slug}/index.html`,'utf8'),dom=new JSDOM(html,{url:url(c),runScripts:'outside-only'}),w=dom.window,d=w.document;
 assert.equal(d.querySelectorAll('h1').length,1);assert.equal(d.querySelector('h1').textContent,c.name);
 assert(d.body.textContent.includes(c.summary));assert(d.body.textContent.includes(c.tableNote));assert(d.body.textContent.includes(c.adventureHook));
 assert.equal(d.querySelector('[rel=canonical]').href,url(c));assert.equal(d.querySelector('[property="og:url"]').content,url(c));
 assert(d.querySelector('[property="og:image"]').content.startsWith(site.origin+site.basePath+'images/'));assert(d.querySelector('meta[name=description]').content);
 assert(d.querySelector('title').textContent.includes(c.name));
 w.localStorage.setItem('npc-beta-session','["cassian-holt"]');w.localStorage.setItem('npc-beta:session-board:v1:location-cast','{"keep":true}');
 w.eval(fs.readFileSync('docs/js/npc-page.js','utf8'));d.querySelector('#npc-add-session').click();d.querySelector('#npc-add-session').click();
 const ids=JSON.parse(w.localStorage.getItem('npc-beta-session'));assert.equal(ids.filter(id=>id===c.id).length,1);assert(ids.includes('cassian-holt'));assert.equal(w.localStorage.getItem('npc-beta:session-board:v1:location-cast'),'{"keep":true}');
 // Refresh initialization reads the same collection, with no new identities.
 w.eval(fs.readFileSync('docs/js/npc-page.js','utf8'));assert(d.querySelector('#npc-add-session').disabled);w.close();
}
const w=new JSDOM(fs.readFileSync('docs/index.html','utf8'),{url:site.origin+site.basePath+'#session',runScripts:'outside-only'}).window;
w.scrollTo=()=>{};w.confirm=()=>true;w.fetch=async p=>({ok:true,json:async()=>JSON.parse(fs.readFileSync('docs/'+p))});
w.localStorage.setItem('npc-beta-session',JSON.stringify([records[0].id]));let copied='';w.navigator.clipboard={writeText:async value=>{copied=value;}};
w.eval(scripts.map(n=>fs.readFileSync('docs/js/'+n+'.js','utf8')).join('\n')+'\nwindow.test={state,openDetail,closeDetail,setView,prepareDetail};');
await new Promise(r=>setTimeout(r,100));const d=w.document,t=w.test;
// Every library portrait must resolve in both the card and expanded popup.
t.setView('library');
for (const c of records) {
 const source=t.state.portraits[c.portraitKey];
 assert(source,c.id+' missing shared portrait mapping');
 if(c.image) assert.equal(source,c.image,c.id+' shared portrait mapping');
 assert(fs.existsSync('docs/'+source),c.id+' portrait asset');
 assert.equal(d.querySelector(`[data-character="${c.id}"] .portrait-wrap img`).getAttribute('src'),source,c.id+' card portrait');
 t.openDetail(c);
 assert.equal(d.querySelector('.detail-portrait').getAttribute('src'),source,c.id+' popup portrait');
 t.closeDetail();
}
t.setView('session');
const before={url:w.location.href,tab:t.state.view,storage:JSON.stringify(w.localStorage),scroll:w.scrollY};
d.querySelector(`[data-entry-id="${records[0].id}"] .session-row-open`).focus();d.querySelector(`[data-entry-id="${records[0].id}"] .session-row-open`).click();assert.equal(d.querySelector('#detail-panel').getAttribute('aria-hidden'),'false');
d.querySelector('.npc-copy-link').click();await new Promise(r=>setTimeout(r,10));assert.equal(copied,url(records[0]));assert.equal(d.querySelector('.npc-share-status').textContent,'Link copied.');
assert.equal(d.querySelector('.npc-full-page').href,copied);assert.equal(d.querySelector('.npc-full-page').target,'_blank');assert.equal(d.querySelector('.npc-full-page').rel,'noopener');
// Focus trap includes the new link and restores the opener.
const opener=d.querySelector(`[data-entry-id="${records[0].id}"] .session-row-open`);
d.querySelector('.back-button').focus();d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Tab',shiftKey:true,bubbles:true,cancelable:true}));assert.equal(d.activeElement,d.querySelector(records[0].tokenImage ? '.npc-token-download' : '.npc-full-page'));
t.closeDetail();assert.equal(d.activeElement,opener);assert.deepEqual({url:w.location.href,tab:t.state.view,storage:JSON.stringify(w.localStorage),scroll:w.scrollY},before);
t.setView('library');d.querySelector(`[data-character="${records[0].id}"]`).click();assert.equal(d.querySelector('#detail-panel').getAttribute('aria-hidden'),'false');
// A full-page addition in another tab updates the existing application collection.
w.localStorage.setItem('npc-beta-session',JSON.stringify([records[0].id,records[1].id]));w.dispatchEvent(new w.StorageEvent('storage',{key:'npc-beta-session'}));assert(t.state.session.has(records[1].id));
t.prepareDetail('Generated character',true);assert(d.querySelector('.npc-share-actions').hidden);w.close();
const bad=new JSDOM(fs.readFileSync(`docs/npcs/${records[0].slug}/index.html`,'utf8'),{url:url(records[0]),runScripts:'outside-only'}).window;bad.localStorage.setItem('npc-beta-session','broken');bad.eval(fs.readFileSync('docs/js/npc-page.js','utf8'));bad.document.querySelector('#npc-add-session').click();assert.equal(bad.localStorage.getItem('npc-beta-session'),'broken');bad.close();
assert(fs.readFileSync('docs/404.html','utf8').includes('noindex'));const sitemap=fs.readFileSync('docs/sitemap.xml','utf8');for(const c of records)assert(sitemap.includes(url(c)));assert(!sitemap.includes('generated-'));
console.log('PASS public pages: server HTML/metadata/directory/sitemap, stable slugs, storage/duplicate safety, popup URL/view/scroll/state preservation, sharing, focus trap, cross-tab updates and generated exclusion');
})().catch(e=>{console.error(e);process.exit(1)});
