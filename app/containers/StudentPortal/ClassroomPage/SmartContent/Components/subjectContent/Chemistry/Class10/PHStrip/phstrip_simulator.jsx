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
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=pH-Determination&amp;tempId=olab_ot&amp;linktoken=b037ce79e747b24e71da050cec9c0d2c&amp;elink_lan=en-IN&amp;elink_title=Determine pH with pH indicator strips / universal indicator solution"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Determine pH with pH indicator strips /
          universal indicator solution. Retrieved 31 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=78&cnt=4
        </Typography>
      </div>
    </div>
  );
}
