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
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/ohmslaw/ohmslaw.html?linktoken=cf023ce7bb0e00c4be371317cc5c4d8d&amp;elink_lan=en-IN&amp;elink_title=Verification of Ohm's Law"
        width="900px"
        height="1100px"
        
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). Verification of Ohm's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=75&cnt=4
        </Typography>
      </div>
    </div>
  );
}
