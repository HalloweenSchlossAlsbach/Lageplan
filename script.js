document.addEventListener('DOMContentLoaded', () => {

    const viewportMeta = document.getElementById('viewport-meta');
    const originalViewportContent = viewportMeta.getAttribute('content');
    const zoomableViewportContent = 'width=device-width, initial-scale=1.0, user-scalable=yes';

    const allowZoom = () => {
        viewportMeta.setAttribute('content', zoomableViewportContent);
    };

    const resetZoom = () => {
        viewportMeta.setAttribute('content', originalViewportContent);
    };

    const sitePlanImage = document.getElementById('site-plan-img');
    const planZoomOverlay = document.getElementById('plan-zoom-overlay');

    const openPlanZoom = () => {
        planZoomOverlay.classList.add('show');
        allowZoom();
    };
    const closePlanZoom = () => {
        planZoomOverlay.classList.remove('show');
        resetZoom();
    };

    if (sitePlanImage && planZoomOverlay) {
        sitePlanImage.addEventListener('click', openPlanZoom);
        planZoomOverlay.addEventListener('click', closePlanZoom);
    }
    
    const rulesImage = document.getElementById('rules-img');
    const rulesZoomOverlay = document.getElementById('rules-zoom-overlay');

    const openRulesZoom = () => {
        rulesZoomOverlay.classList.add('show');
        allowZoom();
    };
    const closeRulesZoom = () => {
        rulesZoomOverlay.classList.remove('show');
        resetZoom();
    };

    if (rulesImage && rulesZoomOverlay) {
        rulesImage.addEventListener('click', openRulesZoom);
        rulesZoomOverlay.addEventListener('click', closeRulesZoom);
    }
    
    if ('serviceWorker' in navigator) {
        // ### GEÄNDERT: Neuer Repository-Name ###
        navigator.serviceWorker.register('/QR-Jagt/sw.js')
            .then(registration => {
                console.log('Service Worker erfolgreich registriert:', registration);
            })
            .catch(error => {
                console.log('Service Worker Registrierung fehlgeschlagen:', error);
            });
    }
});
