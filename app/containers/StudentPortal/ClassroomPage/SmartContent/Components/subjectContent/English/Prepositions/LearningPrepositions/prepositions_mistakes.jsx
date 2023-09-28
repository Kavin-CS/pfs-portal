import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import mistakeImage from '../../../../../../../../../assets/Images/Subjects/English/common-mistake.jpg';
const useStyles = makeStyles(theme => ({
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
    padding: 12,
  },
}));

export default function CommonMistakes() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <img src={mistakeImage} />
    </div>
  );
}
