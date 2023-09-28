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
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        Ohm's law theory and problems
        <a
          target="_blank"
          
          class="hoverclass"
          href="http://physics.tutorvista.com/electricity-and-magnetism/ohm-s-law.html"
        >
          <strong> </strong>
          <span>
            <strong>(Click here to read)</strong>
          </span>
        </a>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p align="center">
        <iframe
          src="https://www.youtube.com/watch?v=ryabAl20Bp0"
          allowfullscreen=""
          frameborder="0"
          height="315"
          width="420"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Verification of Ohm's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=75&cnt=6
        </Typography>
      </div>
    </div>
  );
}
