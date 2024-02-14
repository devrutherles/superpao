importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: "AIzaSyAAloJqungqqBa0di6yDD_hL2E6Qi4IcVs",
    authDomain: "vital-octagon-215300.firebaseapp.com",
    databaseURL: "https://vital-octagon-215300.firebaseio.com",
    projectId: "vital-octagon-215300",
    storageBucket: "vital-octagon-215300.appspot.com",
    messagingSenderId: "657849172002",
    appId: "1:657849172002:web:0da82fc1e9cd847c14ca7b"
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
