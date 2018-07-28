var cacheName = 'bilqis_birthday_cache';
var filesToCache = [
  'bilqis_birthday/',
  'bilqis_birthday/index.html',
  'bilqis_birthday/css/loading.css',
  'bilqis_birthday/css/stylesheet.css',
  'bilqis_birthday/css/bootstrap.min.css',
  'bilqis_birthday/css/cake.less',
  'bilqis_birthday/js/effect.js',
  'bilqis_birthday/js/analytics.js',
  'bilqis_birthday/js/bootstrap.min.js',
  'bilqis_birthday/js/jquery.min.js',
  'bilqis_birthday/js/less.min.js',
  'bilqis_birthday/backsound/applause.mp3',
  'bilqis_birthday/backsound/hbd.mp3',
  'bilqis_birthday/img/b1.png',
  'bilqis_birthday/img/b2.png',
  'bilqis_birthday/img/b3.png',
  'bilqis_birthday/img/b4.png',
  'bilqis_birthday/img/b5.png',
  'bilqis_birthday/img/b6.png',
  'bilqis_birthday/img/b7.png',
  'bilqis_birthday/img/Balloon-Border.png',
  'bilqis_birthday/img/banner.png',
  'bilqis_birthday/img/bulb_blue.png',
  'bilqis_birthday/img/bulb_green.png',
  'bilqis_birthday/img/bulb_orange.png',
  'bilqis_birthday/img/bulb_pink.png',
  'bilqis_birthday/img/bulb_red.png',
  'bilqis_birthday/img/bulb_yellow.png',
  'bilqis_birthday/img/bulb.png',
  'bilqis_birthday/img/uggreen.png',
  'bilqis_birthday/img/vine.png'
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