import React, { useState } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import KenSlider from '../../../../../components/KenSlider';
import KenInputField from '../../../../../components/KenInputField/index';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: '10px',
  },
  paperBorder: {
    border: `0.5px solid ${theme.palette.KenColors.neutral40}`,
  },
  btnBox: {
    display: 'flex',
    cursor: 'pointer',
    width: 'fit-content',
    alignItems: 'center',
  },
  btnLabel: {
    marginLeft: '5px',
    fontWeight: '600',
    fontSize: '14px',
  },
  container: {
    // display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  resetBtn: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '10px',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
    },
  },
  slider: {
    minHeight: '400px',
  },
}));

export default function Feedback(props) {
  const { data } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const [feedbacks, setFeedbacks] = useState(data || []);

  const handleAddFeedback = () => {
    const fBacks = [...feedbacks];
    fBacks.push({
      range: [100, 50],
      feedback: '',
    });
    setFeedbacks([...fBacks]);
  };
  const handleRemoveFeedback = index => {
    const fBacks = [...feedbacks];
    if (index > -1) {
      fBacks.splice(index, 1);
    }
    setFeedbacks([...fBacks]);
  };

  const handleResetFeedback = () => {
    setFeedbacks([]);
  };

  const marks = [
    {
      value: 100,
      label: '100%',
    },
    {
      value: 90,
      label: '90%',
    },
    {
      value: 80,
      label: '80%',
    },
    {
      value: 70,
      label: '70%',
    },
    {
      value: 60,
      label: '60%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 40,
      label: '40%',
    },
    {
      value: 30,
      label: '30%',
    },
    {
      value: 20,
      label: '20%',
    },
    {
      value: 10,
      label: '10%',
    },
    {
      value: 0,
      label: '0%',
    },
  ];

  function valueText(value) {
    return `${value}%`;
  }

  const handleRangeChange = (event, newValue, index) => {
    let fbs = [...feedbacks];
    fbs[index].range = newValue;
    setFeedbacks(fbs);
  };

  const handleFeedbackChange = (event, index) => {
    let fbs = [...feedbacks];
    fbs[index].feedback = event.target.value;
    setFeedbacks(fbs);
  };

  const Button = btnProps => {
    const { handleClick, label, startIcon, className, dataTestid } = btnProps;
    return (
      <Box
        onClick={handleClick}
        className={`${classes.btnBox} ${className}`}
        data-testid={dataTestid || 'button'}
      >
        {startIcon}
        <Typography
          className={classes.btnLabel}
          component="span"
          color="primary"
        >
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Box mb={3}>
        <Paper
          elevation={0}
          className={
            feedbacks?.length > 0
              ? `${classes.paper} ${classes.paperBorder}`
              : classes.paper
          }
          data-testid="feedback-list"
        >
          {feedbacks?.map((f, index) => {
            return (
              <>
                <Box p={2} data-testid="feedback-list-item">
                  <Box mb={3}>
                    <Button
                      dataTestid="remove"
                      handleClick={() => handleRemoveFeedback(index)}
                      //   label={`Remove feedback ${index + 1} : ${f.feedback}`}
                      label={`Remove feedback`}
                      startIcon={
                        <RemoveCircleOutlineIcon
                          fontSize="small"
                          color="primary"
                        />
                      }
                    />
                  </Box>
                  <Box mb={3}>
                    <Hidden smUp>
                      <KenSlider
                        orientation="vertical"
                        minHeight="400px"
                        valueText={valueText}
                        value={f.range}
                        handleChange={(e, n) => handleRangeChange(e, n, index)}
                        marks={marks}
                        label={`Grade ${index + 1}`}
                        track={true}
                        className={classes.slider}
                        min={10}
                        max={50}
                      />
                    </Hidden>
                    <Hidden smDown>
                      <KenSlider
                        valueText={valueText}
                        value={f.range}
                        handleChange={(e, n) => handleRangeChange(e, n, index)}
                        marks={marks}
                        label={`Grade ${index + 1}`}
                        track={true}
                      />
                    </Hidden>
                  </Box>
                  <Box mb={3} data-testid="feedback-input">
                    <KenInputField
                      label={`Feedback ${index + 1}`}
                      value={f.feedback}
                      onChange={e => handleFeedbackChange(e, index)}
                    />
                  </Box>
                </Box>
              </>
            );
          })}
        </Paper>

        <Box
          display={{ xs: 'block', md: 'flex' }}
          className={classes.container}
        >
          <Button
            dataTestid="add"
            handleClick={handleAddFeedback}
            label={
              feedbacks?.length > 0
                ? 'Add more range for feedback'
                : 'Add overall feedback'
            }
            startIcon={
              <AddCircleOutlineIcon fontSize="small" color="primary" />
            }
          />
          {feedbacks?.length > 0 && (
            <Button
              dataTestid="reset"
              handleClick={handleResetFeedback}
              label="Reset"
              startIcon={<HighlightOffIcon fontSize="small" color="primary" />}
              className={classes.resetBtn}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
