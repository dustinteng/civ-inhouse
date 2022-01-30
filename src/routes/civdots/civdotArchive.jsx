import React, { useState } from "react";
import { Dropdown } from "../../firebase/dropdown";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

export default function CivDotArchive(props) {
  const db = getFirestore();

  const docRef = doc(db, "civRoverArchive", "asdasd");

  const docSnap = async () => {
    const res = await getDoc(docRef);
    console.log("....", res.data());
    return res.data.name;
  };

  // states
  const [robotType, setRobotType] = useState([]);
  const [robotName, setRobotName] = useState("CivDotTester");
  const [customer, setCustomer] = useState("customer name");
  const [status, setStatus] = useState("1. building box");
  const [descripton, setDescription] = useState("1. building box");
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (answer) => {
    console.log("aaa", answer.target.value);
    setOptionValue(answer.target.value);
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setRobotType(value);
    console.log("type", value);
  };
  const handleNameChange = (event) => {
    setRobotName(event.target.value);
    console.log("Nameee", event.target.value);
  };
  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
    console.log("customer", event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    console.log("status", event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log("description", event.target.value);
  };

  const handleSubmit = (event) => {};
  return (
    <div>
      <h1>CivRobotics robot archive </h1>
      <Dropdown
        formLabel="What CivDot type would you like to start?"
        onChange={(e) => handleTypeChange(e)}
        action=""
        value={robotType}
      >
        <option selected value="Click to see options">
          Options
        </option>
        <option value="CivDot">CivDot</option>
        <option value="CivDot Plus">CivDot Plus</option>
        <option value="New CivDot Plus">New CivDot Plus</option>
      </Dropdown>
      <p>robot type is: {robotType}</p>
      <label>
        Rover Name:
        <input onChange={(e) => handleNameChange(e)} />
      </label>
      <p>robot name is {robotName}</p>
    </div>
  );
}
