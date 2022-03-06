import { GlobalPageStyles } from "../../globalPageStyles";

export function Info(props) {
  return (
    <div style={GlobalPageStyles.questionContainer}>
      <p>
        {props.title} {props.info}
      </p>
      <div style={styles.centeringBox}>
        <label>
          <p> {props.value}</p>
        </label>
      </div>
    </div>
  );
}

const styles = {
  centeringBox: {
    display: "flex",
    flexDirection: "column",
    flexDirection: "center",
    alignItems: "center",
  },
};
