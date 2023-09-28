import React from 'react';
import { makeStyles, Box, Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
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
    whiteSpace: 'pre-line',
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

const RemarksContent = props => {
  const { data, title } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.box} data-testid="remarks-content">
      <Typography
        className={classes.headings}
        data-testid="remarks-content-title"
      >
        {title}
      </Typography>

      <>
        {data &&
          Array.isArray(data) &&
          data.map((item, index) => {
            return (
              <>
                {(item.value || item) && (
                  <Grid item xs={12}>
                    <Typography
                      className={classes.remarkText}
                      data-testid="remarks-content-text"
                    >
                      {item.value || item}
                    </Typography>
                  </Grid>
                )}
              </>
            );
          })}
      </>
    </Box>
  );
};
export default RemarksContent;
