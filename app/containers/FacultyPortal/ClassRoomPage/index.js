/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useContext } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import moment from 'moment';
import Assigments from '../../../components/CardWidgets/Assignments';
import Assesments from '../../../components/CardWidgets/Assesments';
import Students from './components/Students';
import Feedback from './components/Feedback';
import { getColor } from '../../../utils/helpers/circularProgress';
import { getSchedule , facultyActivities } from '../../../utils/ApiService';
import { getUserDetails } from '../../../utils/helpers/storageHelper';
import classBackground from '../../../assets/icons/classBackground.svg';
import {
  generateLink,
  getDatesFromRrule,
  transFormRrule,
  onStartClass,
} from '../../../utils/helpers/scheduleHelper';
import KenSelect from '../../../global_components/KenSelect';
import KenLoader from '../../../components/KenLoader';
import configContext from '../../../utils/helpers/configHelper';
import ButtonIcon from '../../../assets/icons/Classroom.svg';
import { useTranslation } from 'react-i18next';
import { KEY_DATE_FORMAT, KEY_TIME_FORMAT , KEY_STATUS } from '../../../utils/constants';
import fbAnalytics from '../../../utils/Analytics';



var getAvailableHeight=screen.availHeight;
const useStyles = makeStyles(theme => ({
  modifyHight:{
    maxHeight:'60vh',
    overflow:'auto',
  },
  noClassWrap: {
    backgroundImage: `url(${classBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '80vh',
  },
  noClassContain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    // [theme.breakpoints.down('xs')]: {
    //   height: '40%',
    // },
  },
  noclassMain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // [theme.breakpoints.down('xs')]: {
    //   height: '40%',
    // },
  },
  contentWrap: {
    width: 'calc(100% - 45%)',
  },
  noClassLabel: {
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '30%',
    marginBottom: '20%',
    [theme.breakpoints.only('sm')]: {
      fontSize: '25px',
      marginTop: '25%',
      marginBottom: '15%',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      marginTop: '25%',
      marginBottom: '15%',
    },
  },
  viewLabel: {
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
}));

export default function ClassroomPage(props) {
  const [course, setCourse] = React.useState();
  const [curSchedules, setCurSchedules] = React.useState();
  const [currentCourse, setCurrentCourse] = React.useState();
  const [bbbLink, setbbbLinks] = React.useState();
  const [currentCourseID, setCurrentCourseID] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { config } = useContext(configContext);
  // const [config, setConfig] = React.useState();
  const [ID, setID] = React.useState();
  const classes = useStyles();

  const [assignments, setAssignments] = React.useState();
  const [assessments, setAssessments] = React.useState();
  const [flag,setFlag] = React.useState(true);

  const toggleLoader = val => {
    setLoading(val);
  };

  React.useEffect(() => {
    const ContactType = JSON.parse(localStorage.getItem('userDetails')).Type;
    if (config?.firebaseConfig) {
      fbAnalytics(config?.firebaseConfig, `${ContactType}_classroom`);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setCurrentCourseID(null);
    setCourse();
    setCurrentCourse();
    setID();

    if (props.location.state) {
      setCurSchedules(props.location.state.currentSchedule.raw);
      setbbbLinks(props.location.state.bbbLink);
      setCurrentCourseID(
        props.location.state.currentSchedule.raw.CourseOfferingID
      );
      setLoading(false);
      setID(props.location.state.currentSchedule.raw.Id);
    } else {
      let userDetails = getUserDetails();
      const cSch = [];
      const options = [];
      getSchedule(userDetails.ContactId)
        .then(res => {
          res.forEach(sch => {
            // sch has rule RRULE
            const sDates = getDatesFromRrule(
              transFormRrule(sch.RRULE),
              new Date(moment().format(KEY_DATE_FORMAT))
            );
            if (sDates.length > 0) {
              sch.eventDate = moment().format(KEY_DATE_FORMAT);
              sch.start = moment.utc(
                moment().format(KEY_DATE_FORMAT) +
                  'T' +
                  sch.hed__Start_Time__c.substring(0, 8)
              );

              sch.end = moment.utc(
                moment().format(KEY_DATE_FORMAT) +
                  'T' +
                  sch.hed__End_Time__c.substring(0, 8)
              );

              cSch.push(sch);
              options.push({
                value: sch.id,
                label: sch.Name,
                time: `${moment(sch.start).format(KEY_TIME_FORMAT)}-${moment(
                  sch.end
                ).format(KEY_TIME_FORMAT)}`,
              });
            }
          });
          if (cSch.length) {
            setbbbLinks(generateLink(cSch[0], config));
            setCourse(options);
            setCurrentCourse(options[0].value);
            setCurrentCourseID(cSch[0].CourseOfferingID);
            setCurSchedules(cSch);
            setID(cSch[0].Id);
          }
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [props.location.state, config]);

  const handleCourseChange = event => {
    setCurrentCourse(event.target.value);
    curSchedules.forEach(el => {
      if (el.id === event.target.value) {
        setbbbLinks(generateLink(el, config));
        console.log(generateLink(el, config));
        setCurrentCourseID(el.CourseOfferingID);
        setID(el.Id);
      }
    });
    console.log(currentCourse);
  };

  const startClass = () => {
    toggleLoader(true);
    onStartClass(bbbLink, toggleLoader, config);
  };

  const { t } = useTranslation();

  React.useEffect(() => {
    if(ID){
      const contactID = getUserDetails().ContactId;
      const connectionId = ID;
      setFlag(true);
      facultyActivities(contactID, connectionId)
        .then(res => {
          if (res.status === KEY_STATUS.failed) {
            setAssignments();
            setAssessments();
          } else {
            setAssignments(res.courses[0].activities.assignment);
            setAssessments(res.courses[0].activities.quizzes)
          }
          setFlag(false);
        })
        .catch(err => {
          console.log('error in facultyActivities', err);
          setFlag(false);
        });
    }
  }, [ID]);

  return (
    <Box> 
      <Grid container spacing={4}>              
        <Grid item xs={12} md={5} sm={6}>
          {props.location.state ? (
              <Typography variant="h6">
                  {curSchedules && curSchedules.Name}
                </Typography>
              ) : (
                  course && currentCourse && (
                    <KenSelect
                      required={true}
                      options={course}
                      value={currentCourse}                      
                      onChange={e => {
                        handleCourseChange(e);
                      }}
                    />
                  )              
            )}
        </Grid>            
        <Grid item xs={12} md={7} sm={6} spacing={4}>
          {(curSchedules || currentCourse) && (
                <Button
                  variant="contained"
                  target="blank"
                  color="primary"
                  style={{ float: 'right' }}
                  startIcon={<img src={ButtonIcon} />}
                  onClick={() => {
                    startClass();
                  }}
                >
                  {t('labels:Start_Class')}
                </Button>
            )}
        </Grid>
      </Grid>
        {loading && <KenLoader />}
        <div></div>
        { currentCourseID && ID ?(         
            <Grid container spacing={4} mt={2}>
              <Grid item xs={12} md={4} sm={6} >{currentCourseID && (
                <Grid >
                  <Card>
                    <CardHeader title={<Typography align="center" color="primary">{t('headings:Students')}{' '}</Typography>} />
                    <div className={classes.modifyHight}>                  
                      <Students  courseId={currentCourseID} date={moment()} id={ID} />
                    </div>
                  </Card>
                </Grid>
                
              )}
              </Grid>
              <Grid item xs={12} md={4} sm={6} >

              <Card>
                  <CardHeader
                      title={<Typography align="center" color="primary">{t('headings:Assignments')}</Typography>}      
                  />
                  <Paper className={classes.modifyHight}>{ID && <Assigments details={assignments} loading={flag} />}</Paper>
                  
                 </Card> 
              
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Card>
                  <CardHeader
                      title={<Typography align="center" color="primary">{t('headings:Assesments')}</Typography>}      
                  />
                  
                  <Paper className={classes.modifyHight}>
                  
                  {ID && <Assesments getColor={getColor} details={assessments} loading={flag} />}
                </Paper>
                  
                 </Card> 
          
                
              </Grid>
            </Grid>
        ):(
          <Grid className={classes.noclassMain}>
          <div className={classes.noClassWrap}>
            {!loading && (
              <Grid className={classes.noClassContain}>
                <Grid className={classes.contentWrap}>
                  <Typography variant="h1" className={classes.noClassLabel}>
                    {t('messages:You_have_no_Classes_Scheduled_for_Today')}
                  </Typography>
                  <Typography variant="h6" className={classes.viewLabel}>
                    {t(
                      'messages:To_view_the_Class_for_another_day_Select_the_class_from_the_home_Schedule_section'
                    )}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </div>
        </Grid>
        )}     
                
      
      {/* Feedback */}
      <Box mt={2} position="relative">
          {/* <Feedback /> */}
        </Box>      
    </Box>
  );
}
