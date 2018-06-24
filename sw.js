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

self.addEventListener('install', function(event) {
  console.log('SW installed');
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
        console.log('SW caching cache files');
        return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',function(event){
    console.log('SW activated');
    event.waitUntil(
        caches.keys().then(function(cacheName) {
            return Promise.all(cacheName.map(function(thisCacheName){
                if (thisCacheName !==cacheName) {
                    console.log('SW removing old cache', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
})

self.addEventListener('fetch',function(event){
    console.log('SW Fetching', event.request.url);
    event.respondWith (
        caches.match(event.request).then(function(response){
            if (response) {
                console.log('SW found in cache', event.request.url);
                return response;
            }
            var requestClone = event.request.clone();
            fetch(requestClone).then(function(response){
                if (!response) {
                    console.log('SW no response');
                    return response;
                }
                var responseClone = response.clone();
                caches.open(cacheName).then(function(cache){
                    cache.put(event.request.responseClone);
                    return response;
                });
            }).catch(function(err){
                console.log('SW fetching error');
            })
        })
    )
})
