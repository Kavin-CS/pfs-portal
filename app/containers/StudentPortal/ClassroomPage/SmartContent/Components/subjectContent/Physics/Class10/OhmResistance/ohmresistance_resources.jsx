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
      <h1 className={classes.headTag}>Books</h1>

      <ul>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - Published by
          NCERT
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a
            href="https://www.youtube.com/embed/4-GxinG7AVw?rel=0&amp;vq=hd1080"
            target="_blank"
          >
            https://www.youtube.com/embed/4-GxinG7AVw?rel=0&amp;vq=hd1080
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/embed/Ls5_PcXZRc8?rel=0&amp;vq=hd1080"
            target="_blank"
          >
            https://www.youtube.com/embed/Ls5_PcXZRc8?rel=0&amp;vq=hd1080
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Ohm's Law. Retrieved 25 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=4&sim=99&cnt=396
        </Typography>
      </div>
    </div>
  );
}
