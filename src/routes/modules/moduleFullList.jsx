import ModuleButton from "../../component/content/moduleButton";

export default function ModuleFullList() {
  return (
    <div style={styles.moduleButtonsContainer1}>
      <div style={styles.moduleButtonsContainer2}>
        {/* spread operator hasn't been implemented */}
        <ModuleButton color={"blue"} title={"Antenna"} />
        <ModuleButton color={"blue"} title={"ArduSimple"} />
        <ModuleButton color={"blue"} title={"Box"} />
        <ModuleButton color={"blue"} title={"Calibration"} />
        <ModuleButton color={"blue"} title={"Circuit"} />
        <ModuleButton color={"blue"} title={"CIV Plan"} />
        <ModuleButton color={"blue"} title={"CIV Repeater"} />
        <ModuleButton color={"blue"} title={"FAQ"} />
        <ModuleButton color={"blue"} title={"Gantry"} />
        <ModuleButton color={"blue"} title={"Jetson"} />
        <ModuleButton color={"blue"} title={"Lidar"} />
        <ModuleButton color={"blue"} title={"Motor Controller"} />
        <ModuleButton color={"blue"} title={"PID Calibration"} />
      </div>
      <div style={styles.moduleButtonsContainer2}>
        <ModuleButton color={"blue"} title={"Pixhawk"} />
        <ModuleButton color={"blue"} title={"Power Distribution Unit"} />
        <ModuleButton color={"blue"} title={"Remote Controller"} />
        <ModuleButton color={"blue"} title={"RFD Telemetry"} />
        <ModuleButton color={"blue"} title={"Rovers"} />
        <ModuleButton color={"blue"} title={"Release Notes"} />
        <ModuleButton color={"blue"} title={"Solid State Relay"} />
        <ModuleButton color={"blue"} title={"Spraying Mechanism"} />
        <ModuleButton color={"blue"} title={"Static IP"} />
        <ModuleButton color={"blue"} title={"Top Con - Satel"} />
        <ModuleButton color={"blue"} title={"Trimble"} />
        <ModuleButton color={"blue"} title={"WiFi"} />
        <ModuleButton color={"blue"} title={"Home"} />
      </div>
    </div>
  );
}

const styles = {
  moduleButtonsContainer1: {
    position: "sticky",
    display: "flex",
    width: "100%",
    overflowX: "hidden",
    overflowY: "auto",
  },

  moduleButtonsContainer2: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
  },
};
