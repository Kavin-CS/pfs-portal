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
        <li>
          High School English Grammar and Composition by Wren &amp; Martin
        </li>
        <li>A Practical English Grammar by Thomson and Martinet.</li>
        <li>Navneet English Kumarbharati Grammar Std X.</li>
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
          <a href="http://esl.about.com/library/weekly/aa112601a.htm">
            http://esl.about.com/library/weekly/aa112601a.htm
          </a>
        </li>
        <li>
          <a href="http://www.chompchomp.com/terms/preposition.htm">
            http://www.chompchomp.com/terms/preposition.htm
          </a>
        </li>
        <li>
          <a href="http://www.englisch-hilfen.de/en/grammar/prepositions_place.htm">
            http://www.englisch-hilfen.de/en/grammar/prepositions_place.htm
          </a>
        </li>
        <li>
          <a href="http://www.grammarly.com/handbook/grammar/prepositions/5/prepositions-of-direction/">
            http://www.grammarly.com/handbook/grammar/prepositions/5/prepositions-of-direction/
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Learning Preposition of direction.
          Retrieved 9 April 2021, from
          cdac.olabs.edu.in/?sub=84&brch=26&sim=218&cnt=632
        </Typography>
      </div>
    </div>
  );
}
