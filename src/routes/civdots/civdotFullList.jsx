import CivDotButton from "../../component/content/civdotButton";
export default function CivDotFullList() {
  return (
    <div style={styles.CivDotWindowContainer}>
      <div style={styles.civDotContainer1}>
        <h3 style={{ padding: "0px 0px" }}> SF Office </h3>
        {/* nanti disini taro forloop untuk cek ada brp robot di backendnya */}
        <div style={styles.civDotContainer2}>
          <CivDotButton title={"CivDot1"}> </CivDotButton>
          <CivDotButton title={"CivDot2"}> </CivDotButton>
          <CivDotButton title={"+"}> </CivDotButton>
        </div>
        <h3> Deployed </h3> <CivDotButton title={"CivDot14"}> </CivDotButton>
        <div style={styles.civDotContainer2}> </div>
      </div>
    </div>
  );
}

const styles = {
  CivDotWindowContainer: {
    width: "100%",
    height: "80%",
    padding: "0px 10px",
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
    flexDirection: "row",
  },
};
