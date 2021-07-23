import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: 'AIzaSyBgn_MS0WyCM48_8tq_KAy9jHueCNPcpEI',
    authDomain: 'firepad-pwa-firebase.firebaseapp.com',
    databaseURL: 'https://firepad-pwa-firebase-default-rtdb.firebaseio.com/',
    projectId: 'firepad-pwa-firebase',
    storageBucket: 'firepad-pwa-firebase.appspot.com',
    messagingSenderId: '53482307540',
    appId: '1:53482307540:web:1149f77a82b56ae3666041'
})

export const auth = app.auth()
export default app