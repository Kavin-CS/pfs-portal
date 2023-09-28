import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Chip, Typography } from '@material-ui/core';
import KenAppBar from '../../../global_components/KenHeader';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import KenButton from '../../../global_components/KenButton';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import { Link } from 'react-router-dom';
import Routes from '../../../utils/routes.json';
import KenDialogBox from '../../../components/KenDialogBox/index';
import KenAutoComplete from '../../../components/KenAutoComplete';
import KenInputField from '../../../global_components/KenInputField/index';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DoneIcon from '@material-ui/icons/Done';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import KenSelect from '../../../components/KenSelect/index';
import Hidden from '@material-ui/core/Hidden';
import QuestionContent from './Components/QuestionContent/index';

const useStyles = makeStyles(theme => ({
  headWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  assessmentTitle: {
    color: theme.palette.KenColors.primary,
    fontWeight: 600,
    fontSize: 18,
  },
  titleIcon: {
    color: theme.palette.KenColors.primary,
    marginLeft: 10,
    cursor: 'pointer',
  },
  headerIcons: {
    color: theme.palette.KenColors.primary,
    background: theme.palette.KenColors.neutral11,
    padding: 4,
    borderRadius: '50%',
    marginLeft: 10,
    cursor: 'pointer',
  },
  btnWrap: {
    marginRight: 16,
    textTransform: 'capitalize',
  },
  discardBtnWrap: {
    marginRight: 24,
  },
  upArrow: {
    border: `2px solid ${theme.palette.KenColors.kenWhite}`,
    borderRadius: '50%',
    height: 20,
    marginRight: 6,
    width: 20,
    color: theme.palette.KenColors.kenWhite,
    marginTop: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upArrowIcon: {
    fontSize: 16,
  },
  saveButton: {
    color: theme.palette.KenColors.kenWhite,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  discardLabel: {
    color: theme.palette.KenColors.tertiaryRed502,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  popupTitle: {
    fontSize: 12,
    color: theme.palette.KenColors.neutral400,
  },
  titleHead: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.KenColors.neutral900,
    paddingBottom: 0,
  },
  chipWrap: {
    border: `1px solid${theme.palette.KenColors.assessmentBorder}`,
    padding: 8,
    marginTop: 24,
  },
  chipRoot: {
    borderRadius: 3,
    margin: 4,
    border: `1px solid${theme.palette.KenColors.assessmentBorder}`,
    background: theme.palette.KenColors.kenWhite,
  },
}));

export default function QuestionBank(props) {
  const classes = useStyles();

  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [inputBoxShow, setInputBoxShow] = React.useState(false);

  const [inputValue, setInputValue] = React.useState('Periodic assessment');

  const [arr, setArr] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const posts = [
    { id: '1', label: 'Haylie Lipshutz' },
    { id: '2', label: 'Sheema' },
    { id: '3', label: 'Jaylon Calzoni' },
    { id: '4', label: 'Joe Root' },
  ];

  const handleSelection = val => {
    return setArr([...arr, val]);
  };

  const handleDelete = chipToDelete => () => {
    setArr(chips => chips.filter(chip => chip !== chipToDelete));
  };

  const showInput = () => {
    setInputBoxShow(true);
  };

  const onBlur = () => {
    setInputBoxShow(false);
  };

  const updateInput = e => {
    setInputValue(e.target.value);
  };

  const eventHandler = () => {
    setInputBoxShow(false);
  };

  return (
    <Box mt={2} data-testid="question-bank">
      <KenAppBar
        menuIcon={
          <Typography className={classes.titleIcon}>
            <ArrowBackOutlinedIcon />
          </Typography>
        }
        title={
          <Box className={classes.headWrap}>
            {inputBoxShow === true ? (
              <Grid md={3}>
                <KenInputField
                  required
                  onBlur={onBlur}
                  value={inputValue}
                  endAdornment={
                    <Box>
                      {/* <HighlightOffOutlinedIcon onClick={eventHandler} /> */}
                      <DoneIcon />
                    </Box>
                  }
                  onChange={updateInput}
                  iconClickEvent={eventHandler}
                />
              </Grid>
            ) : (
              <Typography className={classes.assessmentTitle}>
                {inputValue}
              </Typography>
            )}

            <Typography className={classes.titleIcon} onClick={showInput}>
              <CreateOutlinedIcon />
            </Typography>
            <Link to={`/${Routes.assessment}`}>
              <Typography className={classes.headerIcons}>
                <SettingsOutlinedIcon />
              </Typography>
            </Link>
            <Typography
              className={classes.headerIcons}
              onClick={handleClickOpen}
            >
              <PersonAddOutlinedIcon />
            </Typography>
          </Box>
        }
      >
        <Box className={classes.headWrap}>
          <Typography className={classes.discardBtnWrap}>
            <KenButton>
              <Typography
                className={classes.discardLabel}
                data-testid="discard-btn"
              >
                {t('labels:Discard')}
              </Typography>
            </KenButton>
          </Typography>
          <Typography className={classes.btnWrap}>
            <KenButton variant="secondary" data-testid="save-assessment-btn">
              {t('labels:Save_Assessment')}
            </KenButton>
          </Typography>
          <Typography>
            <KenButton variant="primary" disabled>
              <Typography className={classes.upArrow}>
                <ArrowUpwardOutlinedIcon className={classes.upArrowIcon} />
              </Typography>
              <Typography
                className={classes.saveButton}
                data-testid="save-publish-btn"
              >
                {t('labels:Save_and_Publish')}
              </Typography>
            </KenButton>
          </Typography>
        </Box>
      </KenAppBar>
      <Box mt={2}>
        <QuestionContent />
      </Box>
      <KenDialogBox
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        maxWidth="xs"
        title="INVITE TEACHERS"
        titleStyle={classes.titleHead}
      >
        <Box>
          <Typography className={classes.popupTitle}>
            {t(
              'messages:select_upto_teachers_to_invite_and_collaborate_with_this_assessment'
            )}
          </Typography>
          {arr?.length > 0 && (
            <Box className={classes.chipWrap}>
              {arr.map(el => (
                <Chip
                  classes={{
                    root: classes.chipRoot,
                    deleteIcon: classes.deleteChipIcon,
                  }}
                  label={el?.label}
                  onDelete={handleDelete(el)}
                  className={classes.chip}
                />
              ))}
            </Box>
          )}
          <Box pt={3}>
            <KenAutoComplete
              options={posts}
              placeholder="Search..."
              setData={handleSelection}
            />
          </Box>
        </Box>
      </KenDialogBox>
    </Box>
  );
}
