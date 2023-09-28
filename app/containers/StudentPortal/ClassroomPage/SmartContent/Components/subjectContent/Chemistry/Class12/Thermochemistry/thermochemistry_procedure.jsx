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

import ThermochePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-pro1.png';
import ThermochePro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-pro2.png';
import ThermochePro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-pro3.png';
import ThermochePro4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-pro4.png';
import ThermochePro5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-pro5.png';
import ThermochePro6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-pro6.png';
import ThermochePro7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Thermochemistry1/thermoche-pro7.png';

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
      <h1 className={classes.headTag}>(A) Determination of Water Equivalent of Calorimeter</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <ul>
        <li>Calorimeter</li>
        <li>Wooden box with lid</li>
        <li>Stirrer &nbsp;</li>
        <li>Thermometer &nbsp;</li>
        <li>Distilled water</li>
        <li>Cotton &nbsp;</li>
        <li>250 ml beakers</li>
        <li>Hot plate</li>
        <li>
          Measuring
          jar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Using a measuring jar, take 50 ml of distilled water in the
          calorimeter.
        </li>
        <li>
          Using a thermometer, measure the temperature of water in the
          calorimeter. Let it be t<sub>1</sub> °C.
        </li>
        <li>
          Place the calorimeter in the wooden box and fill cotton in the space
          between the calorimeter and the wooden box to avoid heat loss.
        </li>
        <li>Now insert a stirrer in the calorimeter.</li>
        <li>
          Using the measuring jar, pour 50 ml of distilled water in a beaker.
        </li>
        <li>
          Heat water in the beaker to a temperature 10-20 °C (~47 °C) higher
          than that of room temperature.
        </li>
        <li>
          Stop heating and note the temperature of this warm water. Let it be t
          <sub>2</sub> °C.
        </li>
        <li>
          Add the warm water into the calorimeter without any loss of time.
        </li>
        <li>Immediately close the wooden box.</li>
        <li>Quickly insert the thermometer into the calorimeter.</li>
        <li>
          Now, stir the water using the stirrer and note the thermometer
          reading.
        </li>
        <li>
          Continue stirring until the temperature becomes constant. Let it be t
          <sub>3</sub> °C.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>Volume of water taken in the calorimeter = 50 ml</li>
      </ul>

      <p>
        Therefore, mass of water = 50 g (assuming specific density of water is
        unity)
      </p>

      <ul>
        <li>
          Temperature of water = t<sub>1</sub> °C
        </li>
        <li>Volume of warm water added = 50 ml</li>
        <li>Therefore mass of warm water = 50 g</li>
        <li>
          Temperature of warm water = t<sub>2</sub> °C
        </li>
        <li>
          Temperature after mixing = t<sub>3</sub> °C
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Calculations:</h2>

      <p>
        &nbsp;
        <br />
        <img
          alt=""
          src={ThermochePro1}
        />
      </p>

      <p>
        <img
          alt=""
          src={ThermochePro2}
        />
      </p>

      <h1 className={classes.headTag}>
        <img
          alt=""
          src={ThermochePro3}
        />
      </h1>

      <h1 className={classes.headTag}>
        (B) Determination of Enthalpy of Dissolution of Salt in Water at Room
        Temperature
      </h1>

      <h2 className={classes.secondaryTag}>Materials required</h2>

      <ul>
        <li>Calorimeter</li>
        <li>Wooden box with lid</li>
        <li>Stirrer &nbsp;</li>
        <li>Thermometer &nbsp;</li>
        <li>Distilled water</li>
        <li>Cotton &nbsp;</li>
        <li>Measuring jar</li>
        <li>Sample</li>
        <li>Ammonium chloride</li>
      </ul>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Using the measuring jar, take 50 ml of distilled water in the
          calorimeter.
        </li>
        <li>
          Note the temperature of water using the thermometer. Let it be t
          <sub>1</sub> °C.
        </li>
        <li>
          Place the calorimeter in the wooden box and fill cotton in the space
          between the calorimeter and the wooden box to avoid heat loss.
        </li>
        <li>Insert a stirrer in the calorimeter.</li>
        <li>Add 5 g of ammonium chloride into the calorimeter.</li>
        <li>Immediately close the wooden box.</li>
        <li>Quickly insert the thermometer into the calorimeter.</li>
        <li>
          Now stir the water using the stirrer and note the thermometer reading.
        </li>
        <li>
          Continue stirring until the temperature becomes constant. Let it be t
          <sub>2</sub> °C.
        </li>
        <li>At this temperature, the substance just dissolves.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>Weight of ammonium chloride dissolved, w = 5 g</li>
        <li>Volume of water taken in the calorimeter = 50 ml</li>
        <li>
          Therefore, mass of water taken in the calorimeter = 50 g (assuming
          specific density = 1)
        </li>
        <li>
          Temperature of water = t<sub>1</sub> °C
        </li>
        <li>
          Temperature after dissolving ammonium chloride = t<sub>2</sub> °C
        </li>
        <li>Water equivalent of calorimeter, W = 11.11 g</li>
        <li>Molecular mass of ammonium chloride, M = 53.49 g/mol</li>
      </ul>

      <h2 className={classes.secondaryTag}>Calculations</h2>

      <p>
        Assuming density and specific heat of the solution to be same as that of
        water, heat evolved or absorbed for dissolution of w g of the solute,
      </p>

      <p>
        <img
          alt=""
          src={ThermochePro4}
        />
      </p>

      <p>
        <img
          alt=""
          src={ThermochePro5}
        />
      </p>

      <p>
        <img
          alt=""
          src={ThermochePro6}
        />
      </p>

      <p>
        <img
          alt=""
          src={ThermochePro7}
        />
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          Do not stir the liquid in the calorimeter vigorously because vigorous
          stirring does cause some increase in temperature.&nbsp;&nbsp;
        </li>
        <li>
          The space between the calorimeter and the wooden box should be filled
          with cotton to avoid heat loss.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Thermochemistry. Retrieved 29 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=8&sim=145&cnt=2
        </Typography>
      </div>
    </div>
  );
}
