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
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Video() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div className={classes.animationWrap}>
        <h2 className={classes.header}>1. Tests for Aldehyde</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/X7ZJqLEhX9k?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>2. Tests for Carboxylic Acids</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/E2xNpSj_A4U?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>3. Tests for Phenols</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/HSGlfbV7W84?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>4. Tests for Ketones</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/JAQ060bSZG8?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>5. Tests for Alcohols</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/xotWCss9bVI?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>6. Tests for Unsaturation</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/E2Tqv1DnwHg?rel=0"
            width="640"
          />
        </p>

        <h2 className={classes.header}>7. Tests for Amines</h2>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/j5jgMUWri8U?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2016). Tests for the functional groups.
            Retrieved 29 March 2021, from
            amrita.olabs.edu.in/?sub=73&brch=8&sim=141&cnt=715
          </Typography>
        </div>
      </div>
    </div>
  );
}
