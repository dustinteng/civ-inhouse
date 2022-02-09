import React from "react";

export default function ContentContainer({ children }) {
  return <div style={styles.Container}>{children}</div>;
}

const styles = {
  Container: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    maxHeight: "95%",
    backgroundColor: "#FFCEA4",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px auto",
    padding: "0px 0px",
    borderRadius: "18px",
  },
};
