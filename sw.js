// ### GEÄNDERT: Cache-Version erhöht ###
const CACHE_NAME = 'event-info-cache-v7';

// ### GEÄNDERT: Alle Pfade auf "QR-Jagd" aktualisiert ###
const urlsToCache = [
    '/QR-Jagd/',
    '/QR-Jagd/index.html',
    '/QR-Jagd/style.css',
    '/QR-Jagd/script.js',
    '/QR-Jagd/logo.png',
    '/QR-Jagd/Lageplan_full.png',
    '/QR-Jagd/Lageplan_low.png',
    '/QR-Jagd/Regelwerk_full.png',
    '/QR-Jagd/Regelwerk_low.png',
    '/QR-Jagd/manifest.json',
    '/QR-Jagd/HalloweenSchrift.otf',
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
