// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0AaSG9FfTolqAxwLohQv1hBKzkejWJ0w",
  authDomain: "tcc-tickets-60ac1.firebaseapp.com",
  projectId: "tcc-tickets-60ac1",
  storageBucket: "tcc-tickets-60ac1.appspot.com",
  messagingSenderId: "1023662272898",
  appId: "1:1023662272898:web:b58565a7ea5b0988dbdf9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db }
