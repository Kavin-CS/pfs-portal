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
        <h1 className={classes.header}>
          1.&nbsp;Separation of Components from a Mixture&nbsp;
        </h1>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://www.youtube.com/embed/NSJIAcfvEJI?rel=0"
            width="640"
          />
        </p>

        <p>&nbsp;</p>

        <h1 className={classes.header}>
          2. Separation of Pigments from the Extract of Spinach Leaves
        </h1>

        <p>
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="360"
            src="https://www.youtube.com/embed/ej2zXOwASVI?rel=0"
            width="640"
          />
        </p>

        <div className={classes.wrap}>
          <h1 className={classes.header}>Acknowledgement:</h1>
          <Typography>
            amrita.olabs.edu.in,. (2015). Paper Chromatography. Retrieved 29
            March 2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=133&cnt=607
          </Typography>
        </div>
      </div>
    </div>
  );
}
