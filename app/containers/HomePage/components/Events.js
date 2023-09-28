import React, { useEffect, useState } from 'react';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { getEvents } from '../../../utils/ApiService';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  showMoreContent: {
    position: 'absolute',
    bottom: '20px',
    right: 0,
    left: 0,
  },
  item: {
    fontSize: '14px',
    color: theme.palette.KenColors.primary,
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

const events = [
  { date: '13 Jul', description: 'Ratan tata to visit for convocation' },
  { date: '05 Sep', description: 'Teachers day celebration' },
  { date: '25 Apr', description: 'School annual day' },
];

export default function Events(props) {
  const { t } = useTranslation();
  const classes = useStyles();

  // useEffect(()=>{
  //   const ContactID = JSON.parse(localStorage.getItem('userDetails')).ContactId;
  //   //console.log("id",ContactID);
  //   async function fetchData(){
  //     if(ContactID){
  //       const res = await getEvents(ContactID);
  //       setEvents(res);
  //     }
  //   }
  //   fetchData();

  // }, []);

  return (
    <>
      <Box p={2}>
        <Typography>
          {t('headings:Upcoming_Events')} ({events.length})
        </Typography>
        <Grid className={classes.scrollWrap}>
          {events.map(item => (
            <EventsItem {...item} />
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
    </>
  );
}

export function EventsItem(props) {
  const { date, description } = props;
  const classes = useStyles();
  return (
    <Box pt={2} pb={2} className="bottomDivider">
      <Typography className="cardHeader">
        <CalendarTodayIcon style={{ fontSize: '1rem' }} /> {date}
      </Typography>
      <Typography variant="body2" className={classes.item}>
        {description}
      </Typography>
    </Box>
  );
}
