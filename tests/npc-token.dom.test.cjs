const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const assert = require('node:assert/strict');

(async () => {
  const w = new JSDOM(fs.readFileSync('docs/index.html', 'utf8'), { url: 'https://example.com/npcbeta/', runScripts: 'outside-only' }).window;
  w.scrollTo = () => {};
  w.fetch = async path => ({ ok: true, json: async () => JSON.parse(fs.readFileSync('docs/' + path)) });
  w.localStorage.setItem('npc-beta-saved', JSON.stringify(['mira-fen', 'nessa-vale']));
  w.localStorage.setItem('npc-beta-session', JSON.stringify(['cassian-holt']));
  w.eval(['portraits', 'character-portraits', 'generator', 'locations', 'generated-visuals', 'session-board', 'app'].map(n => fs.readFileSync('docs/js/' + n + '.js', 'utf8')).join('\n') + '\nwindow.test = {state, openDetail, prepareDetail};');
  await new Promise(resolve => setTimeout(resolve, 30));
  const d = w.document;
  w.test.openDetail(w.test.state.characters.find(c => c.id === 'brakka-hearthhand'));
  const token = d.querySelector('.npc-token-download');
  assert(!token.hidden); assert(token.href.endsWith('/images/tokens/brakka-hearthhand-token.webp'));
  assert.equal(token.download, 'brakka-hearthhand-token.webp');
  assert(token.getAttribute('aria-label').includes('Brakka Hearthhand'));
  assert.equal(token.querySelector('img').getAttribute('src'), 'images/tokens/brakka-hearthhand-token.webp');
  assert(d.querySelector('.detail-summary').compareDocumentPosition(d.querySelector('.npc-share-actions')) & 4);
  w.test.openDetail(w.test.state.characters.find(c => c.id === 'cassian-holt'));
  assert(!token.hidden); assert(token.href.endsWith('/images/tokens/cassian-holt-token.webp'));
  w.test.openDetail({...w.test.state.characters.find(c => c.id === 'cassian-holt'), tokenImage: undefined});
  assert(token.hidden); assert(!token.hasAttribute('href'));
  w.test.openDetail(w.test.state.characters.find(c => c.id === 'brakka-hearthhand')); w.test.prepareDetail('Location', true);
  assert(token.hidden); assert(d.querySelector('.npc-share-actions').hidden);
  w.test.state.view = 'session'; w.test.openDetail(w.test.state.characters.find(c => c.id === 'brakka-hearthhand'));
  assert(!token.hidden); 
  for (const c of w.test.state.characters) {
    assert(c.tokenImage, c.id + ' missing token');
    assert.equal(c.tokenImage, `images/tokens/${c.id}-token.webp`);
    assert(fs.existsSync('docs/' + c.tokenImage));
    w.test.openDetail(c);
    assert(!token.hidden); assert.equal(token.getAttribute('href'), c.tokenImage);
    assert.equal(token.download, `${c.id}-token.webp`);
    assert.equal(token.querySelector('img').getAttribute('src'), c.tokenImage);
    assert(token.getAttribute('aria-label').includes(c.name));
  }
  w.close();
  console.log('PASS: Brakka token download, preview, action placement, accessible name, profile reset and session access');
})().catch(error => { console.error(error); process.exit(1); });
