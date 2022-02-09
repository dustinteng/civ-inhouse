import React, { useContext } from "react";

import Header from "../../component/popUpContent/header";
import Description from "../../component/popUpContent/description";
import ImageContainer from "../../component/popUpContent/imageContainer";
import ContentContainer from "../../component/popUpContent/contentContainer";
import ContentSubHeader from "../../component/popUpContent/contentSubHeader";
import Table from "../../component/popUpContent/table";
import Footer from "../../component/popUpContent/footer";
import { GlobalPageStyles } from "../../globalPageStyles";
import { GlobalStyles } from "../../globalStyles";

// this will go directly to public folder!
const imagePath = "box/";
const holeData = [
  { hole: "1.5 in", loc: "Special - CivDotPlus Gantry and IMU Hole" },

  { hole: "1 in", loc: "Bottom Box, Metal Plate, Fan Hole" },
  { hole: "7/8 in", loc: "Emergency Switch Hole" },
  { hole: "1/4 in", loc: "Antennas Connection Hole" },
  { hole: "11/64 in", loc: "Box to Chassis Connection Hole" },
  { hole: "1/8 in", loc: "Fan Bolts Hole" },
];
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
      <div style={GlobalPageStyles.divideContainer}>
        <div styles={GlobalPageStyles.container1unit}>
          <ImageContainer
            title="1. CivDot Box"
            img={imagePath + "civdot/civdotCircuit.jpeg"}
          ></ImageContainer>
        </div>
        <div styles={GlobalPageStyles.container1unit}>
          <ImageContainer
            title="2. CivDot Plus Box"
            img={imagePath + "civdot/civdotCircuit.jpeg"}
          ></ImageContainer>
        </div>
      </div>

      <Table data={holeData} title="2. Location and size of the holes" />

      <ContentSubHeader> CivDots </ContentSubHeader>

      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            title="bottom hole - 1in drill hole"
            img={imagePath + "civdot/bottomhole.jpeg"}
          ></ImageContainer>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            title="fan hole - 1in drill hole"
            img={imagePath + "civdot/fanhole.jpeg"}
          ></ImageContainer>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            title="metal plate hole - 1in drill hole"
            img={imagePath + "civdot/metalplatehole.jpeg"}
          ></ImageContainer>
        </div>
      </div>
      <ContentSubHeader>CivDot +</ContentSubHeader>

      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            title="fan hole - 1in drill hole"
            img={imagePath + "civdot/fanhole.jpeg"}
          ></ImageContainer>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            title="bottom hole - 1in drill hole"
            img={imagePath + "civdot/bottomhole.jpeg"}
          ></ImageContainer>
        </div>
      </div>

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
      {/* footer */}
      <div style={GlobalPageStyles.divideContainer}>
        <Footer />
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
