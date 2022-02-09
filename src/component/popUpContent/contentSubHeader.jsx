import React from "react";

export default function ContentSubHeader(props) {
  const backgroundColor = props.color || "transparent";
  const styles = {
    Container: {
      display: "flex",
      flexDirection: "column",
      width: "95%",
      backgroundColor: backgroundColor,
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0px auto",
      padding: "0px 10px",
    },
  };

  return (
    <div style={styles.Container}>
      <h4>{props.children}</h4>
    </div>
  );
}
