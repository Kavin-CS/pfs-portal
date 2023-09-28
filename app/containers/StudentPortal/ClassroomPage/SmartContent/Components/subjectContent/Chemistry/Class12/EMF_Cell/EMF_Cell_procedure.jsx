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

import ProcedureImg from '../../../../../../../../../assets/Images/Subjects/Chemistry/emf-procedure1.jpg';

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
      <h1 className={classes.headTag}>Materials required</h1>

      <p>
        <img alt="" src={ProcedureImg} />
      </p>

      <h1 className={classes.headTag}>The Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>Take two clean beakers.</li>
        <li>
          In one beaker take 1 M copper sulphate solution and in the other take
          1 M zinc sulphate solution.
        </li>
        <li>Take a copper strip and clean it using a sand paper.</li>
        <li>
          Dip the copper strip into the beaker containing the 1 M copper
          sulphate solution.
        </li>
        <li>Similarly, take a zinc strip and clean it using a sand paper.</li>
        <li>
          Then dip it into the beaker containing 1 M zinc sulphate solution.
        </li>
        <li>
          Take a salt bridge and connect the two solutions using the salt
          bridge.
        </li>
        <li>
          Take a voltmeter and connect the copper strip to the positive terminal
          and the zinc strip to the negative terminal using connecting wires.
        </li>
        <li>
          Note the position of the pointer in the voltmeter and record the
          reading.
        </li>
        <li>
          Repeat the experiment by taking different concentrations of zinc
          sulphate and copper sulphate solutions.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/">Online Labs)</a>
      </h2>

      <ul>
        <li>You can select the temperature using the slider.</li>
        <li>You can select the anode from ‘Select Electrode’ dropdown list.</li>
        <li>
          You can select the concentration of the electrolyte in the anodic part
          using the slider.
        </li>
        <li>Now, select the cathode from ‘Select Electrode’ dropdown list.</li>
        <li>
          To select the concentration of the electrolyte in the cathodic part
          use its slider.
        </li>
        <li>You can see the value of emf of each cell on the voltmeter.</li>
        <li>
          You can also see the chemical reactions and the equation to calculate
          the EMF of the cell on the left side menu.
        </li>
        <li>To redo the experiment anytime, click on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations&nbsp;</h1>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
      >
        <tbody>
          <tr>
            <td>
              <strong>
                Concentration of ZnSO<sub>4</sub> solution (M)
              </strong>
            </td>
            <td>
              <strong>
                Concentration of CuSO<sub>4</sub> solution (M)
              </strong>
            </td>
            <td>
              <strong>EMF of the Cell (V)</strong>
            </td>
          </tr>
          <tr>
            <td>1 M</td>
            <td>1 M</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>1 M</td>
            <td>0.5 M</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>1 M</td>
            <td>0.025 M</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>1 M</td>
            <td>0.0125 M</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>0.5 M</td>
            <td>1 M</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>0.025 M</td>
            <td>1 M</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>0.0125 M</td>
            <td>1 M</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Conclusion</h1>

      <p>
        EMF of the cell increases with decrease in concentration of the
        electrolyte around the anode and increase in concentration of the
        electrolyte around cathode.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          The concentration of copper sulphate and zinc sulphate should neither
          be too low nor too high.
        </li>
        <li>
          Clean the zinc strip and copper strip with sand paper before use.
        </li>
        <li>
          Connect the copper strip to the positive terminal and the zinc strip
          to the negative terminal of the voltmeter.
        </li>
        <li>The two half cells should be connected using a salt bridge.</li>
        <li>Note the reading only when the pointer becomes stable. &nbsp;</li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Determination of EMF of a Cell.
          Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=153&cnt=2
        </Typography>
      </div>
    </div>
  );
}
