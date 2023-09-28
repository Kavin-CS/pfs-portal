import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import RatingsStatusCard from '../RatingsStatusCard';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  attendanceValue: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  attendanceTitle: {
    fontWeight: 'normal',
    fontSize: '12px',
  },
}));

const TestAttendanceCard = props => {
  const { present, absent } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <RatingsStatusCard
      variant={'quinary'}
      data-testid="attendance-details-card"
      title="Attendance of Test"
      cardAction={<></>}
    >
      <Box p={2}>
        <Grid container spacing={0}>
          <Grid item xs={6} md={6}>
            <Box>
              <Typography className={classes.attendanceTitle}>
                {t('labels:Attendance_Present')}
              </Typography>
              <Typography component="span" className={classes.attendanceValue}>
                {present || '--.--'}
              </Typography>
              <Typography component="span" className={classes.attendanceValue}>
                {'%'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box>
              <Typography className={classes.attendanceTitle}>
                {t('labels:Attendance_Absent')}
              </Typography>
              <Typography component="span" className={classes.attendanceValue}>
                {absent || '--.--'}
              </Typography>
              <Typography component="span" className={classes.attendanceValue}>
                {'%'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </RatingsStatusCard>
  );
};

export default TestAttendanceCard;
