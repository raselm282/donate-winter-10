import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbadhGt_uljfj1Mvp-RZ-BvHRio-EW03o",
  authDomain: "donate-winter-clothing.firebaseapp.com",
  projectId: "donate-winter-clothing",
  storageBucket: "donate-winter-clothing.firebasestorage.app",
  messagingSenderId: "1012229576601",
  appId: "1:1012229576601:web:1e6ca4802fea203fcb2508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);