import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCVSOGUq2_SWzTNIJIdg2GQUBlpzlO60TU",
    authDomain: "ecom-udemy-cb696.firebaseapp.com",
    projectId: "ecom-udemy-cb696",
    storageBucket: "ecom-udemy-cb696.appspot.com",
    messagingSenderId: "592172013891",
    appId: "1:592172013891:web:4824e8b8aaae1539e9f7f6",
    measurementId: "G-FSNH7JP3C4"
  };
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;