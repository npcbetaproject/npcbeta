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
  assert(!token.hidden); assert(token.href.endsWith('/images/tokens/brakka-hearthhand.webp'));
  assert.equal(token.download, 'brakka-hearthhand-roll20.webp');
  assert(token.getAttribute('aria-label').includes('Brakka Hearthhand'));
  assert.equal(token.querySelector('img').getAttribute('src'), 'images/tokens/brakka-hearthhand.webp');
  assert(d.querySelector('.npc-share-actions').compareDocumentPosition(d.querySelector('#detail-title')) & 4);
  w.test.openDetail(w.test.state.characters.find(c => c.id === 'cassian-holt'));
  assert(token.hidden); assert(!token.hasAttribute('href'));
  w.test.openDetail(w.test.state.characters.find(c => c.id === 'brakka-hearthhand')); w.test.prepareDetail('Location', true);
  assert(token.hidden); assert(d.querySelector('.npc-share-actions').hidden);
  w.test.state.view = 'session'; w.test.openDetail(w.test.state.characters.find(c => c.id === 'brakka-hearthhand'));
  assert(!token.hidden); 
  w.close();
  console.log('PASS: Brakka token download, preview, action placement, accessible name, profile reset and session access');
})().catch(error => { console.error(error); process.exit(1); });
