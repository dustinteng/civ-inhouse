import NavigationWindow from "./component/navigation/navigationWindow";
import ContentHome from "./component/content/contentHome";

import Modules from "./routes/modules";
import Inventory from "./routes/inventory.jsx";
import CivDots from "./routes/civdots";
import ToBuyList from "./routes/toBuyList";
import DropDownTest from "./firebase/dropDownTemplate";

import { PopUpProvider } from "./component/content/popUpWindowContext";
import {
  ContextWindowProvider,
  useCurWindowState,
} from "./component/content/contentWindowContext";

export default function App() {
  const curWindow = useCurWindowState();
  return (
    <div style={styles.all}>
      <PopUpProvider>
        <div style={styles.navWindow}>
          <NavigationWindow />
        </div>
        <div style={styles.content}>
          {{
            Home: <ContentHome />,
            Modules: <Modules />,
            Inventory: <Inventory />,
            CivDots: <CivDots />,
            "To Buy List": <ToBuyList />,
            tester: <DropDownTest />,
          }[curWindow] || <ContentHome />}
        </div>
      </PopUpProvider>
    </div>
  );
}

const styles = {
  all: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  navWindow: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
  },
  content: {
    display: "flex",
    backgroundColor: "#FFF5ED",
    flex: 3,
    height: "100%",
    width: "100%",
  },
};
