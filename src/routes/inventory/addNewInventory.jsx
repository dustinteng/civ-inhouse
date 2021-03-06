import React, { useState } from "react";
import { GlobalStyles } from "../../globalStyles";
import { GlobalPageStyles } from "../../globalPageStyles";

import { Dropdown } from "../../firebase/dropdown";
import { UserInput } from "../../firebase/userInput";
import { MultipleAnswers } from "../../firebase/multipleAnswers";
import { initializeApp } from "firebase/app";
import { useInventoryUpdateStatus } from "../../context/inventoryWindowContext";

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
  const togglePopUp = useInventoryUpdateStatus();

  const [dbPath, setDbPath] = useState("inventory/parts");

  const [admin, setAdmin] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rovers, setRovers] = useState([]);
  const [timeStamp, setTimestamp] = useState(Timestamp.now());
  const [category, setCategory] = useState("");
  const [made, SetMade] = useState("");

  const data = {
    admin: admin,
    id: id,
    name: name,
    link: link,
    quantity: quantity,
    rovers: rovers,
    timestamp: timeStamp,
    category: category,
    made: false,
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

  const Send = () => {
    console.log("timeStamp", timeStamp);
    const ref = doc(db, dbPath, category, id);
    // console.log("data", data);
    hitFirebase.SendData(ref, data);
    cleanInputBox();
    togglePopUp(false);
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

          <Dropdown action="" callback={setCategory} title="Part Category:">
            <option value="None" selected hidden>
              Drop down to pick category
            </option>
            <option value="hardware">Hardware</option>
            <option value="electrical">Electrical</option>
            <option value="3d printed">3D Printed</option>
            <option value="components">Components</option>
          </Dropdown>

          <Dropdown action="" callback={setAdmin} title="Last Updated By:">
            <option value="None" selected hidden>
              Drop down to pick your user
            </option>
            <option value="Jan">Jan</option>

            <option value="Sharath">Sharath</option>
            <option value="Liav">Liav</option>
            <option value="Tom">Tom</option>
          </Dropdown>
          <Dropdown action="" callback={SetMade} title="Made In-House:">
            <option value="None" selected hidden>
              process needed?
            </option>
            <option value="No" selected>
              No
            </option>
            <option value="Yes">Yes</option>
          </Dropdown>
          <MultipleAnswers
            title="Used by Rovers: "
            rovers={rovers}
            setRovers={setRovers}
          ></MultipleAnswers>
          <button onClick={() => Send()}> send </button>
        </div>
      </div>
    </div>
  );
}
