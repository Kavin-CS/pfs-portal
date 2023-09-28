import React, { useState } from 'react';
import { Box, useTheme, Grid } from '@material-ui/core';
import * as Yup from 'yup';
import General from './Components/General/index';
import Assessment from './Components/Assessment/index';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withFormik } from 'formik';
import {
  createQuiz,
  getCourses,
  getStudentListDetails,
} from '../../utils/ApiService';
import { FaRegListAlt } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { FiAward } from 'react-icons/fi';
import { RiLayoutLine } from 'react-icons/ri';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiPurchaseTag } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsLayoutSplit } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri';
import { FiUnlock } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import VerticalStepper from '../../components/VerticalStepper/index';
import { getUserDetails } from '../../utils/helpers/storageHelper';
import { KEY_USER } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import context from '../../utils/helpers/context';

export default function PreAssessment(props) {
  return (
    <div>
      <FormikHoc {...props} />
    </div>
  );
}

const AssessmentDetails = props => {
  const theme = useTheme();

  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldTouched,
    setFieldValue,
    handleSubmit,
    handleBack,
    activeStep,
  } = props;

  const { handleSnackbarOpen } = React.useContext(context);

  const steps = [
    {
      id: 1,
      label: 'General',
    },
    {
      id: 2,
      label: 'Assessment settings',
      content: [
        {
          img: BiTimeFive,
          label: 'Time',
          link: '/assessment/#time',
        },
        {
          img: FiAward,
          label: 'Grade',
          link: '/assessment/#grade',
        },
        {
          img: RiLayoutLine,
          label: 'Layout',
          link: '/assessment/#layout',
        },
        {
          img: BsQuestionCircle,
          label: 'Question behaviour',
          link: '/assessment/#questionBehaviour',
        },
        {
          img: BiPurchaseTag,
          label: 'Tags',
          link: '/assessment/#tags',
        },
        {
          img: FaRegListAlt,
          label: 'Exam Details',
          link: '/assessment/#examDetails',
        },
      ],

      collapseItem: [
        {
          img: AiOutlineStar,
          label: 'Review Options',
          link: '/assessment/#review',
        },
        {
          img: BsLayoutSplit,
          label: 'Appearance',
        },
        {
          img: RiGlobalLine,
          label: 'Safe exam browser',
        },
        {
          img: FiUnlock,
          label: 'Extra restrictions on attempts',
        },
        {
          img: FiBox,
          label: 'Common module settings',
        },
      ],
    },
  ];

  const getStepContent = () => {
    const stepper = values.activeStep;
    switch (stepper) {
      case 0:
        return <General {...props} />;

      case 1:
        return <Assessment {...props} />;
      default:
        return 'Not available';
    }
  };

  const phone = useMediaQuery(theme.breakpoints.only('xs'));

  const handleCancel = () => {
    history.push(`/${Routes.home}`);
  };

  return (
    <Box mt={2}>
      <Grid xs={12} sm={12}>
        <VerticalStepper
          setFieldValue={setFieldValue}
          steps={steps}
          getStepContent={getStepContent}
          orientation={phone ? 'horizontal' : 'vertical'}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          activeStep={values.activeStep}
        />
      </Grid>
    </Box>
  );
};

