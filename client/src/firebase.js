import firebase from 'firebase/app'
import "firebase/auth"

const Base = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJET_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = Base.auth()
export default Base 