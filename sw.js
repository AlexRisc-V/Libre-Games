const CACHE_NAME = 'libre-games-v1';

self.addEventListener('install', (e) => self.skipWaiting());

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});
