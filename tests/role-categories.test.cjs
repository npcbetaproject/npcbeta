const {chromium}=require('playwright'),assert=require('node:assert/strict');
const characters=require('../docs/data/characters/index.json');
(async()=>{
const browser=await chromium.launch({headless:true});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://localhost:8000/docs/');await page.waitForSelector('.character-card');
for(const width of [320,375,760,900,1440]){
 await page.setViewportSize({width,height:900});await page.evaluate(()=>{state.query='';elements.search.value='';state.roles.clear();state.locations.clear();setView('library');});
 if(width<=760 && !await page.locator('#filter-panel').isVisible())await page.locator('.filter-toggle').click();
 assert(await page.locator('[data-all-roles]').isChecked());assert.equal(await page.locator('#role-filters [data-filter="role"]').count(),8);assert.equal(await page.locator('.character-card').count(),characters.length);
 await page.locator('#role-filters input[value="merchants-crafters"]').check();await page.locator('#role-filters input[value="faith-healing"]').check();
 assert.equal(await page.locator('.character-card').count(),4);assert.equal(await page.locator('[data-character="mira-fen"]').count(),1);
 await page.locator('#character-search').fill('blacksmith');assert.equal(await page.locator('.character-card').count(),1);assert.equal(await page.locator('.role-line span').textContent(),'Blacksmith');
 await page.locator('[data-all-roles]').check();await page.locator('#character-search').fill('');assert.equal(await page.locator('.character-card').count(),characters.length);
 assert.equal(await page.locator('#character-sort').inputValue(),'recent');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`);
 for(const box of await page.locator('#role-filters input').all())assert(await box.isVisible());
}
assert.deepEqual(errors,[]);await browser.close();console.log('PASS: desktop/mobile category controls, overlap, search, All Roles, recent default and overflow');
})().catch(e=>{console.error(e);process.exit(1)});
