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
        <strong>References:</strong>
      </p>

      <p>
        <a href="http://www.tutorvista.com/">http://www.tutorvista.com/</a>
      </p>

      <p>
        <a href="http://en.wikipedia.org/wiki/Prime_factor">
          http://en.wikipedia.org/wiki/Prime_factor
        </a>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Least common multiple. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=29&sim=223&cnt=6
        </Typography>
      </div>
    </div>
  );
}
