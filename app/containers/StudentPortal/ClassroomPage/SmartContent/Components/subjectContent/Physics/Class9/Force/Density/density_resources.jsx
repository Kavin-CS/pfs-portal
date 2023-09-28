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
      <h1 className={classes.headTag}>Books</h1>

      <ul>
        <li>
          &nbsp; Manual of Secondary Science Kit for Classes IX and X -
          Published by NCERT
        </li>
        <li>
          &nbsp;&nbsp;Science textbook for class IX – Published by National
          Council of Educational Research and Training, New Delhi
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <p>
            <a href="http://mhchem.org/151/classroom/pdf151/Density.pdf">
              DETERMINATION OF DENSITY OF LIQUIDS &amp; SOLIDS - mhchem.org
            </a>
          </p>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Determination of Density of Solid.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=2&cnt=120
        </Typography>
      </div>
    </div>
  );
}
