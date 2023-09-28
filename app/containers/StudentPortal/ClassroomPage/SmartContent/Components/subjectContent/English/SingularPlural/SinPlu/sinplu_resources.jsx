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
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <big>
          <u>
            <strong>Books :</strong>
          </u>
        </big>
      </p>

      <ul>
        <li>Holy Faith Essential English Grammar - James Thomas</li>
        <li>Navneet English HL Grammar</li>
        <li>Formative Assessment - Class X</li>
        <li>High school English Grammar - Wren &amp; Martin’s</li>
      </ul>

      <p>
        <big>
          <u>
            <strong>Websites :</strong>
          </u>
        </big>
      </p>

      <ul>
        <li>
          <a href="http://Books :  Holy Faith Essential English Grammar - James Thomas Navneet English HL Grammar Formative Assessment - Class X High school English Grammar - Wren &amp; Martin’s   Websites :  https://en.wikipedia.org/wiki/Reading_comprehension http://learnenglishkids.britishcouncil.org/en/ http://www.talkenglish.com/ http://www.learnenglish.be/ http://www.englishpractice.com/ ">
            http://learnenglishkids.britishcouncil.org/en/
          </a>
        </li>
        <li>
          <a href="http://www.talkenglish.com/">http://www.talkenglish.com/</a>
        </li>
        <li>
          <a href="http://www.learnenglish.be/">http://www.learnenglish.be/</a>
        </li>
        <li>
          <a href="http://www.englishpractice.com/">
            http://www.englishpractice.com/
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Singular to Plural Conversion. Retrieved 9
          April 2021, from cdac.olabs.edu.in/?sub=84&brch=30&sim=232&cnt=654
        </Typography>
      </div>
    </div>
  );
}
