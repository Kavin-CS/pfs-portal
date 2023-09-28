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
          <a
            href="http://www.physics4kids.com/files/motion_friction.html"
            target="_blank"
          >
            http://www.physics4kids.com/files/motion_friction.html
          </a>
        </li>
        <li>
          <a
            href="http://hyperphysics.phy-astr.gsu.edu/hbase/frict.html"
            target="_blank"
          >
            http://hyperphysics.phy-astr.gsu.edu/hbase/frict.html
          </a>
        </li>
        <li>
          <a
            href="http://regentsprep.org/regents/physics/phys01/friction/default.htm"
            target="_blank"
          >
            http://regentsprep.org/regents/physics/phys01/friction/default.htm
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Friction" target="_blank">
            http://en.wikipedia.org/wiki/Friction
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Friction. Retrieved 23 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=191&cnt=425
        </Typography>
      </div>
    </div>
  );
}
