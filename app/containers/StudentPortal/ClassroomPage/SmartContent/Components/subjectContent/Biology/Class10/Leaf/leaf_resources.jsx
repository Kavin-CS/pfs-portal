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
      <p>&nbsp;</p>

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
          <a href="//www.youtube.com/watch?v=NyIWaTz08Zw" target="_blank">
            //www.youtube.com/watch?v=NyIWaTz08Zw
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Stoma" target="_blank">
            http://en.wikipedia.org/wiki/Stoma
          </a>
        </li>
        <li>
          <a
            href="http://evolution.berkeley.edu/evolibrary/article/mcelwain_03"
            target="_blank"
          >
            http://evolution.berkeley.edu/evolibrary/article/mcelwain_03
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Demonstration of Stomata on a Leaf Peel.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=137&cnt=280
        </Typography>
      </div>
    </div>
  );
}
