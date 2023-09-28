import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Typography, Grid } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import SearchBox from '../../../components/UI/SearchBox';
import kenColors from '../../../utils/themes/KenColors';
import { useTranslation } from 'react-i18next';
import Routes from '../../../utils/routes.json';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paddingLeft: {
    paddingLeft: '5px',
  },

  topContainer: {
    display: 'inline-flex',
    width: '100%',
    [theme.breakpoints.between(280, 770)]: {
      position: 'relative',
    },
  },
  eventListContainer: {
    // maxHeight: '410px',
    // overflow: 'auto'
  },
  registeredEvent: {
    width: '100%',
    paddingBottom: '10px',
    textAlign: 'left',
    margin: '20px 0px',
    borderBottom: '1px solid #' + kenColors.lightGray,
    color: kenColors.tertiaryRed500,
  },
  eventList: {
    width: '100%',
    paddingBottom: '10px',
    textAlign: 'left',
    margin: '20px 0px',
    borderBottom: '1px solid #' + kenColors.lightGray,
  },
  items: {
    margin: '10px 0px',
  },
  date: {
    margin: '5px 0px',
    color: 'green',
  },
  title: {
    margin: '5px 0px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: theme.palette.KenColors.primary,
  },
  description: {
    margin: '5px 0px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.KenColors.neutral400,
  },
  SearchBoxContainer: {
    float: 'right',
    position: 'absolute',
    top: '0px',
    right: '0px',
    // width: '136px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  switch: {
    display: 'flex',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '50px',
    },
    [theme.breakpoints.between(280, 770)]: {
      position: 'absolute',
      right: 0,
    },
  },
  eventHeading: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 15,
    fontWeight: 600,
    lineHeight: '20px',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  topView: { position: 'relative' },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typo: {
    fontSize: '12px',
    color: theme.palette.KenColors.primary,
    cursor: 'pointer',
    textAlign: 'center',
  },
  eventDate: {
    fontSize: 22,
    display: 'flex',
    alignItems: 'baseline',
    cursor: 'pointer',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  topView: { position: 'relative' },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typo: {
    fontSize: '12px',
    color: theme.palette.KenColors.primary,
    cursor: 'pointer',
    textAlign: 'center',
  },
  eventDate: {
    fontSize: 22,
    display: 'flex',
    alignItems: 'baseline',
    cursor: 'pointer',
  },
}));

const monthColors = {
  Jan: kenColors.tertiaryGreen300,
  Feb: kenColors.tertiaryBlue300,
  Mar: kenColors.tertiaryTeal300,
  Apr: kenColors.tertiaryPurple300,
  May: kenColors.tertiaryBlue500,
  Jun: kenColors.tertiaryPurple500,
  Jul: kenColors.tertiaryRed500,
  Aug: kenColors.tertiaryTeal500,
  Sep: kenColors.tertiaryYellow500,
  Oct: kenColors.tertiaryGreen500,
  Nov: kenColors.neutral400,
  Dec: kenColors.neutral900,
};

const theme = createMuiTheme({
  overrides: {
    MuiSwitch: {
      root: {
        bottom: '12px',
        width: '50px',
        padding: '12px 5px',
      },
      track: {
        width: '50px',
        height: '20px',
        borderRadius: '14px',
        backgroundColor: 'white',
        border: '1px solid darkblue',
      },
      switchBase: {
        top: '6px',
        left: '0px',
        color: '#EAF6FF',
      },
      thumb: {
        border: '2px solid darkblue',
        height: 14,
        width: 13,
      },
    },
  },
});

const handleExpandClick = () => {
  setExpanded(!expanded);
};

export default function UpcomingEvents(props) {
  const { history } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const [registeredEvents, setRegisteredEvents] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [eventsList, setEventsList] = useState();
  const [initialEventsList, setInitialEventsList] = useState(null);

  const searchEventsHandler = event => {
    let searchString = event.target.value;

    let events = initialEventsList;
    let searchResult = events.filter(ev => {
      return (
        ev.title.toLowerCase().includes(searchString.toLowerCase()) ||
        ev.day.toLowerCase().includes(searchString.toLowerCase()) ||
        ev.month.toLowerCase().includes(searchString.toLowerCase()) ||
        ev.description.toLowerCase().includes(searchString.toLowerCase())
      );
    });

    setEventsList(searchResult);
  };

  const eventClass = (event, index) => {
    return (
      <div
        onClick={() => getEventDetails(event)}
        key={index}
        className={
          event.isRegistered ? classes.registeredEvent : classes.eventList
        }
      >
        <div>
          <span className={classes.eventDate}>
            <Typography variant="h5"> {event.day}</Typography>
            <Typography variant="subtitle1" className={classes.paddingLeft}>
              {' '}
              {event.month}
            </Typography>
          </span>
        </div>
        <Typography variant="subtitle1" className={classes.title}>
          {' '}
          {event.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {' '}
          {event.description}
        </Typography>
        {event.location != null && (
          <Typography variant="subtitle1" className={classes.description}>
            {t('Location')}:- {event.location}
          </Typography>
        )}
      </div>
    );
  };

  useEffect(() => {
    setEventsList(props.eventsList);
    setInitialEventsList(props.eventsList);
  }, [props.eventsList]);

  const toggleEventsHandler = event => {
    const registered = event.target.checked;
    setRegisteredEvents(registered);
    const filter = registered ? 1 : 0;
    props.getEventList(filter);
  };

  const getEventDetails = event => {
    history.push(`/${Routes.event}/` + event.id);
  };

  return (
    <div className={classes.topView}>
      <div className={classes.topContainer}>
        <Typography className={classes.eventHeading}>
          {t('headings:Upcoming_Events')}
        </Typography>
        <div className={classes.switch}>
          <Typography>{t('labels:All')}</Typography>
          <MuiThemeProvider theme={theme}>
            <Switch
              checked={registeredEvents}
              onChange={toggleEventsHandler}
              name="checkedAll"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              color="primary"
            />
          </MuiThemeProvider>
          <Typography>{t('labels: Registered')}</Typography>
        </div>
      </div>

      <div className={classes.SearchBoxContainer}>
        <SearchBox searchHandler={searchEventsHandler} />
      </div>
      <div className={classes.eventListContainer}>
        {eventsList != null &&
          eventsList.map((event, index) => {
            return index < 4 ? eventClass(event, index) : null;
          })}

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {eventsList != null &&
            eventsList.map((event, index) => {
              return index > 3 ? eventClass(event, index) : null;
            })}
        </Collapse>

        {eventsList != null && eventsList.length > 4 ? (
          <Typography
            variant="subtitle2"
            onClick={handleExpandClick}
            className={classes.typo}
          >
            {expanded ? t('Show_Less') : t('Show_More')}
          </Typography>
        ) : null}
      </div>
    </div>
  );
}
