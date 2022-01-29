import React, { useState, useContext } from "react";

// importing home content
import ContentHome from "./contentHome";
// importing all the contents
import Antennas from "../../routes/modules/antennas";
import ArduSimple from "../../routes/modules/ardusimple";
import Box from "../../routes/modules/box";
import Calibration from "../../routes/modules/calibration";
import Circuit from "../../routes/modules/circuit";
import CivPlan from "../../routes/modules/civPlan";
import CivRepeater from "../../routes/modules/civRepeater";
import FAQ from "../../routes/modules/frequentlyAskedQuestions";
import Gantry from "../../routes/modules/gantry";
import Jetson from "../../routes/modules/jetson";
import Lidar from "../../routes/modules/lidar";
import MotorController from "../../routes/modules/motorController";
import PID from "../../routes/modules/pidCalibration";
import Pixhawk from "../../routes/modules/pixhawk";
import PowerDistributionUnit from "../../routes/modules/powerDistributionUnit";
import RC from "../../routes/modules/rc";
import ReleaseNotes from "../../routes/modules/releaseNotes";
import RFD from "../../routes/modules/rfd";
import Rovers from "../../routes/modules/rovers";
import SSR from "../../routes/modules/solidStateRelay";
import SprayingMechanism from "../../routes/modules/sprayingMechanism";
import StaticIP from "../../routes/modules/staticIP";
import Topcon from "../../routes/modules/topcon";
import Trimble from "../../routes/modules/trimble";
import WiFi from "../../routes/modules/wifi";

// importing the contexts
import PopUpProvider, {
  usePopUpStatus,
  usePopUpUpdateStatus,
  usePopUpContent,
  usePopUpUpdateContent,
} from "./popUpWindowContext";

export default function PopUpWindow() {
  const togglePopUp = usePopUpUpdateStatus();

  const curPopUpWindow = usePopUpContent();

  return (
    <div style={styles.popUpBox}>
      <div style={styles.box}>
        <button style={styles.buttonClose} onClick={() => togglePopUp(false)}>
          {" "}
          x{" "}
        </button>
        {{
          Antenna: <Antennas />,
          ArduSimple: <ArduSimple />,
          Box: <Box />,
          Calibration: <Calibration />,
          Circuit: <Circuit />,
          "CIV Plan": <CivPlan />,
          "CIV Repeater": <CivRepeater />,
          FAQ: <FAQ />,
          Gantry: <Gantry />,
          Home: <ContentHome />,
          Jetson: <Jetson />,
          Lidar: <Lidar />,
          "Motor Controller": <MotorController />,
          "PID Calibration": <PID />,
          Pixhawk: <Pixhawk />,
          "Power Distribution Unit": <PowerDistributionUnit />,
          "Remote Controller": <RC />,
          "RFD Telemetry": <RFD />,
          "Release Notes": <ReleaseNotes />,
          Rovers: <Rovers />,
          "Solid State Relay": <SSR />,
          "Spraying Mechanism": <SprayingMechanism />,
          "Static IP": <StaticIP />,
          "Top Con - Satel": <Topcon />,
          Trimble: <Trimble />,
          WiFi: <WiFi />,
        }[curPopUpWindow] || <ContentHome />}
      </div>
    </div>
  );
}

const styles = {
  popUpBox: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#FFCEA4",
    width: "95%",
    height: "95%",
    padding: "2% 2%",
    borderRadius: "5px",
  },
  box: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    border: "1px solid #999",
    borderRadius: "4px",
    padding: "0px 20px",
    marginBottom: "5px",
    overflow: "auto",
  },
  buttonClose: {
    width: "30px",
    height: "30px",
    position: "sticky",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "2px solid #3b1800",
    borderRadius: "50%",
    left: "calc( 100% - 20px )",
    top: "10px",
    backgroundColor: "darkOrange",
    color: "#3b1800",
    fontSize: "20px",
  },
};
