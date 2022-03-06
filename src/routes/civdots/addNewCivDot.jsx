import React, { useState } from "react";
import { GlobalStyles } from "../../globalStyles";
import { GlobalPageStyles } from "../../globalPageStyles";

import { Dropdown } from "../../firebase/dropdown";
import { UserInput } from "../../firebase/userInput";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

// Initializing Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default function AddNewCivDot(props) {
  const db = getFirestore();

  // const docRef = doc(db, "civRoverArchive", "asdasd");

  // const docSnap = async () => {
  //   const res = await getDoc(docRef);
  //   console.log("....", res.data());
  //   return res.data.name;
  // };

  // rovers states
  const [robotName, setRobotName] = useState("CivDot #");
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
  const [gpsAntenna, setGpsAntenna] = useState("None");
  const [externalIMU, setExternalIMU] = useState("None");
  const [lidar, setLidar] = useState("None");

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
  const [contactPersonNumber, setContactPersonNumber] = useState("");

  //to send data
  const data = {
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
    Sensors: { GpsAntenna: gpsAntenna, ExternalIMU: externalIMU, Lidar: lidar },
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
      ContactPersonNumber: contactPersonNumber,
    },
  };

  const emptyInputs = () => {
    // setRobotType("");
    setRobotName("");
    // setCustomer("");
    // setStatus("");
    // setDescription("");
    // document.getElementById("userInput").value = "";
    // console.log("robot desc, ", description);
  };

  const send = async () => {
    const res = await setDoc(doc(db, "civrovers", robotName), {
      data,
    });
  };

  const sendDatahelperFunction = () => {
    send();
    emptyInputs();
  };

  // helper function

  const handleNameChange = (event) => {
    setRobotName(event.target.value);
  };

  const handlePICChange = (event) => {
    setPersonInCharge(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handlePWMChange = (event) => {
    setServoPWM(event.target.value);
  };

  const handleNetIDChange = (event) => {
    setRfdNetID(event.target.value);
  };

  const handleSimCardNumberChange = (event) => {
    setSimCardNumber(event.target.value);
  };

  const handleCivPlanVersionChange = (event) => {
    setCivPlan(event.target.value);
  };

  const handleCivRosVersionChange = (event) => {
    setCivRos(event.target.value);
  };

  const handlePixhawkVersionChange = (event) => {
    setPixhawk(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCommissioningDateChange = (event) => {
    setCommissioningDate(event.target.value);
  };

  const handleLastVisitChange = (event) => {
    setLastVisit(event.target.value);
  };

  const handleContactPersonChange = (event) => {
    setContactPerson(event.target.value);
  };

  const handleCPEmailChange = (event) => {
    setContactPersonEmail(event.target.value);
  };

  const handleCPNumberChange = (event) => {
    setContactPersonNumber(event.target.value);
  };

  return (
    <div>
      <div style={GlobalPageStyles.outerSafeAreaContainer}>
        <h2>Add a new CivDot </h2>

        {/* Rover */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Rover Information</h3>
            <UserInput
              value={robotName}
              title="Rover Name: "
              callback={handleNameChange}
              info=" ' CivDot 20 ' | ' CivDot + 5 ' "
            />
            <Dropdown action="" callback={setRobotType} title="Robot Type:">
              <option value="None">Drop down to pick model</option>
              <option value="CivDot">CivDot</option>
              <option value="CivDot Plus">CivDot Plus</option>
              <option value="CivDot Plus v.2">CivDot Plus v.2</option>
            </Dropdown>

            {/* Status dropdown */}
            <Dropdown action="" callback={setStatus} title="Status?">
              <option value="None">Drop down to pick status</option>
              <option value="Order Received">Order received</option>
              <option value="In Progress">In Progress</option>
              <option value="Testing">Testing</option>
              <option value="Deployed">Deployed</option>
              <option value="Under Maintenance">Under Maintenance</option>
              <option value="Demo">Demo</option>
              <option value="Lended">Lended</option>
            </Dropdown>

            <UserInput
              value={personInCharge}
              title="Person in Charge: "
              callback={handlePICChange}
            />

            <UserInput
              value={description}
              title="Description:"
              callback={handleDescriptionChange}
            />

            <UserInput
              value={deadline}
              title="Deadline:"
              callback={handleDeadlineChange}
              info="MM/DD/YYYY"
            />
          </div>
        </div>

        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Platform Information</h3>
            <Dropdown action="" callback={setFrameType} title="Frame Type:">
              <option value="None">Pick Frame Type</option>
              <option value="Rover Zero">Rover Zero</option>
              <option value="Super Droid">Super Droid</option>
              <option value="Seg Way">Seg Way</option>
            </Dropdown>

            <Dropdown action="" callback={setTiresType} title="Tires Type:">
              <option value="None">Pick Tires Type</option>
              <option value="4.10-4NHS">4.10-4NHS</option>
              <option value="13'' Traction Lug">13'' Traction Lug</option>
            </Dropdown>
          </div>
        </div>

        {/* Low Level Controller */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Low Level Controller</h3>
            <Dropdown
              action=""
              callback={setMotorController}
              title="Motor Controller Type:"
            >
              <option value="None">Pick Motor Controller Type</option>
              <option value="RoboteQ DC2160">RoboteQ DC2160</option>
              <option value="Sabertooth 2x60">Sabertooth 2x60</option>
              <option value="Roboclaw 2x30">Roboclaw 2x30</option>
            </Dropdown>

            <Dropdown action="" callback={setMotors} title="Motors Type:">
              <option value="None">Pick Motors Type</option>
              <option value="IG52-04 24VDC 85 RPM Gear Motor">
                IG52-04 24VDC 85 RPM Gear Motor
              </option>
            </Dropdown>

            <Dropdown action="" callback={setEncoder} title="Encoder:">
              <option value="None">None</option>
              <option value="Yes">Yes</option>
            </Dropdown>
          </div>
        </div>

        {/* Electrical - Power */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Power Supply</h3>
            <Dropdown
              action=""
              callback={setPowerDistributor}
              title="Power Distributor Set:"
            >
              <option value="None">Pick Power Distributor Set</option>
              <option value="24V-5V and 24V-12V">24V-5V and 24V-12V </option>
              <option value="24v-5v, 24v-12v, and 24v-24v">
                24v-5v, 24v-12v, and 24v-24v{" "}
              </option>
              <option value="Mauch PL 4-6S BEC ">Mauch PL 4-6S BEC </option>
              <option value="APD-PDB360 & UBEC-10A">
                APD-PDB360 & UBEC-10A{" "}
              </option>
            </Dropdown>
          </div>
        </div>

        {/* Modules */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Modules</h3>
            <Dropdown
              action=""
              callback={setNavigation}
              title="Navigation Module:"
            >
              <option value="Pixhawk">Pixhawk</option>
            </Dropdown>
            <Dropdown
              action=""
              callback={setCPU}
              title="Single Board Computer:"
            >
              <option value="Jetson Nano">Jetson Nano</option>
            </Dropdown>
            <Dropdown action="" callback={setGpsModule} title="GPS Module:">
              <option value="Ardusimple + Xbee">Ardusimple + Xbee</option>
              <option value="Trimble MB2">Trimble MB2</option>
              <option value="Emlid M2">Emlid M2</option>
            </Dropdown>
          </div>
        </div>

        {/* Marking Method */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Marking Method</h3>
            <Dropdown callback={setGantry} title="Gantry Shape:">
              <option value="None">None</option>
              <option value="H-Shape">H-Shape</option>
              <option value="L-Shape">L-Shape</option>
            </Dropdown>
            <Dropdown
              callback={setGantryMotors}
              title="Gantry Motor Controller and Motors:"
            >
              <option value="None">None</option>
              <option value="SoftMC and ServoTronics">
                SoftMC and ServoTronics
              </option>
              <option value="Schneider">Schneider</option>
            </Dropdown>
            <Dropdown callback={setHomingMethod} title="Homing Method:">
              <option default value="None">
                Pick Homing Method
              </option>
              <option value="None">None</option>

              <option value="Electric Current">Electric Current</option>
              <option value="Limit Switches">Limit Switches</option>
              <option value="Absolute Encoders">Absolute Encoders</option>
            </Dropdown>
            <Dropdown callback={setMarkingMechanism} title="Marking Mechanism:">
              <option value="None">Pick Marking Mechanism</option>
              <option value="Direct Spray">Direct Spray</option>
              <option value="Spray Though Pipe">Spray Though Pipe</option>
              <option value="Lifted Sprayer With Pipe">
                Lifted Sprayer With Pipe
              </option>
            </Dropdown>
            <Dropdown callback={setServo} title="Servo Type:">
              <option value="None">Pick Servo Type</option>

              <option value="DSSERVO DS3218MG Waterproof 20KG">
                DSSERVO DS3218MG Waterproof 20KG
              </option>
              <option value="FEETECH FS5115M">FEETECH FS5115M</option>
            </Dropdown>
            <UserInput title="Servo PWM: " callback={handlePWMChange} />
          </div>
        </div>

        {/* Sensors */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Sensors</h3>
            <Dropdown callback={setGpsAntenna} title="GPS Antenna:">
              <option value="None">Pick Antenna Type</option>
              <option value="Black Antenna">Black Antenna</option>
              <option value="White Antenna">White Antenna</option>
              <option value="Tallysman Antenna">Tallysman Antenna</option>
            </Dropdown>
            <Dropdown callback={setExternalIMU} title="External IMU:">
              <option value="None">None</option>
              <option value="Kernel 100">Kernel 100</option>
            </Dropdown>
            <Dropdown callback={setLidar} title="Lidar:">
              <option value="None">None</option>
              <option value="TF Mini Plus">TF Mini Plus</option>
            </Dropdown>
          </div>
        </div>

        {/* communication */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Communication</h3>
            <Dropdown callback={setRouter} title="Wifi Router:">
              <option value="None">None</option>
              <option value="RUT 240">RUT 240</option>
            </Dropdown>
            <Dropdown callback={setESwitch} title="Ethernet Switch:">
              <option value="None">None</option>
              <option value="D-Link DGS 1005A 5 Port">
                D-Link DGS 1005A 5 Port
              </option>
            </Dropdown>
            <Dropdown callback={setRcDongle} title="RC Dongle:">
              <option value="None">None</option>
              <option value="FrSky X8R">FrSky X8R</option>
            </Dropdown>

            <Dropdown callback={setRfd} title="RFD:">
              <option value="None">None</option>
              <option value="RFD 900">RFD 900</option>
            </Dropdown>

            <UserInput title="RFD Net ID: " callback={handleNetIDChange} />
            <Dropdown callback={setRfdCommsBox} title="Comms Box:">
              <option value="None">None</option>
              <option value="Yes">Yes</option>
            </Dropdown>
            <Dropdown callback={setSimCard} title="Sim Card:">
              <option value="None">None</option>
              <option value="Yes">Yes</option>
            </Dropdown>
            <UserInput
              title="SIM Card Number: "
              callback={handleSimCardNumberChange}
            />
          </div>
        </div>

        {/* Software Version */}
        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Software Version</h3>
            <UserInput
              title="CivPlan: "
              callback={handleCivPlanVersionChange}
              info="| example : v1.9.2 | "
            />
            <UserInput
              title="CivRos: "
              callback={handleCivRosVersionChange}
              info="| example : v1.6.2 | "
            />
            <UserInput
              title="Pixhawk: "
              callback={handlePixhawkVersionChange}
              info="| example : v1.3.1b | "
            />
          </div>
        </div>

        <div style={GlobalPageStyles.contentContainer}>
          <div style={GlobalPageStyles.innerSafeAreaContainer}>
            <h3>Customer Information</h3>
            <UserInput
              title="Customer name: "
              callback={handleCustomerChange}
            />
            <UserInput title="Location: " callback={handleLocationChange} />
            <UserInput
              title="Date of Commissioning : "
              callback={handleCommissioningDateChange}
            />
            <UserInput title="Last Visit: " callback={handleLastVisitChange} />
            <UserInput
              title="Contact Person: "
              callback={handleContactPersonChange}
            />
            <UserInput
              title="Contact Person Email: "
              callback={handleCPEmailChange}
            />
            <UserInput
              title="Contact Person Number: "
              callback={handleCPNumberChange}
            />
          </div>
        </div>

        <button onClick={sendDatahelperFunction}>send</button>
      </div>
    </div>
  );
}
