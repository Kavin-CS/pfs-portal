import React, { useEffect, useState } from 'react';
import { Box, Typography, makeStyles, Grid, Paper } from '@material-ui/core';
import calendarIcon from '../../../assets/icons/Calendar.svg';
import backIcon from '../../../assets/icons/Chevronleft.svg';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import {
  getEventDetails,
  registersEvent,
  unRegistersEvent,
} from '../../../utils/ApiService';
import KenSnackbar from '../../../components/KenSnackbar/index';
import kenColors from '../../../utils/themes/KenColors';
import { getUserDetails } from '../../../utils/helpers/storageHelper';
import KenLoader from '../../../components/KenLoader/index';
import Routes from '../../../utils/routes.json';
import KenButton from '../../../global_components/KenButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './calendar.css';
const BootstrapButton = withStyles(theme => ({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '14px',
    color: theme.palette.KenColors.primary,
    padding: '6px 12px',
    border: `1px solid ${theme.palette.KenColors.neutral160}`,
    backgroundColor: theme.palette.KenColors.background,
    '&:hover': {
      borderColor: kenColors.borderColor,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: kenColors.borderColor,
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '1px 6px',
    },
  },
}))(Button);

const Online = withStyles(theme => ({
  root: {
    boxShadow: 'none',
    textTransform: 'capitalize',
    fontSize: '12px',
    color: '#0747A6',
    padding: '8px',
    backgroundColor: theme.palette.KenColors.tertiaryBlue50,
    // '&:hover': {
    //   borderColor: kenColors.borderColor,
    //   boxShadow: 'none',
    // },
    // '&:active': {
    //   boxShadow: 'none',
    //   backgroundColor: kenColors.borderColor,
    //   borderColor: kenColors.eventBorderColor,
    // },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '90%',
  },
  grid: {
    height: '100%',
  },
  avtar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paperStat: {
    height: '100%',
    padding: '16px 16px 16px 16px',
  },
  heading: {
    fontSize: '24px',
    color: theme.palette.KenColors.neutral900,
    fontWeight: 600,
    padding: '8px',
    marginTop: 8,
    [theme.breakpoints.only('xs')]: {
      fontSize: '16px',
    },
  },
  img: {
    height: '32px',
    width: '32px',
    color: `${theme.palette.KenColors.primary}`,
    [theme.breakpoints.only('xs')]: {
      width: '24px',
      height: '24px',
    },
  },
  para1: {
    fontSize: '12px',
    padding: '8px 12px',
    color: theme.palette.KenColors.primary,
  },
  faq: {
    fontSize: '14px',
    fontWeight: 600,
    color: theme.palette.KenColors.neutral1700,
  },
  margin: {
    margin: theme.spacing(1),
    textTransform: 'capitalize',
    fontWeight: 600,
  },
  registerBtn: {
    textAlign: 'end',
  },
  timeWrap: {
    marginLeft: 12,
  },
  subHeading: {
    fontSize: '14px',
    fontWeight: '600',
    color: `${theme.palette.KenColors.neutral400}`,
  },
  name: {
    fontSize: '12px',
    color: theme.palette.KenColors.neutral1700,
  },
  timeHeading: {
    color: `${theme.palette.KenColors.primary}`,
    fontSize: '40px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '24px',
    },
  },
  BackGround: {
    background: `linear-gradient(91.33deg, ${
      theme.palette.KenColors.tertiaryBlue75
    } 3.24%, ${theme.palette.KenColors.neutral40} 15.49%, ${
      theme.palette.KenColors.tertiaryBlue50
    } 38.98%, ${theme.palette.KenColors.secondaryPeach2} 95.61%)`,
  },
  back: {
    color: `${theme.palette.KenColors.primary}`,
    fontSize: '12px',
    paddingBottom: '16px',
    cursor: 'pointer',
  },
  time: {
    fontSize: '16px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '14px',
    },
  },
  accordionHeading: {
    color: `${theme.palette.KenColors.primary}`,
    fontWeight: '600',
  },
}));

const getFirstName = value => {
  const nameSplitArray = value.split(' ');
  const firstName = nameSplitArray[0];
  const name = firstName.charAt(0);
  return name;
};

