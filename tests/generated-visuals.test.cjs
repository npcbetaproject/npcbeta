const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const launch=process.env.NPC_TEST_CHROME?{executablePath:process.env.NPC_TEST_CHROME,args:['--no-sandbox','--disable-dev-shm-usage']}:{};
 const browser=await chromium.launch(launch),page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 if(process.env.NPC_TEST_LOCAL_FILES) await page.route('http://localhost:8000/**',async route=>{const pathname=new URL(route.request().url()).pathname;const file='.'+(pathname.endsWith('/')?pathname+'index.html':pathname);const ext=file.split('.').pop();const types={js:'text/javascript',css:'text/css',json:'application/json',webp:'image/webp',svg:'image/svg+xml',html:'text/html'};await route.fulfill({status:fs.existsSync(file)?200:404,contentType:types[ext]||'application/octet-stream',body:fs.existsSync(file)?fs.readFileSync(file):'Not found'});});
 await page.addInitScript(()=>{localStorage.setItem('npc-beta-session','["cassian-holt"]');if(!localStorage.getItem('npc-beta:generator:v1:session'))localStorage.setItem('npc-beta:generator:v1:session',JSON.stringify([{id:'generated-old',name:'Old Friend',locationId:'tavern-inn',professionId:'innkeeper',locationLabel:'Old location label',professionLabel:'Old role label',createdAt:'2026-01-01'}]));});
 await page.goto('http://localhost:8000/docs/');await page.waitForSelector('.character-card');await page.evaluate(()=>setView('session'));await page.waitForSelector('.generated-npc-portrait');
 for(const width of [320,375,760,900,1440]){
  await page.setViewportSize({width,height:900});
  for(const view of ['generator','session']){
   await page.evaluate(v=>setView(v),view);
   if(view==='generator'){
    const opener=page.locator('#generator-visual-preview');assert((await opener.evaluate(el=>el.getBoundingClientRect().width))>=(width<=360?104:width<=760?120:160));
    await opener.click();assert(await page.locator('#detail-panel').isVisible());assert.equal(await page.locator('#detail-panel').getAttribute('aria-hidden'),'false');
    assert.equal(await page.locator('#detail-panel .detail-kind').textContent(),'Generated NPC');assert(await page.locator('#detail-panel .generated-npc-portrait').isVisible());
    assert.equal(await page.locator('#detail-panel .generated-npc-portrait').evaluate(el=>getComputedStyle(el).filter),'grayscale(1)');
    assert.equal(await page.locator('#detail-panel .detail-facts').isVisible(),false);assert.equal(await page.locator('#detail-panel .npc-share-actions').isVisible(),false);
    assert(await page.evaluate(()=>document.querySelector('.detail-scroll').scrollWidth<=document.querySelector('.detail-scroll').clientWidth));
    await page.keyboard.press('Escape');assert(await opener.evaluate(el=>el===document.activeElement));
   }
   const root=view==='generator'?'#cast-list':'#character-grid';
   const portrait=page.locator(root+' .generated-npc-portrait').first();await portrait.scrollIntoViewIfNeeded();assert(await portrait.isVisible());await portrait.evaluate(im=>im.decode());
   assert.equal(await portrait.evaluate(im=>im.naturalWidth),280);assert.equal(await portrait.evaluate(im=>getComputedStyle(im).filter),'grayscale(1)');
   assert.equal(await page.locator(root+' .generated-npc-silhouette').first().isVisible(),false);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${view} overflow at ${width}`);
  }
 }
 await page.evaluate(()=>setView('generator'));await page.selectOption('#generator-location','marketplace');await page.selectOption('#generator-profession','merchant');
 await page.locator('#generated-name').click();assert.equal(await page.locator('#detail-title').textContent(),await page.locator('#generated-name').textContent());await page.locator('.back-button').click();
 await page.locator('#cast-list .cast-portrait-open').first().click();assert.equal(await page.locator('#detail-title').textContent(),'Old Friend');await page.locator('.back-button').click();
 const preview=page.locator('#generator-visual-preview .generated-npc-portrait');assert((await preview.getAttribute('src')).includes('/merchants/'));
 await page.selectOption('#generator-profession','guard');assert((await preview.getAttribute('src')).includes('/guards/'));
 await page.locator('#add-generated').click();const id=await page.evaluate(()=>generator.records.at(-1).portraitId);await page.reload();await page.evaluate(()=>setView('session'));await page.waitForSelector('.generated-npc-portrait');assert.equal(await page.evaluate(()=>generator.records.at(-1).portraitId),id);
 await page.evaluate(()=>{const portrait=document.querySelector('#character-grid .generated-npc-portrait');portrait.dispatchEvent(new Event('error'));});assert(await page.locator('#character-grid .generated-npc-silhouette').first().isVisible());
 await page.reload();await page.evaluate(()=>setView('generator'));await page.waitForSelector('#generator-visual-preview .generated-npc-portrait');
 fs.mkdirSync('project/screenshots',{recursive:true});await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'project/screenshots/generated-npc-popup-desktop.png',fullPage:true});await page.setViewportSize({width:375,height:1000});await page.screenshot({path:'project/screenshots/generated-npc-popup-mobile.png',fullPage:true});
 await page.locator('#generator-visual-preview').click();await page.waitForFunction(()=>document.querySelector('#detail-panel').getBoundingClientRect().right<=innerWidth+1);await page.screenshot({path:'project/screenshots/generated-npc-card-mobile.png',fullPage:true});assert.deepEqual(errors,[]);await browser.close();console.log('PASS: portrait decoding, grayscale, five responsive widths, session-first loading, profession changes, persistence, error fallback, no overflow or browser errors');
})().catch(e=>{console.error(e);process.exit(1)});
