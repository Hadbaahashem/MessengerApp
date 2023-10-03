import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxS-Hzddo-I_ihNUh5s3fig2faHnLkumE",
  authDomain: "messenger-bb2de.firebaseapp.com",
  projectId: "messenger-bb2de",
  databaseURL:"http://messenger-bb2de.firebaseio.com",
  storageBucket: "messenger-bb2de.appspot.com",
  messagingSenderId: "534201794858",
  appId: "1:534201794858:web:b15eb74217f008c3035e53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
