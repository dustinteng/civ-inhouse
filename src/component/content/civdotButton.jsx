import React from "react";
import {
  PopUpProvider,
  usePopUpStatus,
  usePopUpUpdateStatus,
  usePopUpContent,
  usePopUpUpdateContent,
} from "./popUpWindowContext.jsx";

export default function ModuleButton(props) {
  const popUpWindowUpdateState = usePopUpUpdateStatus();
  const setCurPopUpWindow = usePopUpUpdateContent();

  const title = props.title;

  function helperFunction() {
    setCurPopUpWindow(title);
    popUpWindowUpdateState(true);
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
