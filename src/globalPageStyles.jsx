import { limitToLast } from "firebase/firestore";

export const GlobalPageStyles = {
  //divideContainer to divide container
  divideContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  container1unit: {
    flex: 1,
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container2unit: { flex: 2 },

  contentContainer: {
    width: "85%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#transparent", //#FFCEA4
    margin: "10px 10px",
    borderRadius: "10px",
    fontSize: "14px",
    border: "2px solid black",
  },

  tableContainer: {
    width: "90%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "transparent", //#FFCEA4
    margin: "10px 10px",
    borderRadius: "10px",
    fontSize: "14px",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "90%",
  },

  questionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxHeight: "100px",
    margin: "10px 10px",
  },
};
