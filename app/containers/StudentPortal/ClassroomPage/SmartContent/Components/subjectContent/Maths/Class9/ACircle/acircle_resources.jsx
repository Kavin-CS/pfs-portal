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
        <a href="http://www.mathgoodies.com/lessons/vol2/circle_area.html">
          http://www.mathgoodies.com/lessons/vol2/circle_area.html
        </a>
      </p>

      <p>
        <a href="https://www.mathsisfun.com/geometry/circle-area.html">
          https://www.mathsisfun.com/geometry/circle-area.html
        </a>
      </p>

      <p>
        <a href="http://www.wikihow.com/Calculate-the-Area-of-a-Circle">
          http://www.wikihow.com/Calculate-the-Area-of-a-Circle
        </a>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Area of circle. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=215&cnt=6
        </Typography>
      </div>
    </div>
  );
}
