const {chromium}=require('playwright'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const ids=['brenna-ironleash','osric-rutledge','tansy-briarwell'];
const records=require('../docs/data/characters/index.json');
(async()=>{
 const launch=process.env.NPC_TEST_CHROME?{executablePath:process.env.NPC_TEST_CHROME,args:['--no-sandbox','--disable-dev-shm-usage']}:{args:['--no-sandbox']};
 const browser=await chromium.launch(launch),page=await browser.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.route('http://localhost:8000/**',async route=>{
  const pathname=new URL(route.request().url()).pathname;
  const file=path.resolve('.'+(pathname.endsWith('/')?pathname+'index.html':pathname));
  const type={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml'}[path.extname(file)]||'text/plain';
  await route.fulfill({status:fs.existsSync(file)?200:404,contentType:type,body:fs.existsSync(file)?fs.readFileSync(file):'Not found'});
 });
 await page.addInitScript(()=>{localStorage.setItem('npc-beta-saved','["mira-fen"]');localStorage.setItem('npc-beta-session','["cassian-holt"]');});
 await page.goto('http://localhost:8000/docs/');await page.waitForSelector('[data-character]');
 assert.deepEqual(await page.locator('[data-character]').evaluateAll(els=>els.slice(0,3).map(x=>x.dataset.character)),ids);
 for(const width of [375,1440]){
  await page.setViewportSize({width,height:1000});
  for(const id of ids){
   const record=records.find(c=>c.id===id),card=page.locator('[data-character="'+id+'"]');
   await card.locator('img').evaluate(img=>img.decode());
   assert.deepEqual(await card.locator('img').evaluate(img=>[img.naturalWidth,img.naturalHeight]),[960,960]);
   assert.equal(await card.locator('img').evaluate(img=>getComputedStyle(img).objectFit),'contain');
   await card.click();await page.locator('.detail-portrait').evaluate(img=>img.decode());
   assert.equal(await page.locator('.detail-portrait').evaluate(img=>getComputedStyle(img).objectFit),'contain');
   assert.equal(await page.locator('.detail-summary').textContent(),record.summary);
   assert.equal(await page.locator('.table-note').textContent(),record.tableNote);
   assert.equal(await page.locator('.adventure-hook').textContent(),record.adventureHook);
   assert.equal(await page.locator('.detail-scroll').evaluate(el=>el.scrollTop),0);
   assert((await page.locator('.npc-full-page').getAttribute('href')).includes('/npcs/'+id+'/'));
   assert(await page.locator('.npc-copy-link').count());
   await page.screenshot({path:'/tmp/'+id+'-'+width+'.png'});
   await page.locator('.back-button').click();
  }
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 }
 for(const id of ids){
  const c=records.find(c=>c.id===id);
  await page.locator('#character-search').fill(c.role);
  assert(await page.locator('[data-character="'+id+'"]').count());
  await page.locator('#character-search').fill('');
  await page.evaluate(c=>{state.roles=new Set(c.roleCategoryIds);state.locations=new Set(c.locationFitCategoryIds);render();},c);
  assert(await page.locator('[data-character="'+id+'"]').count());
  await page.evaluate(()=>{state.roles.clear();state.locations.clear();render();});
  await page.locator('[data-character="'+id+'"]').click();
  await page.locator('.detail-save').click();await page.locator('.session-button').click();assert.equal(await page.locator('#detail-panel').getAttribute('aria-hidden'),'true');
 }
 await page.locator('#saved-filter').check();
 assert.equal(await page.locator('[data-character]').count(),4);
 assert(await page.locator('[data-character="mira-fen"]').count());
 await page.evaluate(()=>setView('session'));
 for(const id of ids)assert(await page.locator('[data-entry-id="'+id+'"]').count());
 const stored=await page.evaluate(()=>({saved:JSON.parse(localStorage.getItem('npc-beta-saved')),session:JSON.parse(localStorage.getItem('npc-beta-session'))}));
 assert.deepEqual(stored.saved,['mira-fen',...ids]);assert.deepEqual(stored.session,['cassian-holt',...ids]);
 assert.deepEqual(errors,[]);await browser.close();
 console.log('PASS: three NPCs first, mobile/desktop portraits and profiles, public-page actions, search, category combinations, Saved filter, Session and existing storage');
})().catch(e=>{console.error(e);process.exit(1)});
