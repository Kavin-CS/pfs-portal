import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Calendar from './components/Calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import UpcomingEvents from './components/UpcomingEvents';
import EventsList from './components/EventsList';
import { KEY_DIRECTION } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import { getAllEvents, getAllRegisterEvents } from '../../utils/ApiService';
import moment from 'moment';
import KenCard from '../../global_components/KenCard';
import KenLoader from '../../components/KenLoader/index';
import { getUserDetails } from '../../utils/helpers/storageHelper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  customCalender: {
    width: '100%',
    border: 'none ',
  },
  carousel: {
    height: 240,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 240px',
  },
  btn: {
    color: theme.palette.KenColors.primary,
    background: theme.palette.KenColors.kenWhite,
    border: `1px solid ${theme.palette.KenColors.neutral60}`,
    borderRadius: '3px',
    position: 'absolute',
    top: '150px',
    left: '56px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
  },
  container: {
    position: 'absolute',
    top: '20px',
    paddingLeft: '20px',
    fontSize: '30px',
    color: theme.palette.KenColors.primary,
  },
  mainContainer: {
    height: 240,
    background: `linear-gradient(91.33deg, ${
      theme.palette.KenColors.tertiaryBlue75
    } 3.24%, ${theme.palette.KenColors.neutral40} 15.49%, ${
      theme.palette.KenColors.tertiaryBlue50
    } 38.98%, ${theme.palette.KenColors.secondaryPeach2} 95.61%)`,
    transform: `rotate(-180deg)`,
  },
  heading: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 15,
    fontWeight: 600,
    lineHeight: '20px',
  },
  left: {
    position: 'absolute',
    top: '45%',
    zIndex: 2,
    background: theme.palette.KenColors.kenWhite,
    width: '32px',
    height: '32px',
    opacity: 0.8,
    border: 'none',
    left: 10,
  },
  right: {
    position: 'absolute',
    top: '45%',
    zIndex: 2,
    background: theme.palette.KenColors.kenWhite,
    width: '32px',
    height: '32px',
    opacity: 0.8,
    border: 'none',
    right: 10,
  },
}));

export default function EventsPage(props) {
  // const localizer = momentLocalizer(moment) // or globalizeLocalizer

  const { t } = useTranslation();
  const classes = useStyles();
  const [eventsList, setEventsList] = useState(null);
  const [selectedDateEventList, setSelectedDateEventList] = useState(null);
  const [eventDates, setEventDates] = useState([]);
  const [loader, setLoader] = React.useState(true);

  const [events, setEvents] = React.useState([
    {
      title: 'AI in the ‘New Normal’',
      date: '27-09-2020',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
      imageUrl:
        'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
    },
    {
      title: 'Next Vision ‘2030’ ',
      date: '16-08-2020',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
      imageUrl:
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'Machine Learning And Robotics',
      date: '6-09-2020',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
      imageUrl:
        'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
    },
  ]);

  const getEventList = async value => {
    setLoader(true);

    let eventLists;
    const userDetails = getUserDetails();
    try {
      if (value === 1) {
        eventLists = await getAllRegisterEvents(userDetails.ContactId);
      } else {
        const getAllEventList = await Promise.allSettled([
          getAllEvents(),
          getAllRegisterEvents(userDetails.ContactId)
        ])
        const registerEvent = (getAllEventList[1].status === "fulfilled") ? getAllEventList[1].value : [];
        const allEvents = (getAllEventList[0].status === "fulfilled") ? getAllEventList[0].value : [];

        eventLists = allEvents.map(event => {
          const isRegistered = registerEvent.filter(
            x => x.EventId === event.Id
          );
          event.isRegistered = isRegistered.length > 0 ? true : false;
          return event;
        });
      }

      if (eventLists != null) {
        const currentDate = moment().unix();
        const eventDates = [];
        const removePastEventList = [];
        let sortedEvent = eventLists.sort(
          (a, b) => Date.parse(a.StartDateTime) - Date.parse(b.StartDateTime)
        );
        const eventMapping = sortedEvent.map((event, i) => {
          eventDates.push({
            calendarId: '1',
            category: 'allday',
            isVisible: true,
            title: event.Subject,
            id: value === 1 ? event.EventId : event.Id,
            location: event.Location,
            body: event.Description,
            start: new Date(event.StartDateTime),
            end: new Date(event.StartDateTime),
          });
          const eventDateInUnix = moment(event.StartDateTime).unix();
          const eventDetails = {
            title: event.Subject,
            day: moment(event.StartDateTime).format('DD'),
            month: moment(event.StartDateTime).format('MMM'),
            description: event.Description || '',
            id: value === 1 ? event.EventId : event.Id,
            isRegistered: event.isRegistered || false,
            location: event.Location,
          };

          if (eventDateInUnix >= currentDate) {
            removePastEventList.push(eventDetails);
          }

          return eventDetails;
        });
        setLoader(false);
        setEventsList([...removePastEventList]);
        setEventDates(eventDates);
      }
    } catch (error) {
      setLoader(false);
      setEventsList([]);
      setEventDates([]);
    }
  };

  useEffect(() => {
    getEventList();
  }, []);

  const renderArrow = direction => (onClickHandler, shouldBeEnabled, label) => {
    if (!shouldBeEnabled) {
      return;
    }

    return (
      <button
        type="button"
        onClick={onClickHandler}
        className={
          direction === KEY_DIRECTION.previous ? classes.left : classes.right
        }
      >
        {direction === KEY_DIRECTION.previous ? '<' : '>'}
      </button>
    );
  };

  const showEventDetails = event => {
    setSelectedDateEventList(null);
    const selectedEvent = [
      {
        title: event.title,
        eventDate: moment(event.start._date).format('DD MMM'),
        description: event.body,
        registered: true,
      },
    ];
    setSelectedDateEventList(selectedEvent);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <KenCard>
            <Carousel
              showThumbs={false}
              showStatus={false}
              renderArrowPrev={renderArrow(KEY_DIRECTION.previous)}
              renderArrowNext={renderArrow(KEY_DIRECTION.next)}
            >
              {events.map((event, index) => {
                return (
                  <>
                    <div className={classes.mainContainer} />
                    <div className={classes.container}>{event.title}</div>{' '}
                  </>
                );
              })}
            </Carousel>
          </KenCard>
        </Grid>

        <Grid item xs={12} md={8} lg={8} xl={8}>
          <div>{loader && <KenLoader />}</div>

          <KenCard>
            <UpcomingEvents
              eventsList={eventsList}
              getEventList={getEventList}
              history={props.history}
            />

            {eventsList != null && eventsList.length === 0 && (
              <Typography variant="subtitle1">
                {t('No_Events_Found')}
              </Typography>
            )}
          </KenCard>
        </Grid>

        <Grid item xs={12} md={4} lg={4} xl={4}>
          <KenCard>
            <Typography className={classes.heading}>
              {t('headings:Event_Calendar')}
            </Typography>

            <Calendar
              eventDates={eventDates}
              showEventDetails={showEventDetails}
            />

            {selectedDateEventList != null && (
              <EventsList eventsList={selectedDateEventList} />
            )}
          </KenCard>
        </Grid>
      </Grid>
    </div>
  );
}
