
import React from 'react'
import { Select, MenuItem, Typography, TextField, InputBase, withStyles, FormControl, makeStyles, useTheme } from '@material-ui/core';
import KenTextLabel from '../KenTextLabel';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#FAFBFC',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    textAlign: 'left',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme => ({
  label: {
    marginBottom: 2
  }
})))

function getStyles(name, value, theme) {
  return {
    fontWeight:
      value.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



const KenSelect = function (props) {
  const classes = useStyles();
  const { id,
    options = [],
    value,
    onChange,
    label,
    name,
    placeholder,
    disabled,
    readonly,
    required,
    multiple,
    optionalLabel = true
  } = props;
  const theme = useTheme();
  return (
    <FormControl fullWidth disabled={disabled || readonly} className={classes.formControl}>
      <KenTextLabel label={label} required={required} optionalLabel={optionalLabel} />
      <Select
        id={id}
        name={name}
        label={label}
        value={
          value
        }
        onChange={onChange}
        disabled={disabled || readonly}
        fullWidth
        placeholder={placeholder}
        input={<BootstrapInput value={value} />}
        required={required}
        multiple={multiple}
      >
        {options.map(el => <MenuItem value={el.value || el} style={multiple ? getStyles(name, value, theme) : {}}>
          {el.label || el}
          <div>&nbsp; {el.time}</div>
        </MenuItem>)}
      </Select>
    </FormControl>
  )
}


export default KenSelect;
