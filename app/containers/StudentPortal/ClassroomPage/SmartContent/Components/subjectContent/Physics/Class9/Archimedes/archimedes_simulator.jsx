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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=TDM&amp;exp=weight_of_solids&amp;tempId=olab&amp;linktoken=92fe56d9e24a70cd62e20c6180b4da3c&amp;elink_lan=en-IN&amp;elink_title=Verification of Archimedes' Principle"
        width="800px"
        height="625px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Verification of Archimedes' Principle.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=72&cnt=4
        </Typography>
      </div>
    </div>
  );
}
