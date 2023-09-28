import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PrepositonProcedure1 from '../../../../../../../../../assets/Images/Subjects/English/prepositionProcedure1.png';
import PrepositionProcedure2 from '../../../../../../../../../assets/Images/Subjects/English/prepositionProcedure2.png';
import PrepositionProcedure3 from '../../../../../../../../../assets/Images/Subjects/English/prepositionProcedure3.png';
import PrepositionProcedure4 from '../../../../../../../../../assets/Images/Subjects/English/prepositionProcedure4.png';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    paddingTop: 0,
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.divContent}>
      <ol>
        <li>
          <span>
            Click on start.
            <br />
            <img align="bottom" name="image06.png" src={PrepositonProcedure1} />
          </span>
          <br />
          &nbsp;
        </li>
        <li value="2">
          <span>
            Read the Question.
            <br />
            <img
              align="bottom"
              name="image07.png"
              src={PrepositionProcedure2}
            />
          </span>
          <br />
          &nbsp;
        </li>
      </ol>

      <ol>
        <li value="3">
          <span>
            According to the question, drag and place the "Ball" at the
            appropriate position.​
            <br />
            <img
              align="bottom"
              name="image05.png"
              src={PrepositionProcedure3}
            />
          </span>
          <br />
          &nbsp;
        </li>
        <li value="4">
          <span>Check the feedback, if wrong </span>
          <span>check</span>
          <span>
            {' '}
            the hint button ‘Hint‘ and place the ball in correct position.​
            <br />
            <img
              align="bottom"
              name="image01.png"
              src={PrepositionProcedure4}
            />
          </span>
          <br />
          &nbsp;
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Learning Prepositions of Location.
          Retrieved 9 March 2021, from
          cdac.olabs.edu.in/?sub=84&brch=22&sim=188&cnt=1
        </Typography>
      </div>
    </div>
  );
}
