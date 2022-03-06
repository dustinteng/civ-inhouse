import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

// Firebase web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3cOgFcizEZPRapS7_8JCPnRYrAdedQHc",
  authDomain: "civ-robotics.firebaseapp.com",
  projectId: "civ-robotics",
  storageBucket: "civ-robotics.appspot.com",
  messagingSenderId: "155377639051",
  appId: "1:155377639051:web:1c776c3bb847d06d32be8e",
  measurementId: "G-PTKTJS806P",
};

initializeApp(firebaseConfig);
const db = getFirestore();

await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
});
