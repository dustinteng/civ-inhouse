import { useState } from "react";
import { useEffect } from "react";

import { GlobalPageStyles } from "../../globalPageStyles";
import { initializeApp } from "firebase/app";
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
import * as hitFirebase from "../../firebase/hitFirebase";
import PartCard from "./partCard";
import { useUpdatePartCollectionStatus } from "../../context/inventoryWindowContext";

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

export default function CategoryInfo(props) {
  const rawData = [
    {
      data: {
        admin: "",
        id: "tester",
        name: "",
        link: "",
        quantity: "",
        rovers: [],
        timestamp: "",
        category: "",
        made: "",
      },
    },
  ];

  const [parts, setParts] = useState(rawData);
  const updateCollection = useUpdatePartCollectionStatus();
  const dbPath = "inventory/parts";

  //context provider current collection
  const col = props.col;
  updateCollection(col);

  const ref = collection(db, dbPath, col);

  const getData = async () => {
    const results = await hitFirebase.GetDocumentsUsingRef(ref);
    setParts(results.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const displayParts = parts.map((res, index) => {
    return (
      <div key={index} style={GlobalPageStyles.safeAreaView}>
        <PartCard
          title={res.data.id}
          quantity={res.data.quantity}
          setId={props.setId}
        />
      </div>
    );
  });
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div style={GlobalPageStyles.outerSafeAreaContainer}>
        <h3>{col}</h3>
        {/* Rover */}
        <div style={GlobalPageStyles.contentContainer}>{displayParts} </div>
      </div>
    </div>
  );
}
