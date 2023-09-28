import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  RadioGroup,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SignatureCard from '../RemarkAndSignature/Components/SignatureContent/Components/SignatureCard';
import KenSelect from '../../../../../components/KenSelect';
import { getParentDetails } from '../../../../../utils/helpers/storageHelper';
import { postComments } from '../../../../../utils/ApiService';
import KenInputField from '../../../../../global_components/KenInputField';

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.palette.KenColors.kenWhite,
    justifyContent: 'space-between',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heading: {
    color: theme.palette.KenColors.neutral900,
    fontWeight: '600',
  },
  subHeading: {
    color: theme.palette.KenColors.neutral900,
    fontWeight: '400',
  },
  rank: {
    background: theme.palette.KenColors.kenWhite,
    border: `0.6px solid ${theme.palette.KenColors.gradeSectionBorder}`,
    boxSizing: 'border-box',
    borderRadius: '3px',
  },
  promoted: {
    background: theme.palette.KenColors.tertiaryGreen504,
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '71px',
  },
  promotedGrid: {
    padding: '10px 24px 10px 16px',
  },
  rankText: {
    fontSize: '10px',
    color: theme.palette.KenColors.neutral400,
  },
  rankSubtext: {
    fontWeight: '600',
    fontSize: '24px',
    color: theme.palette.KenColors.primary,
  },
  rankSubSubtext: {
    fontSize: '16px',
  },
  markSubSubtext: {
    color: theme.palette.KenColors.neutral400,
  },
  promotedText: {
    fontSize: '14px',
    textAlign: 'center',
    color: theme.palette.KenColors.kenWhite,
  },
  firstItem: {
    padding: '10px 20px 10px 12px',
  },
  item: {
    padding: '10px 12px 10px 20px',
  },
  textArea: {
    width: '100%',
    background: theme.palette.KenColors.tertiaryBlue40,
    border: `0.6px solid ${theme.palette.KenColors.gradeSectionBorder}`,
    boxSizing: 'border-box',
    borderRadius: '3px',
    padding: '10px',
  },
  textAreaLabel: {
    fontSize: '12px',
    color: theme.palette.KenColors.neutral400,
    margin: '6px 0px',
  },
  subjectLabels: {
    fontSize: '13px',
    color: theme.palette.KenColors.neutral400,
    margin: '6px 0px',
  },
  sectionLabels: {
    fontSize: '12px',
    color: theme.palette.KenColors.neutral400,
    fontWeight: 'bold',
    margin: '6px 0px',
    marginTop: '16px',
  },
  check: {
    paddingRight: '20px',
  },
  divider: {
    marginTop: '16px',
    marginBottom: '16px',
    borderRight: `0.5px solid ${theme.palette.KenColors.gradeSectionBorder}`,
  },
}));

