import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import KenTextLabel from '../../components/KenTextLabel';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    fontSize: 14,
    border: `1px solid ${theme.palette.KenColors.assessmentBorder}`,
    width: '100%',
    padding: '10px 12px',
    cursor: 'pointer',
    color: theme.palette.KenColors.neutral60,
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
}));

export default function TimePickers(props) {
  const {
    label,
    id,
    value,
    required,
    optionalLabel,
    defaultValue,
    inputBaseRootClass,
    onChange
  } = props;
  const classes = useStyles();

  return (
    <Box>
      <KenTextLabel
        label={label}
        required={required}
        optionalLabel={optionalLabel}
      />

      <form className={classes.container} noValidate>
        <BootstrapInput
          id={id}
          type="time"
          defaultValue={defaultValue}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={onChange}
          value={value}
          classes={{ root: inputBaseRootClass }}
        />
      </form>
    </Box>
  );
}
