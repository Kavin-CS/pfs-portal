import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/Periodic_Table/PeriodicTable.html?linktoken=37aa4834a31e97424beb67a743ecfeaf&amp;elink_lan=en-IN&amp;elink_title=Modern periodic table"
        width="1000px"
        height="650px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Modern periodic table. Retrieved 3 April
          2021, from cdac.olabs.edu.in/?sub=75&brch=12&sim=94&cnt=4
        </Typography>
      </div>
    </div>
  );
}
