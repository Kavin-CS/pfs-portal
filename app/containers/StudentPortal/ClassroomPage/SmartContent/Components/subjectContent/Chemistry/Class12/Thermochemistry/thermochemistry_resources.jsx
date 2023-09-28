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
      </ul>

      <h1 className={classes.headTag}>Websites:</h1>

      <ul>
        <li>
          <a
            href="http://www.chem1.com/acad/webtext/energetics/CE-4.html"
            target="_blank"
          >
            http://www.chem1.com/acad/webtext/energetics/CE-4.html
          </a>
        </li>
        <li>
          <a
            href="http://www.liceonomentano.net/wp-content/uploads/2011/06/Calorimetry-part2.pdf"
            target="_blank"
          >
            http://www.liceonomentano.net/wp-content/uploads/2011/06/Calorimetry-part2.pdf
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=69E62Y32q80" target="_blank">
            https://www.youtube.com/watch?v=69E62Y32q80
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Thermochemistry. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=145&cnt=674
        </Typography>
      </div>
    </div>
  );
}
