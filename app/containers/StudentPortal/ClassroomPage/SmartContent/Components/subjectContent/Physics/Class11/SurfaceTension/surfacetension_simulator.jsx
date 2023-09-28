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
  headTag: {
    fontSize: 20,
  },
}));

export default function Simulator() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <iframe
        src="https://amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=CLA&amp;exp=surface_tension&amp;tempId=olab_ot&amp;linktoken=b5915cca7a11c2d36f17870b9cf17abd&amp;elink_lan=en-IN&amp;elink_title=Surface Tension"
        width="900px"
        height="600px"
        align="middle"
        class="iframeStyle"
        frameborder="0"
        allowfullscreen="true"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Surface Tension. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=224&cnt=4
        </Typography>
      </div>
    </div>
  );
}
