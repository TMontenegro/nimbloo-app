import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "model", label: "Modelo", minWidth: 150 },
  { id: "year", label: "Ano", minWidth: 150 },
  { id: "plaque", label: "Placa", minWidth: 150 },
  { id: "chassi", label: "Chassi", minWidth: 150 },
];

function createData(model, year, plaque, chassi) {
  return { model, year, plaque, chassi };
}

const rows = [
  createData("Gol", 2012, "NAR-1782", 48437218354),
  createData("Uno", 2014, "JVU-9441", 95969618354),
  createData("Palio", 1998, "KCD-5046", 3013408354),
  createData("Fox", 2000, "JLK-1988", 98335208354),
  createData("CrossFox", 2020, "NAZ-6826", 99846708354),
  createData("Siena", 2002, "LWN-1356", 76920248354),
  createData("Celta", 2003, "MMP-6863", 3575788354),
  createData("Voyage", 1997, "MPW-8793", 702738354),
  createData("HB20", 2004, "NEW-3825", 19725508354),
  createData("Corsa ", 2001, "NAN-4353", 3779738354),
  createData("Onix", 2015, "NBB-6826", 6406798354),
  createData("Sandero", 1995, "NEX-0758", 2424958354),
  createData("Fiesta", 2016, "JZF-8524", 170982468354),
  createData("Cobalt", 2015, "IUB-6063", 9237688354),
  createData("Corolla", 1998, "LVV-2799", 85157678354),
  createData("Gol", 2012, "NAR-1782", 48437218354),
  createData("Uno", 2014, "JVU-9441", 95969618354),
  createData("Palio", 1998, "KCD-5046", 3013408354),
  createData("Fox", 2000, "JLK-1988", 98335208354),
  createData("CrossFox", 2020, "NAZ-6826", 99846708354),
  createData("Siena", 2002, "LWN-1356", 76920248354),
  createData("Celta", 2003, "MMP-6863", 3575788354),
  createData("Voyage", 1997, "MPW-8793", 702738354),
  createData("HB20", 2004, "NEW-3825", 19725508354),
  createData("Corsa ", 2001, "NAN-4353", 3779738354),
  createData("Onix", 2015, "NBB-6826", 6406798354),
  createData("Sandero", 1995, "NEX-0758", 2424958354),
  createData("Fiesta", 2016, "JZF-8524", 170982468354),
  createData("Cobalt", 2015, "IUB-6063", 9237688354),
  createData("Corolla", 1998, "LVV-2799", 85157678354),
];

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  container: {
    height: '70vh',
    maxHeight: '70vh',
  },
  button: {
    margin: '30px 0',
  },
  dashboard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      paddingLeft: '24px',
      paddingRight: '24px',
  }
}));

export default () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.dashboard}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Nova vistoria
      </Button>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
