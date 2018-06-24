/* Register the service worker
*/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js',{scope:'.'})
        .then(function(registration){
          console.log("SW registered", registration)
        })
        .catch(function(err) {
          console.log("SW failed to register", err);
        })
}

