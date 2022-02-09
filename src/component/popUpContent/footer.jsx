import React from "react";
import LinkNewWindow from "./linkNewWindow";

export default function Footer({ children }) {
  const websiteLink = "http://www.dustinteng.me";
  return (
    <div style={styles.footerSafeArea}>
      <p style={styles.footer}>{children}</p>
      <p style={styles.footer}>
        Maintained by{" "}
        <LinkNewWindow link={websiteLink}>
          Jan Dustin Tengdyantono
        </LinkNewWindow>
      </p>
    </div>
  );
}

const styles = {
  footerSafeArea: { display: "flex", width: "100%", height: "20vh" },
  footer: {
    width: "90%",
    height: "100%",
    backgroundColor: "transparent",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: "5px 0px",
  },
};