const FormikHoc = props => {
  // const { handleFormSubmit } = props;

  const [course, setCourse] = useState();
  const [loading, setLoading] = React.useState(false);

  const [courses, setCourses] = useState([]);
  const [classesArray, setClassesArray] = React.useState([]);
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({ assessment: 'Physics' });

  const profile = getUserDetails().ContactId;

  React.useEffect(() => {
    setLoading(true);
    const facultyID = profile;
    getCourses(facultyID)
      .then(response => {
        setCourses(response);
        if (Array.isArray(response) && response.length > 0) {
          setCourse(response[0].CourseOfferingID);
          getStudentListDetails(response[0].CourseOfferingID)
            .then(resp => {
              setStudents(resp);
            })
            .catch(err => {
              console.log(err);
              handleSnackbarOpen('error', t('No_Students_Found'));
            });
        } else {
          setLoading(false);
        }

        const classes = [...new Set(response?.map(item => item.accountname))];
        setClassesArray(classes);

        setLoading(false);
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
        handleSnackbarOpen('error', t('translations:Course_Not_Found'));
      });
  }, []);

  // const handleFormSubmit = () => {
  //   const data = {
  //     quizsettings: [
  //       {
  //         name: values.assessmentName,
  //         courseoffering: [
  //           {
  //             id: 'a041y000002pF8KAAU',
  //           },
  //         ],
  //         gradetype: 'Annual',
  //         examtype: 'MA',
  //         timelimit: 200,
  //         opentime: 1624299313,
  //         closetime: 1724299313,
  //         overduehandling: 'autosubmit',
  //         totalmarks: 100,
  //         gradetopass: 80,
  //         grademethod: 2,
  //         attemptallowed: 2,
  //         questionsperpage: 5,
  //         navmethod: 'free',
  //         graceperiod: 0,
  //         shuffleanswers: 1,
  //         preferredbehaviour: 'adaptivenopenalty',
  //         description: values.descriptionDetail,
  //         quizpassword: 'Admin@123',
  //       },
  //     ],
  //   };

  //   createQuiz(data)
  //     .then(res => {
  //       console.log(res, 'res..');
  //     })
  //     .catch(err => console.log(err, 'err'));
  // };

  const GeneralSchema = Yup.object().shape({
    assessmentName: Yup.string()
      .required(t('Validations:Required'))
      .matches(KEY_USER.REGEX.NAME, t('Validations:Name_Match')),
    descriptionDetail: Yup.string().required(t('Validations:Required')),
    className: Yup.string()
      .required(t('Validations:Required'))
      .nullable(),

    sectionName: Yup.array().required(
      t('Validations:Minimum_one_section_has_to_be_selected')
    ),
    // .min(0, t('Validations:Minimum_one_section_has_to_be_selected')),
    subjectName: Yup.string()
      .required(t('Validations:Required'))
      .nullable(),
  });

  const AssessmentSchema = Yup.object({
    onTimeExpiration: Yup.string()
      .required(t('Validations:Required'))
      .nullable(),
    gradeToPassAssessment: Yup.string()
      .required(t('Validations:Required'))
      .matches(KEY_USER.REGEX.NUMBER, t('Validations:Number_Match')),
    submissionGradeInputValue: Yup.string()
      .required(t('Validations:Required'))
      .matches(KEY_USER.REGEX.NUMBER, t('Validations:Number_Match')),
    submissionGradeSelectValue: Yup.string()
      .required(t('Validations:Required'))
      .matches(KEY_USER.REGEX.NAME, t('Validations:Name_Match')),
    questionsPerPage: Yup.string().required(t('Validations:Required')),
    // .matches(KEY_USER.REGEX.NAME, t('Validations:Name_Match')),
    totalMarks: Yup.string().required(t('Validations:Required')),
    gradeMethod: Yup.string()
      .required(t('Validations:Required'))
      .matches(KEY_USER.REGEX.NAME, t('Validations:Name_Match')),
    navigationMethod: Yup.string()
      .required(t('Validations:Required'))
      .matches(KEY_USER.REGEX.NAME, t('Validations:Name_Match')),
    tags: Yup.array()
      // .required(t('Validations:Minimum_one_tag_has_to_be_added'))
      // .min(0, t('Validations:Minimum_one_tag_has_to_be_added'))
      .nullable(),
    attemptsAllowed: Yup.string().required(t('Validations:Required')),
    startTime: Yup.string().required(t('Validations:Required')),
    questionBehaviour: Yup.string().required(t('Validations:Required')),
    endTime: Yup.string().required(t('Validations:Required')),
    timeLimit: Yup.string().required(t('Validations:Required')),
    shuffleWithInQuestion: Yup.string().required(t('Validations:Required')),
    shuffleWithInAnswers: Yup.string().required(t('Validations:Required')),
    attemptRedo: Yup.string().required(t('Validations:Required')),
    attemptList: Yup.string().required(t('Validations:Required')),
    examType: Yup.string().required(t('Validations:Required')),
    gradeType: Yup.string().required(t('Validations:Required')),
  });

  const getValidation = () => {
    switch (activeStep) {
      case 0:
        return GeneralSchema;
        break;
      case 1:
        return AssessmentSchema;
        break;
      default:
        GeneralSchema;
    }
  };

  const FormikForm = withFormik({
    mapPropsToValues: () => ({
      assessmentName: '',
      descriptionDetail: '',
      className: classesArray[0],
      sectionName: '',
      subjectName: '',
      classesArray: classesArray,
      courses: courses,
      loading: loading,
      operation: '',
      gradeToPassAssessment: '',
      onTimeExpiration: '',
      submissionGradeInputValue: '',
      submissionGradeSelectValue: '',
      attemptsAllowed: '',
      startTime: '',
      endTime: '',
      timeLimit: '',
      totalMarks: '',
      questionsPerPage: '',
      gradeMethod: '',
      questionBehaviour: '',
      navigationMethod: '',
      shuffleWithInQuestion: '',
      shuffleWithInAnswers: '',
      attemptRedo: '',
      attemptList: '',
      examType: '',
      gradeType: '',
      tags: '',
      activeStep: activeStep,
      setActiveStep: setActiveStep,
      formData: formData,
      setFormData: setFormData,
    }),

    validationSchema: getValidation,

    handleSubmit: values => {
      switch (values?.operation) {
        case 'previous':
          values.setActiveStep(prevActiveStep => {
            return prevActiveStep - 1;
          });
          break;

        case 'next':
          values.setActiveStep(prevActiveStep => {
            return prevActiveStep + 1;
          });
          break;

        case 'submit':
          console.log('submit the form');
          break;

        default:
          break;
      }
    },
    setFormData: setFormData,
    formData: formData,
  })(AssessmentDetails);

  return <FormikForm {...props} />;
};
