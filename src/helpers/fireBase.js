// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import * as firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhbogv6WL-kGjmdBwSxzU80Me_AH2hDRQ",
    authDomain: "ckfirstnewfirebaseproject.firebaseapp.com",
    projectId: "ckfirstnewfirebaseproject",
    storageBucket: "ckfirstnewfirebaseproject.appspot.com",
    messagingSenderId: "583176830132",
    appId: "1:583176830132:web:9c9f0ff16d345a50372be1",
    measurementId: "G-13EN3DCKHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}
