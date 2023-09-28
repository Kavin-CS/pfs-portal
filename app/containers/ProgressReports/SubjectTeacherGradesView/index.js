import React, { useEffect, useState } from 'react';
import { Grid, Typography, useTheme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import KenClassList from '../../../global_components/KenClassList/index';
import KenHeader from '../../../global_components/KenHeader/index';
import KenButton from '../../../global_components/KenButton/index';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ExportIcon from '../../../assets/icons/ExportIcon.svg';
import AddCircleIcon from '../../../assets/icons/AddCircleIcon.svg';
import GreyExportIcon from '../../../assets/icons/ExportIconGrey.svg';

import ShareIcon from '@material-ui/icons/Share';
import Scholastic from './Components/Scholastic/index';
import {
  getStudentListDetails,
  postScholasticMainMarks,
  postScholasticMarks,
} from '../../../utils/ApiService';
import KenLoader from '../../../components/KenLoader';
import RatingsStatusCard from '../ReportsPage/Components/RatingsStatusCard';
import Avatar from '@material-ui/core/Avatar';
import TestAttendanceCard from '../ReportsPage/Components/TestAttendanceCard';
import CheckIcon from '@material-ui/icons/Check';
import { KEY_STATUS } from '../../../utils/constants';
import KenSnackBar from '../../../components/KenSnackbar';
import {
  getParentDetails,
  getUserDetails,
} from '../../../utils/helpers/storageHelper';

const useStyles = makeStyles(theme => ({
  toggleButtonGroupRoot: {
    maxHeight: '40px',
  },
  btnLabels: {
    fontSize: '14px',
    fontWeight: '600',
  },
  heading: {
    color: theme.palette.KenColors.neutral900,
    fontWeight: '600',
  },
  subHeading: {
    color: theme.palette.KenColors.neutral900,
    fontWeight: '400',
  },
  attendanceValue: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  attendanceTitle: {
    fontWeight: 'normal',
    fontSize: '12px',
  },
  attendance: {
    lineHeight: '120%',
    color: theme.palette.KenColors.tertiaryGreen48,
    minWidth: '80px',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topper: {
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '100%',
    color: theme.palette.KenColors.tertiaryBlue502,
    marginLeft: '6px',
  },
  highestMarks: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '120%',
    color: theme.palette.KenColors.tertiaryBlue502,
  },
  white: {
    color: theme.palette.KenColors.tertiaryBlue502,
    backgroundColor: theme.palette.KenColors.kenWhite,
  },
  item: {
    width: '100%',
  },
  headerBtn: {
    marginLeft: '10px',
    fontSize: '14px',
    fontWeight: '600',
  },
  switchLabel: {
    padding: '0px 5px',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '100%',
    textTransform: 'uppercase',
    color: theme.palette.KenColors.neutral400,
  },

  toggleButtonRoot: {
    maxHeight: '40px',
  },
  toggleButtonSelected: {
    backgroundColor: `${theme.palette.KenColors.primary} !important`,
    color: `${theme.palette.KenColors.kenWhite} !important`,
  },
}));

export default function SubjectTeacherGrades(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [view, setView] = React.useState('module');
  const [edit, setEdit] = React.useState(false);
  const [showSubmitHeader, setShowSubmitHeader] = React.useState(false);
  const [scholastic, setScholastic] = React.useState();
  const [loading, setLoading] = React.useState();
  const [tabIndex, setTabIndex] = React.useState();
  const [grades, setGrades] = React.useState();
  const [initialGrades, setInitialGrades] = React.useState();
  const [topper, setTopper] = React.useState();
  const [scholasticEditMarks, setScholasticEditMarks] = React.useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState(KEY_STATUS.success);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [courseOfferingId, setCourseOfferingId] = useState();
  const [updateData, setUpdateData] = useState(false);
  const [standard, setStandard] = useState();
  const [scholasticMainEditMarks, setScholasticMainEditMarks] = useState();
  const disabledBtn = true;
  const [validations, setValidations] = useState([]);
  const user = getUserDetails();
  const parent = getParentDetails();
  const [scholasticInitialData, setScholasticInitialData] = useState();

  const present = '';
  const absent = '';
  //   const present = '49.0';
  //   const absent = '51.0';
  const topperProfilePicture = '';
  //   const avg = '';
  //   const avgDifference = '';
  //   const avgStatus = '';
  //   const highestMarks = '';

  useEffect(() => {
    let topperOfTheTerm;
    let termData;
    if (tabIndex === 0) {
      termData = grades?.grades?.find(term => {
        return term.termName === 'Half-Yearly';
      });
    } else {
      termData = grades?.grades?.find(term => {
        return term.termName === 'Annual';
      });
    }
    topperOfTheTerm = termData?.students?.reduce(
      (prev, current) =>
        +prev.totalMarks > +current.totalMarks ? prev : current,
      {}
    );
    setTopper(topperOfTheTerm);
  }, [tabIndex, grades]);

  const handleAddGrades = () => {
    setEdit(true);
    setShowSubmitHeader(true);
    setView('list');
  };
  const handleAddGradesCancel = () => {
    setEdit(false);
    setShowSubmitHeader(false);
    setView('list');
    handleScholastic(initialGrades);
  };
  const handleExport = () => {
    console.log('exporting');
  };
  const handleShare = () => {
    console.log('sharing');
  };
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = (severity, message) => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };

  const getGradesOfTerm = term => {
    const gradesArray = [];
    term?.students?.map((course, index) => {
      const obj = {
        ...course,
        termName: term.termName,
        name: course.contactName,
        pp: course.PP,
        ma: course.ma,
        portfolio: course.portfolio,
        subEn: course.suben.consolidated,
        exam: course.writtenTest,
        totalMarks: course.totalMarks,
        average: course.classAverage,
        grade: course.grade,
        courseConnectionId: course.id,
        term: term.termName,
      };
      gradesArray.push(obj);
    });

    return gradesArray;
  };

  const getGradeColumnsOfTerm = term => {
    return {
      pp: '5M',
      ma: '5M',
      subEn: '5M',
      portfolio: `5M`,
      exam: `${term.termName}`,
    };
  };

  //ma

  const getBreakdown = data => {
    let obj = {};

    data.map((el, index) => {
      const key = `ma${index + 1}`;
      obj[key] = el.marksobtained;
    });

    return obj;
  };

  const getPp = data => {
    let obj = {};

    Array.isArray(data) &&
      data.map((el, index) => {
        const key = `pp${index + 1}`;
        obj[key] = el.marksobtained;
      });

    return obj;
  };

  const getSubEn = data => {
    let obj = {};

    data.map((el, index) => {
      const key = `subEn${index + 1}`;
      obj[key] = el.marksobtained;
    });

    return obj;
  };

  const getGradesBreakdown = term => {
    const gradesBreakdown = [];
    term?.students?.map((course, index) => {
      // console.log(course, 'course');
      const obj = {
        term: term?.termName,
        courseConnectionId: course.id,
        // subject: course.courseName,
        name: course.contactName,
        ma: course.ma.consolidated,
        ...getBreakdown(course?.ma?.breakdown),
        totalMa: course?.ma?.consolidated,
        maBreakdownMax: course?.ma?.breakdownMaxMarks,

        pp: course?.PP?.consolidated,
        ...getPp(course?.PP?.breakdown),
        totalPp: course?.PP?.consolidated,
        ppBreakdownMax: course?.PP?.breakdownMaxMarks,

        subEn: course?.suben?.consolidated,
        ...getSubEn(course?.suben?.breakdown),
        totalSubEn: course?.suben?.consolidated,
        subEnBreakdownMax: course?.suben?.breakdownMaxMarks,
      };
      gradesBreakdown.push(obj);
    });

    return gradesBreakdown;
  };

  const handleScholastic = response => {
    const data = response.map(el => {
      if (el.computerScience_Control === true) {
        return {
          term: `${el.termName} (${el.termStart} - ${el.termEnd})`,
          students: el.students.map(elem => {
            return {
              ...elem,
              name: elem.contactName,
              termName: el.termName,
              computerScience_Control: el.computerScience_Control,
              exam: elem.totalMarks,
              maxMarks: elem.maxMarks,
              subjectName: el.courseName,
              subjectMark: elem.totalMarks,
            };
          }),
        };
      } else {
        return {
          term: `${el.termName} (${el.termStart} - ${el.termEnd})`,
          students: el.students.map(elem => {
            return {
              ...elem,
              name: elem.contactName,
              gradeValue: elem.grade,
              termName: el.termName,
              // ratingsDifference: elem.ratingsDifference,
              // ratingText: elem.ratingText,
              // status: elem.status,
              // previousRatings: elem.previousRatings,
              subjectMark: elem.totalMarks,
              marksBreakdown: [
                {
                  testItem: 'Pen & Paper test (5M)',
                  testValue: elem?.PP?.consolidated,
                },
                {
                  testItem: 'Multiple Assessment (5M)',
                  testValue: elem?.ma?.consolidated,
                },
                {
                  testItem: 'Portfolio (5M)',
                  testValue: elem.portfolio,
                },
                {
                  testItem: 'Sub-enrichment (5M)',
                  testValue: elem?.suben?.consolidated,
                },
                {
                  testItem:
                    el.termName === 'Half-Yearly'
                      ? `Half yearly exam (${elem?.writtenTestMaxMarks}M)`
                      : `Annual exam (${elem?.writtenTestMaxMarks}M)`,
                  testValue: elem.writtenTest,
                },
              ],
            };
          }),
          grades: getGradesOfTerm(el),
          gradesColumnsHeaderData: getGradeColumnsOfTerm(el),
          gradesBreakdown: getGradesBreakdown(el),
        };
      }
    });
    setScholastic(data);
  };

  useEffect(() => {
    getReportCardDetailsFunc();
  }, [courseOfferingId, updateData]);

  const getReportCardDetailsFunc = () => {
    setLoading(true);
    getStudentListDetails(
      courseOfferingId,
      parent?.ContactId || user?.ContactId
    )
      .then(res => {
        setStandard(res.standard);
        setInitialGrades(res.grades);
        handleScholastic(res.grades);
        setLoading(false);
        setGrades(res);
        setTabIndex(0);
        setLoading(false);
      })

      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
      });
  };

  const getGradeData = data => {
    console.log('data from edit', data);
    const mainGrades = [];
    const gradesArr = [];
    data?.map(el => {
      el?.grades?.map(elem => {
        if (elem.computerScience_Control === true) {
          mainGrades?.push({
            Course_Connection: elem?.id,
            term_grade_type: elem?.termName,
            numerical_grade: elem?.totalMarks,
            maxmarks: elem?.maxMarks,
          });
        } else {
          gradesArr?.push({
            Course_Connection: elem?.courseConnectionId,
            term_grade_type: elem?.term,
            assessment_type: 'Portfolio',
            numerical_grade: elem?.portfolio,
            maxmarks: elem?.portfolioMaxMarks,
            Sequence: '1',
          });
          mainGrades?.push({
            Course_Connection: elem?.courseConnectionId,
            term_grade_type: elem?.term,
            numerical_grade: elem?.exam,
            maxmarks: elem?.writtenTestMaxMarks,
          });
        }
      });
    });
    setScholasticEditMarks(gradesArr);
    setScholasticMainEditMarks(mainGrades);
  };

  const getValidations = errors => {
    let arr = [];
    if (validations?.some(el => el.type === errors.type)) {
      validations?.map(el => {
        if (el.type === errors.type) {
          arr.push(errors);
        } else {
          arr.push(el);
        }
      });
    } else {
      let data = [...validations, errors];
      arr.push(...data);
    }
    console.log(arr);
    setValidations([...arr]);
  };

  const handleGradesSubmit = () => {
    // console.log(scholasticEditMarks, 'editMarks');
    if (!validations.every(el => el.error === false)) {
      handleSnackbarOpen('error', t('messages:Grades_Invalid'));
    } else {
      if (scholasticEditMarks.length > 0) {
        postScholasticMarks({ Grade: [...scholasticEditMarks] })
          .then(res => {
            if (res.success === true) {
              setEdit(false);
              setShowSubmitHeader(false);
              // getStudentListDetails(courseOfferingId);
              handleSnackbarOpen(
                'success',
                t('messages:Marks_has_been_successfully_updated')
              );
              getReportCardDetailsFunc();
            }
          })
          .catch(err => {
            console.log(err);
            handleSnackbarOpen(
              'warning',
              t('messages:Some_error_occured_while_updating_the_marks')
            );
          });
      }

      if (scholasticMainEditMarks.length > 0) {
        postScholasticMainMarks({ Grade: [...scholasticMainEditMarks] })
          .then(res => {
            if (res) {
              // setUpdateData(!updateData);
              setEdit(false);
              setShowSubmitHeader(false);
              handleSnackbarOpen(
                'success',
                t('messages:Marks_has_been_successfully_updated')
              );
              // getStudentListDetails(courseOfferingId);
              getReportCardDetailsFunc();
            }
          })
          .catch(err => {
            console.log(err);
            handleSnackbarOpen(
              'warning',
              t('messages:Some_error_occured_while_updating_the_marks')
            );
          });
      }
    }
  };

  return (
    <>
      {loading && <KenLoader />}

      <Box data-testid="subTeacherClasses-page">
        <KenClassList
          title={t('headings:Grades')}
          listTitle={t('headings:Your_Classes')}
          setCourseOfferingId={setCourseOfferingId}
        />
        <Grid container spacing={1}>
          <Grid item md={3}>
            <Box mt={3}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item className={classes.item}>
                  <Box>
                    <TestAttendanceCard present={present} absent={absent} />
                  </Box>
                </Grid>
                <Grid item className={classes.item}>
                  <Box>
                    <RatingsStatusCard
                      variant="quaternary"
                      title="Student with highest marks"
                      cardAction={<></>}
                    >
                      {' '}
                      <Box p={2} className={classes.flexBetween}>
                        <Box className={classes.flex}>
                          <Avatar
                            alt="user"
                            src={topperProfilePicture}
                            className={classes.white}
                          >
                            {topper?.contactName && topper.contactName[0]}
                          </Avatar>
                          <Typography className={classes.topper}>
                            {topper?.contactName}
                          </Typography>
                        </Box>
                        <Typography className={classes.highestMarks}>
                          {' '}
                          {topper?.totalMarks || '00.00'}
                        </Typography>
                      </Box>
                    </RatingsStatusCard>
                  </Box>
                </Grid>
                {/* <Grid item className={classes.item}>
                <Box>
                  <RatingsStatusCard
                    variant="primary"
                    title="Class average marks"
                    cardAction={<></>}
                    boldText={avg || '--.--'}
                    ratings={avgDifference}
                    status={avgStatus}
                    ratingsText={'Avg up by '}
                  />
                </Box>
              </Grid> */}
              </Grid>
            </Box>
          </Grid>
          <Grid item md={9}>
            <Box mt={1}>
              {!showSubmitHeader && (
                <Box mb={1}>
                  <KenHeader
                    title={
                      <Typography className={classes.heading}>
                        {t('headings:General_Details')}
                        {/* <Typography
                          component="span"
                          className={classes.subHeading}
                          data-testid="academicYear"
                        >
                          {' ' + t('headings:General_Details_For') + ' '}{' '}
                          {`${reportCardDetails?.class} ${reportCardDetails?.section}`}

                        </Typography> */}
                      </Typography>
                    }
                  >
                    <Box className={classes.toggleButtonGroup}>
                      <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleChange}
                        classes={{ root: classes.toggleButtonGroupRoot }}
                      >
                        <ToggleButton
                          value="module"
                          aria-label="module"
                          classes={{
                            root: classes.toggleButtonRoot,
                            selected: classes.toggleButtonSelected,
                          }}
                        >
                          <ViewModuleIcon />
                        </ToggleButton>
                        <ToggleButton
                          value="list"
                          aria-label="list"
                          classes={{
                            root: classes.toggleButtonRoot,
                            selected: classes.toggleButtonSelected,
                          }}
                        >
                          <ViewListIcon />
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                    <KenButton
                      disabled={true}
                      variant="secondary"
                      startIcon={<ShareIcon />}
                      className={[classes.headerBtn, classes.btnLabels].join(
                        ' '
                      )}
                      onClick={handleShare}
                      label={t('labels:Share')}
                    />
                    <KenButton
                      disabled={true}
                      variant="secondary"
                      startIcon={
                        disabledBtn ? (
                          <img src={GreyExportIcon} />
                        ) : (
                          <img src={ExportIcon} />
                        )
                      }
                      className={[classes.headerBtn, classes.btnLabels].join(
                        ' '
                      )}
                      onClick={handleExport}
                      label={t('labels:Export')}
                    >
                      {t('labels:Sign_Report_Card')}
                    </KenButton>
                    <KenButton
                      variant="primary"
                      startIcon={<img src={AddCircleIcon} />}
                      className={[classes.headerBtn, classes.btnLabels].join(
                        ' '
                      )}
                      onClick={handleAddGrades}
                      label={t('labels:Add_Grades')}
                    >
                      {t('labels:Sign_Report_Card')}
                    </KenButton>
                  </KenHeader>
                </Box>
              )}
              {showSubmitHeader && (
                <Box mb={1}>
                  <KenHeader
                    title={
                      <Typography className={classes.heading}>
                        {t('headings:General_Details')}
                        {/* <Typography
                          component="span"
                          variant="subtitle2"
                          className={classes.subHeading}
                          data-testid="academicYear"
                        >
                          {t('headings:General_Details_For') + ' '}{' '}
                          {`${reportCardDetails?.class} ${reportCardDetails?.section}`}

                        </Typography> */}
                      </Typography>
                    }
                  >
                    <KenButton
                      variant="secondary"
                      className={[
                        classes.headerBtn,
                        classes.btnLabels,
                        classes.redText,
                      ].join(' ')}
                      onClick={handleAddGradesCancel}
                      label={t('labels:Cancel')}
                    />
                    <KenButton
                      variant="primary"
                      startIcon={<CheckIcon />}
                      className={[classes.headerBtn, classes.btnLabels].join(
                        ' '
                      )}
                      onClick={handleGradesSubmit}
                      label={t('labels:Submit')}
                    />
                  </KenHeader>
                </Box>
              )}
              <Box className={classes.gradeDetails}>
                <Box className={classes.items}>
                  {scholastic && (
                    <Scholastic
                      data={scholastic}
                      standard={standard}
                      view={view}
                      edit={edit}
                      getValidations={getValidations}
                      tabIndex={tabIndex}
                      setTabIndex={setTabIndex}
                      courseOfferingId={courseOfferingId}
                      getGradeData={getGradeData}
                      setUpdateData={setUpdateData}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <KenSnackBar
        message={snackbarMessage}
        severity={snackbarSeverity}
        autoHideDuration={2000}
        open={openSnackbar}
        handleSnackbarClose={handleSnackbarClose}
        position="Bottom-Right"
      />
    </>
  );
}
