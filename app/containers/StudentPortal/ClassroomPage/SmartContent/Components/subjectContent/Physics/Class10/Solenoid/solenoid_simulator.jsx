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
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/loop/magneticfield.html?linktoken=f353b274a4e1d1f85ee44f5735ea8fca&amp;elink_lan=en-IN&amp;elink_title=The magnetic field lines around current carrying solenoid."
        width="820px"
        height="900px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). The magnetic field lines around current
          carrying solenoid.. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=91&cnt=4
        </Typography>
      </div>
    </div>
  );
}
