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
          <big>
            <u>
              <strong>Books :</strong>
            </u>
          </big>
        </p>

        <ul>
          <li>Grammar magic 8</li>
          <li>Total English by Xavier Pinto and P.Pinto</li>
          <li>Formative Assessment - Class X - CBSE Board</li>
        </ul>

        <p>&nbsp;</p>

        <p>
          <big>
            <u>
              <strong>Websites :</strong>
            </u>
          </big>
        </p>

        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Reading_comprehension">
              https://en.wikipedia.org/wiki/Reading_comprehension
            </a>
          </li>
          <li>
            <a href="http://www.readingrockets.org/article/seven-strategies-teach-students-text-comprehension">
              http://www.readingrockets.org/article/seven-strategies-teach-students-text-comprehension&nbsp;&nbsp;
              &nbsp;
            </a>
          </li>
          <li>
            <a href="http://www.colorincolorado.org/article/14342/">
              http://www.colorincolorado.org/article/14342/
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Improving Comprehension Skills. Retrieved
          9 March 2021, from cdac.olabs.edu.in/?sub=84&brch=25&sim=187&cnt=1
        </Typography>
      </div>
    </div>
  );
}
