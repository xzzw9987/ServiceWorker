/**
 * Created by baidu on 15/7/3.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function (serviceWorkerRegistration) {
            console.log(serviceWorkerRegistration.scope);
        })
        .catch(function (err) {
            console.log(err);
        });
}