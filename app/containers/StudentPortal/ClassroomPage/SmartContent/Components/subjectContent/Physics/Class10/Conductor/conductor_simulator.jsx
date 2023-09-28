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
  headTag: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/MagneticEffect/MF_Current_carrying_conductor.html?linktoken=34ebfa79798428c8f847a353fa4160e6&amp;elink_lan=en-IN&amp;elink_title=Magnetic field lines around current carrying conductor"
        width="830px"
        height="850px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Magnetic field lines around current
          carrying conductor. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=90&cnt=4
        </Typography>
      </div>
    </div>
  );
}
