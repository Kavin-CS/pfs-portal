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

      <p>Laboratory Manual Biology for class XII - Published by NCERT.</p>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.conserve-energy-future.com/causes-effects-solutions-of-air-pollution.php"
            target="_blank"
          >
            http://www.conserve-energy-future.com/causes-effects-solutions-of-air-pollution.php
          </a>
        </li>
        <li>
          <a
            href="http://eschooltoday.com/pollution/air-pollution/what-is-air-pollution.html"
            target="_blank"
          >
            http://eschooltoday.com/pollution/air-pollution/what-is-air-pollution.html
          </a>
        </li>
        <li>
          <a
            href="http://www.greenfacts.org/en/particulate-matter-pm/level-3/01-presentation.htm"
            target="_blank"
          >
            http://www.greenfacts.org/en/particulate-matter-pm/level-3/01-presentation.htm
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Air_pollution" target="_blank">
            https://en.wikipedia.org/wiki/Air_pollution
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of pollutants in Air. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=18&sim=240&cnt=666
        </Typography>
      </div>
    </div>
  );
}
