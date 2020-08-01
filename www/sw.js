importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {url: '/index.css', revision: 'v1'},
  {url: '/index.js', revision: 'v1'}
]);

workbox.precaching.precache([
  {url: '/images/fallback-image.png', revision: 'v1'},
  {url: '/offline.html', revision: 'v1'}
]);

workbox.routing.registerRoute(
  (context) => context.request.destination === 'image',
  new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
  (context) => context.request.destination === 'document',
  new workbox.strategies.StaleWhileRevalidate({
    plugins: [
      new workbox.broadcastUpdate.BroadcastUpdatePlugin()
    ]
  })
);

workbox.routing.setCatchHandler(async context => {
  console.log(context);
  if (context.request.destination === 'image') {
    return workbox.precaching.matchPrecache('/images/fallback-image.png');
  } else if (context.request.destination === 'document') {
    return workbox.precaching.matchPrecache('/offline.html');
  }
});
