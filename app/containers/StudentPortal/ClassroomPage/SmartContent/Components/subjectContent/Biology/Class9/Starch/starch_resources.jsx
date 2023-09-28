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
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a href="//www.youtube.com/watch?v=8sBx1syNTIQ" target="_blank">
            //www.youtube.com/watch?v=8sBx1syNTIQ
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=3o7_7Us9Pck" target="_blank">
            //www.youtube.com/watch?v=3o7_7Us9Pck
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=aOmLmauw2D8" target="_blank">
            //www.youtube.com/watch?v=aOmLmauw2D8
          </a>
        </li>
        <li>
          <a
            href="http://www.elmhurst.edu/~chm/vchembook/547starch.html"
            target="_blank"
          >
            http://www.elmhurst.edu/~chm/vchembook/547starch.html
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Starch in Food Samples.
          Retrieved 7 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=121&cnt=276
        </Typography>
      </div>
    </div>
  );
}
