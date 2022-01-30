import React from "react";
import {
  useModuleUpdateStatus,
  useModuleUpdateContent,
} from "../../context/moduleWindowContext.jsx";

export default function ModuleButton(props) {
  const moduleWindowUpdateState = useModuleUpdateStatus();
  const setCurModuleWindow = useModuleUpdateContent();

  const color = props.color;
  const title = props.title;

  function helperFunction() {
    setCurModuleWindow(title);
    moduleWindowUpdateState(true);
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
