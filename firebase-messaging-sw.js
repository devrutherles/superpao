import { initializeApp } from 'firebase/app';
  import { getMessaging } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAAloJqungqqBa0di6yDD_hL2E6Qi4IcVs",
    authDomain: "vital-octagon-215300.firebaseapp.com",
    databaseURL: "https://vital-octagon-215300.firebaseio.com",
    projectId: "vital-octagon-215300",
    storageBucket: "vital-octagon-215300.appspot.com",
    messagingSenderId: "657849172002",
    appId: "1:657849172002:web:0da82fc1e9cd847c14ca7b"
  };

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app)

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