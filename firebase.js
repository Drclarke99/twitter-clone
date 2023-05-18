// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsPh7p5j3vuF-Pct8CMfmX7oaJd613eo",
  authDomain: "twitter-clone-c52f6.firebaseapp.com",
  projectId: "twitter-clone-c52f6",
  storageBucket: "twitter-clone-c52f6.appspot.com",
  messagingSenderId: "387753227641",
  appId: "1:387753227641:web:12e1a387f578bdb2206ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);