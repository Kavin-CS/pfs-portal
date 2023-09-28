import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    paddingTop: 0,
    textAlign: 'left',
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
  },

  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <strong>Objective: </strong>
      </p>

      <p>Find the Least Common Multiple (LCM).</p>

      <p>
        <strong>Theory:</strong>
      </p>

      <p>
        Definition of LCM:The least common multiple(LCM) of two integers is the
        smallest positive integer that is divisible by both the integers.
      </p>

      <p>There are two main methods to find the lcm</p>

      <p>&nbsp;&nbsp; &nbsp;1. Prime factorisation method</p>

      <p>&nbsp;&nbsp; &nbsp;2. Grid method</p>

      <p>
        <strong>Prime factorisation method:</strong> The prime factors of a
        positive integer are the prime numbers that divide that integer exactly.
        The prime factorization can be written in way as the order of factors
        does not matter.
      </p>

      <p>&nbsp;&nbsp; &nbsp;ex. prime factors of 48 = 2*2*2*2*3</p>

      <p>&nbsp;&nbsp; &nbsp;</p>

      <p>
        <strong>Grid method:</strong> &nbsp;The grid method of LCM is an easy
        approach to find the LCM, i.e. We find the LCM of numbers using grid.
      </p>

      <p>ex. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 | &nbsp;4, 6</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; 2 |
        &nbsp;2, 3
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 3 |
        &nbsp;1, 3
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp; | &nbsp;1, 1
      </p>

      <p>LCM of 4 and 6 is 2*2*3=12</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Least common multiple. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=29&sim=223&cnt=1
        </Typography>
      </div>
    </div>
  );
}
