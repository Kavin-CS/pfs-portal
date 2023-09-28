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
          <strong>1. Preparation of Lassaigne's Extract</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/foN9ibxBCYU?rel=0"
            width="640"
          />
        </p>

        

        <p>
          <strong>2. Detection of Sulphur</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/F8m3ti2FoAc?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>3. Detection of Halogens in an Organic Compound</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/lGcr_cUmzbY?rel=0"
            width="640"
          />
        </p>

        <p>
          <strong>4. Detection of Nitrogen in an Organic Compound</strong>
        </p>

        

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://youtube.com/embed/7vKQuWWgULw?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2015). Detection of Elements: Lassaigne's
            Test. Retrieved 30 March 2021, from
            amrita.olabs.edu.in/?sub=73&brch=7&sim=149&cnt=528
          </Typography>
        </div>
      </div>
    </div>
  );
}
