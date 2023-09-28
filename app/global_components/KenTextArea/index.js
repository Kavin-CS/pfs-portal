import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  areaWrap: {
    width: '100%',
    outline: 'none',
    border: `1px solid ${theme.palette.KenColors.assessmentBorder}`,
    minHeight: 50,
    padding: 8,
    fontSize: 14,
    color: theme.palette.KenColors.neutral900,
  },
  label: {
    fontSize: '12px',
    color: theme.palette.KenColors.neutral400,
  },
}));

export default function Textarea(props) {
  const { minRows, maxRows, placeholder, label, defaultValue } = props;
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.label}>{label}</Typography>

      <TextareaAutosize
        className={classes.areaWrap}
        minRows={minRows}
        maxRows={maxRows}
        aria-label="maximum height"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </Box>
  );
}
