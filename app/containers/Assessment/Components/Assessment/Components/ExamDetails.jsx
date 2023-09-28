import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import KenSelect from '../../../../../components/KenSelect';
import { useTranslation } from 'react-i18next';
//Note : As of now values are hard coded
// import {
//   getGradeDetails,
//   getExamDetails,
// } from '../../../../../utils/ApiService';
import KenLoader from '../../../../../components/KenLoader';
import AssessmentDetails from '../../../AssessmentDetails.json';

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.KenColors.neutral10,
    padding: 16,
  },
  header: {
    color: theme.palette.KenColors.neutral900,
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 16,
  },
  inputBaseClass: {
    background: theme.palette.KenColors.kenWhite,
  },
}));

export default function ExamDetails(props) {
  const { values, touched, errors, setFieldTouched, setFieldValue } = props;

  const classes = useStyles();
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const [gradeDetails, setGradeDetails] = React.useState([]);
  const [examDetails, setExamDetails] = React.useState([]);

  const data = AssessmentDetails.exam;

  React.useEffect(() => {
    const initialGradeArray = [];
    data?.map(el => {
      initialGradeArray.push(el.name);
      setGradeDetails(initialGradeArray);
    });
  }, []);

  const handleCourseChange = value => {
    const initialExamArray = [];
    data?.map((data, i) => {
      if (data.name == value) {
        data?.value?.map(test => {
          initialExamArray.push({ label: test, value: test });
        });
      } else {
        return null;
      }
    });

    setExamDetails(initialExamArray);
  };

  //Note : Values are hard coded now
  // React.useEffect(() => {
  //   setLoading(true);
  //   getGradeDetails()
  //     .then(res => {
  //       let initialArr = [];
  //       res?.map(item => {
  //         initialArr?.push(item?.type);
  //       });
  //       setGradeDetails(initialArr);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err, 'err');
  //       setLoading(false);
  //     });

  //   getExamDetails()
  //     .then(res => {
  //       let initialArr = [];

  //       res?.map(item => {
  //         initialArr?.push(item?.type);
  //       });
  //       setExamDetails(initialArr);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err, 'err');
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <Grid xs={12} md={12}>
      {loading && <KenLoader />}
      <Box className={classes.container} mt={2}>
        <Typography className={classes.header}>
          {t('labels:Exam_details')}
        </Typography>
        <Grid mb={3} xs={12} md={4}>
          <KenSelect
            label={t('headings:Exam_Type')}
            inputBaseRootClass={classes.inputBaseClass}
            options={gradeDetails}
            onChange={event => {
              handleCourseChange(event.target.value);
              setFieldValue('gradeType', event.target.value);
            }}
            setFieldTouched={setFieldTouched}
            name="gradeType"
            value={values.gradeType}
            variant="outline"
            errors={errors?.gradeType}
            touched={touched?.gradeType}
          />
        </Grid>
        <Box mt={3}>
          <Grid md={4}>
            <KenSelect
              label={t('headings:Grade_Type')}
              placeholder="Select"
              inputBaseRootClass={classes.inputBaseClass}
              options={examDetails}
              onChange={newValue => {
                setFieldValue('examType', newValue.target.value);
              }}
              setFieldTouched={setFieldTouched}
              name="examType"
              value={values.examType}
              variant="outline"
              errors={errors?.examType}
              touched={touched?.examType}
            />
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}
