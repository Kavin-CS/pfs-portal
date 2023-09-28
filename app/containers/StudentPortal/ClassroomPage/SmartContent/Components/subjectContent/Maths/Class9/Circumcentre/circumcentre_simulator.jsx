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
  header: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://www.olabs.edu.in/OlabsMathematics/circumcentre/circumcentre.jsp?linktoken=9ff00f20429edda7806a4a4f2fd39628&amp;elink_lan=en-IN&amp;elink_title=Circumcentre of a triangle"
        width="100%px"
        height="900px"
        align="middle"
        class="iframeStyle"
        frameborder="0"
        allowfullscreen="true"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Circumcentre of a triangle. Retrieved 8
          April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=201&cnt=4
        </Typography>
      </div>
    </div>
  );
}
