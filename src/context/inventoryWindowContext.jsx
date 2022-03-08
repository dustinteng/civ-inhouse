import React, { useContext, useState } from "react";

// knowing and updating if the pop up window is currently open / not
const InventoryStateContext = React.createContext();
const InventoryUpdateStateContext = React.createContext();

// checking and updating pop up window's content
const InventoryContentContext = React.createContext();
const InventoryUpdateContentContext = React.createContext();

// window for part information page open / not
const PartInfoCollectionContext = React.createContext();
const PartUpdateInfoCollectionContext = React.createContext();

// window for part information window content
const PartInfoContentContext = React.createContext();
const PartUpdateInfoContentContext = React.createContext();

// creating functions
// inventory
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
// part name and collection contexts
export function usePartCollectionStatus() {
  return useContext(PartInfoCollectionContext);
}

export function useUpdatePartCollectionStatus() {
  return useContext(PartUpdateInfoCollectionContext);
}
export function usePartName() {
  return useContext(PartInfoContentContext);
}

export function usePartNameUpdate() {
  return useContext(PartUpdateInfoContentContext);
}

export function InventoryProvider({ children }) {
  const [isInventoryWindowOpen, setIsInventoryWindowOpen] = useState(false);

  const [curInventoryWindow, setCurInventoryWindow] = useState("home");

  const [collection, setCollection] = useState("");

  const [partName, setPartName] = useState("");

  return (
    <InventoryStateContext.Provider value={isInventoryWindowOpen}>
      <InventoryUpdateStateContext.Provider value={setIsInventoryWindowOpen}>
        <InventoryContentContext.Provider value={curInventoryWindow}>
          <InventoryUpdateContentContext.Provider value={setCurInventoryWindow}>
            <PartInfoCollectionContext.Provider value={collection}>
              <PartUpdateInfoCollectionContext.Provider value={setCollection}>
                <PartInfoContentContext.Provider value={partName}>
                  <PartUpdateInfoContentContext.Provider value={setPartName}>
                    {children}
                  </PartUpdateInfoContentContext.Provider>
                </PartInfoContentContext.Provider>
              </PartUpdateInfoCollectionContext.Provider>
            </PartInfoCollectionContext.Provider>
          </InventoryUpdateContentContext.Provider>
        </InventoryContentContext.Provider>
      </InventoryUpdateStateContext.Provider>
    </InventoryStateContext.Provider>
  );
}
