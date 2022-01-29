import React, { useContext } from "react";

import Header from "../../component/popUpContent/header";
import Description from "../../component/popUpContent/description";
import ImageContainer from "../../component/popUpContent/imageContainer";
import ContentContainer from "../../component/popUpContent/contentContainer";
import ContentSubHeader from "../../component/popUpContent/contentSubHeader";

// this will go directly to public folder!
const imagePath = "box/";
export default function Box() {
  return (
    <div style={styles.infoBox}>
      <Header>Box</Header>
      <Description>
        Creating CIV box from beginning to the end
        <div>
          <il>
            <ul>1. Box sizes </ul>
            <ul>2. Location and size of the holes</ul>
            <ul>3. Metal base plate, vinyl wrap, and installation</ul>
            <ul>4. Rubber grommets </ul>
          </il>
        </div>
      </Description>

      <ContentSubHeader>1. Box Sizes</ContentSubHeader>
      <ContentContainer>
        <il>
          <ul>1. small box - CivDot</ul>
          <ul>2. large box - CivDot+</ul>
        </il>
      </ContentContainer>
      <ContentSubHeader>2. Location and size of the holes </ContentSubHeader>
      <ContentContainer>
        <div style={styles.subsubheader}>CivDot</div>
        <div style={styles.subContentContainer}>
          <ImageContainer
            title="bottom hole - 1in drill hole"
            img={imagePath + "civdot/bottomhole.jpeg"}
          ></ImageContainer>
          <ImageContainer
            title="fan hole - 1in drill hole"
            img={imagePath + "civdot/fanhole.jpeg"}
          ></ImageContainer>
        </div>
        <div style={styles.subContentContainer}>
          <ImageContainer
            title="metal plate hole - 1in drill hole"
            img={imagePath + "civdot/metalplatehole.jpeg"}
          ></ImageContainer>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div style={styles.subsubheader}>CivDot+</div>
        <div style={styles.subContentContainer}>
          <ImageContainer
            title="bottom hole - 1in drill hole"
            img={imagePath + "civdot/bottomhole.jpeg"}
          ></ImageContainer>
          <ImageContainer
            title="fan hole - 1in drill hole"
            img={imagePath + "civdot/fanhole.jpeg"}
          ></ImageContainer>
        </div>
      </ContentContainer>

      <div style={styles.imagesContainer}>
        <ImageContainer
          title="Milwaukee Drill"
          img={imagePath + "drillmil.jpeg"}
        ></ImageContainer>
        <ImageContainer
          title="Drill Bits"
          img={imagePath + "drillbits.png"}
        ></ImageContainer>
      </div>
    </div>
  );
}

const styles = {
  images: {
    width: "100px",
    height: "100px",
  },

  content: {
    padding: "0px 10px",
  },

  infoBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  imagesContainer: {
    width: "90%",
    height: "250px",
    display: "flex",
    backgroundColor: "lightblue",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "20px",
  },

  subsubheader: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    padding: "10px 10px",
    margin: "5px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  subContentContainer: {
    width: "90%",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  subsubContentContainer: {
    display: "flex",
    flexDirection: "row",
  },
};
