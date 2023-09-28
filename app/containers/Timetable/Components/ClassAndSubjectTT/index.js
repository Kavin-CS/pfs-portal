import React, { useContext, useEffect, useState } from 'react';
import TTCell from '../TTCell';
import TTGrid from '../TTGrid';
import { generateTimeSlots } from '../../../../utils/helpers/ttHelper';
import { Box, Typography } from '@material-ui/core';
import {
  getAllTimeBlocks,
  getTimetableByContactId,
} from '../../../../utils/ApiService';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import WeekPicker from '../WeekPicker';
import KenLoader from '../../../../components/KenLoader';
import { useTranslation } from 'react-i18next';
import configContext from '../../../../utils/helpers/configHelper';
import KenTabs from '../../../../components/KenTabs';
import {
  getDayStartEnd,
  formatData,
  changeWeek,
  isDateNew,
  getCurrentWeek,
} from '../../helper';

const useStyles = makeStyles(theme => ({
  selectorStyle: {
    display: 'table-cell',
    padding: '0px 16px',
    fontSize: '12px',
    textAlign: 'left',
    fontFamily: 'Open Sans,sans-serif',
    fontWeight: 400,
    lineHeight: 1,
    verticalAlign: 'inherit',
  },
  timeBox: {
    border: '1px solid lightgray',
    borderRadius: '3px',
  },
  timeText: {
    fontSize: '13px',
    padding: '5px',
    minWidth: '120px',
  },
  classSectionCell: {
    minWidth: 'max-content',
    fontSize: '13px',
  },
  classCell: {
    padding: '22px',
    fontSize: '14px',
    minWidth: 'max-content',
    border: '1px solid lightGrey',
    borderRadius: '3px',
    textAlign: 'center',
  },
  arrow: {
    margin: '0px 10px',
    width: '16px',
    cursor: 'pointer',
  },
  dayHeader: {
    fontSize: '16px',
    textAlign: 'start',
    paddingLeft: '10px',
    fontWeight: 500,
  },
  dateSelector: {
    fontSize: '14px',
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  tableWrap: {
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      height: '4px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      backgroundColor: 'rgba(0,0,0,.2)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#252628b0',
    },
  },
  ttPlaceholder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  ttLabel: {
    color: theme.palette.KenColors.neutral900,
    fontSize: 18,
    fontWeight: 600,
  },
}));

