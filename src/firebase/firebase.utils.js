import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVXCHDEkgsxsR6K_wQHpWMIwurFioTizo",
  authDomain: "react-webshop-df.firebaseapp.com",
  databaseURL: "https://react-webshop-df.firebaseio.com",
  projectId: "react-webshop-df",
  storageBucket: "react-webshop-df.appspot.com",
  messagingSenderId: "893271429658",
  appId: "1:893271429658:web:50418b27d3af1423f2f7a3",
  measurementId: "G-Y0HMGS2J3W"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
