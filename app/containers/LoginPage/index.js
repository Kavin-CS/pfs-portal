import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import history from 'utils/history';
import ken42Logo from '../../assets/Ken42logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { getWhoAmI } from '../../utils/ApiService';
import LoginImage from '../../assets/LoginImage.png';
//authentication imports
import {
  userAgentApplication,
  getUri,
} from '../../utils/helpers/userAgentApplication';
import { getUserProfile } from '../../utils/helpers/azureAuthentication';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import configContext from '../../utils/helpers/configHelper';
import { useGoogleLogin } from 'react-google-login';
import { getParentDetails } from '../../utils/ApiService';
import {
  KEY_PARENT_DETAILS,
  KEY_USER_TYPE,
  KEY_LOGIN_TYPE,
  KEY_USER_DETAILS,
  KEY_PORTAL_TYPE,
  KEY_LOGIN_VIEW,
} from '../../utils/constants';
//for Parent Login
import ParentLogin from './parentLogin';
import LoginByUniqueId from './loginByUniqueId';
import GenerateOtp from '../../utils/otpGenerator';
import Routes from '../../utils/routes.json';
import { useTranslation } from 'react-i18next';
import ComingSoonFullScreen from '../../components/ComingSoon/comingSoonFullScreen';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    [theme.breakpoints.only('xs')]: {
      background: '#E5E5E5;',
    },
  },

  image: {
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // [theme.breakpoints.only('xs')]: {
    //   height: '100%',
    // },
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: '20%',
    paddingRight: '20%',
    [theme.breakpoints.only('xs')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
  },
  submit: {
    align: 'center',
    margin: theme.spacing(3, 0, 2),
  },
  overlay: {
    // position: 'relative',
    // top: '0',
    // left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFacultyPortal: {
    marginTop: '8px !important',
    fontSize: '28px !important',
    // lineHeight: '28px',
    textAlign: 'center',
    color: theme.palette.KenColors.neutral100,
    fontWeight: '300',
    letterSpacing: '0.14em',
  },
  signInText: {
    fontWeight: '600',
    fontSize: '28px',
    lineHeight: '28px',
    textAlign: 'center',
    color: theme.palette.KenColors.neutral900,
    letterSpacing: '0.14em',
  },
  textCenter: {
    marginTop: '250px',
  },
  fontStyleA: {
    fontWeight: '800 !important',
    fontSize: '48px !important',
    textAlign: 'center',
    color: theme.palette.KenColors.kenWhite,
    [theme.breakpoints.only('xs')]: {
      fontSize: '28px',
    },
  },
  formContent: {
    height: '100%',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px',
    marginTop: '8px',
  },
  powerBy: {
    color: theme.palette.KenColors.neutral100,
    fontSize: '10px !important',
    marginBottom: '8px !important',
  },
  hide: {
    display: 'none',
  },
  circular: {
    paddingTop: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    background: theme.palette.KenColors.kenWhite,
    marginRight: '5em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5em',
      borderRadius: 3,
      marginBottom: '2em',
    },
  },
  AbsolutePositon: {
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      top: '47%',
      background: theme.palette.KenColors.kenWhite,
      width: '90%',
      height: '70%',
      marginLeft: '5%',
      marginRight: '5%',
      borderRadius: '3px',
    },
  },
  logoWrap: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '0 !important',
    },
  },
  kenLogo: {
    width: 100,
    padding: 16,
  },
  logoContent: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  signInWrap: {
    margin: '0 !important',
  },
}));

