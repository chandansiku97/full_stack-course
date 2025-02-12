// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// firestore -> step-1
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTk_ZyJCz5QEhmq2Iv3WBfkOpAcNrFVuM",
  authDomain: "web-chat-b6e5f.firebaseapp.com",
  projectId: "web-chat-b6e5f",
  storageBucket: "web-chat-b6e5f.firebasestorage.app",
  messagingSenderId: "875221354487",
  appId: "1:875221354487:web:1a2a76d8f8e5dbc89050f2",
  measurementId: "G-N7CL1JDS4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  
// step ->2
 const db = getFirestore();
 const storage = getStorage();
 
  export {auth,db,storage}