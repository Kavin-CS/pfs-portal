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

export default function Video() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        height="360"
        src="http://youtube.com/embed/xWYKM-mDryo?rel=0"
        width="640"
      />
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Equivalent Resistance of Resistors
          (Series). Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=40&cnt=122
        </Typography>
      </div>
    </div>
  );
}
