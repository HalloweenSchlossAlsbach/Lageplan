// ### GEÄNDERT: Cache-Version erhöht ###
const CACHE_NAME = 'event-info-cache-v7';

// ### GEÄNDERT: Alle Pfade auf "QR-Jagt" aktualisiert ###
const urlsToCache = [
    '/QR-Jagt/',
    '/QR-Jagt/index.html',
    '/QR-Jagt/style.css',
    '/QR-Jagt/script.js',
    '/QR-Jagt/logo.png',
    '/QR-Jagt/Lageplan_full.png',
    '/QR-Jagt/Lageplan_low.png',
    '/QR-Jagt/Regelwerk_full.png',
    '/QR-Jagt/Regelwerk_low.png',
    '/QR-Jagt/manifest.json',
    '/QR-Jagt/HalloweenSchrift.otf',
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
