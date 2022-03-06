import NavigationWindow from "./component/navigation/navigationWindow";
import ContentHome from "./component/content/contentHome";

import Modules from "./routes/modules";
import Inventory from "./routes/inventory.jsx";
import CivDots from "./routes/civdots";
import ToBuyList from "./routes/toBuyList";
import DropDownTest from "./firebase/dropDownTemplate";

import {
  ContextWindowProvider,
  useCurWindowState,
} from "./context/contentWindowContext";
import { ModuleProvider } from "./context/moduleWindowContext";
import { CivDotProvider } from "./context/civdotWindowContext";
import { InventoryProvider } from "./context/inventoryWindowContext";
export default function App() {
  const curWindow = useCurWindowState();
  return (
    <div style={styles.all}>
      <ModuleProvider>
        <CivDotProvider>
          <InventoryProvider>
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
          </InventoryProvider>
        </CivDotProvider>
      </ModuleProvider>
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

    flex: "1",
  },
  content: {
    display: "flex",
    backgroundColor: "#FFF5ED",
    flex: "7",
    height: "100%",
    width: "100%",
  },
};
