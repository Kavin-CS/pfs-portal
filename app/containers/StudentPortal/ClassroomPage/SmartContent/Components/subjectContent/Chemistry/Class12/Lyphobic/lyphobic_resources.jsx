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
        <li>Laboratory Manual Chemistry for class XII - Published by NCERT</li>
        <li>
          Text book for Class XII Chemistry - Part I, National Council of
          Educational Research and Training
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://chemistry.about.com/od/lecturenotesl3/a/colloids.htm"
            target="_blank"
          >
            chemistry.about.com/od/lecturenotesl3/a/colloids.htm
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Colloid" target="_blank">
            en.wikipedia.org/wiki/Colloid
          </a>
        </li>
        <li>
          <a
            href="http://chemistry-desk.blogspot.in/2012/10/classification-of-colloids.html"
            target="_blank"
          >
            chemistry-desk.blogspot.in/2012/10/classification-of-colloids.html
          </a>
        </li>
        <li>
          <a
            href="http://www.chemistrylearning.com/difference-between-lyophobic-and-lyophilic/"
            target="_blank"
          >
            www.chemistrylearning.com/difference-between-lyophobic-and-lyophilic/
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Preparation of Lyophilic and Lyophobic
          Sols. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=34&cnt=345
        </Typography>
      </div>
    </div>
  );
}
