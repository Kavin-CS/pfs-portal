import React from 'react';
import clsx from 'clsx';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { createStyles, ThemeProvider } from '@material-ui/styles';
import { IconButton, withStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import moment, { isDate } from 'moment';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const materialTheme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        display: 'flex',
        maxWidth: '325px',
        minWidth: '330px',
        minHeight: '365px',
        overflowX: 'hidden',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    MuiInputBase: {
      input: {
        minWidth: '260px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#7A869A',
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          transform: 'none',
          transition: 'none',
          borderBottom: 'none',
        },
        '&:before': {
          transition: 'none',
          borderBottom: 'none',
          pointerEvents: 'none',
        },
        '&:hover:not($disabled):before': {
          borderBottom: '1px solid grey',
        },
      },
    },
  },
});

const styles = createStyles(theme => ({
  day: {
    width: 40,
    height: 40,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: 'inherit',
  },
  customDayHighlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '2px',
    right: '2px',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '50%',
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: '#676767',
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: 'highlight',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    extend: 'highlight',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
}));

const makeJSDateObject = date => new Date(date);

function WeekPicker(props) {
  const { value, onChange, selector, label, inputSize = 40 } = props;

  const formatWeekSelectLabel = (date, invalidLabel) => {
    return `${moment(date)
      .startOf('week')
      .format('MMMM-DD-YYYY')
      ?.toLocaleUpperCase()} TO ${moment(date)
      .endOf('week')
      .format('MMMM-DD-YYYY')
      ?.toLocaleUpperCase()}`;
  };

  const formatDaySelectLabel = (date, invalidLabel) => {
    let dateClone = makeJSDateObject(date);
    return dateClone && isDate(dateClone)
      ? `${moment(date)
          .format('MMMM-DD-YYYY')
          .toLocaleUpperCase()}`
      : invalidLabel;
  };

  const renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    const { classes } = props;
    let dateClone = makeJSDateObject(date);
    let selectedDateClone = makeJSDateObject(selectedDate);

    const start = moment(selectedDateClone)
      .startOf('week')
      .subtract(1, 'day')
      .toDate();
    const end = moment(selectedDateClone)
      .endOf('week')
      .toDate();

    const dayIsBetween = moment(dateClone).isBetween(start, end);
    const isFirstDay = moment(dateClone).isSame(moment(start).add(1, 'days'));
    const formattedDateClone = moment(dateClone).format('DD/MM/YYYY');
    const formattedEnd = moment(end).format('DD/MM/YYYY');

    const isLastDay = formattedDateClone === formattedEnd;

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {moment(dateClone).format('DD')} </span>
        </IconButton>
      </div>
    );
  };

  const inputProps = {
    size: inputSize,
  };

  const getPicker = selector => {
    switch (selector) {
      case 'week':
        return (
          <DatePicker
            value={value}
            onChange={onChange}
            renderDay={renderWrappedWeekDay}
            labelFunc={formatWeekSelectLabel}
            label={formatWeekSelectLabel}
            inputProps={inputProps}
            {...props}
          />
        );

      case 'day':
        return (
          <DatePicker
            value={value}
            onChange={onChange}
            labelFunc={formatDaySelectLabel}
            inputProps={inputProps}
            {...props}
          />
        );

      default:
        return (
          <DatePicker
            value={value}
            onChange={onChange}
            inputProps={inputProps}
            {...props}
          />
        );
    }
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={materialTheme}>
          {getPicker(selector)}
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  );
}

export default withStyles(styles)(WeekPicker);
