import React from "react";

const imagePath = "/assets/images/";
export default function ImageContainer(props) {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img style={styles.image} src={imagePath + props.img} />
        <p style={styles.imageDescripton}>{props.title}</p>
      </div>
      {props.children}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "10%",
    flex: "1",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    height: "200px",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "14px",
    fontStyle: "italic",
    padding: "0px 20px",
  },
  imageDescripton: {
    display: "flex",
    flex: "1",
  },
};
