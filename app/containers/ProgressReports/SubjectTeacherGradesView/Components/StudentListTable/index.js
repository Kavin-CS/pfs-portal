import { Avatar } from '@material-ui/core';
import { Box, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import KenCard from '../../../../../global_components/KenCard';
import KenGrid from '../../../../../global_components/KenGrid';
import GradeIcon from '../../../ReportsPage/Components/GradeIcon';

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
    color: theme.palette.KenColors.neutral900,
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  footer: {
    fontSize: '14px',
    fontWeight: 600,
    color: theme.palette.KenColors.neutral900,
  },
  icon: {
    textAlign: 'center',
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
  gray: {
    background: theme.palette.KenColors.neutral100,
  },
}));

const StudentListTable = props => {
  const { data = [], gradeColorPalette = [], gradesColumnsHeaderData } = props;
  const [columns, setColumns] = React.useState();

  console.log(data, 'data..');
  const classes = useStyles();

  const getGradeColor = grade => {
    return gradeColorPalette.filter(
      palette =>
        palette?.grade?.trim()?.toUpperCase() === grade?.trim()?.toUpperCase()
    )[0];
  };

  const GradeCell = row => {
    return (
      <>
        <Box className={classes.icon}>
          <GradeIcon
            {...getGradeColor(row.value)}
            grade={row.value?.toUpperCase()}
          />
        </Box>
      </>
    );
  };

  // const getGradeColumnsOfTerm = term => {
  //   return {
  //     pp: '5M',
  //     ma: '5M',
  //     subEn: '5M',
  //     portfolio: `5M`,
  //     exam: `${term.termName} (80M)`,
  //   };
  // };

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
          Header: 'SEC. & ROLL NO.',
          Footer: '',
          columns: [
            {
              accessor: 'roll',
            },
          ],
        },
        {
          Header: 'PERIODIC ASSESSMENT',
          Footer: '',
          columns: [
            {
              Header: `P&P (${gradesColumnsHeaderData?.pp})`,
              accessor: 'pp.consolidated',
              Footer: '',
            },
            {
              Header: `MA (${gradesColumnsHeaderData?.ma})`,
              accessor: 'ma.consolidated',
              Footer: '',
            },
          ],
        },
        {
          Header: `PORTFOLIO (${gradesColumnsHeaderData?.portfolio})`,
          Footer: '',
          columns: [
            {
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
              accessor: 'subEn',
              Footer: '',
            },
          ],
        },
        {
          Header: `${gradesColumnsHeaderData?.exam}`,
          Footer: '',
          columns: [
            {
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
              accessor: 'totalMarks',

              // Footer: info => {
              //   // Only calculate marks visits if rows change
              //   const total = React.useMemo(
              //     () =>
              //       info.rows.reduce((sum, row) => +row.values.totalMarks + sum, 0),
              //     [info.rows]
              //   );

              //   return <Typography className={classes.footer}>{total}</Typography>;
              // },
            },
          ],
        },
        // {
        //   Header: 'CLASS AVERAGE',
        //   Footer: '',
        //   columns: [
        //     {
        //       accessor: 'average',
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
              accessor: 'grade',
              Cell: GradeCell,
              Footer: '',
            },
          ],
        },
      ]);
    }
  }, [props]);

  return (
    <KenCard paperStyles={{ padding: 0, boxShadow: 'none' }}>
      <KenGrid
        toolbarDisabled={true}
        columns={columns}
        data={data}
        pagination={{ disabled: false }}
        initialState={{ hiddenColumns: ['status'] }}
        gridProps={{ footerRows: [1] }}
        // getGradeColumnsOfTerm={getGradeColumnsOfTerm}
      />
    </KenCard>
  );
};

export default StudentListTable;
