import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE,
  authDomain: "jog-journal-c324d.firebaseapp.com",
  projectId: "jog-journal-c324d",
  storageBucket: "jog-journal-c324d.firebasestorage.app",
  messagingSenderId: "726856946108",
  appId: "1:726856946108:web:3c08008132a09d875f1bb9",
  measurementId: "G-0RRFJZLBTE",
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const firestore = getFirestore(db);

export { firestore };
