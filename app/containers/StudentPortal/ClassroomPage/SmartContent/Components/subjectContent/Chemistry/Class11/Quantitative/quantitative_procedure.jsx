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

import QuantitativePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Quantitative1/quantitative-pro1.jpg';

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
      <h1 className={classes.headTag}>&nbsp;Materials required</h1>

      <p>
        <img alt="" src={QuantitativePro1} />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <h2 className={classes.secondaryTag}>Preparation of 250ml M/10 (0.1 M) sodium carbonate solution</h2>

      <ul>
        <li>
          &nbsp;Using an electronic balance. we’ll first weigh about 2.65g of
          sodium carbonate crystals in a weighing bottle and transfer these into
          a 250ml beaker.
        </li>
        <li>
          Wash the weighing bottle 2 or 3 times using distilled water and
          transfer all the washings into the beaker. Dissolve the sodium
          carbonate crystals in the beaker by gentle stirring with a clean glass
          rod.
        </li>
        <li>
          When the sodium carbonate crystals in the beaker dissolve completely,
          transfer the entire solution from the beaker into a 250ml standard
          flask through a funnel, using a glass rod.
        </li>
        <li>
          Wash the beaker 2 to 3 times with distilled water and transfer all the
          washings into the standard flask.
        </li>
        <li>
          Finally wash the funnel thoroughly with distilled water.&nbsp; This
          transfers the solution completely into the standard flask.
        </li>
        <li>
          Using a wash bottle, add enough distilled water to the standard flask
          so that the level is just below the calibration mark on it. Add the
          last few drops of distilled water with a pipette until the lower level
          of the meniscus just touches the mark on the standard flask.
        </li>
        <li>
          Stopper the measuring flask and shake gently to make the solution
          uniform throughout. &nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        <b>Determination of strength of the given hydrochloric acid</b>
      </h2>

      <ul>
        <li>Take a burette and wash it with distilled water.</li>
        <li>
          Rinse and fill the burette with the given hydrochloric acid and set
          the initial burette reading as zero.
        </li>
        <li>Clamp it vertically to the burette stand.</li>
        <li>
          Rinse the pipette first with water and then with the given sodium
          carbonate solution.
        </li>
        <li>
          Pipette out 20ml of the given sodium hydroxide solution into a conical
          flask and add 1-2 drops of methyl orange into it.
        </li>
        <li>
          Titrate it against the hydrochloric acid taken in the burette till the
          colour of the solution in the conical flask changes from&nbsp; yellow
          to light red.
        </li>
        <li>Now note down the final burette reading.</li>
        <li>Repeat the same procedure until concordant values are obtained.</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>
          You can select the type of titration from the 'Titration type' drop
          down list.
        </li>
        <li>Select the titrant from the 'Titrant' drop dowm list.</li>
        <li>Adjust the speed of the drops using the slider.</li>
        <li>Select the titrate from the 'Titrate' drop down list.</li>
        <li>Use the slider to select the molarity of the titrate.</li>
        <li>Use the slider to select the volume of the titrate.</li>
        <li>
          You can choose the indicator corresponding to each titration from the
          'Indicators' drop down list.
        </li>
        <li>
          You can see the zoomed view of the burette reading on the right side.
        </li>
        <li>
          Click on the 'Start' button or on the 'Nozzle' of the burette to start
          the titration.
        </li>
        <li>
          You can see the volume of the titrant used for titration by clicking
          on the 'Show the volume of titrant' check box.
        </li>
        <li>
          To stop the titration either click on the 'Stop' button or click on
          the 'Nozzle' of the burette.
        </li>
        <li>
          You can see the chemical equation of the reaction on the side menu.
        </li>
        <li>
          <you
            and=""
            boxes=""
            can=""
            chemical=""
            enter=""
            equation=""
            find=""
            from=""
            in=""
            li=""
            moles=""
            number=""
            of=""
            out=""
            respective=""
            text=""
            the=""
            titrant=""
            titrate=""
            values=""
            varify=""
          >
            {' '}
          </you>
          Find out the number of moles of the titrant (n1) and that of the
          titrate (n2) from the chemical equation and enter the values in the
          respective text boxes and verify the values.
        </li>
        <li>
          Calculate the molarity of the titrant using the given equation and
          enter the value in the corresponding text box and verify the value.
        </li>
        <li>The molar mass of the titrant is shown on the side menu.</li>
        <li>
          Calculate the strength of the given titrant (in g/lit) and enter the
          value in the corresponding text box and verify the result.
        </li>
        <li>To redo the experiment click the 'Reset' button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <p>
        Observations can be recorded in a tabular form as shown and the molarity
        of the given HCl can be calculated using the molarity equation.
      </p>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
      >
        <thead>
          <tr>
            <th scope="col">Sl. No.</th>
            <th scope="col">Initial Reading of Burette</th>
            <th scope="col">Final Reading of Burette</th>
            <th scope="col">Volume of HCl used (ml)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>2</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Result</h1>

      <p>
        The strength of given Hydrochloric acid solution is
        &nbsp;_________________g/litre.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Handle the apparatus and chemicals with care.</li>
        <li>
          Never close the pipette with the thumb. Close it with the index
          finger.
        </li>
        <li>
          Always keep the lower end of the pipette in the liquid while sucking
          it.
        </li>
        <li>Never pipette out hot or corrosive solutions.</li>
        <li>
          Do not blow out the last drop of the solution from the jet end of the
          pipette.
        </li>
        <li>
          Carefully fill the burette with the solution and see that the stopcock
          does not leak.
        </li>
        <li>Remove the funnel immediately after filling the burette.</li>
        <li>Do not allow any air bubbles to remain inside the burette.</li>
        <li>
          To take the reading, place the eye exactly at the level of the
          meniscus of the solution.
        </li>
        <li>
          There shoule not be any drops of solution at the tip of the burette at
          the end point.
        </li>
        <li>
          Place the titration flask containing the solution on a white tile to
          see the colour change correctly.
        </li>
        <li>
          Give rotary motion to the titration flask throughout the titration.
        </li>
        <li>
          Use one or two drops of the indicator that should be added using a
          glass dropper.
        </li>
        <li>
          The same number of drops of the indicator should be used for each
          titration.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Quantitative Estimation. Retrieved 30
          March 2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=109&cnt=2
        </Typography>
      </div>
    </div>
  );
}
