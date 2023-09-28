import React, { useState } from 'react';
import { Grid, Typography, useTheme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import GradeSectionHeader from '../../../ReportsPage/Components/GradeSectionHeader/index';
import SubjectCard from '../../../ReportsPage/Components/SubjectCard/index';
import KenTabs from '../../../../../components/KenTabs';
import StudentsListTable from '../StudentListTable/index';
import StudentEditTable from '../EditGradeTable/index';
import { getScholasticGrade } from '../../../../../utils/ApiService';
import {
  getBgColorPalette,
  getTextColorPalette,
  getGradeColorPalette,
} from '../../../ReportsPage/Components/Helper';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    // borderBottom: `0.6px solid ${theme.palette.KenColors.gradeSectionBorder}`,
  },

  termRoot: {
    padding: 16,
    borderTop: 'none',
    // background: theme.palette.KenColors.kenWhite,
  },

  gridView: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  wrapper: {
    marginTop: 12,
    background: theme.palette.KenColors.kenWhite,
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function Scholastic(props) {
  const {
    edit,
    view,
    data,
    setTabIndex,
    tabIndex,
    getGradeData,
    courseOfferingId,
    setUpdateData,
    standard,
    getValidations,
    scholastic,
  } = props;

  const classes = useStyles();
  const { t } = useTranslation();
  const [array, setArray] = React.useState();
  const [scholasticColorPalette, setScholasticColorPalette] = useState();
  const [scholasticGradeDetails, setScholasticGradeDetails] = useState([]);
  const [gradeColorPalette, setGradeColorPalette] = useState([]);
  const [copyData, setCopyData] = useState([]);

  React.useEffect(() => {
    setArray(data);
    setCopyData([...data]);
  }, [props]);

  React.useEffect(() => {
    getScholasticGrade()
      .then(response => {
        setScholasticGradeDetails(response);
        const colorScheme = getGradeColorPalette(
          response,
          getBgColorPalette(response.length),
          getTextColorPalette(response.length)
        );
        setGradeColorPalette(colorScheme);

        setScholasticColorPalette([...colorScheme]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [courseOfferingId, props]);

  React.useEffect(() => {
    const arr = copyData?.map(el => {
      return {
        title: el.term,
        content: (
          <>
            {edit ? (
              <StudentEditTable
                data={el?.grades || el?.students}
                term={el?.term}
                standard={standard}
                gradeColorPalette={scholasticColorPalette}
                gradesColumnsHeaderData={el.gradesColumnsHeaderData}
                getGradeData={getGradeData}
                breakdownData={el.gradesBreakdown}
                courseOfferingId={courseOfferingId}
                setUpdateData={setUpdateData}
                getValidations={getValidations}
                tabIndex={tabIndex}
                scholastic={copyData}
              />
            ) : view === 'module' ? (
              <Grid container direction="row">
                {el.students.map(el => {
                  return (
                    <Grid item md={4} sm={4} xs={12}>
                      <SubjectCard
                        name={el?.name}
                        subjectMark={el?.subjectMark}
                        // rollNumber={el.rollNumber}
                        gradeValue={el.gradeValue}
                        // ratingsDifference={el.ratingsDifference}
                        // ratingsText={el.ratingText}
                        // previousRatings={el.previousRatings}
                        marksBreakdown={el.marksBreakdown}
                        // status={el.status}
                        itemPerRow={12}
                        markLabel={t('messages:Marks_Breakdown')}
                        rowsPerGrid={3}
                        // variant="showAvatar"
                      />
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <StudentsListTable
                data={el.grades || el.students}
                gradeColorPalette={scholasticColorPalette}
                gradesColumnsHeaderData={el.gradesColumnsHeaderData}
              />
            )}
          </>
        ),
      };
    });
    setArray(arr);
  }, [props, scholasticColorPalette]);

  return (
    <Box data-testid="subTeacherClasses-page">
      <Box className={classes.wrapper}>
        <Grid className={classes.root}>
          <GradeSectionHeader
            title={t('labels:SCHOLASTIC')}
            gradeLabel={t('labels:View_Grade_Distribution')}
            gradeDistribution={scholasticGradeDetails}
            gradePopupTitle={t('messages:Grade_Wise_Marks_Distribution')}
            rowsPerGrid={3}
            popoverWidth={680}
            gradeColorPalette={gradeColorPalette}
          />
        </Grid>
        <Grid className={classes.termRoot}>
          {array && <KenTabs data={array} onTabChange={setTabIndex} />}
        </Grid>
      </Box>
    </Box>
  );
}
