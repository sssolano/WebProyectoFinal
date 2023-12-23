// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


import { getDatabase } from "firebase/database";


import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL7M6F0VS8-xm5MMsRMabB3hiwl55KRaI",
  authDomain: "proyecto-react-disweb-ll.firebaseapp.com",
  projectId: "proyecto-react-disweb-ll",
  storageBucket: "proyecto-react-disweb-ll.appspot.com",
  messagingSenderId: "293827805397",
  appId: "1:293827805397:web:1e6bac66249cf4bc47e25c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore();
export default appFirebase;

export const DB = getDatabase();

export const imageDb = getStorage(appFirebase)

