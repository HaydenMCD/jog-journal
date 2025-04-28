import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE,
  authDomain: "jogjournal.firebaseapp.com",
  projectId: "jogjournal",
  storageBucket: "jogjournal.firebasestorage.app",
  messagingSenderId: "352937565243",
  appId: "1:352937565243:web:bf7f6edb57a0fc5566101e",
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const firestore = getFirestore(db);

export { firestore };
