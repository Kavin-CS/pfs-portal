import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TabContent from './components/tabs';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fonts: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '18px',
  },
}));

const ParentResource = (name = 'S. Kavyashree') => {
  const classes = useStyles();

  return (
    <Paper>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
              }}
            >
              <Avatar alt="user">{'S'}</Avatar>
              <Typography style={{ marginLeft: 10 }} className={classes.fonts}>
                S. Kavyashree
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TabContent />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default ParentResource;
