import { GlobalPageStyles } from "../../globalPageStyles";
import InventoryButton from "./InventoryButton";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

export default function InventoryFullList() {
  return (
    <div style={GlobalPageStyles.safeAreaView}>
      <InventoryButton title={"Add New"} />
      <div style={GlobalPageStyles.contentContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <InventoryButton title={"check "} />
        </div>
        <div style={GlobalPageStyles.container1unit}>
          {/* input the inventory table here brow */}
        </div>
      </div>
    </div>
  );
}
