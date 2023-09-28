import React from 'react';
import { Box, Typography, Grid, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next';
import Routes from '../../utils/routes.json';
import { withRouter } from 'react-router';

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
    color: theme.palette.KenColors.primary,
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
    },
    textTransform: 'capitalize',
    marginRight: '5px',
  },
  date: {
    fontSize: '14px',
    color: theme.palette.KenColors.neutral400,
    marginTop: '15px',
  },
  type: {
    fontSize: '12px',

    color: theme.palette.KenColors.neutral400,
  },
  circleItem: {
    textAlign: 'center',
  },
}));

function Assesments(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { details, loading, history } = props;

  return (
    <Box
      p={2}
      style={{ overflow: 'auto', maxHeight: '45vh' }}
      data-testid="assessments"
    >
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : (
        <div>
          {/* notifications list */}
          <Box className={classes.container}>
            {details && details.length > 0 ? (
              details.map(assesment => (
                <AssesmentsItem key={assesment.id} history={history} {...assesment} />
              ))
            ) : (
              <Typography>{t('No_Assessments_Found')}</Typography>
            )}
          </Box>
          {details
            ? details.length > 5 && (
              <div style={{ paddingTop: 16 }} data-testid="show-more">
                <Typography align="center" color="primary">
                  {t('Show_More')}
                </Typography>
              </div>
            )
            : null}
        </div>
      )}
    </Box>
  );
}

export function AssesmentsItem(props) {
  const {
    name,
    subject,
    duedate,
    marks = 6,
    history,
    total = 10,
    type = 'Appeared',
    url,
  } = props;
  const classes = useStyles();
  const handleClick = () => {
    history.push(`/${Routes.studentAssessment}`)
  };
  return (
    <Box pt={2} pb={2} className="bottomDivider">
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
          <Typography className={classes.date}>{duedate}</Typography>
        </Grid>
        {/* <Grid item alignItems="flex-end">
          <Typography className={classes.circleItem}>
            <div>
              <CircularProgressWithLabel
                circleColor={getColor((marks / total) * 100)}
                value={(marks / total) * 100}
                color="secondary"
                label={`${marks}/${total}`}
              />
            </div>
          </Typography>
          <Typography variant="body2" className={classes.type}>
            {type}
          </Typography>
        </Grid> */}
      </Grid>
    </Box>
  );
}
export default withRouter(Assesments)