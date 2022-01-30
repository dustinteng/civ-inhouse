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
  const [isModuleWindowOpen, setIsModuleWindowOpen] = useState(false);

  const [curModuleWindow, setCurModuleWindow] = useState("home");

  return (
    <ModuleStateContext.Provider value={isModuleWindowOpen}>
      <ModuleUpdateStateContext.Provider value={setIsModuleWindowOpen}>
        <ModuleContentContext.Provider value={curModuleWindow}>
          <ModuleUpdateContentContext.Provider value={setCurModuleWindow}>
            {children}
          </ModuleUpdateContentContext.Provider>
        </ModuleContentContext.Provider>
      </ModuleUpdateStateContext.Provider>
    </ModuleStateContext.Provider>
  );
}
