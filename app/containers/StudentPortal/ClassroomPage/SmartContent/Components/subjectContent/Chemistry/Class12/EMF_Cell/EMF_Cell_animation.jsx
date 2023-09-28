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
  header:{
    fontSize:20
  }
}));

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="//amrita.olabs.edu.in/olab/CHE/ELC/EMF_measurement/main.html?elink_videoID=9wgSwoJZA0w&amp;linktoken=9f851d7f90ece680b5d68b97f788867f&amp;elink_lan=en-IN&amp;elink_title=Determination of EMF of a Cell"
        width="900px"
        height="650px"
        class="iframeStyle"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Determination of EMF of a Cell.
          Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=153&cnt=434
        </Typography>
      </div>
    </div>
  );
}
