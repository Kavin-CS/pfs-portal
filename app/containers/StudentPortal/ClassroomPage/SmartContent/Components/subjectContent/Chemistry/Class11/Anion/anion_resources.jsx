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
      <h1 className={classes.headTag}>Books:</h1>

      <ul>
        <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.docbrown.info/page13/ChemicalTests/ChemicalTestsa.htm"
            target="_blank"
          >
            www.docbrown.info/page13/ChemicalTests/ChemicalTestsa.htm
          </a>
        </li>
        <li>
          <a
            href="http://en.wikibooks.org/wiki/Inorganic_Chemistry/Qualitative_Analysis/Tests_for_anions"
            target="_blank"
          >
            en.wikibooks.org/wiki/Inorganic_Chemistry/Qualitative_Analysis/Tests_for_anions
          </a>
        </li>
        <li>
          <a
            href="http://www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm2=7-8"
            target="_blank"
          >
            www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm2=7-8
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=__96chpEILg" target="_blank">
            www.youtube.com/watch?v=__96chpEILg
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=QHbaZFSU4_Q" target="_blank">
            www.youtube.com/watch?v=QHbaZFSU4_Q
          </a>
        </li>
        <li>
          <a href="//www.youtube.com/watch?v=s2SYV3azQpI" target="_blank">
            www.youtube.com/watch?v=s2SYV3azQpI
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=xPADtrF_q3k" target="_blank">
            www.youtube.com/watch?v=xPADtrF_q3k
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=Bl3_AArXzL8" target="_blank">
            www.youtube.com/watch?v=Bl3_AArXzL8
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=MPIsPWxLh6U" target="_blank">
            www.youtube.com/watch?v=MPIsPWxLh6U
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Qualitative Analysis of Anions.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=31&cnt=421
        </Typography>
      </div>
    </div>
  );
}
