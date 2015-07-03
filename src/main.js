/**
 * Created by baidu on 15/7/3.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function () {
            console.log('register ready');
            navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                console.log(serviceWorkerRegistration);
                serviceWorkerRegistration.pushManager
                    .subscribe()
                    .then(function (subscription) {
                        console.log(subscription);
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            })
                .catch(function (err) {
                    console.log(err);
                })
        })
        .catch(function (err) {
            console.log(err);
        })
}