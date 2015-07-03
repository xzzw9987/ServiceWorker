/**
 * Created by baidu on 15/7/3.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function () {
            navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                serviceWorkerRegistration.pushManager
                    .subscribe()
                    .then(function (subscription) {
                        console.log(subscription);
                    })
            });
        })
}