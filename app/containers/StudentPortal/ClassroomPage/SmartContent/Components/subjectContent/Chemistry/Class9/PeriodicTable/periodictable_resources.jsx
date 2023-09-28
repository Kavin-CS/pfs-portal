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
      <ul>
        <li>
          <a href="http://chemistry.about.com/library/blperiodictable.htm">
            http://chemistry.about.com/library/blperiodictable.htm
          </a>
        </li>
        <li>
          <a href="http://www.webelements.com/">http://www.webelements.com/</a>
        </li>
        <li>
          <a href="http://www.ptable.com/">http://www.ptable.com/</a>
        </li>
        <li>
          <a href="http://profmokeur.ca/chemistry/">
            http://profmokeur.ca/chemistry/
          </a>
        </li>
        <li>
          <a href="http://www.lenntech.com/periodic/periodic-chart.htm">
            http://www.lenntech.com/periodic/periodic-chart.htm
          </a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Periodic_table"
            lineHeight="1.6;"
            target="blank"
          >
            https://en.wikipedia.org/wiki/Periodic_table
          </a>
        </li>
      </ul>

      <p align="center">
        <iframe
          allowfullscreen=""
          frameborder="0"
          height="315"
          src="https://www.youtube.com/embed/Xb9oI9qLCMc"
          width="420"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Modern periodic table. Retrieved 3 April
          2021, from cdac.olabs.edu.in/?sub=75&brch=12&sim=94&cnt=6
        </Typography>
      </div>
    </div>
  );
}
