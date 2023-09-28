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
      <h2 className={classes.headTag}>
        &nbsp;Some useful referneces can be found here:
      </h2>
      
      <ul>
        <li>
          <a href="http://www.learnnext.com/class10/science/Magnetic-Effect-Of-Electric-Current.htm">
            Magnetic Effects of Electric Current
          </a>
        </li>
        <li>
          <a href="http://www.excellup.com/classten/scienceten/electromagnetism.aspx">
            Electricity and Magnetism
          </a>
        </li>
        <li>
          <a href="http://www.khanacademy.org/science/physics/v/magnetism-6--magnetic-field-due-to-current">
            Magnetic Field due to Current - Khan Academy&nbsp;
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Magnetic field lines around current
          carrying conductor. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=90&cnt=6
        </Typography>
      </div>
    </div>
  );
}
