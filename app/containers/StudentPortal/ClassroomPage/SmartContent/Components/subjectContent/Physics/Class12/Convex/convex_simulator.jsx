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
        src=" //amrita.olabs.edu.in/olab/html5/?sub=PHY&amp;cat=OPT&amp;exp=Focal_Length_Convex_Mirror&amp;tempId=olab_ot&amp;linktoken=65da07b6585e9535cdf6271cbeb5b58f&amp;elink_lan=en-IN&amp;elink_title=Convex Mirror - Focal Length"
        width="820px"
        height="500px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Convex Mirror - Focal Length. Retrieved
          19 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=243&cnt=4
        </Typography>
      </div>
    </div>
  );
}
