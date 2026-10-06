const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch(); const page = await browser.newPage(); const errors=[];
 page.on('pageerror', e=>errors.push(e.message));
 await page.addInitScript(()=>{localStorage.setItem('npc-beta-saved','["mira-fen"]');localStorage.setItem('npc-beta-session','["cassian-holt"]');});
 await page.goto('http://localhost:8000/docs/');await page.waitForSelector('.character-card');
 const stored=await page.evaluate(()=>({...localStorage}));
 await page.locator('.desktop-nav [data-view="pro"]').click();
 assert(await page.locator('#pro-view').isVisible());assert(await page.locator('.library').isHidden());
 assert.equal(await page.locator('.pro-badge').count(),6);assert.equal(await page.locator('[data-support]').count(),2);
 assert.equal(await page.locator('.desktop-nav [data-view="pro"]').getAttribute('aria-current'),'page');
 assert(await page.locator('#pro-portrait').evaluate(el=>el.complete&&el.naturalWidth>0));
 for(const width of [320,375,760,900,1440]) {
  await page.setViewportSize({width,height:900});
  for(const view of ['pro','library','locations','saved','session','generator']) {
   await page.evaluate(view=>setView(view),view);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${view} overflow at ${width}`);
  }
 }
 await page.setViewportSize({width:375,height:900});await page.locator('.bottom-nav [data-view="pro"]').click();
 const intro=await page.locator('.pro-intro').boundingBox(),art=await page.locator('.pro-art').boundingBox();assert(intro.y<art.y);
 await page.locator('.pro-explore').focus();await page.keyboard.press('Enter');
 assert.equal(await page.evaluate(()=>document.activeElement.id),'pro-features');
 await page.waitForTimeout(500);assert((await page.locator('#pro-features').boundingBox()).y<100);
 assert.deepEqual(await page.evaluate(()=>({...localStorage})),stored);
 await page.screenshot({path:'/tmp/pro-mobile.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>setView('pro'));await page.waitForTimeout(500);await page.screenshot({path:'/tmp/pro-desktop.png',fullPage:true});
 const configured=await browser.newPage();
 await configured.route('**/js/pro.js',async route=>{const res=await route.fetch();await route.fulfill({response:res,body:(await res.text()).replace('supportUrl: ""','supportUrl: "https://example.com/support"').replace('heroImage: ""','heroImage: "images/missing.webp"')});});
 await configured.goto('http://localhost:8000/docs/');await configured.evaluate(()=>setView('pro'));
 assert.equal(await configured.locator('a.pro-support').count(),2);
 for(const link of await configured.locator('a.pro-support').all()) assert.equal(await link.getAttribute('href'),'https://example.com/support');
 await configured.waitForFunction(()=>document.querySelector('#pro-portrait').hidden);assert(await configured.locator('.pro-art-fallback').isVisible());
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS: Pro navigation, mobile priority, six planned cards, support configuration, fallback, keyboard scrolling, storage preservation, all-view overflow at five widths');
})().catch(e=>{console.error(e);process.exit(1);});
