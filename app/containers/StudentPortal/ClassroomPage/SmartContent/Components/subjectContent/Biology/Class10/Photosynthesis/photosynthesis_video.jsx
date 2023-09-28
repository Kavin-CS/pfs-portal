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
}));

export default function Video() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        height="360"
        src="//www.youtube.com/embed/joOPGmrXz7U?rel=0"
        width="640"
      />
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2014). Importance of Light in Photosynthesis. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=126&cnt=316 
        </Typography>
      </div>
    </div>
  );
}
