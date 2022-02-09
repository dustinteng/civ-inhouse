export default function Table(props) {
  const emptyData = [{ hole: "Contoh", loc: "gaada" }];
  const data = props.data || emptyData;
  return (
    <div style={styles.tableContainer}>
      <h4>{props.title}</h4>
      <table style={styles.table}>
        <tr>
          <th style={styles.th}>Hole</th>
          <th style={styles.th}>Location</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td style={styles.td}>{val.hole}</td>
              <td style={styles.td}>{val.loc}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

const styles = {
  tableContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  table: {
    border: "2px solid #3b1800",
    width: "90%",
    height: "90%",
  },

  th: { borderBottom: "1px solid #3b1800" },

  td: { textAlign: "center" },
};
