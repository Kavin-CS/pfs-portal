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
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/ForceOnConductor/forceonconductor.html?linktoken=8f1aae91a23c4623a16cadb0f82f8797&amp;elink_lan=en-IN&amp;elink_title=Force on a current carrying conductor in a magnetic field"
        width="1000px"
        height="780px"
        
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Force on a current carrying conductor in a
          magnetic field. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=241&cnt=4
        </Typography>
      </div>
    </div>
  );
}
