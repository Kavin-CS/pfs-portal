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

      <p>Laboratory Manual Biology for class XII - Published by NCERT.</p>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a href="http://www.britannica.com/science/amylase" target="_blank">
            http://www.britannica.com/science/amylase
          </a>
        </li>
        <li>
          <a
            href="http://www.eng.umd.edu/~nsw/ench485/lab5.htm"
            target="_blank"
          >
            http://www.eng.umd.edu/~nsw/ench485/lab5.htm
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Amylase" target="_blank">
            https://en.wikipedia.org/wiki/Amylase
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Action of Salivary Amylase on Starch.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=236&cnt=660
        </Typography>
      </div>
    </div>
  );
}
