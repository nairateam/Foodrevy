import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBRctmy-bebhwR3za9lXXoAdUz7kO7RA0",
  authDomain: "foodrevy-a0257.firebaseapp.com",
  projectId: "foodrevy-a0257",
  storageBucket: "foodrevy-a0257.appspot.com",
  messagingSenderId: "368607449745",
  appId: "1:368607449745:web:86f67a9eb428948f71a530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}