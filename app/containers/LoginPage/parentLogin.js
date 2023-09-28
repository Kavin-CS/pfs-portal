import React, { useContext } from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import KenInputTextField from '../../components/KenInputField/index';
import {
  getOtp,
  getParentDetails,
  getValidateOtp,
} from '../../utils/ApiService';
import history from '../../utils/history';
import {
  KEY_PARENT_DETAILS,
  KEY_USER_TYPE,
  KEY_USER_DETAILS,
} from '../../utils/constants';
import Routes from '../../utils/routes.json';
import { useTranslation } from 'react-i18next';
import KenSnackbar from '../../components/KenSnackbar/index';
import configContext from '../../utils/helpers/configHelper';
import { isOtpValid, sendOtpTo } from '../../utils/helpers/apiHelper';
import fbAnalytics from '../../utils/Analytics';

const useStyles = makeStyles(theme => ({
  root: {
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
    marginBottom: '8px',
  },
  hide: {
    display: 'none',
  },
  resend: {
    alignSelf: 'flex-end',
    '&:hover': {
      cursor: 'pointer',
    },
    color: theme.palette.KenColors.primary,
  },
}));

const ParentLogin = props => {
  const { t } = useTranslation();
  const {
    progress,
    setProgress,
    setPhone,
    error,
    generateOtp,
    setTempOtp,
    tempOtp,
    setOtp,
    phone,
    otp,
    seterror,
  } = props;
  const [email, setEmail] = React.useState();
  const [data, setData] = React.useState();
  const classes = useStyles();
  const { config } = useContext(configContext);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  React.useEffect(() => {
    if (config?.firebaseConfig) {
      fbAnalytics(config.firebaseConfig, `parent_landingpage`);
    }
  }, []);

  const handleKeypress = (event, func) => {
    if (event.charCode === 13) {
      func();
      event.preventDefault();
    }
  };

  const handleSnackbarOpen = (severity, message) => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };
  const getParent = async () => {
    setProgress(true); //start the loader
    // console.log(config.smsURL)
    if (!config?.smsURL) {
      setProgress(true); //start the loader
      if (tempOtp === otp) {
        try {
          const userData = await getParentDetails(phone);
          if (userData.Message !== 'No Data Found') {
            seterror({
              otp: undefined,
              mobile: undefined,
              email: undefined,
            });
            userData.RelatedTO = userData.RelatedTO.map(item => {
              item.Name = item.RelatedContactName;
              item.ContactId = item.hed__RelatedContact__c;
              item.Type = KEY_USER_TYPE.parent;
              return item;
            });
            localStorage.setItem(KEY_PARENT_DETAILS, JSON.stringify(userData));
            if (userData.RelatedTO[0]) {
              // navigate to main layout
              localStorage.setItem(
                KEY_USER_DETAILS,
                JSON.stringify(userData.RelatedTO[0])
              );
            }
            setProgress(false);
            history.push(`/${Routes.home}`);
          } else {
            console.log('User Not Found');
            seterror({
              ...error,
              mobile: t('messages:Invalid_Mobile_Number'),
            });
            setProgress(false);
          }
        } catch (err) {
          console.log(err);
          setProgress(false);
        }
      } else {
        seterror({
          ...error,
          otp: t('messages:Enter_Correct_Otp'),
        });
        setProgress(false);
      }
    } else {
      const userData = await getParentDetails(phone);
      if (userData.Message !== 'No Data Found') {
        seterror({
          otp: undefined,
          mobile: undefined,
          email: undefined,
        });
        setData(userData);
        if (userData.mail) {
          sendOtpTo(userData.mail, phone, config?.otpTo)
            .then(res => {
              if (res.status === 'sucess') {
                handleSnackbarOpen(
                  'Success',
                  t('messages:Email_parent_success_otp')
                );
                setProgress(false);
                setTempOtp(true);
                setEmail(userData.mail);
              }
            })
            .catch(err => {
              console.log(err);
              if (err) {
                setProgress(false);
              }
            });
        }
      } else {
        console.log('User Not Found');
        seterror({
          ...error,
          mobile: t('messages:Invalid_Mobile_Number'),
        });
        setProgress(false);
      }
    }
  };

  const validateOtp = () => {
    setProgress(true);

    isOtpValid(email, phone, config?.otpTo, otp)
      .then(res => {
        if (res.status === true) {
          data.RelatedTO = data.RelatedTO.map(item => {
            item.Name = item.RelatedContactName;
            item.ContactId = item.hed__RelatedContact__c;
            item.Type = KEY_USER_TYPE.parent;
            return item;
          });
          localStorage.setItem(KEY_PARENT_DETAILS, JSON.stringify(data));
          if (data.RelatedTO[0]) {
            // navigate to main layout
            localStorage.setItem(
              KEY_USER_DETAILS,
              JSON.stringify(data.RelatedTO[0])
            );
          }
          history.push(`/${Routes.home}`);
        } else {
          handleSnackbarOpen('Error', t('messages:Enter_Correct_Otp'));
        }
        setProgress(false);
      })
      .catch(err => {
        setProgress(false);
        handleSnackbarOpen('Error', t('messages:Enter_Correct_Otp'));
        console.log(err);
      });
  };

  return (
    <Box className={classes.root}>
      <KenInputTextField
        label={`${t('labels:Mobile_Number')}`}
        placeholder="Enter Your Mobile Number"
        required
        onChange={e => setPhone(e.target.value)}
        onKeyPress={e => {
          handleKeypress(e, config.smsURL ? getParent : generateOtp);
        }}
      />
      {error.mobile && <Typography color="error">{error.mobile}</Typography>}

      {tempOtp ? (
        <Box justify="center" mt={1} mb={1}>
          <Box
            textAlign="right"
            onClick={config.smsURL ? getParent : generateOtp}
            className={classes.resend}
          >
            {t('labels:Re_Send_Otp')}
          </Box>
          <KenInputTextField
            placeholder="Enter Otp"
            required
            label={`${t('labels:Enter_Otp')}`}
            onChange={e => {
              setOtp(e.target.value);
            }}
            onKeyPress={e => {
              handleKeypress(
                e,
                tempOtp
                  ? config.smsURL
                    ? validateOtp
                    : getParent
                  : config.smsURL
                  ? getParent
                  : generateOtp
              );
            }}
          />
          <Typography color="error">{error.otp}</Typography>
        </Box>
      ) : null}

      {phone && (
        <div className={classes.buttonDiv}>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={clsx(classes.buttonDiv, {
                [classes.hide]: progress,
              })}
              onClick={
                tempOtp
                  ? config.smsURL
                    ? validateOtp
                    : getParent
                  : config.smsURL
                  ? getParent
                  : generateOtp
              }
            >
              {tempOtp ? t('labels:Submit') : t('labels:Get_Otp')}
            </Button>
          </div>
        </div>
      )}
      <div
        className={clsx(classes.buttonDiv, {
          [classes.hide]: !progress,
        })}
      >
        <CircularProgress />
      </div>
      <KenSnackbar
        message={snackbarMessage}
        severity={snackbarSeverity}
        autoHideDuration={5000}
        open={openSnackbar}
        handleSnackbarClose={handleSnackbarClose}
        position="Top-Right"
      />
    </Box>
  );
};

export default ParentLogin;
