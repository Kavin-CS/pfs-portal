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
  },
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <a href="http://www.mathsisfun.com/area.html">
          www.mathsisfun.com/area.html
        </a>
      </p>
      <p>
        <a href="http://www.mathsteacher.com.au/year8/ch12_area/04_trap/trap.htm">
          www.mathsteacher.com.au/year8/ch12_area/04_trap/trap.htm
        </a>
      </p>
      <p>
        <a href="http://easycalculation.com/area/learn-trapezium.php">
          easycalculation.com/area/learn-trapezium.php
        </a>
      </p>
      
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of trapezium. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=183&cnt=6
        </Typography>
      </div>
    </div>
  );
}
