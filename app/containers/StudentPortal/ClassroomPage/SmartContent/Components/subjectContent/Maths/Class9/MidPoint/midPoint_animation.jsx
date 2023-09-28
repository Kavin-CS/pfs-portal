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

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/olabs/OlabsAnimation//MidPointTheorem/English/midpointtheorem_english.mp4"
        width="100%px"
        height="950px"
      />
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        cdac.olabs.edu.in,. (2014). Mid-point theorem. Retrieved 4 March 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=181&cnt=4 
        </Typography>
      </div>
    </div>
  );
}
