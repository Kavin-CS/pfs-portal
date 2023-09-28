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
import PHStripPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/PHStrip1/phstrip-pro1.png';

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
      <h1 className={classes.headTag}>Materials Required:&nbsp;</h1>

      <p>
        <img alt="" src={PHStripPro1} width="92%;" />
      </p>

      <h1 className={classes.headTag}>The Procedure:&nbsp;</h1>

      <h2 className={classes.secondaryTag}>As performed in a real lab:</h2>

      <ul type="1">
        <li>
          Take six strips pH paper and place them on a glazed tile. Mark them 1
          to 6.
        </li>
        <li>
          Take the test solutions in separate test tubes. Dissolve the solid
          substance by adding distilled water to it. Label the test tubes.
        </li>
        <li>
          Now, place a drop of the test solution on one strip of the pH paper
          with the help of a fine dropper or glass rod. Use a fresh
          dropper&nbsp;for each test solution.
        </li>
        <li>
          Observe the colour produced and match it with the different colour
          shades of the standard colour pH chart.
        </li>
        <li>
          Note down the &nbsp;colour of the&nbsp;pH&nbsp;from the colour
          chart&nbsp;that matches most closely with the colour produced on the
          pH paper.
        </li>
        <li>
          Similarly, find the pH value of the remaining samples by using a fresh
          strip of pH paper and a separate glass rod or fine dropper for each
          one.&nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>As performed using the simulator:</h2>

      <p>
        <strong>Using the pH strip:</strong>
      </p>

      <p>
        <strong>Using the Universal Indicator:</strong>
      </p>

      <ul type="1">
        <li>
          You can select the aqueous solution type you want to find the pH value
          of, from the ‘Select Aqueous Solution’ drop down list (vegetable &amp;
          fruit juices, household items, acids and bases in the lab or salts in
          water).
        </li>
        <li>
          Now choose any one of the solutions in the beaker by clicking on it.
        </li>
        <li>
          There are two ways of finding the pH value of the solution:
          <ul type="a">
            <li>
              Click and drag the dropper from the stand and move into the
              solution in the beaker to collect the solution in the dropper.
            </li>
            <li>
              Still holding the dropper, move it from the beaker over to the pH
              strip and release it.&nbsp;
            </li>
            <li>
              To find the pH value of the solution, select the colour from the
              menu on the left by clicking and dragging it to the pH strip and
              comparing it.
            </li>
            <li>
              The colour that matches with the spot on the pH strip indicates
              the pH value of the solution.
            </li>
          </ul>
          <ul type="a">
            <li>
              Click and drag the dropper from the universal indicator bottle and
              move it into the solution in the beaker to drop the universal
              indicator into it.
            </li>
            <li>
              To find the pH value of the solution, select the colour from the
              menu on the left by clicking and dragging it next to the solution
              in the beaker and comparing it.
            </li>
            <li>
              The colour that matches with the solution in the beaker indicates
              the pH value of the solution.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        <strong>Note:</strong>
      </p>

      <ul>
        <li>
          Once test is done using the Universal Indicator, you cannot do it with
          the pH strip. To do it with the pH strip, click the ‘Reset’ button and
          vice versa.
        </li>
        <li>
          The ‘Reset’ button can be used to redo the experiment with other
          solutions.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations:&nbsp;</h1>

      <table
        align="center"
        border="1"
        cellpadding="0"
        cellspacing="0"
        class="responsive_table"
      >
        <tbody>
          <tr>
            <td>Sl.No</td>
            <td>Sample solution</td>
            <td>Colour produced on pH paper</td>
            <td>Approximate pH</td>
            <td>Inference</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Dil.HCl</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dil. NaOH</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dil. Ethanoic acid</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lemon juice</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Water</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Dil. Sodium bicarbonate sol.</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Precautions:</h1>

      <p>
        1.&nbsp;&nbsp;&nbsp; Use only the standard colour chart supplied with
        the pH paper for assessing the ph value.
        <br />
        2.&nbsp;&nbsp;&nbsp; Keep the pH strips away from chemical fumes.
        <br />
        3.&nbsp;&nbsp;&nbsp; Either use fresh fine dropper or glass rod for each
        different sample, or wash the dropper or rod well with water every time.
        <br />
        &nbsp;
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Determine pH with pH indicator strips /
          universal indicator solution. Retrieved 31 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=78&cnt=2
        </Typography>
      </div>
    </div>
  );
}
