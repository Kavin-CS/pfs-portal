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
        src="https://amrita.olabs.edu.in/olab/html5/?sub=BIO&amp;cat=BIC&amp;exp=Separation_of_Photosynthetic_Pigments_by_Paper_Chromatography&amp;tempId=olab&amp;linktoken=e519cd93e5ee6b81ab821f7f687f5363&amp;elink_lan=en-IN&amp;elink_title=Paper Chromatography"
        width="800px"
        height="630px"
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
          amrita.olabs.edu.in,. (2015). Paper Chromatography. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=124&cnt=4
        </Typography>
      </div>
    </div>
  );
}
