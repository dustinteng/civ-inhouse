import React, { useState } from "react";
import { useEffect } from "react";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { Info } from "../../component/popUpContent/info";

import { GlobalPageStyles } from "../../globalPageStyles";

// Firebase web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3cOgFcizEZPRapS7_8JCPnRYrAdedQHc",
  authDomain: "civ-robotics.firebaseapp.com",
  projectId: "civ-robotics",
  storageBucket: "civ-robotics.appspot.com",
  messagingSenderId: "155377639051",
  appId: "1:155377639051:web:1c776c3bb847d06d32be8e",
  measurementId: "G-PTKTJS806P",
};

export default function RoverInfo(props) {
  //db initialization
  const db = getFirestore();

  const docSnap = async () => {
    const res = await getDoc(docRef);

    setData(res.data().data);
  };

  const roverName = props.roverName;

  const docRef = doc(db, "civrovers", roverName);

  useEffect(() => {
    docSnap();
  }, []);

  // rovers states
  const [robotName, setRobotName] = useState("");
  const [robotType, setRobotType] = useState("");
  const [status, setStatus] = useState("");
  const [personInCharge, setPersonInCharge] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  // platform states
  const [frameType, setFrameType] = useState("");
  const [tiresType, setTiresType] = useState("");

  // low level control states
  const [motorController, setMotorController] = useState("");
  const [motors, setMotors] = useState("");
  const [encoder, setEncoder] = useState("None");

  // electrical - power states
  const [powerDistributor, setPowerDistributor] = useState("None");

  // modules types
  const [navigation, setNavigation] = useState("Pixhawk");
  const [cpu, setCPU] = useState("Jetson Nano");
  const [gpsBoard, setGpsModule] = useState("Ardusimple + Xbee");

  //spraying mechanism
  const [gantry, setGantry] = useState("None");
  const [gantryMotors, setGantryMotors] = useState("None");
  const [homingMethod, setHomingMethod] = useState("None");
  const [markingMechanism, setMarkingMechanism] = useState("None");
  const [servo, setServo] = useState("None");
  const [servoPWM, setServoPWM] = useState("");

  // sensors
  const [gpsAntenna, setGpsAntenna] = useState("");
  const [externalIMU, setExternalIMU] = useState("");
  const [lidar, setLidar] = useState("");

  // communication
  const [router, setRouter] = useState("None");
  const [eSwitch, setESwitch] = useState("None");
  const [rcDongle, setRcDongle] = useState("None");
  const [rfd, setRfd] = useState("None");
  const [rfdNetID, setRfdNetID] = useState("None");
  const [rfdCommsBox, setRfdCommsBox] = useState("None");
  const [simCard, setSimCard] = useState("None");
  const [simCardNumber, setSimCardNumber] = useState("None");

  // software
  const [civPlan, setCivPlan] = useState("");
  const [civRos, setCivRos] = useState("");
  const [pixhawk, setPixhawk] = useState("");

  // operation - customer and contact person
  const [customer, setCustomer] = useState("");
  const [location, setLocation] = useState("");
  const [commissioningDate, setCommissioningDate] = useState("");
  const [lastVisit, setLastVisit] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");

  // data
  const rawdata = {
    Rovers: {
      Name: robotName,
      Type: robotType,
      Status: status,
      PIC: personInCharge,
      Description: description,
      Deadline: deadline,
    },

    Platform: { FrameType: frameType, TiresType: tiresType },
    LowLevelControl: {
      MotorController: motorController,
      Motors: motors,
      Encoder: encoder,
    },
    Electrical: { powerDistributor: powerDistributor },
    Modules: { Navigation: navigation, CPU: cpu, GPSBoard: gpsBoard },
    SprayingMechanism: {
      Gantry: gantry,
      GantryMotors: gantryMotors,
      HomingMethod: homingMethod,
      MarkingMechanism: markingMechanism,
      Servo: servo,
      ServoPWM: servoPWM,
    },
    Sensors: {
      GpsAntenna: gpsAntenna,
      ExternalIMU: externalIMU,
      Lidar: lidar,
    },
    Communication: {
      Router: router,
      EthernetSwitch: eSwitch,
      RcDongle: rcDongle,
      Rfd: rfd,
      RfdNetID: rfdNetID,
      RfdCommsBox: rfdCommsBox,
      SimCard: simCard,
      SimCardNumber: simCardNumber,
    },
    Software: { CivPlan: civPlan, CivRos: civRos, Pixhawk: pixhawk },
    Customer: {
      Customer: customer,
      Location: location,
      CommissioningDate: commissioningDate,
      LastVisit: lastVisit,
      ContactPerson: contactPerson,
      ContactPersonEmail: contactPersonEmail,
    },
  };
  const [data, setData] = useState(rawdata);

  return (
    <div>
      <div style={GlobalPageStyles.outerSafeAreaContainer}>
        <h3>{data.Rovers.Name}</h3>
        {/* Rover */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Rover Information</h3>
            <Info value={data.Rovers.Name} title="Rover Name: " />
            <Info value={data.Rovers.Type} title="Robot Type:" />
            <Info value={data.Rovers.Status} title="Robot Status:" />
            <Info value={data.Rovers.PIC} title="Person In Charge:" />
            <Info value={data.Rovers.Description} title="Robot Description:" />
            <Info value={data.Rovers.Deadline} title="Deadline:" />
          </div>
        </div>
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Platform Information</h3>
            <Info value={data.Platform.FrameType} title="Frame Type:" />
            <Info value={data.Platform.TiresType} title="Tires Type:" />
          </div>
        </div>

        {/* Low Level Controller */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Low Level Controller</h3>
            <Info
              value={data.LowLevelControl.MotorController}
              title="Motor Controller Type:"
            />
            <Info value={data.LowLevelControl.Motors} title="Motors Type:" />
            <Info value={data.LowLevelControl.Encoder} title="Encoder:" />
          </div>
        </div>
        {/* Electrical - Power */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Power Supply</h3>
            <Info
              value={data.Electrical.powerDistributor}
              title="Power Distribution Set:"
            />
          </div>
        </div>

        {/* Modules */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Modules</h3>
            <Info value={data.Modules.Navigation} title="Navigation:" />
            <Info value={data.Modules.CPU} title="Single Board Computer:" />
            <Info value={data.Modules.GPSBoard} title="GPS Board:" />
          </div>
        </div>
        {/* Marking Method */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Marking Method</h3>
            <Info value={data.SprayingMechanism.Gantry} title="Gantry:" />
            <Info
              value={data.SprayingMechanism.GantryMotors}
              title="Gantry Motors:"
            />
            <Info
              value={data.SprayingMechanism.HomingMethod}
              title="Homing Method:"
            />
            <Info
              value={data.SprayingMechanism.MarkingMechanism}
              title="Marking Mechanism:"
            />
            <Info value={data.SprayingMechanism.Servo} title="Servo:" />
            <Info value={data.SprayingMechanism.ServoPWM} title="Servo PWM:" />
          </div>
        </div>
        {/* Sensors */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Sensors</h3>
            <Info value={data.Sensors.GpsAntenna} title="GPS Antenna Type:" />
            <Info value={data.Sensors.ExternalIMU} title="External IMU Type:" />
            <Info value={data.Sensors.Lidar} title="Lidar Type:" />
          </div>
        </div>
        {/* communication */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Communication</h3>
            <Info value={data.Communication.Router} title="Router Type:" />
            <Info
              value={data.Communication.EthernetSwitch}
              title="Ethernet Switch Type:"
            />
            <Info value={data.Communication.RcDongle} title="RC Dongle Type:" />
            <Info value={data.Communication.Rfd} title="RF Type:" />
            <Info value={data.Communication.RfdNetID} title="RF Net ID:" />
            <Info
              value={data.Communication.RfdCommsBox}
              title="RFD Comms Box:"
            />
            <Info
              value={data.Communication.SimCard}
              title="Sim Card Included:"
            />
            <Info
              value={data.Communication.SimCardNumber}
              title="Sim Card Number:"
            />
          </div>
        </div>
        {/* Software Version */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Software Version</h3>
            <Info value={data.Software.CivPlan} title="CivPlan Version:" />
            <Info value={data.Software.CivRos} title="CivRos Version:" />
            <Info value={data.Software.Pixhawk} title="Pixhawk Version:" />
          </div>
        </div>
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Customer Information</h3>
            <Info value={data.Customer.Customer} title="Pixhawk Version:" />
            <Info value={data.Customer.Location} title="Location:" />
            <Info
              value={data.Customer.CommissioningDate}
              title="Commissioning Date:"
            />
            <Info value={data.Customer.LastVisit} title="Last Visit:" />
            <Info value={data.Customer.ContactPerson} title="Contact Person:" />
            <Info
              value={data.Customer.ContactPersonEmail}
              title="Contact Person Email:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
