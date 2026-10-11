// Same library ID collection used by the main app. Generated NPCs remain separate.
(() => {
  const key='npc-beta-session',id=document.querySelector('[data-npc-id]').dataset.npcId;
  const button=document.querySelector('#npc-add-session'),status=document.querySelector('#npc-page-status');
  function read(){const raw=localStorage.getItem(key),ids=raw===null?[]:JSON.parse(raw);if(!Array.isArray(ids)||ids.some(x=>typeof x!=='string'))throw Error('Unreadable session');return ids;}
  function sync(){try{const added=read().includes(id);button.disabled=added;button.textContent=added?'✓ Added to session':'Add to session';}catch{status.textContent='Your session could not be read. Existing browser data has not been replaced.';}}
  button.addEventListener('click',()=>{try{const ids=new Set(read());ids.add(id);localStorage.setItem(key,JSON.stringify([...ids]));status.textContent='Added to session.';sync();}catch{status.textContent='Could not save to your session. Existing browser data has not been replaced.';}});
  window.addEventListener('storage',event=>{if(event.key===key||event.key===null)sync();});window.addEventListener('focus',sync);sync();
})();