const RaiseQuery = props => {
  const classes = useStyles();
  const {
    // subjects,
    // totalMarks,
    obtainedMarks,
    rank,
    std,
    signatures,
    scholastic = {},
    studentInfo,
    positiveButtonClickChange,
    setOnNegativeButtonClick,
    toggleOpen,
  } = props;
  const { t } = useTranslation();
  const [signs, setSigns] = useState(signatures);
  const [showRemoveFileIcon, setShowRemoveFileIcon] = useState(false);

  const [subjects, setSubjects] = React.useState([]);
  const [comment, setComment] = React.useState('');

  const [selectedSubject, setSelectedSubject] = React.useState();

  console.log('Raise Query : ', props);

  React.useEffect(() => {
    let options = [];
    if (scholastic) {
      options = scholastic?.grades?.map(el => {
        return {
          value: el.courseconnectionId,
          label: el.courseName.trim(),
        };
      });
    }
    if (studentInfo?.ProgramId) {
      options = [
        { value: studentInfo.ProgramId, label: t('label:General') },
        ...options,
      ];
    }
    console.log('options: ', options);
    setSubjects(options);
  }, [scholastic]);

  const getTotal = () => {
    return scholastic?.grades
      ? scholastic.grades.reduce(
          (total, subject) => total + parseInt(subject.totalMarks || 0),
          0
        )
      : '';
  };

  React.useEffect(() => {
    console.log();
    if (positiveButtonClickChange) {
      console.log('RaiseQuery: Positive click ');
      onPositiveButtonClick();
    }
  }, [positiveButtonClickChange]);
  const handleDrop = (index, acceptedFiles) => {
    setShowRemoveFileIcon(true);
    const fileURL = URL.createObjectURL(acceptedFiles[0]);
    let signaturesArray = signs;
    let obj = {
      label: signatures[index]?.label,
      value: fileURL,
      newlyAdded: true,
    };
    signaturesArray[index] = obj;
    setSigns([...signaturesArray]);
  };
  const removeFile = index => {
    console.log('remove file', signs, index);
    let currentSigns = [...signs];
    if (currentSigns.length > 0) {
      currentSigns[index].value = '';
      currentSigns[index].newlyAdded = false;
      setSigns([...currentSigns]);
    }
  };

  const parentDetails = getParentDetails();

  const onPositiveButtonClick = () => {
    // setOpenQueryPopup(false);

    console.log('SubmitQuery: ', comment, selectedSubject, subjects);
    if (comment && selectedSubject) {
      postComments(parentDetails.ContactId, comment, selectedSubject)
        .then(res => {
          console.log(res);
          toggleOpen(false);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  React.useEffect(() => {
    // if (setOnPositiveButtonClick) {
    //   setOnPositiveButtonClick(() => submitQueryForm);
    // }
    // if (setOnNegativeButtonClick) {
    //   setOnNegativeButtonClick(() => () => {
    //     console.log('RaiseQuery: Negative  click ');
    //     setIsOpen(false);
    //   });
    // }
  }, []);

  return (
    <Box data-testid="query-popup-content">
      <Box>
        <Grid className={classes.container} container spacing={2}>
          <Grid item md={6}>
            <Box className={classes.rank}>
              <Grid container>
                <Grid item className={classes.firstItem}>
                  <Typography className={classes.rankText}>
                    {t('headings:Rank')}
                  </Typography>
                  <Typography
                    className={classes.rankSubtext}
                    component="span"
                    data-testid="rank"
                  >
                    {rank}
                  </Typography>
                  <Typography
                    component="span"
                    className={[
                      classes.rankSubtext,
                      classes.rankSubSubtext,
                    ].join(' ')}
                  >
                    {t('headings:Rank_Suffix')}
                  </Typography>
                </Grid>
                <Grid item className={classes.divider} />
                <Grid
                  item
                  className={classes.item}
                  //   style={{ paddingLeft: '24px' }}
                >
                  <Typography className={classes.rankText}>
                    {t('headings:Total_Marks')}
                  </Typography>
                  <Typography
                    className={classes.rankSubtext}
                    component="span"
                    data-testid="obtained-marks"
                  >
                    {/* {obtainedMarks} */}
                    {getTotal() || ''}
                    <Typography
                      component="span"
                      className={[
                        classes.rankSubtext,
                        classes.rankSubSubtext,
                        classes.markSubSubtext,
                      ].join(' ')}
                      data-testid="total-marks"
                    >
                      {t('headings:Division_Symbol')}
                      600
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className={[classes.rank, classes.promoted].join(' ')}>
              <Typography className={classes.promotedText}>
                {t('headings:Promoted_To_Text') + ' '} {std}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {subjects && (
        <Box mt={1}>
          <Typography className={classes.sectionLabels}>
            {t('headings:Select_Subjects')}
          </Typography>
          <Grid container>
            <KenSelect
              options={subjects}
              value={selectedSubject}
              onChange={e => {
                console.log('RaiseQuery: subject change:', e.target.value);
                setSelectedSubject(e?.target?.value);
              }}
            />
          </Grid>
        </Box>
      )}
      {signatures && (
        <Box mt={1}>
          {signs &&
            Array.isArray(signs) &&
            signs.map((item, index) => {
              return (
                <>
                  <Typography className={classes.sectionLabels}>
                    {item.label}
                  </Typography>
                  <SignatureCard
                    index={index}
                    signUrl={item.value}
                    showRemoveFileIcon={showRemoveFileIcon}
                    isNewlyAdded={item.newlyAdded ? true : false}
                    onCancelClick={removeFile}
                    handleDrop={handleDrop}
                    fullWidth={true}
                  />
                </>
              );
            })}
        </Box>
      )}
      <Box mt={1}>
        <Typography
          className={[classes.textAreaLabel, classes.sectionLabels].join(' ')}
        >
          {t('headings:General_Remarks')}
        </Typography>
        <KenInputField
          aria-label="text-area"
          rows={10}
          multiline={true}
          optionalLabel={false}
          className={classes.textArea}
          placeholder={t('labels:Query_Text_Area_Placeholder')}
          value={comment}
          onChange={e => {
            console.log('AUto resize', e.target);
            setComment(e?.target?.value);
          }}
          style={{ fontSize: 12 }}
        />
      </Box>
    </Box>
  );
};
export default RaiseQuery;
