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
        <a href="http://www.mathopenref.com/conevolume.html">
          http://www.mathopenref.com/conevolume.html
        </a>
      </p>

      <p>
        <a href="http://www.mathwarehouse.com/solid-geometry/cone/formula-volume-of-cone.php">
          http://www.mathwarehouse.com/solid-geometry/cone/formula-volume-of-cone.php
        </a>
      </p>

      <p>
        <a href="https://www.khanacademy.org/math/basic-geo/basic-geo-volume-surface-area/basic-geo-volumes/v/volume-cone-example">
          https://www.khanacademy.org/math/basic-geo/basic-geo-volume-surface-area/basic-geo-volumes/v/volume-cone-example
        </a>
      </p>

      <p>
        <strong>lab manual of cbse class 10</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Volume of right circular cone. Retrieved 7
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=164&cnt=6
        </Typography>
      </div>
    </div>
  );
}
