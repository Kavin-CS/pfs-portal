import React from 'react';
import { makeStyles, Box, Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
  },
  subHeadings: {
    color: theme.palette.KenColors.neutral61,
    fontSize: '13px',
  },
  text: {
    color: theme.palette.KenColors.neutral103,
    fontSize: '13px',
    fontWeight: 'bold',
  },
  remarkText: {
    color: theme.palette.KenColors.neutral61,
    fontSize: '13px',
  },
  box: {
    backgroundColor: theme.palette.KenColors.tertiaryBlue40,
    padding: '16px',
    borderRadius: '6px',
    // minHeight: '100vh',
    height: '100%',
  },
  headings: {
    color: theme.palette.KenColors.tertiaryBlue502,
    fontSize: '12px',
    paddingBottom: '16px',
  },
}));

const DetailsContent = props => {
  const { title, data, variant } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.container} data-testid="details-content">
      <Box className={classes.box}>
        <Typography
          className={classes.headings}
          data-testid="details-content-title"
        >
          {title}
        </Typography>
        <Grid container spacing={4} direction="column">
          <>
            {data &&
              Array.isArray(data) &&
              data.map((item, index) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Typography
                      data-testid="student-details-label"
                      className={classes.subHeadings}
                      color="primary"
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      data-testid="student-details-value"
                      className={classes.text}
                      variant="subtitle1"
                      color="primary"
                    >
                      {item.value}
                    </Typography>
                  </Grid>
                );
              })}
          </>
        </Grid>
      </Box>
    </Box>
  );
};
export default DetailsContent;
