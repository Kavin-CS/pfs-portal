import React, { useEffect } from 'react';
import { Box, makeStyles, Grid, Button, Typography } from '@material-ui/core';
import KenFormCard from '../../global_components/KenFormCard/index';
import { useTranslation } from 'react-i18next';
import KenInputField from '../../global_components/KenInputField/index';
import { withFormik } from 'formik';
import KenSnackbar from '../../components/KenSnackbar/index';
import KenCheckbox from '../../global_components/KenCheckbox/index';
import { KEY_USER_DETAILS } from '../../utils/constants';
import * as Yup from 'yup';
import { putAccountDetails, getAccountDetails } from '../../utils/ApiService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import history from '../../utils/history';
import KenLoader from '../../components/KenLoader/index';
import fbAnalytics from '../../utils/Analytics';
import configContext from '../../utils/helpers/configHelper';

const useStyles = makeStyles(theme => ({
  dialogLinkText: {
    color: theme.palette.KenColors.link,
    fontSize: 14,
    marginLeft: 25,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default function FamilyInfoAll(props) {
  const { config } = React.useContext(configContext);

  useEffect(() => {
    if (config?.firebaseConfig) {
      fbAnalytics(config?.firebaseConfig, `pfs_accountDetails`);
    }
  }, []);
  return (
    <div>
      <FormikHoc {...props} />
    </div>
  );
}

const ParentForm = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldTouched,
    loader,
    setFieldValue,
    handleSubmit,
    setValues,
    drawerChanges,
  } = props;
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  React.useEffect(() => {
    drawerChanges('show');
  }, []);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const handleEdit = () => {
    if (values.disabled === true) {
      values.setDisabled(false);
      let data = values.dataCopy;
      values.setParentDetails({
        motherDetails: {
          aadhar: data.motherDetails ? data.motherDetails.aadhar : '',
          // PAN: data.motherDetails ? data.motherDetails.PAN : '',
          bankDetails: {
            accountNumber: data.motherDetails
              ? data.motherDetails.bankDetails.accountNumber
              : '',
            accountName: data.motherDetails
              ? data.motherDetails.bankDetails.accountName
              : '',
            bankName: data.motherDetails
              ? data.motherDetails.bankDetails.bankName
              : '',
            bankIFSC: data.motherDetails
              ? data.motherDetails.bankDetails.bankIFSC
              : '',
            isPrimary: data.motherDetails
              ? data.motherDetails.bankDetails.isPrimary
              : '',
          },
        },
        fatherDetails: {
          aadhar: data.fatherDetails ? data.fatherDetails.aadhar : '',
          // PAN: data.fatherDetails ? data.fatherDetails.PAN : '',
          bankDetails: {
            accountNumber: data.fatherDetails
              ? data.fatherDetails.bankDetails.accountNumber
              : '',
            accountName: data.fatherDetails
              ? data.fatherDetails.bankDetails.accountName
              : '',
            bankName: data.fatherDetails
              ? data.fatherDetails.bankDetails.bankName
              : '',
            bankIFSC: data.fatherDetails
              ? data.fatherDetails.bankDetails.bankIFSC
              : '',
            isPrimary: data.fatherDetails
              ? data.fatherDetails.bankDetails.isPrimary
              : '',
          },
        },
        guardianDetails: {
          aadhar: data.guardianDetails ? data.guardianDetails.aadhar : '',
          // PAN: data.guardianDetails ? data.guardianDetails.PAN : '',
          bankDetails: {
            accountNumber: data.guardianDetails
              ? data.guardianDetails.bankDetails.accountNumber
              : '',
            accountName: data.guardianDetails
              ? data.guardianDetails.bankDetails.accountName
              : '',
            bankName: data.guardianDetails
              ? data.guardianDetails.bankDetails.bankName
              : '',
            bankIFSC: data.guardianDetails
              ? data.guardianDetails.bankDetails.bankIFSC
              : '',
            isPrimary: data.guardianDetails
              ? data.guardianDetails.bankDetails.isPrimary
              : '',
          },
        },
      });
      values.handleClickOpen('Success', 'EDIT mode enabled');
    }
  };

  const [open, setOpen] = React.useState(false);

  values.handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
    history.push('/accountDetail');
    window.location.reload();
  };

  values.handleSnackbarOpen = (severity, message) => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    // console.log(name, e.target.checked);
    if (
      name === 'parentDetails.fatherDetails.bankDetails.isPrimary' &&
      e.target.checked === true
    ) {
      values.parentDetails.fatherDetails.bankDetails.isPrimary =
        e.target.checked;
      values.parentDetails.motherDetails.bankDetails.isPrimary = false;
      values.parentDetails.guardianDetails.bankDetails.isPrimary = false;
      setValues(values);
    }
    if (
      name === 'parentDetails.motherDetails.bankDetails.isPrimary' &&
      e.target.checked === true
    ) {
      values.parentDetails.motherDetails.bankDetails.isPrimary =
        e.target.checked;
      values.parentDetails.fatherDetails.bankDetails.isPrimary = false;
      values.parentDetails.guardianDetails.bankDetails.isPrimary = false;
      setValues(values);
    }

    if (
      name === 'parentDetails.guardianDetails.bankDetails.isPrimary' &&
      e.target.checked === true
    ) {
      values.parentDetails.guardianDetails.bankDetails.isPrimary =
        e.target.checked;
      values.parentDetails.fatherDetails.bankDetails.isPrimary = false;
      values.parentDetails.motherDetails.bankDetails.isPrimary = false;
      setValues(values);
    }

    // console.log(values);
  };

  return (
    <Box>
      <div style={{ marginLeft: 40 }}>
        <Typography style={{ fontSize: 14, fontWeight: '700' }}>
          1. Aadhar is required as per the CBSE regulations
        </Typography>
        <Typography style={{ fontSize: 14, fontWeight: '700' }}>
          2. Bank Account details are required for processing refund, if any
        </Typography>
      </div>
      <KenFormCard title={t('headings:Father_Details')}>
        <KenCheckbox
          disabled={values.disabled}
          label={t('labels:Mark_As_Primary_Account_For_Refund')}
          value={values.parentDetails.fatherDetails.bankDetails.isPrimary}
          name="parentDetails.fatherDetails.bankDetails.isPrimary"
          onChange={change.bind(
            null,
            'parentDetails.fatherDetails.bankDetails.isPrimary'
          )}
        />
        <Grid container spacing={5}>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(null, 'parentDetails.fatherDetails.aadhar')}
              name="parentDetails.fatherDetails.aadhar"
              value={values.parentDetails.fatherDetails.aadhar}
              label={t('labels:Aadhaar_Number')}
              subScript={'1'}
              errors={
                errors.parentDetails && errors.parentDetails.fatherDetails
                  ? errors.parentDetails.fatherDetails.aadhar
                    ? errors.parentDetails.fatherDetails.aadhar
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.fatherDetails
                  ? touched.parentDetails.fatherDetails.aadhar
                    ? touched.parentDetails.fatherDetails.aadhar
                    : null
                  : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.fatherDetails.bankDetails.accountName'
              )}
              name="parentDetails.fatherDetails.bankDetails.accountName"
              value={values.parentDetails.fatherDetails.bankDetails.accountName}
              label={t('labels:Account_Name')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.fatherDetails
                  ? errors.parentDetails.fatherDetails.bankDetails &&
                    errors.parentDetails.fatherDetails.bankDetails.accountName
                    ? errors.parentDetails.fatherDetails.bankDetails.accountName
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.fatherDetails
                  ? touched.parentDetails.fatherDetails.bankDetails &&
                    touched.parentDetails.fatherDetails.bankDetails.accountName
                    ? touched.parentDetails.fatherDetails.bankDetails
                        .accountName
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.fatherDetails.bankDetails.bankName'
              )}
              name="parentDetails.fatherDetails.bankDetails.bankName"
              value={values.parentDetails.fatherDetails.bankDetails.bankName}
              label={t('labels:Bank_Name')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.fatherDetails
                  ? errors.parentDetails.fatherDetails.bankDetails &&
                    errors.parentDetails.fatherDetails.bankDetails.bankName
                    ? errors.parentDetails.fatherDetails.bankDetails.bankName
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.fatherDetails
                  ? touched.parentDetails.fatherDetails.bankDetails &&
                    touched.parentDetails.fatherDetails.bankDetails.bankName
                    ? touched.parentDetails.fatherDetails.bankDetails.bankName
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.fatherDetails.bankDetails.accountNumber'
              )}
              name="parentDetails.fatherDetails.bankDetails.accountNumber"
              value={
                values.parentDetails.fatherDetails.bankDetails.accountNumber
              }
              label={t('labels:Account_Number')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.fatherDetails
                  ? errors.parentDetails.fatherDetails.bankDetails &&
                    errors.parentDetails.fatherDetails.bankDetails.accountNumber
                    ? errors.parentDetails.fatherDetails.bankDetails
                        .accountNumber
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.fatherDetails
                  ? touched.parentDetails.fatherDetails.bankDetails &&
                    touched.parentDetails.fatherDetails.bankDetails
                      .accountNumber
                    ? touched.parentDetails.fatherDetails.bankDetails
                        .accountNumber
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.fatherDetails.bankDetails.bankIFSC'
              )}
              name="parentDetails.fatherDetails.bankDetails.bankIFSC"
              value={values.parentDetails.fatherDetails.bankDetails.bankIFSC}
              label={t('labels:IFSC_Code')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.fatherDetails
                  ? errors.parentDetails.fatherDetails.bankDetails &&
                    errors.parentDetails.fatherDetails.bankDetails.bankIFSC
                    ? errors.parentDetails.fatherDetails.bankDetails.bankIFSC
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.fatherDetails
                  ? touched.parentDetails.fatherDetails.bankDetails &&
                    touched.parentDetails.fatherDetails.bankDetails.bankIFSC
                    ? touched.parentDetails.fatherDetails.bankDetails.bankIFSC
                    : null
                  : null
              }
            />
          </Grid>

          {/* <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(null, 'parentDetails.fatherDetails.PAN')}
              name="parentDetails.fatherDetails.PAN"
              value={values.parentDetails.fatherDetails.PAN}
              label={t('labels:Pan_Number')}
              errors={
                errors.parentDetails && errors.parentDetails.fatherDetails
                  ? errors.parentDetails.fatherDetails.PAN
                    ? errors.parentDetails.fatherDetails.PAN
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.fatherDetails
                  ? touched.parentDetails.fatherDetails.PAN
                    ? touched.parentDetails.fatherDetails.PAN
                    : null
                  : null
              }
            />
          </Grid> */}
        </Grid>
      </KenFormCard>

      <KenFormCard title={t('headings:Mother_Details')}>
        <KenCheckbox
          disabled={values.disabled}
          label={t('labels:Mark_As_Primary_Account_For_Refund')}
          subScript={'1'}
          value={values.parentDetails.motherDetails.bankDetails.isPrimary}
          name="parentDetails.motherDetails.bankDetails.isPrimary"
          onChange={change.bind(
            null,
            'parentDetails.motherDetails.bankDetails.isPrimary'
          )}
        />
        <Grid container spacing={5}>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(null, 'parentDetails.motherDetails.aadhar')}
              name="parentDetails.motherDetails.aadhar"
              value={values.parentDetails.motherDetails.aadhar}
              label={t('labels:Aadhaar_Number')}
              subScript={'1'}
              errors={
                errors.parentDetails && errors.parentDetails.motherDetails
                  ? errors.parentDetails.motherDetails.aadhar
                    ? errors.parentDetails.motherDetails.aadhar
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.motherDetails
                  ? touched.parentDetails.motherDetails.aadhar
                    ? touched.parentDetails.motherDetails.aadhar
                    : null
                  : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.motherDetails.bankDetails.accountName'
              )}
              name="parentDetails.motherDetails.bankDetails.accountName"
              value={values.parentDetails.motherDetails.bankDetails.accountName}
              label={t('labels:Account_Name')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.motherDetails
                  ? errors.parentDetails.motherDetails.bankDetails &&
                    errors.parentDetails.motherDetails.bankDetails.accountName
                    ? errors.parentDetails.motherDetails.bankDetails.accountName
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.motherDetails
                  ? touched.parentDetails.motherDetails.bankDetails &&
                    touched.parentDetails.motherDetails.bankDetails.accountName
                    ? touched.parentDetails.motherDetails.bankDetails
                        .accountName
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.motherDetails.bankDetails.bankName'
              )}
              name="parentDetails.motherDetails.bankDetails.bankName"
              value={values.parentDetails.motherDetails.bankDetails.bankName}
              label={t('labels:Bank_Name')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.motherDetails
                  ? errors.parentDetails.motherDetails.bankDetails &&
                    errors.parentDetails.motherDetails.bankDetails.bankName
                    ? errors.parentDetails.motherDetails.bankDetails.bankName
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.motherDetails
                  ? touched.parentDetails.motherDetails.bankDetails &&
                    touched.parentDetails.motherDetails.bankDetails.bankName
                    ? touched.parentDetails.motherDetails.bankDetails.bankName
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.motherDetails.bankDetails.accountNumber'
              )}
              name="parentDetails.motherDetails.bankDetails.accountNumber"
              value={
                values.parentDetails.motherDetails.bankDetails.accountNumber
              }
              label={t('labels:Account_Number')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.motherDetails
                  ? errors.parentDetails.motherDetails.bankDetails &&
                    errors.parentDetails.motherDetails.bankDetails.accountNumber
                    ? errors.parentDetails.motherDetails.bankDetails
                        .accountNumber
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.motherDetails
                  ? touched.parentDetails.motherDetails.bankDetails &&
                    touched.parentDetails.motherDetails.bankDetails
                      .accountNumber
                    ? touched.parentDetails.motherDetails.bankDetails
                        .accountNumber
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.motherDetails.bankDetails.bankIFSC'
              )}
              name="parentDetails.motherDetails.bankDetails.bankIFSC"
              value={values.parentDetails.motherDetails.bankDetails.bankIFSC}
              subScript={'2'}
              label={t('labels:IFSC_Code')}
              errors={
                errors.parentDetails && errors.parentDetails.motherDetails
                  ? errors.parentDetails.motherDetails.bankDetails &&
                    errors.parentDetails.motherDetails.bankDetails.bankIFSC
                    ? errors.parentDetails.motherDetails.bankDetails.bankIFSC
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.motherDetails
                  ? touched.parentDetails.motherDetails.bankDetails &&
                    touched.parentDetails.motherDetails.bankDetails.bankIFSC
                    ? touched.parentDetails.motherDetails.bankDetails.bankIFSC
                    : null
                  : null
              }
            />
          </Grid>

          {/* <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(null, 'parentDetails.motherDetails.PAN')}
              name="parentDetails.motherDetails.PAN"
              value={values.parentDetails.motherDetails.PAN}
              label={t('labels:Pan_Number')}
              errors={
                errors.parentDetails && errors.parentDetails.motherDetails
                  ? errors.parentDetails.motherDetails.PAN
                    ? errors.parentDetails.motherDetails.PAN
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.motherDetails
                  ? touched.parentDetails.motherDetails.PAN
                    ? touched.parentDetails.motherDetails.PAN
                    : null
                  : null
              }
            />
          </Grid> */}
        </Grid>
      </KenFormCard>

      <KenFormCard title={'GUARDIAN DETAILS'}>
        <KenCheckbox
          disabled={values.disabled}
          label={t('labels:Mark_As_Primary_Account_For_Refund')}
          value={values.parentDetails.guardianDetails.bankDetails.isPrimary}
          name="parentDetails.guardianDetails.bankDetails.isPrimary"
          onChange={change.bind(
            null,
            'parentDetails.guardianDetails.bankDetails.isPrimary'
          )}
        />
        <Grid container spacing={5}>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.guardianDetails.aadhar'
              )}
              name="parentDetails.guardianDetails.aadhar"
              value={values.parentDetails.guardianDetails.aadhar}
              subScript={'1'}
              label={t('labels:Aadhaar_Number')}
              errors={
                errors.parentDetails && errors.parentDetails.guardianDetails
                  ? errors.parentDetails.guardianDetails.aadhar
                    ? errors.parentDetails.guardianDetails.aadhar
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.guardianDetails
                  ? touched.parentDetails.guardianDetails.aadhar
                    ? touched.parentDetails.guardianDetails.aadhar
                    : null
                  : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.guardianDetails.bankDetails.accountName'
              )}
              name="parentDetails.guardianDetails.bankDetails.accountName"
              value={
                values.parentDetails.guardianDetails.bankDetails.accountName
              }
              label={t('labels:Account_Name')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.guardianDetails
                  ? errors.parentDetails.guardianDetails.bankDetails &&
                    errors.parentDetails.guardianDetails.bankDetails.accountName
                    ? errors.parentDetails.guardianDetails.bankDetails
                        .accountName
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.guardianDetails
                  ? touched.parentDetails.guardianDetails.bankDetails &&
                    touched.parentDetails.guardianDetails.bankDetails
                      .accountName
                    ? touched.parentDetails.guardianDetails.bankDetails
                        .accountName
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.guardianDetails.bankDetails.bankName'
              )}
              name="parentDetails.guardianDetails.bankDetails.bankName"
              value={values.parentDetails.guardianDetails.bankDetails.bankName}
              label={t('labels:Bank_Name')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.guardianDetails
                  ? errors.parentDetails.guardianDetails.bankDetails &&
                    errors.parentDetails.guardianDetails.bankDetails.bankName
                    ? errors.parentDetails.guardianDetails.bankDetails.bankName
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.guardianDetails
                  ? touched.parentDetails.guardianDetails.bankDetails &&
                    touched.parentDetails.guardianDetails.bankDetails.bankName
                    ? touched.parentDetails.guardianDetails.bankDetails.bankName
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.guardianDetails.bankDetails.accountNumber'
              )}
              name="parentDetails.guardianDetails.bankDetails.accountNumber"
              value={
                values.parentDetails.guardianDetails.bankDetails.accountNumber
              }
              label={t('labels:Account_Number')}
              subScript={'2'}
              errors={
                errors.parentDetails && errors.parentDetails.guardianDetails
                  ? errors.parentDetails.guardianDetails.bankDetails &&
                    errors.parentDetails.guardianDetails.bankDetails
                      .accountNumber
                    ? errors.parentDetails.guardianDetails.bankDetails
                        .accountNumber
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.guardianDetails
                  ? touched.parentDetails.guardianDetails.bankDetails &&
                    touched.parentDetails.guardianDetails.bankDetails
                      .accountNumber
                    ? touched.parentDetails.guardianDetails.bankDetails
                        .accountNumber
                    : null
                  : null
              }
            />
          </Grid>
          <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(
                null,
                'parentDetails.guardianDetails.bankDetails.bankIFSC'
              )}
              name="parentDetails.guardianDetails.bankDetails.bankIFSC"
              value={values.parentDetails.guardianDetails.bankDetails.bankIFSC}
              subScript={'2'}
              label={t('labels:IFSC_Code')}
              errors={
                errors.parentDetails && errors.parentDetails.guardianDetails
                  ? errors.parentDetails.guardianDetails.bankDetails &&
                    errors.parentDetails.guardianDetails.bankDetails.bankIFSC
                    ? errors.parentDetails.guardianDetails.bankDetails.bankIFSC
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.guardianDetails
                  ? touched.parentDetails.guardianDetails.bankDetails &&
                    touched.parentDetails.guardianDetails.bankDetails.bankIFSC
                    ? touched.parentDetails.guardianDetails.bankDetails.bankIFSC
                    : null
                  : null
              }
            />
          </Grid>

          {/* <Grid item md={3}>
            <KenInputField
              required={true}
              disabled={values.disabled}
              onChange={change.bind(null, 'parentDetails.guardianDetails.PAN')}
              name="parentDetails.guardianDetails.PAN"
              value={values.parentDetails.guardianDetails.PAN}
              label={t('labels:Pan_Number')}
              errors={
                errors.parentDetails && errors.parentDetails.guardianDetails
                  ? errors.parentDetails.guardianDetails.PAN
                    ? errors.parentDetails.guardianDetails.PAN
                    : null
                  : null
              }
              touched={
                touched.parentDetails && touched.parentDetails.guardianDetails
                  ? touched.parentDetails.guardianDetails.PAN
                    ? touched.parentDetails.guardianDetails.PAN
                    : null
                  : null
              }
            />
          </Grid> */}
        </Grid>
      </KenFormCard>
      <KenSnackbar
        message={snackbarMessage}
        severity={snackbarSeverity}
        autoHideDuration={5000}
        open={openSnackbar}
        handleSnackbarClose={handleSnackbarClose}
        position="Bottom-Right"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Consent'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is to confirm that the information provided is correct and I
            give my consent for using this for the purpose intended by NCFE.
          </DialogContentText>
        </DialogContent>
        <Typography
          onClick={() => {
            window.open(
              'https://inazstgpfs3001.blob.core.windows.net/assets/StudentPersonalDataProtectionPolicy.pdf',
              '_blank'
            );
          }}
          className={classes.dialogLinkText}
        >
          Student Personal Data Protection Policy
        </Typography>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Box m={4} textAlign="right">
        <Button
          variant="contained"
          color="primary"
          onClick={handleEdit}
          style={{ marginRight: 8 }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={values.disabled ? true : false}
        >
          {t('labels:Submit')}
        </Button>
      </Box>
      {values.loading ? <KenLoader /> : ''}
    </Box>
  );
};

