import { useState } from "react";
import React from "react";
import ContentAreaView from "./contentAreaView";
import HomeTab from "./homeTabs";
import Headers from "./headers";

//import style
import { GlobalStyles } from "../../globalStyles";

export default function ContentHome() {
  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title="Home : " />
      <div style={styles.homeContentContainer}>
        <ContentAreaView>
          <HomeTab title="Modules" />
          <HomeTab title="CivDots" />
        </ContentAreaView>
        <ContentAreaView>
          <HomeTab title="Inventory" />
          <HomeTab title="To Buy List" />
          <HomeTab title="tester" />
        </ContentAreaView>
      </div>
    </div>
  );
}

const styles = {
  homeContentContainer: { width: "100%", height: "80%", padding: "10px 10px" },
};
