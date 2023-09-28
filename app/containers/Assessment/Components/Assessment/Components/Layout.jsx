import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import KenSelect from '../../../../../components/KenSelect';
import KenRadioGroup from '../../../../../global_components/KenRadioGroup/index';
import { useTranslation } from 'react-i18next';
import AssessmentData from '../../../AssessmentDetails.json';

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.KenColors.neutral10,
    padding: 16,
  },
  header: {
    color: theme.palette.KenColors.neutral900,
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 16,
  },

  wrap: {
    marginBottom: 24,
  },

  inputBaseClass: {
    background: theme.palette.KenColors.kenWhite,
  },
}));

export default function Layout(props) {
  const { values, touched, errors, setFieldTouched, setFieldValue } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const radioOption = [
    {
      label: 'Free navigation',
      value: 'Free navigation',
    },
    {
      label: 'Sequential',
      value: 'Sequential',
    },
  ];

  return (
    <Box className={classes.container} mt={2}>
      <Typography className={classes.header}>
        {t('labels:Layout_settings')}
      </Typography>
      <Grid md={5} className={classes.wrap}>
        <KenSelect
          label="No. of questions per page"
          inputBaseRootClass={classes.inputBaseClass}
          options={AssessmentData.QuestionPerPage}
          onChange={newValue => {
            setFieldValue('questionsPerPage', newValue.target.value);
          }}
          setFieldTouched={setFieldTouched}
          name="questionsPerPage"
          value={values.questionsPerPage}
          variant="outline"
          errors={errors?.questionsPerPage}
          touched={touched?.questionsPerPage}
        />
      </Grid>
      <Grid md={8} className={classes.wrap}>
        <KenRadioGroup
          label="Navigation method"
          options={radioOption}
          onChange={newValue => {
            setFieldValue('navigationMethod', newValue);
          }}
          setFieldTouched={setFieldTouched}
          name="navigationMethod"
          value={values.navigationMethod}
          variant="outline"
          errors={errors?.navigationMethod}
          touched={touched?.navigationMethod}
        />
      </Grid>
    </Box>
  );
}
