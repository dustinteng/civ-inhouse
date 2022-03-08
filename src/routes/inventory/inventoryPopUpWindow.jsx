import React from "react";

import ContentHome from "../../component/content/contentHome";
//importing styles
import { GlobalStyles } from "../../globalStyles";
import { useState } from "react";
// importing all the contents
import AddNewInventory from "./addNewInventory";
import CategoryInfo from "./categoryInfo";
import PartInfo from "./partInfo";

// importing the contexts
import {
  useInventoryUpdateStatus,
  useInventoryContent,
} from "../../context/inventoryWindowContext";

export default function InventoryPopUpWindow() {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("hardware");
  const togglePopUp = useInventoryUpdateStatus();
  const curPopUpWindow = useInventoryContent();

  return (
    <div style={GlobalStyles.popUpBox}>
      <div style={GlobalStyles.box}>
        <button
          style={GlobalStyles.buttonClose}
          onClick={() => togglePopUp(false)}
        >
          {" "}
          X{" "}
        </button>
        {{
          "Add New": <AddNewInventory />,
          Hardware: (
            <CategoryInfo
              col="hardware"
              setCategory={setCategory}
              setId={setId}
            />
          ),
          Components: (
            <CategoryInfo
              col="components"
              setCategory={setCategory}
              setId={setId}
            />
          ),
          Electrical: (
            <CategoryInfo
              col="electrical"
              setCategory={setCategory}
              setId={setId}
            />
          ),
          "Part Info": <PartInfo />,
        }[curPopUpWindow] || <ContentHome />}
      </div>
    </div>
  );
}
