import React, { useState } from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import KenPopover from '../../../../../components/KenPopover/index';
import GradeIcon from '../GradeIcon/index';

const useStyles = makeStyles(theme => ({
  root: {
    height: 56,
    justifyContent: 'space-between',
    padding: 16,
  },
  primaryLabelColor: {
    color: theme.palette.KenColors.gradeSectionHeaderLabel,
    fontSize: 16,
  },
  secondaryLabelColor: {
    color: theme.palette.KenColors.gradeSectionHeaderLabel,
    cursor: 'pointer',
    fontSize: 13,
  },
  //
  gradeWrap: {
    background: theme.palette.KenColors.neutral11,
    borderRadius: 6,
    // border: `1px solid ${theme.palette.KenColors.gradeSectionBorder}`,
    boxShadow: `0px 0px 9px ${theme.palette.KenColors.shadowColor}`,
  },

  gradeLabelColor: {
    color: theme.palette.KenColors.neutral100,
    fontSize: 14,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    background: theme.palette.KenColors.kenWhite,
  },
  gradeDetailsWrap: {
    padding: '8px 16px 16px',
    background: theme.palette.KenColors.kenWhite,
  },

  gradeMarksWrap: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    whiteSpace: 'nowrap',
  },

  gradeValueWrap: {
    minWidth: 32,
    minHeight: 32,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 600,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradeMarkLabel: {
    fontSize: 13,
    marginLeft: 7,
    color: theme.palette.KenColors.tertiaryBlue502,
  },
  pointLabel: {
    fontSize: 13,
    marginLeft: 32,
    color: theme.palette.KenColors.neutral400,
    fontWeight: 600,
  },
  achievementLabel: {
    fontSize: 13,
    marginLeft: 28,
    color: theme.palette.KenColors.neutral400,
  },
  remarksLabel: {
    color: theme.palette.KenColors.tertiaryRed503,
    fontSize: 12,
  },
}));

export default function GradeSectionHeader(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {
    title,
    gradeLabel,
    gradeValue,
    gradePopupTitle,
    gradeDistribution,
    rowsPerGrid,
    popoverWidth,
    gradeColorPalette,
  } = props;
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const divRef = React.useRef();

  const onPopupShow = () => {
    setAnchorEl(divRef.current);
  };

  const getGradeColor = grade => {
    return gradeColorPalette?.find(
      palette =>
        palette?.grade?.trim()?.toUpperCase() === grade?.trim()?.toUpperCase()
    );
  };

  return (
    <>
      <Grid
        container
        className={classes.root}
        data-testid="grade-section-header"
      >
        <Typography
          className={classes.primaryLabelColor}
          data-testid="grade-section-title"
        >
          {title}
        </Typography>
        <Typography
          className={classes.secondaryLabelColor}
          onClick={onPopupShow}
          data-testid="grade-section-label"
          ref={divRef}
        >
          {gradeLabel}
        </Typography>
      </Grid>
      <KenPopover
        open={anchorEl}
        anchorEl={anchorEl}
        handleClose={() => {
          setAnchorEl(null);
        }}
      >
        <Grid className={classes.gradeWrap} style={{ width: popoverWidth }}>
          <Typography className={classes.gradeLabelColor}>
            {gradePopupTitle}
          </Typography>
          <Grid container className={classes.gradeDetailsWrap}>
            {gradeDistribution?.map((item, index) => {
              return (
                <Grid
                  item
                  key={index}
                  md={rowsPerGrid}
                  xs={12}
                  className={classes.gradeMarksWrap}
                >
                  <Typography className={classes.gradeValueWrap}>
                    <GradeIcon
                      grade={item?.Grade}
                      {...getGradeColor(item.Grade)}
                    />
                  </Typography>
                  <Typography className={classes.gradeMarkLabel}>
                    {item?.marks}
                    <Typography className={classes.remarksLabel}>
                      {item?.remarks}
                    </Typography>
                  </Typography>

                  <Typography className={classes.pointLabel}>
                    {item?.points}
                  </Typography>
                  <Typography className={classes.achievementLabel}>
                    {/* <span>-</span> */}
                    {item?.achievement}
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
