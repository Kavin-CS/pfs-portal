import React, { useState } from 'react';
import { Box, Grid, Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GradeSectionHeader from '../GradeSectionHeader/index';
import SubjectCard from '../SubjectCard/index';
import TermSectionHeader from '../TermSectionHeader/index';
import { useTranslation } from 'react-i18next';
import { getScholasticGrade } from '../../../../../utils/ApiService';
import KenTabs from '../../../../../components/KenTabs';
import GradesTable from '../../../ClassTeacher/Components/GradesTable';
import {
  getBgColorPalette,
  getTextColorPalette,
  getGradeColorPalette,
} from '../Helper';
import AdditionalGradesTable from '../../../ClassTeacher/Components/AddtionalGradesTable';
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
}));

export default function Scholastic(props) {
  const {
    data = [],
    view,
    edit,
    onTabChange,
    comments,
    setComments,
    getReportDetails,
    getGradeData,
    getValidations,
    getAdditional,
    standard,
    setScholasticDirty = () => {},
    setScholastic,
    tabIndex,
  } = props;
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();
  const [array, setArray] = React.useState();
  const [scholasticColorPalette, setScholasticColorPalette] = useState();
  const [scholasticGradeDetails, setScholasticGradeDetails] = useState([]);
  const [gradeColorPalette, setGradeColorPalette] = useState([]);
  const [editScholastic, setEditScholastic] = useState(false);
  const [copyData, setCopyData] = useState();

  React.useEffect(() => {
    setArray(data);
    setCopyData([...data]);
  }, [props]);

  React.useEffect(() => {
    isFeatureAllowed('reports_scholastic', 'edit')
      .then(isAllowed => {
        if (isAllowed) setEditScholastic(edit);
      })
      .catch(e => {
        console.error('Error getting isAllowed: ', error);
      });
  }, [edit]);

  React.useEffect(() => {
    copyData?.map(el => {
      if (el.additionalGrades) {
        el.subjects.push(...el.additionalGrades);
      }
    });
  }, [props]);

  React.useEffect(() => {
    console.log('Comments: ', comments);
  }, [comments]);

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
  }, []);

  React.useEffect(() => {
    const arr = copyData?.map(el => {
      return {
        title: `${el?.term} (${el?.termStart} - ${el?.termEnd})`,
        content: (
          <>
            {view === 'module' ? (
              <Grid container direction="row">
                {el.subjects.map(elem => {
                  return (
                    <Grid item md={4} sm={4} xs={12}>
                      <SubjectCard
                        name={elem?.subjectName}
                        subjectMark={elem?.subjectMark}
                        gradeValue={elem?.gradeValue}
                        ratingsDifference={elem?.ratingsDifference}
                        ratingsText={elem?.ratingText}
                        previousRatings={elem?.previousRatings}
                        marksBreakdown={elem?.marksBreakdown}
                        status={elem?.status}
                        markLabel={t('messages:Marks_Breakdown')}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <Grid>
                <GradesTable
                  setScholasticDirty={setScholasticDirty}
                  data={el.grades}
                  scholastic={copyData}
                  setScholastic={setScholastic}
                  breakdownData={el.gradesBreakdown}
                  getReportDetails={getReportDetails}
                  gradeColorPalette={scholasticColorPalette}
                  tabIndex={tabIndex}
                  gradesColumnsHeaderData={el.gradesColumnsHeaderData}
                  getGradeData={getGradeData}
                  getValidations={getValidations}
                  comments={comments}
                  setComments={setComments}
                  edit={editScholastic}
                  standard={standard}
                />
                {el.Standard.Computer_Science_controller__c === true && (
                  <AdditionalGradesTable
                    setScholasticDirty={setScholasticDirty}
                    data={el.additionalGrades}
                    getReportDetails={getReportDetails}
                    gradeColorPalette={scholasticColorPalette}
                    gradesColumnsHeaderData={el.gradesColumnsHeaderData}
                    getGradeData={getAdditional}
                    getValidations={getValidations}
                    comments={comments}
                    scholastic={copyData}
                    setComments={setComments}
                    edit={editScholastic}
                    tabIndex={tabIndex}
                    standard={standard}
                  />
                )}
              </Grid>
            )}
          </>
        ),
      };
    });
    setArray(arr);
  }, [props, scholasticColorPalette, editScholastic]);

  return (
    <Box className={classes.wrapper} data-testid="scholastic-section">
      <Grid className={classes.root}>
        <GradeSectionHeader
          title={t('labels:Scholastic')}
          gradeLabel={t('labels:View_Grade_Distribution')}
          gradeDistribution={scholasticGradeDetails}
          gradePopupTitle={t('messages:Grade_Wise_Marks_Distribution')}
          rowsPerGrid={3}
          popoverWidth={680}
          gradeColorPalette={gradeColorPalette}
        />
      </Grid>

      <Grid className={classes.termRoot}>
        {array && <KenTabs data={array} onTabChange={onTabChange} />}
      </Grid>
    </Box>
  );
}