export default function SignInSide() {
  const { t } = useTranslation();
  const { config } = useContext(configContext);
  const classes = useStyles();
  //component did mount
  const [progress, setProgress] = React.useState(false);
  // state for the generated otp
  const [tempOtp, setTempOtp] = useState(false);
  //for otp
  const [otp, setOtp] = useState();
  // state for the generated otp
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const [error, seterror] = useState({
    email: undefined,
    otp: undefined,
    mobile: undefined,
  });
  //state for email
  const [email, setEmail] = React.useState();
  // state for storing authentic user
  const [user, setUser] = React.useState();
  const [mobileNumbers, setMobileNumbers] = useState();

  const getUserDetailsByPhone = number => {
    // TODO: api to get user details with related mobile numbers
    setMobileNumbers([{ label: number, value: number }]);
  };
  // to change the state of kenselect
  const onChangePhone = e => {
    setPhone(e.target.value);
  };

  const getSignin = () => {
    const { signIn } = useGoogleLogin({
      onSuccess: response => {
        localStorage.setItem('image', response.profileObj.imageUrl);
        handleSubmit(response.profileObj.email);
      },
      clientId: config.googleClientId,
      redirectUri: getUri(),
    });
    return signIn;
  };
  const handleLogin = async () => {
    setProgress(true);
    if (config.loginType === KEY_LOGIN_TYPE.google) {
      getSignin();
      return;
    }
    try {
      // Login via popup
      await userAgentApplication(config).loginPopup({
        scopes: config.scopes,
        prompt: 'select_account',
      });

      const profile = await getUserProfile(config);
      if (profile) {
        await handleSubmit(profile.mail || profile.userPrincipalName);
        setData({
          ...data,
          isAuthenticated: true,
          error: null,
          user: {
            displayName: profile.displayName,
            mail: profile.mail || profile.userPrincipalName,
          },
        });
      } else {
        setProgress(false);
        setData({
          ...data,
          isAuthenticated: false,
          error: null,
          user: {},
        });
      }
    } catch (err) {
      if (err) {
        setProgress(false);
        console.log('error from login error', err.response);
      }
      setData({
        ...data,
        isAuthenticated: false,
        user: {},
        error: { message: err },
      });
    }
  };

  const handleSubmit = async mail => {
    setProgress(true);
    //e.preventDefault();
    // TODO: update login api and flow below
    if (tempOtp === otp) {
      seterror({
        ...error,
        otp: undefined,
      });
      const profile = await getWhoAmI(mail);
      if (profile) {
        seterror({
          ...error,
          email: undefined,
        });
        if (profile.Type === KEY_USER_TYPE.parent) {
          getParentDetails(phone).then(res => {
            if (!res) return;
            res.RelatedTO = res.RelatedTO.map(item => {
              item.Name = item.RelatedContactName;
              item.ContactId = item.hed__RelatedContact__c;
              item.Type = KEY_USER_TYPE.parent;
              return item;
            });
            localStorage.setItem(KEY_PARENT_DETAILS, JSON.stringify(res));
            if (res.RelatedTO[0]) {
              // navigate to main layout
              localStorage.setItem(
                KEY_USER_DETAILS,
                JSON.stringify(res.RelatedTO[0])
              );
            }
            history.push(`/${Routes.home}`);
          });
        } else {
          localStorage.setItem(KEY_USER_DETAILS, JSON.stringify(profile));
          history.push(`/${Routes.home}`);
        }
      } else {
        // error message
        seterror({
          ...error,
          email: t('messages:Enter_a_valid_Email_address'),
        });
        setProgress(false);
      }
    } else {
      console.log('Wrong Otp');
      seterror({
        ...error,
        otp: t('messages:Enter_Correct_Otp'),
      });
      setProgress(false);
      seterror({
        ...error,
        email: 'Enter a valid email address',
      });
      console.log('Enter a valid email');
      //handleSnackbarOpen("success", "Please enter a valid Unique Id");
    }
  };

  const [data, setData] = useState({
    error: null,
    isAuthenticated: false,
    user: {},
  });

  const generateOtp = async () => {
    if (phone) {
      if (phone.length === 10) {
        //console.log(phone.length);
        seterror({
          ...error,
          mobile: undefined,
        });
        const genOtp = GenerateOtp();
        alert(`Your Otp is:${genOtp}`);
        setTempOtp(genOtp);
      } else {
        seterror({
          ...error,
          mobile: t('messages:Enter_A_Valid_Mobile_Number'),
        });
        console.log('Enter valid Mobile Number');
      }
    } else {
      seterror({
        ...error,
        mobile: t('messages:Enter_A_Valid_Mobile_Number'),
      });
      console.log('Enter Your Mobile Number');
    }
  };

  return (
    <>
      {config?.login?.view?.type !== KEY_LOGIN_VIEW?.full ? (
        <Grid container component="main" className={classes.root}>
          <ComingSoonFullScreen />
          <CssBaseline />
          <Grid item xs={12} sm={12} md={12} className={classes.image}>
            <Grid item className={classes.bgContent}>
              <Box className={classes.overlay}>
                <Grid>
                  {config.clientlogo === undefined ||
                  config.clientlogo === null ? null : (
                    <Grid style={{ textAlign: 'center' }}>
                      <img
                        src={config.clientlogo}
                        style={{ width: '100px', marginTop: '-48%' }}
                      />
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Grid>
            <Grid
              container
              className={classes.formContent}
              xs={12}
              sm={12}
              md={12}
              justify="space-between"
            >
              <Grid item xs={12} sm={6} md={6} className={classes.logoContent}>
                <Typography>
                  <img className={classes.kenLogo} src={ken42Logo} />
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={3}
                md={3}
                item
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                elevation={6}
                square
                className={classes.formWrapper}
              >
                <Grid item>
                  <Typography className={classes.textFacultyPortal}>
                    {config && config.parent
                      ? KEY_PORTAL_TYPE.parent
                      : 'Portal'}
                  </Typography>
                </Grid>

                <Grid
                  item
                  container
                  justify="center"
                  direction="column"
                  alignItems="center"
                >
                  <Grid
                    item
                    className={
                      config.logo ? classes.logoWrap : classes.signInWrap
                    }
                  >
                    {config.logo === undefined ||
                    config.logo === null ? null : (
                      <img src={config.logo} style={{ height: 100 }} />
                    )}
                  </Grid>
                  <Typography
                    component="h1"
                    variant="h5"
                    class={classes.signInText}
                  >
                    {config && !config.isAdEnabled ? t('Sign_In') : ''}
                  </Typography>
                  {config && config.parent ? (
                    <ParentLogin
                      setProgress={setProgress}
                      progress={progress}
                      generateOtp={generateOtp}
                      setPhone={setPhone}
                      error={error}
                      seterror={seterror}
                      tempOtp={tempOtp}
                      otp={otp}
                      setOtp={setOtp}
                      setTempOtp={setTempOtp}
                      phone={phone}
                    />
                  ) : (
                    <>
                      {config && config.isAdEnabled ? (
                        <>
                          <div className={classes.buttonDiv}>
                            <div>
                              <Button
                                variant="contained"
                                color="primary"
                                className={clsx(classes.buttonDiv, {
                                  [classes.hide]: progress,
                                })}
                                onClick={() => handleLogin()}
                              >
                                {t('Sign_In')}
                              </Button>
                            </div>
                          </div>
                          <div
                            className={clsx(classes.buttonDiv, {
                              [classes.hide]: !progress,
                            })}
                          >
                            <CircularProgress />
                          </div>
                        </>
                      ) : (
                        <LoginByUniqueId
                          onChangePhone={onChangePhone}
                          phone={phone}
                          error={error}
                          tempOtp={tempOtp}
                          generateOtp={generateOtp}
                          otp={otp}
                          setOtp={setOtp}
                          handleSubmit={handleSubmit}
                          seterror={seterror}
                          setProgress={setProgress}
                          progress={progress}
                        />
                      )}
                    </>
                  )}
                </Grid>
                <Grid item>
                  <Box mb={2} textAlign="center">
                    <Typography className={classes.powerBy}>
                      {t('Powered_By')}
                    </Typography>
                    <Typography>
                      <img src={ken42Logo} />
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container component="main" className={classes.root}>
          <ComingSoonFullScreen />
          <CssBaseline />
          <Grid item xs={12} sm={6} md={6} className={classes.image}>
            <Box className={classes.overlay}>
              <Grid>
                {config.clientlogo === undefined ||
                config.clientlogo === null ? null : (
                  <Grid style={{ textAlign: 'center' }}>
                    <img
                      src={config.clientlogo}
                      style={{ width: '100px', marginTop: '-48%' }}
                    />
                  </Grid>
                )}
                <Box>
                  <Typography className={classes.fontStyleA}>
                    {t('login:sideHeading1')}
                  </Typography>
                  <Typography className={classes.fontStyleA}>
                    {t('login:sideHeading2')}
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            elevation={6}
            square
            className={classes.AbsolutePositon}
          >
            <Grid item>
              <Typography className={classes.textFacultyPortal}>
                {config && config.parent ? KEY_PORTAL_TYPE.parent : 'Portal'}
              </Typography>
            </Grid>

            <Grid
              item
              container
              justify="center"
              direction="column"
              alignItems="center"
            >
              <Grid
                item
                className={config.logo ? classes.logoWrap : classes.signInWrap}
              >
                {config.logo === undefined || config.logo === null ? null : (
                  <img src={config.logo} style={{ height: 100 }} />
                )}
              </Grid>
              <Typography
                component="h1"
                variant="h5"
                class={classes.signInText}
              >
                {config && !config.isAdEnabled ? t('Sign_In') : ''}
              </Typography>
              {config && config.parent ? (
                <ParentLogin
                  setProgress={setProgress}
                  progress={progress}
                  generateOtp={generateOtp}
                  setPhone={setPhone}
                  error={error}
                  seterror={seterror}
                  tempOtp={tempOtp}
                  otp={otp}
                  setOtp={setOtp}
                  setTempOtp={setTempOtp}
                  phone={phone}
                />
              ) : (
                <>
                  {config && config.isAdEnabled ? (
                    <>
                      <div className={classes.buttonDiv}>
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            className={clsx(classes.buttonDiv, {
                              [classes.hide]: progress,
                            })}
                            onClick={() => handleLogin()}
                          >
                            {t('Sign_In')}
                          </Button>
                        </div>
                      </div>
                      <div
                        className={clsx(classes.buttonDiv, {
                          [classes.hide]: !progress,
                        })}
                      >
                        <CircularProgress />
                      </div>
                    </>
                  ) : (
                    <LoginByUniqueId
                      onChangePhone={onChangePhone}
                      phone={phone}
                      error={error}
                      tempOtp={tempOtp}
                      generateOtp={generateOtp}
                      otp={otp}
                      setOtp={setOtp}
                      handleSubmit={handleSubmit}
                      seterror={seterror}
                      setProgress={setProgress}
                      progress={progress}
                    />
                  )}
                </>
              )}
            </Grid>
            <Grid item>
              <Box mb={2} textAlign="center">
                <Typography className={classes.powerBy}>
                  {t('Powered_By')}
                </Typography>
                <Typography>
                  <img src={ken42Logo} />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
