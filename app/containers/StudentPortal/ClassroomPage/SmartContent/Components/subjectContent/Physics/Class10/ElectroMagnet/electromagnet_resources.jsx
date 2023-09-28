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
      <ul>
        <li>
          <a
            href="http://www.electronics-tutorials.ws/electromagnetism/electromagnetic-induction.html"
            
          >
            http://www.electronics-tutorials.ws/electromagnetism/electromagnetic-induction.html
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=tC6E9J925pY">
            https://www.youtube.com/watch?v=tC6E9J925pY
          </a>
        </li>
      </ul>

      <p>&nbsp;</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2016). Electromagnetic Induction. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=242&cnt=6
        </Typography>
      </div>
    </div>
  );
}
