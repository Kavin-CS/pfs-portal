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
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <p>
        Also study &nbsp;<strong>Image formation from Concave Mirror</strong>
        &nbsp; -for this visit
      </p>

      <ul>
        <li>
          <u>
            <a href="http://farside.ph.utexas.edu/teaching/302l/lectures/node137.html">
              http://farside.ph.utexas.edu/teaching/302l/lectures/node137.html
            </a>
          </u>
        </li>
      </ul>

      <h4 className={classes.secondaryTag}>&nbsp; &nbsp; &nbsp;Image formation with examples-</h4>

      <ul>
        <li>
          <a href="http://www.physicstutorials.org/home/optics/reflection-of-light/curved-mirrors/concave-mirrors/image-formation-in-concave-mirrors">
            http://www.physicstutorials.org/home/optics/reflection-of-light/curved-mirrors/concave-mirrors/image-formation-in-concave-mirrors
          </a>
        </li>
        <li>
          <a href="http://www.tutorvista.com/content/science/science-ii/reflection-light/formation-concave-mirror.php">
            http://www.tutorvista.com/content/science/science-ii/reflection-light/formation-concave-mirror.php
          </a>
        </li>
      </ul>

      <p>
        <strong>Concave Mirror Uses -</strong>
      </p>

      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=LcUhAA5-j00">
            //www.youtube.com/watch?v=LcUhAA5-j00
          </a>
        </li>
      </ul>

      <p>
        <strong>A video to watch -</strong>
      </p>

      <p align="center">
        <iframe
          allowfullscreen=""
          frameborder="0"
          height="315"
          src="https://www.youtube.com/embed/xzVSpYmhCtk"
          width="420"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study reflection in concave mirror.
          Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=38&cnt=6
        </Typography>
      </div>
    </div>
  );
}
