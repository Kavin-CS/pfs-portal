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
    <div class="divContent">
      <p>&nbsp;</p>

      <h1 className={classes.headTag}>Books</h1>

      <ul>
        <li>
          http://www.learnnext.com/nextgurukul/wiki/concept/CBSE/XI/Physics/Newton-s-Law-of-Cooling.htm
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a
            href="http://www.selltheshell.com/Pra_Sheets/11/Parallelogram.pdf"
            target="_blank"
          >
            http://www.selltheshell.com/Pra_Sheets/11/Parallelogram.pdf
          </a>
        </li>
        <li>
          <a
            href="https://www.easycalculation.com/physics/classical-physics/learn-resultant-vector.php"
            target="_blank"
          >
            https://www.easycalculation.com/physics/classical-physics/learn-resultant-vector.php
          </a>
        </li>
        <li>
          <a
            href="http://www.tndte.com/TEXT%20BOOKS/Book-Unit%20wise/Engineering%20Physics-I%20&amp;%20II/Physics_Sem-I-Practical.pdf"
            target="_blank"
          >
            http://www.tndte.com/TEXT%20BOOKS/Book-Unit%20wise/Engineering%20Physics-I.pdf
          </a>
        </li>
        <li>
          <a
            href="http://www.pre-engineering.com/resources/parallel.htm"
            target="_blank"
          >
            http://www.pre-engineering.com/resources/parallel.htm
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Parallelogram Law of Vectors.. Retrieved
          23 March 2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=20&cnt=397
        </Typography>
      </div>
    </div>
  );
}
