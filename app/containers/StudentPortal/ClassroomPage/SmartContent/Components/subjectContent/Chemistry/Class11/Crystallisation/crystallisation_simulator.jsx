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
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=ANC&amp;exp=Characterization_and_Purification_of_Chemical_Substances&amp;tempId=olab_ot&amp;linktoken=d55bf5dc6d116ff83ec077305bae29a0&amp;elink_lan=en-IN&amp;elink_title=Purification of Impure Samples by Crystallization"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Purification of Impure Samples by
          Crystallization. Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=110&cnt=4
        </Typography>
      </div>
    </div>
  );
}
