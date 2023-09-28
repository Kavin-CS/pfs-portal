import React from 'react';
import { Typography, Grid, makeStyles, Box } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { nameToInitials } from '../../../utils/helpers/stringHelpers';

const useStyle = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.KenColors.tertiaryRed50}`,
  },
  icon: {
    background: theme.palette.KenColors.secondaryPeach3,
    padding: 10,
    borderRadius: 5,
  },
  date: {
    fontSize: '12px',
    color:theme.palette.KenColors.neutral400
  },
  scheduleIcon: {
    color: theme.palette.KenColors.neutral400,
    fontSize: '1.2rem',
  },
  title:{
    fontSize:'16px',
    fontWeight:'600',
    color:theme.palette.KenColors.primary,
  },
  description:{
    fontSize:'14px',
    color:theme.palette.KenColors.neutral400,
  }
}));
export default function NotificationItem(props) {
  const classes = useStyle();
  const { title, date, description } = props;

  return (
    <Box pt={3} pb={3} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item>
            <Typography className={classes.icon}>
              {nameToInitials(title)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.title} >
              {title}
            </Typography>
            <Typography className={classes.date} variant="body2">
              <ScheduleIcon className={classes.scheduleIcon} /> {date}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.description}>{description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
