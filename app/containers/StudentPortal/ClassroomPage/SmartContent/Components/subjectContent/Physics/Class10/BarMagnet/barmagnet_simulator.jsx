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
  headTag: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/olabs/OLabsPhysics/MagneticEffect/Feild_lines_Magnetic_bar.html?linktoken=573a8b7dd14ab640e8eb764ac8b3a7ee&amp;elink_lan=en-IN&amp;elink_title=To study the field lines formed around a bar magnet"
        width="807px"
        height="770px"
      >
        {' '}
      </iframe>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study the field lines formed around a
          bar magnet. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=74&cnt=4
        </Typography>
      </div>
    </div>
  );
}
