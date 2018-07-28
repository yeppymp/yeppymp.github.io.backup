var cacheName = 'bilqis_birthday_cache';
var filesToCache = [
  '/',
  '/index.html',
  '/css/loading.css',
  '/css/stylesheet.css',
  '/css/bootstrap.min.css',
  '/js/effect.js',
  '/js/analytics.js',
  '/js/bootstrap.min.js',
  '/js/jquery.min.js',
  '/js/less.min.js',
  '/backsound/applause.mp3',
  '/backsound/hbd.mp3',
  '/cake.less',
  '/b1.png',
  '/b2.png',
  '/b3.png',
  '/b4.png',
  '/b5.png',
  '/b6.png',
  '/b7.png',
  '/Balloon-Border.png',
  '/banner.png',
  '/bulb_blue.png',
  '/bulb_green.png',
  '/bulb_orange.png',
  '/bulb_pink.png',
  '/bulb_red.png',
  '/bulb_yellow.png',
  '/bulb.png',
  '/uggreen.png',
  '/vine.png'
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