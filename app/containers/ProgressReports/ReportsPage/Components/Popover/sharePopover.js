import { Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  typo: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#EEEEEE',
    },
  },
}));

export default function SharePopover(props) {
  const { handleSnackbarOpen } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    handleSnackbarOpen('success', t('messages:Link_Copied_Successfully'));
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography>{t('translations:Share_Via_Email')}</Typography>
      </Grid>
      <Grid item className={classes.typo}>
        <Typography onClick={handleCopyLink}>
          {t('translations:Copy_Link')}
        </Typography>
      </Grid>
    </Grid>
  );
}
