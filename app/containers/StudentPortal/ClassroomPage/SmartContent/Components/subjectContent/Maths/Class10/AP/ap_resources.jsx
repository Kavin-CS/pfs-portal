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
      <p>&nbsp;</p>
      <h2 className={classes.header}>References</h2>
      <p>
        <a href="http://en.wikipedia.org/wiki/Arithmetic_progression">
          en.wikipedia.org/wiki/Arithmetic_progression
        </a>
      </p>
      <p>
        <a href="http://www.mathsisfun.com/algebra/sequences-sums-arithmetic.html">
          www.mathsisfun.com/algebra/sequences-sums-arithmetic.html
        </a>
      </p>
      <p>
        <a href="http://www.mathcentre.ac.uk/resources/uploaded/mc-ty-apgp-2009-1.pdf">
          www.mathcentre.ac.uk/resources/uploaded/mc-ty-apgp-2009-1.pdf
        </a>
      </p>
      <p>
        <a href="http://www.mathportal.org/algebra/progressions/arithmetic-progressions.php">
          www.mathportal.org/algebra/progressions/arithmetic-progressions.php
        </a>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Arithmetic progression. Retrieved 7 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=167&cnt=6
        </Typography>
      </div>
    </div>
  );
}
