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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=SOL&amp;exp=Identification-True-colloidal-suspension-Final&amp;tempId=olab_ot&amp;linktoken=60676c0461154c9c9b08b49b52a42cc0&amp;elink_lan=en-IN&amp;elink_title=Distinguishing Between Solutions"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Distinguishing Between Solutions.
          Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=28&cnt=4
        </Typography>
      </div>
    </div>
  );
}
