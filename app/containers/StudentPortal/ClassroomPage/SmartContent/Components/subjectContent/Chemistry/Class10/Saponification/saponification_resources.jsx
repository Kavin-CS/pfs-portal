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
    <div class="divContent">
      <p>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      </p>
      <title />
      <h1 className={classes.headTag}>&nbsp; Books:</h1>

      <ul>
        <li>
          SCIENCE TEXTBOOK FOR CLASS X - Published by National Council of
          Educational Research and Training&nbsp;
        </li>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.headTag}>&nbsp;&nbsp;Websites:</h1>

      <ul>
        <li>
          <span lang="EN-US">
            <a href="http://en.wikipedia.org/wiki/Saponification">
              http://en.wikipedia.org/wiki/Saponification
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="http://chemistry.about.com/library/weekly/blsapon.htm">
              http://chemistry.about.com/library/weekly/blsapon.htm
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="http://www.metaphysicalfarms.com/archives/18-Saponification-of-Oils-into-Soap.html">
              http://www.metaphysicalfarms.com/archives/18-Saponification-of-Oils-into-Soap.html
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="http://www.countryfarm-lifestyles.com/saponification-chart.html">
              http://www.countryfarm-lifestyles.com/saponification-chart.html
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="//www.youtube.com/watch?v=ta9h9S1JoI8">
              //www.youtube.com/watch?v=ta9h9S1JoI8
            </a>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Saponification-The process of Making
          Soap. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=119&cnt=238
        </Typography>
      </div>
    </div>
  );
}
