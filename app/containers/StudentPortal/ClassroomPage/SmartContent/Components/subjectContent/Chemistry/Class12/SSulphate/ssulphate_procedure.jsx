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

import SSulphatePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SSulphate1/ssulphate-pro1.jpg';

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
        <img alt="" src={SSulphatePro1} />
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>Take four 250ml conical flasks and label them as A, B, C and D.</li>
        <li>
          Add 2ml, 4ml, 6ml, and 8ml of 0.01 M potassium iodate (KIO<sub>3</sub>
          ) solution to the flasks A, B, C and D.
        </li>
        <li>
          Add 10ml of 1M H<sub>2</sub>SO<sub>4</sub> to each flask.
        </li>
        <li>
          Add water to bring the volume of the solution to 100ml in each flask.
        </li>
        <li>Add 5ml of starch solution to each flask.</li>
        <li>
          Add 10ml of 0.005 M sodium sulphite (Na<sub>2</sub>SO<sub>3</sub>)
          solution to each flask and start the stop watch immediately.
        </li>
        <li>Note the time when the blue colour just appears.</li>
        <li>
          Repeat the above 2 steps with the solutions of flasks B, C and D and
          note the time required in each case when the blue colour first
          appears.
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
          You can select the volume of potassium iodate (KIO<sub>3</sub>)
          solution using the slider.
        </li>
        <li>
          Drag the conical flask containing 0.01 M potassium iodate (KIO
          <sub>3</sub>) solution to the measuring jar to measure the solution.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour the solution in
          it.
        </li>
        <li>
          Drag the bottle to the measuring jar to measure 10ml 1 M sulphuric
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
          Drag the bottle to the measuring jar to measure 10 ml 0.005 M sodium
          sulphite (Na<sub>2</sub>SO<sub>3</sub>) solution.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour sodium sulphite
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

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          height="105"
          width="700"
        >
          <tbody>
            <tr>
              <td>
                <p>Flask</p>
              </td>
              <td>
                0.01 M KIO<sub>3</sub> (ml)
              </td>
              <td>
                1 M H<sub>2</sub>SO<sub>4</sub>
              </td>
              <td>Water</td>
              <td>Starch solution</td>
              <td>
                0.005 M Na<sub>2</sub>SO<sub>3</sub> (ml)
              </td>
              <td>
                Time (t) for the appearance of blue colour (s)
              </td>
            </tr>
            <tr>
              <td>&nbsp;A</td>
              <td>&nbsp;2</td>
              <td>&nbsp;10</td>
              <td>&nbsp;88</td>
              <td>5</td>
              <td>10</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;B</td>
              <td>4</td>
              <td>&nbsp;10</td>
              <td>&nbsp;86</td>
              <td>&nbsp;5</td>
              <td>&nbsp;10</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;C</td>
              <td>&nbsp;6</td>
              <td>&nbsp;10</td>
              <td>&nbsp;84</td>
              <td>&nbsp;5</td>
              <td>&nbsp;10</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;D</td>
              <td>&nbsp;8</td>
              <td>&nbsp;10</td>
              <td>&nbsp;82</td>
              <td>&nbsp;5</td>
              <td>&nbsp;10</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Conclusion</h1>

      <ul>
        <li>
          The rate of reaction increases with increase in concentration of
          potassium iodate.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          Always use a freshly prepared solution of sodium&nbsp; sulphite
          because it is easily oxidised by air.
        </li>
        <li>
          Concentration of KIO<sub>3</sub> solution should be higher than the
          concentration of sodium sulphote solution.
        </li>
        <li>Use a freshly prepared starch solution.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Kinetics Study on the Reaction between
          Potassium iodate and Sodium Sulphite. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=143&cnt=2
        </Typography>
      </div>
    </div>
  );
}
