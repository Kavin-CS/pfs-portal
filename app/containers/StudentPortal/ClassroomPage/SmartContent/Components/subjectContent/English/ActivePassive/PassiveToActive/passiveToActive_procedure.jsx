import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

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
    <div class="divContent">
      <div class="divContent">
        <ol>
          <li>
            Select the desired tense.
            <br />
            <img
              alt=""
              src="http://cdac.olabs.co.in/userfiles/2/1441260807_1.png"
              style={{ padding: 10, width: '750px', height: '331px' }}
            />
          </li>
          <li>
            The sentence displayed is in Active voice.
            <br />
            <img
              alt=""
              src="http://cdac.olabs.co.in/userfiles/2/1441260862_2.png"
              style={{ paddingTop: 10, width: '545px', height: '424px' }}
            />
          </li>
          <li>
            Now, rearrange the given words below to construct the corresponding
            Passive voice of the given sentence.
            <br />
            <img
              alt=""
              src="http://cdac.olabs.co.in/userfiles/2/1441260892_3.png"
              style={{ paddingTop: 10, width: '750px', height: '294px' }}
            />
          </li>
          <li>
            Click on "Hints" to view hints.
            <br />
            <img
              alt=""
              src="http://cdac.olabs.co.in/userfiles/2/1441260910_4.png"
              style={{ paddingTop: 10, width: '750px', height: '296px' }}
            />
          </li>
          <li>
            Click on "Submit" to check whether the Passive voice is properly
            constructed and check the feedback displayed below.
            <br />
            <img
              alt=""
              src="http://cdac.olabs.co.in/userfiles/2/1441260932_5.png"
              style={{ paddingTop: 10, width: '750px', height: '298px' }}
            />
          </li>
          <li>
            Click on "Next" to view the next sentence.
            <br />
            <img
              alt=""
              src="http://cdac.olabs.co.in/userfiles/2/1441260945_6.png"
              style={{ paddingTop: 10, width: '750px', height: '288px' }}
            />
          </li>
          <li>
            If you are unable to solve the question, click on “Show answer” to
            &nbsp;see the answer, but “Show answer” it is visible only if you
            answer it thrice incorrectly.
            <br />
            <img
              alt=""
              src="http://cdac.olabs.co.in/userfiles/2/1441260958_7.png"
              style={{ paddingTop: 10, width: '681px', height: '538px' }}
            />
          </li>
        </ol>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Passive to Active Voice Conversion.
          Retrieved 9 March 2021, from
          cdac.olabs.edu.in/?sub=84&brch=23&sim=195&cnt=1
        </Typography>
      </div>
    </div>
  );
}
