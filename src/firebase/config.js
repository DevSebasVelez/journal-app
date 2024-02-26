// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN6AycyP1Iz9BEZOc4Hp2Sd7qi1s6RSZo",
  authDomain: "journal-app-5572b.firebaseapp.com",
  projectId: "journal-app-5572b",
  storageBucket: "journal-app-5572b.appspot.com",
  messagingSenderId: "441958173765",
  appId: "1:441958173765:web:9e63f3caf52b4e9ef5272c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );