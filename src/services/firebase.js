import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAhbogv6WL-kGjmdBwSxzU80Me_AH2hDRQ",
    authDomain: "ckfirstnewfirebaseproject.firebaseapp.com",
    databaseURL: "",
    projectId: "ckfirstnewfirebaseproject",
    storageBucket: "ckfirstnewfirebaseproject.appspot.com",
    messagingSenderId: "583176830132",
    appId: "1:583176830132:web:9c9f0ff16d345a50372be1",
    measurementId: "G-13EN3DCKHG"
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((res) => {

        // const credential = GoogleAuthProvider.credentialFromResult(res);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = res.user;
        // // user object
        console.log(res.user)
    }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error.message)
    })
}

// signInWithRedirect(auth, googleProvider);

export const logOut = () => {
    signOut(auth).then(() => {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    })
}