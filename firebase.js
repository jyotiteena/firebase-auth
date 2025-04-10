// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAfIElwWB7GdB1ggv2gp5Dx3rh58eblwHI",
  authDomain: "batch-8-30.firebaseapp.com",
  databaseURL: "https://batch-8-30-default-rtdb.firebaseio.com",
  projectId: "batch-8-30",
  storageBucket: "batch-8-30.firebasestorage.app",
  messagingSenderId: "759940644648",
  appId: "1:759940644648:web:67adcd8016007ab5c05a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth