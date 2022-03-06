export default function RoverDetailsTable(props) {
  const emptyData = [{ Name: "Contoh", Customer: "gaada" }];
  const data = props.data || emptyData;
  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        {/* Name */}
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>{data.Name}</th>
        </tr>
        {/* Descripton */}
        <tr>
          <th style={styles.th}>Customer</th>
          <th style={styles.th}>{data.Customer}</th>
        </tr>
        {/* Status */}
        <tr>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>{data.Status}</th>
        </tr>
        {/* Description */}
        <tr>
          <th style={styles.th}>Description</th>
          <th style={styles.th}>{data.Description}</th>
        </tr>
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
