import React from "react";
import {
  useInventoryUpdateStatus,
  useInventoryUpdateContent,
} from "../../context/inventoryWindowContext.jsx";

export default function InventoryButton(props) {
  const InventoryWindowUpdateState = useInventoryUpdateStatus();
  const setCurInventoryWindow = useInventoryUpdateContent();

  const color = props.color;
  const title = props.title;

  function helperFunction() {
    setCurInventoryWindow(title);
    InventoryWindowUpdateState(true);
  }
  return (
    <div style={styles.buttonsSAV}>
      <button style={styles.buttons} onClick={helperFunction}>
        {" "}
        {title}{" "}
      </button>
    </div>
  );
}

const styles = {
  buttonsSAV: {
    padding: "5px 10px",
  },
  buttons: {
    padding: "5px 10px",
    backgroundColor: "#FFCEA4",
    width: "100%",
    height: "35px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};
