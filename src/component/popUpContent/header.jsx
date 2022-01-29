import React from "react";

export default function Header({ children }) {
  return <h1 style={styles.header}>{children}</h1>;
}

const styles = {
  header: {
    width: "90%",
    backgroundColor: "white",
    fontSize: "23px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "5px 0px",
  },
};
