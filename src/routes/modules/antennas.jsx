import Header from "../../component/popUpContent/header";
import Description from "../../component/popUpContent/description";
import ImageContainer from "../../component/popUpContent/imageContainer";
import ContentSubHeader from "../../component/popUpContent/contentSubHeader";

const imagePath = "antenna/";

export default function Antennas() {
  return (
    <div style={styles.infoBox}>
      <Header>Antennas</Header>
      <Description>
        The antennas CIV Robotics are using are low power, dual-band global
        positioning system/global navigation satellite system (GPS/GNSS)
        antennas. The antennas achieve centimeter-level accuracy with a
        real-time kinematic (RTK) receiver. The product offering includes
        survey, helical, and OEM antennas. ArduSimple simpleANT2B Antennas are a
        cost-effective solution for high precision RTK GPS/GNSS applications.
      </Description>
      <ContentSubHeader> Types of Antennas </ContentSubHeader>
      <div style={styles.imagesContainer}>
        <ImageContainer
          title="Ublox Black Antenna"
          img={imagePath + "ubloxblack.jpg"}
        ></ImageContainer>
        <ImageContainer
          title="ArduSimple White Antenna AS-ANT2B-SUR-L1L2-25SMA-00"
          img={imagePath + "whiteantenna.png"}
        ></ImageContainer>
        <ImageContainer
          title="Tallysman Helical RF Antenna"
          img={imagePath + "tallysmanantenna.png"}
        ></ImageContainer>
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
};
