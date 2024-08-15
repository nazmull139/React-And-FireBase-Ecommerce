// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgGVAoxLqjRM6H81AbcBRuBIdis6wjL9g",
  authDomain: "myecom-f0454.firebaseapp.com",
  projectId: "myecom-f0454",
  storageBucket: "myecom-f0454.appspot.com",
  messagingSenderId: "530266436109",
  appId: "1:530266436109:web:c9a216e4f01222adb59b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export {auth , fireDB}
