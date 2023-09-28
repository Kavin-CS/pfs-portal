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
import MeltingProcedure1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/meltingProcedure1.jpg';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Materials Required</h1>

        <p>
          <img alt="" src={MeltingProcedure1} />
        </p>

        <h1 className={classes.headTag}>The Procedure</h1>

        <h2 className={classes.secondaryTag}>Real lab procedure</h2>

        <ul>
          <li>First powder the crystalline substance.</li>
          <li>Take a capillary tube and seal one end by heating it.</li>
          <li>
            Fill the capillary tube with the substance. To fill the tube, make a
            heap of the powdered substance on the porous plate. Push one end of
            the capillary tube into the heap. Some of the substance will enter
            the capillary tube.
          </li>
          <li>
            Now tap the sealed end of the capillary tube on the porous plate
            gently. Fill the capillary tube upto 2-3 mm.
          </li>
          <li>Attach the capillary tube to a thermometer using a thread.</li>
          <li>
            Take liquid paraffin in a beaker and place it over a piece of wire
            gauze placed over a tripod stand.
          </li>
          <li>
            Clamp the thermometer carrying the test tube to an iron stand and
            immerse them in the bath of liquid paraffin. The surface tension of
            the bath liquid is sufficient to hold the capillary tube in
            position.
          </li>
          <li>
            Heat the beaker slowly while constantly stirring the contents using
            a stirrer to maintain a uniform temperature throughout.
          </li>
          <li>
            When the temperature is within 15<sup>o</sup> of the melting point
            of the pure substance, the flame is reduced. Then the temperature
            rises slowly.
          </li>
          <li>
            Note the temperature (t<sub>1</sub>) when the substance starts
            melting.
          </li>
          <li>
            Again note the temperature (t<sub>2</sub>) when the substance has
            completely melted.
          </li>
          <li>
            The average of the two readings gives the correct melting point of
            the substance.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>
          Simulator Procedure (as performed through the{' '}
          <a href="http://www.olabs.co.in/" target="_blank">
            Online Labs
          </a>
          )
        </h2>

        <ul>
          <li>
            You can select the compound from the ‘Select the compound’ drop down
            list.
          </li>
          <li>
            To start the experiment, click on the 'Start' button.&nbsp; You can
            also see the zoomed view of the compound and the thermometer.
          </li>
          <li>
            Now turn on the burner by clicking on the ‘Knob’ of the burner.
          </li>
          <li>The temperature begins to rise.</li>
          <li>
            Note the temperature ‘t<sub>1</sub>’ at which the compound starts
            melting.
          </li>
          <li>
            Similarly note the temperature ‘t<sub>2</sub>’ at which the compound
            has completely melted.
          </li>
          <li>Enter the values in the respective text boxes.</li>
          <li>
            The melting point of the compound is shown in the corresponding text
            box.
          </li>
          <li>
            You can select the actual compound from the ‘Select the actual
            compound’ drop down list.
          </li>
          <li>
            You can verify your result by clicking on the ‘Show chart’ button.
          </li>
          <li>To redo the experiment, click on the ‘Reset’ button.&nbsp;</li>
        </ul>

        <h1 className={classes.headTag}>Observations</h1>

        <p>Record your observations in the table given below.</p>

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
                <td colspan="2">Note the temperature when the substance;</td>
                <td rowspan="2">
                  Melting point of the given substance (t<sub>1</sub> + t
                  <sub>2</sub> / 2 (<sup>o</sup>C)
                </td>
              </tr>
              <tr>
                <td>
                  Starts melting t<sub>1</sub>(<sup>0</sup>C)
                </td>
                <td>
                  Has completely melted t<sub>2</sub> (<sup>0</sup>C)
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 className={classes.headTag}>&nbsp;Inference</h1>

        <p>
          Melting point of the given substance = ... <sup>o</sup>C
        </p>

        <h1 className={classes.headTag}>Precautions</h1>

        <ul>
          <li>
            Use dry and powdered sample for the determination of melting point.
          </li>
          <li>
            Keep the lower end of the capillary tube and the thermometer at the
            same level.
          </li>
          <li>
            Packing of the powder should be uniform without any large air gaps
            in between the solid particles.&nbsp;
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Melting Point of an Organic Compound..
          Retrieved 2 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=33&cnt=341
        </Typography>
      </div>
    </div>
  );
}
