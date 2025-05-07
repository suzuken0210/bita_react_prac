import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLtxRifb6xLz9gz2H6MJ_iP3cte35NY4I",
    authDomain: "naskenno-355fa.firebaseapp.com",
    projectId: "naskenno-355fa",
    storageBucket: "naskenno-355fa.firebasestorage.app",
    messagingSenderId: "148128669870",
    appId: "1:148128669870:web:8c3213948d042abfb84d3f",
    measurementId: "G-J7N9XFCSGV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);