import React from "react";
import {
  useCivDotUpdateStatus,
  useCivDotUpdateContent,
} from "../../context/civdotWindowContext.jsx";

export default function CivDotButton(props) {
  const setCivDotWindowState = useCivDotUpdateStatus();
  const setCurCivDotWindow = useCivDotUpdateContent();

  const title = props.title;

  function togglePopUp() {
    setCivDotWindowState((a) => !a);
  }

  function helperFunction() {
    togglePopUp();
    setCurCivDotWindow(title);
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
    width: "150px",
    height: "200px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};
