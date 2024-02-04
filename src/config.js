// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgwJZ8uN-JfELCucNoo7qCTWLo7SuNhy4",
  authDomain: "nsutai.firebaseapp.com",
  projectId: "nsutai",
  storageBucket: "nsutai.appspot.com",
  messagingSenderId: "351984068555",
  appId: "1:351984068555:web:cbdf91a3c2e0847c74784e",
  measurementId: "G-7R6FMZ8LMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();  
export {auth,provider};
