import { initializeApp } from "firebase/app";
import { useState } from "react";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  orderBy,
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

export const QueryCall = async (dbPath, logic) => {
  const q = query(collection(db, dbPath), logic);
};
//
//   const querySnapshot = await getDocs(collection(db, props.dbpath));

// export const DocSnap = async (...arg) => {
//   const res = await getDoc(doc(db, arg));
//   console.log("res", res);
//   return res.data().data;
// };
export const GetDocuments = async (dbPath) => {
  const q = query(collection(db, dbPath));
  const documents = await getDocs(q);

  // documents.docs.forEach((doc) => {
  //   console.log(doc.data().data);
  // });
  return documents.docs;
};

export const DocSnap = async (dbPath, docPath) => {
  const res = await getDoc(doc(db, dbPath, docPath));
  return res.data().data;
};
export const Send = async (dbPath, docPath, data) => {
  const res = await setDoc(doc(db, dbPath, docPath), {
    data,
  });
  console.log("data", data);
};

export const SendInventory = async (ref, data) => {
  const res = await setDoc(
    ref,
    {
      data,
    },
    { merge: true }
  );
  console.log("inventory send", data);
};
