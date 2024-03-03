// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5ovJLEJglwHgI3GC0ColFpBoPFgumEg",
  authDomain: "netflixgpt-ab547.firebaseapp.com",
  projectId: "netflixgpt-ab5n47",
  storageBucket: "netflixgpt-ab547.appspot.com",
  messagingSenderId: "495637009851",
  appId: "1:495637009851:web:09f3b058db5e74c7c0209e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);