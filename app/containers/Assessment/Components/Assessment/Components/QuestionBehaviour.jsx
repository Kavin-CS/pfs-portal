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
  tagLabel: {
    fontSize: 12,
    color: theme.palette.KenColors.neutral400,
    marginBottom: 4,
  },
  addLabel: {
    fontStyle: 'italic',
  },
}));

export default function QuestionBehaviour(props) {
  const { values, touched, errors, setFieldTouched, setFieldValue } = props;

  console.log(values, 'vl');

  const classes = useStyles();

  const { t } = useTranslation();

  const attemptListArray = [
    {
      label: 'Yes',
      value: '1',
    },
    {
      label: 'No',
      value: '0',
    },
  ];

  const attemptRedoArray = [
    {
      label: 'Yes, provide option to try another question',
      value: '1',
    },
    {
      label: 'No',
      value: '0',
    },
  ];

  return (
    <Box className={classes.container} mt={2}>
      <Typography className={classes.header}>
        {t('labels:Question_behaviour')}
      </Typography>
      <Grid md={8} className={classes.wrap}>
        <KenRadioGroup
          value={values.shuffleWithInQuestion}
          label={t('assessments:Shuffle_within_questions')}
          options={attemptListArray}
          onChange={newValue => {
            setFieldValue('shuffleWithInQuestion', newValue);
          }}
          setFieldTouched={setFieldTouched}
          name="shuffleWithInQuestion"
          value={values.shuffleWithInQuestion}
          variant="outline"
          errors={errors?.shuffleWithInQuestion}
          touched={touched?.shuffleWithInQuestion}
        />
      </Grid>
      <Grid className={classes.wrap}>
        <KenRadioGroup
          value={values.shuffleWithInAnswers}
          label={
            <Typography className={classes.tagLabel}>
              {t('assessments:Shuffle_choices_within_answer')}
              <span className={classes.addLabel}>
                {`${t('assessments:Only_applicable_to_Multichoice')}`}
              </span>
            </Typography>
          }
          options={attemptListArray}
          onChange={newValue => {
            setFieldValue('shuffleWithInAnswers', newValue);
          }}
          setFieldTouched={setFieldTouched}
          name="shuffleWithInAnswers"
          value={values.shuffleWithInAnswers}
          variant="outline"
          errors={errors?.shuffleWithInAnswers}
          touched={touched?.shuffleWithInAnswers}
        />
      </Grid>
      <Grid md={5} className={classes.wrap}>
        <KenSelect
          label={t('assessments:How_questions_behave')}
          inputBaseRootClass={classes.inputBaseClass}
          options={AssessmentData.QuestionBehaviours}
          onChange={newValue => {
            setFieldValue('questionBehaviour', newValue.target.value);
          }}
          setFieldTouched={setFieldTouched}
          name="questionBehaviour"
          value={values.questionBehaviour}
          variant="outline"
          errors={errors?.questionBehaviour}
          touched={touched?.questionBehaviour}
        />
      </Grid>
      <Grid md={8} className={classes.wrap}>
        <KenRadioGroup
          value={values.attemptRedo}
          label={t('assessments:Allow_redo_within_an_attempt')}
          options={attemptRedoArray}
          onChange={newValue => {
            setFieldValue('attemptRedo', newValue);
          }}
          setFieldTouched={setFieldTouched}
          name="attemptRedo"
          value={values.attemptRedo}
          variant="outline"
          errors={errors?.attemptRedo}
          touched={touched?.attemptRedo}
        />
      </Grid>
      <Grid md={8} className={classes.wrap}>
        <KenRadioGroup
          value={values.attemptList}
          label={t('assessments:Each_attempt_builds_on_the_last')}
          options={attemptListArray}
          onChange={newValue => {
            setFieldValue('attemptList', newValue);
          }}
          setFieldTouched={setFieldTouched}
          name="attemptList"
          value={values.attemptList}
          variant="outline"
          errors={errors?.attemptList}
          touched={touched?.attemptList}
        />
      </Grid>
    </Box>
  );
}
