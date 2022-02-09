import React from "react";

import ContentHome from "../../component/content/contentHome";
//importing styles
import { GlobalStyles } from "../../globalStyles";

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
import {
  useModuleUpdateStatus,
  useModuleContent,
} from "../../context/moduleWindowContext";

export default function ModulesPopUpWindow() {
  const togglePopUp = useModuleUpdateStatus();

  const curPopUpWindow = useModuleContent();

  return (
    <div style={GlobalStyles.popUpBox}>
      <div style={GlobalStyles.box}>
        <button
          style={GlobalStyles.buttonClose}
          onClick={() => togglePopUp(false)}
        >
          {" "}
          X{" "}
        </button>
        {{
          Antennas: <Antennas />,
          ArduSimple: <ArduSimple />,
          Box: <Box />,
          Calibration: <Calibration />,
          Circuit: <Circuit />,
          "CIV Plan": <CivPlan />,
          "CIV Repeater": <CivRepeater />,
          FAQ: <FAQ />,
          Gantry: <Gantry />,
          Home: (
            <div>
              <p>no values here</p>
            </div>
          ),
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