const FormikHoc = props => {
  const { t } = useTranslation();
  const us = false;
  const [parentDetails, setParentDetails] = React.useState({
    motherDetails: {
      aadhar: '',
      bankDetails: {
        accountNumber: '',
        accountName: '',
        bankName: '',
        bankIFSC: '',
        isPrimary: false,
      },
    },
    fatherDetails: {
      aadhar: '',
      bankDetails: {
        accountNumber: '',
        accountName: '',
        bankName: '',
        bankIFSC: '',
        isPrimary: false,
      },
    },
    guardianDetails: {
      aadhar: '',
      bankDetails: {
        accountNumber: '',
        accountName: '',
        bankName: '',
        bankIFSC: '',
        isPrimary: false,
      },
    },
  });
  const studentDetails = JSON.parse(localStorage.getItem(KEY_USER_DETAILS));
  let handleSnackbarOpen;
  let handleClickOpen;
  const [disabled, setDisabled] = React.useState(false);
  const [dataCopy, setDataCopy] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const handleHideDigits = (string, reg) => {
    return string.replace(reg, m => '*'.repeat(m.length));
  };

  useEffect(() => {
    getAccountDetails(studentDetails.ContactId)
      .then(res => {
        let data = res.data;
        setDataCopy(data);
        if (data.fatherDetails || data.motherDetails || data.guardianDetails) {
          setParentDetails({
            motherDetails: {
              aadhar: data.motherDetails
                ? handleHideDigits(data.motherDetails.aadhar, /.{5,9}/)
                : '',
              // PAN: data.motherDetails
              //   ? handleHideDigits(data.motherDetails.PAN, /.{4,7}/)
              //   : '',
              bankDetails: {
                accountNumber: data.motherDetails
                  ? data.motherDetails.bankDetails.accountNumber
                  : '',
                accountName: data.motherDetails
                  ? data.motherDetails.bankDetails.accountName
                  : '',
                bankName: data.motherDetails
                  ? data.motherDetails.bankDetails.bankName
                  : '',
                bankIFSC: data.motherDetails
                  ? data.motherDetails.bankDetails.bankIFSC
                  : '',
                isPrimary: data.motherDetails
                  ? data.motherDetails.bankDetails.isPrimary
                  : '',
              },
            },
            fatherDetails: {
              aadhar: data.fatherDetails
                ? handleHideDigits(data.fatherDetails.aadhar, /.{5,9}/)
                : '',
              // PAN: data.fatherDetails
              //   ? handleHideDigits(data.fatherDetails.PAN, /.{4,7}/)
              //   : '',
              bankDetails: {
                accountNumber: data.fatherDetails
                  ? data.fatherDetails.bankDetails.accountNumber
                  : '',
                accountName: data.fatherDetails
                  ? data.fatherDetails.bankDetails.accountName
                  : '',
                bankName: data.fatherDetails
                  ? data.fatherDetails.bankDetails.bankName
                  : '',
                bankIFSC: data.fatherDetails
                  ? data.fatherDetails.bankDetails.bankIFSC
                  : '',
                isPrimary: data.fatherDetails
                  ? data.fatherDetails.bankDetails.isPrimary
                  : '',
              },
            },
            guardianDetails: {
              aadhar: data.guardianDetails
                ? handleHideDigits(data.guardianDetails.aadhar, /.{5,9}/)
                : '',
              // PAN: data.guardianDetails
              //   ? handleHideDigits(data.guardianDetails.PAN, /.{4,7}/)
              //   : '',
              bankDetails: {
                accountNumber: data.guardianDetails
                  ? data.guardianDetails.bankDetails.accountNumber
                  : '',
                accountName: data.guardianDetails
                  ? data.guardianDetails.bankDetails.accountName
                  : '',
                bankName: data.guardianDetails
                  ? data.guardianDetails.bankDetails.bankName
                  : '',
                bankIFSC: data.guardianDetails
                  ? data.guardianDetails.bankDetails.bankIFSC
                  : '',
                isPrimary: data.guardianDetails
                  ? data.guardianDetails.bankDetails.isPrimary
                  : '',
              },
            },
          });
          setDisabled(true);
        } else {
          setDisabled(false);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log('Error', err);
        setLoading(false);
      });
  }, []);

  const FormikForm = withFormik({
    mapPropsToValues: () => ({
      parentDetails: parentDetails,
      handleSnackbarOpen: handleSnackbarOpen,
      disabled: disabled,
      handleClickOpen: handleClickOpen,
      setParentDetails: setParentDetails,
      dataCopy: dataCopy,
      setDisabled: setDisabled,
      setLoading: setLoading,
      loading: loading,
    }),

    validationSchema: Yup.object().shape({
      parentDetails: Yup.object().shape({
        fatherDetails: Yup.object().shape({
          aadhar: Yup.string().when('bankDetails.isPrimary', {
            is: true,
            then: Yup.string()
              .matches(/^[0-9]*$/, 'Must be a valid Aadhaar Number')
              .min(12, 'Must be of 12 digits')
              .max(12, 'Must be of 12 digits')
              .required('Required'),
            otherwise: Yup.string()
              .matches(/^[0-9]*$/, 'Must be a valid Aadhaar Number')
              .min(12, 'Must be of 12 digits')
              .max(12, 'Must be of 12 digits'),
          }),
          // PAN: Yup.string().when('bankDetails.isPrimary', {
          //   is: true,
          //   then: Yup.string()
          //     .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Must be a valid PAN Number')
          //     .min(10, 'Must be of 10 digits')
          //     .max(10, 'Must be of 10 digits')
          //     .required('Required'),
          //   otherwise: Yup.string()
          //     .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Must be a valid PAN Number')
          //     .min(10, 'Must be of 10 digits')
          //     .max(10, 'Must be of 10 digits'),
          // }),

          bankDetails: Yup.object().shape({
            accountName: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid Name'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid Name'
              ),
            }),

            accountNumber: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string()
                .matches(/^[0-9]*$/, 'Must be a valid Account Number')
                .min(8, 'Must be a valid Account Number')
                .max(18, 'Must be a valid Account Number'),
              // .required('Required'),
              otherwise: Yup.string()
                .matches(/^[0-9]*$/, 'Must be a valid Account Number')
                .min(8, 'Must be a valid Account Number')
                .max(18, 'Must be a valid Account Number'),
            }),

            bankName: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid bank name'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid bank name'
              ),
            }),

            bankIFSC: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /[A-Z|a-z]{4}[0][\d]{6}$/,
                'Please provide a correct IFSC code'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /[A-Z|a-z]{4}[0][\d]{6}$/,
                'Please provide a correct IFSC code'
              ),
            }),
          }),
        }),
        motherDetails: Yup.object().shape({
          aadhar: Yup.string().when('bankDetails.isPrimary', {
            is: true,
            then: Yup.string()
              .matches(/^[0-9]*$/, 'Must be a valid Aadhaar Number')
              .min(12, 'Must be of 12 digits')
              .max(12, 'Must be of 12 digits')
              .required('Required'),
            otherwise: Yup.string()
              .matches(/^[0-9]*$/, 'Must be a valid Aadhaar Number')
              .min(12, 'Must be of 12 digits')
              .max(12, 'Must be of 12 digits'),
          }),
          // PAN: Yup.string().when('bankDetails.isPrimary', {
          //   is: true,
          //   then: Yup.string()
          //     .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Must be a valid PAN Number')
          //     .min(10, 'Must be of 10 digits')
          //     .max(10, 'Must be of 10 digits')
          //     .required('Required'),
          //   otherwise: Yup.string()
          //     .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Must be a valid PAN Number')
          //     .min(10, 'Must be of 10 digits')
          //     .max(10, 'Must be of 10 digits'),
          // }),

          bankDetails: Yup.object().shape({
            accountName: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid Name'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid Name'
              ),
            }),

            accountNumber: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string()
                .matches(/^[0-9]*$/, 'Must be a valid Account Number')
                .min(8, 'Must be a valid Account Number')
                .max(18, 'Must be a valid Account Number'),
              // .required('Required'),
              otherwise: Yup.string()
                .matches(/^[0-9]*$/, 'Must be a valid Account Number')
                .min(8, 'Must be a valid Account Number')
                .max(18, 'Must be a valid Account Number'),
            }),

            bankName: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid bank name'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid bank name'
              ),
            }),

            bankIFSC: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /[A-Z|a-z]{4}[0][\d]{6}$/,
                'Please provide a correct IFSC code'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /[A-Z|a-z]{4}[0][\d]{6}$/,
                'Please provide a correct IFSC code'
              ),
            }),
          }),
        }),
        guardianDetails: Yup.object().shape({
          aadhar: Yup.string().when('bankDetails.isPrimary', {
            is: true,
            then: Yup.string()
              .matches(/^[0-9]*$/, 'Must be a valid Aadhaar Number')
              .min(12, 'Must be of 12 digits')
              .max(12, 'Must be of 12 digits')
              .required('Required'),
            otherwise: Yup.string()
              .matches(/^[0-9]*$/, 'Must be a valid Aadhaar Number')
              .min(12, 'Must be of 12 digits')
              .max(12, 'Must be of 12 digits'),
          }),
          // PAN: Yup.string().when('bankDetails.isPrimary', {
          //   is: true,
          //   then: Yup.string()
          //     .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Must be a valid PAN Number')
          //     .min(10, 'Must be of 10 digits')
          //     .max(10, 'Must be of 10 digits')
          //     .required('Required'),
          //   otherwise: Yup.string()
          //     .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Must be a valid PAN Number')
          //     .min(10, 'Must be of 10 digits')
          //     .max(10, 'Must be of 10 digits'),
          // }),

          bankDetails: Yup.object().shape({
            accountName: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid Name'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid Name'
              ),
            }),

            accountNumber: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string()
                .matches(/^[0-9]*$/, 'Must be a valid Account Number')
                .min(8, 'Must be a valid Account Number')
                .max(18, 'Must be a valid Account Number'),
              // .required('Required'),
              otherwise: Yup.string()
                .matches(/^[0-9]*$/, 'Must be a valid Account Number')
                .min(8, 'Must be a valid Account Number')
                .max(18, 'Must be a valid Account Number'),
            }),

            bankName: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid bank name'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /^[a-zA-Z ]*$/,
                'Must be a valid bank name'
              ),
            }),

            bankIFSC: Yup.string().when('isPrimary', {
              is: true,
              then: Yup.string().matches(
                /[A-Z|a-z]{4}[0][\d]{6}$/,
                'Please provide a correct IFSC code'
              ),
              // .required('Required'),
              otherwise: Yup.string().matches(
                /[A-Z|a-z]{4}[0][\d]{6}$/,
                'Please provide a correct IFSC code'
              ),
            }),
          }),
        }),
      }),
    }),

    handleSubmit: values => {
      console.log('values', values);
      const parentsPayload = {
        orgId: '5fa8daece3eb1f18d4250e98',
        fatherDetails: values.parentDetails.fatherDetails,
        motherDetails: values.parentDetails.motherDetails,
        guardianDetails: values.parentDetails.guardianDetails,
      };

      console.log(parentsPayload);
      if (
        (values.parentDetails.guardianDetails.bankDetails.isPrimary === true &&
          values.parentDetails.fatherDetails.bankDetails.isPrimary === true &&
          values.parentDetails.motherDetails.bankDetails.isPrimary === true) ||
        (values.parentDetails.fatherDetails.bankDetails.isPrimary === true &&
          values.parentDetails.motherDetails.bankDetails.isPrimary === true) ||
        (values.parentDetails.guardianDetails.bankDetails.isPrimary === true &&
          values.parentDetails.fatherDetails.bankDetails.isPrimary === true) ||
        (values.parentDetails.guardianDetails.bankDetails.isPrimary === true &&
          values.parentDetails.motherDetails.bankDetails.isPrimary === true)
      ) {
        values.handleSnackbarOpen(
          'Warning',
          'Please select only one as Primary Account'
        );
      } else if (
        values.parentDetails.motherDetails.bankDetails.isPrimary === false &&
        values.parentDetails.fatherDetails.bankDetails.isPrimary === false &&
        values.parentDetails.guardianDetails.bankDetails.isPrimary === false
      ) {
        values.handleSnackbarOpen(
          'Warning',
          'Please select one as Primary Account'
        );
      } else if (values.disabled === true) {
        values.handleSnackbarOpen(
          'Warning',
          'You can only submit in the EDIT mode'
        );
      } else {
        if (
          (values.parentDetails.guardianDetails.bankDetails.isPrimary ===
            true ||
            values.parentDetails.fatherDetails.bankDetails.isPrimary === true ||
            values.parentDetails.motherDetails.bankDetails.isPrimary ===
              true) &&
          values.disabled === false
        ) {
          putAccountDetails(studentDetails.ContactId, parentsPayload).then(
            res => {
              console.log(res);
              values.handleClickOpen();
            }
          );
          console.log(values);
        }
      }
    },
    displayName: 'ParentDetails',
  })(ParentForm);

  return <FormikForm {...props} />;
};
