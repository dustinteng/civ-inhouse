export const GlobalStyles = {
  //Overall safe area container
  safeArea: {
    margin: "20px 50px",
    display: "flex",
    width: "90%",
    height: "100%",
    scrollBehaviour: "smooth",
    flexDirection: "column",
  },

  //for pop up window
  //used by 1. modules pop up pages, 2. civdots pop up pages
  popUpBox: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#FFCEA4",
    width: "95%",
    height: "95%",
    padding: "2% 2%",
    borderRadius: "5px",
  },
  box: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    border: "1px solid #999",
    borderRadius: "4px",
    padding: "0px 20px",
    marginBottom: "5px",
    overflow: "auto",
  },
  buttonClose: {
    width: "30px",
    height: "30px",
    position: "sticky",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: "2px solid #3b1800",
    borderRadius: "50%",
    left: "calc( 100%)",
    top: "10px",
    backgroundColor: "darkOrange",
    color: "#3b1800",
    fontSize: "18px",
  },
  //contentcontainer
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
};
