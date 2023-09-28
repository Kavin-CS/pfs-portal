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
        <li>
          &nbsp;&nbsp;Laboratory Manual Physics for class XII - Published by
          NCERT
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a href="https://en.wikipedia.org/wiki/Sonometer" target="_blank">
            https://en.wikipedia.org/wiki/Sonometer
          </a>
        </li>
        <li>
          <a
            href="http://www.indiastudychannel.com/resources/141412-How-to-measure-the-AC-source-frequency-using-sonometer-and-electromagnet.aspx"
            target="_blank"
          >
            http://www.indiastudychannel.com/resources/141412-How-to-measure-the-AC-source-frequency-using-sonometer-and-electromagnet.aspx
          </a>
        </li>
        <li>
          <a
            href="http://www.schoolphysics.co.uk/age16-19/Sound/text/Sonometer_/index.html"
            target="_blank"
          >
            http://www.schoolphysics.co.uk/age16-19/Sound/text/Sonometer_/index.html
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=F6SlpU0XkPo" target="_blank">
            https://www.youtube.com/watch?v=F6SlpU0XkPo
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=F0LosOk3a1g" target="_blank">
            https://www.youtube.com/watch?v=F0LosOk3a1g
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). AC Sonometer. Retrieved 19 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=6&sim=151&cnt=696
        </Typography>
      </div>
    </div>
  );
}
