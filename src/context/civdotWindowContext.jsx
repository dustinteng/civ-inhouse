import React, { useContext, useState } from "react";

// knowing and updating if the pop up window is currently open / not
const CivDotStateContext = React.createContext();
const CivDotUpdateStateContext = React.createContext();

// checking and updating pop up window's content
const CivDotContentContext = React.createContext();
const CivDotUpdateContentContext = React.createContext();

// creating functions
export function usePopUpStatus() {
  return useContext(CivDotStateContext);
}

export function usePopUpUpdateStatus() {
  return useContext(CivDotUpdateStateContext);
}

export function usePopUpContent() {
  return useContext(CivDotContentContext);
}

export function usePopUpUpdateContent() {
  return useContext(CivDotUpdateContentContext);
}

export function PopUpProvider({ children }) {
  const [isPopUpWindowOpen, setIsPopUpWindowOpen] = useState(false);
  function togglePopUp() {
    setIsPopUpWindowOpen((cur) => !cur);
  }
  const [curPopUpWindow, setCurPopUpWindow] = useState("home");

  return (
    <CivDotStateContext.Provider value={isPopUpWindowOpen}>
      <CivDotUpdateStateContext.Provider value={setIsPopUpWindowOpen}>
        <CivDotContentContext.Provider value={curPopUpWindow}>
          <CivDotUpdateContentContext.Provider value={setCurPopUpWindow}>
            {children}
          </CivDotUpdateContentContext.Provider>
        </CivDotContentContext.Provider>
      </CivDotUpdateStateContext.Provider>
    </CivDotStateContext.Provider>
  );
}
