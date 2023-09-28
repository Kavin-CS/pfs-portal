import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import KenSwitch from '../../../../../components/KenSwitch/index';

const useStyles = makeStyles(theme => ({
  termLabel: {
    color: theme.palette.KenColors.gradeTermLabel,
    fontSize: 12,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  termWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 12,
    // paddingLeft: 18,
    // paddingRight: 32,
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      marginLeft: 10,
    },
  },
  switchLabel: {
    color: theme.palette.KenColors.gradeSectionHeaderLabel,
    fontSize: 13,
    marginLeft: 8,
  },
}));

export default function TermSectionHeader(props) {
  const classes = useStyles();
  const { termLabel, onShowSwitch = true } = props;
  const { t } = useTranslation();

  const handleChange = e => {
    console.log(e.target.checked, 'e...');
  };

  return (
    <Grid
      container
      className={classes.termWrap}
      data-testid="term-section-header"
    >
      <Grid className={classes.termLabel} data-testid="term-section-title">
        {termLabel}
      </Grid>
      {onShowSwitch && (
        <Box className={classes.subHeader}>
          <KenSwitch
            onChangeSwitch={handleChange}
            switchLabel={
              <Typography className={classes.switchLabel}>
                {t('labels:View_Table')}
              </Typography>
            }
          />
        </Box>
      )}
    </Grid>
  );
}
