// src/firebase.js
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjQfbMmKW9J_oY--Z6trk4WoqAEWBnT9Q",
    authDomain: "auth-99137.firebaseapp.com",
    projectId: "auth-99137",
    storageBucket: "auth-99137.appspot.com",
    messagingSenderId: "915407695784",
    appId: "1:915407695784:web:6854b358fe8d436bb7379d",
    measurementId: "G-4SJ4Q9CZ92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};