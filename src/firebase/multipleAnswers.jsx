import { GlobalPageStyles } from "../globalPageStyles";
import { useState } from "react";

export function MultipleAnswers(props) {
  const [theArray, setTheArray] = useState(props.rovers);
  const [curAns, setCurAns] = useState("");

  const addEntryClick = () => {
    setTheArray([...theArray, curAns]);
    props.setRovers(theArray);
    setCurAns("");
  };

  const handleNameChange = (event) => {
    setCurAns(event.target.value);
  };

  return [
    <div style={GlobalPageStyles.divideContainerColumn}>
      <div style={GlobalPageStyles.questionContainer}>
        <p>
          {props.title} {props.info}
        </p>
        <div style={styles.centeringBox}>
          <label>
            <input value={curAns} onChange={(e) => handleNameChange(e)}></input>
          </label>
        </div>
      </div>
      <div style={GlobalPageStyles.questionContainer}>
        <div>
          {theArray.map((rover, key) => {
            // console.log(key, rover);
            return <li key={key}>{rover}</li>;
          })}
        </div>
        <button type="button" onClick={addEntryClick} value={curAns}>
          add
        </button>
      </div>
    </div>,
  ];
}

const styles = {
  centeringBox: {
    display: "flex",
    flexDirection: "column",
    flexDirection: "center",
    alignItems: "center",
  },
};
