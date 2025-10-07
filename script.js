document.addEventListener('DOMContentLoaded', () => {

    // --- Logik für das Speisekarten-Overlay ---
    const menuButton = document.getElementById('menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeButton = document.querySelector('.close-btn');

    // Funktion zum Öffnen des Overlays
    const openMenu = () => {
        menuOverlay.classList.add('show');
    };

    // Funktion zum Schließen des Overlays
    const closeMenu = () => {
        menuOverlay.classList.remove('show');
    };

    // Event-Listener hinzufügen
    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    // Overlay schließen, wenn man daneben klickt
    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) {
            closeMenu();
        }
    });

    // --- Service Worker für Offline-Fähigkeit registrieren ---
    if ('serviceWorker' in navigator) {
        // ### ÄNDERUNG HIER ###
        // Der Pfad muss den Namen deines Repositorys enthalten.
        navigator.serviceWorker.register('/Lageplan/sw.js')
            .then(registration => {
                console.log('Service Worker erfolgreich registriert:', registration);
            })
            .catch(error => {
                console.log('Service Worker Registrierung fehlgeschlagen:', error);
            });
    }
});
