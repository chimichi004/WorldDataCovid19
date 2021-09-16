import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

//Copied and modified from material-ui docs
const columns = [
  { id: 'no', label: '#', minWidth: 80 },
  { id: 'cntry', label: 'Country, Other', minWidth: 200 },
  { id: 'ttl_css', label: 'Total Cases', minWidth: 200 },
  { id: 'nw_css', label: 'New Cases', minWidth: 200 },
  { id: 'ttl_dth', label: 'Total Deaths', minWidth: 200 },
  { id: 'ttl_rcvr', label: 'Total Recover', minWidth: 200 },
  { id: 'nw_rcvr', label: 'New Recover', minWidth: 200 },
  { id: 'actv_css', label: 'Active Cases', minWidth: 200 },
  { id: 'srs_crtl', label: 'Serious, Critical', minWidth: 200 },
  { id: 'tot_css', label: 'Tot Cases/ 1M Pop', minWidth: 200 },
  { id: 'dth_css', label: 'Deaths/ 1M Pop', minWidth: 200 },
  { id: 'ttl_tsts', label: 'Total Tests', minWidth: 200 },
];

//Copied and modified from material-ui docs
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


export const CovidTable = ({covidStatusData}) => {
//Copied and modified from material-ui docs
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //Copied and modified from material-ui docs
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //Copied and modified from material-ui docs
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

 let createData = (obj) => {
    return {
        no : obj.countryInfo._id,
        cntry : obj.country, 
        ttl_css : obj.cases, 
        nw_css : obj.todayCases, 
        ttl_dth : obj.deaths, 
        ttl_rcvr : obj.recovered, 
        nw_rcvr : obj.todayRecovered, 
        actv_css : obj.active, 
        srs_crtl : obj.critical, 
        tot_css : obj.casesPerOneMillion, 
        dth_css : obj.deathsPerOneMillion, 
        ttl_tsts : obj.tests
    }
  }

  let rows =  covidStatusData.map(e => {  
      return createData(e);
    });

  return (
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
