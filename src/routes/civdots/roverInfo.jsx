import React, { useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import Table from "../../component/popUpContent/table";

import { GlobalStyles } from "../../globalStyles";
import { GlobalPageStyles } from "../../globalPageStyles";

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

// Initializing Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

// const rawdata = {
//   Name: "robotName",
//   Type: "robotType",
//   Customer: "customer",
//   Status: "status",
//   Description: "descripton",
// };

export default function RoverInfo(props) {
  const db = getFirestore();

  // const q = query(collection(db, "civrovers"), where("name", "==", true));
  // const querySnapshot = await getDocs(collection(db, "cities"));

  const docSnap = async () => {
    const res = await getDoc(docRef);
    console.log("data going through", res.data());
    setData(res.data().data);
  };

  const roverName = props.roverName;

  const [data, setData] = useState("");
  const docRef = doc(db, "civrovers", roverName);
  const [roverData, setRoverData] = useState([]);

  return (
    <div styles={GlobalPageStyles.divideContainer}>
      <div styles={GlobalPageStyles.container1unit}>
        <h2>{data.Name}</h2>
        <text> {data.Type}</text>
        <text> {data.Customer}</text>
        <text> {data.Status}</text>
        <text> {data.Description}</text>
      </div>

      <button onClick={docSnap}>press me</button>
    </div>
  );
}
