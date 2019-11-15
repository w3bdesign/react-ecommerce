import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD92tZ6phKTGjPukXlSFLPFZt9HrPHVIB0",
  authDomain: "reactwebshop.firebaseapp.com",
  databaseURL: "https://reactwebshop.firebaseio.com",
  projectId: "reactwebshop",
  storageBucket: "reactwebshop.appspot.com",
  messagingSenderId: "895554081780",
  appId: "1:895554081780:web:3b73dfb4ce2c730c87dfa1",
  measurementId: "G-0SMHFYP3QR"
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
