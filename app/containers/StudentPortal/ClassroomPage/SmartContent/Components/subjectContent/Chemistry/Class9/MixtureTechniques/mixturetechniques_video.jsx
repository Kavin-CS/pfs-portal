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
          <b>1.Simple Distillation</b>
        </p>

        <p textAlign="center;">
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://www.youtube.com/embed/2XBrj-ZEnEo?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>2.Fractional Distillation</b>
        </p>

        <p textAlign="center;">
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://www.youtube.com/embed/Ag9Dym0Fwd0?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>3.Centrifugation</b>
        </p>

        <p textAlign="center;">
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://www.youtube.com/embed/ncr-9iMEzwU?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>4.Chromatography</b>
        </p>

        <p textAlign="center;">
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://www.youtube.com/embed/yosecfE98Ok?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>5.Separating Funnel</b>
        </p>

        <p textAlign="center;">
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://www.youtube.com/embed/UmhYur7mtcw?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2012). Separation of Mixtures Using Different
            Techniques. Retrieved 3 April 2021, from
            amrita.olabs.edu.in/?sub=73&brch=2&sim=96&cnt=207
          </Typography>
        </div>
      </div>
    </div>
  );
}
