const CACHE_NAME = "pwa-portfolio-v1";
var urlsToCache = [
    ".",
    "index.html",
    "images/yeppy.png",
    "images/icon-128x128.png",
    "images/code-1.png",
    "images/code-2.png",
    "images/code-3.png",
    "images/design-1.png",
    "images/design-2.png",
    "images/design-3.png",
    "images/motivation-1.png",
    "components/menu.html",
    "pages/home.html",
    "pages/code.html",
    "pages/design.html",
    "pages/motivation.html",
    "css/styles.css",
    "css/materialize.min.css",
    "js/materialize.min.js",
    "js/nav.js"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME })
            .then(function (response) {
                if (response) {
                    console.log("ServiceWorker: Using assets from cache: ", response.url);
                    return response;
                }

                console.log(
                    "ServiceWorker: Fetch assets from server: ",
                    event.request.url
                );
                return fetch(event.request);
            })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " deleted");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
