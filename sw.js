const CACHE_NAME='moti-brew-final-v3';
const urlsToCache=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>{if(k!==CACHE_NAME)return caches.delete(k)}))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{return res;}).catch(()=>caches.match('./index.html'))));});
