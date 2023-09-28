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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=SOL&amp;exp=Separation-of-components-of-a-mixture&amp;tempId=olab_ot&amp;linktoken=a6177267896217ddd77b90c497935767&amp;elink_lan=en-IN&amp;elink_title=Separation of Components of a Mixture"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Separation of Components of a Mixture.
          Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=39&cnt=4
        </Typography>
      </div>
    </div>
  );
}
