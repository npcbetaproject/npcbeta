const { chromium } = require('playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({headless:true,args:['--no-sandbox']});
 const page = await browser.newPage({viewport:{width:1440,height:900},acceptDownloads:true});
 const errors = [];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('dialog',async d=>d.accept());
 await page.route('http://localhost:8000/**',async route=>{
   const pathname=new URL(route.request().url()).pathname, file='.'+(pathname.endsWith('/')?pathname+'index.html':pathname);
   const ext=file.split('.').pop();
   await route.fulfill({status:fs.existsSync(file)?200:404,contentType:({js:'text/javascript',css:'text/css',json:'application/json',svg:'image/svg+xml',webp:'image/webp',png:'image/png'})[ext]||'text/html',body:fs.existsSync(file)?fs.readFileSync(file):'Not found'});
 });
 await page.goto('http://localhost:8000/docs/');
 await page.waitForSelector('.character-card');
 await page.evaluate(()=>{
  localStorage.setItem('npc-beta-session',JSON.stringify(['harl-mercer','mara-flint','mira-fen','cassian-holt','jory-pike','bess-crowley']));
  localStorage.setItem('npc-beta:generator:v1:session',JSON.stringify([{id:'generated-test',name:'Edwin Ash',professionId:'blacksmith',professionLabel:'Blacksmith',locationId:'tavern-inn',locationLabel:'Tavern / Inn',createdAt:'2026-10-09'}]));
  localStorage.setItem('npc-beta:locations:v1:session',JSON.stringify(['tavern','inn','market-square'].map((id,i)=>({id:'location-'+i,templateId:id,displayName:['The Bent Nail','Silver Fox Inn','Market Square'][i],notes:'Existing notes '+i,settings:['village'],condition:'maintained',createdAt:'2026-10-09'}))));
  location.hash='session';
 });
 await page.reload();
 await page.waitForSelector('#character-grid .session-row');
 await page.waitForFunction(()=>locationLibrary.templates);
 assert.equal(await page.locator('#character-grid .session-row').count(),7);
 assert.equal(await page.locator('#session-location-list .session-row').count(),3);
 assert(await page.locator('#session-active-scene').isVisible());
 assert(await page.locator('#session-scene-content .session-scene-hero img').isVisible(), 'Scene artwork visible');
 // Location artwork covers the entire tile, not a small left-side thumbnail.
 const tile=page.locator('#session-location-list [data-entry-id="location-0"]');
 const tileArt=tile.locator('.session-location-tile-artwork');
 assert(await tileArt.count()===1);
 const tileLayout=await tile.evaluate(n=>{const a=n.querySelector('.session-location-tile-artwork');const r=n.getBoundingClientRect(),v=a.getBoundingClientRect();return {position:getComputedStyle(a).position, fullWidth:Math.abs(r.width-v.width)<3,fullHeight:Math.abs(r.height-v.height)<3}});
 assert.equal(tileLayout.position,'absolute');
 assert(tileLayout.fullWidth&&tileLayout.fullHeight,'Tile artwork covers card bounds');
 // The central scene artwork opens existing location details and closes with Escape.
 await page.locator('#session-active-scene .session-scene-hero-open').click();
 assert.equal(await page.locator('#detail-panel').getAttribute('aria-hidden'),'false');
 assert.match(await page.locator('.detail-content h2').innerText(),/The Bent Nail/);
 await page.keyboard.press('Escape');
 assert.equal(await page.locator('#detail-panel').getAttribute('aria-hidden'),'true');

 assert(await page.locator('#session-board #character-grid').evaluate(n=>getComputedStyle(n).display)==='flex','Cast uses compact vertically scrolling cards');
 const order=await page.locator('#session-board .session-board-columns > .session-column').evaluateAll(nodes=>nodes.map(n=>{const r=n.getBoundingClientRect();return {top:r.top,left:r.left}}));
 assert(order[0].left < order[1].left && order[1].left < order[2].left,'Locations, scene and cast appear in three columns');
 const menu=page.locator('#session-location-list [data-entry-id="location-0"] .session-location-menu-trigger');
 await menu.click();
 assert(await page.locator('#session-location-list [data-entry-id="location-0"] [data-session-action=pin]').isVisible(),'Pin accessible via menu');
 assert(await page.locator('#session-location-list [data-entry-id="location-0"] [data-session-action=remove]').isVisible(),'Remove accessible via menu');
 await menu.click();
 assert.match(await page.locator('#session-scene-content').innerText(),/The Bent Nail/);
 assert.match(await page.locator('#session-adding-to').innerText(),/The Bent Nail/);
 const firstBackdrop=await page.locator('#session-scene-backdrop img').getAttribute('src');
 await page.locator('[data-entry-id="location-1"] .session-row-open').click();
 assert.match(await page.locator('#session-scene-content').innerText(),/Silver Fox Inn/);
 assert.match(await page.locator('#session-adding-to').innerText(),/Silver Fox Inn/);
 const secondBackdrop=await page.locator('#session-scene-backdrop img').getAttribute('src');
 assert.notEqual(firstBackdrop,secondBackdrop);
 await page.locator('#session-scene-content [data-location-field=notes]').fill('Scene-focused note survives reload');
 await page.locator('[data-entry-id="mira-fen"] [data-session-action=assign]').click();
 assert.match(await page.locator('#session-scene-content .location-cast').innerText(),/Mira/);
 assert.equal(await page.locator('#session-location-list [data-entry-id="location-1"] .session-location-npc-count').innerText(),'1 NPC');
 assert.equal(await page.locator('#session-location-list [data-entry-id="location-1"] .session-location-npc-mini-card').count(),0,'Location list contains no NPC mini-cards');
 assert(await page.locator('#session-location-list [data-entry-id="location-1"] [data-session-action=quick-active]').isVisible());
 assert(await page.locator('#session-location-list [data-entry-id="location-1"] [data-session-action=quick-delete]').isVisible());
 assert(await page.locator('#session-location-list [data-entry-id="location-1"] [data-session-action=quick-details]').isVisible());
 assert(await page.locator('#session-location-list [data-entry-id="location-1"] [data-session-action=up]').isVisible());
 assert(await page.locator('#session-location-list [data-entry-id="location-1"] [data-session-action=down]').isVisible());
 await page.reload(); await page.waitForSelector('#character-grid .session-row'); await page.waitForFunction(()=>locationLibrary.templates);
 assert.match(await page.locator('#session-adding-to').innerText(),/Silver Fox Inn/);
 assert.equal(await page.locator('#session-scene-content [data-location-field=notes]').inputValue(),'Scene-focused note survives reload');
 assert.equal(await page.locator('#session-scene-content .location-cast-member').count(),1);
 await page.locator('#session-scene-content .session-unassign-button').click();
 assert.equal(await page.locator('#session-scene-content .location-cast-member').count(),0);
 assert.equal(await page.locator('[data-entry-id="mira-fen"]').count(),1);
 await page.locator('[data-entry-id="mira-fen"] .session-row-open').click();
 assert.match(await page.locator('.detail-content h2').innerText(),/Mira Fen/);
 await page.keyboard.press('Escape');
 await page.locator('[data-entry-id="generated-test"] .session-row-open').click();
 assert.match(await page.locator('.detail-content h2').innerText(),/Edwin Ash/); assert(await page.locator('#detail-panel').getAttribute('aria-hidden') === 'false');
 await page.keyboard.press('Escape');
 await page.locator('[data-entry-id="location-2"] .session-row-open').click();
 assert.match(await page.locator('#session-adding-to').innerText(),/Market Square/);
 await page.locator('#session-search').fill('blacksmith');
 assert(await page.locator('#character-grid .session-row').count());
 await page.locator('#session-clear-search').click();
 // Assigned characters are compact mini-cards: circular portraits and
 // name/profession on the same line, up to three across on desktop.
 for(const npc of ['mira-fen','generated-test','cassian-holt']) {
   await page.locator(`[data-entry-id="${npc}"] [data-session-action=assign]`).click();
 }
 const sceneCards=page.locator('#session-active-scene .location-cast-member');
 assert.equal(await sceneCards.count(),3);
 assert.equal(await page.locator('#session-active-scene .session-scene-member-copy').count(),3);
 assert(await page.locator('#session-active-scene .session-scene-member-role').first().isVisible());
 const rows=await sceneCards.evaluateAll(nodes=>nodes.map(n=>({top:Math.round(n.getBoundingClientRect().top),width:n.getBoundingClientRect().width})));
 assert(rows.every(r=>r.top===rows[0].top),'Three NPC mini-cards share one desktop row');
 assert(rows.every(r=>r.width>=145),'Mini-cards retain adequate width');
 assert(await page.locator('#session-active-scene .location-cast-portrait').first().evaluate(n=>getComputedStyle(n).borderRadius)==='50%');
 fs.mkdirSync('project/screenshots',{recursive:true});
 await page.screenshot({path:'project/screenshots/session-scene-desktop.png',fullPage:true});
 for(const width of [320,390,760,768,1024,1440]){
   await page.setViewportSize({width,height:844});
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), 'Horizontal overflow at '+width);
   assert(await page.locator('#session-active-scene').isVisible(),'Active scene hidden at '+width);
   assert(await page.locator('#session-locations').isVisible(),'Locations hidden at '+width);
   assert(await page.locator('#session-npc-column').isVisible(),'Cast hidden at '+width);
 }
 await page.setViewportSize({width:390,height:844});
 const boxes=await page.locator('#session-board .session-board-columns > .session-column').evaluateAll(nodes=>nodes.map(n=>{const r=n.getBoundingClientRect();return {top:r.top,bottom:r.bottom,left:r.left,right:r.right}}));
 assert(boxes[0].top<boxes[1].top && boxes[1].top<boxes[2].top,'Incorrect mobile stacked order');
 await page.screenshot({path:'project/screenshots/session-scene-mobile.png',fullPage:true});
 // Edge cases: oversized names, an image that fails, and a session without locations.
 await page.evaluate(()=>{
   const active=locationLibrary.instances.find(item=>item.id===sessionLocationCast.activeLocationId);
   active.displayName='An Extremely Long Name for the Market Square and the Traveling Circus That Must Wrap Without Pushing Any Controls Outside Their Panels';
   const template=locationLibrary.templates.find(item=>item.id===active.templateId);
   template.image='images/locations/intentional-test-missing.webp';
   renderSessionBoard();
 });
 await page.waitForFunction(()=>!document.querySelector('#session-scene-backdrop').classList.contains('has-artwork'));
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.match(await page.locator('#session-adding-to').innerText(),/Extremely Long Name/);
 await page.evaluate(()=>{locationLibrary.instances=[]; renderSessionBoard();});
 assert.match(await page.locator('#session-scene-content').innerText(),/Choose or add a location/);
 assert.equal(await page.locator('#session-scene-backdrop.has-artwork').count(),0);
 assert.deepEqual(errors,[]);
 await browser.close();
 console.log('PASS: active-scene selection/backdrop, notes, assignment, reload, unassign, profiles, search, responsive layouts, no overflow, screenshots');
})().catch(e=>{console.error(e);process.exit(1)});
