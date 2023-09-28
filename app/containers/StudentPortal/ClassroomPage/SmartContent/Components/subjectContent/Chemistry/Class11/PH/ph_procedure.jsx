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

import PHPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PH1/ph-pro1.jpg';


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
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials Required</h1>

      <p>
        <img
          alt=""
          src={PHPro1}
        />
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <h3 className={classes.secondaryTag}>Determination of pH using pH Paper</h3>

      <ul>
        <li>Take a pH paper strip and place it on a white tile.</li>
        <li>
          Pour a drop of the sample on the pH paper using a clean dropper.
        </li>
        <li>Observe the colour of the pH paper.</li>
        <li>
          Now compare the colour obtained on the pH paper with the different
          colour shades of the standard colour pH chart and note down the pH
          value.
        </li>
        <li>
          Similarly, find the pH of the remaining samples using a fresh strip of
          pH paper and a separate dropper for each sample.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>&nbsp;Determination of pH using Universal Indicator Solution</h3>

      <ul>
        <li>
          Take a small quantity of the given sample in a test tube using a
          dropper.
        </li>
        <li>
          Using a dropper pour a few drops of the universal indicator solution
          into the test tube containing the sample.
        </li>
        <li>
          Shake the test tube well and note the colour developed in the test
          tube.
        </li>
        <li>
          Now compare the colour produced in the test tube with the different
          colour shades of the standard colour pH chart and note down the pH
          value.
        </li>
        <li>Similarly, find the pH of the remaining samples.</li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h2>

      <ul>
        <li>
          You can select the aqueous solution from the 'Select the aqueous
          solution' drop down list.
        </li>
        <li>
          Now choose any one of the sample solutions in the beaker by clicking
          on it.
        </li>
        <li>
          You can find out the pH value of the solution using any of the two
          methods mentioned below.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Using pH Paper</h3>

      <ul>
        <li>
          Drag the dropper towards the beaker and dip it into the solution to
          take the solution in it.
        </li>
        <li>
          Still holding the dropper, move it from the beaker over to the pH
          paper and release it to pour a few drops of the solution on to the pH
          paper .
        </li>
        <li>
          The area on the pH paper over which the solution is poured develops a
          colour.
        </li>
        <li>
          To find the pH value of the solution, select the colour strip from the
          standard colour pH chart and drag it to the pH paper to compare it.
        </li>
        <li>
          The colour that matches with the spot on the pH paper indicates the pH
          value of the solution.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Using Universal Indicator Solution</h3>

      <ul>
        <li>
          Click on the dropper in the universal indicator solution bottle and
          drag it towards the solution in the beaker to pour the universal
          indicator into it.
        </li>
        <li>The solution changes colour.</li>
        <li>
          To find the pH value of the solution, select the colour strip from the
          standard colour pH chart and drag it near to the solution in the
          beaker to compare it.
        </li>
        <li>
          The colour that matches with the colour of the solution in the beaker
          indicates the pH value of the solution.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <p>Record the observations in a tabular column.</p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          
        >
          <tbody>
            <tr>
              <td rowspan="2">
                Sample Name
              </td>
              <td colspan="2">
                For pH Paper
              </td>
              <td colspan="2">
                For Universal Indicator Solution
              </td>
            </tr>
            <tr>
              <td>
                Colour produced on the pH Paper
              </td>
              <td>Approximate pH</td>
              <td>
                Colour produced in the solution
              </td>
              <td>Approximate pH</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          Use only the standard colour pH chart supplied with the pH paper for
          assessing the pH value.
        </li>
        <li>Keep the pH strips away from chemical fumes.</li>
        <li>
          Either use fresh fine dropper or glass rod for each different sample,
          or wash the dropper or glass rod well with water every time.
        </li>
        <li>
          To correctly view the colour produced on the pH paper, keep the pH
          paper on a white tile while performing the experiment.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Determination of pH. Retrieved 30 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=144&cnt=2
        </Typography>
      </div>
    </div>
  );
}
