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

  headTag: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <div class="divContent">
        <h1 className={classes.headTag}>Books</h1>

        <ul>
          <li>
            Manual of Secondary Science Kit for Classes IX and X - Published by
            NCERT
          </li>
        </ul>

        <h1 className={classes.headTag}>Websites</h1>

        <ul>
          <li>
            <a
              href="http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20X/1064Science/CHAP%2012/index.html"
              target="_blank"
            >
              http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20X/1064Science/CHAP%2012/index.html
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Equivalent Resistance of Resistors
          (Series). Retrieved 3 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=40&cnt=122
        </Typography>
      </div>
    </div>
  );
}
