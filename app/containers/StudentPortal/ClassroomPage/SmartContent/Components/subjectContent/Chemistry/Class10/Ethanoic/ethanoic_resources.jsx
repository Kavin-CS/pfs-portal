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
      <h1>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </h1>
      <title />
      <h1 className={classes.headTag}>Books:</h1>

      <ul>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.headTag}>Website:</h1>

      <ul>
        <li>
          <a
            href="http://epathshala.nic.in/wp-content/doc/book/l/sample/basic/index.php?tra=jesc104"
            target="_blank"
          >
            http://epathshala.nic.in/wp-content/doc/book/l/sample/basic/index.php?tra=jesc104
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/embed/di4pMJciJ_Y?rel=0&amp;vq=hd1080"
            target="_blank"
          >
            https://www.youtube.com/embed/di4pMJciJ_Y?rel=0&amp;vq=hd1080
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Properties of Acetic Acid (Ethanoic
          Acid). Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=11&cnt=114
        </Typography>
      </div>
    </div>
  );
}
