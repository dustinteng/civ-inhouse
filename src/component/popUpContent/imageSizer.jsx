// Image Container - default size => w = 200px || h = 240px

import React from "react";

const imagePath = "/assets/images/";
export default function ImageSizer(props) {
  const height = props.height || "95%";
  const width = props.width || "95%";
  const styles = {
    imageContainer: {
      backgroundColor: "transparent",
      width: "90%",
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",

      padding: "0px 0px",

      borderRadius: "1%",
    },

    image: {
      maxWidth: width,
      maxHeight: height,
      boxShadow: "0px 0px 1px 1px ",
    },
  };

  return (
    <div style={styles.imageContainer}>
      <img style={styles.image} src={imagePath + props.img} />
    </div>
  );
}
