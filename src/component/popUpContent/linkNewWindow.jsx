export default function LinkNewWindow(props) {
  return (
    <a style={styles.link} href={props.link} target="_blank">
      {" "}
      {props.children}{" "}
    </a>
  );
}

const styles = { link: { padding: "5px 5px" } };
