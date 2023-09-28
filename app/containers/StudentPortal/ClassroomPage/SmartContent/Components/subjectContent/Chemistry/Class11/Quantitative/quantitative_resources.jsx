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
        <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Titration" target="_blank">
            en.wikipedia.org/wiki/Titration
          </a>
        </li>
        <li>
          <a
            href="http://www.dartmouth.edu/~chemlab/techniques/titration.html"
            target="_blank"
          >
            www.dartmouth.edu/~chemlab/techniques/titration.html
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Equivalence_point"
            target="_blank"
          >
            en.wikipedia.org/wiki/Equivalence_point
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Standard_solution"
            target="_blank"
          >
            en.wikipedia.org/wiki/Standard_solution
          </a>
        </li>
        <li>
          <a
            href="http://www.chem.purdue.edu/gchelp/solutions/character.html"
            target="_blank"
          >
            www.chem.purdue.edu/gchelp/solutions/character.html
          </a>
        </li>
        <li>
          <a
            href="http://chem.wisc.edu/deptfiles/genchem/sstutorial/Text11/Tx113/tx113.html"
            target="_blank"
          >
            chem.wisc.edu/deptfiles/genchem/sstutorial/Text11/Tx113/tx113.html
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Acid%E2%80%93base_titration"
            target="_blank"
          >
            en.wikipedia.org/wiki/Acid%E2%80%93base_titration
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/PH_indicator" target="_blank">
            en.wikipedia.org/wiki/PH_indicator
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=_y0zpzFWdbg" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=13D0Occ6ulA" target="_blank">
            www.youtube.com/watch
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Quantitative Estimation. Retrieved 30
          March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=109&cnt=342
        </Typography>
      </div>
    </div>
  );
}
