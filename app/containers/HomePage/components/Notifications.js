import React from 'react';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import NotificationItem from './NotificationItem';
import '../../App/styles.scss';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  showMoreContent: {
    position: 'absolute',
    bottom: '20px',
    right: 0,
    left: 0,
  },
  scrollWrap: {
    maxHeight: '50vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 6px ${theme.palette.KenColors.kenBlack}`,
      webkitBoxShadow: `inset 0 0 6px ${theme.palette.KenColors.kenBlack}`,
      backgroundColor: `inset 0 0 6px ${theme.palette.KenColors.kenBlack}`,
      opacity: '0.2',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: `inset 0 0 6px ${theme.palette.KenColors.kenBlack}`,
      opacity: '0.1',
      outline: `1px solid ${theme.palette.KenColors.neutral100}`,
    },
  },
}));

const notifications = [
  {
    title: 'Staff meeting',
    date: '10/06/2020; 10:30 AM',
    description:
      'All faculty are hereby requested to attend the staff meeting.',
  },
  {
    title: 'Parent Teacher Meeting',
    date: '14/06/2020; 10:30 AM',
    description:
      'All faculty are hereby requested to attend the parent teacher meeting.',
  },
  {
    title: 'Sports Day',
    date: '17/06/2020; 10:30 AM',
    description: 'All faculty are hereby requested to attend the sports day.',
  },
];
export default function Notifications() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Box p={2}>
          {/* header */}
          <Typography className="cardHeader">
            {t('headings:Notifications')} ({notifications.length})
          </Typography>

          {/* notifications list */}
          <Grid className={classes.scrollWrap}>
            {notifications.map(notif => (
              <NotificationItem {...notif} />
            ))}
          </Grid>
          <div style={{ paddingTop: 16 }}>
            <Typography
              align="center"
              color="primary"
              className={classes.showMoreContent}
            >
              {t('Show_More')}
            </Typography>
          </div>
        </Box>
      </div>
    </>
  );
}