export default function EventDetails(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [eventDetails, setEventDetails] = useState(null);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const { history } = props;
  const [eventRegister, setEventRegister] = useState('false');
  const [loader, setLoader] = React.useState(true);
  let userDetails = getUserDetails();

  const getEventData = async (eventId, ContactId) => {
    setLoader(true);
    try {
      const getEventData = await getEventDetails(eventId, ContactId);
      setEventDetails(getEventData);
      setEventRegister(getEventData.isSubscribed);
      setLoader(false);
    } catch (error) {
      showError();
      history.push(`/${Routes.events}`);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const unRegisterEvent = async () => {
    setLoader(true);

    try {
      const SubscriberList = eventDetails.Subscriber;
      const getUserSubscriberData = SubscriberList.find(
        x => x.ContactId === userDetails.ContactId
      );
      const event = await unRegistersEvent(getUserSubscriberData.Id);
      if (event.deleteResponse.result.success) {
        const textMessage =
          eventRegister === 'false'
            ? t('messages:Register_Successfully')
            : t('messages:UN_Register_Successfully');
        const eventDt = eventDetails;
        setEventDetails(eventDt);
        setSnackbarMessage(textMessage);
        setOpenSnackbar(true);
        setEventRegister('false');
      } else {
        showError();
      }
    } catch (error) {
      showError();
    }
    setLoader(false);
  };

  const showError = () => {
    setLoader(false);
    setOpenSnackbar(true);
    setSnackbarSeverity('error');
    setSnackbarMessage(t('Something_Wrong'));
  };

  const registerEventHandler = async () => {
    try {
      setLoader(true);
      const eventId = props.match.params.id;
      const payload = {
        ContactId: userDetails.ContactId,
        EventId: eventId,
      };
      const event = await registersEvent(payload);
      if (event.createResponse.result.success) {
        const textMessage =
          eventRegister === 'false'
            ? t('messages:Register_Successfully')
            : t('messages:UN_Register_Successfully');
        const getEventData = await getEventDetails(
          eventId,
          userDetails.ContactId
        );
        setEventDetails(getEventData);
        setSnackbarMessage(textMessage);

        setEventRegister('true');
        setOpenSnackbar(true);
      } else {
        showError();
        history.push(`/${Routes.events}`);
      }
    } catch (error) {
      showError();
      history.push(`/${Routes.events}`);
    }
    setLoader(false);
  };

  const registerEvent = async () => {
    eventRegister === 'false' ? registerEventHandler() : unRegisterEvent();
  };

  useEffect(() => {
    const eventId = props.match.params.id;
    getEventData(eventId, userDetails.ContactId);
  }, [eventRegister]);

  return (
    <Box className={classes.root}>
      <div>{loader && <KenLoader />}</div>

      <Typography
        className={classes.back}
        onClick={() => {
          history.push(`/${Routes.events}`);
        }}
      >
        <img src={backIcon} height="16px" />
        {t('translations:Back')}
      </Typography>
      {!loader && eventDetails != null && (
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={9} md={9}>
            <Paper className={classes.paperStat}>
              <Box
                p={1}
                display="flex"
                justifyContent="space-between"
                minHeight="80px"
                alignItems="center"
                className={classes.BackGround}
              >
                <Grid container alignItems="center">
                  <Grid item xs={6} sm={8} md={8}>
                    <Box className={classes.timeHeading}>
                      <Grid container>
                        <Grid item>
                          <img src={calendarIcon} className={classes.img} />
                          &nbsp;
                          {moment(eventDetails.StartDateTime).format('DD')}
                          <span className={classes.time}>
                            {moment(eventDetails.StartDateTime).format('MMM')},
                          </span>
                        </Grid>
                        <Grid item className={classes.timeWrap}>
                          <span className={classes.time}>
                            {moment(eventDetails.StartDateTime).format(
                              'hh:MM:a'
                            )}
                          </span>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={4}
                    className={classes.registerBtn}
                  >
                    {moment(eventDetails.StartDateTime).isBefore(moment()) ===
                      false && (
                      <KenButton
                        variant="secondary"
                        className={classes.margin}
                        onClick={() => {
                          setEventRegister('true');
                          registerEvent();
                        }}
                      >
                        {/* {t('translations:UnRegister')} */}
                        {eventRegister === 'true'
                          ? t('headings: UnRegister')
                          : t('headings:Register')}
                      </KenButton>
                    )}
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container>
                  <Grid item xs={9} sm={9} md={9}>
                    <Typography className={classes.heading}>
                      {eventDetails.Subject}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sm={3} md={3}>
                    <Box p={2} style={{ float: 'right' }}>
                      {/* <Online variant="contained" disableRipple>
                        {t('translations:Online')}
                      </Online> */}
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Typography className={classes.para1}>
                  {eventDetails.desc}
                </Typography>
              </Box>
              {/* <Box mt={4} p={1} className={classes.faq}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.accordionHeading}>
                      {t('translations:Faqs')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.accordionHeading}>
                      {' '}
                      {t('translations:Terms_&_Conditions')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography />
                  </AccordionDetails>
                </Accordion>
              </Box> */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Paper className={classes.paperStat}>
              <Box className={classes.subHeading}>
                {t('translations:Attendees')}
              </Box>
              {eventDetails.Subscriber.length > 0 &&
                eventDetails.Subscriber.map((item, index) => {
                  return (
                    <Box ml={1} key={index} className="profile">
                      <div id="profileImage">{getFirstName(item.Name)}</div>
                      <h4 className="profileText">{item.Name}</h4>
                    </Box>
                  );
                })}
            </Paper>
          </Grid>
        </Grid>
      )}

      <KenSnackbar
        message={snackbarMessage}
        severity={snackbarSeverity}
        autoHideDuration={5000}
        open={openSnackbar}
        handleSnackbarClose={handleSnackbarClose}
        position="Top-Right"
      />
    </Box>
  );
}
