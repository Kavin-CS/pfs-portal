import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Chip, Grid, Typography } from '@material-ui/core';
import AddManually from '../../../../../assets/Images/Add-Manually.svg';
import KenDialogBox from '../../../../../components/KenDialogBox/index';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useTranslation } from 'react-i18next';
import AddQuestions from '../QuestionAddButtons/index';
//accordion
import MultipleChoice from '../../../../../assets/Images/multipleChoice.svg';
import Toggle from '../../../../../assets/Images/toggle.svg';
import MatchTheContent from '../../../../../assets/Images/matchTheContent.svg';
import Subjective from '../../../../../assets/Images/subjective.svg';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Fab from '@material-ui/core/Fab';
import { Hidden } from '@material-ui/core';
import QuestionList from '../QuestionList/index';
import QuestionDetail from '../QuestionDetail/index';

const useStyles = makeStyles(theme => ({
  content: {
    background: theme.palette.KenColors.kenWhite,
  },

  questionWrap: {
    borderRight: `1px solid ${theme.palette.KenColors.assessmentBorder}`,
  },

  label: {
    color: theme.palette.KenColors.neutral100,
    fontSize: 14,
    width: '70%',
    margin: '28px auto',
  },
  questionBtnContents: {
    padding: 16,
    paddingBottom: 0,
  },

  infoIcon: {
    color: theme.palette.KenColors.neutral61,
    height: 20,
  },

  fabIcon: {
    background: theme.palette.KenColors.tertiaryGreen504,
    position: 'fixed',
    bottom: 20,
    right: 0,
  },
  addClearIcon: {
    color: theme.palette.KenColors.kenWhite,
  },
  popupHeader: {
    paddingBottom: 16,
    borderBottom: `0.5px solid ${theme.palette.KenColors.assessmentBorder}`,
  },
  boxContent: {
    position: 'relative',
  },
}));

export default function AddContent(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const array = [
    {
      accordionIcon: AddManually,
      accordionHeader: 'Add Manually',
      subArray: [
        {
          icon: MultipleChoice,
          label: 'Multiple choice',
          infoIcon: <InfoOutlinedIcon />,
        },
        {
          icon: Toggle,
          label: 'True / False',
          infoIcon: <InfoOutlinedIcon />,
        },
        {
          icon: MatchTheContent,
          label: 'Match the following',
          infoIcon: <InfoOutlinedIcon />,
        },
        {
          icon: Subjective,
          label: 'Subjective',
          infoIcon: <InfoOutlinedIcon />,
        },
      ],
    },
  ];

  return (
    <Box data-testid="add-content" className={classes.boxContent}>
      <Grid container item>
        <Grid item md={9} className={classes.content}>
          <Grid container item>
            <Grid item md={4} xs={12} className={classes.questionWrap}>
              <QuestionList
                totalMarks={'10'}
                noOfQuestions={'00'}
                marks={'0'}
              />
            </Grid>
            <Grid item md={8} xs={12}>
              <QuestionDetail />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} className={classes.questionBtnContents}>
          <Hidden xsDown>
            <Box>
              <AddQuestions array={array} />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
      <Hidden smUp>
        <Fab onClick={handleClickOpen} className={classes.fabIcon}>
          {open ? (
            <ClearOutlinedIcon className={classes.addClearIcon} />
          ) : (
            <AddOutlinedIcon className={classes.addClearIcon} />
          )}
        </Fab>
        <KenDialogBox
          open={open}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          maxWidth="xs"
          title={
            <Typography className={classes.popupHeader}>
              {t('labels:Add_question')}
            </Typography>
          }
          titleStyle={classes.titleHead}
        >
          <AddQuestions array={array} />
        </KenDialogBox>
      </Hidden>
    </Box>
  );
}
