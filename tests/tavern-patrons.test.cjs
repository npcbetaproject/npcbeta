const {chromium}=require('playwright'),fs=require('node:fs'),assert=require('node:assert/strict');
const ids=['harl-mercer','mara-flint','jory-pike','bess-crowley'];
const characters=require('../docs/data/characters/index.json');
(async()=>{
const browser=await chromium.launch(process.env.NPC_TEST_CHROME?{executablePath:process.env.NPC_TEST_CHROME,args:['--no-sandbox']}:{});
const page=await browser.newPage(),errors=[];
page.on('pageerror',e=>errors.push(e.message));
if(process.env.NPC_TEST_LOCAL_FILES)await page.route('http://localhost:8000/**',async route=>{
 const path=new URL(route.request().url()).pathname;
 const file='.'+(path.endsWith('/')?path+'index.html':path);
 const contentType=file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.json')?'application/json':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.webp')?'image/webp':'text/html';
 await route.fulfill({status:fs.existsSync(file)?200:404,contentType,body:fs.existsSync(file)?fs.readFileSync(file):'Not found'});
});
await page.addInitScript(()=>{localStorage.setItem('npc-beta-saved','["mira-fen"]');localStorage.setItem('npc-beta-session','["cassian-holt"]');});
await page.goto('http://localhost:8000/docs/');await page.waitForSelector('.character-card');
assert.equal(await page.locator('.character-card').count(),characters.length);
assert.deepEqual(await page.locator('[data-character]').evaluateAll(els=>els.slice(0,4).map(x=>x.dataset.character)),ids);
for(const width of [375,1440]){
 await page.setViewportSize({width,height:1000});
 await page.evaluate(()=>{state.query='';elements.search.value='';state.roles.clear();state.locations.clear();setView('library');});
 for(const id of ids){
  const card=page.locator(`[data-character="${id}"]`);
  await card.locator('img').evaluate(img=>img.decode());
  assert.deepEqual(await card.locator('img').evaluate(img=>[img.naturalWidth,img.naturalHeight]),[960,960]);
  assert.equal(await card.locator('img').evaluate(img=>getComputedStyle(img).objectFit),'contain');
  await card.click();await page.locator('.detail-portrait').evaluate(img=>img.decode());
  assert.equal(await page.locator('.detail-portrait').evaluate(img=>getComputedStyle(img).objectFit),'contain');
  assert.match(await page.locator('.detail-meta').textContent(),/Human/);
  assert.equal(await page.locator('.detail-summary').textContent(),characters.find(x=>x.id===id).summary);
  assert.equal(await page.locator('.table-note').textContent(),characters.find(x=>x.id===id).tableNote);
  assert.equal(await page.locator('.adventure-hook').textContent(),characters.find(x=>x.id===id).adventureHook);
  assert.equal(await page.locator('.detail-scroll').evaluate(el=>el.scrollTop),0);
  await page.locator('.detail-scroll').evaluate(el=>{el.scrollTop=el.scrollHeight;});
  await page.locator('.back-button').click();await card.click();
  await page.waitForFunction(()=>{const r=document.querySelector('#detail-panel').getBoundingClientRect();return Math.abs(r.left-(innerWidth-r.width))<1;});
  assert.equal(await page.locator('.detail-scroll').evaluate(el=>el.scrollTop),0);
  if(width===1440 || id==='bess-crowley'){fs.mkdirSync('project/screenshots',{recursive:true});await page.screenshot({path:`project/screenshots/tavern-patrons-${id}-${width}.png`,animations:'disabled'});}
  await page.locator('.back-button').click();
  await page.waitForFunction(()=>document.querySelector('#detail-panel').getBoundingClientRect().left>=innerWidth);
 }
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`);
 fs.mkdirSync('project/screenshots',{recursive:true});await page.screenshot({path:`project/screenshots/tavern-patrons-${width}.png`});
}
// Search and the actual combined filter controls must find the new patrons.
await page.locator('#character-search').fill('Poacher');
assert.deepEqual(await page.locator('[data-character]').evaluateAll(els=>els.map(x=>x.dataset.character)),['jory-pike']);
await page.locator('#character-search').fill('');
await page.locator('[data-filter="role"][value="workers-services"]').check();
await page.locator('[data-filter="location"][value="settlements"]').check();
for(const id of ids)assert.equal(await page.locator(`[data-character="${id}"]`).count(),1);
await page.locator('[data-all-roles]').check();
await page.locator('[data-filter="role"][value="underworld"]').check();
assert.deepEqual(await page.locator('[data-character]').evaluateAll(els=>els.map(x=>x.dataset.character)),['jory-pike','nessa-vale']);
await page.locator('[data-filter="location"][value="wilderness"]').check();
await page.locator('[data-filter="location"][value="settlements"]').uncheck();
assert.deepEqual(await page.locator('[data-character]').evaluateAll(els=>els.map(x=>x.dataset.character)),['jory-pike']);
await page.locator('#filter-panel .clear-filters').click();
for(const id of ids){await page.locator(`[data-character="${id}"]`).click();await page.locator('.detail-save').click();await page.locator('.session-button').click();await page.locator('.back-button').click();}
await page.locator('nav .nav-link[data-view="saved"]').click();
assert.equal(await page.locator('.character-card').count(),5);
assert.equal(await page.locator('[data-character="mira-fen"]').count(),1);
await page.locator('nav .nav-link[data-view="session"]').click();
assert.equal(await page.locator('#character-grid .cast-entry').count(),5);
for(const id of ids)assert.equal(await page.locator(`#character-grid img[src$="/${id}.webp"]`).count(),1);
const stored=await page.evaluate(()=>({saved:JSON.parse(localStorage.getItem('npc-beta-saved')),session:JSON.parse(localStorage.getItem('npc-beta-session'))}));
assert.deepEqual(stored.saved,['mira-fen',...ids]);assert.deepEqual(stored.session,['cassian-holt',...ids]);
assert.deepEqual(errors,[]);await browser.close();
console.log('PASS: new pack first, desktop/mobile images and profiles, complete content, profile scroll reset, search, combined filters, Saved/Session and existing selections');
})().catch(e=>{console.error(e);process.exit(1)});
