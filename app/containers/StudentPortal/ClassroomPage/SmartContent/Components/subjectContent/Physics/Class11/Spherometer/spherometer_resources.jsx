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
        <li>Laboratory Manual Physics for class XI - Published by NCERT</li>
      </ul>

      <h1 className={classes.headTag}>Websites</h1>

      <ul>
        <li>
          <a href="http://www.scribd.com/doc/34429158/XI-Physics-Manual">
            http://www.scribd.com/doc/34429158/XI-Physics-Manual
          </a>
        </li>
        <li>
          <a href="http://www.vias.org/glazebrook_practphys/glazebrook_practical_physics_022.html">
            http://www.vias.org/glazebrook_practphys/glazebrook_practical_physics_022.html
          </a>
        </li>
        <li>
          <a href="http://sisphysics.weebly.com/uploads/7/9/7/5/797568/practical_physics.doc3.pdf">
            http://sisphysics.weebly.com/uploads/7/9/7/5/797568/practical_physics.doc3.pdf
          </a>
        </li>
      </ul>

      <p>
        <br />
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Spherometer. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=168&cnt=398
        </Typography>
      </div>
    </div>
  );
}
