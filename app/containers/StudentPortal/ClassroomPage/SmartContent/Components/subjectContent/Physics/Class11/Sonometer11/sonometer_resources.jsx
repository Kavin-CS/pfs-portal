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
        <li>Physics Part II Textbook for class XI by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a href="http://www.hzsd.ca/c%26i/CorrespondenceCourses/Correspondence/Phsyics%2020/Lesson%2015.pdf">
            http://www.hzsd.ca/c%26i/CorrespondenceCourses/Correspondence/Phsyics%2020/Lesson%2015.pdf
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Sonometer">
            http://en.wikipedia.org/wiki/Sonometer
          </a>
        </li>
        <li>
          <a href="http://www.schoolphysics.co.uk/age16-19/Sound/text/Vibrating_strings/index.html">
            http://www.schoolphysics.co.uk/age16-19/Sound/text/Vibrating_strings/index.html
          </a>
        </li>
        <li>
          <a href="http://www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm1=7-14">
            http://www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm1=7-14
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Sonometer. Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=227&cnt=546
        </Typography>
      </div>
    </div>
  );
}
