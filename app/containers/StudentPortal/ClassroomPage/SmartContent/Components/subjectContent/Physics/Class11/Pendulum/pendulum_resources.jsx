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
      <h1 className={classes.headTag}>Books</h1>

      <ul>
        <li>Laboratory Manual Physics for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a
            href="http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20XI/11087Physics%20Part%20II/ch%2014/index.html"
            target="_blank"
          >
            http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20XI/11087Physics%20Part%20II/ch%2014/index.html
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Simple pendulum. Retrieved 23 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=159&cnt=401
        </Typography>
      </div>
    </div>
  );
}
