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
import NewtonCoolingPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonCooling1/newtoncool-pro1.jpg';

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
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
  },
  headTag: {
    fontSize: 20,
  },
  secondaryTag: {
    fontSize: 17,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Materials Required:</h1>

      <ul>
        <li>Copper calorimeter</li>
        <li>Stirrer</li>
        <li>Wooden box with a clamp and stand</li>
        <li>A wooden lid having a hole in the middle.</li>
        <li>Thermometer</li>
        <li>Stop watch</li>
        <li>Hot water of about 80 °C.</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>
          Fill about 2/3rd of the copper calorimeter containing stirrer with hot
          water of about 80 °C.
        </li>
        <li>
          Place the calorimeter inside the wooden box. The space between the
          wooden box and calorimeter is filled with cotton to avoid heat loss.
        </li>
        <li>Close the wooden box with its lid.</li>
        <li>
          Suspend the thermometer inside the hot water in the calorimeter from
          the clamp and stand.
        </li>
        <li>Stir water continuously to make it cool uniformly.</li>
        <li>
          When the temperature of hot water falls to 70°C, start the stop watch.
        </li>
        <li>Note the temperature reading at every five minutes.</li>
        <li>
          Continue the time temperature observation till the temperature becomes
          constant.
        </li>
        <li>
          Plot a graph between time along X-axis and temperature along Y-axis.
          This graph is called the cooling curve.
        </li>
        <li>
          The graph is an exponential curve and it shows that the temperature
          falls quickly at the beginning and then slowly as the difference of
          temperature goes on decreasing. This verifies the Newton’s Law of
          cooling.
        </li>
        <li>
          <h1 className={classes.headTag}>
            Simulator Procedure (as performed through the{' '}
            <a href="http://amrita.olabs.co.in/" target="_blank">
              Online Labs
            </a>
            ):
          </h1>
        </li>
        <li>Select the material of the calorimeter from the drop down list.</li>
        <li>Select the radius of the calorimeter using the slider.</li>
        <li>Select the mass of the calorimeter using the slider.</li>
        <li>Select the liquid sample from the drop down list.</li>
        <li>
          Select the temperature of the preheated liquid using the slider.
        </li>
        <li>Select the room temperature using the slider.</li>
        <li>Mass of the liquid is fixed as 250 g.</li>
        <li>
          Click on the ‘START’ button on the timer to start/stop the experiment.
        </li>
        <li>
          Click on the ‘Show cross section’ button to view the cross section
          area.
        </li>
        <li>Click on the ‘Show graph’ button to view the graph.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
        <li>
          <h1 className={classes.headTag}>
            Procedure to use the spreadsheet in the Simulator
          </h1>
        </li>
        <li>
          Click on the the + icon in the bottom portion to add new rows in the
          spredsheet.
        </li>
        <li>
          Select the row and click on the - icon in the bottom portion to delete
          the selected row in the spredsheet.
        </li>
        <li>
          Enter the observation values in the corresponding columns by doing the
          simulator repeatedly.
        </li>
        <li>
          The end column (Difference of temperature) will get filled up
          automatically.
        </li>
        <li>
          Observe the values and study the learning outcomes of the experiment.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations:</h1>

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
              <td>Sl. No.</td>
              <td>
                <p>Time for cooling,</p>

                <p>t (mt.)</p>
              </td>
              <td>
                <p>Temperature of water in calorimeter,</p>

                <p>
                  T(<sup>o</sup>C)
                </p>
              </td>
              <td>
                <p>Temperature of water in enclosure,</p>

                <p>
                  T<sub>0</sub>&nbsp;(<sup>o</sup>C)
                </p>
              </td>
              <td>
                <p>Difference of temperature,</p>

                <p>
                  (T-T<sub>0</sub>) (<sup>o</sup>C)
                </p>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>70</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>4</td>
              <td>3</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>5</td>
              <td>4</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>6</td>
              <td>5</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>7</td>
              <td>6</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>8</td>
              <td>7</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>9</td>
              <td>8</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Calculations:</h1>

      <ul>
        <li>
          Temperature of water in the enclosure is found to be a constant. If
          not, then take its mean as T<sub>0</sub>.
        </li>
        <li>
          From the observations, we can calculate the temperature difference
          (T-T<sub>0</sub>).
        </li>
        <li>
          Now, plot a graph between time (t) and temperature (T), taking time
          along X axis and temperature along Y axis.&nbsp;
        </li>
      </ul>

      <p>
        <img alt="" src={NewtonCoolingPro1} />
      </p>

      <h1 className={classes.headTag}>Results:</h1>

      <p>The cooling curve of the liquid is plotted.</p>

      <p>
        The temperature falls quickly in the beginning and then slowly as the
        difference of temperature goes on decreasing.
      </p>

      <p>This is in agreement with Newton’s Law of cooling.</p>

      <p>&nbsp;</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag} className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Newton's Law of Cooling(Thermal
          Radiation). Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=21&cnt=2
        </Typography>
      </div>
    </div>
  );
}
