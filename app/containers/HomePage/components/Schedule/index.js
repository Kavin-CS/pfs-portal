import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
  makeStyles,
  IconButton,
  useTheme,
} from '@material-ui/core';
import moment from 'moment';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import { getUserDetails } from '../../../../utils/helpers/storageHelper';
import TUICalendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import { rrulestr } from 'rrule';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './Schedule.css';
import { Link } from 'react-router-dom';
import tuiTheme from './tuiTheme';
import KenSnackbar from '../../../../components/KenSnackbar';
import {
  generateLink,
  onStartClass,
  onJoinClass,
  getDatesFromRrule,
  transFormRrule,
} from '../../../../utils/helpers/scheduleHelper';
import configContext from '../../../../utils/helpers/configHelper';
import { useTranslation } from 'react-i18next';
import Routes from '../../../../utils/routes.json';
import {
  KEY_USER_TYPE,
  KEY_DATE_FORMAT,
  KEY_STATUS,
} from '../../../../utils/constants';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ScheduleView from './ScheduleView';

const useStyles = makeStyles(theme => ({
  scheduler: {
    maxHeight: '45vh',
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
  iconButtons: {
    padding: 0,
  },
  headerItem: {
    flexGrow: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  popDetailsIcon: {
    width: 40,
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    margintop: 10,
  },
  popDetailsItem: {
    padding: '5px 0',
    alignItems: 'center',
  },
  popup: {
    position: 'absolute',
    zIndex: 2000,
    background: 'white',
    borderRadius: 5,
    maxWidth: 350,
    maxHeight: 350,
    right: 0,
    boxShadow:
      '0px 8px 5px rgba(23, 43, 77, 0.04), 0px 15px 12px rgba(23, 43, 77, 0.08)',
    [theme.breakpoints.only('xs')]: {
      left: '0 !important',
      maxWidth: 'none',
      margin: 'auto',
      heigh: '50vh',
    },
  },
  cardHeader: {
    [theme.breakpoints.only('sm')]: {
      fontSize: '13px !important',
    },
  },

  scheduleDay: {
    padding: '6px !important',
    [theme.breakpoints.only('sm')]: {
      padding: '3px 2px !important',
    },
  },
  scheduleLabel: {
    textAlign: 'end',
  },

  schedule: {
    color: 'yellow',
  },
  someClass: {},
  lessonLink: {
    color: theme.palette.KenColors.primary,
    fontSize: '16px',
  },
  title: { fontSize: 16, fontWeight: 600 },
}));

export default function Schedule(props) {
  const { toggleLoader, activityUrls } = props;
  const calRef = useRef();
  const popupRef = useRef();
  const classes = useStyles();
  const theme = useTheme();
  const { config } = useContext(configContext);
  const { t } = useTranslation();

  const schedulesRaw = props.data;
  //console.log('schedule: ', props.data);
  const [currentDate, setCurrentDate] = useState(
    moment().format(KEY_DATE_FORMAT)
  );
  const [schedules, setschedules] = useState();
  const [popupStyles, setpopupStyles] = useState({});
  const [currentSchedule, setCurrentSchedule] = useState();
  const [title, setTitle] = useState('TODAY');
  // let schedules = [];
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [bbbLink, setbbbLinks] = useState();
  const [activityUrl, setActivityUrl] = useState();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = (severity, message) => () => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };

  const getActivityUrl = courseConnectionId => {
    let activity;
    if (Array.isArray(activityUrls) && activityUrls.length > 0) {
      activity = activityUrls.find(act => act.id === courseConnectionId);
      return activity.url || null;
    } else {
      return null;
    }
  };

  const calendars = [
    {
      name: 'Calendar',
      id: '1',
      color: '#ffffff',
      bgColor: `${theme.palette.KenColors.background}`,
      dragBgColor: '#00a9ff',
      borderColor: `${theme.palette.KenColors.primary}`,
    },
  ];

  const formatSchedule = (sch, start, end) => {
    return {
      calendarId: '1',
      category: 'time',
      isVisible: true,
      title: sch.hed__Course__cName,
      start: start || sch.hed__Start_Date__c + 'T' + sch.hed__Start_Time__c,
      end: end || sch.hed__End_Date__c + 'T' + sch.hed__End_Time__c,
      body: sch.meeting_link,
      raw: {
        ...sch,
      },
    };
  };

  // check for recurrence rule
  useEffect(() => {
    setCurrentDate(moment().format(KEY_DATE_FORMAT));
  }, []);
  useEffect(() => {
    if (schedulesRaw && schedulesRaw.length) {
      let finalSchedules = [];
      // console.log(schedulesRaw)
      schedulesRaw.forEach(el => {
        if (el.RRULE) {
          const rRule = getDatesFromRrule(
            transFormRrule(el.RRULE),
            new Date(currentDate)
          );
          console.log(rRule, transFormRrule(el.RRULE));
          if (rRule.length > 0) {
            const start =
              moment(rRule[0]).format(KEY_DATE_FORMAT) +
              'T' +
              el.hed__Start_Time__c.substring(0, 8);
            const end =
              moment(rRule[0]).format(KEY_DATE_FORMAT) +
              'T' +
              el.hed__End_Time__c.substring(0, 8);
            finalSchedules.push(formatSchedule(el, start, end));
          }
        } else {
          finalSchedules.push(formatSchedule(el));
        }
      });

      setschedules(finalSchedules);
      // schedules = finalSchedules;
      console.log(finalSchedules);
    }
  }, [currentDate, schedulesRaw]);

  // TODO: replace with redux
  const user = getUserDetails();
  const onClickSchedule = e => {
    setActivityUrl(prev => {
      let courseId = e?.schedule?.raw?.Id;
      if (courseId) {
        return getActivityUrl(courseId);
      } else {
        return null;
      }
    });
    setbbbLinks(generateLink(e.schedule.raw, config));
    setCurrentSchedule(e.schedule);
    window.innerHeight <
    e.event.clientY + document.getElementById('popup').offsetHeight
      ? setpopupStyles({
          ...popupStyles,
          left: e.event.pageX,
          top: e.event.pageY - document.getElementById('popup').offsetHeight,
        })
      : setpopupStyles({
          ...popupStyles,
          left: e.event.pageX,
          top: e.event.pageY,
        });
  };

  const getCalendar = () => {
    return calRef && calRef.current ? calRef.current.getInstance() : null;
  };

  const updateCalendarDate = () => {
    const cDate = getCalendar()
      .getDate()
      .toDate();
    setschedules([]);
    setCurrentDate(moment(cDate).format(KEY_DATE_FORMAT));
    if (
      moment(cDate).format(KEY_DATE_FORMAT) ===
      moment()
        .subtract(1, 'days')
        .format(KEY_DATE_FORMAT)
    )
      setTitle('YESTERDAY');
    else if (
      moment(cDate).format(KEY_DATE_FORMAT) ===
      moment()
        .add(1, 'days')
        .format(KEY_DATE_FORMAT)
    )
      setTitle('TOMORROW');
    else if (
      moment(cDate).format(KEY_DATE_FORMAT) ===
      moment()
        .add(0, 'days')
        .format(KEY_DATE_FORMAT)
    )
      setTitle('TODAY');
    else {
      setCurrentDate(moment(cDate).format(KEY_DATE_FORMAT));
      setTitle('');
    }
  };

  const startClass = () => {
    toggleLoader(true);
    onStartClass(bbbLink, toggleLoader, config);
  };

  const joinClass = () => {
    toggleLoader(true);
    onJoinClass(
      bbbLink,
      handleSnackbarOpen(
        KEY_STATUS.warning,
        t('messages:Class_Has_Not_Started')
      ),
      toggleLoader
    );
  };

  useOutsideAlerter(popupRef, currentSchedule, setCurrentSchedule);
  return (
    <ScheduleView
      user={user}
      snackbarData={{ snackbarMessage, snackbarSeverity, openSnackbar }}
      handleSnackbarClose={handleSnackbarClose}
      getCalendar={getCalendar}
      updateCalendarDate={updateCalendarDate}
      title={title}
      currentDate={currentDate}
      calRef={calRef}
      schedules={schedules}
      onClickSchedule={onClickSchedule}
      config={config}
      popupStyles={popupStyles}
      popupRef={popupRef}
      currentSchedule={currentSchedule}
      setCurrentSchedule={setCurrentSchedule}
      startClass={startClass}
      joinClass={joinClass}
      bbbLink={bbbLink}
      activityUrl={activityUrl}
    />
  );
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, schedule, setCurrentSchedule) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && schedule) {
        console.log('outside: ', schedule);
        setCurrentSchedule(null);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, schedule]);
}
