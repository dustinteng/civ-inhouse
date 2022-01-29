import React from "react";

export default function ContentContainer({ children }) {
  return <div style={styles.Container}>{children}</div>;
}

const styles = {
  Container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    backgroundColor: "lightYellow",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px auto",
    padding: "0px 10px",
  },
};
