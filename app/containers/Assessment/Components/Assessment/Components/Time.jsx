import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import KenSelect from '../../../../../components/KenSelect';
import KenDateTimePicker from '../../../../../global_components/KenDateTimePicker/index';
import KenTimePicker from '../../../../../global_components/KenTimePicker/index';
import KenInputField from '../../../../../components/KenInputField/index';
import { useTranslation } from 'react-i18next';
import AssessmentData from '../../../AssessmentDetails.json';

const useStyles = makeStyles(theme => ({
  timeContainer: {
    background: theme.palette.KenColors.neutral10,
    padding: 16,
  },
  header: {
    color: theme.palette.KenColors.neutral900,
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 16,
  },
  periodContainer: {
    display: 'flex',
    marginLeft: 16,
  },
  gradeLabel: {
    fontSize: 12,
    color: theme.palette.KenColors.neutral400,
  },
  wrap: {
    marginBottom: 24,
  },
  endQuiz: {
    [theme.breakpoints.only('xs')]: {
      marginTop: 8,
    },
  },

  inputBaseClass: {
    background: theme.palette.KenColors.kenWhite,
  },
  inputClass: {
    background: theme.palette.KenColors.kenWhite,
  },
  gradeContent: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function Time(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldTouched,
    setFieldValue,
  } = props;

  console.log('onTimeExpiration', values.onTimeExpiration);

  const classes = useStyles();
  const { t } = useTranslation();

  const change = (name, e, index) => {
    e.persist();
    handleChange(e);
    setFieldValue(name, e.target.value);
    setFieldTouched(name, true, false);
  };

  return (
    <Grid className={classes.timeContainer} xs={12} md={12}>
      <Box mt={2}>
        <Typography className={classes.header}>
          {t('labels:Time_settings')}
        </Typography>
        <Grid container className={classes.wrap}>
          <Grid md={4} xs={8} item>
            <KenDateTimePicker
              label="Start quiz on"
              required
              inputBaseRootClass={classes.inputBaseClass}
              onChange={newValue => {
                setFieldValue('startTime', newValue.target.value);
              }}
              value={values.startTime}
              setFieldTouched={setFieldTouched}
              name="startTime"
              value={values.startTime}
              variant="outline"
              errors={errors?.startTime}
              touched={touched?.startTime}
            />
          </Grid>
          <Grid md={4} xs={8} item className={classes.endQuiz}>
            <KenDateTimePicker
              label="End quiz on"
              required
              inputBaseRootClass={classes.inputBaseClass}
              onChange={newValue => {
                setFieldValue('endTime', newValue.target.value);
              }}
              value={values.endTime}
              setFieldTouched={setFieldTouched}
              name="endTime"
              value={values.endTime}
              variant="outline"
              errors={errors?.endTime}
              touched={touched?.endTime}
            />
          </Grid>
        </Grid>
        <Grid mb={3} md={8} xs={8} container className={classes.wrap}>
          <Grid md={4} item>
            <KenTimePicker
              label="Time limit"
              inputBaseRootClass={classes.inputBaseClass}
              onChange={newValue => {
                setFieldValue('timeLimit', newValue.target.value);
              }}
              value={values.timeLimit}
              setFieldTouched={setFieldTouched}
              name="timeLimit"
              value={values.timeLimit}
              variant="outline"
              errors={errors?.timeLimit}
              touched={touched?.timeLimit}
            />
          </Grid>
        </Grid>

        <Grid md={5} className={classes.wrap}>
          <KenSelect
            label="On time expiration"
            inputBaseRootClass={classes.inputBaseClass}
            options={AssessmentData.OnTimeExpirations}
            onChange={newValue => {
              setFieldValue('onTimeExpiration', newValue.target.value);
            }}
            setFieldTouched={setFieldTouched}
            name="onTimeExpiration"
            value={values.onTimeExpiration}
            variant="outline"
            errors={errors?.onTimeExpiration}
            touched={touched?.onTimeExpiration}
          />
        </Grid>

        {values.onTimeExpiration === AssessmentData.OnTimeExpirations[1] ? (
          <Grid className={classes.gradeContent} md={5}>
            <Typography className={classes.gradeLabel}>
              {t('labels:Submission_grace_period')}
            </Typography>
            <Grid container>
              <Grid sm={2} className={classes.marksContent}>
                <KenInputField
                  placeholder="--"
                  inputBaseRootClass={classes.inputClass}
                  value={values.submissionGradeInputValue}
                  setFieldTouched={setFieldTouched}
                  name="submissionGradeInputValue"
                  onChange={change.bind(null, 'submissionGradeInputValue')}
                  errors={errors?.submissionGradeInputValue}
                  touched={touched?.submissionGradeInputValue}
                />
              </Grid>
              <Grid sm={4} className={classes.marksContent}>
                <KenSelect
                  inputBaseRootClass={classes.inputBaseClass}
                  options={AssessmentData.SubmissionGracePeriods}
                  onChange={newValue => {
                    setFieldValue(
                      'submissionGradeSelectValue',
                      newValue.target.value
                    );
                  }}
                  setFieldTouched={setFieldTouched}
                  name="submissionGradeSelectValue"
                  value={values.submissionGradeSelectValue}
                  //
                  variant="outline"
                  errors={errors?.submissionGradeSelectValue}
                  touched={touched?.submissionGradeSelectValue}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          ''
        )}

        {/* TODO: For current feature we don't need these fields */}
        {/* <Grid md={8} className={classes.wrap}>
          <KenRadioGroup
            onChange={handleRadioChange}
            value={selectedValue}
            label="Minimum time for assessment submission"
            options={radioOption}
          />
          <Grid md={2}>
            <KenSelect
              inputBaseRootClass={classes.inputBaseClass}
              options={timeOptions}
            />
          </Grid>
        </Grid>
        <Grid mb={3} md={5}>
          <KenSelect
            inputBaseRootClass={classes.inputBaseClass}
            label="Sectional time cutoff"
          />
        </Grid> */}
      </Box>
    </Grid>
  );
}
