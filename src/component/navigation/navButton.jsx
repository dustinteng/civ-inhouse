import React from "react";

import { useModuleUpdateStatus } from "../../context/moduleWindowContext.jsx";

import { useCurWindowUpdateState } from "../../context/contentWindowContext";

export default function NavButton(props) {
  const setWindow = useCurWindowUpdateState();
  const togglePopUp = useModuleUpdateStatus();

  function helperFunction() {
    setWindow(props.title);
    togglePopUp(false);
  }
  return (
    <div>
      <button style={styles.button} onClick={helperFunction}>
        <div style={styles.text}> {props.title}</div>
      </button>
    </div>
  );
}

const styles = {
  button: {
    padding: "5px 5px",
    margin: "5px 10px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#8E8E8E",
    color: "#FFF5ED",
    fontSize: "15px",
  },
  text: {},
};
