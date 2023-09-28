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
        <a href="http://www.mathopenref.com/triangleincenter.html">
          http://www.mathopenref.com/triangleincenter.html
        </a>
      </p>

      <p>
        <a href="https://en.wikipedia.org/wiki/Incenter">
          https://en.wikipedia.org/wiki/Incenter
        </a>
      </p>

      <p>
        <a href="http://math.tutorvista.com/geometry/incenter.html">
          http://math.tutorvista.com/geometry/incenter.html
        </a>
      </p>

      <p>
        <strong>lab manual of cbse class 9</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Incentre of a triangle. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=202&cnt=6
        </Typography>
      </div>
    </div>
  );
}
