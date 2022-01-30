import Headers from "../component/content/headers.jsx";
import CivDotArchive from "./civdots/civdotArchive.jsx";
import CivDotsPopUpWindow from "./civdots/civdotsPopUpWindow.jsx";

import { useCivDotStatus } from "../context/civdotWindowContext.jsx";
import CivDotButton from "../component/content/civdotButton.jsx";
import { GlobalStyles } from "../globalStyles";

export default function CivDots() {
  const CivDotState = useCivDotStatus();

  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title={"Civ Dots :"} />
      <CivDotButton />
      {/* <div style={styles.CivDotStateContainer}>
        {CivDotState ? <CivDotsPopUpWindow /> : <CivDotArchive />}
      </div> */}
      {/* <div style={styles.civDotContainer1}>
        <div style={styles.civDotContainer2}>
          {" "}
          <h3> in house </h3>
        </div>
        <div style={styles.civDotContainer2}>
          {" "}
          <h3> in asdasd </h3>{" "}
        </div>
      </div> */}
    </div>
  );
}

const styles = {
  CivDotWindowContainer: {
    width: "100%",
    height: "80%",
    padding: "10px 10px",
  },
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
