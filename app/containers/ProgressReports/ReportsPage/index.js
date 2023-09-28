import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Box, Typography } from '@material-ui/core';
import dayjs from 'dayjs';

import StudentDetailsCard from './Components/StudentDetailsCard';
import EmbeddedChipsCard from './Components/EmbeddedChipsCard';
import RatingsStatusCard from './Components/RatingsStatusCard';
import { useTranslation } from 'react-i18next';
import RemarkAndSignature from './Components/RemarkAndSignature/index';
import Scholastic from './Components/Scholastic/index';
import CoScholastic from './Components/CoScholastic/index';
import KenDialog from '../../../global_components/KenDialog';
import RaiseQuery from './Components/RaiseQuery';
import CheckIcon from '@material-ui/icons/Check';
import {
  getReportCardDetails,
  getSignature,
  getStudents,
  postScholasticMarks,
  getStudentDetails,
  getCommentsById,
  postCoScholasticMarks,
  postScholasticMainMarks,
  getStudentsBySection,
} from '../../../utils/ApiService';
import KenLoader from '../../../components/KenLoader/fullLoader';
import KenHeader from '../../../global_components/KenHeader/index';
import KenButton from '../../../global_components/KenButton';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ExportIcon from '../../../assets/icons/ExportIcon.svg';
import AddCircleIcon from '../../../assets/icons/AddCircleIcon.svg';
import DownloadIcon from '../../../assets/icons/Download.svg';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ShareIcon from '@material-ui/icons/Share';
import {
  getParentDetails,
  getUserDetail,
  getUserDetails,
} from '../../../utils/helpers/storageHelper';
import {
  KEY_SIGNATURE,
  KEY_STATUS,
  KEY_USER_TYPE,
} from '../../../utils/constants';
import KenSnackBar from '../../../components/KenSnackbar';
import KenPopover from '../../../components/KenPopover';
import ExportPopover from './Components/Popover/exportPopover';
import SharePopover from './Components/Popover/sharePopover';
import KenDrawer from '../../../global_components/KenDrawer';
import KenSwitch from '../../../components/KenSwitch';
import ConsolidatedMarksTable from '../ClassTeacher/Components/ConsolidatedMarksTable';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  embeddedChipsCard: {
    marginTop: '30px',
  },
  chipStyles: {
    marginRight: '5px',
    marginBottom: '5px',
    cursor: 'pointer',
    backgroundColor: theme.palette.KenColors.kenWhite,
    ' &:hover': {
      backgroundColor: `${theme.palette.KenColors.neutral20}`,
    },
  },
  cardAction: {
    color: theme.palette.KenColors.tertiaryYellow501,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  ratings: {
    fontWeight: 600,
    paddingLeft: '5px',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: theme.palette.KenColors.primary,
  },
  box: {
    marginBottom: '20px',
  },
  box1: {
    marginBottom: '10px',
  },
  studentDetailsCard: {
    marginBottom: '11px',
  },
  focusedChip: {
    ' &:focus': {
      backgroundColor: theme.palette.KenColors.kenWhite,
      border: `2px solid ${theme.palette.KenColors.primary}`,
    },
  },
  gradeDetails: {
    background: theme.palette.KenColors.kenWhite,
    borderRadius: 6,
    marginTop: 8,
  },
  raiseQueryLabel: {
    textAlign: 'left',
    color: theme.palette.KenColors.neutral900,
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  btnLabels: {
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'none',
  },
  titles: {
    fontSize: '12px',
    color: theme.palette.KenColors.neutral400,
    fontWeight: 'bold',
    marginTop: '29px',
  },
  heading: {
    color: theme.palette.KenColors.neutral900,
    fontWeight: '600',
  },
  subHeading: {
    color: theme.palette.KenColors.neutral900,
    fontWeight: '400',
  },
  queryBtn: {
    color: theme.palette.KenColors.tertiaryRed502,
    margin: '0px 16px',
  },
  toggleButtonGroupRoot: {
    maxHeight: '36px',
  },
  toggleButtonRoot: {
    maxHeight: '40px',
  },
  toggleButtonSelected: {
    backgroundColor: `${theme.palette.KenColors.primary} !important`,
    color: `${theme.palette.KenColors.kenWhite} !important`,
  },
  headerBtn: {
    marginLeft: '10px',
    minWidth: '100px',
  },
  redText: {
    color: theme.palette.KenColors.tertiaryRed502,
  },
  drawerPaper: {
    width: '70%',
  },
  closeIcon: {
    height: 'max-content',
  },
  switchLabel: {
    padding: '0px 5px',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '100%',
    textTransform: 'uppercase',
    color: theme.palette.KenColors.neutral400,
  },
}));

