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

      <ul>
        <li>Burettes</li>
        <li>Conical flasks</li>
        <li>Stop-watch</li>
        <li>
          0.1M sodium thiosulphate (Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>)
          solution
        </li>
        <li>1M HCl</li>
        <li>Distilled water.</li>
      </ul>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Take five clean conical flasks and label them as A, B, C, D and E
          respectively.
        </li>
        <li>
          Add 10, 20, 30, 40 and 50 ml of 0.1M sodium thiosulphate solution to
          the flasks A, B, C, D and E respectively.
        </li>
        <li>
          Then add 40, 30, 20 and 10ml of distilled water to the flask A, B, C
          and D respectively so that volume of solution in each flask is 50ml.
        </li>
        <li>Add 10ml of 1M HCl to the conical flask A.</li>
        <li>
          When half of the HCl solution has been added to the conical flask,
          start the stop- watch immediately.
        </li>
        <li>
          Shake the contents of the conical flask and place it on a white tile
          that has a cross mark at the centre.
        </li>
        <li>
          Go on observing from the top of the flask and stop the stop-watch when
          the cross marks just becomes invisible. Note down the time.
        </li>
        <li>
          Repeat the experiment by adding 10ml of 1M HCl to flasks B, C, D and E
          respectively and record the time taken in each case for the cross to
          become just invisible.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Simulator Procedure (as performed through the Online Labs)</h2>

      <ul>
        <li>
          You can select the volume of sodium thiosulphate (Na<sub>2</sub>S
          <sub>2</sub>O<sub>3</sub>) solution using the slider.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour 0.1 M sodium
          thiosulphate (Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>) solution in
          it.
        </li>
        <li>
          Drag the measuring jar to the conical flask to pour distilled water in
          it.
        </li>
        <li>
          Click on the stopcock of the burette to add 5 ml hydrochloric acid
          into the conical flask.
        </li>
        <li>Click on the conical flask to shake it.</li>
        <li>
          Immediately, click on the stopcock of the burette to add another 5ml
          hydrochloric acid into the conical flask.
        </li>
        <li>
          You can get the time taken for the disappearance of the cross mark
          from the stopwatch.
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

      <h1 className={classes.headTag}>Observations</h1>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        height="157"
        width="800"
      >
        <tbody>
          <tr>
            <td>
              Flask No.&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              &nbsp;
            </td>
            <td>
              Volume of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> solution (ml)
            </td>
            <td>Volume of water (ml)</td>
            <td>Total volume of solution (ml)</td>
            <td>
              Conc. of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> solution (M)
            </td>
            <td>Volume of 1M HCl (ml)</td>
            <td>Time (t) taken for cross to become just invisible (s)</td>
            <td>
              <br />
              1/t
              <br />
              (s<sup>-1</sup>)
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>10</td>
            <td>40</td>
            <td>50</td>
            <td>0.02</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>B</td>
            <td>20</td>
            <td>30</td>
            <td>50</td>
            <td>0.04</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>C</td>
            <td>30</td>
            <td>20</td>
            <td>50</td>
            <td>0.06</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>D</td>
            <td>40</td>
            <td>10</td>
            <td>50</td>
            <td>0.08</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>E</td>
            <td>50</td>
            <td>0</td>
            <td>50</td>
            <td>0.1</td>
            <td>10</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Plotting the Graph</h1>

      <p>
        Plot a graph between 1/t (in s<sup>-1</sup>) and the conc. of Na
        <sub>2</sub>S<sub>2</sub>O<sub>3</sub> by taking 1/t along ordinate axis
        and conc. of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> along abscissa.
      </p>

      <h1 className={classes.headTag}>Conclusion</h1>

      <ul>
        <li>The graph obtained is a straight line.</li>
        <li>
          1/t is directly proportional to the concentration of Na<sub>2</sub>S
          <sub>2</sub>O<sub>3</sub>.
        </li>
        <li>
          Rate of the reaction between Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>{' '}
          and HCl is directly proportional to the concentration of Na
          <sub>2</sub>S<sub>2</sub>O<sub>3</sub>, which is one of the reactant.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>The apparatus must be thoroughly clean.</li>
        <li>
          Measure the volumes of sodium thiosulphate solution, HCl and distilled
          water very accurately.
        </li>
        <li>Use the same tile with the cross-mark for all observations.</li>
        <li>
          Complete the experiment at one time only so that there is not much
          temperature variation.
        </li>
        <li>
          When half of the HCl has been added to sodium thiosulphate solution,
          start the stop-watch immediately.
        </li>
        <li>
          View the cross-mark through the reaction mixture from top to bottom
          and from same height for all the observations.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Kinetics Study on the Reaction between
          Sodium Thiosulphate and Hydrochloric Acid. Retrieved 29 March 2021,
          from amrita.olabs.edu.in/?sub=73&brch=8&sim=142&cnt=2
        </Typography>
      </div>
    </div>
  );
}
