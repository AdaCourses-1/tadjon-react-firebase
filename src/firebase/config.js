// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMvSJEQ4VBEaA0Befuidv6uQhQ7RqHSGY",
  authDomain: "tadjon-70cf6.firebaseapp.com",
  projectId: "tadjon-70cf6",
  storageBucket: "tadjon-70cf6.appspot.com",
  messagingSenderId: "1032017792862",
  appId: "1:1032017792862:web:ffb49e6e1c0436dd2689cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Иниализация проекта Firebase

const db = getFirestore(); // Инициализация базы данных Firestore
const auth = getAuth(app); // Инициализация системы верификации
const storage = getStorage(app); // Инициализация хранилища файлов

export { db, auth, storage };
