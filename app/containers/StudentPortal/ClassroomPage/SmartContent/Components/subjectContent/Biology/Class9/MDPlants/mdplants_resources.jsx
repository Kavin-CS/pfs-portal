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
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://lifeofplant.blogspot.in/2011/03/monocots-vs-dicots.html"
            target="_blank"
          >
            http://lifeofplant.blogspot.in/2011/03/monocots-vs-dicots.html
          </a>
        </li>
        <li>
          <a
            href="http://www.diffen.com/difference/Dicot_vs_Monocot"
            target="_blank"
          >
            http://www.diffen.com/difference/Dicot_vs_Monocot
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=JeSwjNg7VwU" target="_blank">
            https://www.youtube.com/watch?v=JeSwjNg7VwU
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Monocot and Dicot Plants. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=139&cnt=271
        </Typography>
      </div>
    </div>
  );
}
