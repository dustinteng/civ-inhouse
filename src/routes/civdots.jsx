import Headers from "../component/content/headers.jsx";
import CivDotArchive from "./civdots/addNewCivDot.jsx";
import CivDotsPopUpWindow from "./civdots/civdotsPopUpWindow.jsx";
import CivDotFullList from "./civdots/civdotFullList.jsx";

import { useCivDotStatus } from "../context/civdotWindowContext.jsx";
import CivDotButton from "../component/content/civdotButton.jsx";
import { GlobalStyles } from "../globalStyles";

export default function CivDots() {
  const CivDotState = useCivDotStatus();

  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title={"Civ Dots :"} />
      <div style={styles.CivDotWindowContainer}>
        {CivDotState ? <CivDotsPopUpWindow /> : <CivDotFullList />}
      </div>
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
