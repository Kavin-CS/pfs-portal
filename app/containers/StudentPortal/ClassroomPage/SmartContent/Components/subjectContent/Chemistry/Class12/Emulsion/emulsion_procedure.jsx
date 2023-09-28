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
        <li>Castor oil</li>
        <li>Cotton seed oil</li>
        <li>Coconut oil</li>
        <li>Kerosene oil</li>
        <li>Mustard oil</li>
        <li>1% soap solution</li>
        <li>5 ml pipettes</li>
        <li>5 stoppered bottles</li>
        <li>Measuring cylinders</li>
        <li>Stop watch</li>
      </ul>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>Take 5 clean stoppered bottles labelled as A, B, C, D and E.</li>
        <li>
          Take 5 ml of castor oil in bottle A, 5 ml of cotton seed oil in bottle
          B, 5 ml of coconut oil in bottle C, 5 ml of kerosene oil in bottle D
          and 5 ml of mustard oil in bottle E.
        </li>
        <li>Add 50 ml of distilled water to each bottle.</li>
        <li>
          Take bottle A, stopper it and shake vigorously for one minute and then
          allow it to stand.
        </li>
        <li>Note down the time taken for the two layers to separate out.</li>
        <li>
          Similarly take the bottles B, C, D and E and note the time taken for
          the separation of the two layers in each case.
        </li>
        <li>
          Now add 10 drops of 1% soap solution to bottle A and note down the
          time taken for the separation of the two layers.
        </li>
        <li>
          Similarly add 10 drops of 1% soap solution to the other bottles and
          note down the time taken for the separation of the two layers.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <ul>
        <li>You can select the oil from ‘Select the oil’ drop down list.</li>
        <li>
          You can select the emulsifying agent from ‘Select the emulsifying
          agent’ drop down list.
        </li>
        <li>You can select the volume of oil using the slider.</li>
        <li>You can select the volume of water using the slider.</li>
        <li>
          You can select the number of drops of the emulsifying agent using the
          slider.
        </li>
        <li>Drag the measuring jar to the bottle to add water to oil.</li>
        <li>Drag the bottle to shake it for 1 minute.</li>
        <li>You can see the separation of oil layer from the water layer.</li>
        <li>
          You can measure the time taken for the separation of two layers (oil
          layer and water layer) from the stopwatch.
        </li>
        <li>
          Drag the dropper to the beaker to take the emulsifying agent in it and
          drag it to the bottle to drop the emulsifying agent into the bottle.
        </li>
        <li>Drag the bottle to shake it for 1 minute.</li>
        <li>You can see the separation of oil layer from the water layer.</li>
        <li>
          You can measure the time taken for the separation of two layers (oil
          layer and water layer) from the stopwatch.
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>'HELP'</strong> button to
        see the instructions.
        <br />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Observations</h1>

      <p>Observations can be recorded as shown.</p>

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
                Bottle
              </td>
              <td rowspan="2">
                Name of the Oil
              </td>
              <td colspan="2">
                Time taken for the separation of two layers
              </td>
            </tr>
            <tr>
              <td>Without soap (in s)</td>
              <td>With soap (in s)</td>
            </tr>
            <tr>
              <td>A</td>
              <td>Castor oil</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>B</td>
              <td>Cotton seed oil</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Coconut oil</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>D</td>
              <td>Kerosene oil</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>E</td>
              <td>Mustard oil</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Add equal number of drops of soap solution to all the bottles.</li>
        <li>Each bottle should be shaken vigorously and for the same time.</li>
        <li>The time should be recorded carefully.</li>
        <li>
          Start the stopwatch immediately after shaking is stopped and stop it
          immediately when the two layers just separate.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Effectiveness of Different Common Oils
          in Forming Emulsions. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=35&cnt=2
        </Typography>
      </div>
    </div>
  );
}
