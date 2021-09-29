// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "dictionary-8c4c6.firebaseapp.com",
  projectId: "dictionary-8c4c6",
  storageBucket: "dictionary-8c4c6.appspot.com",
  messagingSenderId: "414430000215",
  appId: "1:414430000215:web:ecc123683a04923e86df12",
  measurementId: "G-18W6ZDQ7X3",
};

initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db = getFirestore();
