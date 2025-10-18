import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFld-vZ0ymWqYXXIDVBg91j1Rz5JjCqMg",
  authDomain: "mi-tienda-libreria.firebaseapp.com",
  projectId: "mi-tienda-libreria",
  storageBucket: "mi-tienda-libreria.firebasestorage.app",
  messagingSenderId: "998211760113",
  appId: "1:998211760113:web:184ab5f95fca7a1c921e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
