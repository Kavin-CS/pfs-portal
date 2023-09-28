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
        <h1 className={classes.header}>&nbsp;Books:</h1>

        <ul>
          <li>
            &nbsp;Laboratory Manual Biology for class XI - Published by NCERT
          </li>
        </ul>

        <h1 className={classes.header}>Websites:</h1>

        <ul>
          <li>
            <a
              href="http://water.me.vccs.edu/courses/SCT112/lecture3_print.htm"
              target="_blank"
            >
              water.me.vccs.edu/courses/SCT112/lecture3_print.htm
            </a>
          </li>
          <li>
            <a
              href="http://wizznotes.com/biology/transport-in-plants/factors-affecting-transpiration"
              target="_blank"
            >
              wizznotes.com/biology/transport-in-plants/factors-affecting-transpiration
            </a>
          </li>
          <li>
            <a
              href="http://www.eoearth.org/view/article/156689/"
              target="_blank"
            >
              www.eoearth.org/view/article/156689/
            </a>
          </li>
          <li>
            <a
              href="http://www.mhhe.com/biosci/genbio/virtual_labs/BL_10/BL_10.html"
              target="_blank"
            >
              www.mhhe.com/biosci/genbio/virtual_labs/BL_10/BL_10.html
            </a>
          </li>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/Transpiration"
              target="_blank"
            >
              en.wikipedia.org/wiki/Transpiration
            </a>
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2015). Rate of Transpiration. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=127&cnt=400 
        </Typography>
      </div>
    </div>
  );
}
