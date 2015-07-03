/**
 * Created by baidu on 15/7/3.
 */
self.addEventListener('install', function (event) {
    console.log('install');
    var cachesUrl = [
        '/ServiceWorker/index.html',
        '/ServiceWorker/src/main.js'
    ];
    event.waitUntil(function () {
        caches.open('v1')
            .then(function (cache) {
                return cache.addAll(cachesUrl);
            });
    });
});
self.addEventListener('fetch', function (event) {
    console.log('fetch');
    console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(data){console.log(data)}));
});