// Add additional information to map for a11y
// Note that we can't use DOMContentLoaded event since we're waiting for the
// Mapbox map to return content so that we can update the map attributes
window.addEventListener("load", (event) => {
    let mapElem = document.getElementById('map');
    mapElem.setAttribute('role', 'application'); // https://www.w3.org/TR/wai-aria/#application
    mapElem.setAttribute('aria-label', 'Restaurant reviews map');
});