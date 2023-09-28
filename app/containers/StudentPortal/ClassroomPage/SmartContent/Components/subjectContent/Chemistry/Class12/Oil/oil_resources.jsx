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
        <li>Laboratory Manual Chemistry for class XII - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.fssai.gov.in/Portals/0/Pdf/15Manuals/OILS%20AND%20FATS.pdf"
            target="_blank"
          >
            http://www.fssai.gov.in/Portals/0/Pdf/15Manuals/OILS%20AND%20FATS.pdf
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=yoM-9xx0QQA" target="_blank">
            https://www.youtube.com/watch?v=yoM-9xx0QQA
          </a>
        </li>
        <li>
          <a
            href="http://download.nos.org/313courseE/Experiment_11.PDF"
            target="_blank"
          >
            http://download.nos.org/313courseE/Experiment_11.PDF
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Qualitative Analysis of Oils and Fats.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=210&cnt=581
        </Typography>
      </div>
    </div>
  );
}
