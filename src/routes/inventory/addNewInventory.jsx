import React, { useState } from "react";
import { GlobalStyles } from "../../globalStyles";
import { GlobalPageStyles } from "../../globalPageStyles";

import { Dropdown } from "../../firebase/dropdown";
import { UserInput } from "../../firebase/userInput";
import { MultipleAnswers } from "../../firebase/multipleAnswers";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  Timestamp,
  collection,
} from "firebase/firestore";

import * as hitFirebase from "../../firebase/hitFirebase";
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

export default function AddNewInventory(props) {
  const [dbPath, setDbPath] = useState("inventory/parts");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rovers, setRovers] = useState([]);
  const [timeStamp, setTimestamp] = useState("");
  const [category, setCategory] = useState("");

  const data = {
    id: id,
    name: name,
    link: link,
    timestamp: timeStamp,
    rovers: rovers,
    quantity: quantity,
  };

  const handleIDChange = (event) => {
    setId(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const cleanInputBox = () => {
    setId("");
    setName("");
    setLink("");
    setQuantity("");
    setRovers("");
    setCategory("");
  };

  const sendInventory = () => {
    setTimestamp(Timestamp.now());
    const ref = doc(db, dbPath, category, id);
    // console.log("data", data);
    hitFirebase.SendInventory(ref, data);
    cleanInputBox();
  };
  return (
    <div>
      <div style={GlobalPageStyles.divideContainer}>
        <h3> Add New Inventory </h3>
      </div>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <UserInput value={id} title="CIV Name: " callback={handleIDChange} />
          <UserInput
            value={name}
            title="Product Name: "
            callback={handleNameChange}
          />
          <UserInput
            value={link}
            title="Product Link: "
            callback={handleLinkChange}
          />
          <UserInput
            value={quantity}
            title="Product Quantity: "
            callback={handleQuantityChange}
          />

          <MultipleAnswers
            title="Used By"
            rovers={rovers}
            setRovers={setRovers}
          ></MultipleAnswers>

          <Dropdown action="" callback={setCategory} title="Part Category:">
            <option value="None" selected hidden>
              Drop down to pick category
            </option>
            <option value="hardware">Hardware</option>
            <option value="electrical">Electrical</option>
            <option value="3d printed">3D Printed</option>
            <option value="components">components</option>
          </Dropdown>

          <button onClick={() => sendInventory()}> send </button>
        </div>
      </div>
    </div>
  );
}
