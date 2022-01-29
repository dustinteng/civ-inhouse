import { useState } from "react";
import React from "react";

import NavButton from "./navButton.jsx";
import { useCurWindowUpdateState } from "../content/contentWindowContext";

const imagePath = "/assets/images/webpage/";

export default function NavigationWindow(props) {
  const setWindow = useCurWindowUpdateState();

  return (
    <div style={styles.navPanel}>
      <div style={styles.logo}>
        <img
          style={styles.images}
          src={imagePath + "civrobotics.png"}
          alt="logo"
          onClick={() => setWindow("Home")}
        />
      </div>
      <div style={styles.navButtonsContainer}>
        <div style={styles.buttonSafeView}>
          <NavButton title="Modules" />
          <NavButton title="Inventory" />
          <NavButton title="CivDots" />
          <NavButton title="To Buy List" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  navPanel: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  logo: {
    display: "flex",
    height: "100px",
    backgroundColor: "#FEBB80",
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonsContainer: {
    display: "flex",
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#8E8E8E",
    alignItems: "center",
    pading: "30px 30px",
  },
  images: {
    width: "130px",
    height: "120px",
  },
  button: {
    padding: "5px 5px",
    margin: "2px 10px",
    cursor: "pointer",
    border: "none",
  },
  buttonSafeView: {
    padding: "10px 5px",
  },
};
