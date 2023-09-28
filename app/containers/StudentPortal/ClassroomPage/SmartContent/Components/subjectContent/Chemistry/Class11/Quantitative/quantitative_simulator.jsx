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
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=INC&amp;exp=Quantitative_Estimation&amp;tempId=olab_ot&amp;linktoken=7736a9ef5d9c3d68e2bd86de3d2c28a8&amp;elink_lan=en-IN&amp;elink_title=Quantitative Estimation"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Quantitative Estimation. Retrieved 30
          March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=109&cnt=4
        </Typography>
      </div>
    </div>
  );
}
