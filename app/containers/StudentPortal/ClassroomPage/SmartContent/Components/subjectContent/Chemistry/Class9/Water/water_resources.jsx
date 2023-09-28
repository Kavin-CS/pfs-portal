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
      <h1 className={classes.header}>Books:</h1>

      <p>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      </p>
      <title />
      <ul>
        <li>
          Science text book for class IX – Published by National Council of
          Educational Research and Training, New Delhi&nbsp;
        </li>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Boiling_point">
            Boiling Point - Wikipedia, the free encyclopedia
          </a>
        </li>
        <li>
          <a href="http://www.differencebetween.net/science/difference-between-evaporation-and-boiling/">
            Difference Between Evaporation and Boiling -
            http://www.differencebetween.net
          </a>
        </li>
        <li>
          <a href="http://www.differencebetween.com/difference-between-evaporation-and-boiling/">
            Evaporation vs Boiling - http://www.differencebetween.com
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Boiling Point of Water. Retrieved 3
          April 2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=29&cnt=107
        </Typography>
      </div>
    </div>
  );
}
