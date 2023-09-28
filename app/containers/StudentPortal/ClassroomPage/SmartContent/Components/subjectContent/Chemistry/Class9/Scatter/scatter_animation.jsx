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

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/rutherford/rutherfordnormalview.html?linktoken=4ff9872a065b61547a680163e843a3d8&amp;elink_lan=en-IN&amp;elink_title=Rutherford's Scattering Experiment"
        width="900px"
        height="900px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Rutherford's Scattering Experiment.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=88&cnt=187
        </Typography>
      </div>
    </div>
  );
}
