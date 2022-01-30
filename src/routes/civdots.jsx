import Headers from "../component/content/headers.jsx";
import { Dropdown } from "../firebase/dropdown.jsx";
import CivDotArchive from "./civdots/civdotArchive.jsx";
import { useState } from "react";
//import style

import { GlobalStyles } from "../globalStyles";
export default function CivDots() {
  const [popUpWindow, setPopUpWindow] = useState(false);

  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title={"Civ Dots :"} />
      <div style={styles.civDotContainer1}>
        <div style={styles.civDotContainer2}>
          {" "}
          <h3> in house </h3>
          {/* <button onClick = {}></button> */}
        </div>
        <div style={styles.civDotContainer2}>
          {" "}
          <h3> in asdasd </h3>{" "}
        </div>
      </div>
    </div>
  );
}

const styles = {
  civDotContainer1: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: "1",
  },
  civDotContainer2: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
  },
};
