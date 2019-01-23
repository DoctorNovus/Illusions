var CACHE_NAME = "cache-v0.0.1";
var CACHE_URLS =  [
    "./index.html",
    "./css/index.css",
    "./js/engine.js",
    "./js/player.js",
    "./js/enemy.js",
    "./js/display.js",
    "./js/index.js"
];

self.addEventListener("install",function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(CACHE_URLS);
        })
    );
});

self.addEventListener("activate",function(event){
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(cacheNames.map(function(cacheName){
                if(CACHE_NAME !== cacheName && cacheName.startsWith("cache")){
                    return caches.delete(cacheName);
                }
            }));
        })
    );
});

self.addEventListener("fetch",function(event){
    event.respondWith(
        fetch(event.request).catch(function(){
            return caches.match(event.request).then(function(response){
                if(response){
                    return response;
                }else if(event.request.headers.get("accept").includes("text/html")){
                    return caches.match("./index.html");
                }
            })
        })
    )
});