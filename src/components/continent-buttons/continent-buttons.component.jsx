import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const ContinentButtons = ({changeContinent}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={() => changeContinent("All")}>All</Button>
      <Button onClick={() => changeContinent("Europe")}>Europe</Button>
      <Button onClick={() => changeContinent("North America")}>North America</Button>
      <Button onClick={() => changeContinent("Asia")}>Asia</Button>
      <Button onClick={() => changeContinent("South America")}>South America</Button>
      <Button onClick={() => changeContinent("Africa")}>Africa</Button>
      <Button onClick={() => changeContinent("Oceania")}>Oceania</Button>
    </div>
  );
}
