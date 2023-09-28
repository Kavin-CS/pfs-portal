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
          <a
            href="http://www.britannica.com/EBchecked/topic/654186/Youngs-modulus"
            target="_blank"
          >
            http://www.britannica.com/EBchecked/topic/654186/Youngs-modulus
          </a>
        </li>
        <li>
          <a
            href="http://physicsnet.co.uk/a-level-physics-as-a2/materials/young-modulus/"
            target="_blank"
          >
            http://physicsnet.co.uk/a-level-physics-as-a2/materials/young-modulus/
          </a>
        </li>
        <li>
          <a
            href="http://www.cyberphysics.co.uk/topics/forces/young_modulus.htm"
            target="_blank"
          >
            http://www.cyberphysics.co.uk/topics/forces/young_modulus.htm
          </a>
        </li>
        <li>
          <a href="http://physics.info/elasticity/" target="_blank">
            http://physics.info/elasticity/
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Young's Modulus. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=155&cnt=533
        </Typography>
      </div>
    </div>
  );
}
