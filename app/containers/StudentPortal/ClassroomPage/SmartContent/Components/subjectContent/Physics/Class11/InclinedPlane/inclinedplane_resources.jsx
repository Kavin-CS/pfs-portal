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
      <h1 className={classes.headTag}>Books</h1>

      <ul>
        <li>
          &nbsp;Laboratory Manual Physics for class XI - Published by NCERT
        </li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a href="http://en.wikipedia.org/wiki/Inclined_plane" target="_blank">
            http://en.wikipedia.org/wiki/Inclined_plane
          </a>
        </li>
        <li>
          <a
            href="http://www.physicsclassroom.com/class/vectors/Lesson-3/Inclined-Planes"
            target="_blank"
          >
            http://www.physicsclassroom.com/class/vectors/Lesson-3/Inclined-Planes
          </a>
        </li>
        <li>
          <a
            href="http://www.ohio.edu/people/williar4/html/haped/nasa/simpmach/Inplane.htm"
            target="_blank"
          >
            http://www.ohio.edu/people/williar4/html/haped/nasa/simpmach/Inplane.htm
          </a>
        </li>
        <li>
          <a
            href="http://scienceforkids.kidipede.com/physics/machines/inclinedplane.htm"
            target="_blank"
          >
            http://scienceforkids.kidipede.com/physics/machines/inclinedplane.htm
          </a>
        </li>
        <li>
          <a
            href="http://atlantis.coe.uh.edu/archive/science/science_lessons/scienceles1/plane.htm"
            target="_blank"
          >
            http://atlantis.coe.uh.edu/archive/science/science_lessons/scienceles1/plane.htm
          </a>
        </li>
        <li>
          <a
            href="http://sunshine.chpc.utah.edu/Labs/Machines/act2a/lab1.html"
            target="_blank"
          >
            http://sunshine.chpc.utah.edu/Labs/Machines/act2a/lab1.html
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Inclined Plane. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=19&cnt=423
        </Typography>
      </div>
    </div>
  );
}
