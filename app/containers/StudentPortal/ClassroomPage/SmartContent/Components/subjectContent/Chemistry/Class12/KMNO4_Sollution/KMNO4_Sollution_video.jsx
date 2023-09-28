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
        height="360"
        src="//www.youtube.com/embed/LzQpbfU7DLo?rel=0"
        width="640"
      />
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Determination of concentration of KMnO₄
          solution. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=115&cnt=551
        </Typography>
      </div>
    </div>
  );
}
