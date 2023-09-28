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
      <h1 className={classes.header}>Books:</h1>

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

      <h1 className={classes.header}>Website:</h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Melting_point">
            Melting Point - Wikipedia, the free encyclopedia
          </a>
        </li>
      </ul>

      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Melting Point of Ice. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=30&cnt=1
        </Typography>
      </div>
    </div>
  );
}
