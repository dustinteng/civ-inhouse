import { GlobalPageStyles } from "../globalPageStyles";

export function UserInput(props) {
  return (
    <div style={GlobalPageStyles.questionContainer}>
      <label>
        {props.title}
        <input
          value={props.value}
          onfocus={props.onfocus}
          onChange={(e) => props.callback(e)}
        ></input>
      </label>
    </div>
  );
}
