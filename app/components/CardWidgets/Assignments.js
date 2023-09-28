import React from 'react';
import {
  Box,
  Typography,
  Grid,
  makeStyles,
  CardHeader,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  container: {
    overflow: 'auto',
  },
  heading: {
    fontWeight: '600',
    color: theme.palette.KenColors.neutral100,
    textTransform: 'uppercase',
  },
  Name: {
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.KenColors.primary,
    '&:hover': {
      cursor: 'pointer',
    },
    textTransform: 'capitalize',
    marginRight: '5px',
  },
  date: {
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.KenColors.neutral400,
    marginTop: '5px',
  },
  content: {
    marginTop: '25px',
  },
  type: {
    fontSize: '12px',
    lineHeight: '14px',
    color: theme.palette.KenColors.neutral400,
  },
  circleItem: {
    textAlign: 'center',
  },
  noAssigns: {
    textAlign: 'center',
    marginTop: 16,
  },
}));
export default function Assigments(props) {
  const classes = useStyles();
  const { details, loading } = props;
  const { t } = useTranslation();

  return (
    <Box
      p={2}
      style={{ overflow: 'auto', maxHeight: '45vh' }}
      data-testid="assignments"
    >
      {
        /* header */
        // <Typography align="center" color="primary">
        //   {t('headings:Assignments')}
        // </Typography>
      }
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : (
        <div>
          {/* notifications list */}
          <Box className={classes.container}>
            {details && details.length > 0 ? (
              details.map(assignment => (
                <AssigmentItem {...assignment} key={assignment.id} />
              ))
            ) : (
              <Typography
                className={classes.noAssigns}
                data-testid="no-assignments"
              >
                {t('No_Assignments_Found')}
              </Typography>
            )}
          </Box>
          <div style={{ paddingTop: 16 }}>
            {details
              ? details.length > 5 && (
                  <Typography
                    align="center"
                    color="primary"
                    data-testid="show-more"
                  >
                    {t('Show_More')}
                  </Typography>
                )
              : null}
          </div>
        </div>
      )}
    </Box>
  );
}

export function AssigmentItem(props) {
  const { t } = useTranslation();
  const {
    name,
    duedate,
    subject,
    marks = 9,
    total = 10,
    type = 'Submitted',
    id,
    url,
    allowsubmissionsfromdate,
  } = props;
  const classes = useStyles();
  const handleClick = () => {
    window.open(url);
  };
  return (
    <Box pt={2} pb={2} className="bottomDivider" key={id}>
      <Grid container>
        <Grid item xs={9}>
          <div
            onClick={() => {
              handleClick();
            }}
          >
            <Typography className={classes.Name} component="span">
              {name}
            </Typography>
            {subject && (
              <Typography variant="caption" component="span">
                {subject}
              </Typography>
            )}
          </div>
          {allowsubmissionsfromdate && (
            <Typography className={`${classes.date} ${classes.content}`}>
              {t('Submission_Starts_On')} : {allowsubmissionsfromdate}
            </Typography>
          )}
          <Typography className={classes.date}>
            {t('Due_On')} : {duedate}
          </Typography>
        </Grid>
        <Grid item alignItems="flex-end">
          {/* <Typography className={classes.circleItem}>
            <div>
              <CircularProgressWithLabel
                circleColor={getColor((marks / total) * 100)}
                value={(marks / total) * 100}
                label={`${marks}/${total}`}
              />
            </div>
          </Typography>
          <Typography variant="body2" className={classes.type}>
            {type}
          </Typography> */}
        </Grid>
      </Grid>
    </Box>
  );
}
