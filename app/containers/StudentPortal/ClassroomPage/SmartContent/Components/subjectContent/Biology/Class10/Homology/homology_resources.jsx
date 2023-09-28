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
      <h1 className={classes.header}>Books</h1>

      <ul>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites</h1>

      <ul>
        <li>
          <a
            href="http://evolution.berkeley.edu/evolibrary/article/0_0_0/homology_01"
            target="_blank"
          >
            http://evolution.berkeley.edu/evolibrary/article/0_0_0/homology_01
          </a>
        </li>
        <li>
          <a
            href="http://evolution.berkeley.edu/evolibrary/article/0_0_0/analogy_01"
            target="_blank"
          >
            http://evolution.berkeley.edu/evolibrary/article/0_0_0/analogy_01
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Homology_%28biology%29"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Homology_%28biology%29
          </a>
        </li>
        <li>
          <a
            href="http://evolution.berkeley.edu/evolibrary/article/0_0_0/similarity_hs_01"
            target="_blank"
          >
            http://evolution.berkeley.edu/evolibrary/article/0_0_0/similarity_hs_01
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Homology and Analogy. Retrieved 6 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=132&cnt=282
        </Typography>
      </div>
    </div>
  );
}
