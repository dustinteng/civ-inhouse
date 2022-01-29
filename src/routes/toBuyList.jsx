import React from "react";
import ContentAreaView from "../component/content/contentAreaView";

import PageHeaders from "../component/content/pageHeaders";

//import style
import { GlobalStyles } from "../globalStyles";

export default function ToBuyList() {
  return (
    <div style={GlobalStyles.safeArea}>
      <PageHeaders title="To Buy List : " />
      <ContentAreaView></ContentAreaView>
    </div>
  );
}

const styles = {
  homeContent: { width: "100%", height: "80%", padding: "10px 10px" },
};
