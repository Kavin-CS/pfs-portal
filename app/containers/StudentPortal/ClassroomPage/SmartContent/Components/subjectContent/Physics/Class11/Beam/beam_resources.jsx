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
            href="http://dictionary.cambridge.org/dictionary/british/beam-balance"
            target="_blank"
          >
            http://dictionary.cambridge.org/dictionary/british/beam-balance
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Weighing_scale" target="_blank">
            http://en.wikipedia.org/wiki/Weighing_scale
          </a>
        </li>
        <li>
          <a
            href="http://www.ask.com/question/what-is-a-beam-balance-used-for"
            target="_blank"
          >
            http://www.ask.com/question/what-is-a-beam-balance-used-for
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Beam Balance. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=185&cnt=414
        </Typography>
      </div>
    </div>
  );
}
