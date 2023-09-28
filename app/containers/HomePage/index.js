/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, makeStyles, Button } from '@material-ui/core';
import Schedule from './components/Schedule/index';
import {
  getSchedule,
  getStudentDetails,
  getAllCourses,
  getAccountDetails,
  getCourses,
  getStudents,
  facultyActivities,
  StudentActivities,
} from '../../utils/ApiService';

import { getUserDetails } from '../../utils/helpers/storageHelper';
import '../App/styles.scss';
import KenLoader from '../../components/KenLoader';
import { KEY_USER_TYPE, KEY_SEVERITY, KEY_STATUS } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import context from '../../utils/helpers/context';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import history from '../../utils/history';
import fbAnalytics from '../../utils/Analytics';
import configContext from '../../utils/helpers/configHelper';
import MyTask from './components/MyTask';
import UpcomingEvents from './components/UpcomingEvents';
import MyAssessments from './components/MyAssessments';
import InfoCards from './components/InfoCards';

const useStyles = makeStyles(theme => ({
  root: {
    // minHeight: '100vh',
    [theme.breakpoints.only('xs')]: {
      padding: '0px 0px 20px 0px',
    },
  },
  grid: {
    [theme.breakpoints.only('xs')]: {
      margin: '0px 0px 0px -8px',

      '& > .MuiGrid-item': {
        padding: 8,
      },
    },
  },
  cardHandler: {
    position: 'relative',
    height: '100%',
  },
  maskWrap: {
    position: 'relative',
    height: '100%',
  },
}));

