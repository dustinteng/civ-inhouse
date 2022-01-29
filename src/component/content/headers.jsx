import React from "react";

export default function Headers(props) {
  const title = props.title;
  return <h1> {title} </h1>;
}

const styles = {
  header: {
    width: "100%",
  },
};
