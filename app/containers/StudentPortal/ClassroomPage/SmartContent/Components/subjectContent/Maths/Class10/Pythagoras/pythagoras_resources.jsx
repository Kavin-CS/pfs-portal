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
        <a href="http://en.wikipedia.org/wiki/Pythagorean_theorem">
          en.wikipedia.org/wiki/Pythagorean_theorem
        </a>
      </p>

      <p>
        <a href="http://www.mathsisfun.com/pythagoras.html">
          www.mathsisfun.com/pythagoras.html
        </a>
      </p>

      <p>
        <a href="http://www.mathwarehouse.com/.../how-to-use-the-pythagorean-theorem.php">
          www.mathwarehouse.com/.../how-to-use-the-pythagorean-theorem.php
        </a>
      </p>

      <p>
        <a href="http://www.cimt.plymouth.ac.uk/projects/mepres/book8/bk8_3.pd">
          www.cimt.plymouth.ac.uk/projects/mepres/book8/bk8_3.pd
        </a>
      </p>

      <p>
        <strong>lab manual of cbse class 10</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Pythagoras theorem. Retrieved 7 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=158&cnt=6
        </Typography>
      </div>
    </div>
  );
}
