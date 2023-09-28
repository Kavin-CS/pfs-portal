import React from 'react';
import {
  Box,
  Grid,
  Container,
  Card,
  Paper,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CircularWidget from '../../../../components/ChartWidgets/CircularProgressWithLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const marks = 7;
const total = 10;
export default function StudentAttendanceDetails() {
  const classes = useStyles();
  return (
    <div style={{ border: '1px solid purple' }}>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.root}>
              <Avatar alt="" src="/static/images/avatar/1.jpg" />
              <Typography component="span">
                <Typography>Name</Typography>
                <Typography>Roll no</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid constainer item xs={12} sm={6} md={6}>
            <Grid item>
              <CircularWidget
                value={(marks / total) * 100}
                label={`${marks}/${total}`}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box>tab and calender here</Box>
    </div>
  );
}
