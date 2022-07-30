import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAtz-j4qgpKYxVpkQTllUDPo4oJO2Q4OXY",
  authDomain: "facebook-clone-6986c.firebaseapp.com",
  projectId: "facebook-clone-6986c",
  storageBucket: "facebook-clone-6986c.appspot.com",
  messagingSenderId: "83116097668",
  appId: "1:83116097668:web:58ad9129b3003b8e4282d1",
  measurementId: "G-3YL4ES3H3R",
});

const auth = firebase.auth();


export { auth  };
export default getFirestore();
