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

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/OlabsMathematics/ArithmeticProgression/Arithmatic.jsp?linktoken=8b99bea4ca3fe21ef3cfee5dce6b4657&amp;elink_lan=en-IN&amp;elink_title=Arithmetic progression"
        width="100%px"
        height="950px"
        align="middle"
        class="iframeStyle"
        frameborder="0"
        allowfullscreen="true"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Arithmetic progression. Retrieved 7 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=20&sim=167&cnt=4
        </Typography>
      </div>
    </div>
  );
}
