import React, { useState } from "react";
import { useEffect } from "react";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { Info } from "../../component/popUpContent/info";

import { GlobalPageStyles } from "../../globalPageStyles";

import * as hitFirebase from "../../firebase/hitFirebase";

import {
  usePartCollectionStatus,
  useUpdatePartCollectionStatus,
  usePartName,
  usePartNameUpdate,
} from "../../context/inventoryWindowContext.jsx";

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
const rawData = {
  data: {
    admin: "",
    id: "not getting data",
    name: "",
    link: "",
    quantity: "",
    rovers: [],
    timestamp: "",
    category: "",
    made: "",
  },
};

export default function PartInfo(props) {
  const [parts, setParts] = useState(rawData);

  const collection = usePartCollectionStatus();
  const document = usePartName();
  const dbPath = `inventory/parts/${collection}`;

  const getData = async () => {
    console.log("dbPath:", dbPath);

    const results = await hitFirebase.DocSnap(dbPath, document);
    setParts(results);
    console.log("results", results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div style={GlobalPageStyles.outerSafeAreaContainer}>
        <h3>{parts.id}</h3>
        {/* Rover */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Part Information</h3>
            <Info value={parts.name} title="Product Name: " />
            <Info value={parts.quantity} title="Quantity:" />
            <Info value={parts.admin} title="Last Admin:" />
            <Info value={parts.timestamp} title="Time Stamp:" />
            <Info value={parts.rovers} title="Rovers Type:" />
            <Info value={parts.category} title="Category:" />
          </div>
        </div>
      </div>
    </div>
  );
}
