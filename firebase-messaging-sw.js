importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyACgyBGRVvhgMybHM5lJfLa3jpvZnZwfEw",
    authDomain: "food-215300.firebaseapp.com",
    databaseURL: "https://food-215300.firebaseio.com",
    projectId: "food-215300",
    storageBucket: "food-215300.appspot.com",
    messagingSenderId: "400821117600",
    appId: "1:400821117600:web:1f67599aa02f2bd9159fc5"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});