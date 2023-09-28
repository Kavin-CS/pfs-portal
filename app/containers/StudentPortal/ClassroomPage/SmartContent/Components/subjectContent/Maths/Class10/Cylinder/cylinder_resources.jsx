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
        <a href="http://www.mathsisfun.com/geometry/cylinder.html">
          http://www.mathsisfun.com/geometry/cylinder.html
        </a>
      </p>

      <p>&nbsp;</p>

      <p>
        <a href="http://ncalculators.com/area-volume/cylinder-calculator.htm">
          http://ncalculators.com/area-volume/cylinder-calculator.htm
        </a>
      </p>

      <p>&nbsp;</p>

      <p>
        <a href="http://www.math.com/tables/geometry/surfareas.htm">
          http://www.math.com/tables/geometry/surfareas.htm
        </a>
      </p>

      <p>&nbsp;</p>

      <p>
        <a href="http://en.wikipedia.org/wiki/Cylinder_%28geometry%29">
          http://en.wikipedia.org/wiki/Cylinder_%28geometry%29
        </a>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Surface area of a cylinder. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=161&cnt=6
        </Typography>
      </div>
    </div>
  );
}
