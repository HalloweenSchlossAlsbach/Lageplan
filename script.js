document.addEventListener('DOMContentLoaded', () => {

    // --- Logik für das Speisekarten-Overlay ---
    const menuButton = document.getElementById('menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeButton = document.querySelector('.close-btn');
    const menuImage = document.querySelector('.menu-image');

    const openMenu = () => menuOverlay.classList.add('show');
    const closeMenu = () => menuOverlay.classList.remove('show');

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) closeMenu();
    });
    if(menuImage) {
        menuImage.addEventListener('click', closeMenu);
    }

    // --- Logik für den Lageplan-Zoom ---
    const sitePlanImage = document.getElementById('site-plan-img');
    const planZoomOverlay = document.getElementById('plan-zoom-overlay');

    const openPlanZoom = () => planZoomOverlay.classList.add('show');
    const closePlanZoom = () => planZoomOverlay.classList.remove('show');

    if (sitePlanImage && planZoomOverlay) {
        sitePlanImage.addEventListener('click', openPlanZoom);
        planZoomOverlay.addEventListener('click', closePlanZoom);
    }
    
    // --- Service Worker für Offline-Fähigkeit registrieren ---
    if ('serviceWorker' in navigator) {
        // ### GEÄNDERT: Neuer Repository-Name ###
        navigator.serviceWorker.register('/Event-Guide/sw.js')
            .then(registration => {
                console.log('Service Worker erfolgreich registriert:', registration);
            })
            .catch(error => {
                console.log('Service Worker Registrierung fehlgeschlagen:', error);
            });
    }
});
