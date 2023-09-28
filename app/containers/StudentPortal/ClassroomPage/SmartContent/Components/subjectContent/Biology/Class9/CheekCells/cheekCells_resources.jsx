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
              href="http://www.indiastudychannel.com/projects/4421-To-prepare-stained-temporary-mount-onion-peel-record-observations.aspx"
              target="_blank"
            >
              http://www.indiastudychannel.com/projects/4421-To-prepare-stained-temporary-mount-onion-peel-record-observations.aspx
            </a>
          </li>
          <li>
            <a href="//www.youtube.com/watch?v=zXAgbSzEADQ" target="_blank">
              //www.youtube.com/watch?v=zXAgbSzEADQ
            </a>
          </li>
          <li>
            <a href="//www.youtube.com/watch?v=i2x3MKSJez4" target="_blank">
              //www.youtube.com/watch?v=i2x3MKSJez4
            </a>
          </li>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/Cell_%28biology%29"
              target="_blank"
            >
              http://en.wikipedia.org/wiki/Cell_%28biology%29
            </a>
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Onion and Cheek Cells. Retrieved 4 March
          2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=125&cnt=269
        </Typography>
      </div>
    </div>
  );
}