export default function HomePage(props) {
  const { handleLoader, handleSnackbarOpen } = React.useContext(context);
  const { config } = React.useContext(configContext);
  const { t } = useTranslation();
  const classes = useStyles();
  const { drawerChanges } = props;
  const [schedule, setSchedule] = useState();
  const [user, setUser] = useState();

  const [grade, setGrade] = useState();
  const [assignments, setAssignments] = useState();
  const [assessments, setAssessments] = useState();
  const [student, setStudent] = useState();
  const [flag, setFlag] = useState(true);
  const [activityUrls, setActivityUrls] = useState();

  //state for loader
  const [loading, setLoading] = React.useState(false);

  const toggleLoader = val => {
    setLoading(val);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseLater = () => {
    setOpen(false);
  };

  const handleClose = () => {
    history.push('/accountDetail');
    window.location.reload();
  };
  React.useEffect(() => {
    const ContactType = JSON.parse(localStorage.getItem('userDetails'))?.Type;
    if (config?.firebaseConfig) {
      fbAnalytics(config?.firebaseConfig, `${ContactType}_homepage`);
    }
  }, []);
  React.useEffect(() => {
    drawerChanges('show');
  }, []);
  let profile = getUserDetails();

  useEffect(() => {
    if (profile) {
      handleLoader(true);
      setUser(profile);
      getSchedule(profile.ContactId)
        .then(res => {
          let schedules = res?.filter(
            (ele, ind) =>
              ind ===
              res?.findIndex(
                elem =>
                  elem.CourseOfferingID === ele.CourseOfferingID &&
                  elem.Id === ele.Id
              )
          );
          setSchedule(schedules || []);
          handleLoader(false);
        })
        .catch(err => {
          console.log('error from schedules', err);
          handleLoader(false);
          handleSnackbarOpen(KEY_SEVERITY.info, t('Schedules_Not_Available'));
        });
    }
  }, []);

  useEffect(() => {
    if (profile) {
      const data = JSON.parse(sessionStorage.getItem('once'));
      if (data === null) {
        getAccountDetails(profile.ContactId).then(res => {
          // console.log(res);
          if (
            res.data.fatherDetails ||
            res.data.motherDetails ||
            res.data.guardianDetails
          ) {
            return;
          } else {
            handleClickOpen();
            sessionStorage.setItem('once', JSON.stringify(true));
          }
        });
      }
    }
  }, []);

  const getTotalStudentFacultyAttendanceById = async contactId => {
    let numberOfStudents = 0;
    let facultyAttendance = 0;
    try {
      const res = await getCourses(contactId);
      if (res.length > 0) {
        const promiseArray = res.map(item => {
          return getStudents(item.CourseOfferingID);
        });
        Promise.allSettled(promiseArray)
          .then(values => {
            values.forEach(item => {
              if (item?.status === 'fulfilled') {
                numberOfStudents = numberOfStudents + item?.value?.length;
              }
            });
            setStudent(numberOfStudents);
          })
          .catch(error => {
            console.error('Error from promise.all', error);
          });
        res.forEach(ele => {
          facultyAttendance =
            facultyAttendance +
            !Number.isNaN(
              Number.parseFloat(ele.Percentage_of_classes_attended__c)
            )
              ? ele.Percentage_of_classes_attended__c
              : 0;
        });
        // setAttendance(
        //   res?.length ? Math.ceil(facultyAttendance / res.length) : 0
        // );
      }
    } catch (err) {
      console.log('Error in getStudents', err);
    }
  };

  React.useEffect(() => {
    if (user) {
      if (user.Type === KEY_USER_TYPE.faculty) {
        getTotalStudentFacultyAttendanceById(user.ContactId);
      } else {
        handleLoader(true);
        const userDetails = getUserDetails();
        getStudentDetails(userDetails.ContactId)
          .then(res => {
            handleLoader(false);

            const current =
              res.Program_Enrollment.find(item => item.Status === 'Current') ||
              res.Program_Enrollment[0];
            getAllCourses(userDetails.ContactId, current.Id)
              .then(resp => {
                handleLoader(false);
                const a = { ...Object.values(resp) };
                console.log('a: === ', a);
                let total = 0;
                let gradeTotal = 0;
                if (a[0]) {
                  a[0].forEach(el => {
                    total =
                      total + el.Percentage_of_classes_attended__c ==
                      ('null' || 'undefined')
                        ? 0
                        : el.Percentage_of_classes_attended__c;
                    gradeTotal =
                      gradeTotal +
                      (el.hed__Grade__c == 'null' || 'undefined'
                        ? 0
                        : el.hed__Grade__c);
                  });
                }
                // setAttendance(
                //   a[0]?.length ? Math.ceil(total / a[0].length) : 0
                // );
                setGrade(
                  a[0]?.length ? Math.ceil(gradeTotal / a[0].length) : 0
                );
                handleLoader(false);
              })
              .catch(err => {
                console.log('All courses: ', err);
                handleLoader(false);
              });
          })
          .catch(err => {
            console.log('Student Details: ', err);
            handleLoader(false);
            handleSnackbarOpen(
              KEY_SEVERITY.info,
              t('Attendance_Not_Available')
            );
          });
      }
    }
  }, [user]);

  React.useEffect(() => {
    if (
      user &&
      user.Type === KEY_USER_TYPE.faculty &&
      (schedule && schedule.length > 0)
    ) {
      const promiseArray = schedule.map(item => {
        return facultyActivities(user.ContactId, item.Id);
      });
      const activityLinks = [];
      const newAssignment = [];
      const newAssesment = [];
      Promise.allSettled(promiseArray)
        .then(values => {
          if (values && values.length > 0) {
            values.forEach(item => {
              //   if (item.status == !KEY_STATUS.failed) {
              if (
                item?.value?.status != KEY_STATUS.failed &&
                item?.status === 'fulfilled'
              ) {
                item?.value?.courses?.forEach(el => {
                  let subject = el?.fullname;
                  if (el?.activities?.assignment) {
                    el?.activities?.assignment?.forEach(ele => {
                      newAssignment.push({ ...ele, subject });
                    });
                  }
                  if (el?.activities?.quizzes) {
                    el?.activities?.quizzes?.forEach(ele => {
                      newAssesment.push({ ...ele, subject });
                    });
                  }
                  if (el?.url) {
                    activityLinks.push({
                      subject: el?.fullname,
                      url: el?.url,
                      id: el?.connectionid,
                    });
                  }
                });
              }
              setActivityUrls(activityLinks);
              setAssignments(newAssignment);
              setAssessments(newAssesment);
            });
          } else {
            setActivityUrls([]);
            setAssignments([]);
            setAssessments([]);
          }
          setFlag(false);
        })
        .catch(err => {
          console.log('Error', err);
          setActivityUrls([]);
          setAssignments([]);
          setAssessments([]);
          setFlag(false);
        });
    } else if (user) {
      StudentActivities(user.ContactId, '')
        .then(res => {
          const activityLinks = [];
          let newAssignment = [];
          let newAssesment = [];
          res?.courses?.forEach(el => {
            let subject = el.fullname;
            if (el?.activities?.assignment) {
              el?.activities?.assignment.map(elem => {
                newAssignment.push({ ...elem, subject });
              });
            } else {
              newAssignment = [];
            }

            if (el?.activities?.quizzes) {
              el?.activities?.quizzes.map(elem => {
                newAssesment.push({ ...elem, subject });
              });
            } else {
              newAssesment = [];
            }

            if (el?.url) {
              activityLinks.push({
                subject: el.fullname,
                url: el.url,
                id: el.connectionid,
              });
            }
          });
          setActivityUrls(activityLinks);
          setAssignments(newAssignment);
          setAssessments(newAssesment);
          setFlag(false);
        })
        .catch(err => {
          setFlag(false);
          setAssignments([]);
          setAssessments([]);
          setActivityUrls([]);
          console.log('error in studentActivities', err);
        });
    }
  }, [user, schedule]);

  return (
    <>
      <Box>
        {loading && <KenLoader />}

        <Grid className={classes.root}>
          {/* cards */}
          <div className={classes.maskWrap}>
            <Grid container spacing={3} classes={{ root: classes.grid }}>
              {user && (
                <InfoCards
                  grade={grade}
                  assignments={assignments}
                  assessments={assessments}
                  student={student}
                />
              )}
            </Grid>
          </div>
          {/* Schedule, events, notifications */}

          {user ? (
            <Box mt={2}>
              <Grid container direction="column" spacing={3}>
              <Grid item container direction="row" md={12} spacing={2}>
                {/* Schedule */}
                <Grid item xs={12} sm={6} md={6}>
                    <Paper>
                      <Schedule
                        data={schedule}
                        toggleLoader={toggleLoader}
                        activityUrls={activityUrls}
                      />
                    </Paper>
                  </Grid>
                  {/* Upcoming Events  */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Paper className={classes.cardHandler}>
                      <UpcomingEvents user={user} />
                    </Paper>
                  </Grid>
                </Grid>
                <Grid item container direction="row" md={12} spacing={2}>
                  {/* Asignment */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Paper className={classes.cardHandler}>
                      <MyTask details={assignments} loading={flag} />
                    </Paper>
                  </Grid>
                  {/* Assesments */}
                  <Grid item xs={12} sm={6} md={6}>
                    <Paper className={classes.cardHandler}>
                      <MyAssessments details={assessments} loading={flag} />
                    </Paper>
                  </Grid>
                </Grid>

                {/* {user && user.Type === KEY_USER_TYPE.parent && <Events />} */}
              </Grid>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {'Account Details Pending !'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Dear Parent, please input your account details. Thanks.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseLater} color="primary">
                    Later
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          ) : (
            <KenLoader />
          )}
        </Grid>
      </Box>
    </>
  );
}
