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

      <p>Laboratory Manual Biology for class XII - Published by NCERT.</p>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://wiki.landscapetoolbox.org/doku.php/field_methods:quadrat_frequency"
            target="_blank"
          >
            http://wiki.landscapetoolbox.org/doku.php/field_methods:quadrat_frequency
          </a>
        </li>
        <li>
          <a
            href="http://itsligontime.com/sitebuildercontent/sitebuilderfiles/Quadratlab.pdf"
            target="_blank"
          >
            http://itsligontime.com/sitebuildercontent/sitebuilderfiles/Quadratlab.pdf
          </a>
        </li>
        <li>
          <a
            href="http://www.ehow.com/info_8417596_quadrat-sample.html"
            target="_blank"
          >
            http://www.ehow.com/info_8417596_quadrat-sample.html
          </a>
        </li>
        <li>
          <a
            href="http://rgsbio09.wikispaces.com/10+Field+Study+Techniques"
            target="_blank"
          >
            http://rgsbio09.wikispaces.com/10+Field+Study+Techniques
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of plant population frequency by
          quadrat method. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=238&cnt=668
        </Typography>
      </div>
    </div>
  );
}
