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
        allowfullscreen=""
        frameborder="0"
        height="360"
        src="https://www.youtube.com/embed/6eQs9C88OMo?rel=0"
        width="640"
      />
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Viscosity of a liquid - Stoke's method.
          Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=225&cnt=587
        </Typography>
      </div>
    </div>
  );
}
