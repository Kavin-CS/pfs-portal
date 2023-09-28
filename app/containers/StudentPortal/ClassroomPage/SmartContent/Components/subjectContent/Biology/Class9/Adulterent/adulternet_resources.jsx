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
  header: {
    fontSize: 20,
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <div class="divContent">
        <p>&nbsp;</p>

        <h1 className={classes.header}>Books:</h1>

        <ul>
          <li>
            Manual of Secondary Science Kit for Classes IX and X - Published by
            NCERT
          </li>
        </ul>

        <h1 className={classes.header}>Websites:</h1>

        <ul>
          <li>
            <a
              href="http://cbse-notes.blogspot.in/2013/04/cbse-class-9-science-experiment-sa1.html"
              target="_blank"
            >
              http://cbse-notes.blogspot.in/2013/04/cbse-class-9-science-experiment-sa1.html
            </a>
          </li>
          <li>
            <a
              href="//www.youtube.com/watch?NR=1&amp;feature=endscreen&amp;v=U99dNaGcKos"
              target="_blank"
            >
              //www.youtube.com/watch?NR=1&amp;feature=endscreen&amp;v=U99dNaGcKos
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Adulterant in Dal.
          Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=122&cnt=270
        </Typography>
      </div>
    </div>
  );
}
