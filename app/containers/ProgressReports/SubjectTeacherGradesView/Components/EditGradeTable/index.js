import { Box, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import KenCard from '../../../../../global_components/KenCard';
import KenGrid from '../../../../../global_components/KenGrid';
import StatusIcon from '../../../ReportsPage/Components/StatusIcon';
import GradeIcon from '../../../ReportsPage/Components/GradeIcon';
import KenTableInputField from '../../../../../global_components/KenTableInputField';
import AddIcon from '../../../../../assets/icons/addPlus.svg';
import EditBreakdownTable from '../EditBreakdownTable';
import { Avatar } from '@material-ui/core';
import { KEY_EMPTY_VALUES_PLACEHOLDERS } from '../../../../../utils/constants';
import SubBreakdown from '../EditBreakdownTable/components/subBreakdown';

const useStyles = makeStyles(theme => ({
  subjectRow: {
    display: 'flex',
    alignItems: 'center',
  },
  subjectTitle: {
    fontSize: '13px',
    fontWeight: 'normal',
    margin: '0px 8px',
    lineHeight: '100%',
    color: '#061938',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  footer: {
    fontSize: '14px',
    fontWeight: 600,
    color: theme.palette.KenColors.neutral900,
  },
  inputContainer: {
    width: '64px',
    background: theme.palette.KenColors.neutral10,
    boxSizing: 'border-box',
    borderRadius: '3px',
  },
  input: {
    padding: '5px',
    '&:focus-visible': {
      outlineColor: theme.palette.KenColors.tertiaryBlue505,
      outlineStyle: 'auto',
      outlineWidth: '0.6px',
    },
  },
  disabled: {
    background: theme.palette.KenColors.neutral9,
  },
  icon: {
    textAlign: 'center',
  },
  header: {
    fontSize: 10,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  EditIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  nameWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  nameLabel: {
    fontSize: 13,
    color: theme.palette.KenColors.tertiaryBlue502,
    marginLeft: 4,
  },
  disabled: {
    background: theme.palette.KenColors.neutral9,
  },
  gray: {
    background: theme.palette.KenColors.neutral100,
  },
}));

export default function EditGradesTable(props) {
  const {
    data = [],
    breakdownData,
    title,
    gradeColorPalette,
    gradesColumnsHeaderData,
    getGradeData,
    term,
    courseOfferingId,
    setUpdateData,
    standard,
    tabIndex,
    scholastic,
    getValidations,
  } = props;

  const classes = useStyles();
  const [gradeData, setGradeData] = useState(data);
  const [openDrawerBreakdown, setOpenDrawerBreakdown] = React.useState(false);
  const [openSubDrawerBreakdown, setOpenSubDrawerBreakdown] = React.useState(
    false
  );
  const [gridErrors, setGridErrors] = useState([]);
  const [inputError, setInputError] = useState({
    error: false,
    errorMessage: '',
  });
  const [tIndex, setTIndex] = useState();
  const [columns, setColumns] = useState();
  const notAvailable = KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH;

  React.useEffect(() => {
    setGradeData(data);
    setTIndex(tabIndex);
  }, [data, tabIndex]);

  React.useEffect(() => {
    console.log(tabIndex);
    const arr = scholastic.map((el, index) => {
      if (index === tIndex) {
        el.grades = gradeData;
      }
      return el;
    });
    getGradeData(arr);
  }, [gradeData]);

  React.useEffect(() => {
    getValidations(inputError);
    // getGradeData();
  }, [gradeData]);

  const getGradeColor = grade => {
    return gradeColorPalette?.find(
      palette =>
        palette?.grade?.trim()?.toUpperCase() === grade?.trim()?.toUpperCase()
    );
  };

  const StudentNameCell = row => {
    return (
      <>
        <Box className={classes.nameWrap}>
          <Avatar alt="user" className={classes.gray}>
            {' '}
            {row.value?.charAt(0)}
          </Avatar>
          <Typography className={classes.nameLabel}>{row.value}</Typography>
        </Box>
      </>
    );
  };

  const GradeCell = row => {
    return (
      <>
        <Box className={classes.textAlignCenter}>
          <GradeIcon
            {...getGradeColor(row.value)}
            grade={row.value?.toUpperCase() || notAvailable}
          />
        </Box>
      </>
    );
  };

  const SubEn = row => {
    return (
      <>
        <Box className={classes.textAlignCenter}>
          <Typography className={classes.subjectTitle}>
            {row.value || KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
          </Typography>
        </Box>
      </>
    );
  };

  const RollNumber = row => {
    return (
      <>
        <Box className={classes.textAlignCenter}>
          <Typography className={classes.subjectTitle}>
            {row.value || KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
          </Typography>
        </Box>
      </>
    );
  };

  const PPCell = row => {
    return (
      <>
        <Box className={[classes.textAlignCenter, classes.disabled].join(' ')}>
          <Typography className={classes.subjectTitle}>
            {row.value || KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
          </Typography>
        </Box>
      </>
    );
  };

  const MACell = row => {
    return (
      <>
        <Box className={[classes.textAlignCenter, classes.disabled].join(' ')}>
          <Typography className={classes.subjectTitle}>
            {row.value || KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
          </Typography>
        </Box>
      </>
    );
  };

  const TotalMarksCell = row => {
    return (
      <>
        <Box className={classes.textAlignCenter}>
          <Typography className={classes.subjectTitle}>
            {row.value || KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
          </Typography>
        </Box>
      </>
    );
  };
  const AverageCell = row => {
    return (
      <>
        <Box className={classes.textAlignCenter}>
          <Typography className={classes.subjectTitle}>
            {row.value || KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
          </Typography>
        </Box>
      </>
    );
  };

  const ExamCell = row => {
    return (
      <>
        <Box className={classes.textAlignCenter}>
          <Typography className={classes.subjectTitle}>
            {row.value || KEY_EMPTY_VALUES_PLACEHOLDERS.DOUBLE_DASH}
          </Typography>
        </Box>
      </>
    );
  };

  const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
  }) => {
    // We need to keep and update the state of the cell normally
    const [errors, setErrors] = useState([]);
    const [value, setValue] = React.useState(initialValue);

    const onChange = e => {
      e.preventDefault();
      setValue(e.target.value);
      validateFields(e.target.value);
    };

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value, errors);
    };

    const numRegex = /^\d+(\.\d{1,2})?$/;

    const validationChecks = (val, max) => {
      let allErrors = [...errors];
      let rowErrors;
      if (typeof val === undefined || val?.trim() === '') {
        rowErrors = { error: true, errorMessage: 'Required' };
      } else if (+val > max) {
        rowErrors = {
          error: true,
          errorMessage: `Max value should be less than ${max}`,
        };
      } else if (+val < 0) {
        rowErrors = {
          error: true,
          errorMessage: 'Negative values are not allowed',
        };
      } else if (!new RegExp(numRegex).test(val)) {
        rowErrors = {
          error: true,
          errorMessage: 'Value should be a number',
        };
      } else {
        rowErrors = {
          error: false,
          errorMessage: '',
          type: `${data[0]?.termName}`,
        };
      }
      allErrors[index] = rowErrors;
      setErrors(allErrors);
    };
    const validateFields = val => {
      switch (id) {
        case 'portfolio':
          validationChecks(val, 5);
          break;

        case 'exam':
          validationChecks(val, gradeData[0]?.writtenTestMaxMarks);
          break;

        case 'totalMarks':
          validationChecks(val, gradeData[0]?.maxMarks);
          break;

        default:
          break;
      }
    };

    return (
      <Box className={classes.inputContainer}>
        <KenTableInputField
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={classes.input}
          errors={errors[index]?.error}
          touched={true}
          name={index}
        />
      </Box>
    );
  };
  const defaultColumn = {
    Cell: EditableCell,
  };

  const handleEdit = () => {
    console.log('handle edit called');
    setOpenDrawerBreakdown(true);
  };

  const handleSubEdit = () => {
    console.log('handle edit called');
    setOpenSubDrawerBreakdown(true);
    console.log(openSubDrawerBreakdown);
  };

  const { t } = useTranslation();

  React.useEffect(() => {
    if (data[0].computerScience_Control === true) {
      setColumns([
        {
          Header: 'STATUS',
          Footer: '',
          accessor: 'status',
          columns: [
            {
              Header: 'Status',
              accessor: 'status',
              Footer: '',
            },
          ],
        },
        {
          Header: 'STUDENT NAME',
          Footer: '',
          columns: [
            {
              accessor: 'name',
              Cell: StudentNameCell,
            },
          ],
        },
        {
          Header: 'SUBJECT NAME',
          Footer: '',
          columns: [
            {
              accessor: 'subjectName',
              Cell: TotalMarksCell,
            },
          ],
        },
        {
          Header: `TOTAL MARKS (${data[0].maxMarks})`,
          Footer: '',
          columns: [
            {
              accessor: 'totalMarks',
            },
          ],
        },
      ]);
    } else {
      setColumns([
        {
          Header: 'STATUS',
          Footer: '',
          accessor: 'status',
          columns: [
            {
              disableSortBy: true,
              Header: 'Status',
              accessor: 'status',
              Footer: '',
            },
          ],
        },
        {
          Header: 'STUDENT NAME',
          Footer: '',
          columns: [
            {
              disableSortBy: true,
              accessor: 'name',
              Cell: StudentNameCell,
              //   Footer: <Typography className={classes.footer}>Total</Typography>,
            },
          ],
        },
        {
          Header: 'SEC. & ROLL NO.',
          Footer: '',
          columns: [
            {
              accessor: 'roll',
              Cell: RollNumber,
            },
          ],
        },
        {
          Header: 'PERIODIC ASSESSMENT',
          Footer: '',
          columns: [
            {
              disableSortBy: true,
              Header: () => {
                return (
                  <Typography
                    className={classes.header}
                    onClick={() => {
                      handleEdit();
                    }}
                  >
                    P&P ({gradesColumnsHeaderData?.pp}) {<img src={AddIcon} />}
                  </Typography>
                );
              },
              accessor: 'pp.consolidated',
              Footer: '',
              Cell: PPCell,
              className: classes.disabled,
            },
            {
              disableSortBy: true,
              Header: () => {
                return (
                  <Typography
                    className={classes.header}
                    onClick={() => {
                      handleEdit();
                    }}
                  >
                    MA ({gradesColumnsHeaderData?.ma}) {<img src={AddIcon} />}
                  </Typography>
                );
              },
              accessor: 'ma.consolidated',
              Footer: '',
              Cell: MACell,
              className: classes.disabled,
            },
          ],
        },
        {
          Header: `PORTFOLIO (${gradesColumnsHeaderData?.portfolio})`,
          Footer: '',
          columns: [
            {
              disableSortBy: true,
              accessor: 'portfolio',
              Footer: '',
            },
          ],
        },
        {
          Header: `SUB EN (${gradesColumnsHeaderData?.subEn})`,
          Footer: '',
          columns: [
            {
              Header: () => {
                return (
                  <img
                    src={AddIcon}
                    className={classes.EditIcon}
                    onClick={() => {
                      handleSubEdit();
                    }}
                  />
                );
              },
              disableSortBy: true,
              accessor: 'subEn',
              Footer: '',
              Cell: SubEn,
            },
          ],
        },
        {
          Header: `${gradesColumnsHeaderData?.exam} (${
            gradeData[0]?.writtenTestMaxMarks
          }M)`,
          Footer: '',
          columns: [
            {
              disableSortBy: true,
              Footer: '',
              accessor: 'exam',
            },
          ],
        },
        {
          Header: 'TOTAL MARKS (100M)',
          Footer: '',
          columns: [
            {
              disableSortBy: true,
              accessor: 'totalMarks',
              Cell: TotalMarksCell,
              Footer: info => {
                // Only calculate marks visits if rows change
                const total = React.useMemo(
                  () =>
                    info.rows.reduce(
                      (sum, row) => +row.values.totalMarks + sum,
                      0
                    ),
                  [info.rows]
                );

                return (
                  <Typography className={classes.footer}>{total}</Typography>
                );
              },
            },
          ],
        },
        // {
        //   Header: 'CLASS AVERAGE',
        //   Footer: '',
        //   columns: [
        //     {
        //       accessor: 'average',
        //       disableSortBy: true,
        //       Cell: AverageCell,
        //       Footer: info => {
        //         // Only calculate average if rows change
        //         const total = React.useMemo(
        //           () =>
        //             info.rows.reduce((sum, row) => +row.values.average + sum, 0) /
        //             info.rows.length,
        //           [info.rows]
        //         );

        //         return <Typography className={classes.footer}>{total}</Typography>;
        //       },
        //     },
        //   ],
        // },
        {
          Header: 'GRADE',
          Footer: '',
          columns: [
            {
              disableSortBy: true,
              accessor: 'grade',
              Cell: GradeCell,
              Footer: '',
            },
          ],
        },
      ]);
    }
  }, [data]);

  const updateMyData = (rowIndex, columnId, value, errors) => {
    // We also turn on the flag to not reset the page

    let allErrors = [...gridErrors];
    let rowErrors = errors[rowIndex];
    allErrors[rowIndex] = rowErrors;
    setGridErrors(allErrors);

    // We also turn on the flag to not reset the page
    const errorsArr = allErrors.filter(error => error?.error === true);

    setInputError({
      error: errorsArr.length > 0 ? true : false,
      errorMessage: errorsArr.length > 0 ? 'Invalid grades found.' : '',
      type: `${data[0]?.termName}`,
    });

    setGradeData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <KenCard paperStyles={{ padding: 0, boxShadow: 'none' }}>
      <KenGrid
        toolbarDisabled={true}
        columns={columns}
        data={gradeData}
        pagination={{ disabled: false }}
        initialState={{ hiddenColumns: ['status'] }}
        gridProps={{
          footerRows: [1],
          updateMyData: updateMyData,
          defaultColumn: defaultColumn,
        }}
        getColumnProps={column => ({
          onClick: () => alert('Column!'),
        })}
      />
      {openDrawerBreakdown && (
        <EditBreakdownTable
          data={breakdownData}
          term={term}
          standard={standard}
          setOpenDrawerBreakdown={setOpenDrawerBreakdown}
          courseOfferingId={courseOfferingId}
          setUpdateData={setUpdateData}
        />
      )}
      {openSubDrawerBreakdown && (
        <SubBreakdown
          data={breakdownData}
          term={term}
          setOpenDrawerBreakdown={setOpenSubDrawerBreakdown}
          courseOfferingId={courseOfferingId}
          setUpdateData={setUpdateData}
        />
      )}
    </KenCard>
  );
}