export default function Reports(props) {
  const params = new URLSearchParams(props.location.search);
  const [contactId, setContactId] = useState(params.get('ContactId')) ;
  const [programPlanId, setProgramPlanId] = useState(params.get('ProgramId')) ;
  const [section, setSection] = useState(params.get('Section')) ;
  const [studentInfo, setStudentInfo] = useState({
    ContactId: contactId,
    ProgramId: '',
    Section:section
  });
  const { t } = useTranslation();
  const classes = useStyles();
  const [openQueryPopup, setOpenQueryPopup] = useState(false);
  const [openSignReportCardPopup, setOpenSignReportCardPopup] = useState(false);
  const [reportCardDetails, setReportCardDetails] = useState();
  const [view, setView] = React.useState('module');
  const [edit, setEdit] = React.useState(false);
  const [showSubmitHeader, setShowSubmitHeader] = React.useState(false);
  const notAvailable = '--';
  const rank = '10';
  const obtainedMarks = '440';
  const totalMarks = '660';
  const std = 'XI';
  const [studentDetails, setStudentDetails] = React.useState();
  const [scholastic, setScholastic] = React.useState([]);
  const [coScholastic, setCoScholastic] = React.useState([]);
  const [loading, setLoading] = React.useState();
  const [students, setStudents] = React.useState();
  const [
    scholasticActiveTabIndex,
    setScholasticActiveTabIndex,
  ] = React.useState(0);
  const [scholasticEditMarks, setScholasticEditMarks] = React.useState();
  const [scholasticMainEditMarks, setScholasticMainEditMarks] = React.useState();
  const [coScholasticEditMarks, setCoScholasticEditMarks] = React.useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState(KEY_STATUS.success);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [anchorExport, setAnchorExport] = React.useState(null);
  const [anchorShare, setAnchorShare] = React.useState(null);
  const [consolidated, setConsolidated] = React.useState(false);
  const [signatures, setSignatures] = React.useState([]);
  const [exportData, setExportData] = React.useState();
  const [standard, setStandard] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [scholasticDirty, setScholasticDirty] = useState(false);
  const [coScholasticDirty, setCoScholasticDirty] = useState(false);
  const [additionalGrade,setAdditionalGrade] = useState();
  const parent = getParentDetails()

  const [initialGrades, setInitialGrades]= useState([])
  
  const consolidatedData = [
    {
      studentName: 'Jane Cooper',
      'English (100)': '80',

      'Hindi - II Language (100)': '75',

      'Mathematics (100)': '59',

      'Science (100)': '69',

      'Social Science (100)': '92',

      'AI (100)': '60',
      total: '435',
    },
    {
      studentName: 'Wade Warren',
      'English (100)': '76',

      'Hindi - II Language (100)': '79',

      'Mathematics (100)': '68',

      'Science (100)': '86',

      'Social Science (100)': '90',

      'AI (100)': '77',
      total: '476',
    },
    {
      studentName: 'Cameron Williamson',
      'English (100)': '50',

      'Hindi - II Language (100)': '54',

      'Mathematics (100)': '45',

      'Science (100)': '60',

      'Social Science (100)': '65',

      'AI (100)': '45',
      total: '319',
    },
    {
      studentName: 'Esther Howard',
      'English (100)': '50',

      'Hindi - II Language (100)': '55',

      'Mathematics (100)': '77',

      'Science (100)': '70',

      'Social Science (100)': '74',

      'AI (100)': '68',
      total: '394',
    },
    {
      studentName: 'Theresa Webb',
      'English (100)': '90',

      'Hindi - II Language (100)': '94',

      'Mathematics (100)': '90',

      'Science (100)': '95',

      'Social Science (100)': '95',

      'AI (100)': '91',
      total: '555',
    },
    {
      studentName: 'Guy Hawkins',
      'English (100)': '75',

      'Hindi - II Language (100)': '73',

      'Mathematics (100)': '79',

      'Science (100)': '83',

      'Social Science (100)': '86',

      'AI (100)': '84',
      total: '480',
    },
  ];

  const consolidatedSubjects = [
    {
      subject: 'English (100)',
    },
    {
      subject: 'Hindi - II Language (100)',
    },
    {
      subject: 'Mathematics (100)',
    },
    {
      subject: 'Science (100)',
    },
    {
      subject: 'Social Science (100)',
    },
    {
      subject: 'AI (100)',
    },
  ];
  const distributedData = [
    {
      studentName: 'Jane Cooper',
      'English (80+20)': '61+19',

      'Hindi - II Language (80+20)': '59+16',

      'Mathematics (80+20)': '49+10',

      'Science (80+20)': '58+11',

      'Social Science (80+20)': '74+18',

      'AI (80+20)': '50+10',
      total: '435',
    },
    {
      studentName: 'Wade Warren',
      'English (80+20)': '66+10',

      'Hindi - II Language (80+20)': '64+15',

      'Mathematics (80+20)': '53+15',

      'Science (80+20)': '76+10',

      'Social Science (80+20)': '70+20',

      'AI (80+20)': '61+16',
      total: '476',
    },
    {
      studentName: 'Cameron Williamson',
      'English (80+20)': '40+10',

      'Hindi - II Language (80+20)': '43+11',

      'Mathematics (80+20)': '35+10',

      'Science (80+20)': '45+15',

      'Social Science (80+20)': '50+15',

      'AI (80+20)': '35+10',
      total: '319',
    },
    {
      studentName: 'Esther Howard',
      'English (80+20)': '30+20',

      'Hindi - II Language (80+20)': '40+15',

      'Mathematics (80+20)': '58+19',

      'Science (80+20)': '50+20',

      'Social Science (80+20)': '60+14',

      'AI (80+20)': '53+15',
      total: '394',
    },
    {
      studentName: 'Theresa Webb',
      'English (80+20)': '70+20',

      'Hindi - II Language (80+20)': '75+19',

      'Mathematics (80+20)': '73+17',

      'Science (80+20)': '80+15',

      'Social Science (80+20)': '75+20',

      'AI (80+20)': '75+16',
      total: '555',
    },
    {
      studentName: 'Guy Hawkins',
      'English (80+20)': '57+18',

      'Hindi - II Language (80+20)': '55+18',

      'Mathematics (80+20)': '68+11',

      'Science (80+20)': '69-14',

      'Social Science (80+20)': '68+18',

      'AI (80+20)': '866+18',
      total: '480',
    },
  ];

  const distributedSubjects = [
    {
      subject: 'English (80+20)',
    },
    {
      subject: 'Hindi - II Language (80+20)',
    },
    {
      subject: 'Mathematics (80+20)',
    },
    {
      subject: 'Science (80+20)',
    },
    {
      subject: 'Social Science (80+20)',
    },
    {
      subject: 'AI (80+20)',
    },
  ];

  useEffect(()=>{
      if(contactId){
          getStudentDetails(contactId).then((res)=>{
              if(Array.isArray(res?.Program_Enrollment)){
               const programObj= res?.Program_Enrollment?.find((p)=>p.Status==="Current")
               setStudentInfo(prev=> ({...prev,ContactId: contactId,ProgramId:programObj.Id}))
              }
          }).catch((err)=>{
              console.log("error",err);
          })
      }
  },[contactId])

  useEffect(() => {
      if(studentInfo.ProgramId){
    getSignature(studentInfo.ProgramId, KEY_SIGNATURE.PRIMARY_HEAD).then(
      res => {
        setSignatures(prev => {
          const signArray = [...prev];
          let head = {
            key: KEY_SIGNATURE.PRIMARY_HEAD,
            label: t('labels:Primary_Head_Sign'),
            value: res?.files[0]?.body,
          };
          const idx = signArray.findIndex(
            sign => sign.key === KEY_SIGNATURE.PRIMARY_HEAD
          );
          if (idx === -1) signArray.push(head);
          else signArray[idx] = head;
          return signArray;
        });
      }
    ).catch((err)=>{
        console.log("err",err);
    });

    getSignature(studentInfo.ProgramId, KEY_SIGNATURE.CLASS_TEACHER).then(
      res => {
        setSignatures(prev => {
          const signArray = [...prev];
          let teacher = {
            key: KEY_SIGNATURE.CLASS_TEACHER,
            label: t('labels:Class_Teacher_Sign'),
            value: res?.files[0]?.body,
          };

          const idx = signArray.findIndex(
            sign => sign.key === KEY_SIGNATURE.CLASS_TEACHER
          );
          if (idx === -1) signArray.push(teacher);
          else signArray[idx] = teacher;
          return signArray;
        });
      }
    ).catch((err)=>{
        console.log("err",err);
    });

    getSignature(studentInfo.ProgramId, KEY_SIGNATURE.PARENT).then(res => {
      setSignatures(prev => {
        const signArray = [...prev];
        let parent = {
          key: KEY_SIGNATURE.PARENT,
          label: t('labels:Parent_Sign'),
          value: res?.files[0]?.body,
        };

        const idx = signArray.findIndex(
          sign => sign.key === KEY_SIGNATURE.PARENT
        );
        if (idx === -1) signArray.push(parent);
        else signArray[idx] = parent;
        return signArray;
      });

    }).catch((err)=>{
        console.log("err",err);
    });
}
  }, [studentInfo]);

  const [
    openConsolidatedGradesDrawer,
    setOpenConsolidatedGradesDrawer,
  ] = useState(false);

  const handleMarks = e => {
    setConsolidated(e.target.checked);
  };
  const [validations, setValidations] = useState();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const handleSnackbarOpen = (severity, message) => {
    setOpenSnackbar(true);
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
  };

  const allSubjects = [
    'General',
    'Mathematics',
    'Social Science',
    'Hindi - II Language',
    'Science',
    'English',
    'French - II Language',
  ];
  const performanceDegrade = [];
  const performanceImproved = [];
  const details = [
    { label: 'Height', value: '109cm' },
    { label: 'Weight', value: '35kg' },
    {
      label: 'School reopens on',
      value: '01 June, 2021',
    },
  ];
  const remarks = [];

  // Comments
  const [comments, setComments] = React.useState({});

  const profile = getUserDetails();

  const handleQuerySubmit = () => {
    console.log('Submitting query');
  };

  const handleRaiseQuery = () => {
    setOpenQueryPopup(true);
  };

  const toggleQuery = (open = !openQueryPopup) => {
    console.log('Reports page: toggleQuery ', open, openQueryPopup);
    setOpenQueryPopup(open);
  };

  const handleSignReportCard = () => {
    setOpenSignReportCardPopup(true);
  };

  const closeSignPopup = () => {
    setOpenSignReportCardPopup(false);
  };

  const handleAddGrades = () => {
    setEdit(true);
    setShowSubmitHeader(true);
    setView('list');
  };
  const handleAddGradesCancel = () => {
    setEdit(false);
    setShowSubmitHeader(false);
    setView('list');
    setCoScholasticDirty(false);
    setScholasticDirty(false);
    handleCoScholastic({
      data: [...initialGrades.coscholistic],
      programEnrollmentId: initialGrades.programEnrollmentId,
    });
    handleScholastic(initialGrades)
  };
  const handleGradesSubmit = () => {
    if (validations.error) {
      handleSnackbarOpen('error', t('messages:Grades_Invalid'));
    } else {
      if (scholasticDirty) {
        if(scholasticEditMarks){
          setLoading(true);
          postScholasticMarks({ Grade: [...scholasticEditMarks] })
            .then(res => {
              setLoading(false);
              setScholasticDirty(false);
              if (res.success === true) {
                setEdit(false);
                setShowSubmitHeader(false);
                getReportDetails();
                handleNotistackSnackbar(
                  'success',
                  t('messages:Marks_has_been_successfully_updated')
                );
              }
            })
            .catch(err => {
              console.log(err);
              setLoading(false);
              handleSnackbarOpen(
                'warning',
                t('messages:Some_error_occured_while_updating_the_marks')
              );
            });
        }

        if(scholasticMainEditMarks){
          setLoading(true);
          postScholasticMainMarks({ Grade: [...scholasticMainEditMarks] })
            .then(res => {
              setLoading(false);
              setScholasticDirty(false);
              if (res.success === true) {
                setEdit(false);
                setShowSubmitHeader(false);
                getReportDetails();
              }
            })
            .catch(err => {
              console.log(err);
              setLoading(false);
              handleSnackbarOpen(
                'warning',
                t('messages:Some_error_occured_while_updating_the_marks')
              );
            });
        }
        
        if(additionalGrade){
          postCoScholasticMarks({ Grade: [ ...additionalGrade] })
            .then(res => {
              setCoScholasticDirty(false);
              setLoading(false);
              setEdit(false);
              setShowSubmitHeader(false);
              getReportDetails();
            })
            .catch(err => {
              setLoading(false);
              console.log(err);
              handleNotistackSnackbar(
                'warning',
                t('messages:Some_error_occured_while_updating_the_marks')
              );
            });
        }
    

      }
      

      if (coScholasticDirty) {
        setLoading(true);
        postCoScholasticMarks({ Grade: [...coScholasticEditMarks] })
          .then(res => {
            setCoScholasticDirty(false);
            setLoading(false);
            setEdit(false);
            setShowSubmitHeader(false);
            getReportDetails();
            handleNotistackSnackbar(
              'success',
              t('messages:CoScholastic_Marks_has_been_successfully_updated')
            );
          })
          .catch(err => {
            setLoading(false);
            console.log(err);
            handleNotistackSnackbar(
              'warning',
              t(
                'messages:Some_error_occured_while_updating_the_CoScholastic_marks'
              )
            );
          });
      }

      if (!scholasticDirty && !coScholasticDirty) {
        setEdit(false);
        setShowSubmitHeader(false);
        getReportDetails();
        handleNotistackSnackbar('info', t('messages:Empty_Update'));
      }
    }
  };
  const handleExport = event => {
    setAnchorExport(event.currentTarget);
  };

  const handleShare = event => {
    setAnchorShare(event.currentTarget);
    console.log('sharing');
  };

  const handleStudentDetails = response => {
    setStudentDetails({
      name: response.name,
      dob: response.dob,
      profilePicture: '',
      standard: response.standard,
      admissionNo: response.admissionNo,
      details: [
        {
          label: t('grNo'),
          value: response.grNo,
        },
        {
          label: t('rollNo'),
          value: response.rollNo,
        },
        {
          label: t('dob'),
          value: response.dob,
        },
        {
          label: t('fatherName'),
          value: response.fatherName,
        },
        {
          label: t('motherName'),
          value: response.motherName,
        },
      ],
    });
  };

  const getBreakdown = data => {
    let obj = {};

    data.map((el, index) => {
      const key = `ma${index + 1}`;
      obj[key] = el.marksobtained;
    });

    return obj;
  };

  const getPp = data => {
    let obj = {};

    Array.isArray(data) &&
      data.map((el, index) => {
        const key = `pp${index + 1}`;
        obj[key] = el.marksobtained;
      });

    return obj;
  };

  const getSubEn = data => {
    let obj = {};

    data.map((el, index) => {
      const key = `subEn${index + 1}`;
      obj[key] = el.marksobtained;
    });

    return obj;
  };

  const getGradesBreakdown = term => {
    const gradesBreakdown = [];
    term?.courses?.map((course, index) => {
      const obj = {
        term: term?.termName,
        courseConnectionId: course.courseconnectionId,

        subject: course.courseName,

        pp: course?.PP?.consolidated,
        ...getPp(course?.PP?.breakdown),
        totalPp: course?.PP?.consolidated,
        ppBreakdownMax: course?.PP?.breakdownMaxMarks,

        ma: course.ma.consolidated,
        ...getBreakdown(course?.ma?.breakdown),
        totalMa: course?.ma?.consolidated,
        maBreakdownMax: course?.ma?.breakdownMaxMarks,

        subEn: course.suben.consolidated,

        ...getSubEn(course?.suben?.breakdown),
        totalSub: course?.suben?.consolidated,
        subEnBreakdownMax: course?.ma?.breakdownMaxMarks,
      };
      gradesBreakdown.push(obj);
    });

    return gradesBreakdown;
  };

  const getGradesOfTerm = term => {
    const gradesArray = [];
    term?.courses?.map((course, index) => {
      const obj = {
        ...course,
        term: term?.termName,
        courseConnectionId: course.courseconnectionId,
        status: 'increased',
        subject: course.courseName,
        pp: course?.PP?.consolidated,
        ma: course.ma.consolidated,
        portfolio: course.portfolio,
        subEn: course.suben.consolidated,
        exam: course.writtenTest,
        examMax: course.writtenTestMaxMarks,
        totalMarks: course.totalMarks,
        average: course.classAverage,
        grade: course.grade,
      };
      gradesArray.push(obj);
    });

    return gradesArray;
  };
  const getGradeColumnsOfTerm = term => {
    return {
      pp: '5M',
      ma: '5M',
      subEn: '5M',
      portfolio: `5M`,
      exam: `${term.termName}`,
    };
  };

  const getExportData = data => {
    setExportData(data);
    // console.log('data', data);
  };

  const getAdditionalGrades = (resp, element) => {
    let data = []

    if(element?.termName === 'Half-Yearly'){
       resp?.additionalGrade.map(el=>{
        if(el?.termName === 'Half-Yearly'){
       el?.courses?.map(elem=>{
            data.push({
              term: el?.termName,
              subjectName: elem?.courseName,
              subjectMark: elem?.grade,
              programEnrollmentId: resp?.programEnrollmentId
            })
        })
    } })
  } else{
    resp?.additionalGrade.map(el=>{
      if(el?.termName === 'Annual'){
       el?.courses?.map(elem=>{
          data.push({
            term: el?.termName,
            subjectName: elem?.courseName,
            subjectMark: elem?.grade,
            programEnrollmentId: resp?.programEnrollmentId
          })
        
      })
  } })
  }
  return data;
}

  const handleScholastic = response => {
    const data = response?.grades?.map(el => {
      return {
        term: el?.termName,
        termStart: el?.termStart,
        termEnd: el?.termEnd,
        Standard: response?.Standard,
        subjects: el.courses.map(elem => {
          return {
            ...elem,
            subjectName: elem.courseName,
            gradeValue: elem.grade,
            subjectMark: elem.totalMarks,
            ratingsDifference: elem.ratingsDifference,
            ratingText: elem.ratingText,
            status: elem.status,
            previousRatings: elem.previousRatings,
            marksBreakdown: [
              {
                testItem: 'Pen & Paper test (5M)',
                testValue: elem?.PP?.consolidated,
              },
              {
                testItem: 'Multiple Assessment (5M)',
                testValue: elem?.ma?.consolidated,
              },
              {
                testItem: 'Portfolio (5M)',
                testValue: elem?.portfolio,
              },
              {
                testItem: 'Sub-enrichment (5M)',
                testValue: elem?.suben?.consolidated,
              },
              {
                testItem:
                  el.termName === 'Half-Yearly'
                    ? `Half yearly exam (${elem?.writtenTestMaxMarks}M)`
                    : `Annual exam (${elem?.writtenTestMaxMarks}M)`,
                testValue: elem?.writtenTest,
              },
            ],
          };
        }),
        grades: getGradesOfTerm(el),
        gradesColumnsHeaderData: getGradeColumnsOfTerm(el),
        gradesBreakdown: getGradesBreakdown(el),
        additionalGrades: response.Standard.Computer_Science_controller__c===true && getAdditionalGrades(response, el),
      };
    });
    setScholastic(data);
  };

  const getGradesOfCoScholasticTerm = term => {
    const gradesArray = [];
    term?.courses?.map((course, index) => {
      const obj = {
        subjectName: course.subjectName,
        gradeValue: course.gradeValue,
        exam:
          term.termName?.toLowerCase() === 'annual'
            ? course.annual
            : course.halfyearly,
      };
      gradesArray.push(obj);
    });
    return gradesArray;
  };

  const handleCoScholastic = response => {
    const data = response?.data?.map(el => {
      return {
        term: `${el?.termName} (${el?.termStart} - ${el?.termEnd})`,
        subjects: el?.courses?.map(elem => {
          return {
            subjectName: elem?.courseName,
            gradeValue: elem?.grade,
            ratingText: elem?.ratingText,
            status: elem?.status,
            term: el?.termName,
            programEnrollmentId: response?.programEnrollmentId,
          };
        }),
        grades: getGradesOfCoScholasticTerm(el),
        // gradesColumnsHeaderData: getGradeColumnsOfTerm(el),
      };
    });
    setCoScholastic(data);
  };

  const getStatus = change => {
    if (!Number(change)) return null;
    if (Math.sign(change) === -1) {
      return 'decreased';
    } else if (Math.sign(change) === 1) {
      return 'increased';
    } else return 'stable';
  };

  const getValidations = errors => {
    setValidations(errors);
  };

  const getGradeData = (data) => {
    const grades=[]
      data.map(el => {
        el.grades.map(elem=>{
          grades.push({
            Course_Connection: elem.courseConnectionId,
            term_grade_type: elem.term,
            assessment_type: 'Portfolio',
            numerical_grade: elem.portfolio,
            maxmarks: elem.portfolioMaxMarks,
            Sequence: '1',
          });
        })
      });
      setScholasticEditMarks(grades);
      const mainGrades=[]
      scholastic.map(el => {
        el.grades.map(elem=>{
          mainGrades.push({
            Course_Connection: elem.courseConnectionId,
            term_grade_type: elem.term,
            numerical_grade: elem.exam,
            maxmarks: elem.examMax,
          });
        })
      });
      setScholasticMainEditMarks(mainGrades);
  };

  const getAdditional = (data) => {
    const additionalGrades = data.map(el=>{
      return({
        programenrollmentid: el.programEnrollmentId,
        Term_Grade_Type: el.term,
        AcademicGradeName:el.subjectName,
        AcademicGradePoints:el.subjectMark
        })
      }
    )
    setAdditionalGrade(additionalGrades);
  }

  const getCoScholasticGradeData = (data) => {
    const coGrades = []
    data?.map(el => {
      el?.subjects?.map(elem=>{
        coGrades.push({
          programenrollmentid: elem.programEnrollmentId,
          Term_Grade_Type: elem.term,
          AcademicGradeName: elem.subjectName,
          AcademicGradePoints: elem.gradeValue,
        })
      })
    });

    //check whether values updated or not, if updated set dirty as true
    setCoScholasticEditMarks(prev => {
      if (JSON.stringify(prev) == JSON.stringify(coGrades)) {
        setCoScholasticDirty(false);
      } else {
        setCoScholasticDirty(true);
      }
      return coGrades;
    });
  };

  const handleGetStudent = () => {
    getStudentsBySection(programPlanId,section)
      .then(res => {
          if(Array.isArray(res)){
              const updatedStudents = res?.map((student)=>{
                return {
                    ...student,
                    ContactName:student.Name,
                    ContactId:student.Id
                }
              })
              setStudents(updatedStudents);
          }else{ setStudents([]);}
       
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setStudents([]);
      });
  };

  // Comments
  const getComments = ({ grades = [] }) => {
    grades.forEach(({ courses = [] }) => {
      //console.log('Courses: ', courses);
      courses.forEach(({ courseconnectionId }) => {
        if (courseconnectionId) {
          getCommentsById(courseconnectionId)
            .then(res => {
              if (res?.length > 0) {
                setComments(prevComments => ({
                  ...prevComments,
                  [courseconnectionId]: res.sort(
                    ({ UpdatedOn: a }, { UpdatedOn: b }) =>
                      dayjs(a).isBefore(dayjs(b)) ? -1 : 1
                  ),
                }));
              }
            })
            .catch(err => {
              // console.log('Error fetching comments: ', err);
            });
        }
      });
    });
  };

  const getReportDetails = () => {
    setLoading(true);
    handleGetStudent();
    getReportCardDetails(
      studentInfo?.ContactId || contactId,
      studentInfo?.ProgramId,
      parent?.ContactId || profile.ContactId
    )
      .then(res => {
        setStandard(res.Standard);
        setInitialGrades(res)
        handleStudentDetails(res);
        handleScholastic(res);
        getExportData(res);
        handleCoScholastic({
          data: [...res.coscholistic],
          programEnrollmentId: res.programEnrollmentId,
        });
        setReportCardDetails(res);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    setContactId(studentInfo?.Id || studentInfo?.ContactId)

    if (studentInfo?.ProgramId) {
      handleGetStudent();
      getReportDetails();
    }
    if (studentInfo?.ProgramId && studentInfo?.ContactId) {
      setLoading(true);
      getReportCardDetails(studentInfo.ContactId, studentInfo.ProgramId , parent?.ContactId || profile.ContactId)
        .then(res => {
          handleStudentDetails(res);
          handleScholastic(res);
          handleCoScholastic({
            data: res.coscholistic,
            programEnrollmentId: res.programEnrollmentId,
          });
          getExportData(res);
          setReportCardDetails(res);
          setLoading(false);
          getComments(res);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    } else {
      if (profile?.Type === KEY_USER_TYPE.student) {
      // get student info

      //console.log('When parent/student: ', profile);

      const info = {
        ContactId: profile.ContactId,
        ProgramId:
          profile.Program_Enrollment.find(el => el.Status === 'Current')?.[
            'Id'
          ] || profile.Program_Enrollment[0],
      };

      setStudentInfo(info);
    } else if (profile?.Type === KEY_USER_TYPE.parent) {
      //console.log('User details: ', profile);

      setLoading(true);
      getStudentDetails(profile.ContactId)
        .then(res => {
          setLoading(false);
          //console.log('student details: ', res);
          if (res?.ContactId&& res?.Program_Enrollment) {
            setStudentInfo({
              ContactId: res.ContactId,
              ProgramId:
                res.Program_Enrollment.find(el => el.Status === 'Current')?.[
                  'Id'
                ] || profile.Program_Enrollment[0],
            });
          }
        })
        .catch(err => {
          setLoading(false);
          console.log('Error fetching student details : ', err);
          handleNotistackSnackbar('error',t('Error_fetching_student_details'))
        });
    }}
  }, [studentInfo]);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleScholaticTabCahnge = index => {
    setScholasticActiveTabIndex(index);
  };

  //Notistack snackbar
  const handleNotistackSnackbar = (severity, message) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      variant: severity,
      TransitionComponent: Slide,
    });
  };

  //   useEffect(()=>{

  //   },[scholasticEditMarks, coScholasticEditMarks])

  return (
    // <SnackbarProvider>
    <div>
      {loading && <KenLoader />}
      <div>
        <Box data-testid="reports-page">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box pl={1}>
                <Typography className={classes.cardTitle}>
                  {t('headings:Progress_Report_Page_Title')}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box className={classes.studentDetailsCard}>
                {studentDetails && (
                  <StudentDetailsCard
                    data={studentDetails}
                    students={students}
                    data-testid="student-details-card"
                    setStudentInfo={setStudentInfo}
                    studentInfo={studentInfo}
                    disableSearch={profile?.Type !== KEY_USER_TYPE.faculty}
                  />
                )}
              </Box>
              {/* TODO: Enable once average is available */}
              {/* <Box className={classes.box}>
                <EmbeddedChipsCard
                  data-testid="good-performance-details-card"
                  title="Performance Improved In"
                  variant="good"
                  chipData={performanceImproved}
                  keyInArray="subject"
                  onChipClick={() => {
                    console.log('chip clicked');
                  }}
                />
              </Box>
              <Box className={classes.box}>
                <EmbeddedChipsCard
                  data-testid="bad-performance-details-card"
                  title="Needs improvement In"
                  variant="bad"
                  chipData={performanceDegrade}
                  onChipClick={(item, e) => {
                    console.log('chip clicked', item, e);
                  }}
                />
              </Box>
              <Box className={classes.box1}>
                <RatingsStatusCard
                  variant="secondary"
                  data-testid="attendance-details-card"
                  title="Performance"
                  onIconClick={() => {
                    console.log('Performance arrow clicked');
                  }}
                  boldText={
                    reportCardDetails?.overallPerformance.replace('%', '') ||
                    notAvailable
                  }
                  boldSubtext={reportCardDetails?.overallPerformance ? '%' : ''}
                  ratingsText={
                    reportCardDetails?.overallPerformanceRemark || ''
                  }
                  ratings={
                    Math.abs(reportCardDetails?.overallPerformanceChange) || ''
                  }
                  status={getStatus(
                    reportCardDetails?.overallPerformanceChange
                  )}
                />
              </Box> */}
              <Box className={classes.box}>
                <RatingsStatusCard
                  variant="primary"
                  data-testid="attendance-details-card"
                  title="Attendance"
                  onIconClick={() => {
                    console.log('Attendance arrow clicked');
                  }}
                  boldText={
                    reportCardDetails?.attendance?.replace('%', '') ||
                    notAvailable
                  }
                  boldSubtext={reportCardDetails?.attendance ? '%' : ''}
                  ratingsSymbol={reportCardDetails?.attendanceChange ? '%' : ''}
                  ratings={Math.abs(reportCardDetails?.attendanceChange) || ''}
                  status={getStatus(reportCardDetails?.attendanceChange)}
                />
              </Box>
            </Grid>

            <Grid item md={9}>
              {!showSubmitHeader && (
                <Box mb={1}>
                  <KenHeader
                    title={
                      <Typography className={classes.heading}>
                        {t('headings:General_Details')}
                        <Typography
                          component="span"
                          className={classes.subHeading}
                          data-testid="academicYear"
                        >
                          {' ' + t('headings:General_Details_For') + ' '}{' '}
                          {`${reportCardDetails?.class ||''} ${reportCardDetails?.section||''}`}
                        </Typography>
                      </Typography>
                    }
                  >
                    <Box className={classes.headerBtn}>
                      <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleChange}
                        classes={{ root: classes.toggleButtonGroupRoot }}
                      >
                        <ToggleButton
                          value="module"
                          aria-label="module"
                          classes={{
                            root: classes.toggleButtonRoot,
                            selected: classes.toggleButtonSelected,
                          }}
                        >
                          <ViewModuleIcon />
                        </ToggleButton>
                        <ToggleButton
                          value="list"
                          aria-label="list"
                          classes={{
                            root: classes.toggleButtonRoot,
                            selected: classes.toggleButtonSelected,
                          }}
                        >
                          <ViewListIcon />
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                    {profile?.Type === KEY_USER_TYPE.parent ? (
                      <>
                        {openQueryPopup}
                        <KenButton
                          variant="secondary"
                          className={[classes.queryBtn, classes.btnLabels].join(
                            ' '
                          )}
                          onClick={handleRaiseQuery}
                        >
                          {t('labels:Raise_Query')}
                        </KenButton>
                        <KenButton
                          className={classes.btnLabels}
                          onClick={handleSignReportCard}
                          variant="primary"
                          startIcon={
                            <CheckIcon
                              size="small"
                              onClick={handleSignReportCard}
                            />
                          }
                        >
                          {t('labels:Sign_Report_Card')}
                        </KenButton>
                      </>
                    ) : null}
                    <KenButton
                      variant="secondary"
                      startIcon={<ShareIcon />}
                      className={classes.headerBtn}
                      onClick={handleShare}
                      label={
                        <Typography className={classes.btnLabels}>
                          {t('labels:Share')}
                        </Typography>
                      }
                    />
                    <KenButton
                      variant="secondary"
                      startIcon={<img src={ExportIcon} />}
                      className={classes.headerBtn}
                      onClick={handleExport}
                      label={
                        <Typography className={classes.btnLabels}>
                          {t('labels:Export')}
                        </Typography>
                      }
                    />
                    {profile?.Type === KEY_USER_TYPE.faculty && (
                      <>
                        <KenButton
                          variant="primary"
                          startIcon={<img src={AddCircleIcon} />}
                          className={classes.headerBtn}
                          onClick={handleAddGrades}
                          label={
                            <Typography className={classes.btnLabels}>
                              {t('labels:Add_Grades')}
                            </Typography>
                          }
                        />
                        {/* <KenButton
                          variant="primary"
                          className={classes.headerBtn}
                          onClick={() => setOpenConsolidatedGradesDrawer(true)}
                          label={
                            <Typography className={classes.btnLabels}>
                              {t('labels:Consolidated_Marks')}
                            </Typography>
                          }
                        /> */}
                      </>
                    )}
                  </KenHeader>
                </Box>
              )}
              {showSubmitHeader && (
                <Box mb={1}>
                  <KenHeader
                    title={
                      <Typography className={classes.heading}>
                        {t('headings:General_Details')}
                        <Typography
                          component="span"
                          variant="subtitle2"
                          className={classes.subHeading}
                          data-testid="academicYear"
                        >
                          {t('headings:General_Details_For') + ' '}{' '}
                          {`${reportCardDetails?.class} ${reportCardDetails?.section}`}

                        </Typography>
                      </Typography>
                    }
                  >
                    <KenButton
                      variant="secondary"
                      className={classes.headerBtn}
                      onClick={handleAddGradesCancel}
                      label={
                        <Typography
                          className={`${classes.btnLabels} ${classes.redText}`}
                        >
                          {t('labels:Cancel')}
                        </Typography>
                      }
                    />
                    <KenButton
                      variant="primary"
                      startIcon={<CheckIcon />}
                      className={classes.headerBtn}
                      onClick={handleGradesSubmit}
                      label={
                        <Typography className={classes.btnLabels}>
                          {t('labels:Submit')}
                        </Typography>
                      }
                    />
                  </KenHeader>
                </Box>
              )}
              <Box className={classes.gradeDetails}>
                <Box className={classes.items}>
                  {scholastic && (
                    <Scholastic
                      setScholasticDirty={setScholasticDirty}
                      setScholastic={setScholastic}
                      data={scholastic}
                      view={view}
                      edit={edit}
                      onTabChange={handleScholaticTabCahnge}
                      comments={comments}
                      setComments={setComments}
                      getReportDetails={getReportDetails}
                      getGradeData={getGradeData}
                      getAdditional={getAdditional}
                      getValidations={getValidations}
                      standard={standard}
                      tabIndex={scholasticActiveTabIndex}
                    />
                  )}
                  <Box style={{ paddingTop: 16 }}>
                    {coScholastic && (
                      <CoScholastic
                        data={coScholastic}
                        view={view}
                        edit={edit}
                        getCoScholasticGradeData={getCoScholasticGradeData}
                        tabIndex={scholasticActiveTabIndex}
                        setCoScholastic={setCoScholastic}
                      />
                    )}
                    <RemarkAndSignature
                    // NOTE: Details Removed as the height and other details are not available in HEDA
                      // details={details}
                      remarks={remarks}
                      signatures={signatures}
                      ProgramId={studentInfo.ProgramId}
                      setStudentInfo={setStudentInfo}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <KenDialog
          maxWidth="xs"
          title={
            <Typography className={classes.raiseQueryLabel} variant="body1">
              {t('headings:Raise_Query')}
            </Typography>
          }
          titleContainerStyles={{ padding: '16px', paddingBottom: '12px' }}
          open={openQueryPopup}
          toggleOpen={toggleQuery}
          positiveButtonProps={{ startIcon: <CheckIcon size="small" /> }}
          positiveButtonText={'Submit'}
          dialogActionProps={{ style: { marginBottom: '8px' } }}
          negativeButtonLabelProps={{ className: classes.btnLabels }}
          positiveButtonLabelProps={{ className: classes.btnLabels }}
          Component={RaiseQuery}
          innerProps={{
            scholastic:scholastic?.length>0? scholastic[scholasticActiveTabIndex]:null,
            subjects: allSubjects,
            rank,
            totalMarks,
            std,
            obtainedMarks,
            studentInfo,
          }}
        >
          {/* <RaiseQuery
            scholastic={scholastic[scholasticActiveTabIndex]}
            subjects={allSubjects}
            rank={rank}
            totalMarks={totalMarks}
            std={std}
            obtainedMarks={obtainedMarks}
            studentInfo={studentInfo}
          /> */}
        </KenDialog>

        <KenDialog
          maxWidth="xs"
          title={
            <Typography className={classes.raiseQueryLabel} variant="body1">
              {t('headings:Sign_Report_Card')}
            </Typography>
          }
          titleContainerStyles={{ padding: '16px', paddingBottom: '12px' }}
          open={openSignReportCardPopup}
          positiveButtonProps={{ startIcon: <CheckIcon size="small" /> }}
          positiveButtonText={'Submit'}
          dialogActionProps={{ style: { marginBottom: '8px' } }}
          onNegativeButtonClick={closeSignPopup}
          onPositiveButtonClick={closeSignPopup}
          negativeButtonLabelProps={{ className: classes.btnLabels }}
          positiveButtonLabelProps={{ className: classes.btnLabels }}
        >
          <RaiseQuery
            signatures={[
              {
                label: "Parent's Signature",
                value: '',
              },
            ]}
            rank={rank}
            totalMarks={totalMarks}
            std={std}
            obtainedMarks={obtainedMarks}
          />
        </KenDialog>
      </div>
      <KenSnackBar
        key={snackbarMessage}
        message={snackbarMessage}
        severity={snackbarSeverity}
        autoHideDuration={2000}
        open={openSnackbar}
        handleSnackbarClose={handleSnackbarClose}
        position="Bottom-Right"
      />
      <KenPopover
        id="export"
        open={anchorExport}
        anchorEl={anchorExport}
        handleClose={() => {
          setAnchorExport(null);
        }}
        anchorOriginVertical="bottom"
        anchorOriginHorizontal="center"
        transformOriginVertical="top"
        transformOriginHorizontal="left"
      >
        <Box padding={1}>
          <ExportPopover signatures={signatures} data={exportData} />
        </Box>
      </KenPopover>
      <KenPopover
        id="share"
        open={anchorShare}
        anchorEl={anchorShare}
        handleClose={() => {
          setAnchorShare(null);
        }}
        anchorOriginVertical="bottom"
        anchorOriginHorizontal="center"
        transformOriginVertical="top"
        transformOriginHorizontal="left"
      >
        <Box padding={1}>
          <SharePopover handleSnackbarOpen={handleSnackbarOpen} />
        </Box>
      </KenPopover>
      <KenDrawer
        drawerWidth="70%"
        closeIconStyles={classes.closeIcon}
        title={
          <KenHeader
            title={
              <Typography className={classes.heading}>
                {t('headings:Report_Card_View')}
                <Typography
                  component="span"
                  className={classes.subHeading}
                  data-testid="academicYear"
                >
                  {' ' + t('headings:General_Details_For') + ' '} 
                  {`${reportCardDetails?.class} ${reportCardDetails?.section}`}
                </Typography>
              </Typography>
            }
          >
            <KenSwitch
              switchLabel={
                <Typography className={classes.switchLabel}>
                  {t('labels:Consolidated_Marks')}
                </Typography>
              }
              onChangeSwitch={e => {
                handleMarks(e);
              }}
            />
            <KenButton
              variant="secondary"
              startIcon={<ShareIcon />}
              className={classes.headerBtn}
              //   onClick={handleShare}
              label={
                <Typography className={classes.btnLabels}>
                  {t('labels:Share')}
                </Typography>
              }
            />
            <KenButton
              variant="secondary"
              startIcon={<img src={ExportIcon} />}
              className={classes.headerBtn}
              //   onClick={handleExport}
              label={
                <Typography className={classes.btnLabels}>
                  {t('labels:Export')}
                </Typography>
              }
            />
          </KenHeader>
        }
        open={openConsolidatedGradesDrawer}
        onClose={() => {
          setOpenConsolidatedGradesDrawer(false);
        }}
      >
        <Box p={2}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {consolidated && (
                <ConsolidatedMarksTable
                  data={consolidatedData}
                  subjects={consolidatedSubjects}
                />
              )}
              {!consolidated && (
                <ConsolidatedMarksTable
                  data={distributedData}
                  subjects={distributedSubjects}
                />
              )}{' '}
            </Grid>
          </Grid>
        </Box>
      </KenDrawer>
    </div>
    // </SnackbarProvider>
  );
}
