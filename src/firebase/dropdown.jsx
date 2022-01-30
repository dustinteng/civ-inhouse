import { useState } from "react";

export const Dropdown = (props) => {
  const [value, setValue] = useState("one"); //default value

  function handleSelectChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <select value={value} onChange={handleSelectChange}>
        {" "}
        //set value here
        {props.children}
      </select>
      <p>the value is {value}</p>
    </div>
  );
};
