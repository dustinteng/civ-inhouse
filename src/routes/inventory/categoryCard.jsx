import React, { useState, Component } from "react";

import { GlobalPageStyles } from "../../globalPageStyles";

import {
  useInventoryUpdateStatus,
  useInventoryUpdateContent,
} from "../../context/inventoryWindowContext.jsx";

export default function CategoryCard(props) {
  const setInventoryWindowState = useInventoryUpdateStatus();
  const setCurInventoryWindow = useInventoryUpdateContent();
  const title = props.title;

  function togglePopUp() {
    setInventoryWindowState((state) => !state);
  }

  function helperFunction() {
    togglePopUp();
    setCurInventoryWindow(title);
  }
  return (
    <div style={styles.ratingCard}>
      <div style={GlobalPageStyles.safeAreaView} onClick={helperFunction}>
        <div style={GlobalPageStyles.divideContainerColumn}>
          <div style={GlobalPageStyles.container1unit}>
            <div style={styles.title}> {title} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  title: { fontSize: "18px", margin: "2px" },
  info: {
    width: "90%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "12px",
    margin: "1px",
  },
  space: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    width: "90%",
    backgroundColor: "blue",
  },
  ratingCard: {
    height: "200px",
    width: "95%",
    borderRadius: "3px",
    backgroundColor: "#FFCEA4",
    boxShadow: "1px 1px 1px 1px ",
    margin: "10px, 10px",
  },
  textArea: {
    height: "100%",
    width: "100%",
  },
};
