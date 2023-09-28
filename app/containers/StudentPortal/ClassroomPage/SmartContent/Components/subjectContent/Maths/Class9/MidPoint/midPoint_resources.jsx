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
          <a href="https://www.youtube.com/watch?v=ozb998JdeDI">
            www.youtube.com/watch
          </a>
        </p>
        <p>
          <a href="http://www.cliffsnotes.com/math/geometry/polygons/the-midpoint-theorem">
            www.cliffsnotes.com/math/geometry/polygons/the-midpoint-theorem
          </a>
        </p>
        <p>
          <a href="http://www.learnnext.com/lesson/CBSE-IX-Maths-Mid-Point-Theorem.htm">
            www.learnnext.com/lesson/CBSE-IX-Maths-Mid-Point-Theorem.htm
          </a>
        </p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Mid-point theorem. Retrieved 4 March 2021,
          from cdac.olabs.edu.in/?sub=80&brch=21&sim=181&cnt=4
        </Typography>
      </div>
    </div>
  );
}
