import firebase from 'firebase/app'
import "firebase/auth"

const Base = firebase.initializeApp({
    apiKey:'AIzaSyAE8e1B8RGG9lDbyJNihPCh_TPhm_9A8_Y',
    databaseURL:'https://tap101-development-default-rtdb.firebaseio.com',
    authDomain:'tap101-development.firebaseapp.com',
    projectId:'tap101-development',
    storageBucket:'tap101-development.appspot.com',
    messagingSenderId:'102013254760',
    appId:'1:102013254760:web:6786cec3f298f5da710fdd' 
})

export const auth = Base.auth()
export default Base 