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
    <div className={classes.animationWrap}>
      <div class="divContent">
        <h1 className={classes.headTag}>Books:</h1>

        <ul>
          <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
        </ul>

        <h1 className={classes.headTag}>Websites:</h1>

        <ul>
          <li>
            <a
              href="http://www.masterorganicchemistry.com/2010/10/25/3-trends-that-affect-boiling-points/"
              target="_blank"
            >
              www.masterorganicchemistry.com/2010/10/25/3-trends-that-affect-boiling-points/
            </a>
          </li>
          <li>
            <a
              href="http://faculty.coloradomtn.edu/jeschofnig/class/class_jeschof/ch1-lb10.htm"
              target="_blank"
            >
              faculty.coloradomtn.edu/jeschofnig/class/class_jeschof/ch1-lb10.htm
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=hYWHMMl0pz8"
              target="_blank"
            >
              www.youtube.com/watch
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=EPLAH8_9LqI"
              target="_blank"
            >
              www.youtube.com/watch
            </a>
            &nbsp;
          </li>
        </ul>

        <p>&nbsp;</p>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Boiling Point of an Organic Compound.
          Retrieved 2 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=111&cnt=481
        </Typography>
      </div>
    </div>
  );
}
