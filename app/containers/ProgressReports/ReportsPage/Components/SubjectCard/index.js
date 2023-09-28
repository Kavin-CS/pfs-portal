import React, { useState } from 'react';
import { Grid, Typography, useTheme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '../../../../../assets/icons/InfoIcon.svg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import KenPopover from '../../../../../components/KenPopover/index';
import { useTranslation } from 'react-i18next';
import KenAvatar from '../../../../../components/KenAvatar/index';

const useStyles = makeStyles(theme => ({
  root: {
    // background: theme.palette.KenColors.gradeSectionSubjectBg,
    padding: 8,
    marginTop: 16,
    marginLeft: 4,
    marginBottom: 8,
    marginRight: 7,
    borderRadius: 6,
    // flexBasis: '32%',
    // [theme.breakpoints.down('xs')]: {
    //   flexBasis: '100%',
    // },
    border: `1px solid ${theme.palette.KenColors.neutral20}`,
  },

  subWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  subValue: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  subRemarks: {
    alignItems: 'center',
  },
  subLabel: {
    color: theme.palette.KenColors.gradeTermLabel,
    fontSize: 12,
  },
  subRemarkLabel: {
    color: theme.palette.KenColors.gradeTermLabel,
    fontSize: 12,
    marginTop: 6,
    marginLeft: 4,
  },
  NoteIcon: {
    Width: 12,
    Height: 12,
    cursor: 'pointer',
  },
  gradeValue: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
  gradeValueLabel: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
  subjectMark: {
    marginLeft: 12,
    color: theme.palette.KenColors.gradeSectionHeaderLabel,
    fontSize: 24,
    fontWeight: 700,
  },
  upArrow: {
    backgroundColor: theme.palette.KenColors.a1BgColor,
    borderRadius: '50%',
    color: theme.palette.KenColors.tertiaryGreen504,
    height: '18px',
    padding: 2,
    width: '18px',
  },
  downArrow: {
    backgroundColor: theme.palette.KenColors.secondaryPeach2,
    borderRadius: '50%',
    color: theme.palette.KenColors.tertiaryRed501,
    padding: 2,
    height: '18px',
    width: '18px',
  },
  stableArrow: {
    backgroundColor: theme.palette.KenColors.tertiaryBlue100,
    borderRadius: '50%',
    color: theme.palette.KenColors.kenWhite,
    padding: 2,
    height: '18px',
    width: '18px',
  },
  forwardArrow: {
    backgroundColor: theme.palette.KenColors.tertiaryBlue100,
    borderRadius: '50%',
    color: theme.palette.KenColors.kenWhite,
    padding: 2,
    height: '18px',
    width: '18px',
  },
  infoIcon: {
    paddingRight: 4,
  },
  ratingsText: {
    color: theme.palette.KenColors.tertiaryBlue100,
  },
  markWrap: {
    // background: theme.palette.KenColors.neutral11,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    border: `1px solid ${theme.palette.KenColors.gradeSectionBorder}`,
    width: 294,
  },
  markLabelColor: {
    color: theme.palette.KenColors.neutral100,
    fontSize: 14,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    // height: 56,
    paddingTop: 16,
    paddingLeft: 16,
    // border: `1px solid ${theme.palette.KenColors.gradeSectionBorder}`,
  },
  markContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  markLabel: {
    fontSize: 14,
    color: theme.palette.KenColors.tertiaryBlue504,
  },
  markValue: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.KenColors.tertiaryBlue504,
  },
  markItemContainer: {
    background: theme.palette.KenColors.kenWhite,
    padding: 16,
  },
  rollNumLabel: {
    color: theme.palette.KenColors.neutral400,
    fontSize: 12,
    marginLeft: 22,
  },
  infoIconWrap: {
    textAlign: 'end',
    height: 12,
  },
}));

