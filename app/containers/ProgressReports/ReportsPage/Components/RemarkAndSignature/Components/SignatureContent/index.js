import React, { useState, useEffect } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import SignatureCard from './Components/SignatureCard';
import { getUserDetails } from '../../../../../../../utils/helpers/storageHelper';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    margin: '15px 0px',
  },
}));

const SignatureContent = props => {
  const {
    index,
    title,
    showRemoveFileIcon,
    isNewlyAdded,
    onCancelClick,
    signUrl,
    handleDrop,
    showSaveFileIcon,
    onSaveClick,
  } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const [profileMatch, setProfileMatch] = useState(false);
  const profile = getUserDetails();

  useEffect(() => {
    if (
      title === t('labels:Class_Teacher_Sign') &&
      profile?.Type?.toLowerCase() === 'faculty'
    ) {
      setProfileMatch(true);
    }
  }, [title]);

  return (
    <Box className={classes.box}>
      <SignatureCard
        signUrl={signUrl}
        handleDrop={handleDrop}
        index={index}
        showRemoveFileIcon={showRemoveFileIcon}
        showSaveFileIcon={showSaveFileIcon}
        onSaveClick={onSaveClick}
        isNewlyAdded={isNewlyAdded}
        onCancelClick={onCancelClick}
        title={title}
        profileMatch={profileMatch}
      />
    </Box>
  );
};
export default SignatureContent;
