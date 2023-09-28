import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ReportedImg1 from '../../../../../../../../../assets/Images/Subjects/English/reportProcedure1.png';
import ReportedImg2 from '../../../../../../../../../assets/Images/Subjects/English/reportProcedure2.png';
import ReportedImg3 from '../../../../../../../../../assets/Images/Subjects/English/reportProcedure3.png';
import ReportedImg4 from '../../../../../../../../../assets/Images/Subjects/English/reportProcedure4.png';

const useStyles = makeStyles(theme => ({
  animationWrap: {
    width: ' 90%',
    margin: '0 auto',
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <h2>Steps to perform activity:</h2>

      <ol>
        <li>
          Read the conversation show between two people. On the basis of the
          conversation fill in the blanks of reported paragraph by choosing
          between two-three options.
          <img
            alt=""
            src={ReportedImg1}
            style={{ padding: 10, width: '880px', height: '474px' }}
          />
        </li>
        <li>
          Click Submit when done and a feedback will be given for the wrong
          submissions. Wrong submissions are numbered and corresponding number
          feedback is given in feedback pane.
          <img
            alt=""
            src={ReportedImg2}
            style={{ padding: 10, width: '853px', height: '586px' }}
          />
        </li>
        <li>
          You can also use hints which are specific to each blank in the
          paragraph. Click on Hint button on top right and activate Hints by
          ‘Hints On’ button. Then, click on any ‘blank’ to get hint specific to
          that ‘blank’.
          <img
            alt=""
            src={ReportedImg3}
            style={{ padding: 10, width: '862px', height: '653px' }}
          />
          When done, click Hint &gt; Hint off.{' '}
          <img
            alt=""
            src={ReportedImg4}
            style={{ padding: 10, width: '859px', height: '635px' }}
          />
        </li>
      </ol>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Reported Speech. Retrieved 9 March 2021,
          from cdac.olabs.edu.in/?sub=84&brch=26&sim=219&cnt=1
        </Typography>
      </div>
    </div>
  );
}
