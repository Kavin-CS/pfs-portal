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
      <iframe src="http://180.149.57.33:8080/OlabsMathematics/LCM/index.jsp?linktoken=811a658d702ffd4c2360f928926efc19&amp;elink_lan=en-IN&amp;elink_title=Least common multiple" width="100%px" height="900px" align="middle" class="iframeStyle" frameborder="0" allowfullscreen="true"> </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Least common multiple. Retrieved 8 April
          2021, from cdac.olabs.edu.in/?sub=80&brch=29&sim=223&cnt=4
        </Typography>
      </div>
    </div>
  );
}
