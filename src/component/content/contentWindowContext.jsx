import React, { useContext, useState } from "react";

const ContentWindowStateContext = React.createContext();
const ContentWindowUpdateStateContext = React.createContext();

// callback function, so we do not have to import useContext on other files
export function useCurWindowState() {
  return useContext(ContentWindowStateContext);
}

export function useCurWindowUpdateState() {
  return useContext(ContentWindowUpdateStateContext);
}

export function ContextWindowProvider({ children }) {
  const [curWindow, setCurWindow] = useState("Home");

  return (
    <ContentWindowStateContext.Provider value={curWindow}>
      <ContentWindowUpdateStateContext.Provider value={setCurWindow}>
        {children}
      </ContentWindowUpdateStateContext.Provider>
    </ContentWindowStateContext.Provider>
  );
}
