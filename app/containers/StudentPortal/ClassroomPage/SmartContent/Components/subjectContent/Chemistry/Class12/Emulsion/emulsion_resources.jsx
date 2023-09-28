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
            href="http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20XII/12085-Chemistry%20Part_I/Unit_5/index.html"
            target="_blank"
          >
            http://epathshala.nic.in/wp-content/doc/book/flipbook/Class%20XII/12085-Chemistry%20Part_I/Unit_5/index.html
          </a>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Effectiveness of Different Common Oils
          in Forming Emulsions. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=35&cnt=346
        </Typography>
      </div>
    </div>
  );
}
