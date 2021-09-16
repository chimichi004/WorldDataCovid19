import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CovidTable } from '../table-list/table-list.component';


const useStyles = makeStyles({
  root: {
    padding: '30px',
  },
});


export const TableContainer = ({covidStatus}) => {
    const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
        <CovidTable covidStatusData={covidStatus}/>
    </Container>
  )
}