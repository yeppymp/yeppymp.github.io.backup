var cacheName = 'bilqis_birthday_cache';
var filesToCache = [
  '/',
  '/index.html',
  '/css/loading.css',
  '/css/stylesheet.css',
  '/css/bootstrap.min.css',
  '/css/cake.less',
  '/js/effect.js',
  '/js/analytics.js',
  '/js/bootstrap.min.js',
  '/js/jquery.min.js',
  '/js/less.min.js',
  '/backsound/applause.mp3',
  '/backsound/hbd.mp3',
  '/img/b1.png',
  '/img/b2.png',
  '/img/b3.png',
  '/img/b4.png',
  '/img/b5.png',
  '/img/b6.png',
  '/img/b7.png',
  '/img/Balloon-Border.png',
  '/img/banner.png',
  '/img/bulb_blue.png',
  '/img/bulb_green.png',
  '/img/bulb_orange.png',
  '/img/bulb_pink.png',
  '/img/bulb_red.png',
  '/img/bulb_yellow.png',
  '/img/bulb.png',
  '/img/uggreen.png',
  '/img/vine.png'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
    );
});