function ClassAndSubjectTT(props) {
  const { user = { AccountId: '', ContactId: '' } } = props;
  const { config } = useContext(configContext);
  const { t } = useTranslation();
  const classes = useStyles();
  const [currentWeek, setCurrentWeek] = useState([]);
  const [timeBlocksDuration] = useState(config?.timetable?.timeBlocksDuration);
  const [timings, setTimings] = useState();
  const [dateToViewTT, setDateToViewTT] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [tabData, setTabData] = React.useState();
  const [classTTData, setClassTTData] = React.useState();
  const [subjectsTTData, setSubjectsTTData] = React.useState();

  const handleDateChange = date => {
    setDateToViewTT(new Date(date));
  };

  //Get All time blocks
  useEffect(() => {
    const { AccountId } = user;
    //get time blocks
    if (AccountId) {
      getAllTimeBlocks(AccountId)
        .then(res => {
          const dayTimings = getDayStartEnd(res);
          setTimings(dayTimings);
        })
        .catch(err => {
          console.log('error in get time blocks::', err);
        });
    }
  }, [user]);

  useEffect(() => {
    setLoading(true);
    //get user details
    const { AccountId, ContactId } = user;

    //Recall API only if date dose not exists in current week

    if (isDateNew(currentWeek, dateToViewTT)) {
      //get timetable
      if (dateToViewTT && AccountId && ContactId) {
        // getTimetableByContactId(dateToViewTT, AccountId, ContactId)
        getTimetableByContactId(dateToViewTT, AccountId, '0031y00000DnEZBAA3') //Aradhya Pandey
          .then(res => {
            setLoading(false);
            const formattedData = formatData(res, dateToViewTT);
            setClassTTData(formattedData);
          })
          .catch(err => {
            console.log('error in getTimetableByContactId', err);
            setLoading(false);
            setClassTTData([]);
          });

        getTimetableByContactId(dateToViewTT, AccountId, '0031y00000DnMfvAAF') //Masthan Faculty
          .then(res => {
            setLoading(false);
            const formattedData = formatData(res, dateToViewTT);
            setSubjectsTTData(formattedData);
          })
          .catch(err => {
            console.log('error in getTimetableByContactId', err);
            setLoading(false);
            setSubjectsTTData([]);
          });
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [dateToViewTT]);

  useEffect(() => {
    const week = getCurrentWeek(dateToViewTT);
    setCurrentWeek(week);
  }, [dateToViewTT]);

  useEffect(() => {
    const tabs = [
      {
        title: t('headings:Subject_TT'),
        content: (
          <TTGrid columnsArr={subjectsColumns} dataArr={subjectsTTData} />
        ),
      },
      {
        title: t('headings:Class_TT'),
        content: <TTGrid columnsArr={classColumns} dataArr={classTTData} />,
      },
    ];
    setTabData(tabs);
  }, [subjectsTTData, classTTData]);

  const classColumns = React.useMemo(
    () => [
      {
        Header: '',
        id: 'day',
        accessor: 'day',
        Cell: ({ row, value }) => {
          return (
            <td className={classes.selectorStyle}>
              <Typography className={classes.classCell}>
                {value?.toUpperCase()?.slice(0, 3)}
              </Typography>
            </td>
          );
        },
      },
      ...generateTimeSlots(
        timings?.StartTime,
        timings?.EndTime,
        timeBlocksDuration
      ).map(s => ({
        Header: (
          <Typography className={classes.timeBox}>
            <Typography className={classes.timeText}>{s.header}</Typography>
          </Typography>
        ),
        Cell: cellProps => {
          const { row } = cellProps;
          return TTCell(
            s.startTime,
            s.endTime,
            row?.original?.date,
            'student',
            timeBlocksDuration
          )(cellProps);
        },
        id: s.header,
      })),
    ],
    [timings]
  );
  const subjectsColumns = React.useMemo(
    () => [
      {
        Header: '',
        id: 'day',
        accessor: 'day',
        Cell: ({ row, value }) => (
          <td className={classes.selectorStyle}>
            <Typography className={classes.classCell}>
              {value?.toUpperCase()?.slice(0, 3)}
            </Typography>
          </td>
        ),
      },
      ...generateTimeSlots(
        timings?.StartTime,
        timings?.EndTime,
        timeBlocksDuration
      ).map(s => ({
        Header: (
          <Typography className={classes.timeBox}>
            <Typography className={classes.timeText}>{s.header}</Typography>
          </Typography>
        ),
        Cell: cellProps => {
          const { row } = cellProps;
          return TTCell(
            s.startTime,
            s.endTime,
            row?.original?.date,
            'faculty',
            timeBlocksDuration
          )(cellProps);
        },
        id: s.header,
      })),
    ],
    [timings]
  );

  return (
    <Box>
      {loading && <KenLoader />}
      <Box>
        <Typography className={classes.ttLabel}>
          {t('headings:Subject_Class_TT')}
        </Typography>
      </Box>
      {/* <TTHeader /> */}
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          style={{
            display: 'flex',
            alignItems: 'baseline',
          }}
        >
          <Box className={classes.dateSelector}>
            <ArrowBackIcon
              className={classes.arrow}
              size="small"
              onClick={() => changeWeek('prev')}
            />
          </Box>
          <WeekPicker
            value={dateToViewTT}
            onChange={handleDateChange}
            selector={'week'}
            inputSize="10"
          />
          <Box className={classes.dateSelector}>
            <ArrowForwardIcon
              className={classes.arrow}
              size="small"
              onClick={() => changeWeek('next')}
            />
          </Box>
        </Box>
      </Box>
      <Box p={2}>
        <>
          <Box className={classes.tableContainer}>
            <Box className={classes.tableWrap}>
              {tabData && (
                <KenTabs
                  data={tabData}
                  tabPanelProps={{ style: { overflow: 'auto' } }}
                />
              )}
            </Box>
          </Box>
        </>
      </Box>
    </Box>
  );
}

export default ClassAndSubjectTT;
