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
        <u>
          <big>
            <strong>Books :</strong>
          </big>
        </u>
      </p>

      <p>High School English Grammar and Composition by Wren &amp; Martin</p>

      <p>A Practical English Grammar by Thomson and Martinet.</p>

      <p>Navneet English Kumarbharati Grammar Std X.</p>

      <p>&nbsp;</p>

      <p dir="ltr">
        <u>
          <big>
            <strong id="docs-internal-guid-011fb8c8-8d24-895f-ad69-0b3bec250f29">
              Websites :
            </strong>
          </big>
        </u>
      </p>

      <p dir="ltr">
        <strong id="docs-internal-guid-011fb8c8-8d24-895f-ad69-0b3bec250f29">
          <a href="http://esl.about.com/library/weekly/aa112601a.htm">
            http://esl.about.com/library/weekly/aa112601a.htm
          </a>{' '}
        </strong>
      </p>

      <p dir="ltr">
        <strong id="docs-internal-guid-011fb8c8-8d24-895f-ad69-0b3bec250f29">
          <a href="http://www.chompchomp.com/terms/preposition.htm">
            http://www.chompchomp.com/terms/preposition.htm
          </a>
        </strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Learning Prepositions of Location-Picture
          Dictation. Retrieved 9 April 2021, from
          cdac.olabs.edu.in/?sub=84&brch=22&sim=194&cnt=630
        </Typography>
      </div>
    </div>
  );
}