export default function SubjectCard(props) {
  const classes = useStyles();
  const {
    name,
    rollNumber,
    subjectMark,
    subjectName,
    gradeValue,
    ratingsIcon,
    status,
    ratingsText,
    ratingsDifference,
    previousRatings,
    marksBreakdown = [],
    itemPerRow,
    fontSize,
    infoIcon,
    markLabel,
    variant,
  } = props;

  const divRef = React.useRef();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();

  //getIcon based on status

  const getIcon = () => {
    if (ratingsIcon) return ratingsIcon;
    switch (status) {
      case 'stable':
        return (
          <RemoveCircleIcon fontSize="small" className={classes.stableArrow} />
        );

      case 'increased':
        return <ArrowUpwardIcon fontSize="small" className={classes.upArrow} />;

      case 'decreased':
        return (
          <ArrowDownwardIcon fontSize="small" className={classes.downArrow} />
        );

      default:
        return (
          <ArrowForwardIcon fontSize="small" className={classes.forwardArrow} />
        );
    }
  };

  // font color of grade

  const getGradeTextColor = () => {
    switch (gradeValue) {
      case 'A1':
      case 'A':
        return theme.palette.KenColors.a1FontColor;
      case 'A2':
        return theme.palette.KenColors.a2FontColor;
      case 'B1':
      case 'B':
        return theme.palette.KenColors.b1FontColor;
      case 'B2':
        return theme.palette.KenColors.b2FontColor;
      case 'C1':
      case 'C':
        return theme.palette.KenColors.c1FontColor;
      case 'C2':
        return theme.palette.KenColors.c2FontColor;
      case 'D':
        return theme.palette.KenColors.gradeDFontColor;
      case 'E':
        return theme.palette.KenColors.gradeEFontColor;

      default:
        return '';
    }
  };

  // background color of grade

  const getGradeBgColor = () => {
    switch (gradeValue) {
      case 'A1':
        return theme.palette.KenColors.a1BgColor;
      case 'A2':
        return theme.palette.KenColors.a2BgColor;
      case 'B1':
        return theme.palette.KenColors.b1BgColor;
      case 'B2':
        return theme.palette.KenColors.b2BgColor;
      case 'C1':
        return theme.palette.KenColors.c1BgColor;
      case 'C2':
        return theme.palette.KenColors.c2BgColor;
      case 'D':
        return theme.palette.KenColors.gradeDBgColor;
      case 'E':
        return theme.palette.KenColors.gradeEBgColor;

      default:
        return '';
    }
  };

  const handleInfoIconClick = () => {
    setAnchorEl(divRef.current);
  };

  return (
    <>
      <Grid className={classes.root} data-testid="subject-card">
        <Box className={classes.infoIconWrap}>
          {marksBreakdown.length > 0 && (
            <>
              <img
                src={InfoIcon}
                alt="infoIcon"
                className={classes.NoteIcon}
                onClick={handleInfoIconClick}
                ref={divRef}
              />
            </>
          )}
        </Box>
        <Grid container className={classes.subWrap}>
          <Grid container item alignItems="center">
            {variant === 'avatar' ? (
              <Typography style={{ marginLeft: 4, marginRight: 10 }}>
                <KenAvatar value={name.charAt(0)} />
              </Typography>
            ) : null}
            <Typography className={classes.subLabel} data-testid="subject-name">
              {name?.toUpperCase()}
            </Typography>

            <Typography
              className={classes.rollNumLabel}
              data-testid="subject-name"
            >
              {rollNumber}
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.subValue}>
          <Typography className={classes.gradeValue}>
            <Typography
              className={classes.gradeValueLabel}
              style={{
                color: getGradeTextColor(),
                backgroundColor: getGradeBgColor(),
                fontSize: fontSize,
              }}
              data-testid="grade-value"
            >
              {gradeValue}
            </Typography>
          </Typography>
          <Typography
            className={classes.subjectMark}
            data-testid="subject-mark"
          >
            {subjectMark}
          </Typography>
        </Grid>
        {/* <Grid container className={classes.subRemarks}>
          <Typography className={classes.infoIcon}>{getIcon()}</Typography>
          <Typography
            className={classes.subRemarkLabel}
            data-testid="subject-remark"
          >
            {ratingsDifference}{' '}
            <span
              className={classes.ratingsText}
              style={{ color: theme.palette.KenColors.tertiaryTeal502 }}
            >
              {ratingsText}
            </span>{' '}
            {previousRatings}
          </Typography>
        </Grid> */}
      </Grid>

      <KenPopover
        open={anchorEl}
        anchorEl={anchorEl}
        handleClose={() => {
          setAnchorEl(null);
        }}
        anchorOriginVertical="bottom"
        anchorOriginHorizontal="center"
        transformOriginVertical="top"
        transformOriginHorizontal="left"
      >
        <Grid className={classes.markWrap}>
          <Typography className={classes.markLabelColor}>
            {markLabel}
          </Typography>
          <Grid className={classes.markItemContainer}>
            {marksBreakdown?.map((item, index) => {
              return (
                <Grid key={index} className={classes.markContainer}>
                  <Typography className={classes.markLabel}>
                    {item.testItem}
                  </Typography>
                  <Typography className={classes.markValue}>
                    {item.testValue}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </KenPopover>
    </>
  );
}
