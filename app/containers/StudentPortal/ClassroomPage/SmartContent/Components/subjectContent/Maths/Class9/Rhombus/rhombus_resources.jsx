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
      <ul>
        <li>
          <a href="http://www.mathopenref.com/rhombusarea.html">
            http://www.mathopenref.com/rhombusarea.html
          </a>
        </li>
        <li>
          <a href="http://www.coolmath.com/reference/rhombus.html">
            www.coolmath.com/reference/rhombus.html
          </a>
        </li>
        <li>
          <a href="http://www.mathsisfun.com/geometry/rhombus.html">
            www.mathsisfun.com/geometry/rhombus.html
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Rhombus">
            en.wikipedia.org/wiki/Rhombus
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of rhombus. Retrieved 8 April 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=169&cnt=6
        </Typography>
      </div>
    </div>
  );
}
