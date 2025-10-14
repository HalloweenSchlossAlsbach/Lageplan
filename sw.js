// Cache-Version erhöht
const CACHE_NAME = 'event-info-cache-v6';

const urlsToCache = [
    '/Event-Guide/',
    '/Event-Guide/index.html',
    '/Event-Guide/style.css',
    '/Event-Guide/script.js',
    '/Event-Guide/logo.png',
    '/Event-Guide/Lageplan_full.png',
    '/Event-Guide/Lageplan_low.png',
    /* ### NEU: Regelwerk-Bilder zum Cache hinzufügen ### */
    '/Event-Guide/Regelwerk_full.png',
    '/Event-Guide/Regelwerk_low.png',
    '/Event-Guide/manifest.json',
    '/Event-Guide/HalloweenSchrift.otf',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache geöffnet');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
