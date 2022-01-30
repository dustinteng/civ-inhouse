import React, { useContext, useState } from "react";

// knowing and updating if the pop up window is currently open / not
const CivDotStateContext = React.createContext();
const CivDotUpdateStateContext = React.createContext();

// checking and updating pop up window's content
const CivDotContentContext = React.createContext();
const CivDotUpdateContentContext = React.createContext();

// creating functions
export function useCivDotStatus() {
  return useContext(CivDotStateContext);
}

export function useCivDotUpdateStatus() {
  return useContext(CivDotUpdateStateContext);
}

export function useCivDotContent() {
  return useContext(CivDotContentContext);
}

export function useCivDotUpdateContent() {
  return useContext(CivDotUpdateContentContext);
}

export function CivDotProvider({ children }) {
  const [isCivDotWindowOpen, setIsCivDotWindowOpen] = useState(false);
  function togglePopUp() {
    setIsCivDotWindowOpen((cur) => !cur);
  }
  const [curPopUpWindow, setCurPopUpWindow] = useState("home");

  return (
    <CivDotStateContext.Provider value={isCivDotWindowOpen}>
      <CivDotUpdateStateContext.Provider value={setIsCivDotWindowOpen}>
        <CivDotContentContext.Provider value={curPopUpWindow}>
          <CivDotUpdateContentContext.Provider value={setCurPopUpWindow}>
            {children}
          </CivDotUpdateContentContext.Provider>
        </CivDotContentContext.Provider>
      </CivDotUpdateStateContext.Provider>
    </CivDotStateContext.Provider>
  );
}
