// Name des Caches (Versionsnummer kann bei Änderungen erhöht werden)
const CACHE_NAME = 'event-info-cache-v3';

// ### GEÄNDERT: Korrekter Dateiname der Schriftart ###
const urlsToCache = [
    '/Lageplan/',
    '/Lageplan/index.html',
    '/Lageplan/style.css',
    '/Lageplan/script.js',
    '/Lageplan/Lageplan.png',
    '/Lageplan/Speisekarte.png',
    '/Lageplan/manifest.json',
    '/Lageplan/HalloweenSchrift.otf', // Korrekter Dateiname
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
];

// Installation des Service Workers
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache geöffnet');
                return cache.addAll(urlsToCache);
            })
    );
});

// Anfragen abfangen und aus dem Cache bedienen
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
