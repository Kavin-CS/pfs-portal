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
      <div class="divContent">
        <h1 className={classes.headTag}>Books:</h1>

        <ul>
          <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
        </ul>

        <h1 className={classes.headTag}>Websites:</h1>

        <ul>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/Melting_point"
              target="_blank"
            >
              en.wikipedia.org/wiki/Melting_point
            </a>
          </li>
          <li>
            <a
              href="http://chemed.chem.purdue.edu/genchem/topicreview/bp/ch14/melting.php"
              target="_blank"
            >
              chemed.chem.purdue.edu/genchem/topicreview/bp/ch14/melting.php
            </a>
          </li>
          <li>
            <a
              href="http://www.brynmawr.edu/chemistry/Chem/mnerzsto/Labs/Forces_and_Factors.pdf"
              target="_blank"
            >
              www.brynmawr.edu/chemistry/Chem/mnerzsto/Labs/Forces_and_Factors.pdf
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=71CzAvWTOmk"
              target="_blank"
            >
              www.youtube.com/watch
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=9aQio1KQKrs"
              target="_blank"
            >
              www.youtube.com/watch
            </a>
          </li>
          <li>
            <a href="//www.youtube.com/watch?v=T3HzRPKj1YE" target="_blank">
              www.youtube.com/watch
            </a>
            <br />
            &nbsp;
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Melting Point of an Organic Compound..
          Retrieved 2 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=33&cnt=341
        </Typography>
      </div>
    </div>
  );
}
