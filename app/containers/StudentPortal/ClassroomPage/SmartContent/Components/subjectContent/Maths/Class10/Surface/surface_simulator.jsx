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
    padding: 12,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/OlabsMathematics/Areasphere/index.jsp?linktoken=e27b787a9e358b1683810f2feacb877a&amp;elink_lan=en-IN&amp;elink_title=Surface area of a sphere"
        width="100%px"
        height="1200px"
        class="iframeStyle"
      >
        {' '}
      </iframe>{' '}
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=2
        </Typography>
      </div>
    </div>
  );
}
