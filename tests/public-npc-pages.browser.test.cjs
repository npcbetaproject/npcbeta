const {chromium}=require('playwright'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const site=require('../docs/data/site.json'),records=require('../docs/data/characters/index.json'),base=site.origin+site.basePath;
(async()=>{
 const browser=await chromium.launch({args:['--no-sandbox']});
 const context=await browser.newContext({permissions:['clipboard-read','clipboard-write']});
 await context.route(base+'**',async route=>{
  let relative=new URL(route.request().url()).pathname.slice(site.basePath.length);if(relative.endsWith('/')||!relative)relative+='index.html';
  const file=path.resolve('docs',relative);if(!file.startsWith(path.resolve('docs')+path.sep))return route.abort();
  const type={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.png':'image/png'}[path.extname(file)]||'text/plain';
  await route.fulfill({status:fs.existsSync(file)?200:404,contentType:type,body:fs.readFileSync(fs.existsSync(file)?file:'docs/404.html')});
 });
 const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base);await page.waitForSelector('[data-character]');
 await page.evaluate(id=>{localStorage.setItem('npc-beta-session',JSON.stringify([id]));localStorage.setItem('npc-beta:session-board:v1:pins','[]');},records[1].id);await page.reload();await page.waitForSelector('[data-character]');
 for(const width of [375,1440]){
  await page.setViewportSize({width,height:900});await page.evaluate(()=>setView('library'));await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';window.scrollTo({top:250,behavior:'instant'});});
  // Card portraits must decode at full size and keep their full framing, including on hover.
  for (const id of [...records.slice(0, 2).map(record => record.id), 'grusk-ironjaw']) {
   const card=page.locator(`[data-character="${id}"]`),img=card.locator('.portrait-wrap img');
   await card.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());await card.hover();
   assert(await img.evaluate(el=>el.naturalWidth===960&&el.naturalHeight===960),id+' full-resolution portrait');
   assert.equal(await img.evaluate(el=>getComputedStyle(el).objectFit),'contain',id+' uncropped card');
   assert.equal(await img.evaluate(el=>getComputedStyle(el).transform),'none',id+' no hover crop');
  }
  await page.locator(`[data-character="${records[0].id}"]`).scrollIntoViewIfNeeded();
  const before=await page.evaluate(()=>({url:location.href,view:state.view,scroll:scrollY,session:localStorage.getItem('npc-beta-session')}));
  await page.locator(`[data-character="${records[0].id}"]`).click();await page.locator('.npc-copy-link').click();await page.getByText('Link copied.',{exact:true}).waitFor();
  assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),base+'npcs/'+records[0].slug+'/');
  const [full]=await Promise.all([context.waitForEvent('page'),page.locator('.npc-full-page').click()]);await full.waitForLoadState();await full.setViewportSize({width,height:900});await full.locator('#npc-add-session').waitFor();
  await full.locator('.npc-page-portrait').evaluate(img=>img.decode());assert.equal(await full.locator('h1').textContent(),records[0].name);
  assert(await full.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await full.reload();await full.locator('#npc-add-session').waitFor();
  // Do not add until popup invariants have been checked.
  await page.locator('.back-button').click();assert.deepEqual(await page.evaluate(()=>({url:location.href,view:state.view,scroll:scrollY,session:localStorage.getItem('npc-beta-session')})),before);
  if(width===375){await full.locator('#npc-add-session').click();await page.waitForFunction(id=>state.session.has(id),records[0].id);await full.reload();await full.waitForSelector('#npc-add-session:disabled');}
  await full.close();await page.evaluate(()=>setView('session'));await page.locator(`[data-entry-id="${records[0].id}"] .session-row-open`).click();await page.locator('.detail-portrait').evaluate(img=>img.decode());
  await page.keyboard.press('Escape');assert.equal(await page.locator('#detail-panel').getAttribute('aria-hidden'),'true');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 }
 // Use a real local HTTP server for downloads: Chromium cancels download requests
 // fulfilled by the synthetic HTTPS route used for the page/navigation assertions.
 const server=require('node:http').createServer((req,res)=>{
  const relative=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\//,'')||'index.html';
  const file=path.resolve('docs',relative);
  if(!file.startsWith(path.resolve('docs')+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
  const type={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.png':'image/png'}[path.extname(file)]||'application/octet-stream';
  res.writeHead(200,{'Content-Type':type});res.end(fs.readFileSync(file));
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 // All public NPC token downloads use the correct asset and filename on mobile and desktop.
 const tokenBase='http://127.0.0.1:'+server.address().port+'/';
 for (const width of [375,1440]) {
  const downloads=await browser.newContext({acceptDownloads:true,viewport:{width,height:900}});
  for (const record of records) {
   if (!record.tokenImage) continue;
   // A fresh tab keeps Chromium's multiple-download permission prompt out of the test.
   const tokenPage=await downloads.newPage();
   await tokenPage.goto(tokenBase); await tokenPage.waitForSelector('[data-character]');
   await tokenPage.evaluate(id=>openDetail(state.characters.find(c=>c.id===id)),record.id);
   const token=tokenPage.locator('.npc-token-download');
   assert(await token.isVisible());
   assert.equal(await token.getAttribute('download'),record.id+'-token.webp');
   await token.locator('img').evaluate(img=>img.decode());
   assert(await token.locator('img').evaluate(img=>img.naturalWidth===280&&img.naturalHeight===280));
   assert(await tokenPage.evaluate(()=>document.querySelector('.detail-summary').compareDocumentPosition(document.querySelector('.npc-share-actions'))&Node.DOCUMENT_POSITION_FOLLOWING));
   console.log('Download token:',width,record.id);
   const [download]=await Promise.all([tokenPage.waitForEvent('download'),token.click()]);
   assert.equal(download.suggestedFilename(),record.id+'-token.webp');
   assert.equal(await download.failure(),null,record.id);
   assert(fs.readFileSync(await download.path()).equals(fs.readFileSync('docs/'+record.tokenImage)));
   await download.delete();
   assert(await tokenPage.evaluate(()=>document.querySelector('.detail-scroll').scrollWidth<=document.querySelector('.detail-scroll').clientWidth));
   await tokenPage.close();
  }
  await downloads.close();
 }
 await new Promise(resolve=>server.close(resolve));
 await page.goto(base+'npcs/not-a-real-npc/');assert.equal(await page.locator('h1').textContent(),'Page not found');assert.deepEqual(errors,[]);await browser.close();console.log('PASS browser: 375/1440 layouts, native popup/link/clipboard/keyboard/scroll behavior, direct refresh, cross-tab sessions and 404');
})().catch(e=>{console.error(e);process.exit(1)});
