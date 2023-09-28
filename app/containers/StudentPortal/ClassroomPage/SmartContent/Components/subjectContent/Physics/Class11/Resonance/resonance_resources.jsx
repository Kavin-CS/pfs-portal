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
            href="http://www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm1=7-14"
            target="_blank"
          >
            http://www.ncert.nic.in/ncerts/textbook/textbook.htm?kelm1=7-14
          </a>
        </li>
        <li>
          <a
            href="http://hyperphysics.phy-astr.gsu.edu/hbase/class/phscilab/restube2.html"
            target="_blank"
          >
            http://hyperphysics.phy-astr.gsu.edu/hbase/class/phscilab/restube2.html
          </a>
        </li>
        <li>
          <a
            href="http://hyperphysics.phy-astr.gsu.edu/hbase/waves/standw.html#c4"
            target="_blank"
          >
            http://hyperphysics.phy-astr.gsu.edu/hbase/waves/standw.html#c4
          </a>
        </li>
        <li>
          <a
            href="http://www.kshitij-iitjee.com/standing-waves-in-air-columns"
            target="_blank"
          >
            http://www.kshitij-iitjee.com/standing-waves-in-air-columns
          </a>
        </li>
        <li>
          <a
            href="http://www.acs.psu.edu/drussell/Demos/StandingWaves/StandingWaves.html"
            target="_blank"
          >
            http://www.acs.psu.edu/drussell/Demos/StandingWaves/StandingWaves.html
          </a>
        </li>
        <li>
          <a
            href="http://www.physicsclassroom.com/class/sound/Lesson-5/Resonance"
            target="_blank"
          >
            http://www.physicsclassroom.com/class/sound/Lesson-5/Resonance
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Resonance Column. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=36&cnt=564
        </Typography>
      </div>
    </div>
  );
}
