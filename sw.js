const cacheName = 'PocketGame';

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            cache.addAll([
                './',
                './index.html',
                './index.js',
                './pokerunning.html',
                './snake.html',
                './sw.js',
                './zubatincave.html',
                './manifest.webmanifest',

                './resources/css',
                './resources/css/mainmenu.css',
                './resources/css/pokerunning.css',
                './resources/css/snake.css',
                './resources/css/zubatincave.css',

                './resources/js',
                './resources/js/mainmenu.js',
                './resources/js/pokerunning.js',
                './resources/js/snake.js',
                './resources/js/zubatincave.js'
            ]);
        })
    );
    return self.skipWaiting()
});

self.addEventListener('activate', e =>{
    self.clients.claim()
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if(url.login === location.origin){
        e.respondWith(cacheFirst(req))
    }else{
        e.respondWith(NetworkAndCache(req))
    }
});

async function cacheFirst(req){
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);

    return cached || fetch(req)
}

async function NetworkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
       const refresh = await fetch(req);
       await cache.put(req, refresh.clone()) ;
       return refresh;
    } catch(e) {
        const cached = await cache.match(req)
        return cached;
    }
}

