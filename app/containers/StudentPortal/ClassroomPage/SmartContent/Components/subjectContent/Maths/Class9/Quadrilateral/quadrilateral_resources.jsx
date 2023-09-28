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
        <a href="http://math.stackexchange.com/questions/607177/prove-that-the-quadrilateral-formed-by-connecting-the-midpoints-of-a-quadrilater">
          http://math.stackexchange.com/questions/607177/prove-that-the-quadrilateral-formed-by-connecting-the-midpoints-of-a-quadrilater
        </a>
      </p>

      <p>
        <a href="http://proofsfromthebook.com/2013/03/28/midpoints-of-quadrilateral/">
          http://proofsfromthebook.com/2013/03/28/midpoints-of-quadrilateral/
        </a>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). The quadrilateral formed by the mid-points
          of a quadrilateral. Retrieved 8 April 2021, from
          cdac.olabs.edu.in/?sub=80&brch=21&sim=203&cnt=6
        </Typography>
      </div>
    </div>
  );
}
