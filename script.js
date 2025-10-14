document.addEventListener('DOMContentLoaded', () => {

    // --- Logik für den Lageplan-Zoom ---
    const sitePlanImage = document.getElementById('site-plan-img');
    const planZoomOverlay = document.getElementById('plan-zoom-overlay');

    const openPlanZoom = () => planZoomOverlay.classList.add('show');
    const closePlanZoom = () => planZoomOverlay.classList.remove('show');

    if (sitePlanImage && planZoomOverlay) {
        sitePlanImage.addEventListener('click', openPlanZoom);
        planZoomOverlay.addEventListener('click', closePlanZoom);
    }
    
    // --- ### NEU: Logik für den Regelwerk-Zoom ### ---
    const rulesImage = document.getElementById('rules-img');
    const rulesZoomOverlay = document.getElementById('rules-zoom-overlay');

    const openRulesZoom = () => rulesZoomOverlay.classList.add('show');
    const closeRulesZoom = () => rulesZoomOverlay.classList.remove('show');

    if (rulesImage && rulesZoomOverlay) {
        rulesImage.addEventListener('click', openRulesZoom);
        rulesZoomOverlay.addEventListener('click', closeRulesZoom);
    }
    
    // --- Service Worker für Offline-Fähigkeit registrieren ---
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/Event-Guide/sw.js')
            .then(registration => {
                console.log('Service Worker erfolgreich registriert:', registration);
            })
            .catch(error => {
                console.log('Service Worker Registrierung fehlgeschlagen:', error);
            });
    }
});
