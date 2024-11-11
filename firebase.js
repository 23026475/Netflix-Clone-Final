// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjjLLRUjSNlAmuLsm_woCzqQQvYkasl28",
  authDomain: "netflixclone-ec183.firebaseapp.com",
  projectId: "netflixclone-ec183",
  storageBucket: "netflixclone-ec183.firebasestorage.app",
  messagingSenderId: "926922367652",
  appId: "1:926922367652:web:65e5848629f11e15a43c31",
  measurementId: "G-7W895NLEEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
