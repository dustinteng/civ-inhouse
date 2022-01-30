import { Link } from "react-router-dom";
import { useState } from "react";

import Headers from "../component/content/headers.jsx";
// import ModuleButton from "../component/content/moduleButton.jsx";

import ModuleFullList from "./modules/moduleFullList.jsx";
import ModulesPopUpWindow from "./modules/modulesPopUpWindow.jsx";

import { useModuleStatus } from "../context/moduleWindowContext.jsx";

//import style
import { GlobalStyles } from "../globalStyles";

export default function Modules() {
  const popUpState = useModuleStatus();

  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title={"Modules :"} />
      <div style={styles.moduleButtonContainer}>
        {popUpState ? <ModulesPopUpWindow /> : <ModuleFullList />}
      </div>
    </div>
  );
}

const styles = {
  moduleButtonContainer: {
    width: "100%",
    height: "80%",
    padding: "10px 10px",
  },
};
