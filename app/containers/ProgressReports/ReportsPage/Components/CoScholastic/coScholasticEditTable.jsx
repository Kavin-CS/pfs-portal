import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, useTheme } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import KenGrid from '../../../../../global_components/KenGrid/index';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import GradeIcon from '../GradeIcon/index';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  termRoot: {
    borderTop: 'none',
    background: theme.palette.KenColors.kenWhite,
  },

  gridView: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  toggleButtonGroupRoot: {
    borderRadius: '50%',
    width: 32,
    height: 32,
    border: `1px solid ${theme.palette.KenColors.lightGray}`,
    borderRadius: '50%',
    '&:not(:first-child)': {
      borderRadius: '50%',
      borderLeft: `1px solid ${theme.palette.KenColors.lightGray}`,
      marginLeft: 12,
    },
    '&:first-child': {
      borderRadius: '50%',
    },
  },
  toggleButtonLabel: {
    width: 32,
  },
  subjectTitle: {
    fontSize: '13px',
    fontWeight: 'normal',
    margin: '0px 8px',
    lineHeight: '100%',
    color: theme.palette.KenColors.neutral900,
    textAlign: 'left',
  },
}));

export default function CoScholasticEdit(props) {
  const {
    editData = [],
    gradeValues,
    gradeColorPalette,
    getCoScholasticGradeData,
    coScholastic,
    tabIndex,
    setCoScholastic,
  } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();
  const [initialTableData, setInitialTableData] = React.useState(editData);
  const [tIndex, setTIndex] = React.useState();

  const getGradeColor = gradeValue => {
    return gradeColorPalette?.find(
      palette =>
        palette.grade?.trim().toUpperCase() === gradeValue.trim()?.toUpperCase()
    );
  };

  React.useEffect(() => {
    setTIndex(tabIndex);
  }, [tabIndex]);

  React.useEffect(() => {
    const arr = coScholastic.map((el, index) => {
      if (index === tIndex) {
        el.subjects = initialTableData;
      }
      return el;
    });
    getCoScholasticGradeData(arr);
  }, [initialTableData]);

  const handleChange = (event, value, index) => {
    const gradesArray = [...initialTableData];
    gradesArray[index].gradeValue = value;
    setInitialTableData([...gradesArray]);
    // getCoScholasticGradeData(initialTableData);
  };

  const gradeCell = row => {
    return (
      <Box>
        {initialTableData && (
          <ToggleButtonGroup
            // value={initialTableData[(row?.row?.index)].Grade}
            value={row.value}
            exclusive
            onChange={(event, value) =>
              handleChange(event, value, row?.row?.index)
            }
            aria-label="text alignment"
            classes={{ groupedHorizontal: classes.groupRoot }}
          >
            {gradeValues.map((el, index) => {
              return (
                <ToggleButton
                  value={el.Grade}
                  aria-label="text"
                  classes={{
                    root: classes.toggleButtonGroupRoot,
                    label: classes.toggleButtonLabel,
                  }}
                  selected={el.Grade === row.value}
                >
                  {el.Grade ===
                  initialTableData[(row?.row?.index)].gradeValue ? (
                    <GradeIcon {...getGradeColor(el.Grade)} grade={el.Grade} />
                  ) : (
                    <GradeIcon grade={el.Grade} />
                  )}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        )}
      </Box>
    );
  };

  const SubjectsCell = row => {
    return (
      <>
        <Box>
          <Typography className={classes.subjectTitle}>{row.value}</Typography>
        </Box>
      </>
    );
  };

  const columns = [
    {
      Header: t('headings:SUBJECT'),
      accessor: 'subjectName',
      className: classes.subjects,
      Cell: SubjectsCell,
    },
    {
      Header: t('GRADE'),
      accessor: 'gradeValue',
      Cell: gradeCell,
    },
    {
      Header: t('CLASS AVG'),
      accessor: 'classAvg',
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Grid className={classes.termRoot}>
        <KenGrid
          columns={columns}
          data={initialTableData}
          title=""
          toolbarDisabled={true}
        />
      </Grid>
    </Box>
  );
}
