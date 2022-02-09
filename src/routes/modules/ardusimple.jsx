import Header from "../../component/popUpContent/header";
import Description from "../../component/popUpContent/description";
import ImageContainer from "../../component/popUpContent/imageContainer";
import ContentSubHeader from "../../component/popUpContent/contentSubHeader";
import LinkNewWindow from "../../component/popUpContent/linkNewWindow";

import { GlobalStyles } from "../../globalStyles";
import { GlobalPageStyles } from "../../globalPageStyles";

const imagePath = "/ardusimple/";
const movingBaseLink =
  "https://drive.google.com/file/d/1iawfKmAtfPPWpMk2EZIzHC0AdqnwIpZS/view?usp=sharing";
const roverBaseLink =
  "https://drive.google.com/file/d/1Iexb7KEFtwX8z_o_WG52YSPpmDpHxzrb/view?usp=sharing";
export default function ArduSimple() {
  return (
    <div style={GlobalStyles.contentContainer}>
      <Header>ArduSimple Boards</Header>
      <Description>
        There are two Ardusimple units (SimpleRTK2B V3 and SimpleRTK2Blite), we
        need to configure them to work as a moving base and rover. After the
        configuration of the Ardusimple we will configure the Pixhawk with the
        Ardurover firmware to get the heading and position data from the dual
        RTK setup for the rover yaw estimation
      </Description>

      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ContentSubHeader>Configuration Files :</ContentSubHeader>
          <LinkNewWindow link={movingBaseLink}>
            Moving Base Configuration
          </LinkNewWindow>
          <LinkNewWindow link={roverBaseLink}>
            Rover Base Configuration
          </LinkNewWindow>
          <ContentSubHeader>Configuring Boards:</ContentSubHeader>
          <LinkNewWindow link={movingBaseLink}>
            Moving Base Configuration
          </LinkNewWindow>
          <LinkNewWindow link={roverBaseLink}>
            Rover Base Configuration
          </LinkNewWindow>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            height="300px"
            width="300px"
            img={imagePath + "ardusimpleboards.png"}
          ></ImageContainer>
        </div>
      </div>
      <ContentSubHeader>Step by Step Configuration:</ContentSubHeader>

      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          {" "}
          <contentContainer>asdasd</contentContainer>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          {" "}
          <contentContainer>asdasd</contentContainer>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 10px",
    width: "95%",
    maxHeight: "350px",
  },

  subcontainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    maxHeight: "95%",
  },

  img: { maxHeight: "95%" },
  link: { display: "flex", padding: "5px 5px", flexDirection: "flex-end" },
};
