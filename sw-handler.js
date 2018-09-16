// Following along with:
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Registering_your_worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        console.log('Registration succeeded. Scope: ' + reg.scope);
      }).catch((error) => {
        console.log('Registration failed. Error: ' + error);
      });
  });
}