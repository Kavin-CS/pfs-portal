import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Chip, Grid, Typography } from '@material-ui/core';
import AddedQuestion from '../../../../../assets/Images/Added-question.svg';
import { useTranslation } from 'react-i18next';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const useStyles = makeStyles(theme => ({
  content: {
    background: theme.palette.KenColors.kenWhite,
  },
  addedQuestionHeader: {
    borderBottom: `1px solid ${theme.palette.KenColors.assessmentBorder}`,
    padding: 16,
  },
  subHeader: {
    padding: '4px 16px',
    borderBottom: `1px solid ${theme.palette.KenColors.assessmentBorder}`,
  },
  questionContents: {
    textAlign: 'center',
    background: theme.palette.KenColors.neutral11,
    margin: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    borderRadius: 3,
  },
  label: {
    color: theme.palette.KenColors.neutral100,
    fontSize: 14,
    width: '70%',
    margin: '28px auto',
  },

  questionLabel: {
    color: theme.palette.KenColors.neutral900,
  },
  sectionBtn: {
    display: 'flex',
  },
  sectionLabel: {
    color: theme.palette.KenColors.primary,
    fontWeight: 600,
    fontSize: 14,
    marginLeft: 6,
  },
  outlineIcon: {
    width: 18,
  },
  addIcon: {
    border: `1px solid ${theme.palette.KenColors.primary}`,
    borderRadius: '50%',
    color: theme.palette.KenColors.primary,
    fontSize: 14,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function AddContent(props) {
  const { totalMarks, noOfQuestions, marks } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box data-testid="add-content">
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={classes.addedQuestionHeader}
      >
        <Box item>
          <Typography className={classes.questionLabel}>
            {t('labels:Added_Question')}
          </Typography>
        </Box>
        <Box item className={classes.sectionBtn}>
          <Typography className={classes.addIcon}>
            <AddOutlinedIcon className={classes.outlineIcon} />
          </Typography>
          <Typography className={classes.sectionLabel}>
            {t('labels:Section')}
          </Typography>
        </Box>
      </Grid>
      <Grid container className={classes.subHeader}>
        <Box item>
          <Chip
            classes={{
              root: classes.chipRoot,
            }}
            label={`${t('labels:Question')} : ${noOfQuestions}`}
            className={classes.chip}
          />
        </Box>
        <Box item ml={2}>
          <Chip
            classes={{
              root: classes.chipRoot,
            }}
            label={`${t('labels:Total_marks')}: ${marks}/${totalMarks}`}
            className={classes.chip}
          />
        </Box>
      </Grid>
      <Box
        className={classes.questionContents}
        container
        alignItems="center"
        justify="center"
      >
        <Box>
          <img src={AddedQuestion} />
          <Typography className={classes.label}>
            {t(
              'messages:Questions_added_to_this_assessment_will_be_listed_down_here.'
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
