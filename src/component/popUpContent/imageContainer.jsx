// Image Container - default size => w = 200px || h = 240px

import React from "react";

const imagePath = "/assets/images/";
export default function ImageContainer(props) {
  const height = props.height || "95%";
  const width = props.width || "95%";
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      width: "100",
    },

    imageContainer: {
      backgroundColor: "white",
      width: "90%",
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: "15px",
      fontSize: "12px",
      fontStyle: "italic",
      padding: "0px 10px",
      margin: "5px 5px",
      borderRadius: "1%",
    },

    image: {
      maxWidth: width,
      maxHeight: height,
    },

    imageDescripton: {
      display: "flex",
      justifyContent: "center",
      width: "90%",
      margin: "5px 3px 2px 3px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img style={styles.image} src={imagePath + props.img} />
        <span style={styles.imageDescripton}>
          <p style={styles.imageDescripton}> {props.title}</p>
        </span>
      </div>
      {props.children}
    </div>
  );
}
