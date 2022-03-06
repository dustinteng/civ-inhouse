import Headers from "../component/content/headers.jsx";
import InventoryFullList from "./inventory/inventoryFullList.jsx";
import InventoryPopUpWindow from "./inventory/inventoryPopUpWindow.jsx";
import { GlobalPageStyles } from "../globalPageStyles.jsx";
import { useInventoryStatus } from "../context/inventoryWindowContext.jsx";

//import style
import { GlobalStyles } from "../globalStyles";

export default function Inventory() {
  const inventoryState = useInventoryStatus();

  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title={"Inventory :"} />
      <div style={GlobalPageStyles.outerSafeAreaContainer}>
        {inventoryState ? <InventoryPopUpWindow /> : <InventoryFullList />}
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
