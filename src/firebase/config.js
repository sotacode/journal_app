// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi7FHAWv5srnVUp5LkgT2F7F-7mx2NHxA",
  authDomain: "react-cursos-70923.firebaseapp.com",
  projectId: "react-cursos-70923",
  storageBucket: "react-cursos-70923.appspot.com",
  messagingSenderId: "810221793862",
  appId: "1:810221793862:web:b6d4c290e046b2435c1047"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);