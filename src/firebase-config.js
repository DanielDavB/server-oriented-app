// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSkwv2jHb1n2nl8YregMpUkjIogTUnI_E",
  authDomain: "fproject-94c46.firebaseapp.com",
  projectId: "fproject-94c46",
  storageBucket: "fproject-94c46.appspot.com",
  messagingSenderId: "930723996084",
  appId: "1:930723996084:web:ccfd17d1296b7a8c1652e1",
  measurementId: "G-CBJ4FPB56Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app)