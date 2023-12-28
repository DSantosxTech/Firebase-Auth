// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA60mLwi2WUY7yHFgt7eD3d2ITjlIwho04",
    authDomain: "fir-auth-9f9f7.firebaseapp.com",
    projectId: "fir-auth-9f9f7",
    storageBucket: "fir-auth-9f9f7.appspot.com",
    messagingSenderId: "800989360011",
    appId: "1:800989360011:web:047a109957e4b50522898e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const criar = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logar = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export { auth, criar, logar };
