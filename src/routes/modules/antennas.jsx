import Header from "../../component/popUpContent/header";
import Footer from "../../component/popUpContent/footer";
import Description from "../../component/popUpContent/description";
import ImageContainer from "../../component/popUpContent/imageContainer";
import ContentSubHeader from "../../component/popUpContent/contentSubHeader";
import ContentContainer from "../../component/popUpContent/contentContainer";
import LinkNewWindow from "../../component/popUpContent/linkNewWindow";
import PartListTable from "../../component/popUpContent/partListTable";

import { GlobalStyles } from "../../globalStyles";
import { GlobalPageStyles } from "../../globalPageStyles";

const imagePath = "antenna/";

export default function Antennas() {
  const blackAntennaLink =
    "https://www.digikey.com/en/products/detail/u-blox/ANN-MB-00-00/9817928?utm_adgroup=RF%20Receivers&utm_source=google&utm_medium=cpc&utm_campaign=Shopping_Product_RF%2FIF%20and%20RFID_NEW&utm_term=&utm_content=RF%20Receivers&gclid=Cj0KCQiA3fiPBhCCARIsAFQ8QzXhXy9gMXkLy8z3QrKDfbWAKd7aVRtUyV2s1tYhiooI-1PIx---5tQaAoiVEALw_wcB";
  const whiteAntennaLink =
    "https://www.mouser.com/ProductDetail/ArduSimple/AS-ANT2B-SUR-L1L2-25SMA-00?qs=vHuUswq2%252BswBsit1qMDm7Q%3D%3D";
  const tallysmanAntennaLink =
    "https://www.tallysman.com/product/hc977-triple-band-helical-antenna-with-l-band/";

  const blackAntennaParts = [
    { name: "M4 x 12", qty: 4, stock: "Low" },
    { name: "M4 T-Nut", qty: 4, stock: "Low" },
    { name: "M4 Washer", qty: 4, stock: "Medium" },
    { name: "Metal Plate", qty: 2, stock: "Low" },
  ];

  const whiteAntennaParts = [
    { name: "Antenna Adapter", qty: 2, stock: "Medium" },
    { name: "M6 Adapter", qty: 2, stock: "Medium" },
    { name: "M6 T-Nut", qty: 2, stock: "Low" },
  ];
  return (
    <div style={GlobalStyles.contentContainer}>
      <Header>Antennas</Header>
      <Description>
        The antennas CIV Robotics are using are low power, dual-band global
        positioning system/global navigation satellite system (GPS/GNSS)
        antennas. The antennas achieve centimeter-level accuracy with a
        real-time kinematic (RTK) receiver. The product offering includes
        survey, helical, and OEM antennas. ArduSimple simpleANT2B Antennas are a
        cost-effective solution for high precision RTK GPS/GNSS applications.
      </Description>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ContentSubHeader>Types of Antennas </ContentSubHeader>
        </div>
      </div>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            height="200px"
            width="200px"
            img={imagePath + "ubloxblack.jpg"}
          ></ImageContainer>
        </div>
        <div style={GlobalPageStyles.container2unit}>
          <div style={GlobalPageStyles.contentContainer}>
            <div style={GlobalPageStyles.textContainer}>
              <ul>
                <li style={styles.description}> Name: "Black Antenna"</li>
                <li style={styles.description}>
                  {" "}
                  Model:{" "}
                  <LinkNewWindow link={blackAntennaLink}>
                    Ublox ANN-MB-00-00 Antenna
                  </LinkNewWindow>{" "}
                </li>
                <li style={styles.description}>
                  {" "}
                  Usage: Currently is used for CivDots.{" "}
                </li>
                <li style={styles.description}>
                  Future development plan: Discontinued mid 2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            height="200px"
            width="200px"
            img={imagePath + "whiteantenna.png"}
          ></ImageContainer>
        </div>
        <div style={GlobalPageStyles.container2unit}>
          <div style={GlobalPageStyles.contentContainer}>
            <div style={GlobalPageStyles.textContainer}>
              <ul>
                <li style={styles.description}> Name: "White Antenna"</li>
                <li style={styles.description}>
                  Model:
                  <LinkNewWindow link={whiteAntennaLink}>
                    ArduSimple AS-ANT2B-SUR-L1L2-25SMA-00
                  </LinkNewWindow>{" "}
                </li>
                <li style={styles.description}>
                  {" "}
                  Usage: Currently is used for CivDot Plusses.{" "}
                </li>
                <li style={styles.description}>
                  Future development plan: Will be used by all Rovers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <div style={styles.imagesContainer}>
            <ImageContainer
              height="200px"
              width="200px"
              img={imagePath + "tallysmanantenna.png"}
            ></ImageContainer>
          </div>
        </div>
        <div style={GlobalPageStyles.container2unit}>
          <div style={GlobalPageStyles.contentContainer}>
            <div style={GlobalPageStyles.textContainer}>
              <ul>
                <li style={styles.description}> Name: "Tallysman Antenna"</li>
                <li style={styles.description}>
                  Model:
                  <LinkNewWindow link={tallysmanAntennaLink}>
                    HC977 Triple-band Helical Antenna + L-band
                  </LinkNewWindow>{" "}
                </li>
                <li style={styles.description}>
                  {" "}
                  Usage: Used with Emlid Reach M+ and M2.{" "}
                </li>
                <li style={styles.description}>
                  Future development plan: Discontinued.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* configuration window */}

      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ContentSubHeader> Black Antenna Configuration </ContentSubHeader>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <ContentSubHeader> White Antenna Configuration </ContentSubHeader>
        </div>
      </div>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <div
            style={{
              ...GlobalPageStyles.contentContainer,
              backgroundColor: "lightgrey",
              width: "80%",
              alignItems: "center",
            }}
          >
            <p> No configuration is needed for the black antennas </p>
          </div>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <div
            style={{
              ...GlobalPageStyles.contentContainer,
              backgroundColor: "#FFCEA4",
              width: "80%",
              alignItems: "center",
            }}
          >
            <p> White antennas need to be calibrated </p>
          </div>
        </div>
      </div>

      {/* Installation */}
      <ContentSubHeader>Installation </ContentSubHeader>
      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            height="200px"
            width="200px"
            title="CivDot Antenna"
            img={imagePath + "civdot.jpeg"}
          ></ImageContainer>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <div style={GlobalPageStyles.contentContainer}>
            <div style={GlobalPageStyles.textContainer}>
              <p>ArduSimple:</p>
              <text> Front Antenna === Rover Base</text>
              <text> Rear Antenna === Moving Base</text>
              <text> </text>

              <p>Mission Planner:</p>
              <text> Front Antenna === Bottom GPS</text>
              <text> Rear Antenna === Top GPS</text>
              <text> </text>
            </div>
          </div>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <ImageContainer
            height="200px"
            width="200px"
            title="CivDot + Antenna"
            img={imagePath + "civdotplus.jpeg"}
          ></ImageContainer>
        </div>
      </div>
      {/* Part list */}

      <div style={GlobalPageStyles.divideContainer}>
        <div style={GlobalPageStyles.container1unit}>
          <div
            style={{
              ...GlobalPageStyles.tableContainer,
            }}
          >
            <PartListTable
              title="Black Antenna Parts"
              data={blackAntennaParts}
            ></PartListTable>
          </div>
        </div>
        <div style={GlobalPageStyles.container1unit}>
          <div
            style={{
              ...GlobalPageStyles.tableContainer,
              alignItems: "center",
            }}
          >
            <PartListTable
              title="White Antenna Parts"
              data={whiteAntennaParts}
            ></PartListTable>
          </div>
        </div>
      </div>

      {/* footer */}
      <div style={GlobalPageStyles.divideContainer}>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  imagesContainer: {
    width: "90%",
    height: "250px",
    display: "flex",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "20px",
  },
  description: { margin: "10px 10px" },
};
