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
        src=" https://amrita.olabs.edu.in/olab/html5/?sub=CHE&amp;cat=PHC&amp;exp=ToStudyThePropertiesOfAcidsNBases&amp;tempId=olab_ot&amp;linktoken=9e9f6c17c2ca93be590351cf30e8a848&amp;elink_lan=en-IN&amp;elink_title=Properties of Acids and Bases"
        width="800px"
        height="490px"
      >
        {' '}
      </iframe>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Properties of Acids and Bases. Retrieved
          1 April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=6&cnt=72
        </Typography>
      </div>
    </div>
  );
}
