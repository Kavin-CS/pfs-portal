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
        src="https://www.olabs.edu.in/OlabsMathematics/stepmat/index.jsp?linktoken=46310bebe1028ad1071b380a694085f8&amp;elink_lan=en-IN&amp;elink_title=Solving simultaneous equations"
        width="100%px"
        height="1200px"
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
          cdac.olabs.edu.in,. (2015). Solving simultaneous equations. Retrieved
          8 April 2021, from cdac.olabs.edu.in/?sub=80&brch=21&sim=213&cnt=4
        </Typography>
      </div>
    </div>
  );
}
