// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("apikey:", process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY);
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "admin-91686.appspot.com",
  messagingSenderId: "716722893358",
  appId: "1:716722893358:web:83e53c7d22a7ced10465bf",
};

// Initialize Firebase
// if a Firebase instance doesn't exist, create one

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// console.log("firebase started");
