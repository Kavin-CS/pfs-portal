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

export default function Video() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        allowfullscreen=""
        frameborder="0"
        height="360"
        src="https://youtube.com/embed/Nce1xOIvRQc?rel=0"
        width="640"
      />
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Properties of Acetic Acid (Ethanoic
          Acid). Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=11&cnt=124
        </Typography>
      </div>
    </div>
  );
}
