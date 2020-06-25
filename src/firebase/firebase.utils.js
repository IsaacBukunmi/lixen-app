import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWUTbvVeeu2sXVm4wjpOv9ea3TZIqzCQM",
    authDomain: "lixen-db.firebaseapp.com",
    databaseURL: "https://lixen-db.firebaseio.com",
    projectId: "lixen-db",
    storageBucket: "lixen-db.appspot.com",
    messagingSenderId: "886891059380",
    appId: "1:886891059380:web:769ef145300734f1c1dfe1",
    measurementId: "G-P7E20CTYRR"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;