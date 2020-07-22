import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC14zrFAXT6Ae_oJRZD4iA6zSn_mQHGJJE",
    authDomain: "expensify-8fb86.firebaseapp.com",
    databaseURL: "https://expensify-8fb86.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "expensify-8fb86.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID 
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider

export {firebase, googleAuthProvider, database as default};