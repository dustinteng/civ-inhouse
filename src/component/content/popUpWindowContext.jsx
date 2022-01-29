import React, { useContext, useState } from "react";

// knowing and updating if the pop up window is currently open / not
const PopUpWindowStateContext = React.createContext();
const PopUpWindowUpdateStateContext = React.createContext();

// checking and updating pop up window's content
const PopUpWindowContentContext = React.createContext();
const PopUpWindowUpdateContentContext = React.createContext();

// creating functions
export function usePopUpStatus() {
  return useContext(PopUpWindowStateContext);
}

export function usePopUpUpdateStatus() {
  return useContext(PopUpWindowUpdateStateContext);
}

export function usePopUpContent() {
  return useContext(PopUpWindowContentContext);
}

export function usePopUpUpdateContent() {
  return useContext(PopUpWindowUpdateContentContext);
}

export function PopUpProvider({ children }) {
  const [isPopUpWindowOpen, setIsPopUpWindowOpen] = useState(false);
  function togglePopUp() {
    setIsPopUpWindowOpen((cur) => !cur);
  }
  const [curPopUpWindow, setCurPopUpWindow] = useState("home");

  return (
    <PopUpWindowStateContext.Provider value={isPopUpWindowOpen}>
      <PopUpWindowUpdateStateContext.Provider value={setIsPopUpWindowOpen}>
        <PopUpWindowContentContext.Provider value={curPopUpWindow}>
          <PopUpWindowUpdateContentContext.Provider value={setCurPopUpWindow}>
            {children}
          </PopUpWindowUpdateContentContext.Provider>
        </PopUpWindowContentContext.Provider>
      </PopUpWindowUpdateStateContext.Provider>
    </PopUpWindowStateContext.Provider>
  );
}
