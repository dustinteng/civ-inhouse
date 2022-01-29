import { Link } from "react-router-dom";
import { useState } from "react";

import React from "react";
import ContentAreaView from "../component/content/contentAreaView.jsx";

import Headers from "../component/content/headers.jsx";
import ContentHome from "../component/content/contentHome.jsx";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

//import style
import { GlobalStyles } from "../globalStyles";

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
// const analytics = getAnalytics(firebaseApp);
// const auth = getAuth(firebaseApp);
const db = getFirestore();

const docRef = doc(db, "inventory", "box");

const docSnap = async () => {
  const res = await getDoc(docRef);
  console.log("....", res.data());
  return res.data.name;
};

export default function Inventory() {
  const [itemName, setItemName] = useState();
  const [itemCategory, setItemCategory] = useState();
  const [itemQuantity, setItemQuantity] = useState();
  const [itemTags, setItemTags] = useState();

  const data = {
    name: itemName,
    quantity: parseInt(itemQuantity, 10),
    category: itemCategory,
    tags: itemTags,
  };

  const send = async () => {
    const res = await setDoc(doc(db, "inventory", itemName), {
      data,
    });
    console.log("senttt haha", res);
  };
  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title="Inventory : " />
      <ContentAreaView>
        <label>
          Item Name:
          <input onChange={(event) => setItemName(event.target.value)} />
        </label>
        <label>
          {" "}
          Item Category:
          <input onChange={(event) => setItemCategory(event.target.value)} />
        </label>
        <label>
          {" "}
          Item Quantity:
          <input onChange={(event) => setItemQuantity(event.target.value)} />
        </label>
        <label>
          {" "}
          Item Tags:
          <input onChange={(event) => setItemTags(event.target.value)} />
        </label>

        <button
          style={styles.button}
          onClick={(itemName, itemCategory, itemQuantity, itemTags) =>
            send(itemName, itemCategory, itemQuantity, itemTags)
          }
        >
          {" "}
          send{" "}
        </button>
        <button style={styles.button} onClick={docSnap}>
          {" "}
          get{" "}
        </button>
      </ContentAreaView>
    </div>
  );
}

const styles = {
  homeContent: { width: "100%", height: "80%", padding: "10px 10px" },

  button: { width: "100px", height: "100px" },
};
