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
        <h1 className={classes.header}>Books:</h1>

        <ul>
          <li>
            &nbsp;Laboratory Manual Biology for class XI - Published by NCERT
          </li>
        </ul>

        <h1 className={classes.header}>Websites:</h1>

        <ul>
          <li>
            <a href="http://en.wikipedia.org/wiki/Osmosis" target="_blank">
              en.wikipedia.org/wiki/Osmosis
            </a>
          </li>
          <li>
            <a
              href="http://hyperphysics.phy-astr.gsu.edu/hbase/kinetic/diffus.html"
              target="_blank"
            >
              hyperphysics.phy-astr.gsu.edu/hbase/kinetic/diffus.html
            </a>
          </li>
          <li>
            <a
              href="http://highered.mcgraw-hill.com/sites/0072495855/student_view0/chapter2/animation__how_osmosis_works.html"
              target="_blank"
            >
              highered.mcgraw-hill.com/sites/0072495855/student_view0/chapter2/animation__how_osmosis_works.html
            </a>
          </li>
          <li>
            <a
              href="http://www.infoplease.com/encyclopedia/science/osmosis-biological-importance-osmosis.html"
              target="_blank"
            >
              www.infoplease.com/encyclopedia/science/osmosis-biological-importance-osmosis.html
            </a>
          </li>
          <li>
            <a
              href="http://www.buzzle.com/articles/importance-of-osmosis-in-living-organisms.html"
              target="_blank"
            >
              www.buzzle.com/articles/importance-of-osmosis-in-living-organisms.htm
            </a>
            l
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2014). Study of Osmosis. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=182&cnt=2
        </Typography>
      </div>
    </div>
  );
}
