import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box, makeStyles } from '@material-ui/core';
import SearchIcon from '../../assets/icons/Search.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.KenColors.searchBackground,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 12px',
  },
  input: {
    border: 'none',
    fontSize: 14,
    width: '100%',
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
    backgroundColor: theme.palette.KenColors.searchBackground,
  },
  icon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default function KenAutoComplete(props) {
  const classes = useStyles();
  const { options, placeholder, setData, defaultSearchValue = '' } = props;
  const [inputValue, setInputValue] = React.useState(defaultSearchValue);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={option => option.label || option.ContactName}
      onChange={(event, value) => {
        setData(value);
        setInputValue('');
      }}
      disableClearable={true}
      onInputChange={(e, value) => {
        setInputValue(value);
      }}
      renderInput={params => (
        <Box ref={params.InputProps.ref} className={classes.root}>
          <input
            type="text"
            {...params.inputProps}
            className={classes.input}
            placeholder={placeholder}
            value={inputValue}
          />
          <span>
            <img
              src={SearchIcon}
              {...params.inputProps}
              className={classes.icon}
            />
          </span>
        </Box>
      )}
    />
  );
}
