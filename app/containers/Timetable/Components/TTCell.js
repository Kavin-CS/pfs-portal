import React from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { getDateObj } from '../../../utils/helpers/ttHelper';
import { makeStyles } from '@material-ui/core';

dayjs.extend(isBetween);

const dayStartTime = '09:00:00';
const dayEndTime = '05:00:00';

const useStyles = makeStyles(theme => ({
  timeBlockContiner: {
    display: 'block',
  },
  timeBlockContent: {
    padding: '5px',
    textTransform: 'uppercase',
  },
  timeBlockSubContent: {
    padding: '5px',
    textTransform: 'capitalize',
  },
}));

const TTCell = (
  cellStart,
  cellEnd,
  cellDate,
  userType,
  timeBlock = 45
) => cellProps => {
  const { row } = cellProps;
  const styles = useStyles();
  let colSpan = 1;

  //component ti show in cell
  const cellContent = (cls, userType) => {
    switch (userType?.toLowerCase()) {
      case 'faculty':
        return (
          <>
            <div className={styles.timeBlockContent}>{cls.CoureseName}</div>
            <div className={styles.timeBlockContent}>{`(${cls.classId})`}</div>
          </>
        );

      case 'student':
      case 'parent':
        return (
          <>
            <div className={styles.timeBlockContent}>{cls.CoureseName}</div>
            <div className={styles.timeBlockSubContent}>{`(${
              cls.Facultyname
            })`}</div>
          </>
        );

      default:
        return <></>;
    }
  };

  //   find class with the same start time as this cell
  //  TBD: inbetween
  const { classes = [] } = row.original;
  let isTimeBlockBetween = false;
  let cls;

  classes.some(c => {
    if (
      getDateObj(c.starttime, c.date).isBetween(
        getDateObj(cellStart, cellDate),
        getDateObj(cellEnd, cellDate),
        'null',
        '[)'
      )
    ) {
      cls = c;
      //   console.log('====');
      return true;
    }
    //   Check if the timeblock is in between the class
    else if (
      getDateObj(cellStart, cellDate).isBetween(
        getDateObj(c.starttime, c.date),
        getDateObj(c.endtime, c.date),
        'null',
        '[)'
      ) &&
      getDateObj(cellEnd).isBetween(
        getDateObj(c.starttime),
        getDateObj(c.endtime),
        'null',
        '(]'
      )
    ) {
      //   console.log('+++++');
      isTimeBlockBetween = true;
      return true;
    }
    return false;
  });

  //console.log(cellStart, cellEnd, cls, isTimeBlockBetween);
  if (isTimeBlockBetween) return null;

  //console.log('cls: ', cls);

  //   calculate colspan based on end time
  //   get total class time and get integer of classtime/timeBlock
  if (cls) {
    const startTime = dayjs(
      cls.date + ' ' + cls.starttime,
      'DD/MM/YYYY HH:mm:ss'
    );
    const endTime = dayjs(cls.date + ' ' + cls.endtime, 'DD/MM/YYYY HH:mm:ss');
    const classDuration = endTime.diff(startTime, 'm');
    // console.log('classDuration: ', classDuration, classDuration / timeBlock);

    colSpan =
      classDuration > timeBlock ? Math.floor(classDuration / timeBlock) : 1;

    //console.log(cellStart, cellEnd, cls, classDuration, colSpan);

    // return td with data id
    return (
      <td
        colSpan={colSpan}
        style={{
          border: '1px solid #B3BAC5',
          borderRadius: 3,
        }}
      >
        <div
          style={{
            backgroundColor: cls.color,
            borderRadius: 3,
            margin: 4,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '52px',
            // minHeight: '33px',
            color: '#061938',
          }}
        >
          <div className={styles.timeBlockContiner}>
            {cellContent(cls, userType)}
          </div>
        </div>
      </td>
    );
  }

  return (
    <td
      style={{
        border: '1px solid #B3BAC5',
        borderRadius: 3,
        minHeight: '52px',
      }}
    />
  );
};

export default TTCell;
