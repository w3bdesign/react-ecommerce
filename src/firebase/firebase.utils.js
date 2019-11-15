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
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(userRef);
  console.log(snapShot);
  console.log(userAuth.uid);
  console.log(snapShot.exists);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user...", error.message);
    }
  }
  return userRef;
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
