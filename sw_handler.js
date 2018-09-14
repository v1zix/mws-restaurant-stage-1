if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
      }).catch((error) => {
        // registration failed
        console.log('Registration failed with ' + error);
      });
  });
}