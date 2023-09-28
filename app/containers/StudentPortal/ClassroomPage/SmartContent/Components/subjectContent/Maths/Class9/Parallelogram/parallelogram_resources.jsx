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
        <a href="http://en.wikipedia.org/wiki/Parallelogram">
          en.wikipedia.org/wiki/Parallelogram
        </a>
      </p>
      <p>
        <a href="http://www.mathsisfun.com/area.html">
          www.mathsisfun.com/area.html
        </a>
      </p>
      <p>
        <a href="http://www.mathgoodies.com/lessons/vol1/area_parallelogram.html">
          www.mathgoodies.com/lessons/vol1/area_parallelogram.html
        </a>
      </p>
      <p>
        <a href="http://www.mathopenref.com/parallelogramarea.html">
          www.mathopenref.com/parallelogramarea.html
        </a>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Area of parallelogram. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=178&cnt=6
        </Typography>
      </div>
    </div>
  );
}
