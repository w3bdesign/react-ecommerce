import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO Export to .env file and install dotenv?
// https://thatweirddeveloper.com/how-to-switch-firebase-project-using-dotenv
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(firestore.doc("users/565656xxxxx"));
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
