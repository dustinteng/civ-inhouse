import { useState } from "react";
import React from "react";
import ContentAreaView from "./contentAreaView";
import HomeTab from "./homeTabs";
import Headers from "./headers";

export default function ContentHome() {
  return (
    <div style={styles.safeArea}>
      <Headers title="Home : " />
      <div style={styles.homeContentContainer}>
        <ContentAreaView>
          <HomeTab title="Modules" />
          <HomeTab title="CivDots" />
        </ContentAreaView>
        <ContentAreaView>
          <HomeTab title="Inventory" />
          <HomeTab title="To Buy List" />
          <HomeTab title="Developing?" />
        </ContentAreaView>
      </div>
    </div>
  );
}

const styles = {
  safeArea: {
    padding: "20px 50px",
    display: "flex",
    width: "100%",
    height: "100%",
    scrollBehaviour: "smooth",
    flexDirection: "column",
  },
  homeContentContainer: { width: "100%", height: "80%", padding: "10px 10px" },
};
