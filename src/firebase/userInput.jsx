import { GlobalPageStyles } from "../globalPageStyles";

export function UserInput(props) {
  return (
    <div style={GlobalPageStyles.questionContainer}>
      <p>
        {props.title} {props.info}
      </p>
      <div style={styles.centeringBox}>
        <label>
          <input
            value={props.value}
            onChange={(e) => props.callback(e)}
          ></input>
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
