import React from "react";
import ContentAreaView from "../component/content/contentAreaView";

import Headers from "../component/content/headers";

//import style
import { GlobalStyles } from "../globalStyles";

export default function ToBuyList() {
  return (
    <div style={GlobalStyles.safeArea}>
      <Headers title="To Buy List : " />
      <ContentAreaView></ContentAreaView>
    </div>
  );
}

const styles = {
  homeContent: { width: "100%", height: "80%", padding: "10px 10px" },
};
