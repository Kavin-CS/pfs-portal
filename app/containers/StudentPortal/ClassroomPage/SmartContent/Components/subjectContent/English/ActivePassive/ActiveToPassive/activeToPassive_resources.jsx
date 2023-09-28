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
      <div class="divContent">
        <p>
          <u>
            <strong>Books :</strong>
          </u>
        </p>

        <ul>
          <li>Holy Faith Essential English Grammar - James Thomas</li>
          <li>Total English</li>
          <li>Formative Assessment - Class X</li>
          <li>High school English Grammar - Wren &amp; Martin’s</li>
          <li>Practical English Grammar &nbsp;- Thomson &amp; Martinet</li>
        </ul>

        <p>
          <u>
            <strong>Websites :</strong>
          </u>
        </p>

        <ul>
          <li>
            <a href="http://learnenglishkids.britishcouncil.org/en/">
              http://learnenglishkids.britishcouncil.org/en/
            </a>
          </li>
          <li>
            <a href="http://www.learnenglish.be/">
              http://www.learnenglish.be/
            </a>
          </li>
          <li>
            <a href="http://www.englishpractice.com/">
              http://www.englishpractice.com/
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Active to Passive Voice Conversion.
          Retrieved 9 March 2021, from
          cdac.olabs.edu.in/?sub=84&brch=23&sim=186&cnt=1
        </Typography>
      </div>
    </div>
  );
}
