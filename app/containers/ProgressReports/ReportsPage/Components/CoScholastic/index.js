import React, { useState } from 'react';
import { Box, Grid, Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GradeSectionHeader from '../GradeSectionHeader/index';
import SubjectCard from '../SubjectCard/index';
import { useTranslation } from 'react-i18next';
import { getCoScholasticGrade } from '../../../../../utils/ApiService';
import KenTabs from '../../../../../components/KenTabs';
import KenGrid from '../../../../../global_components/KenGrid/index';
import CoScholasticEditTable from './coScholasticEditTable';
import {
  getBgColorPalette,
  getTextColorPalette,
  getGradeColorPalette,
} from '../Helper';
import GradeIcon from '../GradeIcon';
import { KEY_EMPTY_VALUES_PLACEHOLDERS } from '../../../../../utils/constants';
import { isFeatureAllowed } from '../../../../../utils/rbac/config';

const useStyles = makeStyles(theme => ({
  wrapper: {
    border: `1px solid ${theme.palette.KenColors.gradeSectionBorder}`,
    overflow: 'hidden',
    borderRadius: 6,
  },
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
  subjectTitle: {
    fontSize: '13px',
    fontWeight: '400',
    color: theme.palette.KenColors.neutral900,
    textAlign: 'left',
  },
}));

export default function CoScholastic(props) {
  const { data, view, edit, getCoScholasticGradeData, setCoScholastic } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();
  const [coScholasticGradeDetails, setCoScholasticGradeDetails] = useState([]);
  const [array, setArray] = React.useState();

  const [coScholasticColorPalette, setCoScholasticColorPalette] = useState();
  const [gradeColorPalette, setGradeColorPalette] = useState([]);

  const [editCoScholastic, setEditCoScholastic] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [copyData, setCopyData] = useState();

  React.useEffect(() => {
    setCopyData([...data]);
  }, [props]);

  React.useEffect(() => {
    isFeatureAllowed('reports_coscholastic', 'edit')
      .then(isAllowed => {
        if (isAllowed) setEditCoScholastic(edit);
      })
      .catch(e => {
        console.error('Error getting isAllowed: ', error);
      });
  }, [edit]);

  const getGradeColor = grade => {
    return gradeColorPalette?.find(
      palette =>
        palette?.grade?.trim()?.toUpperCase() === grade?.trim()?.toUpperCase()
    );
  };

  const GradeCell = row => {
    return (
      <>
        <Box className={classes.icon}>
          <GradeIcon
            {...getGradeColor(row.value)}
            grade={
              row.value === 'null' || row.value === null
                ? KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH
                : row.value?.toUpperCase()
            }
          />
        </Box>
      </>
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
      Cell: SubjectsCell,
    },
    {
      Header: t('GRADE'),
      accessor: 'gradeValue',
      Cell: GradeCell,
    },
    {
      Header: t('CLASS AVG'),
      accessor: 'Name',
    },
  ];

  React.useEffect(() => {
    getCoScholasticGrade()
      .then(response => {
        setCoScholasticGradeDetails(response);
        const colorScheme = getGradeColorPalette(
          response,
          getBgColorPalette(response.length),
          getTextColorPalette(response.length)
        );
        setGradeColorPalette(colorScheme);
        setCoScholasticColorPalette([...colorScheme]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    const coScholasticDetails = copyData?.map(el => {
      return {
        title: el.term,
        content: (
          <>
            {view === 'module' ? (
              <Grid container direction="row">
                {el.subjects.map(elem => {
                  return (
                    <Grid item md={4} sm={4} xs={12}>
                      <SubjectCard
                        name={elem.subjectName}
                        subjectMark={elem.subjectMark}
                        gradeValue={elem.gradeValue}
                        ratingsDifference={elem.ratingsDifference}
                        ratingsText={elem.ratingText}
                        previousRatings={elem.previousRatings}
                        marksBreakdown={elem.marksBreakdown}
                        status={elem.status}
                        markLabel={t('messages:Marks_Breakdown')}
                        infoIcon
                        fontSize={24}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            ) : editCoScholastic ? (
              <CoScholasticEditTable
                coScholastic={copyData}
                editData={el.subjects}
                gradeColorPalette={coScholasticColorPalette}
                gradeValues={coScholasticGradeDetails}
                getCoScholasticGradeData={getCoScholasticGradeData}
                tabIndex={tabIndex}
                setCoScholastic={setCoScholastic}
              />
            ) : (
              <KenGrid
                columns={columns}
                data={el.subjects}
                title=""
                toolbarDisabled={true}
                gradeColorPalette={coScholasticColorPalette}
              />
            )}
          </>
        ),
      };
    });
    setArray(coScholasticDetails);
  }, [props, coScholasticColorPalette, editCoScholastic]);

  return (
    <Box className={classes.wrapper}>
      <Grid className={classes.root}>
        <GradeSectionHeader
          title={t('labels:CoScholastic')}
          gradeLabel={t('labels:View_Grade_Distribution')}
          gradeDistribution={coScholasticGradeDetails}
          gradePopupTitle={t('messages:Grade_Distribution')}
          popoverWidth={321}
          gradeColorPalette={gradeColorPalette}
        />
      </Grid>

      <Grid className={classes.termRoot}>
        {array && <KenTabs data={array} onTabChange={setTabIndex} />}
      </Grid>
    </Box>
  );
}
