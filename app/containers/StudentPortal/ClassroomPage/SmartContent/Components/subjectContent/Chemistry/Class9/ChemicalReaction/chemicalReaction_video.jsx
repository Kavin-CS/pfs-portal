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
    <div className={classes.animationWrap}>
      <div class="divContent">
        <p>
          <b>1.Burning of magnesium in air</b>
        </p>

        <p>
          <iframe
            height="360"
            src="//www.youtube.com/embed/9xaFPO4qnPA?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>2.Reaction between sodium sulphate and barium chloride</b>
        </p>

        <p>
          <iframe
            height="360"
            src="//www.youtube.com/embed/uaBHB5GSgHU?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>
            3.Reaction of iron nails with copper sulphate solution in water{' '}
          </b>
        </p>

        <p>
          <iframe
            height="360"
            src="//www.youtube.com/embed/3ctvPrAwbPY?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>4.Reaction of zinc with dilute sulphuric acid</b>
        </p>

        <p>
          <iframe
            height="360"
            src="//www.youtube.com/embed/n8mnZxLETsg?rel=0"
            width="640"
          />
        </p>

        <p>
          <b>5.Heating of copper sulphate</b>
        </p>

        <p>
          <iframe
            height="360"
            src="//www.youtube.com/embed/GeDYWGtqeXQ?rel=0"
            width="640"
          />
        </p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Chemical Reactions. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=77&cnt=223
        </Typography>
      </div>
    </div>
  );
}
