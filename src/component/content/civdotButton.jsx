import React from "react";
import {
  useCivDotUpdateStatus,
  useCivDotUpdateContent,
} from "../../context/civdotWindowContext.jsx";

import { GlobalPageStyles } from "../../globalPageStyles.jsx";
import ImageContainer from "../popUpContent/imageContainer.jsx";

export default function CivDotButton(props) {
  const setCivDotWindowState = useCivDotUpdateStatus();
  const setCurCivDotWindow = useCivDotUpdateContent();
  const imagePath = "antenna/";

  const title = props.title;

  function togglePopUp() {
    setCivDotWindowState((state) => !state);
  }

  function helperFunction() {
    togglePopUp();
    setCurCivDotWindow(title);
  }
  return (
    <div style={styles.buttonsSAV}>
      <button style={styles.buttons} onClick={helperFunction}>
        <div
          style={{
            ...GlobalPageStyles.contentContainer,
            textDecoration: "underline",
          }}
        >
          {title}
        </div>
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
