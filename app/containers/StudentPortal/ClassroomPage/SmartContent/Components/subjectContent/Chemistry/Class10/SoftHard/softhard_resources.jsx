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
      <h1 className={classes.headTag}>&nbsp;&nbsp;Books:</h1>

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
            <a href="http://en.wikipedia.org/wiki/Hard_water">
              http://en.wikipedia.org/wiki/Hard_water
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="http://chemistry.about.com/cs/howthingswork/a/aa082403a.htm">
              http://chemistry.about.com/cs/howthingswork/a/aa082403a.htm
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="http://en.wikipedia.org/wiki/Soap">
              http://en.wikipedia.org/wiki/Soap
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="http://www.elmhurst.edu/%7Echm/vchembook/554soap.html">
              http://www.elmhurst.edu/~chm/vchembook/554soap.html
            </a>
          </span>
        </li>
        <li>
          <span lang="EN-US">
            <a href="http://www.cleaninginstitute.org/clean_living/soaps__detergents_products__ingredients.aspx">
              http://www.cleaninginstitute.org/clean_living/soaps__detergents_products__ingredients.aspx
            </a>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Cleaning Capacity of Soap with Hard and
          Soft Water. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=120&cnt=237
        </Typography>
      </div>
    </div>
  );
}
