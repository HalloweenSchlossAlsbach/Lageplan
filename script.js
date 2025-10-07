document.addEventListener('DOMContentLoaded', () => {

    // --- Logik für das Speisekarten-Overlay ---
    const menuButton = document.getElementById('menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeButton = document.querySelector('.close-btn');
    const menuImage = document.querySelector('.menu-image'); // Das Bild im Overlay

    const openMenu = () => menuOverlay.classList.add('show');
    const closeMenu = () => menuOverlay.classList.remove('show');

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) closeMenu();
    });
    // ### NEU: Schließt die Speisekarte bei Klick auf das Bild ###
    if(menuImage) {
        menuImage.addEventListener('click', closeMenu);
    }

    // --- ### NEU: Logik für den Lageplan-Zoom ### ---
    const sitePlanImage = document.getElementById('site-plan-img');
    const planZoomOverlay = document.getElementById('plan-zoom-overlay');

    const openPlanZoom = () => planZoomOverlay.classList.add('show');
    const closePlanZoom = () => planZoomOverlay.classList.remove('show');

    if (sitePlanImage && planZoomOverlay) {
        sitePlanImage.addEventListener('click', openPlanZoom);
        planZoomOverlay.addEventListener('click', closePlanZoom);
    }
});
