import React, { useContext, Suspense, lazy } from 'react';
import {
  makeStyles,
  useTheme,
  StylesProvider,
  jssPreset,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import clsx from 'clsx';
import MenuAppBar from '../../components/Header/MenuAppBar';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import ClassroomPage from '../FacultyPortal/ClassRoomPage/Loadable';
import StudentsPage from 'containers/StudentsPage/Loadable';
import StudentDetailsPage from '../StudentsDetailPage/Loadable';
import StudentAttendanceDetails from '../FacultyPortal/ClassRoomPage/components/StudentAttendanceDetails';
import EventsPage from 'containers/EventsPage/Loadable';
import ParentResources from 'containers/ParentResources/Loadable';
import StudentClassroomDetails from '../StudentClassroomDetails/Loadable';
import ParentService from '../CommonPortal/Service/Loadable';
import EventDetails from '../EventsPage/components/EventDetails';
import FeePayment from '../ParentPortal/FeePayment/Loadable';
import FacultyDirectory from '../FacultyPortal/FacultyDirectory/index';
import FacultyDetails from '../FacultyPortal/FacultyDirectory/components/faculityDetails';
import Footer from '../../components/Footer';
import Hidden from '@material-ui/core/Hidden';
import ContentCreationPage from '../FacultyPortal/ContentCreationPage';
import IdeaHubPage from '../IdeaHubPage';
import ClassroomStudentPage from '../StudentPortal/ClassroomPage';
import VisitorsPass from '../ParentPortal/VisitorsPass';
import KenLoader from '../../components/KenLoader/index';
import KenSnackbar from '../../components/KenSnackbar/index';
import Timetable from '../Timetable/index';
import AssessmentPage from '../AssessmentPage'
//Routes
import Routes from '../../utils/routes.json';
import firebase from 'firebase';
//RTL
import { create } from 'jss';
import rtl from 'jss-rtl';
import { KEY_DIRECTION, KEY_STATUS } from '../../utils/constants';
import configContext from '../../utils/helpers/configHelper';
import { getCon, messaging } from '../../init-fcm';
import context from '../../utils/helpers/context';
import PaymentSuccess from '../ParentPortal/PaymentSuccessful/index';
import AccountDetail from '../AccountDetails/index';
import Reports from '../../containers/ProgressReports/ReportsPage';
import SubjectTeacherGradesView from '../../containers/ProgressReports/SubjectTeacherGradesView/index';
// import CourseContentCreation from '../../containers/FacultyPortal/CourseContentCreation';
import CourseContentCreation from '../../containers/CourseContentCreation';
import Assessment from '../Assessment/index';
import QuestionBank from '../Assessment/QuestionPage/index';

//contextProvider for loader
import { ThemeContextProvider } from '../../utils/contextProvider/contextProvider';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../utils/ErrorBoundary';

import { useAppContext } from '../../utils/contextProvider/AppContext';
import { getUserDetails, logOut } from '../../utils/helpers/storageHelper';
import ProtectedRoute from '../../utils/rbac/ProtectedRoute';
import { Grid } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

// lazy loading of components
const SmartContent = lazy(() =>
  import('../StudentPortal/ClassroomPage/SmartContent/index')
);
const SubjectClass = lazy(() =>
  import(
    '../StudentPortal/ClassroomPage/SmartContent/Components/subjectName/index'
  )
);
const SubjectContent = lazy(() =>
  import(
    '../StudentPortal/ClassroomPage/SmartContent/Components/subjectContent/index'
  )
);

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    color: theme.palette.KenColors.neutral400,
    minHeight: '100vh',
    background: theme.palette.background.default,
    position: 'relative',
    // marginRight: 0,
  },
  rootSideNav: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  // hide: {
  //   display: 'none',
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  contentTrue: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    background: theme.palette.background.default,
    marginBottom: 10,
    // [theme.breakpoints.only('xs')]: {
    //   padding: 16,
    // },
    minHeight: '80vh',
  },
  wrapper: {
    display: 'flex',
  },
  contentFalse: {
    // position: 'relative',
    flexGrow: 1,
    // padding: theme.spacing(3),
    background: theme.palette.background.default,
    marginBottom: 10,
    // [theme.breakpoints.only('xs')]: {
    //   padding: 8,
    // },
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: '100%',
  },
  newSideNav: {
    maxWidth: '100%',
    padding: '70px 24px',
  },
  mainContent: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  mainWrap: {
    width: 'calc(100% - 70px)',
    padding: 24,
    background: theme.palette.KenColors.neutral20,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default function MainLayout(props) {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();

  const {
    state: { config, userDetails, sideNavigation },
    dispatch,
  } = useAppContext();
  const { drawer: { open: drawerOpen = true } = {} } = config || {};
  const [openDrawer, setOpenDrawer] = React.useState(
    sideNavigation || drawerOpen
  );

  //const [hideDrawer, setHideDrawer] = React.useState(false);
  const [showDrawer] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false); //for responsive drawer
  const [webOpen, setWebOpen] = React.useState(true);
  // const { config } = useContext(configContext);

  // Validate if userDetails are available and logout if not present
  React.useEffect(() => {
    const uD = getUserDetails();
    if (uD) {
      dispatch({ type: 'updateUserDetails', value: uD });
    } else {
      // Logout
      logOut(config, history);
    }

    if (config) {
      dispatch({
        type: 'updateSideNavigation',
        value: drawerOpen,
      });
    }
  }, []);

  React.useEffect(() => {
    setOpenDrawer(sideNavigation);
  }, [sideNavigation]);

  React.useEffect(() => {
    if (config && firebase.messaging.isSupported()) {
      getCon(config);
      if ('serviceWorker' in navigator && config) {
        navigator.serviceWorker
          .register('./firebase-messaging-sw.js')
          .then(function (registration) {
            firebase
              .messaging()
              .getToken({ serviceWorkerRegistration: registration });

            console.log(
              'Registration successful, scope is:',
              registration.scope
            );
          })
          .catch(function (err) {
            console.log('Service worker registration failed, error:', err);
          });
      }
    }
  }, [config]);

  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  const onDrawerChanges = () => {
    setMobileOpen(!mobileOpen);
  };

  const onWebDrawerChanges = isOpen => {
    setWebOpen(!webOpen);
  };

  const handleDrawer = text => {
    switch (text) {
      case 'show':
        setWebOpen(true);
        break;

      case 'hide':
        setWebOpen(false);
        break;

      default:
        setWebOpen(!webOpen);
    }
  };
  // for global loader
  const [loading, setLoading] = React.useState(false);
  const handleLoader = val => {
    if (val !== undefined) {
      setLoading(val);
    } else {
      setLoading(!loading);
    }
  };

  //for global snackbar
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState(
    KEY_STATUS.success
  );
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = (severity, message) => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };

  if (!userDetails) return <KenLoader />;

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
        window.location.reload();
      }}
    >
      <StylesProvider jss={jss}>
        <context.Provider
          value={{
            handleLoader: handleLoader,
            handleSnackbarOpen: handleSnackbarOpen,
          }}
        >
          <Router>
            <div className={classes.root}>
              {/* global loader */}
              {loading && <KenLoader />}

              <main
                className={webOpen ? classes.contentTrue : classes.contentFalse}
              >
                <KenSnackbar
                  message={snackbarMessage}
                  severity={snackbarSeverity}
                  autoHideDuration={4000}
                  open={openSnackbar}
                  handleSnackbarClose={handleSnackbarClose}
                  position="Bottom-Right"
                />
                {/* <div className={classes.toolbar} /> */}
                <div className={classes.wrapper}>
                  <div className={classes.sideNavWrap}>
                    {/* <Hidden smDown> */}
                    <SideNavigation
                      openDrawer={openDrawer}
                      setOpenDrawer={setOpenDrawer}
                      showDrawer={showDrawer}
                      drawerChanges={onWebDrawerChanges}
                      open={webOpen}
                      variant={webOpen ? 'permanent' : ''}
                    />
                    {/* </Hidden> */}

                    {/* <Hidden mdUp> */}
                    <SideNavigation
                      openDrawer={openDrawer}
                      setOpenDrawer={setOpenDrawer}
                      showDrawer={showDrawer}
                      open={webOpen}
                      drawerChanges={onWebDrawerChanges}
                      variant="temporary"
                      // ModalProps={
                      //   true // Better open performance on mobile.
                      // }
                      variant={webOpen ? 'permanent' : ''}

                    // anchor={
                    //   theme.direction === 'rtl'
                    //     ? KEY_DIRECTION.right
                    //     : KEY_DIRECTION.left
                    // }
                    />
                    {/* </Hidden> */}
                  </div>
                  <Grid
                    xs={12}
                    sm={12}
                    className={webOpen ? classes.mainWrap : classes.newSideNav}
                  >
                    <AppBar
                      position="fixed"
                      className={clsx(classes.appBar, {
                        [classes.appBarShift]: openDrawer,
                      })}
                    >
                      <MenuAppBar
                        drawerChanges={onDrawerChanges}
                        openDrawer={openDrawer}
                        setOpenDrawer={setOpenDrawer}
                        className={clsx(classes.appBar, {
                          [classes.appBarShift]: openDrawer,
                        })}
                      />
                    </AppBar>
                    <Toolbar />
                    {/* Routes */}
                    <Suspense fallback={<div>Loading...</div>}>
                      <Route
                        exact
                        path="/"
                        render={() => <Redirect to={`/${Routes.home}`} />}
                      />

                      <Route
                        exact
                        path={`/${Routes.home}`}
                        render={routerProps => (
                          <HomePage
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <Route
                        path={`/${Routes.contentCreation}`}
                        component={ContentCreationPage}
                      />
                      <Route
                        path={`/${Routes.courseContentCreation}`}
                        component={CourseContentCreation}
                      />
                      <Route
                        exact
                        path={`/${Routes.classroom}`}
                        component={ClassroomPage}
                      />
                      <Route
                        exact
                        path={`/${Routes.classroom}/${Routes.studentattendancedetails
                          }`}
                        component={StudentAttendanceDetails}
                      />
                      <ProtectedRoute
                        exact
                        path={`/${Routes.students}`}
                        component={StudentsPage}
                        drawerChanges={handleDrawer}
                        drawerFlag={webOpen}
                        feature="myStudents"
                        action="view"
                      />
                      <Route
                        exact
                        path={`/${Routes.facultyDirectory}`}
                        render={routerProps => (
                          <FacultyDirectory
                            {...routerProps}
                            drawerChanges={handleDrawer}
                            drawerFlag={webOpen}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.facultyDetails}`}
                        render={routerProps => (
                          <FacultyDetails
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.studentDetails}/:contactId`}
                        render={routerProps => (
                          <StudentDetailsPage
                            {...routerProps}
                            drawerChanges={onWebDrawerChanges}
                          />
                        )}
                      />

                      <Route
                        exact
                        path={`/${Routes.events}`}
                        render={routerProps => (
                          <EventsPage
                            {...routerProps}
                            drawerChanges={onDrawerChanges}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.eventDetails}`}
                        component={EventDetails}
                      />
                      <Route
                        exact
                        path={`/${Routes.ideaHub}`}
                        component={IdeaHubPage}
                      />
                      <Route
                        exact
                        path={`/${Routes.classroom}/${Routes.studentDetails}`}
                        component={StudentClassroomDetails}
                      />
                      <Route
                        exact
                        path={`/${Routes.service}`}
                        component={ParentService}
                      />
                      <Route
                        exact
                        path={`/${Routes.parentResources}`}
                        component={ParentResources}
                      />
                      <Route
                        exact
                        path={`/${Routes.feePayment}`}
                        render={routerProps => (
                          <FeePayment
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.classroomStudent}`}
                        component={ClassroomStudentPage}
                      />
                      <Route
                        exact
                        path={`/${Routes.visitorsPass}`}
                        component={VisitorsPass}
                      />
                      <Route
                        exact
                        path={`/${Routes.smartContent}`}
                        render={routerProps => (
                          <SmartContent
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.subjectClass}/:sub`}
                        render={routerProps => (
                          <SubjectClass
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.subjectContent}/:topicName`}
                        render={routerProps => (
                          <SubjectContent
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.paymentSucces}`}
                        render={routerProps => (
                          <PaymentSuccess
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <Route
                        exact
                        path={`/${Routes.accountDetail}`}
                        render={routerProps => (
                          <AccountDetail
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />
                      <ProtectedRoute
                        exact
                        path={`/${Routes.grades}`}
                        component={SubjectTeacherGradesView}
                        drawerChanges={handleDrawer}
                        feature="grades"
                        action="view"
                      />
                      <Route
                        exact
                        path={`/${Routes.timetable}`}
                        render={routerProps => (
                          <Timetable
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />

                      <Route
                        exact
                        path={`/${Routes.assessment}`}
                        render={routerProps => (
                          <Assessment
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />

                      <Route
                        exact
                        path={`/${Routes.questionBank}`}
                        render={routerProps => (
                          <QuestionBank
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />

                      <Route
                        exact
                        path={`/${Routes.reports}`}
                        render={routerProps => (
                          <Reports
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />

                      <Route
                        exact
                        path={`/${Routes.studentAssessment}`}
                        render={routerProps => (
                          <AssessmentPage
                            {...routerProps}
                            drawerChanges={handleDrawer}
                          />
                        )}
                      />

                    </Suspense>
                  </Grid>
                </div>
              </main>
              <div className={classes.footer}>
                <Footer />
              </div>
            </div>
          </Router>
        </context.Provider>
      </StylesProvider>
    </ErrorBoundary>
  );
}
