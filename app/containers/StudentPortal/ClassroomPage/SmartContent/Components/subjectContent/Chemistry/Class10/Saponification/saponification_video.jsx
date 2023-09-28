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
        src="https://youtube.com/embed/VmQV3Qs9Qzk?rel=0"
        width="640"
      />
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Saponification-The process of Making
          Soap. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=119&cnt=386
        </Typography>
      </div>
    </div>
  );
}
