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

export default function Animation() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src=" //amrita.olabs.edu.in/olab/CHE/INC/Determination_of_concentration_of_KMnO4_solution/main.html?elink_videoID=kXI_Om-2XYk&amp;linktoken=8c77d77e0034a78bf3ca30737d3ff3d0&amp;elink_lan=en-IN&amp;elink_title=Determination of concentration of KMnO₄ solution"
        width="900px"
        height="700px"
        class="iframeStyle"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Determination of concentration of KMnO₄
          solution. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=115&cnt=551
        </Typography>
      </div>
    </div>
  );
}
