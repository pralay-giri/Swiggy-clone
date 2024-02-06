import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJjJpfRJFkhiZZO2tvBh2fwR1B8_97wfY",
    authDomain: "swiggy-clone-671c5.firebaseapp.com",
    projectId: "swiggy-clone-671c5",
    storageBucket: "swiggy-clone-671c5.appspot.com",
    messagingSenderId: "343763838275",
    appId: "1:343763838275:web:0fbef872bf7f71b9a73bf6",
    measurementId: "G-14SJZE6HRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
