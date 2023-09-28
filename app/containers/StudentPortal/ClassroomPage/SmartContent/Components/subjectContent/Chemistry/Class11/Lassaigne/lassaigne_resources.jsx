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
      <h1 className={classes.headTag}>Book:</h1>

      <ul>
        <li>Laboratory Manual Chemistry for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Sodium_fusion_test"
            target="_blank"
          >
            en.wikipedia.org/wiki/Sodium_fusion_test
          </a>
        </li>
        <li>
          <a
            href="http://www.adichemistry.com/organic/basics/analysis/lassaignes/lassaignes-test.html"
            target="_blank"
          >
            www.adichemistry.com/organic/basics/analysis/lassaignes/lassaignes-test.html
          </a>
        </li>
        <li>
          <a
            href="http://chemistry.niser.ac.in/labhandouts/C142-Exp1.pdf"
            target="_blank"
          >
            chemistry.niser.ac.in/labhandouts/C142-Exp1.pdf
          </a>
        </li>
        <li>
          <a
            href="http://eduframe.net/andc/chemistry/Che02/extra%20elements.htm"
            target="_blank"
          >
            eduframe.net/andc/chemistry/Che02/extra%20elements.htm
          </a>
        </li>
        <li>
          <a
            href="http://yougems.reflectionsinfos.com/queries/viewquery/516"
            target="_blank"
          >
            yougems.reflectionsinfos.com/queries/viewquery/516
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Elements: Lassaigne's Test.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=149&cnt=333
        </Typography>
      </div>
    </div>
  );
}
