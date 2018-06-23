var filesToCache = [
    '.',
    'css/styles.css',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'index.html',
    'restaurant.html',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'data/restaurants.json'
];

var cacheName = 'cache-v1';
/*
self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

*/
  
