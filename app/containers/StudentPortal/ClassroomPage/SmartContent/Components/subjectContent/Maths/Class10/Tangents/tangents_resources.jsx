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
        <a href="http://www.mathopenref.com/consttangents.html">
          www.mathopenref.com/consttangents.html
        </a>
      </p>

      <p>
        <a href="http://en.wikipedia.org/wiki/Tangent_lines_to_circles">
          en.wikipedia.org/wiki/Tangent_lines_to_circles
        </a>
      </p>

      <p>
        <strong>lab manual of cbse class 10</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Tangents drawn from an external point.
          Retrieved 7 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=20&sim=171&cnt=6
        </Typography>
      </div>
    </div>
  );
}
