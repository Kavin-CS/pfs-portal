import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { StepConnector } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import KenHeader from '../../global_components/KenHeader/index';
import KenButton from '../../global_components/KenButton/index';
import KenIcon from '../../global_components/KenIcon/index';
import { useTranslation } from 'react-i18next';
import { NavHashLink } from 'react-router-hash-link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Routes from '../../utils/routes.json';
import { HashLink } from 'react-router-hash-link';
import KenCollapse from '../KenCollapse/index';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  actionsContainer: {
    // marginBottom: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      display: 'none',
      background: theme.palette.KenColors.KenWhite,
    },
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  labelContent: {
    color: theme.palette.KenColors.neutral100,
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      fontSize: 11,
    },
  },
  activeLabel: {
    fontSize: 14,
    color: `${theme.palette.KenColors.gradeSectionHeaderLabel} !important`,
    fontWeight: '600 !important',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      fontSize: 11,
    },
  },
  completedLabel: {
    color: `${theme.palette.KenColors.tertiaryGreen504} !important`,
    fontWeight: '600 !important',
  },
  completedLine: {
    color: `${theme.palette.KenColors.tertiaryGreen504} !important`,
    border: 'none',
  },
  stepContent: {
    overflow: 'auto',
    width: '100%',
    padding: 16,
    borderLeft: `0.5px solid ${theme.palette.KenColors.assessmentBorder}`,
    height: 530,
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.KenColors.scrollbarColor,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: `${theme.palette.KenColors.neutral700}`,
    },
    [theme.breakpoints.only('xs')]: {
      height: 320,
      border: 'none',
    },
  },
  stepperRoot: {
    [theme.breakpoints.only('xs')]: {
      padding: '16px 2px 0px',
    },
  },
  rootContent: {
    marginTop: 0,
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  header: {
    marginBottom: 16,
  },
  connectorRoot: {
    padding: 0,
  },
  iconRoot: {
    minWidth: 0,
  },
  primaryText: {
    fontSize: 12,
    marginLeft: 12,
    color: theme.palette.KenColors.neutral400,
  },
  completedLine: {
    borderColor: theme.palette.KenColors.tertiaryGreen504,
  },
  stepIcon: {
    color: theme.palette.KenColors.kenWhite,
    border: `1px solid ${theme.palette.KenColors.assessmentBorder}`,
    borderRadius: '50%',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
    },
  },
  stepIconText: {
    fill: theme.palette.KenColors.neutral100,
  },
  active: {
    '& $primaryText': {
      color: theme.palette.KenColors.neutral900,
      fontWeight: 600,
    },
  },
  activeStepIcon: {
    color: `${theme.palette.KenColors.neutral41} !important`,
    border: 'none',
  },
  rootListItem: {
    marginBottom: 0,
  },
  stepWrap: {
    display: 'flex',
    background: theme.palette.KenColors.kenWhite,
    [theme.breakpoints.only('xs')]: {
      display: 'block',
    },
  },
  contentWrap: {
    // [theme.breakpoints.only('xs')]: {
    //   display: 'none',
    // },
  },
  link: {
    textDecoration: 'none',
  },
  linkItem: {
    display: 'flex',
    textDecoration: 'none',
  },
  stepContainer: {
    position: 'relative',
  },
  footerBtn: {
    position: 'fixed',
    bottom: 0,
    background: theme.palette.KenColors.kenWhite,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function VerticalStepper(props) {
  const {
    steps,
    getStepContent,
    orientation,
    handleSubmit,
    handleNext,
    handleBack,
    handleCancel,
    activeStep,
    setFieldValue,
  } = props;

  const { t } = useTranslation();
  const theme = useTheme();
  const classes = useStyles();

  const commonMethod = op => {
    setFieldValue('operation', op);
    handleSubmit();
  };

  return (
    <Grid className={classes.stepContainer}>
      <Grid xs={12} sm={12}>
        <Box className={classes.header}>
          <KenHeader title="Create Assessment">
            <div className={classes.actionsContainer}>
              <div>
                <KenButton
                  variant="secondary"
                  onClick={handleCancel}
                  buttonClass={classes.button}
                >
                  {t('labels:Cancel')}
                </KenButton>
                {activeStep === 1 ? (
                  <KenButton
                    variant="secondary"
                    onClick={() => {
                      commonMethod('previous');
                    }}
                    buttonClass={classes.button}
                  >
                    {t('labels:Previous')}
                  </KenButton>
                ) : (
                  ''
                )}
                {activeStep === 1 ? (
                  <Link to={`/${Routes.questionBank}`} className={classes.link}>
                    <KenButton
                      variant="primary"
                      color="primary"
                      onClick={() => commonMethod('submit')}
                      buttonClass={classes.button}
                    >
                      {t('labels:Save_and_Proceed_to_Settings')}
                    </KenButton>
                  </Link>
                ) : (
                  <KenButton
                    variant="primary"
                    color="primary"
                    onClick={() => commonMethod('next')}
                    buttonClass={classes.button}
                  >
                    {t('labels:Save_and_Proceed_to_Assessment_Settings')}
                  </KenButton>
                )}
              </div>
            </div>
          </KenHeader>
        </Box>
        <Box className={classes.stepWrap}>
          <Grid className="scrollbar-cus" style={{ height: 530 }} sm={4} md={3}>
            <Stepper
              classes={{
                root: classes.stepperRoot,
              }}
              connector={
                <StepConnector
                  classes={{
                    vertical: classes.connectorRoot,
                    completed: classes.completedLine,
                  }}
                />
              }
              activeStep={activeStep}
              orientation={orientation}
            >
              {steps?.map((step, index) => (
                <Step key={index}>
                  <StepLabel
                    StepIconProps={{
                      classes: {
                        root: classes.stepIcon,
                        active: classes.activeStepIcon,
                        text: classes.stepIconText,
                        completed: classes.completedLine,
                      },
                    }}
                    classes={{
                      label: classes.labelContent,
                      active: classes.activeLabel,
                      completed: classes.completedLabel,
                    }}
                  >
                    {step.label}
                  </StepLabel>
                  {/* <Box className={classes.contentWrap}> */}
                  <StepContent
                    key={index}
                    classes={{
                      root: classes.rootContent,
                    }}
                  >
                    {step?.content?.map((item, index) => (
                      <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        // className={classes.root}
                        disablePadding
                        key={index}
                      >
                        <NavHashLink
                          smooth
                          to={item.link}
                          className={classes.linkItem}
                          activeClassName={classes.active}
                        >
                          <ListItem
                            button
                            classes={{
                              selected: classes.active,
                            }}
                          >
                            <ListItemIcon classes={{ root: classes.iconRoot }}>
                              {/* <Typography>{item.img}</Typography> */}
                              <Typography>
                                <KenIcon
                                  icon={item.img}
                                  styles={{
                                    color: theme.palette.KenColors.neutral400,
                                  }}
                                />
                              </Typography>
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              classes={{
                                primary: classes.primaryText,
                                root: classes.rootListItem,
                              }}
                            />
                          </ListItem>
                        </NavHashLink>
                      </List>
                    ))}
                    {step?.collapseItem?.length > 0 ? (
                      <>
                        <KenCollapse label={t('headings:Advanced_Settings')}>
                          <List component="div" disablePadding>
                            {step?.collapseItem?.map((subItem, index) => (
                              <HashLink
                                smooth
                                to={subItem.link}
                                className={classes.linkItem}
                              >
                                <ListItem button key={index}>
                                  <ListItemIcon
                                    classes={{ root: classes.iconRoot }}
                                  >
                                    <Typography>
                                      <KenIcon
                                        icon={subItem.img}
                                        styles={{
                                          color:
                                            theme.palette.KenColors.neutral400,
                                        }}
                                      />
                                    </Typography>
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={subItem.label}
                                    classes={{ primary: classes.primaryText }}
                                  />
                                </ListItem>
                              </HashLink>
                            ))}
                          </List>
                        </KenCollapse>
                      </>
                    ) : (
                      ''
                    )}
                  </StepContent>
                  {/* </Box> */}
                </Step>
              ))}
            </Stepper>
          </Grid>
          {/* //put xs 12 */}
          <Grid sm={7} md={9} className={classes.stepContent}>
            <div>{getStepContent(activeStep)}</div>
          </Grid>
          {/* {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )} */}
        </Box>
      </Grid>
      <Box className={classes.footerBtn}>
        <div className={classes.actions}>
          <div>
            <KenButton
              variant="secondary"
              disabled={activeStep === 0}
              onClick={handleCancel}
              buttonClass={classes.button}
            >
              {t('labels:Cancel')}
            </KenButton>
            {activeStep === 1 ? (
              <KenButton
                variant="secondary"
                onClick={handleBack}
                buttonClass={classes.button}
              >
                {t('labels:Previous')}
              </KenButton>
            ) : (
              ''
            )}
            {activeStep === 1 ? (
              <Link to={`/${Routes.questionBank}`} className={classes.link}>
                <KenButton
                  variant="primary"
                  color="primary"
                  onClick={handleSubmit}
                  buttonClass={classes.button}
                >
                  {t('labels:Save_and_Proceed_to_Settings')}
                </KenButton>
              </Link>
            ) : (
              <KenButton
                variant="primary"
                color="primary"
                onClick={handleNext}
                buttonClass={classes.button}
              >
                {t('labels:Save_and_Proceed_to_Assessment_Settings')}
              </KenButton>
            )}
          </div>
        </div>
      </Box>
    </Grid>
  );
}
