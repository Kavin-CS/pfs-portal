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
    <div className={classes.animationWrap}>
      <div class="divContent">
        <h1 className={classes.headTag}>Books</h1>

        <ul>
          <li>
            &nbsp;Laboratory Manual Physics for class XII - Published by NCERT
          </li>
        </ul>

        <h1 className={classes.headTag}>Websites</h1>

        <ul>
          <li>
            <a
              href="http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20XII/12089-Physics%20Part-1/Chapter-3/index.html"
              target="_blank"
            >
              http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20XII/12089-Physics%20Part-1/Chapter-3/index.html
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/embed/CuDuFqdiFoM?rel=0&amp;vq=hd1080"
              target="_blank"
            >
              https://www.youtube.com/embed/CuDuFqdiFoM?rel=0&amp;vq=hd1080
            </a>
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=565
        </Typography>
      </div>
    </div>
  );
}
