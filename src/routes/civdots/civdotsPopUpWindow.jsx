import {
  useCivDotUpdateStatus,
  useCivDotContent,
} from "../../context/civdotWindowContext";

import AddNewCivDot from "./addNewCivDot";
import RoverInfo from "./roverInfo";
import ContentHome from "../../component/content/contentHome";

import { GlobalStyles } from "../../globalStyles";

export default function CivDotsPopUpWindow() {
  const togglePopUp = useCivDotUpdateStatus();
  const curPopUpWindow = useCivDotContent();

  return (
    <div style={GlobalStyles.popUpBox}>
      <div style={GlobalStyles.box}>
        <button
          style={GlobalStyles.buttonClose}
          onClick={() => togglePopUp(false)}
        >
          {" "}
          X{" "}
        </button>
        {{
          "add new rover": <AddNewCivDot />,
          "CivDot 1": <RoverInfo roverName="CivDot 1" />,
          "CivDot 2": <RoverInfo roverName="CivDot 2" />,
          "CivDot 3": <RoverInfo roverName="CivDot 3" />,
          "CivDot 4": <RoverInfo roverName="CivDot 4" />,
          "CivDot 5": <RoverInfo roverName="CivDot 5" />,
          "CivDot 6": <RoverInfo roverName="CivDot 6" />,
          "CivDot 7": <RoverInfo roverName="CivDot 7" />,
          "CivDot 8": <RoverInfo roverName="CivDot 8" />,
          "CivDot 9": <RoverInfo roverName="CivDot 9" />,
          "CivDot 10": <RoverInfo roverName="CivDot 10" />,
          "CivDot 11": <RoverInfo roverName="CivDot 11" />,
          "CivDot 12": <RoverInfo roverName="CivDot 12" />,
          "CivDot 13": <RoverInfo roverName="CivDot 13" />,
          "CivDot 14": <RoverInfo roverName="CivDot 14" />,
          "CivDot 15": <RoverInfo roverName="CivDot 15" />,
          "CivDot 16": <RoverInfo roverName="CivDot 16" />,

          "CivDot 100": <RoverInfo roverName="CivDot 100" />,

          "CivDot #": <RoverInfo roverName="CivDot #" />,
        }[curPopUpWindow] || <ContentHome />}
      </div>
    </div>
  );
}
