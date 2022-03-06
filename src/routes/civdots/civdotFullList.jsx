import { useState } from "react";
import { useEffect } from "react";

import CivDotCard from "./civDotCard";
import NewCivDotCard from "./newCivDotCard";
import { GlobalPageStyles } from "../../globalPageStyles";
import * as hitFirebase from "../../firebase/hitFirebase";

// import { query, orderBy, limit } from "firebase/firestore";

const dbPath = "civrovers";

export default function CivDotFullList() {
  // rovers states
  const [robotName, setRobotName] = useState("CivDot !");
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
  const rawdata = [
    {
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
    },
  ];
  const [docPath, setDocPath] = useState("");
  const [roverData, setRoverData] = useState(rawdata);

  const getData = async () => {
    const results = await hitFirebase.GetDocuments(dbPath);
    setRoverData(results.map((doc) => ({ ...doc.data().data, id: doc.id })));
  };

  const displayRovers = roverData.map((rover, index) => {
    // console.log("data each: ", rover.Rovers);
    return (
      <div key={index}>
        <CivDotCard
          rover={rover}
          title={rover.Rovers.Name}
          civros={rover.Software.CivRos}
          civplan={rover.Software.CivPlan}
          netid={rover.Communication.RfdNetID}
          customer={rover.Customer.Customer}
          location={rover.Customer.Location}
        />
      </div>
    );
  });

  useEffect(() => {
    getData();
  }, []);

  // const a = () => {
  //   console.log("onload window nih");
  // };
  // // window.onload = getData();
  // window.onload = a();

  return (
    <div style={styles.CivDotWindowContainer}>
      <button onClick={() => getData()}> refresh </button>
      <div style={styles.civDotContainer1}>
        <div style={{ ...styles.civDotContainer2 }}>
          <div style={{ ...styles.civDotContainer2, overflow: "auto" }}>
            <div>
              <NewCivDotCard title={"add new rover"} />
            </div>
            {displayRovers}
          </div>
        </div>
        <h3> Deployed </h3>
        <CivDotCard title={"CivDot 1"} />
        <div style={styles.civDotContainer2}> </div>
      </div>
    </div>
  );
}

const styles = {
  CivDotWindowContainer: {
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    overflowY: "scroll",
  },
  civDotContainer1: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "90%",
    flex: "1",
  },
  civDotContainer2: {
    width: "100%",
    display: "flex",
    flex: "1",
    flexDirection: "row",
    border: "1px solid black",
  },
  civDotsContainer: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
  },
};
