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
      <h1 className={classes.headTag}>Books:</h1>

      <ul>
        <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Qualitative_inorganic_analysis"
            target="_blank"
          >
            en.wikipedia.org/wiki/Qualitative_inorganic_analysis
          </a>
        </li>
        <li>
          <a
            href="http://www.dartmouth.edu/~chemlab/chem3-5/qual_cat/full_text/procedure.html#top"
            target="_blank"
          >
            www.dartmouth.edu/~chemlab/chem3-5/qual_cat/full_text/procedure.html#top
          </a>
        </li>
        <li>
          <a
            href="http://www.docbrown.info/page13/ChemicalTests/ChemicalTestsc.htm"
            target="_blank"
          >
            www.docbrown.info/page13/ChemicalTests/ChemicalTestsc.htm
          </a>
        </li>
        <li>
          <a
            href="http://www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm2=7-8"
            target="_blank"
          >
            www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm2=7-8
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=CxRQnCkSxVY" target="_blank">
            www.youtube.com/watch?v=CxRQnCkSxVY
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=8xvI0FMh8gA" target="_blank">
            www.youtube.com/watch?v=8xvI0FMh8gA
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=o-VMpNrp7PM" target="_blank">
            www.youtube.com/watch?v=o-VMpNrp7PM
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=NEUbBAGw14k" target="_blank">
            www.youtube.com/watch?v=NEUbBAGw14k
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=1EXr_L7Ojqg" target="_blank">
            www.youtube.com/watch?v=1EXr_L7Ojqg
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=pZLvihtzaKA" target="_blank">
            www.youtube.com/watch?v=pZLvihtzaKA
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=f-Db2dkT0XY" target="_blank">
            www.youtube.com/watch?v=f-Db2dkT0XY
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dmp3AnJBVyc" target="_blank">
            www.youtube.com/watch?v=dmp3AnJBVyc
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Qualitative Analysis of Cations.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=180&cnt=422
        </Typography>
      </div>
    </div>
  );
}
