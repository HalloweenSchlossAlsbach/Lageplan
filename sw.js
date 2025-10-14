// ### GEÄNDERT: Cache-Version erhöht ###
const CACHE_NAME = 'event-info-cache-v5';

// ### GEÄNDERT: Alle Pfade auf "Event-Guide" aktualisiert ###
const urlsToCache = [
    '/Event-Guide/',
    '/Event-Guide/index.html',
    '/Event-Guide/style.css',
    '/Event-Guide/script.js',
    '/Event-Guide/logo.png',
    '/Event-Guide/Lageplan_full.png',
    '/Event-Guide/Lageplan_low.png',
    '/Event-Guide/Speisekarte_full.png',
    '/Event-Guide/Speisekarte_low.png',
    '/Event-Guide/manifest.json',
    '/Event-Guide/HalloweenSchrift.otf',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
];

// Installation des Service Workers
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache geöffnet');
                // Wichtig: Auch die logo.png zum Cache hinzufügen
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
