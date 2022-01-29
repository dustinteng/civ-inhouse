import Headers from "../component/content/headers.jsx";

export default function CivDots() {
  return (
    <div style={styles.safeArea}>
      <Headers title={"Civ Dots :"} />
      <div style={styles.civDotContainer1}>
        <div style={styles.civDotContainer2}>
          {" "}
          <h3> in house </h3>{" "}
        </div>
        <div style={styles.civDotContainer2}>
          {" "}
          <h3> in asdasd </h3>{" "}
        </div>
      </div>
    </div>
  );
}

const styles = {
  safeArea: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 50px",
    display: "flex",
    height: "100%",
    width: "100%",
  },

  civDotContainer1: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: "1",
  },
  civDotContainer2: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
  },
};
