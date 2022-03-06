import React, { useState, Component } from "react";

import { GlobalPageStyles } from "../../globalPageStyles";

import {
  useCivDotUpdateStatus,
  useCivDotUpdateContent,
} from "../../context/civdotWindowContext.jsx";

import ImageSizer from "../../component/popUpContent/imageSizer";

const imagePath = "antenna/";

export default function CivDotCard(props) {
  const setCivDotWindowState = useCivDotUpdateStatus();
  const setCurCivDotWindow = useCivDotUpdateContent();
  const title = props.title;

  function togglePopUp() {
    setCivDotWindowState((state) => !state);
  }

  function helperFunction() {
    togglePopUp();
    setCurCivDotWindow(title);
  }
  return (
    <div style={styles.space}>
      <div style={styles.ratingCard}>
        <div style={GlobalPageStyles.safeAreaView} onClick={helperFunction}>
          <div style={GlobalPageStyles.divideContainerColumn}>
            <div
              style={{
                ...GlobalPageStyles.container1unit,
              }}
            >
              <ImageSizer
                height="100px"
                width="100px"
                img={imagePath + "civdot.jpeg"}
              ></ImageSizer>
            </div>
            <div style={GlobalPageStyles.container1unit}>
              <div style={styles.title}> {title}</div>
              <div style={styles.info}>
                <div>CivRos:</div>
                <div>{props.civros}</div>
              </div>
              <div style={styles.info}>
                <div>CivPlan:</div>
                <div>{props.civplan}</div>
              </div>
              <div style={styles.info}>
                <div>Net ID:</div>
                <div>{props.netid}</div>
              </div>
              <div style={styles.info}>
                <div>Customer:</div>
                <div>{props.customer}</div>
              </div>
            </div>
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
    height: "220px",
    width: "170px",
  },
  ratingCard: {
    height: "200px",
    width: "150px",
    borderRadius: "10px",
    backgroundColor: "#FFCEA4",
    boxShadow: "1px 1px 1px 1px ",
    margin: "10px, 10px",
  },
  textArea: {
    height: "100%",
    width: "100%",
  },
};
