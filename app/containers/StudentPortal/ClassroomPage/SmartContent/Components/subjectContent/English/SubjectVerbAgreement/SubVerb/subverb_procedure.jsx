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

import SubVerbPro1 from '../../../../../../../../../assets/Images/Subjects/English/SubVerb1/subverb-pro1.png';
import SubVerbPro2 from '../../../../../../../../../assets/Images/Subjects/English/SubVerb1/subverb-pro2.png';
import SubVerbPro3 from '../../../../../../../../../assets/Images/Subjects/English/SubVerb1/subverb-pro3.png';
import SubVerbPro4 from '../../../../../../../../../assets/Images/Subjects/English/SubVerb1/subverb-pro4.png';
import SubVerbPro5 from '../../../../../../../../../assets/Images/Subjects/English/SubVerb1/subverb-pro5.png';
import SubVerbPro6 from '../../../../../../../../../assets/Images/Subjects/English/SubVerb1/subverb-pro6.png';
import SubVerbPro7 from '../../../../../../../../../assets/Images/Subjects/English/SubVerb1/subverb-pro7.png';

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
    <div class="divContent">
      <ol listStyleType="decimal;">
        <li dir="ltr">
          <span fontSize="14px;">
            <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
              Click on appropriate words to Identify the Subject.
              <br />
              <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
                <img
                  height="376px;"
                  src={SubVerbPro1}
                  border="none;"
                  width="624px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="2">
          <span fontSize="14px;">If </span>
          <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
            <span fontSize="14px;">answer</span>
          </span>
          <span fontSize="14px;">
            {' '}
            is wrong see the feedback and try again.
            <br />
            <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
              <img
                height="177px;"
                src={SubVerbPro2}
                border="none;"
                width="624px;"
              />
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="3">
          <span fontSize="14px;">
            <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
              For further assistance, you can see hints by clicking on “Hint”.
              <br />
              <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
                <img
                  height="132px;"
                  src={SubVerbPro3}
                  border="none;"
                  width="624px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="4">
          <span fontSize="14px;">
            <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
              If you get the subject correct, click 'Next Step' for the 2nd
              step.
              <br />
              <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
                <img
                  height="55px;"
                  src={SubVerbPro4}
                  border="none;"
                  width="558px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="5">
          <span fontSize="14px;">
            <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
              Identify whether the subject is singular or plural and click 'Next
              Step'.
              <br />
              <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
                <img
                  height="283px;"
                  src={SubVerbPro5}
                  border="none;"
                  width="624px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="6">
          <span fontSize="14px;">Choose </span>
          <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
            <span fontSize="14px;">correct</span>
          </span>
          <span fontSize="14px;">
            {' '}
            form of the verb according to Subject-verb Agreement.
            <br />
            <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
              <img
                height="178px;"
                src={SubVerbPro6}
                border="none;"
                width="570px;"
              />
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="7">
          <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
            <span fontSize="14px;">
              If you get the Subject-verb Agreement correct, click 'Next
              Sentence' for the next sentence.{' '}
            </span>
            <br />
            <span id="docs-internal-guid-e27b9e3b-91e2-944c-4f27-90cbdbcf002e">
              <span fontSize="14px;">
                <img
                  height="52px;"
                  src={SubVerbPro7}
                  border="none;"
                  width="375px;"
                />
              </span>
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Subject-Verb Agreement. Retrieved 9 April
          2021, from cdac.olabs.edu.in/?sub=84&brch=28&sim=222&cnt=642
        </Typography>
      </div>
    </div>
  );
}
