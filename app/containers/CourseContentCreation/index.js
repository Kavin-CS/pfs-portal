import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KenClassList from '../../global_components/KenClassList';
import { getUserDetails } from '../../utils/helpers/storageHelper';
import { facultyActivities, StudentActivities } from '../../utils/ApiService';
import { KEY_STATUS, KEY_USER_TYPE } from '../../utils/constants';
import KenTabs from '../../components/KenTabs';
import AssignmentsTab from './Components/AssignmentsTab';
import AssessmentsTab from './Components/AssessmentsTab';
import LessonsTab from './Components/LessonsTab';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import KenLoader from '../../components/KenLoader';
import { useTranslation } from 'react-i18next';
import KenButton from '../../global_components/KenButton';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: -1,
  },
  dropDown: {
    display: 'flex',
  },
  button: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
  },
  icons: {
    fontSize: '18px',
    marginRight: '10px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function ContentCreationPage() {
  const classes = useStyles();
  const [selectedSection, setSelectedSection] = useState();
  const [activityUrls, setActivityUrls] = useState();
  const [tabData, setTabData] = useState();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const getSelectedSection = section => {
    setSelectedSection(section);
  };

  const getTabData = (assignsArray, assesArray, lessonArray, notesArray) => {
    return [
      {
        title: (
          <Box className={classes.title}>
            <MenuBookIcon className={classes.icons} />
            <span>{`Lessons (${lessonArray?.length || '0'})`}</span>
          </Box>
        ),
        content: <LessonsTab data={lessonArray} />,
      },
      {
        title: (
          <Box className={classes.title}>
            <AssignmentIcon className={classes.icons} />
            <span>{`Assignments (${assignsArray?.length || '0'})`}</span>
          </Box>
        ),
        content: <AssignmentsTab data={assignsArray} />,
      },
      {
        title: (
          <Box className={classes.title}>
            <AssessmentIcon className={classes.icons} />
            <span>{`Assessments (${assesArray?.length || '0'})`}</span>
          </Box>
        ),
        content: <AssessmentsTab data={assesArray} />,
      },
    ];
  };

  const goToContent = () => {
    let urlObj = activityUrls.find(url => url.id === selectedSection.Id);
    if (urlObj) {
      window.open(urlObj.url, '_blank');
    }
  };

  useEffect(() => {
    setLoading(true);
    const user = getUserDetails();
    const contactID = user?.ContactId;
    const connectionId = selectedSection?.Id;
    if (connectionId && contactID) {
      if (
        user?.Type?.toLocaleLowerCase() ===
        KEY_USER_TYPE.faculty?.toLocaleLowerCase()
      ) {
        facultyActivities(contactID, connectionId)
          .then(res => {
            setLoading(false);
            const activityLinks = [];
            let assignmentsArray = [];
            let assessmentsArray = [];
            let lessonsArray = [];
            if (res.status !== KEY_STATUS.failed) {
              res?.courses.forEach(el => {
                let subject = el.fullname;
                if (el.activities.assignment) {
                  el.activities.assignment.forEach(ele => {
                    assignmentsArray.push({ ...ele, subject });
                  });
                }
                if (el.activities.quizzes) {
                  el.activities.quizzes.forEach(ele => {
                    assessmentsArray.push({ ...ele, subject });
                  });
                }
                if (el.activities.lesson) {
                  el.activities.lesson.forEach(ele => {
                    lessonsArray.push({ ...ele, subject });
                  });
                }
                if (el?.url) {
                  activityLinks.push({
                    subject: el.fullname,
                    url: el.url,
                    id: el.connectionid,
                  });
                }
              });
            }
            setTabData(
              getTabData(assignmentsArray, assessmentsArray, lessonsArray)
            );
            setActivityUrls(activityLinks);
          })
          .catch(err => {
            console.log('error in facultyActivities', err);
            setActivityUrls([]);
            setLoading(false);
          });
      } else if (
        user?.Type?.toLocaleLowerCase() ===
        KEY_USER_TYPE.student?.toLocaleLowerCase()
      ) {
        StudentActivities(contactID, connectionId)
          .then(res => {
            setLoading(false);
            const activityLinks = [];
            let assignmentsArray = [];
            let assessmentsArray = [];
            let lessonsArray = [];
            if (res.status !== KEY_STATUS.failed) {
              res?.courses.forEach(el => {
                let subject = el.fullname;
                if (el.activities.assignment) {
                  el.activities.assignment.forEach(ele => {
                    assignmentsArray.push({ ...ele, subject });
                  });
                }
                if (el.activities.quizzes) {
                  el.activities.quizzes.forEach(ele => {
                    assessmentsArray.push({ ...ele, subject });
                  });
                }
                if (el.activities.lesson) {
                  el.activities.lesson.forEach(ele => {
                    lessonsArray.push({ ...ele, subject });
                  });
                }
                if (el?.url) {
                  activityLinks.push({
                    subject: el.fullname,
                    url: el.url,
                    id: el.connectionid,
                  });
                }
              });
            }
            setTabData(
              getTabData(assignmentsArray, assessmentsArray, lessonsArray)
            );
            setActivityUrls(activityLinks);
          })
          .catch(err => {
            console.log('error in facultyActivities', err);
            setActivityUrls([]);
            setLoading(false);
          });
      }
    }
  }, [selectedSection]);

  return (
    <>
      {loading && <KenLoader />}
      <Grid container direction="column" className={classes.root} spacing={2}>
        <Grid item>
          <Box>
            <KenClassList
              getSelectedSection={getSelectedSection}
              title={t('headings:Course_Content')}
              listTitle={t('headings:Your_Subjects')}
            />
          </Box>
        </Grid>
        {getUserDetails()?.Type?.toLowerCase() ===
        KEY_USER_TYPE.faculty.toLocaleLowerCase() ? (
          <Grid item style={{ textAlign: 'right' }}>
            <Box>
              <KenButton
                label={t('labels:Add_Content')}
                onClick={() => goToContent()}
                variant="primary"
                style={{ marginBottom: '8px' }}
              />
            </Box>
          </Grid>
        ) : null}
        {/* <Grid item>
        
        </Grid> */}
      </Grid>
      {tabData && (
        <Box mt={2}>
          <KenTabs
            data={tabData}
            tabPanelProps={{
              style: { minHeight: '250px', position: 'relative' },
            }}
          />
        </Box>
      )}
    </>
  );
}
