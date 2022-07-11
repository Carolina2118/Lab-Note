// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";// se coloco un modulo.

const firebaseConfig = {

  apiKey: "AIzaSyAmCSui_my6zEKNtxNOJ4lUnxYFk7XiBSY",
  authDomain: "lab-note-822b5.firebaseapp.com",
  projectId: "lab-note-822b5",
  storageBucket: "lab-note-822b5.appspot.com",
  messagingSenderId: "982885761655",
  appId: "1:982885761655:web:2938a87f96277b2a0abc72"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); //para salir 

 export function registro( email, password){
   return createUserWithEmailAndPassword(auth,email, password);
}
 export function useAuth(){
    const[currentUser,setcurretUser]
 }