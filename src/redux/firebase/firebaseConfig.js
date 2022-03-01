import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCW4BV3nSn5jihkHyIksRFQw-ZXWOYUdSM",
  authDomain: "prueba-tecnica-7955b.firebaseapp.com",
  projectId: "prueba-tecnica-7955b",
  storageBucket: "prueba-tecnica-7955b.appspot.com",
  messagingSenderId: "920484251221",
  appId: "1:920484251221:web:96c362efde77870d0276dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export{
    app,
    db,
    google,
    facebook
}