import Headers from "../component/content/headers.jsx";
import ModuleFullList from "./modules/moduleFullList.jsx";
import ModulesPopUpWindow from "./modules/modulesPopUpWindow.jsx";
import { GlobalPageStyles } from "../globalPageStyles.jsx";
import { useModuleStatus } from "../context/moduleWindowContext.jsx";

//import style
import { GlobalStyles } from "../globalStyles";

export default function Modules() {
  const moduleState = useModuleStatus();

  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title={"Modules :"} />
      <div style={GlobalPageStyles.outerSafeAreaContainer}>
        {moduleState ? <ModulesPopUpWindow /> : <ModuleFullList />}
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
