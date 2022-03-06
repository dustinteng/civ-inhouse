import React from "react";

import ContentHome from "../../component/content/contentHome";
//importing styles
import { GlobalStyles } from "../../globalStyles";

// importing all the contents
import AddNewInventory from "./addNewInventory";

// importing the contexts
import {
  useInventoryUpdateStatus,
  useInventoryContent,
} from "../../context/inventoryWindowContext";

export default function InventoryPopUpWindow() {
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
        }[curPopUpWindow] || <ContentHome />}
      </div>
    </div>
  );
}
