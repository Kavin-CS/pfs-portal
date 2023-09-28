import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import mistakeImage from '../../../../../../../../../assets/Images/Subjects/English/common-mistake.jpg';
const useStyles = makeStyles(theme => ({
  animationWrap: {
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Resource() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <div class="divContent">
        <p>
          <strong>Books:</strong>
        </p>

        <ul>
          <li>High school English Grammar - Wren &amp; Martin’s</li>
          <li>Practical English Grammar &nbsp;- Thomson &amp; Martinet</li>
          <li>Formative Assessment (CBSE) - Class X</li>
        </ul>

        <p>
          <strong>Websites:</strong>
        </p>

        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Indirect_speech">
              http://www.perfect-english-grammar.com/reported-speech.html
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Indirect_speech">
              https://en.wikipedia.org/wiki/Indirect_speech
            </a>
          </li>
          <li>
            <a href="http://examtimequiz.com/">http://examtimequiz.com/</a>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Direct and Indirect Speech. Retrieved 9
          March 2021, from cdac.olabs.edu.in/?sub=84&brch=26&sim=196&cnt=499
        </Typography>
      </div>
    </div>
  );
}
