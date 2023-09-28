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
        <p>
          <strong>
            1. Preparation of Pure Sample of ferrous ammonium sulphate (Mohr’s
            salt):
          </strong>
        </p>

        <p>&nbsp;</p>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/Kqk7kC03ofw?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>2. Preparation of Pure Sample of Potash Alum:</strong>
        </p>

        <p>&nbsp;</p>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/bhoMvPJKc24?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>
            3. Preparation of Pure Sample of complex potassium trioxalatoferrate
            (III):
          </strong>
        </p>

        <p>&nbsp;</p>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/SilzJBCEins?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2015). Preparation of Inorganic Compounds.
            Retrieved 29 March 2021, from
            amrita.olabs.edu.in/?sub=73&brch=8&sim=114&cnt=676
          </Typography>
        </div>
      </div>
    </div>
  );
}
