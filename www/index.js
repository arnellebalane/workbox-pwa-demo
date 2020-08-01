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

document.querySelector('#update-available button').addEventListener('click', () => {
  location.reload();
});

function displayUpdateAvailableUI() {
  document.querySelector('#update-available').classList.remove('u-Hidden');
}
