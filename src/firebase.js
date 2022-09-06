// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRjlkoWRXlleKT_7zZWqFGcJi-0aoGxXM",
  authDomain: "image-upload-80591.firebaseapp.com",
  projectId: "image-upload-80591",
  storageBucket: "image-upload-80591.appspot.com",
  messagingSenderId: "358763813593",
  appId: "1:358763813593:web:577d498efa29e2fc1b7cc8",
  measurementId: "G-TX0DDC7J3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;