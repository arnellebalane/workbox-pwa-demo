if (navigator.serviceWorker) {
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data.meta === 'workbox-broadcast-update') {
      displayUpdateAvailableUI();
    }
  });

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
