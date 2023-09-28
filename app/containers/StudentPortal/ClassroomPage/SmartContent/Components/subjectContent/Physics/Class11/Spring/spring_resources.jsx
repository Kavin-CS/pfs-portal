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
          <a href="http://www.wisegeek.com/what-is-a-helical-spring.htm">
            http://www.wisegeek.com/what-is-a-helical-spring.htm
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Coil_spring">
            http://en.wikipedia.org/wiki/Coil_spring
          </a>
        </li>
        <li>
          <a href="http://sisphysics.weebly.com/uploads/7/9/7/5/797568/experiment_9__10.pdf">
            http://sisphysics.weebly.com/uploads/7/9/7/5/797568/experiment_9__10.pdf
          </a>
        </li>
        <li>
          <a href="http://www.britannica.com/EBchecked/topic/259959/helical-spring">
            http://www.britannica.com/EBchecked/topic/259959/helical-spring
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Helical Spring. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=197&cnt=532
        </Typography>
      </div>
    </div>
  );
}
