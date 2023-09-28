import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  gradeValueWrap: {
    width: 32,
    height: 32,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 600,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '100%',
  },
}));

const GradeIcon = props => {
  const { grade, bkgColor, textColor } = props;
  const classes = useStyles();

  return (
    <>
      {' '}
      <Typography
        className={classes.gradeValueWrap}
        style={{
          color: `rgba(${textColor})`,
          backgroundColor: `rgba(${bkgColor})`,
        }}
      >
        {grade}
      </Typography>
    </>
  );
};
export default GradeIcon;
