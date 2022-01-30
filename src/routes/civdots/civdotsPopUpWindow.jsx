import {
  useCivDotUpdateStatus,
  useCivDotContent,
} from "../../context/civdotWindowContext";

export default function CivDotsPopUpWindow() {
  const togglePopUp = useCivDotUpdateStatus();

  const curPopUpWindow = useCivDotContent();
  return (
    <div style={styles.popUpBox}>
      <div style={styles.box}>
        <button style={styles.buttonClose} onClick={() => togglePopUp(false)}>
          {" "}
          x{" "}
        </button>
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
