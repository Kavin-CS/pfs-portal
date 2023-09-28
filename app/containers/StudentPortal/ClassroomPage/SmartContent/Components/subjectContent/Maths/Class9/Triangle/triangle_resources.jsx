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
    <div className={classes.animationWrap}>
      <div class="divContent">
        <p>
          <a href="http://www.mathsisfun.com/area.html">
            www.mathsisfun.com/area.html
          </a>
        </p>
        <p>
          <a href="http://www.mathsisfun.com/algebra/trig-area-triangle-without-right-angle.html">
            www.mathsisfun.com/algebra/trig-area-triangle-without-right-angle.html
          </a>
        </p>
        <p>
          <a href="http://www.mathgoodies.com/lessons/vol1/area_triangle.html">
            www.mathgoodies.com/lessons/vol1/area_triangle.html
          </a>
        </p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of triangle. Retrieved 4 March 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=179&cnt=1
        </Typography>
      </div>
    </div>
  );
}
