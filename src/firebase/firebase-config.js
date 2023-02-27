import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMONxAj-Uq3doQTZDSJ-keSf46Hjs_YV4",
  authDomain: "where-s-waldo-aabae.firebaseapp.com",
  projectId: "where-s-waldo-aabae",
  storageBucket: "where-s-waldo-aabae.appspot.com",
  messagingSenderId: "336095719498",
  appId: "1:336095719498:web:f9fc8723ff2cb4b11d36b3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);