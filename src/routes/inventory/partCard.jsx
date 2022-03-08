import React, { useState, Component } from "react";

import { GlobalPageStyles } from "../../globalPageStyles";

import {
  useInventoryUpdateContent,
  usePartNameUpdate,
} from "../../context/inventoryWindowContext.jsx";

export default function PartCard(props) {
  const partNameUpdate = usePartNameUpdate();
  const setCurPartWindow = useInventoryUpdateContent();

  const title = props.title;

  const partInfoRef = "Part Info";

  function helperFunction() {
    partNameUpdate(props.title);
    setCurPartWindow(partInfoRef);
  }
  return (
    <div style={styles.space}>
      <div style={styles.ratingCard}>
        <div style={GlobalPageStyles.safeAreaView} onClick={helperFunction}>
          <div style={GlobalPageStyles.questionContainer}>
            <div style={styles.title}> {title} </div>
            <div>{props.quantity}</div>
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
    height: "25px",
    width: "90%",
  },
  ratingCard: {
    height: "20px",
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
