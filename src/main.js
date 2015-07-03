/**
 * Created by baidu on 15/7/3.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://xzzw9987.github.io/ServiceWorker/src/sw.js', {scope: './'})
        .then(function (a) {
            console.log(a);
        })
        .catch(function (err) {
            console.log(err);
        });
}