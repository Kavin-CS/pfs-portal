import React from 'react';
import { Box, makeStyles,Typography,Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import history from '../../../utils/history';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
  title: {
    fontSize: 24,
    color: theme.palette.KenColors.neutral900,
  },
  plainLink:{
    textDecoration:"none",
  }
}));

export default function Index() {
  const classes = useStyles();
  const goBack = async () =>{
    console.log('goBack');
    //history.push('/feePayment')
    window.close();
    //TODO : implement api for fee reciept
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        ThankYou
      </Typography>
      <Typography className={classes.title}>
        your fees has been submitted successfully
      </Typography>
      {/* <Link to="/feePayment" className={classes.plainLink}> */}
      <Button variant="contained" color="primary" onClick={goBack}>Go Back</Button>
      {/* </Link> */}
    </Box>
  );
}
