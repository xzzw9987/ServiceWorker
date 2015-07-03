/**
 * Created by baidu on 15/7/3.
 */
self.addEventListener('install', function (event) {
    console.log('install');
    var cachesUrl = [
        './',
        './index.html',
        './src',
        './src/main.js'
    ];
    event.waitUntil(function () {
        caches.open('v1')
            .then(function (cache) {
                cache.addAll(cachesUrl);
            });
    });
});
self.addEventListener('fetch', function (event) {
    console.log('fetch');
    event.respondWith(caches.match(event.request));
});