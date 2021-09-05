// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYbJoWZMGc7qoeN5BJNc45OS8hlOCbnM4",
  authDomain: "oxytocin-5c6e8.firebaseapp.com",
  projectId: "oxytocin-5c6e8",
  storageBucket: "oxytocin-5c6e8.appspot.com",
  messagingSenderId: "274762794137",
  appId: "1:274762794137:web:dd5907f15304b597de2408",
  measurementId: "G-LC9N3TQ8N8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default { app, db };
