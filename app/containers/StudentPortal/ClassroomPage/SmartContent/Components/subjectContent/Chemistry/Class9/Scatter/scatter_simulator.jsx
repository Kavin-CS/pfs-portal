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
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/rutherford/rutherfordzoom.html?linktoken=11ac126fc610566d9590c4adb3c44996&amp;elink_lan=en-IN&amp;elink_title=Rutherford's Scattering Experiment"
        width="900px"
        height="1000px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Rutherford's Scattering Experiment.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=88&cnt=186
        </Typography>
      </div>
    </div>
  );
}
