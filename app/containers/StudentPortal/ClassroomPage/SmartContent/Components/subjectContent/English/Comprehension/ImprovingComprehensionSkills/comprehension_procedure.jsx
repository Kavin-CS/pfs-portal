import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import comprehensionImg1 from '../../../../../../../../../assets/Images/Subjects/English/comprehension_theory1.png';
import comprehensionImg2 from '../../../../../../../../../assets/Images/Subjects/English/comprehension_theory2.png';
import comprehensionImg3 from '../../../../../../../../../assets/Images/Subjects/English/comprehension_theory3.png';
import comprehensionImg4 from '../../../../../../../../../assets/Images/Subjects/English/comprehension_theory4.png';
import comprehensionImg5 from '../../../../../../../../../assets/Images/Subjects/English/comprehension_theory5.png';
import comprehensionImg6 from '../../../../../../../../../assets/Images/Subjects/English/comprehension_theory6.png';

const useStyles = makeStyles(theme => ({
  animationWrap: {
    padding: 12,
  },
  header: {
    fontSize: 20,
  },
  comprehensionImg: {
    width: '994px',
    height: '554px',
  },
  comprehensionImg2: {
    width: '624px',
    height: '228px',
  },
  comprehensionImg3: {
    width: '600px',
    height: '191px',
  },
  comprehensionImg4: {
    width: '624px',
    height: '211px',
  },
  comprehensionImg5: {
    width: '624px',
    height: '273px',
  },
  comprehensionImg5: {
    width: '624px',
    height: '324px',
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div className={classes.animationWrap}>
      <ol>
        <li dir="ltr">
          <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
            Read the given comprehension &nbsp;carefully.
          </span>
          <br />
          <img className={classes.comprehensionImg} src={comprehensionImg1} />
          <br />
          &nbsp;
          <ol>
            <li dir="ltr">
              <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
                Arrange the given jumbled sentences in order as per the passage.
              </span>
              <br />
              <br />
              <img
                className={classes.comprehensionImg2}
                src={comprehensionImg2}
              />
              <br />
              To check the your answer, click on ‘Submit’ button. The green
              sentence are the correct position and the red are the wrong
              position.
              <img
                className={classes.comprehensionImg3}
                src={comprehensionImg3}
              />
            </li>
          </ol>
        </li>
      </ol>

      <p>&nbsp;</p>

      <ol>
        <li dir="ltr" value="2">
          <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
            For each sentence, check if the sentence is True. Click on submit to
            check your answer, which is displayed at the right of the question.
          </span>
          <br />
          <img className={classes.comprehensionImg4} src={comprehensionImg4} />
          <br />
          &nbsp;
        </li>
      </ol>

      <p>&nbsp;</p>

      <ol>
        <li dir="ltr" value="3">
          <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
            Complete the sentences choosing an appropriate option. To check your
            answer click on ‘Submit’.
          </span>
          <br />
          <img className={classes.comprehensionImg5} src={comprehensionImg5} />
        </li>
        <li dir="ltr">
          <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
            Complete the crossword with the help of given clues.
          </span>
        </li>
        <li dir="ltr">
          <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
            To reveal the answer of particular row/column click on it and click
            on respective row/column Reveal’ button e.g. ‘Reveal 3D’.{' '}
          </span>
        </li>
        <li dir="ltr">
          <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
            To check your particular answer click on the respective row/column
            ‘Check’ button e.g. ‘Check 3D’.
          </span>
        </li>
        <li dir="ltr">
          <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
            To check all your answer click on ‘Check All’ button.
            <br />
            <br />
            <span id="docs-internal-guid-f963e0d1-9214-b5aa-cfb2-dfba2e370f02">
              <img
                className={classes.comprehensionImg6}
                src={comprehensionImg6}
              />
            </span>
          </span>
        </li>
      </ol>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2014). Improving Comprehension Skills. Retrieved
          9 March 2021, from cdac.olabs.edu.in/?sub=84&brch=25&sim=187&cnt=1
        </Typography>
      </div>
    </div>
  );
}
