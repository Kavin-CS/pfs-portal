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
        <a href="http://www.tutorvista.com/content/science/science-ii/magnetic-effects-electric-current/force-current-carrying-conductor.php http://www.clipartbest.com/cliparts/ace/RAj/aceRAjeki.png https://2ecffd01e1ab3e9383f0-07db7b9624bbdf022e3b5395236d5cf8.ssl.cf4.rackcdn.com/Product-800x800/b3963e5c-38e4-4f17-87c2-6457840ba63a.png https://www.earn.sparkfun.com NCERT Text book.">
          http://www.tutorvista.com/content/science/science-ii/magnetic-effects-electric-current/force-current-carrying-conductor.ph
        </a>
        p
      </p>

      <p>
        <a href="http://gradestack.com/CBSE-Class-10th-Course/Magnetic-Effects-of/Force-on-a-Current-/15035-2998-4742-study-wtw">
          http://gradestack.com/CBSE-Class-10th-Course/Magnetic-Effects-of/Force-on-a-Current-/15035-2998-4742-study-wtw
        </a>
      </p>

      <p>
        <a href="http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/forwir2.html">
          http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/forwir2.html
        </a>
      </p>

      <p>NCERT Text book.</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Force on a current carrying conductor in a
          magnetic field. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=241&cnt=6
        </Typography>
      </div>
    </div>
  );
}
