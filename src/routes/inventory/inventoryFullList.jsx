import { GlobalPageStyles } from "../../globalPageStyles";
import InventoryButton from "./InventoryButton";

import { useState } from "react";
import { useEffect } from "react";

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

import CategoryCard from "./categoryCard";
import PartCard from "./partCard";

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

export default function InventoryFullList() {
  const rawData = [
    {
      admin: "",
      id: "",
      name: "",
      link: "",
      quantity: "",
      rovers: [],
      timestamp: "",
      category: "",
      made: "",
    },
  ];
  const [hardwareParts, setHardwareParts] = useState(rawData);
  const [electricalParts, setElectricalParts] = useState(rawData);
  const [threeDPrintedParts, setThreeDPrintedParts] = useState(rawData);
  const [components, setComponents] = useState(rawData);

  const dbPath = "inventory/parts";

  const refHardware = collection(db, dbPath, "hardware");
  const refElectrical = collection(db, dbPath, "electrical");
  const refComponents = collection(db, dbPath, "components");
  const ref3dPrinted = collection(db, dbPath, "3d printed");

  const getDataHardware = async () => {
    const results = await hitFirebase.GetDocumentsUsingRef(refHardware);
    setHardwareParts(results.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const getDataElectrical = async () => {
    const results = await hitFirebase.GetDocumentsUsingRef(refElectrical);
    setElectricalParts(results.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const getDataComponents = async () => {
    const results = await hitFirebase.GetDocumentsUsingRef(refComponents);
    setComponents(results.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const getData3DPrinted = async () => {
    const results = await hitFirebase.GetDocumentsUsingRef(ref3dPrinted);
    setThreeDPrintedParts(
      results.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getDataHardware();
  }, []);

  return (
    <div style={GlobalPageStyles.safeAreaView}>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <CategoryCard title={"Hardware"} />
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <CategoryCard title={"Electrical"} />
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <CategoryCard title={"Components"} />
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <CategoryCard title={"Add New"} />
        </div>
      </div>
    </div>
  );
}
