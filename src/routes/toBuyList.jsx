import { Link } from "react-router-dom";
import { useState } from "react";

import React from "react";
import ContentAreaView from "../component/content/contentAreaView";

import Headers from "../component/content/headers";
import ContentHome from "../component/content/contentHome.jsx";

export default function ToBuyList() {
  return (
    <div style={styles.safeArea}>
      <Headers title="To Buy List : " />
      <ContentAreaView></ContentAreaView>
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
  homeContent: { width: "100%", height: "80%", padding: "10px 10px" },
};
