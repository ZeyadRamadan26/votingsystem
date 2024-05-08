// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "hci-project-bb492.firebaseapp.com",
  projectId: "hci-project-bb492",
  storageBucket: "hci-project-bb492.appspot.com",
  messagingSenderId: "205663049606",
  appId: "1:205663049606:web:c6e54c66fb2454b2e93e07"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)