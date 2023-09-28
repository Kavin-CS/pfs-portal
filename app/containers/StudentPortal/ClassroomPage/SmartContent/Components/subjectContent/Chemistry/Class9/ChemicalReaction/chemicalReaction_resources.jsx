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

      <ul>
        <li>
          Science text book for class IX – Published by National Council of
          Educational Research and Training, New Delhi 110 016
        </li>
        <li>Comprehensive Practical Science for Class IX</li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          &nbsp;
          <a href="http://en.wikipedia.org/wiki/Chemical_change">
            Chemical Change - Wikipedia, the free encyclopedia
          </a>
        </li>
        <li>
          &nbsp;
          <a href="http://en.wikipedia.org/wiki/Copper%28II%29_sulfate">
            Copper(II) sulfate - Wikipedia, the free encyclopedia
          </a>
        </li>
        <li>
          &nbsp;
          <a href="//www.youtube.com/watch?v=ny0FG2FMSXQ">
            Magnesium Burning in Air - YouTube
          </a>
        </li>
      </ul>

     
      <p>&nbsp;</p>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Chemical Reactions. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=77&cnt=223
        </Typography>
      </div>
    </div>
  );
}
