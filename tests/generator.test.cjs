const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async () => {
 const browser = await chromium.launch({headless:true});
 const page = await browser.newPage(); const errors=[]; page.on('pageerror',error=>errors.push(error.message));
 await page.addInitScript(()=>{if(!localStorage.getItem('seeded')){localStorage.setItem('npc-beta-saved','["mira-fen"]');localStorage.setItem('npc-beta-session','["cassian-holt"]');localStorage.setItem('seeded','yes');}});
 await page.goto('http://localhost:8000/docs/'); await page.waitForSelector('.character-card');
 await page.locator('.desktop-nav [data-view="generator"]').click(); await page.waitForSelector('#generator-controls:not([hidden])');
 const result=()=>page.evaluate(()=>({...generator.current}));
 const initial=await result();
 const options=JSON.parse(fs.readFileSync('docs/data/generator/options.json')); const names=JSON.parse(fs.readFileSync('docs/data/generator/names.json'));
 assert.equal(options.locations.length,23); assert(options.locations.every(l=>l.professionIds.length&&l.professionIds.every(id=>options.professions.some(p=>p.id===id))));
 const valid=r=>assert(options.locations.find(l=>l.id===r.locationId).professionIds.includes(r.professionId));
 const validName=r=>{const [first,last]=r.name.split(' ');assert(names.firstPrefix.some(p=>names.firstSuffix.some(s=>p+s===first)));assert(names.lastPrefix.some(p=>names.lastSuffix.some(s=>p+s===last)));};
 await page.locator('[data-roll="name"]').click(); const named=await result();assert.notEqual(named.name,initial.name);assert.equal(named.locationId,initial.locationId);assert.equal(named.professionId,initial.professionId);
 await page.locator('#undo-generator').click();assert.deepEqual(await result(),initial);assert(await page.locator('#undo-generator').isDisabled());
 for(const location of options.locations){await page.selectOption('#generator-location',location.id);const r=await result();valid(r);assert.equal(r.name,initial.name);assert.equal(await page.locator('#generator-profession option').count(),location.professionIds.length);}
 const before=await result();await page.locator('[data-roll="profession"]').click();const after=await result();assert.equal(after.name,before.name);assert.equal(after.locationId,before.locationId);assert.notEqual(after.professionId,before.professionId);
 await page.locator('[data-roll="location"]').click();const relocated=await result();assert.equal(relocated.name,before.name);assert.notEqual(relocated.locationId,before.locationId);valid(relocated);
 const manual=await page.locator('#generator-profession option').first().getAttribute('value');const preManual=await result();await page.selectOption('#generator-profession',manual);valid(await result());if(preManual.professionId!==manual){await page.locator('#undo-generator').click();assert.deepEqual(await result(),preManual);}
 for(let i=0;i<30;i++){const old=await result();await page.locator('[data-roll="all"]').click();const r=await result();valid(r);validName(r);assert.notEqual(old.name,r.name);assert.notEqual(old.locationId,r.locationId);}
 const stored=await result();await page.locator('#add-generated').click();assert(await page.locator('#add-generated').isDisabled());assert.equal(await page.locator('#cast-list .cast-entry').count(),2);
 await page.evaluate(()=>{navigator.clipboard.writeText=async text=>{window.copied=text;};});await page.locator('#copy-name').click();assert.equal(await page.evaluate(()=>window.copied),stored.name);
 await page.locator('#cast-list .cast-entry').last().getByRole('button',{name:/Copy/}).click();assert.equal(await page.evaluate(()=>window.copied),stored.name);
 await page.reload();await page.locator('.desktop-nav [data-view="generator"]').click();await page.waitForSelector('#generator-controls:not([hidden])');assert.deepEqual(await result(),stored);assert.equal(await page.locator('#cast-list .cast-entry').count(),2);
 await page.locator('.desktop-nav [data-view="session"]').click();assert.equal(await page.locator('#character-grid .cast-entry').count(),2);
 await page.locator('.cast-profile').filter({hasText:'Cassian Holt'}).last().click();assert(await page.locator('#detail-panel').evaluate(el=>el.classList.contains('open')));await page.locator('.back-button').click();
 await page.evaluate(()=>{navigator.clipboard.writeText=async()=>{throw Error('denied');};});await page.locator('#character-grid .cast-entry').filter({hasText:stored.name}).getByRole('button',{name:/Copy/}).click();await page.waitForFunction(()=>document.querySelector('#action-feedback').textContent.includes('Could not copy'));
 await page.locator('#character-grid .cast-entry').filter({hasText:stored.name}).getByRole('button',{name:/Remove/}).click();assert.equal(await page.locator('#cast-list .cast-entry').count(),1);assert.deepEqual(await result(),stored);
 assert.deepEqual(await page.evaluate(()=>JSON.parse(localStorage.getItem('npc-beta-saved'))),['mira-fen']);assert.deepEqual(await page.evaluate(()=>JSON.parse(localStorage.getItem('npc-beta-session'))),['cassian-holt']);
 await page.locator('.desktop-nav [data-view="generator"]').click();await page.locator('#add-generated').click();await page.locator('#cast-list .cast-entry').last().getByRole('button',{name:/Remove/}).click();assert.equal(await page.locator('#character-grid .cast-entry').count(),1);
 for(const width of [320,375,760,900,1440]){await page.setViewportSize({width,height:900});for(const view of ['generator','session','library','saved']){await page.evaluate(view=>setView(view),view);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${view} overflow at ${width}`);}}
 const failed=await browser.newPage();await failed.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('blocked');};Storage.prototype.setItem=()=>{throw Error('quota');};});await failed.goto('http://localhost:8000/docs/');await failed.locator('.desktop-nav [data-view="generator"]').click();await failed.waitForSelector('#generator-controls:not([hidden])');await failed.locator('#add-generated').click();assert.equal(await failed.locator('#cast-list .cast-entry').count(),1);assert(await failed.locator('#storage-warning').isVisible());
 const malformed=await browser.newPage();await malformed.addInitScript(()=>{localStorage.setItem('npc-beta-saved','{broken');localStorage.setItem('npc-beta-session','{}');localStorage.setItem('npc-beta:generator:v1:state','null');});await malformed.goto('http://localhost:8000/docs/');await malformed.locator('.desktop-nav [data-view="generator"]').click();await malformed.waitForSelector('#generator-controls:not([hidden])');
 const dataError=await browser.newPage();await dataError.route('**/data/generator/options.json',route=>route.fulfill({status:404,body:'missing'}));await dataError.goto('http://localhost:8000/docs/');await dataError.locator('.desktop-nav [data-view="generator"]').click();await dataError.waitForSelector('#generator-error:not([hidden])');await dataError.unroute('**/data/generator/options.json');await dataError.locator('.desktop-nav [data-view="library"]').click();await dataError.locator('.desktop-nav [data-view="generator"]').click();await dataError.waitForSelector('#generator-controls:not([hidden])');
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS: data, rerolls, undo, shared session, copy, persistence, existing data, error recovery and responsive layouts');
})().catch(error=>{console.error(error);process.exit(1);});
