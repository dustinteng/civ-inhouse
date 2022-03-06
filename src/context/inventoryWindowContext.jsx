import React, { useContext, useState } from "react";

// knowing and updating if the pop up window is currently open / not
const InventoryStateContext = React.createContext();
const InventoryUpdateStateContext = React.createContext();

// checking and updating pop up window's content
const InventoryContentContext = React.createContext();
const InventoryUpdateContentContext = React.createContext();

// creating functions
export function useInventoryStatus() {
  return useContext(InventoryStateContext);
}

export function useInventoryUpdateStatus() {
  return useContext(InventoryUpdateStateContext);
}

export function useInventoryContent() {
  return useContext(InventoryContentContext);
}

export function useInventoryUpdateContent() {
  return useContext(InventoryUpdateContentContext);
}

export function InventoryProvider({ children }) {
  const [isInventoryWindowOpen, setIsInventoryWindowOpen] = useState(false);

  const [curInventoryWindow, setCurInventoryWindow] = useState("home");

  return (
    <InventoryStateContext.Provider value={isInventoryWindowOpen}>
      <InventoryUpdateStateContext.Provider value={setIsInventoryWindowOpen}>
        <InventoryContentContext.Provider value={curInventoryWindow}>
          <InventoryUpdateContentContext.Provider value={setCurInventoryWindow}>
            {children}
          </InventoryUpdateContentContext.Provider>
        </InventoryContentContext.Provider>
      </InventoryUpdateStateContext.Provider>
    </InventoryStateContext.Provider>
  );
}
