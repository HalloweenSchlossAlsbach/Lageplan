// Name des Caches (Versionsnummer kann bei Änderungen erhöht werden)
const CACHE_NAME = 'event-info-cache-v1';

// ### ÄNDERUNG HIER ###
// Liste der Dateien, die für den Offline-Betrieb gespeichert werden sollen.
// Alle Pfade müssen mit dem Namen des Repositorys beginnen.
const urlsToCache = [
    '/Lageplan/',
    '/Lageplan/index.html',
    '/Lageplan/style.css',
    '/Lageplan/script.js',
    '/Lageplan/lageplan.png',
    '/Lageplan/speisekarte.pdf',
    '/Lageplan/manifest.json',
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
                // Wenn die Anfrage im Cache gefunden wird, wird sie von dort geladen
                if (response) {
                    return response;
                }
                // Ansonsten wird sie normal aus dem Netzwerk geladen
                return fetch(event.request);
            })
    );
});
