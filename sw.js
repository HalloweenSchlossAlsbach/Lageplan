// Name des Caches (Versionsnummer kann bei Änderungen erhöht werden)
const CACHE_NAME = 'event-info-cache-v2'; // Version erhöht wegen neuer Dateien

// ### GEÄNDERT: Dateinamen der PDFs aktualisiert ###
// Liste der Dateien, die für den Offline-Betrieb gespeichert werden sollen.
const urlsToCache = [
    '/Lageplan/',
    '/Lageplan/index.html',
    '/Lageplan/style.css',
    '/Lageplan/script.js',
    '/Lageplan/Lageplan.pdf',   // PNG durch PDF ersetzt
    '/Lageplan/Speisekarte.pdf', // korrekte Großschreibung
    '/Lageplan/manifest.json',
    '/Lageplan/DeineSchriftart.otf', // Wichtig: Auch die Schriftart cachen!
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
