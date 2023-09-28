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
      <h1 className={classes.header}>
        <strong>Books:</strong>
      </h1>

      <ul>
        <li>Laboratory Manual Biology for class XI - Published by NCERT.</li>
      </ul>

      <h1 className={classes.header}>
        <strong>Websites:</strong>
      </h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Albumin" target="_blank">
            http://en.wikipedia.org/wiki/Albumin
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Microalbuminuria"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Microalbuminuria
          </a>
        </li>
        <li>
          <a
            href="http://www.kidney.org/atoz/content/albuminuria"
            target="_blank"
          >
            http://www.kidney.org/atoz/content/albuminuria
          </a>
        </li>
        <li>
          <a
            href="http://nkdep.nih.gov/learn/testing/understand-urine-albumin.shtml"
            target="_blank"
          >
            http://nkdep.nih.gov/learn/testing/understand-urine-albumin.shtml
          </a>
        </li>
        <li>
          <a
            href="http://www.austincc.edu/mlt/ua/UrineProteinSulfosalicylicAcidPrecipitationTest.pdf"
            target="_blank"
          >
            http://www.austincc.edu/mlt/ua/UrineProteinSulfosalicylicAcidPrecipitationTest.pdf
          </a>
        </li>
        <li>
          <a
            href="http://en.wikipedia.org/wiki/Heller%27s_test"
            target="_blank"
          >
            http://en.wikipedia.org/wiki/Heller%27s_test
          </a>
        </li>
        <li>
          <a
            href="http://jeromepanibe.files.wordpress.com/2011/11/chemistry-of-proteins.pdf"
            target="_blank"
          >
            http://jeromepanibe.files.wordpress.com/2011/11/chemistry-of-proteins.pdf
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Albumin in Urine. Retrieved
          6 April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=208&cnt=464
        </Typography>
      </div>
    </div>
  );
}
