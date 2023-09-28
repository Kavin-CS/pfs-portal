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

      <ul>
        <li>Laboratory Manual Chemistry for class XII - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://epathshala.nic.in/wp-content/doc/book/l/sample/basic/index.php?tra=kech212"
            target="_blank"
          >
            http://epathshala.nic.in/wp-content/doc/book/l/sample/basic/index.php?tra=kech212
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Paper Chromatography. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=133&cnt=378
        </Typography>
      </div>
    </div>
  );
}
