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
        <hr />
        <p>
          <a href="http://www.mathopenref.com/spherearea.html">
            http://www.mathopenref.com/spherearea.html
          </a>
        </p>

        <p>
          <a href="https://en.wikipedia.org/wiki/Sphere">
            https://en.wikipedia.org/wiki/Sphere
          </a>
        </p>

        <p>
          <a href="https://www.youtube.com/watch?v=6EzQEdBX_30">
            https://www.youtube.com/watch?v=6EzQEdBX_30
          </a>
        </p>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=2
        </Typography>
      </div>
    </div>
  );
}
