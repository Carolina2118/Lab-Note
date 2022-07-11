// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";// se coloco un modulo.


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

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