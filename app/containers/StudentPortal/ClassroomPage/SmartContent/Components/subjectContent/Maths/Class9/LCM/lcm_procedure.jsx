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

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        <strong>Procedure:</strong>
      </p>

      

      <p>
        <strong>1. Prime factorisation method:</strong>
      </p>

      

      <ul>
        <li>Factorise each number into its prime factors.</li>
        <li>
          Count the number of times each prime factor appears in factorisation.
        </li>
        <li>
          For each and every prime number take the highest power of prime
          factor.
        </li>
        <li>
          The LCM of number is the multiple of factors having highest power.
        </li>
      </ul>

      

      <p>ex. &nbsp;Find the LCM of 16,20.</p>

      

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16 = 2*2*2*2 = 2^4</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20 = 2*2*5 &nbsp;= 2²*5</p>

      <p>LCM of 16 and 20 = 24 * 5 = 2*2*2*2*5= 80</p>

      <p>
        <strong>2. Grid method:</strong>
      </p>

      

      <ul>
        <li>
          Create a grid and write the numbers on top of grid separated by comma
        </li>
      </ul>

      

      <p>&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;4, 6</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;|</p>

      

      <ul>
        <li>Divide the numbers with the smallest common prime factor.</li>
      </ul>

      

      <p>&nbsp;&nbsp; &nbsp; &nbsp;2 | &nbsp;4, 6</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
        &nbsp;2, 3
      </p>

      

      <ul>
        <li>Repeat the process until no more common factors exist.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Least common multiple. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=29&sim=223&cnt=2
        </Typography>
      </div>
    </div>
  );
}
