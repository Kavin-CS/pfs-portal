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
      
      <p>Some good references available online :</p>
      <ol>
        <li>
          <a href="https://www.youtube.com/v/ZzwuHS9ldbY">
            Video Lecture on Hooke's Law
          </a>
          &nbsp;(Khan's Academy)
        </li>
        <li>
          <a href="https://www.4physics.com/phy_demo/HookesLaw/HookesLawLab.html">
            Determining the Spring Constant
          </a>
        </li>
        <li>
          <a href="https://www.britannica.com/EBchecked/topic/271336/Hookes-law">
            Encylopedia Britanica - Hooke's Law (Theory)
          </a>
        </li>
        <li>
          <a href="https://www.tutorvista.com/content/physics/physics-iii/solids-and-fluids/hookes-law.php#">
            Hooke's Law Experiemnt{' '}
          </a>
          (Tutor Vista)
        </li>
        <li>
          Another useful{' '}
          <a href="https://wn.com/Elasticity_and_Plasticity">video lecture</a>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). Verification of Hooke's Law. Retrieved 25
          March 2021, from cdac.olabs.edu.in/?sub=74&brch=9&sim=68&cnt=6
        </Typography>
      </div>
    </div>
  );
}
