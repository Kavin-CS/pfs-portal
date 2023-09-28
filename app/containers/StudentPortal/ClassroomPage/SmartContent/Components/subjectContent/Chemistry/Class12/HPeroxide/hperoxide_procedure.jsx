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

import HPeroxidePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/HPeroxide1/hperoxide-pro1.jpg';

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
      <h1 className={classes.headTag}>&nbsp;Materials Required</h1>

      <p>
        <img alt="" src={HPeroxidePro1} />
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Take four 250 ml conical flasks and label them as A, B, C and D.
        </li>
        <li>
          Add 5ml, 10 ml, 15 ml and 20 ml of 0.1 M potassium iodide (KI)
          solution to the flasks A, B, C and D respectively.
        </li>
        <li>
          Add 10ml of 2.5 M H<sub>2</sub>SO<sub>4</sub> to each flask.
        </li>
        <li>
          To make the volume of the solution 100ml in each flask add water to
          them.
        </li>
        <li>Add 5 ml of starch solution to each flask.</li>
        <li>
          Add 10 ml of 0.05 M sodium thiosulphate (Na<sub>2</sub>S<sub>2</sub>O
          <sub>3</sub>) solution to each flask.
        </li>
        <li>
          Add 5 ml of 3% H<sub>2</sub>O<sub>2 </sub>solution to flask A and
          start the stop- watch immediately.
        </li>
        <li>
          Stir the mixture using a glass rod and wait for the blue colour to
          appear.
        </li>
        <li>Note the time when the blue colour just appears.</li>
        <li>
          Repeat the experiment by adding 5 ml of 3% hydrogen peroxide solution
          to flasks B, C and D and note the time required in each case for the
          blue colour first appears.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <ul>
        <li>
          You can select the volume of potassium iodide (KI) solution using the
          slider.
        </li>
        <li>
          Drag the conical flask containing 0.1 M potassium iodide (KI) solution
          to the measuring jar to measure the solution.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour the solution in
          it.
        </li>
        <li>
          Drag the bottle to the measuring jar to measure 10ml 2.5 M sulphuric
          acid.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour sulphuric acid in
          it.
        </li>
        <li>
          Drag the beaker to the measuring jar to measure distilled water.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour water in it.
        </li>
        <li>
          Drag the bottle to the measuring jar to measure 5 ml starch solution.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour the starch
          solution in it.
        </li>
        <li>
          Drag the bottle to the measuring jar to measure 10 ml 0.05 M sodium
          thiosulphate (Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>) solution.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour sodium sulphite
          solution in it.
        </li>
        <li>
          Drag the bottle to the measuring jar to measure 5ml 3% hydrogen
          peroxide (H<sub>2</sub>O<sub>2</sub>) solution.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour hydrogen peroxide
          solution in it.
        </li>
        <li>
          You can get the time taken for the appearance of blue colour from the
          stopwatch.
        </li>
        <li>You can use the embedded worksheet to enter the values.</li>
        <li>You can plot a graph using the worksheet.</li>
        <li>To redo the experiment, click the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>
          Note: Click on the ‘HELP’ button to see the instructions.
        </strong>
      </p>

      <h1 className={classes.headTag}>Observation</h1>

      <p>Record the observations as shown in the table given below:</p>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
        width="800"
      >
        <tbody>
          <tr>
            <td paddingRight='5px'>Flask</td>
            <td>0.1 M KI solution (ml)</td>
            <td>
              2.5 M H<sub>2</sub>SO<sub>4</sub> (ml)
            </td>
            <td>Water (ml)</td>
            <td>Starch solution (ml)</td>
            <td>
              0.05 M sodium thiosulphate solution (ml)
            </td>
            <td>
              3% H<sub>2</sub>O<sub>2</sub> (ml)
            </td>
            <td>
              Time (t) for the appearance of blue colour (s)
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>5</td>
            <td>10</td>
            <td>85</td>
            <td>5</td>
            <td>10</td>
            <td>5</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>B</td>
            <td>10</td>
            <td>10</td>
            <td>80</td>
            <td>5</td>
            <td>10</td>
            <td>5</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>C</td>
            <td>15</td>
            <td>10</td>
            <td>75</td>
            <td>5</td>
            <td>10</td>
            <td>5</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>D</td>
            <td>20</td>
            <td>10</td>
            <td>70</td>
            <td>5</td>
            <td>10</td>
            <td>5</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Conclusion</h1>

      <p>
        The rate of the reaction increases with an increase in the concentration
        of iodide ions.
      </p>

      <h1 className={classes.headTag}>Precaution</h1>

      <ul>
        <li>Always use freshly prepared solution of sodium thiosulphate.</li>
        <li>
          Concentration of KI solution should be higher than the concentration
          of sodium thiosulphate solution.
        </li>
        <li>Use freshly prepared starch solution.&nbsp;</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Kinetics Study on the Reaction between
          Iodide Ions and Hydrogen Peroxide. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=117&cnt=2
        </Typography>
      </div>
    </div>
  );
}
