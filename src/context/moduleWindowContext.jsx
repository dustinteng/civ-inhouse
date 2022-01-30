import React, { useContext, useState } from "react";

// knowing and updating if the pop up window is currently open / not
const ModuleStateContext = React.createContext();
const ModuleUpdateStateContext = React.createContext();

// checking and updating pop up window's content
const ModuleContentContext = React.createContext();
const ModuleUpdateContentContext = React.createContext();

// creating functions
export function useModuleStatus() {
  return useContext(ModuleStateContext);
}

export function useModuleUpdateStatus() {
  return useContext(ModuleUpdateStateContext);
}

export function useModuleContent() {
  return useContext(ModuleContentContext);
}

export function useModuleUpdateContent() {
  return useContext(ModuleUpdateContentContext);
}

export function ModuleProvider({ children }) {
  const [isPopUpWindowOpen, setIsPopUpWindowOpen] = useState(false);
  function togglePopUp() {
    setIsPopUpWindowOpen((cur) => !cur);
  }
  const [curPopUpWindow, setCurPopUpWindow] = useState("home");

  return (
    <ModuleStateContext.Provider value={isPopUpWindowOpen}>
      <ModuleUpdateStateContext.Provider value={setIsPopUpWindowOpen}>
        <ModuleContentContext.Provider value={curPopUpWindow}>
          <ModuleUpdateContentContext.Provider value={setCurPopUpWindow}>
            {children}
          </ModuleUpdateContentContext.Provider>
        </ModuleContentContext.Provider>
      </ModuleUpdateStateContext.Provider>
    </ModuleStateContext.Provider>
  );
}
