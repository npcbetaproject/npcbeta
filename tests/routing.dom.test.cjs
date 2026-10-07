const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const tick = () => new Promise(resolve => setTimeout(resolve, 30));
function setup(fail = false) {
  const dom = new JSDOM(fs.readFileSync('docs/index.html', 'utf8'), { url: 'https://example.com/npcbeta/#support', runScripts: 'outside-only' });
  const w = dom.window;
  w.scrollTo = () => {};
  w.matchMedia = () => ({ matches: true });
  w.console.error = () => {};
  w.fetch = path => fail && path === 'data/characters/index.json' ? Promise.reject(new Error('offline')) : new Promise(() => {});
  w.eval(['portraits', 'character-portraits', 'generator', 'locations', 'pro', 'generated-visuals', 'app'].map(name => fs.readFileSync(`docs/js/${name}.js`, 'utf8')).join('\n'));
  return dom;
}
(async () => {
  for (const fail of [false, true]) {
    const dom = setup(fail), w = dom.window, d = w.document;
    assert.equal(d.querySelector('#pro-view').hidden, false, 'Support renders before character fetch settles');
    await tick();
    assert.equal(d.querySelector('#pro-view').hidden, false, 'Support survives failed character loading');
    const initialLength = w.history.length;
    d.querySelector('.desktop-nav [data-view="saved"]').click();
    assert.equal(w.location.hash, '#saved');
    assert.equal(w.history.length, initialLength + 1);
    d.querySelector('.desktop-nav [data-view="saved"]').click();
    assert.equal(w.history.length, initialLength + 1, 'Repeated clicks do not add duplicate entries');
    d.querySelector('.desktop-nav [data-view="support"]').click();
    w.history.back(); await tick();
    assert.equal(w.location.hash, '#saved');
    assert.equal(d.querySelector('#pro-view').hidden, true);
    w.history.back(); await tick();
    assert.equal(w.location.hash, '#support');
    assert.equal(d.querySelector('#pro-view').hidden, false);
    w.history.forward(); await tick();
    assert.equal(w.location.hash, '#saved');
    assert.equal(d.querySelector('.desktop-nav [data-view="saved"]').getAttribute('aria-current'), 'page');
    w.location.hash = '#pro'; await tick();
    assert.equal(d.querySelector('#pro-view').hidden, false, 'Legacy route works');
    w.location.hash = ''; await tick();
    assert.equal(d.querySelector('.library').hidden, false, 'Empty hash returns to library');
    dom.window.close();
  }
  console.log('PASS: immediate/failed-load Support route, history Back/Forward, no duplicate entries, active navigation, legacy and empty routes');
})().catch(error => { console.error(error); process.exit(1); });
