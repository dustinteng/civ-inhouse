export default function PartListTable(props) {
  const emptyData = [{ name: "Contoh", qty: 4, stock: "Low" }];
  const data = props.data || emptyData;
  return (
    <div style={styles.tableContainer}>
      <h4>{props.title}</h4>
      <table style={styles.table}>
        <tbody>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Office Stock</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td style={styles.td}>{val.name}</td>
                <td style={styles.td}>{val.qty}</td>
                <td style={styles.td}>{val.stock}</td>
              </tr>
            );
          })}
        </tbody>
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
