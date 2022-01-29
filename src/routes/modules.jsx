import { Link } from "react-router-dom";
import { useState } from "react";

import Headers from "../component/content/headers.jsx";
// import ModuleButton from "../component/content/moduleButton.jsx";

import ModuleFullList from "./modules/moduleFullList.jsx";
import PopUpWindow from "../component/content/modulesPopUpWindow.jsx";

import { usePopUpStatus } from "../component/content/popUpWindowContext.jsx";

export default function Modules() {
  const popUpState = usePopUpStatus();

  return (
    <div style={styles.safeArea}>
      <Headers title={"Modules :"} />
      <div style={styles.moduleButtonContainer}>
        {popUpState ? <PopUpWindow /> : <ModuleFullList />}
      </div>
    </div>
  );
}

const styles = {
  safeArea: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 50px",
    display: "flex",
    height: "100%",
    width: "100%",
  },

  moduleButtonContainer: {
    width: "100%",
    height: "80%",
    padding: "10px 10px",
  },
};
