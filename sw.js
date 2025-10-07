// Name des Caches (Versionsnummer kann bei Änderungen erhöht werden)
const CACHE_NAME = 'event-info-cache-v4'; // Version erhöht wegen neuer Bilddateien

// ### GEÄNDERT: Alle vier Bilddateien in den Cache aufnehmen ###
const urlsToCache = [
    '/Lageplan/',
    '/Lageplan/index.html',
    '/Lageplan/style.css',
    '/Lageplan/script.js',
    '/Lageplan/Lageplan_full.png', // Neue Datei
    '/Lageplan/Lageplan_low.png',  // Neue Datei
    '/Lageplan/Speisekarte_full.png', // Neue Datei
    '/Lageplan/Speisekarte_low.png',  // Neue Datei
    '/Lageplan/manifest.json',
    '/Lageplan/HalloweenSchrift.otf',
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
