import React from 'react';
import { Grid, makeStyles, Box, Typography, Avatar } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import KenAvatar from '../../../../../../../components/KenAvatar';

const useStyles = makeStyles(theme => ({
  dobContainer: {
    textAlign: 'center',
  },
  text: {
    color: theme.palette.KenColors.neutral103,
    fontWeight: 'bold',
  },
  headings: {
    color: theme.palette.KenColors.neutral61,
  },
  box: {
    flexGrow: 1,
  },
  innerBox: {
    textAlign: 'left',
  },
  name: {
    fontSize: 14,
    color: theme.palette.KenColors.neutral900,
    fontWeight: '600',
  },
  avatar: {
    width: 32,
    height: 32,
  },
}));

const StudentProfileCardContent = props => {
  const { data = [] } = props;
  const classes = useStyles();
  //   const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box className={classes.box} data-testid="student-profile-card-content">
      <Grid container spacing={2}>
        <Box data-testid="student-profile-avatar" pb={2}>
          <Grid container spacing={1} direction="row" alignItems="center">
            <Grid item>
              <KenAvatar
                value={data ? data.name && data.name[0] : ''}
                className={classes.avatar}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.name}>{data.name}</Typography>
            </Grid>
          </Grid>
        </Box>
        {data &&
          Array.isArray(data.details) &&
          data.details.map((item, index) => {
            return (
              <>
                {item.label && (
                  <Grid item xs={12} key={index}>
                    <Box className={classes.innerBox}>
                      <div data-testid="student-profile-card-content-label">
                        <Typography
                          variant="body2"
                          className={classes.headings}
                        >
                          {item.label}
                        </Typography>
                      </div>
                      <Box mt={1}>
                        <div data-testid="student-profile-card-content-value">
                          <Typography
                            className={classes.text}
                            variant="body2"
                            color="primary"
                          >
                            {item.value}
                          </Typography>
                        </div>
                      </Box>
                    </Box>
                  </Grid>
                )}
              </>
            );
          })}
        {/* <Grid item xs={12}>
          <Typography className={classes.headings} variant="body2">
            {t('headings:Reports_Class')}
          </Typography>
          <Box mt={1}>
            <Typography
              className={classes.text}
              variant="body2"
              color="primary"
            >
              {standard}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" className={classes.headings}>
            {t('headings:Reports_Admission_Number')}
          </Typography>
          <Box mt={1}>
            <Typography
              className={classes.text}
              variant="body2"
              color="primary"
            >
              {admissionNumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.dobContainer}> 
          <Typography
            className={classes.items}
            variant="body2"
            className={classes.headings}
          >
            {t('headings:Reports_DOB')}
          </Typography>
          <Box mt={1}>
            <Typography
              className={classes.text}
              variant="body2"
              color="primary"
            >
              {dob}
            </Typography>
          </Box>
        </Grid>*/}
      </Grid>
    </Box>
  );
};
export default StudentProfileCardContent;
