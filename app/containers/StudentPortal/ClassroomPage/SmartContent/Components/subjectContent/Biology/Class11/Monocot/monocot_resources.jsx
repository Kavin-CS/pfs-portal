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
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.header}>Books:</h1>

      <ul>
        <li>Laboratory Manual Biology for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://lurnq.com/lesson/Anatomy-of-Flowering-Plants-Part-2-Root-Stem-Leaf/"
            target="_blank"
          >
            http://lurnq.com/lesson/Anatomy-of-Flowering-Plants-Part-2-Root-Stem-Leaf/
          </a>
        </li>
        <li>
          <a
            href="http://www.targetpublications.org/download/hsc-maharashtra-board/std_xi_biology_practical_handbook.pdf"
            target="_blank"
          >
            http://www.targetpublications.org/download/hsc-maharashtra-board/std_xi_biology_practical_handbook.pdf
          </a>
        </li>
        <li>
          <a
            href="http://www.majordifferences.com/2013/03/difference-between-dicot-and-monocot_27.html"
            target="_blank"
          >
            http://www.majordifferences.com/2013/03/difference-between-dicot-and-monocot_27.html
          </a>
        </li>
        <li>
          <a
            href="http://www.majordifferences.com/2013/03/difference-between-dicot-and-monocot.html#.VAVDZaOiKSo"
            target="_blank"
          >
            http://www.majordifferences.com/2013/03/difference-between-dicot-and-monocot.html#.VAVDZaOiKSo
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Characteristics of Dicot and Monocot
          Stem and Root. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=192&cnt=433
        </Typography>
      </div>
    </div>
  );
}
