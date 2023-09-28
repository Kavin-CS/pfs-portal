import React, { useState } from 'react';
import { Grid, Typography, useTheme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import {
  getCourses,
  getStudentListDetails,
} from '../../../../../utils/ApiService';
import {
  getUserDetails,
  getStudents,
} from '../../../../../utils/helpers/storageHelper';
import KenSelect from '../../../../../components/KenSelect/index';
import KenLoader from '../../../../../components/KenLoader';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.KenColors.kenWhite,
    borderRadius: 3,
  },
  classWrap: {
    overflowX: 'auto',
    display: '-webkit-inline-box',
    '&::-webkit-scrollbar': {
      height: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.KenColors.customizeScrollTrack,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.KenColors.customizeScrollTrack,
    },
  },
  sectionWrap: {
    display: 'flex',
    marginTop: 8,
  },
  sectionName: {
    height: 44,
    background: theme.palette.KenColors.gradeSectionSubjectBg,
    color: theme.palette.KenColors.subjectSectionLabel,
    fontSize: 14,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  subName: {
    fontSize: 14,
    color: theme.palette.KenColors.gradeSectionHeaderLabel,
  },
  classLabelWrap: {
    padding: 24,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.KenColors.tertiaryGray50,
  },
  classLabel: {
    minWidth: 55,
  },
  gradeLabel: {
    color: theme.palette.KenColors.neutral900,
    fontSize: 18,
    fontWeight: 600,
  },
  coursesWrap: {
    padding: '16px 32px',
    borderRight: `0.6px solid ${
      theme.palette.KenColors.classesListBorderColor
    }`,
  },
  dropdownWrap: {
    color: theme.palette.KenColors.neutral700,
    fontSize: 14,
  },
  dropdownWrapSelected: {
    fontSize: 14,
  },
  inputBaseClass: {
    fontSize: 14,
    background: theme.palette.KenColors.kenWhite,
  },
}));

export default function ClassListCard(props) {
  const { setCourseOfferingId } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [courses, setCourses] = useState([]);
  const [currentAccountName, setCurrentAccountName] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [currentCourseItem, setCurrentCourseItem] = React.useState([]);
  const [accountArray, setAccountArray] = React.useState([]);
  const [students, setStudents] = React.useState([]);

  const profile = getUserDetails();

  React.useEffect(() => {
    setLoading(true);
    const facultyID = profile.ContactId;
    getCourses(facultyID)
      .then(response => {
        console.log(response, 'response');
        setCourses(response);
        if (response.length > 0) {
          // handleSectionChange(response[0].CourseOfferingID);
          setCourseOfferingId(response[0].CourseOfferingID);
          getStudentListDetails(response[0].CourseOfferingID).then(resp =>
            setStudents(resp)
          );
        } else {
          setLoading(false);
        }

        const accountNameArray = [
          ...new Set(response.map(item => item.accountname)),
        ];

        setAccountArray(accountNameArray);
        setLoading(false);
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
      });
  }, []);

  // handle course change method

  const handleCourseChange = value => {
    setLoading(true);
    const currentSectionArray = [];
    courses.map((data, i) => {
      if (data.accountname == value) {
        currentSectionArray.push(data);
      } else {
        return null;
      }
    });
    setCurrentAccountName(value);
    setCurrentCourseItem(currentSectionArray);
    setLoading(false);
  };

  const handleSectionChange = CourseOfferingID => {
    setCourseOfferingId(CourseOfferingID);
  };

  return (
    <>
      {loading && <KenLoader />}

      <Grid
        container
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
        data-testid="classList-page"
      >
        <Grid item md={3}>
          <Typography className={classes.gradeLabel}>
            {' '}
            {t('headings:Grades')}
          </Typography>
        </Grid>
        <Grid item md={3}>
          {accountArray.length > 0 && (
            <KenSelect
              menuItemSelectedClass={classes.dropdownWrapSelected}
              menuItemRootClass={classes.dropdownWrap}
              value={currentAccountName}
              options={accountArray}
              inputBaseRootClass={classes.inputBaseClass}
              onChange={e => {
                handleCourseChange(e.target.value);
              }}
              defaultValue={() => {
                handleCourseChange(accountArray[0]);
                return accountArray[0];
              }}
            />
          )}
        </Grid>
      </Grid>
      <Box className={classes.root}>
        <Grid container>
          <Grid item md={1} className={classes.classLabelWrap}>
            <Typography className={classes.classLabel}>
              {t('headings:Your_Classes')}
            </Typography>
          </Grid>
          <Grid item className={classes.classWrap} md={11}>
            {currentCourseItem.map((program, index) => (
              <Grid
                item
                className={classes.coursesWrap}
                onClick={() => handleSectionChange(program.CourseOfferingID)}
              >
                <Typography key={index} className={classes.subName}>
                  {' '}
                  {program.hed__Course__cName}
                </Typography>
                <Grid
                  container
                  spacing={4}
                  item
                  className={classes.sectionWrap}
                >
                  <Grid key={index} item>
                    <Typography className={classes.sectionName}>
                      {program.Section}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
