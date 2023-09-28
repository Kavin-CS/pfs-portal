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
      <h1 className={classes.headTag}>References:</h1>
      <ul>
        <li>
          <a href="http://www.tutorvista.com/content/science/science-ii/magnetic-effects-electric-current/magnetic-circular-loop.php">
            Magnetic Field (Theory) - Tutor Vista
          </a>
        </li>
        <li>
          <a href="http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/curloo.html">
            Magnetic Field due to a circular loop
          </a>
        </li>
        <li>
          <a href="http://theory.uwinnipeg.ca/physics/mag/node5.html">
            Torque on a current carrying loop
          </a>
        </li>
        <li>
          <a href="http://www.5min.com/Video/Learn-about-Magnetism-6-Magnetic-field-due-to-current-99172404">
            Video Lecture on Magnetism - Khan's Academy{' '}
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). The magnetic field lines around current
          carrying solenoid.. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=91&cnt=6
        </Typography>
      </div>
    </div>
  );
}
