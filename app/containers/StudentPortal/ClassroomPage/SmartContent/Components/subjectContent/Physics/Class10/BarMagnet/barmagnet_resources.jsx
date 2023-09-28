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
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <strong>Some useful resources online:</strong>
      </p>

      <ol>
        <li>
          <a href="//www.youtube.com/watch?feature=player_embedded&amp;v=8Y4JSp5U82I">
            Video Lecture
          </a>{' '}
          - (Khan's Academy)
        </li>
        <li>
          <a href="http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/elemag.html">
            Bar Magnet{' '}
          </a>
          - Theory
        </li>
        <li>
          <a href="https://www.miniphysics.com/properties-of-magnets.html">
            Properties of bar magnet
          </a>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study the field lines formed around a
          bar magnet. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=74&cnt=6
        </Typography>
      </div>
    </div>
  );
}
