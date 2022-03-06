import { limitToLast } from "firebase/firestore";

export const GlobalPageStyles = {
  outerSafeAreaContainer: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  innerSafeAreaContainer: {
    width: "80%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "10px 10px",
  },

  //divideContainer to divide container
  divideContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  divideContainerColumn: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  container1unit: {
    flex: 1,
    height: "90%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container2unit: { flex: 2 },

  contentContainer: {
    width: "90%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#transparent", //#FFCEA4
    margin: "10px 10px",
    borderRadius: "10px",
    fontSize: "14px",
    border: "1px solid black",
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxHeight: "100px",
  },

  safeAreaView: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
