import React from "react";

export default function ContentAreaView({ children }) {
  return <div style={styles.contentAreaStyle}>{children}</div>;
}

const styles = {
  contentAreaStyle: {
    width: "100%",
    maxHeight: "40%",
    backgroundColor: "transparent",
    display: "flex",
    flex: "1",
  },
};
