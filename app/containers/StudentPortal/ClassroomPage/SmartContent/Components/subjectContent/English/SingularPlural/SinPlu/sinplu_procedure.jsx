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

import SinPluPro1 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro1.png';
import SinPluPro2 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro2.png';
import SinPluPro3 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro3.png';
import SinPluPro4 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro4.png';
import SinPluPro5 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro5.png';
import SinPluPro6 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro6.png';
import SinPluPro7 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro7.png';
import SinPluPro8 from '../../../../../../../../../assets/Images/Subjects/English/SinPlu1/sinplu-pro8.png';

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
      <p>&nbsp;</p>

      <ol listStyleType="decimal;">
        <li dir="ltr">
          <span fontSize="14px;">
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              Select the desired tense.
              <br />
              <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
                <img
                  height="283px;"
                  src={SinPluPro1}
                  border="none;"
                  width="519px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="2">
          <span fontSize="14px;">
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              According to the selected tense, the sentence will be displayed
              below.
              <br />
              <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
                <img
                  height="211px;"
                  src={SinPluPro2}
                  border="none;"
                  width="503px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="3">
          <span fontSize="14px;">
            The word in sentence highlighted in yellow{' '}
          </span>
          <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
            <span fontSize="14px;">are</span>
            <span fontSize="14px;"> to be changed to </span>
            <span fontSize="14px;">plural</span>
          </span>
          <span fontSize="14px;">
            {' '}
            form.
            <br />
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              <img
                height="114px;"
                src={SinPluPro3}
                border="none;"
                width="507px;"
              />
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="4">
          <span fontSize="14px;">
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              Drag and Drop the appropriate form of the noun and verb to
              complete this sentence.
              <br />
              <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
                <img
                  height="267px;"
                  src={SinPluPro4}
                  border="none;"
                  width="660px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="5">
          <span fontSize="14px;">
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              Click on "Hint" for view hints.
              <br />
              <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
                <img
                  height="305px;"
                  src={SinPluPro5}
                  border="none;"
                  width="600px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="6">
          <span fontSize="14px;">
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              Click on "Submit" to check whether selected form of the verb is
              correct.
              <br />
              <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
                <img
                  height="52px;"
                  src={SinPluPro6}
                  border="none;"
                  width="555px;"
                />
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="7">
          <span fontSize="14px;">If you are unable to answer </span>
          <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
            <span fontSize="14px;">thrice ,</span>
          </span>
          <span fontSize="14px;">
            {' '}
            click on ‘show answer’ to view the correct answer.
            <br />
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              <img
                height="48px;"
                src={SinPluPro7}
                border="none;"
                width="559px;"
              />
            </span>
          </span>
          <br />
          &nbsp;
        </li>
        <li dir="ltr" value="8">
          <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
            <span fontSize="14px;">
              Click on "Next" to view the next sentence.{' '}
            </span>
            <br />
            <span id="docs-internal-guid-922a96e1-91e5-0bdc-a663-616a48055233">
              <span fontSize="14px;">
                <img
                  height="45px;"
                  src={SinPluPro8}
                  border="none;"
                  width="559px;"
                />
              </span>
            </span>
          </span>
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.header}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2015). Singular to Plural Conversion. Retrieved 9
          April 2021, from cdac.olabs.edu.in/?sub=84&brch=30&sim=232&cnt=2
        </Typography>
      </div>
    </div>
  );
}
