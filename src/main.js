/**
 * Created by baidu on 15/7/3.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./src/sw.js')
        .then(function (a) {
            console.log(a);
        })
        .catch(function (err) {
            console.log(err);
        });
}