import React, { useState } from 'react';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import KenTextField from '../../components/KenInputField/index';
import KenSelect from '../../components/KenSelect/index';
import { authenticate } from '../../utils/ApiService';
import { useTranslation } from 'react-i18next';
import fbAnalytics from '../../utils/Analytics';
import configContext from '../../utils/helpers/configHelper';
import { maskMobile } from '../../utils/helpers/loginHelper';

const useStyles = makeStyles(theme => ({
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
  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8px',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
}));

export default function LoginByUniqueId(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    onChangePhone,
    phone,
    error,
    tempOtp,
    setOtp,
    otp,
    handleSubmit,
    generateOtp,
    seterror,
    progress,
    setProgress,
  } = props;

  const [email, setEmail] = useState();
  const [mobileNumbers, setMobileNumbers] = useState();
  const getUserDetailsByPhone = number => {
    setMobileNumbers([{ label: maskMobile(number), value: number }]);
  };
  const [user, setUser] = React.useState();
  const { config } = React.useContext(configContext);

  React.useEffect(() => {
    if (config?.firebaseConfig) {
      fbAnalytics(config.firebaseConfig, `pfs_landingpage`);
    }
  }, []);

  const handleKeypress = (event, func, params = '') => {
    if (event.charCode === 13) {
      func(params);
      event.preventDefault();
    }
  };

  const authenticateUser = async () => {
    setProgress(true);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (emailRegex.test(email)) {
      try {
        const userData = await authenticate(email);
        if (userData && userData.Phone) {
          setUser(userData);
          getUserDetailsByPhone(userData.Phone);
          setProgress(false);
          seterror({
            ...error,
            email: undefined,
          });
        } else {
          setProgress(false);
          seterror({
            ...error,
            email: t('messages:Enter_a_valid_email_address'),
          });
        }
      } catch (err) {
        //handleSnackbarOpen("success", "Please enter a valid Unique Id");
        console.log('Enter a valid email', err);
        setProgress(false);
        seterror({
          ...error,
          email: t('messages:Enter_a_valid_email_address'),
        });
      }
    } else {
      setProgress(false);
      seterror({
        ...error,
        email: t('messages:Enter_a_valid_email_address'),
      });
      console.log('Enter a valid email');
      //handleSnackbarOpen("success", "Please enter a valid Unique Id");
    }
  };

  return (
    <Box className={classes.form}>
      <Grid container>
        <Grid item xs={12}>
          <KenTextField
            placeholder="Email Address"
            required
            label={`${t('labels:Email')}`}
            onChange={e => {
              setEmail(e.target.value);
            }}
            onKeyPress={e => {
              handleKeypress(e, mobileNumbers ? generateOtp : authenticateUser);
            }}
          />
          <Typography color="error">{error.email}</Typography>
          {mobileNumbers ? (
            <Box mt={1} mb={1}>
              <KenSelect
                label={`${t('labels:Mobile_Number')}`}
                required
                onChange={onChangePhone}
                options={mobileNumbers}
                value={phone}
                placeholder="Select Mobile Number"
              />
              <Typography color="error">{error.mobile}</Typography>
            </Box>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          {tempOtp ? null : (
            // <div className={classes.buttonDiv}>
                <Button
                  variant="contained"
                  color="primary"
                  className={clsx(classes.buttonDiv, {
                    [classes.hide]: progress,
                  })}
                  onClick={mobileNumbers ? generateOtp : authenticateUser}
                >
                  {mobileNumbers ? t('labels:Get_Otp') : t('Sign_In')}
                </Button>
            // </div>
          )}

          {tempOtp ? (
            <Box justify="center" mt={1} mb={1}>
              <Box
                textAlign="right"
                onClick={generateOtp}
                className={classes.resend}
              >
                {t('labels:Re_Send_Otp')}
              </Box>
              <KenTextField
                placeholder="Enter Otp"
                required
                label="Enter Otp"
                onChange={e => {
                  setOtp(e.target.value);
                }}
                onKeyPress={e => {
                  handleKeypress(e, handleSubmit, user.Email);
                }}
              />
              <Typography color="error">{error.otp}</Typography>
            </Box>
          ) : null}

          {otp ? (
            <div className={classes.buttonDiv}>
              <Button
                className={clsx(classes.buttonDiv, {
                  [classes.hide]: progress,
                })}
                onClick={() => handleSubmit(user.Email)}
                color="primary"
                variant="contained"
              >
                {t('labels:Submit')}
              </Button>
            </div>
          ) : null}

          <div
            className={clsx(classes.buttonDiv, {
              [classes.hide]: !progress,
            })}
          >
            <CircularProgress />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
