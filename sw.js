/**
 * Created by baidu on 15/7/3.
 */
/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

if (!Cache.prototype.add) {
    Cache.prototype.add = function add(request) {
        return this.addAll([request]);
    };
}

if (!Cache.prototype.addAll) {
    Cache.prototype.addAll = function addAll(requests) {
        var cache = this;

        // Since DOMExceptions are not constructable:
        function NetworkError(message) {
            this.name = 'NetworkError';
            this.code = 19;
            this.message = message;
        }

        NetworkError.prototype = Object.create(Error.prototype);

        return Promise.resolve().then(function () {
            if (arguments.length < 1) throw new TypeError();

            // Simulate sequence<(Request or USVString)> binding:
            var sequence = [];

            requests = requests.map(function (request) {
                if (request instanceof Request) {
                    return request;
                }
                else {
                    return String(request); // may throw TypeError
                }
            });

            return Promise.all(
                requests.map(function (request) {
                    if (typeof request === 'string') {
                        request = new Request(request);
                    }

                    var scheme = new URL(request.url).protocol;

                    if (scheme !== 'http:' && scheme !== 'https:') {
                        throw new NetworkError("Invalid scheme");
                    }

                    return fetch(request.clone());
                })
            );
        }).then(function (responses) {
            // TODO: check that requests don't overwrite one another
            // (don't think this is possible to polyfill due to opaque responses)
            return Promise.all(
                responses.map(function (response, i) {
                    return cache.put(requests[i], response);
                })
            );
        }).then(function () {
            return undefined;
        });
    };
}
/**
self.addEventListener('install', function (event) {
    console.log('install');
    var cachesUrl = [
        './index.html',
        './src/main.js'
    ];
    event.waitUntil(
        caches.open('v1')
            .then(function (cache) {
                console.log(cache);
                return cache.addAll(cachesUrl);
            })
            .catch(function (e) {
                console.log(e);
            })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (data) {
            if (!data)
                return fetch(event.request);
            else return data;
        })
        .catch(function () {
            return fetch(event.request);
        }));
});
 **/

self.addEventListener('push', function (event) {
    console.log(event);
    self.registration.showNotification('Message from push api', {
        body: 'HOLA!'
    });
});