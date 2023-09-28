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
      <p>&nbsp;</p>

      <h1 className={classes.header}>Books:</h1>

      <ul>
        <li>
          Manual of Secondary Science Kit for Classes IX and X - &nbsp;Published
          by NCERT
        </li>
      </ul>

      <h1 className={classes.header}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://cbse10class.blogspot.in/2012/03/to-show-experimentally-that-carbon.html"
            target="_blank"
          >
            http://cbse10class.blogspot.in/2012/03/to-show-experimentally-that-carbon.html
          </a>
        </li>
        <li>
          <a
            href="http://www.ext.colostate.edu/mg/Gardennotes/141.html"
            target="_blank"
          >
            http://www.ext.colostate.edu/mg/Gardennotes/141.html
          </a>
        </li>
        <li>
          <a
            href="http://indstudy1.org/hs/999102059004/Lesson22/Lab22.swf"
            target="_blank"
          >
            http://indstudy1.org/hs/999102059004/Lesson22/Lab22.swf
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Role of Carbon Dioxide during
          Respiration. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=136&cnt=283
        </Typography>
      </div>
    </div>
  );
}
