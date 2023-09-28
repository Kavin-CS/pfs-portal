import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StudentProfileCardHeader from './Components/StudentProfileCardHeader';
import { useTheme } from '@material-ui/core';
import StudentProfileCardContent from './Components/StudentProfileCardContent';

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 345,
    border: `5px solid ${theme.palette.KenColors.kenWhite}`,
    borderRadius: '10px',
  },
  cardContent: {
    backgroundColor: theme.palette.KenColors.neutral11,
  },
  actionIcon: {
    cursor: 'pointer',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.KenColors.tertiaryBlue501,
  },
}));

export default function StudentDetailsCard(props) {
  const {
    data,
    students,
    setStudentInfo,
    studentInfo,
    disableSearch = false,
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      className={classes.root}
      elevation={0}
      data-testid="student-details-card"
    >
      {!disableSearch ? (
        <StudentProfileCardHeader
          data={students}
          setStudentInfo={setStudentInfo}
          studentInfo={studentInfo}
        />
      ) : null}
      <CardContent
        className={classes.cardContent}
        data-testid="student-details-card-content"
      >
        <StudentProfileCardContent data={data} />
      </CardContent>
    </Card>
  );
}
