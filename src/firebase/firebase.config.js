// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,



  
  // apiKey: "AIzaSyCSkZPiU1wJT3njR2k9cGDMyxp4QV_Disk",
  // authDomain: "assignment-b12a10.firebaseapp.com",
  // projectId: "assignment-b12a10",
  // storageBucket: "assignment-b12a10.firebasestorage.app",
  // messagingSenderId: "194169654069",
  // appId: "1:194169654069:web:0adc36c8361104a8675a7c"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);