import { useState } from "react";
import { GlobalPageStyles } from "../globalPageStyles";

export const Dropdown = (props) => {
  const [value, setValue] = useState("");
  const callback = props.callback;
  function handleSelectChange(event) {
    callback(event.target.value);
    setValue(event.target.value);
  }

  return (
    <div style={GlobalPageStyles.questionContainer}>
      <p>{props.title}</p>
      <div style={styles.centeringBox}>
        <select value={value} onChange={handleSelectChange}>
          {props.children}
        </select>
      </div>
    </div>
  );
};

const styles = {
  centeringBox: {
    display: "flex",
    flexDirection: "column",
    flexDirection: "center",
    alignItems: "center",
  },
};
