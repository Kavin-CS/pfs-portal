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
      <h1 className={classes.header}>&nbsp; Books:</h1>
      <ul>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>
      <h1 className={classes.header}>&nbsp;&nbsp;Websites:</h1>
      <ul>
        <li>
          <a
            href="http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20X/1064Science/CHAP%201/index.html"
            target="_blank"
          >
            http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20X/1064Science/CHAP%201/index.html
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Single Displacement Reaction. Retrieved
          3 March 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=81&cnt=108
        </Typography>
      </div>
    </div>
  );
}
