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
      <p>
        <a href="http://www.mathopenref.com/spherevolume.html">
          http://www.mathopenref.com/spherevolume.html
        </a>
      </p>

      <p>
        <a href="https://www.khanacademy.org/math/basic-geo/basic-geo-volume-surface-area/basic-geo-volumes/v/volume-of-a-sphere">
          https://www.khanacademy.org/math/basic-geo/basic-geo-volume-surface-area/basic-geo-volumes/v/volume-of-a-sphere
        </a>
      </p>

      <p>
        <a href="https://en.wikipedia.org/wiki/Sphere">
          https://en.wikipedia.org/wiki/Sphere
        </a>
      </p>

      <p>
        <strong>lab manual of cbse class 10</strong>
      </p>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Volume of a sphere. Retrieved 28 February
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=165&cnt=1
        </Typography>
      </div>
    </div>
  );
}
