importScripts("/guess-the-hero/precache-manifest.04d894f023649a12b66f02d4067edbb4.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  switch (event.data) {
    case 'skipWaiting':
      skipWaiting();
      break;

    default:
      break;
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

