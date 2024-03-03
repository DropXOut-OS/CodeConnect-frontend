import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6_0hioySCGymxGRz0-PRwb3RHUTMGVMI",
  authDomain: "code-connect-c7c29.firebaseapp.com",
  projectId: "code-connect-c7c29",
  storageBucket: "code-connect-c7c29.appspot.com",
  messagingSenderId: "458054152376",
  appId: "1:458054152376:web:4b01ae05f6a713303b044d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
