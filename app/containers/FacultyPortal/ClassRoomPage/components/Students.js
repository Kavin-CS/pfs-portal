import React, { useState, useEffect } from 'react';
import {
  Paper,
  Box,
  Checkbox,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';
import { getStudents, postAttendance } from '../../../../utils/ApiService';
import classNames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import moment from 'moment';
import ArrowForwardIosIcon from '../../../../assets/icons/Chevronright.svg';
import { Link } from 'react-router-dom';
import KenSnackbar from '../../../../components/KenSnackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next';
import { KEY_STATUS } from '../../../../utils/constants';
import Routes from '../../../../utils/routes.json';
import { getUserDetails } from '../../../../utils/helpers/storageHelper';

const GreenCheckbox = withStyles(theme => ({
  root: {
    color: theme.palette.KenColors.neutral60,
    '&$checked': {
      color: theme.palette.KenColors.tertiaryGreen300,
    },
  },
  checked: {},
}))(props => <Checkbox color="default" {...props} />);
const array = [1, 2, 3, 4];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  header: {
    fontSize: '16px',
    fontWeight: '600',
    color: theme.palette.KenColors.neutral100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    // // maxHeight: 500,
    // overflow: 'auto',
  },
  Name: {
    fontSize: '14px',
    color: theme.palette.KenColors.primary,
  },
  NameID: {
    fontSize: '12px',
    lineHeight: '14px',
    color: theme.palette.KenColors.neutral400,
  },
  NameID2: {
    fontSize: '12px',
    color: theme.palette.KenColors.neutral400,
    textAlign: 'right',
    margin: '10px 0px',
  },
  circle: {
    width: '36px',
    height: '36px',
    lineHeight: '33px',
    borderRadius: '55%',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    background: `${theme.palette.KenColors.neutral100}`,
  },
  subHeading: {
    fontSize: 14,
    color: theme.palette.KenColors.neutral100,
    textAlign: 'center',
  },
  SelectAll: {
    marginRight: '10px',
    color: '#505F79',
    fontSize: '14px',
  },
}));

export default function Students(props) {
  const { t } = useTranslation();
  const { courseId, date ,id } = props;
  const [students, setStudents] = useState();
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [allCheck, setAll] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const classes = useStyles();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState(KEY_STATUS.success);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const userDetails = getUserDetails();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = (severity, message) => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      if (courseId) {
        try {
          const res = await getStudents(courseId);
          res.forEach(item => {
            item.ischecked = false;
          });
          setStudents(res);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      }
    }
    fetchData();
  }, [courseId]);

  const handleSelect = async (e, student) => {
    if (e.target.name === 'checkAll') {
      var list = [];
      student.forEach(element => {
        element.ischecked = e.target.checked;
        list.push(element);
      });
      if (e.target.checked) {
        setSelectedStudents(list);
      } else {
        setSelectedStudents([]);
      }

      setAll(e.target.checked);
    } else {
      students.find(item => item.ContactId === student.ContactId).ischecked =
        e.target.checked;
      if (e.target.checked) {
        setSelectedStudents([...selectedStudents, student]);
      } else {
        setSelectedStudents(
          selectedStudents.filter(el => el.ContactId !== student.ContactId)
        );
      }
      setStudents(students);
      const All = students.every(item => {
        return item.ischecked === true;
      });
      setAll(All);
    }
  };

  const handleSubmit = async () => {
    if (selectedStudents.length) {
      const parsedData = selectedStudents.map(el => {
        return {
          hed__Contact__c: el.ContactId,
          hed__Date__c: date,
          hed__Course_Connection__c: el.Id,
        };
      });
      parsedData.push({
        hed__Contact__c: userDetails.ContactId,
        hed__Date__c: date,
        hed__Course_Connection__c: id,
      })

      let req = { attendance: parsedData };
      const res = await postAttendance(req);
      if (res) {
        handleSnackbarOpen(
          KEY_STATUS.success,
          t('messages:Attendance_Added_Successfully')
        );
      }
    }
  };

  return (
    <Paper>
      <Box p={2} className={classes.container}>
        <Typography
          className={classNames({ cardHeader: true, [classes.header]: true })}
        >
          <Typography component="span">
            {t('headings:Students')}{' '}
            {students && students.length ? `(${students.length})` : ''}
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <Typography>
              <span className={classes.SelectAll}>
                {t('headings:Select_All')}
              </span>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    icon={<CheckBoxOutlineBlankOutlinedIcon />}
                    checkedIcon={<CheckBoxOutlinedIcon />}
                    onClick={e => handleSelect(e, students)}
                    name="checkAll"
                    checked={allCheck}
                  />
                }
              />
            </Typography>
            {selectedStudents && selectedStudents.length ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {t('labels:Submit')}
              </Button>
            ) : (
              <Button variant="contained" disabled>
                {t('labels:Submit')}
              </Button>
            )}
          </Box>
        </Typography>

        {loading ? (
          <Grid container justify="center" alignItems="center">
            <CircularProgress />
          </Grid>
        ) : (
          <Box>
            <Box className={classes.root}>
              <KenSnackbar
                message={snackbarMessage}
                severity={snackbarSeverity}
                autoHideDuration={2000}
                open={openSnackbar}
                handleSnackbarClose={handleSnackbarClose}
                position="Bottom-Right"
              />
            </Box>
            <Grid container spacing={2} container alignItems="center">
              <Grid item xs>
                <Typography className={classes.NameID}>
                  {t('headings:Name')}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography className={classes.NameID2}>
                  {t('headings:Attendance')} - {moment(date).format('DD MMM')}
                </Typography>
              </Grid>
            </Grid>

            {students ? (
              <>
                {students.map(student => (
                  <Box pt={2} pb={2} className={'bottomDivider'}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={2}>
                        <div className={classes.circle}>
                          {student.ContactName.charAt(0)}
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sm={6}
                        md={6}
                        lg={6}
                        container
                        alignItems="center"
                      >
                        <Typography color="primary" className={classes.Name}>
                          {student.ContactName}
                        </Typography>

                        <Typography>
                          <Box fontSize={10} color="text.secondary">
                            {student.RollNumber}
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        xs={3}
                        sm={4}
                        md={4}
                        lg={4}
                      >
                        <Typography>
                          <FormControlLabel
                            control={
                              <GreenCheckbox
                                icon={<CheckBoxOutlineBlankOutlinedIcon />}
                                checkedIcon={<CheckBoxOutlinedIcon />}
                                onClick={e => handleSelect(e, student)}
                                name="single"
                                checked={student.ischecked}
                              />
                            }
                          />
                        </Typography>

                        <Link
                          style={{ textDecoration: 'none' }}
                          to={{
                            pathname: `/${Routes.classroom}/${
                              Routes.studentDetails
                            }`,
                            state: {
                              student: student,
                            },
                          }}
                        >
                          <img src={ArrowForwardIosIcon} />
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </>
            ) : (
              <Typography className={classes.subHeading}>
                {t('No_Students_Found')}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
