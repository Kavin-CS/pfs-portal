import React from 'react';
import { makeStyles, Box, Typography, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Dropzone from 'react-dropzone';
import UploadIcon from '../../../.././../../../../../assets/icons/UploadIconBlue.svg';
import CancelIcon from '../../../.././../../../../../assets/icons/Cancel.svg';
import clsx from 'clsx';
import { KEY_EMPTY_VALUES_PLACEHOLDERS } from '../../../../../../../../../utils/constants';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles(theme => ({
  headings: {
    color: theme.palette.KenColors.tertiaryBlue502,
    fontSize: '12px',
  },
  sign: {
    height: '50px',
    minWidth: '226px',
    margin: '0px 10px',
  },
  uploadSignLink: {
    textDecoration: 'none',
    color: theme.palette.KenColors.tertiaryBlue80,
    cursor: 'pointer',
    fontSize: '10px',
  },
  linkContainer: {
    height: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  uploadHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '14px',
  },
  uploadIcon: {
    height: '16px',
    margin: '8px',
  },
  cancelIconContainer: {
    display: 'flex',
  },
  uploadCancelIcon: {
    cursor: 'pointer',
  },
  uploadSaveIcon: {
    cursor: 'pointer',
    height: '22px',
    color: theme.palette.KenColors.green,
    margin: '0px 5px',
  },
  active: {
    background: theme.palette.KenColors.tertiaryBlue40,
    border: `0.6px dashed ${theme.palette.KenColors.gradeSectionBorder}`,
    boxSizing: 'border-box',
    borderRadius: '6px',
  },
  activeImage: {
    justifyContent: 'center',
  },
  box: {
    backgroundColor: theme.palette.KenColors.tertiaryBlue40,
    borderRadius: '4px',
    textAlign: 'center',
    padding: '0px 0px 0px 20px',
    // minHeight: '100%',
    //   minHeight: '100vh',
  },
  container: {
    width: '100%',
    padding: '4px',
  },
  padding: {
    padding: '0px 0px 20px 20px',
  },
  dashContainer: {
    textAlign: 'left',
    fontSize: '12px',
    lineHeight: '100%',
    color: theme.palette.KenColors.tertiaryBlue502,
  },
}));

const SignatureCard = props => {
  const {
    signUrl,
    handleDrop,
    index,
    title,
    showRemoveFileIcon,
    onCancelClick,
    onSaveClick,
    isNewlyAdded,
    profileMatch,
    showSaveFileIcon,
  } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box
      className={clsx({
        [classes.container]: true, //always applies
        [classes.active]: showRemoveFileIcon && isNewlyAdded, //only when true
      })}
    >
      <Box
        className={classes.box}
        className={clsx({
          [classes.box]: true, //always applies
          [classes.padding]: !signUrl, //only when true
        })}
      >
        <Box>
          {signUrl ? (
            <>
              <Box className={classes.uploadHeading}>
                <Typography className={classes.headings}>{title}</Typography>
                <div>
                  {showRemoveFileIcon && isNewlyAdded && (
                    <img
                      src={CancelIcon}
                      className={classes.uploadCancelIcon}
                      onClick={() => onCancelClick(index)}
                    />
                  )}
                  {showSaveFileIcon && isNewlyAdded && (
                    <CheckCircleOutlineIcon
                      className={classes.uploadSaveIcon}
                      onClick={() => onSaveClick(index)}
                    />
                  )}
                </div>
              </Box>

              <Box
                className={clsx({
                  [classes.cancelIconContainer]: true, //always applies
                  [classes.activeImage]: showRemoveFileIcon && isNewlyAdded, //only when true
                })}
              >
                {!showRemoveFileIcon && !isNewlyAdded && (
                  <img
                    src={`data:image/jpg;base64, ${signUrl}`}
                    alt={'sign'}
                    className={classes.sign}
                  />
                )}

                {showRemoveFileIcon && isNewlyAdded && (
                  <img src={signUrl} alt={'sign'} className={classes.sign} />
                )}
              </Box>
            </>
          ) : (
            <>
              {profileMatch && (
                <Dropzone
                  onDrop={acceptedFiles => handleDrop(index, acceptedFiles)}
                  style={{ height: '100%' }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input
                          {...getInputProps()}
                          accept="image/jpeg, image/png, image/svg"
                        />
                        <Box className={classes.uploadHeading}>
                          <Typography className={classes.headings}>
                            {title}
                          </Typography>
                        </Box>
                        <Box className={classes.linkContainer}>
                          <Link
                            variant="caption"
                            className={classes.uploadSignLink}
                          >
                            <img
                              src={UploadIcon}
                              className={classes.uploadIcon}
                            />
                            <Typography className={classes.uploadSignLink}>
                              {' '}
                              {t('labels:No_Sign_Added')}
                            </Typography>
                          </Link>
                        </Box>
                      </div>
                    </section>
                  )}
                </Dropzone>
              )}
              {!profileMatch && (
                <>
                  <Box className={classes.uploadHeading}>
                    <Typography className={classes.headings}>
                      {title}
                    </Typography>
                  </Box>
                  <Box className={classes.dashContainer}>
                    {KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default SignatureCard;
