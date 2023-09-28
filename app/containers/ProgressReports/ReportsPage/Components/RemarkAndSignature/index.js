import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DetailsContent from './Components/DetailsContent';
import RemarksContent from './Components/RemarksContent';
import SignatureContent from './Components/SignatureContent/index';
import { uploadSignature } from '../../../../../utils/ApiService';
import { KEY_SIGNATURE } from '../../../../../utils/constants';
import KenLoader from '../../../../../components/KenLoader/fullLoader';
import KenSnackBar from '../../../../../components/KenSnackbar';

const useStyles = makeStyles(theme => ({
  signContainer: {
    paddingLeft: '12px',
  },
}));

const RemarkAndSignature = props => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { details, remarks, signatures, ProgramId, setStudentInfo } = props;
  const [signs, setSigns] = useState(signatures);
  const [showRemoveFileIcon, setShowRemoveFileIcon] = useState(false);

  const [showSaveFileIcon, setShowSaveFileIcon] = useState(false);
  const [droppedFiles, setDroppedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState();
  const [snackbarMessage, setSnackbarMessage] = useState();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = (severity, message) => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };

  const handleDrop = (index, acceptedFiles) => {
    setShowRemoveFileIcon(true);
    setShowSaveFileIcon(true);
    let file = acceptedFiles[0];
    if (
      KEY_SIGNATURE?.ALLOWED_FILE_TYPES?.includes(file?.type) &&
      file.size <= KEY_SIGNATURE.MAX_FILE_SIZE
    ) {
      const fileURL = URL.createObjectURL(acceptedFiles[0]);
      setDroppedFiles(acceptedFiles);
      let signaturesArray = signs;
      let obj = {
        label: signs[index]?.label,
        value: fileURL,
        newlyAdded: true,
        signType: signs[index]?.key,
      };
      signaturesArray[index] = obj;
      setSigns([...signaturesArray]);
    } else {
      //   alert(t('messages:Supported_Signature_File'));
      handleSnackbarOpen('warning', t('messages:Supported_Signature_File'));
    }
  };
  const removeFile = index => {
    let currentSigns = [...signs];
    if (currentSigns.length > 0) {
      currentSigns[index].value = '';
      currentSigns[index].newlyAdded = false;
      setSigns([...currentSigns]);
    }
  };

  const onSaveClick = index => {
    let currentSigns = [...signs];
    const signType = currentSigns[index]?.signType;
    const file = droppedFiles[0];
    if (droppedFiles && ProgramId && signType && file) {
      setLoading(true);
      uploadSignature(ProgramId, signType, file)
        .then(res => {
          setLoading(false);
          setShowRemoveFileIcon(false);
          setShowSaveFileIcon(false);
          setStudentInfo(prev => {
            return { ...prev, signatureUpload: true };
          });
        })
        .catch(err => {
          setLoading(false);
          if (err?.response?.data?.hasOwnProperty('storageErrors')) {
            alert(t('messages:Supported_Signature_File'));
          } else {
            alert(t('messages:Something_Wrong'));
          }
        });
    }
  };

  useEffect(() => {
    let signaturesCopy = [...signatures];
    const teacher = signaturesCopy.find(
      sign => sign.label === t('labels:Class_Teacher_Sign')
    );
    const parent = signaturesCopy.find(
      sign => sign.label === t('labels:Parent_Sign')
    );
    const head = signaturesCopy.find(
      sign => sign.label === t('labels:Primary_Head_Sign')
    );
    signaturesCopy = [{ ...teacher }, { ...head }, { ...parent }];
    setSigns(signaturesCopy);
  }, [signatures]);
  return (
    <>
      {loading && <KenLoader />}
      <Box data-testid="remark-and-signature-component" p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} container spacing={3}>
            {details && (
              <Grid item xs={12} md={5}>
                <DetailsContent
                  data={details}
                  title={t('headings:Remark_And_Signature_Details')}
                />
              </Grid>
            )}
            <Grid item xs={12} md={7}>
              <RemarksContent
                data={remarks}
                title={t('headings:Remark_And_Signature_Remarks')}
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            container
            spacing={1}
            direction="column"
            alignItems="center"
            className={classes.signContainer}
          >
            {signs &&
              Array.isArray(signs) &&
              signs.map((item, index) => {
                return (
                  <SignatureContent
                    index={index}
                    signUrl={item.value}
                    title={item.label}
                    showRemoveFileIcon={showRemoveFileIcon}
                    showSaveFileIcon={showSaveFileIcon}
                    isNewlyAdded={item.newlyAdded ? true : false}
                    onCancelClick={removeFile}
                    handleDrop={handleDrop}
                    onSaveClick={onSaveClick}
                  />
                );
              })}
          </Grid>
        </Grid>
        <KenSnackBar
          key={snackbarMessage}
          message={snackbarMessage}
          severity={snackbarSeverity}
          autoHideDuration={4000}
          open={openSnackbar}
          handleSnackbarClose={handleSnackbarClose}
          position="Bottom-Right"
        />
      </Box>
    </>
  );
};
export default RemarkAndSignature;
