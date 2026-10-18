const {chromium} = require('playwright');
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const inventory = require('../docs/data/locations/templates.json');
const labels = require('../docs/data/locations/labels.json');
const source = fs.readFileSync('docs/js/locations.js','utf8').split('// Template IDs')[0];
const daily = require('node:vm').runInNewContext(source+';NpcLocationOfDay');
const base = 'http://localhost:8000/';
(async()=>{
 const browser = await chromium.launch({args:['--no-sandbox']});
 const errors = [];
 async function setup(timezoneId, time) {
  const context = await browser.newContext({timezoneId, viewport:{width:1440,height:900}});
  await context.route(base+'**', async route=>{
   let relative = new URL(route.request().url()).pathname.slice(1) || 'index.html';
   const file = path.resolve('docs',relative);
   if (!file.startsWith(path.resolve('docs')+path.sep)) return route.abort();
   await route.fulfill({status:fs.existsSync(file)?200:404,contentType:({'.js':'text/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.svg':'image/svg+xml'})[path.extname(file)] || 'text/html',body:fs.existsSync(file)?fs.readFileSync(file):'Not found'});
  });
  const page = await context.newPage(); page.on('pageerror',e=>errors.push(e.message));
  await page.clock.setFixedTime(new Date(time));
  await page.goto(base+'#locations'); await page.waitForSelector('.location-card');
  return {page,context};
 }
 const time = '2026-07-01T16:00:00Z', today = daily.selectId(inventory,new Date(time));
 const {page,context} = await setup('Asia/Tokyo',time);
 const ids = ()=>page.locator('#location-grid .location-card').evaluateAll(nodes=>nodes.map(n=>n.dataset.templateId));
 assert.equal((await ids())[0],today);
 assert.equal((await ids()).length,inventory.length);
 assert.equal(new Set(await ids()).size,inventory.length);
 assert.equal(await page.locator('.location-of-day-ribbon').count(),1);
 // Nonfeatured cards retain the exact existing comparator order in both modes.
 for (const sort of ['recent','name']) {
  await page.locator('#location-sort').selectOption(sort);
  const expected = await page.evaluate(({today,sort})=>locationLibrary.templates.filter(x=>x.id!==today).sort((a,b)=>sort==='recent'?comparePublished(a,b):a.name.localeCompare(b.name)).map(x=>x.id),{today,sort});
  assert.deepEqual((await ids()).slice(1),expected);
 }
 const template = inventory.find(x=>x.id===today);
 await page.locator('#location-search').fill(template.name);
 assert.equal((await ids())[0],today);
 await page.locator('#location-search').fill('no such location zzzz');
 assert.equal(await page.locator('.location-card').count(),0);
 assert.equal(await page.locator('.location-of-day-ribbon').count(),0);
 await page.locator('#location-search').fill('');
 for (const group of ['settings','conditions']) {
  for (const id of Object.keys(labels[group])) {
   const filter = page.locator(`[data-location-filter="${group}"][value="${id}"]`);
   await filter.check();
   const matches = inventory.filter(x=>group==='settings'?x.settings.includes(id):x.condition===id);
   assert.equal((await ids()).length,matches.length);
   const included = matches.some(x=>x.id===today);
   assert.equal(await page.locator('.location-of-day-ribbon').count(),Number(included));
   if(included) assert.equal((await ids())[0],today);
   await filter.uncheck();
  }
 }
 // Existing popup and session action, keyboard access and unchanged saved keys.
 await page.evaluate(()=>localStorage.setItem('npc-beta-saved','["mira-fen"]'));
 const featured = page.locator(`[data-template-id="${today}"]`);
 await featured.locator('.location-card-open').focus(); await page.keyboard.press('Enter');
 assert.equal(await page.locator('#detail-title').textContent(),template.name);
 await page.keyboard.press('Escape');
 await featured.locator('[data-location-add]').click();
 const instances = await page.evaluate(()=>JSON.parse(localStorage.getItem('npc-beta:locations:v1:session')));
 assert.equal(instances.length,1); assert.equal(instances[0].templateId,today);
 const storage = await page.evaluate(()=>({...localStorage}));
 fs.mkdirSync('project/screenshots',{recursive:true});
 for (const width of [320,390,768,1440]) {
  await page.setViewportSize({width,height:900});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`);
  const size = await featured.boundingBox();
  const regularSize = await featured.evaluate(n=>{n.classList.remove('is-location-of-day');const b=n.getBoundingClientRect();n.classList.add('is-location-of-day');return {width:b.width,height:b.height};});
  assert.equal(size.width,regularSize.width); assert.equal(size.height,regularSize.height);
  const ribbon = await page.locator('.location-of-day-ribbon').boundingBox();
  assert(ribbon.x>=size.x && ribbon.x+ribbon.width<=size.x+size.width && ribbon.y+ribbon.height<size.y+size.height);
  assert.equal(await page.locator('.location-of-day-ribbon').evaluate(n=>getComputedStyle(n).backgroundColor),'rgb(116, 29, 50)');
  if(width===390 || width===1440) await page.screenshot({path:`project/screenshots/location-of-day-${width}.png`});
 }
 await page.reload(); await page.waitForSelector('.location-card');
 assert.equal((await ids())[0],today); assert.deepEqual(await page.evaluate(()=>({...localStorage})),storage);
 for(const timezone of ['America/Los_Angeles','UTC']) {
  const other = await setup(timezone,time);
  assert.equal(await other.page.locator('.location-card').first().getAttribute('data-template-id'),today);
  await other.context.close();
 }
 // A live tab crosses midnight on both DST-change dates; popup remains open.
 for (const [before,after] of [
  ['2026-03-08T04:59:59Z','2026-03-08T05:00:00Z'],
  ['2026-03-09T03:59:59Z','2026-03-09T04:00:00Z'],
  ['2026-11-01T03:59:59Z','2026-11-01T04:00:00Z'],
  ['2026-11-02T04:59:59Z','2026-11-02T05:00:00Z'],
 ]) {
  const live = await context.newPage(); live.on('pageerror',e=>errors.push(e.message));
  await live.clock.install({time:new Date(Date.parse(before)-1000)});
  await live.clock.pauseAt(new Date(before));
  await live.goto(base+'#locations'); await live.waitForSelector('.location-card');
  assert.equal(await live.locator('.location-card').first().getAttribute('data-template-id'),daily.selectId(inventory,new Date(before)));
  await live.locator('.location-card-open').first().click();
  const title = await live.locator('#detail-title').textContent(), url = live.url();
  await live.clock.fastForward(1000);
  assert.equal(await live.locator('.location-card').first().getAttribute('data-template-id'),daily.selectId(inventory,new Date(after)));
  assert.equal(await live.locator('.location-of-day-ribbon').count(),1);
  assert.equal(await live.locator('#detail-panel').getAttribute('aria-hidden'),'false');
  assert.equal(await live.locator('#detail-title').textContent(),title); assert.equal(live.url(),url);
  assert.deepEqual(await live.evaluate(()=>({...localStorage})),storage);
  await live.close();
 }
 // Suspended/restored tab catches up on pageshow, retaining focused card/action.
 await page.setViewportSize({width:1440,height:900});
 await featured.locator('[data-location-add]').focus();
 await page.clock.setFixedTime(new Date('2026-07-03T16:00:00Z'));
 await page.evaluate(()=>window.dispatchEvent(new Event('pageshow')));
 assert.equal((await ids())[0],daily.selectId(inventory,new Date('2026-07-03T16:00:00Z')));
 assert.equal(await page.evaluate(()=>document.activeElement.dataset.locationAdd),today);
 assert.deepEqual(await page.evaluate(()=>({...localStorage})),storage);
 assert.deepEqual(errors,[]); await browser.close();
 console.log('PASS: featured ordering, normal sorts/filters/search, no duplicates, keyboard popup/session actions, unchanged storage, 320–1440px layouts, timezone equality, live midnight/DST rollover, restored tab and focus');
})().catch(e=>{console.error(e);process.exit(1)});
