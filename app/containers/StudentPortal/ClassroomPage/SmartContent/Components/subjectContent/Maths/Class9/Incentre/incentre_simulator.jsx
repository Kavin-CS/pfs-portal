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
        src="https://www.olabs.edu.in/OlabsMathematics/incentre/incentre.jsp?linktoken=a79ba5c01c6563a339882c744a9f000a&amp;elink_lan=en-IN&amp;elink_title=Incentre of a triangle"
        width="100%px"
        height="750px"
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
          cdac.olabs.edu.in,. (2014). Incentre of a triangle. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=202&cnt=4
        </Typography>
      </div>
    </div>
  );
}
