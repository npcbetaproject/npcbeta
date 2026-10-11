const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),docs=path.join(root,'docs');
const config=JSON.parse(fs.readFileSync(path.join(docs,'data/site.json')));
if(!/^https:\/\/[^/]+$/.test(config.origin)||!/^\/(?:[a-z0-9-]+\/)*$/.test(config.basePath))throw Error('Invalid production URL');
const records=JSON.parse(fs.readFileSync(path.join(docs,'data/characters/index.json')));
const context={window:{}};vm.createContext(context);for(const f of ['portraits','character-portraits'])vm.runInContext(fs.readFileSync(path.join(docs,'js',f+'.js'),'utf8'),context);
// Initialize a new NPC's URL once from its stable ID, never from its display name.
let initialized=false;for(const c of records){if(!c.slug){if(process.argv.includes('--check'))throw Error('Run build to initialize slug: '+c.id);c.slug=c.id;initialized=true;}}
if(initialized)fs.writeFileSync(path.join(docs,'data/characters/index.json'),JSON.stringify(records,null,2)+'\n');
const portraits=context.window.NPC_PORTRAITS,escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const relative=p=>config.basePath+p,absolute=p=>config.origin+relative(p),output=new Map(),slugs=new Set();
for(const c of records){
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(c.slug)||slugs.has(c.slug))throw Error('Missing or duplicate stable slug: '+c.id);slugs.add(c.slug);
 const image=c.image||portraits[c.portraitKey];if(!image||!fs.existsSync(path.join(docs,image)))throw Error('Missing portrait: '+c.id);
 const url=absolute('npcs/'+c.slug+'/'),title=`${c.name} — ${c.role} | NPC Beta`,description=c.summary||`${c.name}, ${c.role}.`,e=escape;
 const sections=[['Description',c.summary],['At the table',c.tableNote],['Personality',c.personality],['Motivations',c.motivations||c.motivation],['Adventure hook',c.adventureHook]].filter(([,v])=>typeof v==='string'&&v.trim()).map(([heading,text])=>`<section><h2>${heading}</h2><p>${e(text)}</p></section>`).join('\n');
 output.set(`npcs/${c.slug}/index.html`,`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${e(title)}</title>
<meta name="description" content="${e(description)}"><link rel="canonical" href="${e(url)}">
<meta property="og:type" content="article"><meta property="og:site_name" content="NPC Beta"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${e(url)}"><meta property="og:image" content="${e(absolute(image))}"><meta property="og:image:alt" content="${e(c.imageAlt)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${e(title)}"><meta name="twitter:description" content="${e(description)}"><meta name="twitter:image" content="${e(absolute(image))}"><meta name="twitter:image:alt" content="${e(c.imageAlt)}">
<link rel="stylesheet" href="../../css/styles.css"><script src="../../js/npc-page.js" defer></script></head>
<body class="npc-page"><header class="site-header"><a class="brand" href="../../#library" aria-label="NPC Beta — Library"><img class="brand-logo" src="../../images/branding/npc-beta-logo.png" width="300" height="97" alt="NPC Beta"></a><a href="../../#session">Session</a></header>
<main class="npc-profile" data-npc-id="${e(c.id)}"><img class="npc-page-portrait" src="../../${e(image)}" width="960" height="960" alt="${e(c.imageAlt)}"><article><h1>${e(c.name)}</h1><p class="detail-meta">${e([c.ancestry,c.role,c.subtitle].filter(Boolean).join(' · '))}</p>${sections}
<div class="npc-page-actions"><button type="button" id="npc-add-session">Add to session</button><a href="../../#library">Browse NPCs</a></div><p id="npc-page-status" role="status" aria-live="polite"></p><noscript>Enable JavaScript to add this NPC to your browser’s session. All profile content is available above.</noscript></article></main></body></html>\n`);
}
const links=records.map(c=>`<li><a href="${escape('npcs/'+c.slug+'/')}">${escape(c.name)} — ${escape(c.role)}</a></li>`).join('\n');
const indexPath=path.join(docs,'index.html'),index=fs.readFileSync(indexPath,'utf8');
output.set('index.html',index.replace(/<!-- NPC DIRECTORY START -->[\s\S]*?<!-- NPC DIRECTORY END -->/,`<!-- NPC DIRECTORY START --><nav class="public-npc-directory" aria-label="Permanent NPC pages"><details><summary>NPC profile directory</summary><ul>${links}</ul></details></nav><!-- NPC DIRECTORY END -->`));
output.set('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['',...records.map(c=>'npcs/'+c.slug+'/')].map(p=>`<url><loc>${escape(absolute(p))}</loc></url>`).join('')}</urlset>\n`);
output.set('robots.txt',`User-agent: *\nAllow: /\nSitemap: ${absolute('sitemap.xml')}\n`);
output.set('404.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found — NPC Beta</title><link rel="stylesheet" href="${relative('css/styles.css')}"></head><body class="npc-page"><main class="npc-not-found"><h1>Page not found</h1><p>This NPC page may have moved or is no longer available.</p><a href="${relative('#library')}">Browse NPCs</a></main></body></html>\n`);
// One generated shared URL configuration, derived from the same build config.
output.set('js/npc-urls.js',`window.NPC_PUBLIC_SITE = Object.freeze(${JSON.stringify(config)});\n`);
let stale=[];for(const [file,content]of output){const dest=path.join(docs,file);if(process.argv.includes('--check')){if(!fs.existsSync(dest)||fs.readFileSync(dest,'utf8')!==content)stale.push(file);}else{fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,content);}}
const folder=path.join(docs,'npcs');if(fs.existsSync(folder))for(const name of fs.readdirSync(folder)){if(!slugs.has(name)){if(process.argv.includes('--check'))stale.push('obsolete npcs/'+name);else fs.rmSync(path.join(folder,name),{recursive:true});}}
if(stale.length)throw Error('Run node scripts/build-npc-pages.cjs: '+stale.join(', '));
console.log(`${records.length} public NPC pages ${process.argv.includes('--check')?'verified':'generated'}`);
