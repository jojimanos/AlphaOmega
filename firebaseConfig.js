// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBics3C4GBGXvqrxNkbhuBO4DC6cDP39i0",
  authDomain: "alphaomega-b4064.firebaseapp.com",
  projectId: "alphaomega-b4064",
  storageBucket: "alphaomega-b4064.appspot.com",
  messagingSenderId: "884906045790",
  appId: "1:884906045790:web:06bd98b98136b660685fcf",
  measurementId: "G-WJNTE6ZZ1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
// const analytics = getAnalytics(app);