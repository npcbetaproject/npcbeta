const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');
const source = fs.readFileSync('docs/js/locations.js', 'utf8').split('// Template IDs')[0];
const daily = vm.runInNewContext(source + '\nNpcLocationOfDay');
const inventory = require('../docs/data/locations/templates.json');
const at = value => new Date(value);
assert.equal(daily.selectId([], at('2026-01-01T05:00:00Z')), null);
assert.equal(daily.selectId([{id:'only'}]), 'only');
assert.equal(daily.dayNumber(at('2026-01-01T05:00:00Z')), 0);
assert.equal(daily.dayNumber(at('2026-01-01T04:59:59.999Z')), -1);
assert.equal(daily.selectId(inventory, at('2026-01-01T05:00:00Z')), inventory.map(x=>x.id).sort()[0]);
for (const start of ['2026-01-01T17:00:00Z', '2026-03-01T17:00:00Z', '2026-10-20T17:00:00Z']) {
  const picks = Array.from({length:inventory.length}, (_,i)=>daily.selectId(inventory, new Date(Date.parse(start)+i*86400000)));
  assert.equal(new Set(picks).size, inventory.length, 'Every published location occurs exactly once per cycle');
  assert.equal(picks[0], daily.selectId(inventory, new Date(Date.parse(start)+inventory.length*86400000)));
  assert.equal(picks[3], daily.selectId([...inventory].reverse(), new Date(Date.parse(start)+3*86400000)));
}
for (const [before, after] of [
  ['2026-01-02T04:59:59.999Z', '2026-01-02T05:00:00Z'],
  ['2026-07-02T03:59:59.999Z', '2026-07-02T04:00:00Z'],
  ['2026-03-09T03:59:59.999Z', '2026-03-09T04:00:00Z'],
  ['2026-11-02T04:59:59.999Z', '2026-11-02T05:00:00Z'],
]) {
  assert.equal(daily.dayNumber(at(after))-daily.dayNumber(at(before)), 1);
  assert.notEqual(daily.selectId(inventory, at(before)), daily.selectId(inventory, at(after)));
  assert.equal(daily.nextMidnightDelay(at(before)), 1);
}
assert.equal(daily.nextMidnightDelay(at('2026-03-08T05:00:00Z')), 23*3600000);
assert.equal(daily.nextMidnightDelay(at('2026-11-01T04:00:00Z')), 25*3600000);
assert.equal(daily.dayNumber(at('2026-03-08T06:59:59Z')), daily.dayNumber(at('2026-03-08T07:00:00Z')));
assert.equal(daily.dayNumber(at('2026-11-01T05:30:00Z')), daily.dayNumber(at('2026-11-01T06:30:00Z')));
// Different host timezones produce the same selection and rollover instant.
const script = `const vm=require('node:vm'),fs=require('node:fs');const a=vm.runInNewContext(fs.readFileSync('docs/js/locations.js','utf8').split('// Template IDs')[0]+';NpcLocationOfDay');console.log(a.selectId(${JSON.stringify(inventory)},new Date('2026-07-02T03:59:59Z')),a.nextMidnightDelay(new Date('2026-07-02T03:59:59Z')));`;
const outputs = ['UTC','America/Los_Angeles','Asia/Tokyo','America/Toronto'].map(TZ=>execFileSync(process.execPath,['-e',script],{env:{...process.env,TZ},encoding:'utf8'}));
assert.equal(new Set(outputs).size,1);
console.log(`PASS: ${inventory.length}-location coverage, fixed anchor, ID/source-order stability, Toronto midnight, 23/25-hour DST days and visitor timezone independence`);
