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
          &nbsp;Laboratory Manual Physics for class XII - Published by NCERT
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Refractive_index"
            target="_blank"
          >
            https://en.wikipedia.org/wiki/Refractive_index
          </a>
        </li>
        <li>
          <a
            href="http://www.one-school.net/Malaysia/UniversityandCollege/SPM/revisioncard/physics/light/refraction.html"
            target="_blank"
          >
            http://www.one-school.net/Malaysia/UniversityandCollege/SPM/revisioncard/physics/light/refraction.html
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=bnDDPE_Lzb4" target="_blank">
            https://www.youtube.com/watch?v=bnDDPE_Lzb4
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Refractive Index of a Liquid. Retrieved
          22 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=247&cnt=713
        </Typography>
      </div>
    </div>
  );
}
