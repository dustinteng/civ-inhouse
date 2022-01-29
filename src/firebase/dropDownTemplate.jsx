import React from "react";
import { Dropdown, Option } from "./dropdown";

//import style
import { GlobalStyles } from "../globalStyles";

export default function DropDownTest() {
  return (
    <div style={GlobalStyles.safeArea}>
      <h1>Which service are you interested in?</h1>
      <Dropdown formLabel="Choose a service" buttonText="Send form" action="/">
        <Option selected value="Click to see options" />
        <Option value="Option 1" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown>
    </div>
  );
}
