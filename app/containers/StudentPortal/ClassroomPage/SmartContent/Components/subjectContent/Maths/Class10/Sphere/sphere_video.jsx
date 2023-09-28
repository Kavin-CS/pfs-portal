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
 animationWrap:{
  width:' 90%',
  margin: '0 auto',
  padding: 12
 }
}));

export default function Video() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
  no data
    </div>
  );
}
