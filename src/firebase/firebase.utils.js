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
export const auth = firebase.auth();
// export const firestore = firestore.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
