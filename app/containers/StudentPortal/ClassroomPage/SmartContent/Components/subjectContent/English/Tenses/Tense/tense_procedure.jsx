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

import TensePro1 from '../../../../../../../../../assets/Images/Subjects/English/Tense1/tense-pro1.png';
import TensePro2 from '../../../../../../../../../assets/Images/Subjects/English/Tense1/tense-pro2.png';
import TensePro3 from '../../../../../../../../../assets/Images/Subjects/English/Tense1/tense-pro3.png';
import TensePro4 from '../../../../../../../../../assets/Images/Subjects/English/Tense1/tense-pro4.png';
import TensePro5 from '../../../../../../../../../assets/Images/Subjects/English/Tense1/tense-pro5.png';
import TensePro6 from '../../../../../../../../../assets/Images/Subjects/English/Tense1/tense-pro6.png';

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
      <ol dir="ltr">
        <li>
          <span fontSize="14px;">
            <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
              Select the desired tense. According to the selected tense, the
              sentence will be displayed below.​
              <br />
              <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
                <img
                  height="317px;"
                  src={TensePro1}
                  border="none;"
                  width="481px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li>
          <span fontSize="14px;">
            <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
              Now select the tense to which the sentence needs to be converted.​
              <br />
              <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
                <img
                  height="376px;"
                  src={TensePro2}
                  border="none;"
                  width="518px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li>
          <span fontSize="14px;">
            <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
              Drag and Drop the appropriate form of the verb to complete this
              sentence.​
              <br />
              <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
                <img
                  height="297px;"
                  src={TensePro3}
                  border="none;"
                  width="637px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li>
          <span fontSize="14px;">
            <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
              Click on "Submit" to check whether selected form of the verb is
              correct.​
              <br />
              <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
                <img
                  height="135px;"
                  src={TensePro4}
                  border="none;"
                  width="591px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li>
          <span fontSize="14px;">
            <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
              Click on "Hint" for view hints.​
              <br />
              <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
                <img
                  height="252px;"
                  src={TensePro5}
                  border="none;"
                  width="553px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li>
          <span fontSize="14px;">
            <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
              Click on "Next" to view the next sentence.​
              <br />
              <span id="docs-internal-guid-8810f979-91dd-6639-beff-019ddfd402e8">
                <img
                  height="63px;"
                  src={TensePro6}
                  border="none;"
                  width="554px;"
                />
              </span>
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Tense Conversion. Retrieved 9 April 2021,
          from cdac.olabs.edu.in/?sub=84&brch=24&sim=193&cnt=2
        </Typography>
      </div>
    </div>
  );
}
