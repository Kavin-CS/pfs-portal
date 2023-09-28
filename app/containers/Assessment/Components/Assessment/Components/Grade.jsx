import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import KenSelect from '../../../../../components/KenSelect';
import KenInputField from '../../../../../components/KenInputField/index';
import { useTranslation } from 'react-i18next';
import Feedback from '../Components/Feedback';
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
  marksWrap: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  marksContent: {
    margin: '0px 16px',
  },
  gradeContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  gradeLabel: {
    fontSize: 12,
    color: theme.palette.KenColors.neutral400,
    marginLeft: 16,
  },
  inputBaseClass: {
    background: theme.palette.KenColors.kenWhite,
  },
}));

export default function Grade(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldTouched,
    setFieldValue,
  } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  const [totalMark, setTotalMark] = React.useState('');
  const [attemptsAllowed, setAttemptsAllowed] = React.useState('');
  const [gradeMethod, setGradeMethod] = React.useState('');

  const change = (name, e, index) => {
    e.persist();
    handleChange(e);
    setFieldValue(name, e.target.value);
    setFieldTouched(name, true, false);
  };

  return (
    <Grid xs={12} md={12}>
      <Box className={classes.timeContainer} mt={2}>
        <Box>
          <Typography className={classes.header}>
            {t('labels:Grade_settings')}
          </Typography>
          {/* Note: For current Feature we dont need it */}
          {/* <Grid mb={3} xs={12} md={4}>
            <KenSelect
              label="Course component"
              inputBaseRootClass={classes.inputBaseClass}
            />
          </Grid> */}
          <Box mb={2} mt={2} className={classes.marksWrap}>
            <Grid md={3}>
              <KenSelect
                label="Total marks"
                placeholder="Select"
                inputBaseRootClass={classes.inputBaseClass}
                options={AssessmentData.TotalMarks}
                onChange={newValue => {
                  setFieldValue('totalMarks', newValue.target.value);
                }}
                setFieldTouched={setFieldTouched}
                name="totalMarks"
                value={values.totalMarks}
                variant="outline"
                errors={errors?.totalMarks}
                touched={touched?.totalMarks}
              />
            </Grid>
            <Box className={classes.gradeContent} xs={12}>
              {/* <Typography className={classes.gradeLabel}>
                {t('labels:Grade_to_pass_assessment')}
              </Typography> */}
              <Grid container>
                <Grid item className={classes.marksContent}>
                  <KenInputField
                    label={t('labels:Grade_to_pass_assessment')}
                    placeholder="Input marks"
                    value={values.gradeToPassAssessment}
                    setFieldTouched={setFieldTouched}
                    name="gradeToPassAssessment"
                    onChange={change.bind(null, 'gradeToPassAssessment')}
                    errors={errors?.gradeToPassAssessment}
                    touched={touched?.gradeToPassAssessment}
                  />
                </Grid>
                {/* NOTE: For current Feature we dont need it */}
                {/* <Grid item md={4}>
                  <KenSelect
                    placeholder="Select"
                    label=""
                    inputBaseRootClass={classes.inputBaseClass}
                    options={marksInPercentage}
                  />
                </Grid> */}
              </Grid>
            </Box>
          </Box>
          <Box mb={3}>
            <Grid xs={6}>
              <KenSelect
                label="Attempts allowed"
                inputBaseRootClass={classes.inputBaseClass}
                options={AssessmentData.AttemptsAllowed}
                onChange={newValue => {
                  setFieldValue('attemptsAllowed', newValue.target.value);
                }}
                setFieldTouched={setFieldTouched}
                name="attemptsAllowed"
                value={values.attemptsAllowed}
                variant="outline"
                errors={errors?.attemptsAllowed}
                touched={touched?.attemptsAllowed}
              />
            </Grid>
          </Box>
          {values.attemptsAllowed === AssessmentData.AttemptsAllowed[0] ? (
            <Box mb={3}>
              <Grid xs={6}>
                <KenSelect
                  label="Grade method"
                  inputBaseRootClass={classes.inputBaseClass}
                  options={AssessmentData.GradeMethods}
                  onChange={newValue => {
                    setFieldValue('gradeMethod', newValue.target.value);
                  }}
                  setFieldTouched={setFieldTouched}
                  name="gradeMethod"
                  value={values.gradeMethod}
                  variant="outline"
                  errors={errors?.gradeMethod}
                  touched={touched?.gradeMethod}
                />
              </Grid>
            </Box>
          ) : (
            ''
          )}
        </Box>
        <Box>
          <Feedback />
        </Box>
      </Box>
    </Grid>
  );
}
