import React from "react";
import { Dropdown, Option } from "./olddropdown";

//import style
import { GlobalStyles } from "../globalStyles";

export default function DropDownTest() {
  return (
    <div style={GlobalStyles.safeArea}>
      <h1>Which service are you interested in?</h1>
      <Dropdown
        formLabel="What CivDot type would you like to start?"
        buttonText="Send form"
        action="/"
      >
        <Option selected value="Click to see options" />
        <Option value="CivDot" />
        <Option value="CivDot+" />
        <Option value="New CivDot+" />
      </Dropdown>
    </div>
  );
}
