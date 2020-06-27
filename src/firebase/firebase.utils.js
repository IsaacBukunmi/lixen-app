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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email, photoURL } = userAuth
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                photoURL,
                ...additionalData
            })
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Sign In
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 
    prompt: 'select_account' 
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Facebook Sign In
const facebookprovider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
    'display': 'popup'
});
export const signInWithFacebook = () => auth.signInWithPopup(facebookprovider);

export default firebase;