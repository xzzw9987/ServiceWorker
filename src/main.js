/**
 * Created by baidu on 15/7/3.
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: './'})
        .then(function (a) {
            console.log(a);
        })
        .cathc(function (err) {
            console.log(err);
        });
}