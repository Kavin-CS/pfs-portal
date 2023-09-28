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
import directProcedure1 from '../../../../../../../../../assets/Images/Subjects/English/directProcedure1.png';
import directProcedure2 from '../../../../../../../../../assets/Images/Subjects/English/directProcedure2.png';
import directProcedure3 from '../../../../../../../../../assets/Images/Subjects/English/directProcedure3.png';
import directProcedure4 from '../../../../../../../../../assets/Images/Subjects/English/directProcedure4.png';

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
      <div class="divContent">
        <h2>Steps to perform activity:</h2>

        <ol>
          <li>
            Click and drag one of the punctuations towards the direct sentence.
            While you start dragging punctuations, the punctuation droppable
            boxes will appear. ​
            <img
              alt=""
              src={directProcedure1}
              style={{ padding: 10, width: '783px', height: '509px' }}
            />
          </li>
          <li>
            Punctuate the Direct Sentence and click Submit. The wrong
            punctuations will be highlighted in Red. Do the correction and
            Submit to move to next part of the activity.
            <img
              alt=""
              src={directProcedure2}
              style={{ padding: 10, width: '948px', height: '586px' }}
            />
          </li>
          <li>
            The next part of activity is to complete the Indirect sentence
            (formed from the direct sentence. which recently you punctuated)
            Select correct words from all drop down and submit to see if it is
            correct.
            <img
              alt=""
              src={directProcedure3}
              style={{ padding: 10, width: '950px', height: '583px' }}
            />
          </li>
          <li>
            On incorrect submissions, feedback will pop up. Correct your
            sentence on the basis of feedback provided and submit again.
            <img
              alt=""
              src={directProcedure4}
              style={{ padding: 10, width: '866px', height: '644px' }}
            />
          </li>
        </ol>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Direct and Indirect Speech. Retrieved 9
          March 2021, from cdac.olabs.edu.in/?sub=84&brch=26&sim=196&cnt=499
        </Typography>
      </div>
    </div>
  );
}
