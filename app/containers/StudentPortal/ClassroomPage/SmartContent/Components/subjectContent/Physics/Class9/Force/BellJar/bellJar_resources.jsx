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
            &nbsp;Manual of Secondary Science Kit for Classes IX and X -
            Published by NCERT
          </li>
        </ul>

        <h1 className={classes.headTag}>Websites</h1>

        <ul>
          <li>
            <a
              href="http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20IX/0964-Science/CHAP%2012/index.html"
              target="_blank"
            >
              http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20IX/0964-Science/CHAP%2012/index.html
            </a>
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Bell Jar Experiment. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=83&cnt=142
        </Typography>
      </div>
    </div>
  );
}
