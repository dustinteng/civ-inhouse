import React from "react";
import { useState } from "react";

import ContentAreaView from "../component/content/contentAreaView.jsx";
import Headers from "../component/content/headers.jsx";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import * as hitFirebase from "../firebase/hitFirebase.jsx";

//import style
import { GlobalStyles } from "../globalStyles";
import { GlobalPageStyles } from "../globalPageStyles";

export default function Inventory() {
  const [findItem, setFindItem] = useState();

  const [itemName, setItemName] = useState();
  const [itemCategory, setItemCategory] = useState();
  const [itemQuantity, setItemQuantity] = useState();
  const [itemTags, setItemTags] = useState();
  const [dbPath, setDbPath] = useState("inventory");
  const [docPath, setDocPath] = useState("");
  const data = {
    name: itemName,
    quantity: parseInt(itemQuantity, 10),
    category: itemCategory,
    tags: itemTags,
  };

  const docSnap = async (document) => {
    const res = await hitFirebase.DocSnap(dbPath, document);
    console.log("result docSnap", res);
    setItemCategory(res.category);
  };
  const send = (document) => {
    hitFirebase.Send(dbPath, document, data);
  };

  // const queryHit = () => {
  //   hitFirebase.q(dbPath, where("name", "==", true));
  // };
  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title="Inventory : " />
      <div style={GlobalPageStyles.outerSafeAreaContainer}>
        <div style={GlobalPageStyles.divideContainer}>
          <div style={GlobalPageStyles.container1unit}>
            <label>
              Find Item:
              <input onChange={(event) => setFindItem(event.target.value)} />
            </label>
            <button style={styles.button} onClick={() => docSnap(findItem)}>
              {" "}
              get{" "}
            </button>
            <text>category: {data.category}</text>
          </div>
        </div>
      </div>
      <div style={GlobalPageStyles.divideContainer}></div>
    </div>
  );
}

const styles = {
  homeContent: { width: "100%", height: "80%", padding: "10px 10px" },

  button: { width: "100px", height: "20px" },
};
