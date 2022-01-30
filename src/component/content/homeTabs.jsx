import React from "react";
import { useCurWindowUpdateState } from "../../context/contentWindowContext";
import { useModuleUpdateStatus } from "../../context/moduleWindowContext";

export default function HomeTab(props) {
  const title = props.title;
  const updateContentState = useCurWindowUpdateState();
  const resetBackToModuleLists = useModuleUpdateStatus(false);
  function helperFunction() {
    updateContentState(title);
    resetBackToModuleLists();
  }
  return (
    <div>
      <button style={styles.wholeTab} onClick={() => helperFunction()}>
        <div>
          <h3>{title}</h3>
        </div>
      </button>
    </div>
  );
}

const styles = {
  wholeTab: {
    display: "flex",
    backgroundColor: "#FE9E4A",
    borderRadius: "10%",
    width: "200px",
    height: "150px",
    justifyContent: "center",
    alignItems: "baseline",
    padding: "10px 10px",
    margin: "15px 15px",
  },
};
