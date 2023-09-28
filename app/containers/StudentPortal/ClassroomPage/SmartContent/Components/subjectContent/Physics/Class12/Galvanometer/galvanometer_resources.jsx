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
        <li>
          <p>
            &nbsp;Laboratory Manual Physics for class XII - Published by NCERT
          </p>
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a
            href="https://www.youtube.com/embed/iLigd1Jwa44?rel=0&amp;vq=hd1080"
            target="_blank"
          >
            https://www.youtube.com/embed/iLigd1Jwa44?rel=0&amp;vq=hd1080
          </a>
        </li>
      </ul>

    

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Figure of Merit of a galvanometer.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=152&cnt=566
        </Typography>
      </div>

      <ul />
    </div>
  );
}
