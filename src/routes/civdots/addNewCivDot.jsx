import React, { useState } from "react";
import { GlobalStyles } from "../../globalStyles";
import { GlobalPageStyles } from "../../globalPageStyles";

import { Dropdown } from "../../firebase/dropdown";
import { UserInput } from "../../firebase/userInput";

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

export default function AddNewCivDot(props) {
  const db = getFirestore();

  // const docRef = doc(db, "civRoverArchive", "asdasd");

  // const docSnap = async () => {
  //   const res = await getDoc(docRef);
  //   console.log("....", res.data());
  //   return res.data.name;
  // };

  // states
  const [robotType, setRobotType] = useState("");
  const [robotName, setRobotName] = useState("");
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("");
  const [descripton, setDescription] = useState("");

  const [path, setPath] = useState("a");
  const docRef = doc(db, "civrovers", path);

  //to send data
  const data = {
    Name: robotName,
    Type: robotType,
    Customer: customer,
    Status: status,
    Description: descripton,
  };

  const emptyInputs = () => {
    // setRobotType("");
    setRobotName("");
    // setCustomer("");
    // setStatus("");
    // setDescription("");
    // document.getElementById("userInput").value = "";
    console.log("robot desc, ", descripton);
  };

  const send = async () => {
    const res = await setDoc(doc(db, "civrovers", robotName), {
      data,
    });
  };

  const sendDatahelperFunction = () => {
    send();
    emptyInputs();
  };

  // helper function
  //called setRobotType rightaway

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setRobotType(value);
  };
  const handleNameChange = (event) => {
    setRobotName(event.target.value);
  };
  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  //called setStatus rightaway
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {};
  return (
    <div>
      <h1>Add a new CivDot </h1>
      <div style={GlobalPageStyles.contentContainer}>
        <Dropdown
          action=""
          callback={setRobotType}
          title="What CivDot type would you like to start?"
        >
          <option value="None">Drop down to pick the model</option>
          <option value="CivDot">CivDot</option>
          <option value="CivDot Plus">CivDot Plus</option>
          <option value="New CivDot Plus">New CivDot Plus</option>
        </Dropdown>
        {/* Rover Name */}
        <UserInput
          id="userInput"
          value={robotName}
          title="Rover Name: "
          callback={handleNameChange}
          onfocus="value"
        />
        {/* Customers Name */}
        <UserInput title="Customer name: " callback={handleCustomerChange} />
        {/* Status dropdown */}
        <Dropdown action="" callback={setStatus} title="Status?">
          <option value="0. Order received">0. Order received</option>
          <option value="1. Building Box">1. Building Box</option>
          <option value="2. Building Electrical System">
            2. Building Electrical System
          </option>
          <option value="3. Box is ready">3. Box is ready</option>
        </Dropdown>
        <UserInput title=" Description:" callback={handleDescriptionChange} />

        <button onClick={sendDatahelperFunction}>send!</button>
      </div>
    </div>
  );
}
