/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Box, Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import KenSelect from '../../components/KenSelect/index';
import DetailCard from './components/details';
import Tabs from './components/tabs';
import {
  getStudentDetails,
  getFacultyDetails,
  getAllCourses,
} from '../../utils/ApiService';
import HealthDetail from '../../components/CardWidgets/health';
import Robot from '../../assets/icons/Chem 3.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import context from '../../utils/helpers/context';
import { KEY_SEVERITY } from '../../utils/constants';
import { getParentDetails } from '../../utils/helpers/storageHelper';
import ParentDetails from './components/parentDetails';
import configContext from '../../utils/helpers/configHelper';
import fbAnalytics from '../../utils/Analytics';
import { useAppContext } from '../../utils/contextProvider/AppContext';

const useStyles = makeStyles(theme => ({
  box1: {
    // maxWidth: 832,
    // minWidth: 400,
    position: 'relative',
  },
  healthGrid: {
    marginTop: theme.spacing(2),
  },
  grid: {
    minWidth: '13.8vw',
  },
  detailTitle1: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
    color: theme.palette.KenColors.neutral100,
    textTransform: 'uppercase',
  },
  back: {
    fontSize: '12px',
    '&:hover': {
      cursor: 'pointer',
    },
    marginLeft: '-8px',
  },
  iconBack: {
    height: 12,
  },
  loader: {
    minHeight: '100vh',
    minWidth: '100vh',
  },
}));

const health = [
  {
    title: 'Blood Group',
    titleDetails: 'Normal',
    image: Robot,
  },
  {
    title: 'Mental Helath',
    titleDetails: 'Normal',
    image: Robot,
  },
  {
    title: 'Medication',
    titleDetails: 'Albuterol, Levalbuterol',
    image: Robot,
  },
  {
    title: 'Injuries',
    titleDetails: 'Broken Leg',
    image: Robot,
  },
  {
    title: 'Allergies',
    titleDetails: 'Pollen, Gluten',
    image: Robot,
  },
];

function StudentDetailsPage(props) {
  const { t } = useTranslation();
  const {
    state: { config, sideNavigation },
    dispatch,
  } = useAppContext();
  const { handleLoader, handleSnackbarOpen } = React.useContext(context);
  const classes = useStyles();
  const [studentData, setStudentData] = React.useState();
  const [tabOptions, setTabOptions] = React.useState();
  const { contactId } = props.match.params;
  const [programid, setProgramId] = React.useState();
  const [getPrograms, setGetPrograms] = React.useState();
  // const [acedemicProgramId, setAcedemicProgramId] = React.useState();
  const [teacherDetails, setTeachersDetail] = React.useState();
  const [AcademicProgram, setAcademicProgram] = React.useState();

  React.useEffect(() => {
    const firebaseConfig = config && config.firebaseConfig;
    const ContactType = JSON.parse(localStorage.getItem('userDetails')).Type;
    if (firebaseConfig) {
      fbAnalytics(
        firebaseConfig,
        `${config.orgID}_${ContactType}_studentdetails`
      );
    }
  }, []);

  React.useEffect(() => {
    dispatch({ type: 'updateSideNavigation', value: false });
  }, []);

  const getStudentData = async () => {
    handleLoader(true);
    try {
      const res = await getStudentDetails(contactId);
      if (res && res.Program_Enrollment) {
        const array = res.Program_Enrollment.map(item => {
          return {
            label: item.Academic_Program,
            value: item.Id,
          };
        });
        setStudentData(res);
        setGetPrograms(array);
        const current =
          res.Program_Enrollment.find(item => item.Status === 'Current') ||
          res.Program_Enrollment[0];
        setAcademicProgram(current.Academic_Program);
        setProgramId(current.Id);
        // setAcedemicProgramId(current.hed__Account__c);
        const faculty = await getFacultyDetails(current.hed__Account__c);
        if (faculty) {
          setTeachersDetail(faculty);
        } else {
          handleLoader(false);
          handleSnackbarOpen(KEY_SEVERITY.error, t('Faculty_Not_Found'));
          console.log('Faculty not found');
        }
        const course = await getAllCourses(contactId, current.Id);
        if (course) {
          setTabOptions(course);
          handleLoader(false);
        } else {
          handleLoader(false);
          handleSnackbarOpen(KEY_SEVERITY.error, t('Course_Not_Found'));
        }
      } else {
        handleLoader(false);
        handleSnackbarOpen(KEY_SEVERITY.error, t('Student_Not_Found'));
      }
    } catch (err) {
      console.log('Error in Fetching student data', err);
      handleLoader(false);
      handleSnackbarOpen(KEY_SEVERITY.error, t('Student_Not_Found'));
    }
  };

  React.useEffect(() => {
    getStudentData();
  }, []);

  const onchange = async e => {
    const Id = e.target.value;
    setProgramId(Id);
    const obj = studentData.Program_Enrollment.find(o => o.Id === Id);
    setAcademicProgram(obj.Academic_Program);
    handleLoader(true);
    try {
      const faculty = await getFacultyDetails(obj.hed__Account__c);
      if (faculty) {
        setTeachersDetail(faculty);
      } else {
        handleLoader(false);
        handleSnackbarOpen(KEY_SEVERITY.error, t('Faculty_Not_Found'));
        console.log('Faculty not found');
      }
      const course = await getAllCourses(contactId, obj.Id);
      if (course) {
        setTabOptions(course);
        handleLoader(false);
      } else {
        handleLoader(false);
        handleSnackbarOpen(KEY_SEVERITY.error, t('Course_Not_Found'));
      }
    } catch (err) {
      console.log(err);
      handleLoader(false);
    }
  };

  const handleClick = () => {
    dispatch({ type: 'updateSideNavigation', value: true });
    props.history.goBack();
  };

  const userParent = getParentDetails();

  return (
    <Box>
      <div
        onClick={handleClick}
        style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
      >
        <ArrowBackIcon className={classes.iconBack} color="primary" />
        <Typography className={classes.back} color="primary">
          {t('Back')}
        </Typography>
      </div>

      {userParent && <ParentDetails userParent={userParent} />}

      <Grid container spacing={5} justify="flex-start">
        <Grid item md={3} sm={12} xs={12}>
          {studentData && (
            <DetailCard
              teacherData={teacherDetails}
              data={studentData}
              AcademicProgram={AcademicProgram}
            />
          )}
        </Grid>

        <Grid item md={9} sm={12} xs={12}>
          {getPrograms && getPrograms.length > 1 ? (
            <Grid item xs={12} sm={12} md={4}>
              {programid && (
                <KenSelect
                  options={getPrograms}
                  value={programid}
                  onChange={onchange}
                  label={t('labels:Change_Class')}
                />
              )}
            </Grid>
          ) : (
            ''
          )}
          <Grid container direction="column">
            <Grid item>
              <Box className={classes.box1}>
                {tabOptions && <Tabs value={tabOptions} />}
              </Box>
            </Grid>

            {/* <Grid container direction="column">
              <Grid item>
                {studentData && (
                  <Box className={classes.box1}>
                    <Paper style={{ padding: '16px', minWidth: '70vw' }}>
                      <Typography className={classes.detailTitle1}>
                        {t('headings:Health')}
                      </Typography>
                      <Grid
                        container
                        spacing={2}
                        className={classes.healthGrid}
                      >
                        {health.map(el => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={6}
                              className={classes.grid}
                            >
                              <HealthDetail data={el} />
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Paper>
                  </Box>
                )}
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withRouter(StudentDetailsPage);
