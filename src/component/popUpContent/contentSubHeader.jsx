import React from "react";

export default function ContentSubHeader({ children }) {
  return (
    <div style={styles.Container}>
      <h3>{children}</h3>
    </div>
  );
}
const styles = {
  Container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    backgroundColor: "white",
    fontSize: "15px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "0px auto",
    padding: "0px 10px",
  },
};
