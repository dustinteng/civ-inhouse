import React from "react";

export default function Description({ children }) {
  return (
    <div style={styles.descriptionContainer}>
      <p>{children}</p>
    </div>
  );
}

const styles = {
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    backgroundColor: "white",
    fontSize: "15px",
    fontWeight: "lighter",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "5px auto",
    padding: "5px 10px",
  },
};
