import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import ConfigureQuestion from '../../../../../assets/Images/configureQuestion.svg';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  content: {
    background: theme.palette.KenColors.kenWhite,
  },
  addedQuestionHeader: {
    borderBottom: `1px solid ${theme.palette.KenColors.assessmentBorder}`,
    padding: 16,
  },

  configureContents: {
    textAlign: 'center',
    background: theme.palette.KenColors.neutral11,
    margin: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 440,
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
}));

export default function QuestionDetail(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box data-testid="question-detail">
      <Box className={classes.addedQuestionHeader}>
        <Typography>{t('labels:Configure_Question')}</Typography>
      </Box>
      <Box
        className={classes.configureContents}
        container
        alignItems="center"
        justify="center"
      >
        <Box>
          <img src={ConfigureQuestion} />
          <Typography className={classes.label}>
            {t(
              'messages:Add_or_edit_all_the_required_informations_and_settings_to_create_a_question_in_this_area.'
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
