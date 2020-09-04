import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB8vO0qjZXEftcqpE8e0A8bmEgnhYhH2PA",
  authDomain: "crwn-db-aba69.firebaseapp.com",
  databaseURL: "https://crwn-db-aba69.firebaseio.com",
  projectId: "crwn-db-aba69",
  storageBucket: "crwn-db-aba69.appspot.com",
  messagingSenderId: "764947054954",
  appId: "1:764947054954:web:328ba6a140bff47ca2e513",
  measurementId: "G-1MXGCXKNDC",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
