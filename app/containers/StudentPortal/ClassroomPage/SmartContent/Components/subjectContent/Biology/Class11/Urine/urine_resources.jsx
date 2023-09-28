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
        <li>Laboratory Manual Biology for class XI - Published by NCERT.</li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.healthgrades.com/symptoms/sugar-in-urine"
            target="_blank"
          >
            http://www.healthgrades.com/symptoms/sugar-in-urine
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Glycosuria" target="_blank">
            http://en.wikipedia.org/wiki/Glycosuria
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Benedict%27s_reagent"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Benedict%27s_reagent
          </a>
        </li>
        <li>
          <a
            href="http://www.aboutdiabetesinformation.com/diabetesurinetest-benedicts-test.php"
            target="_blank"
          >
            http://www.aboutdiabetesinformation.com/diabetesurinetest-benedicts-test.php
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Fehling%27s_solution"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Fehling%27s_solution
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Sugar in Urine. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=207&cnt=462
        </Typography>
      </div>
    </div>
  );
}
