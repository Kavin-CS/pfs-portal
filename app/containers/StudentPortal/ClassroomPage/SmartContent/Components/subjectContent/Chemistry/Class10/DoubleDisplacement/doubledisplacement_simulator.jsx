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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=reaction-Sodium-Sulphate-and-barium-chloride&amp;tempId=olab_ot&amp;linktoken=1ebd644c94752d22814188e10702e43b&amp;elink_lan=en-IN&amp;elink_title=Double Displacement Reaction"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Double Displacement Reaction. Retrieved
          1 April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=82&cnt=4
        </Typography>
      </div>
    </div>
  );
}
