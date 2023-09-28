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
import DecompositionPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-pro1.png';
import DecompositionPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Decomposition1/decomposition-pro2.gif';

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
      <h1 className={classes.headTag}>Materials required:</h1>

      <p>
        <img alt="" src={DecompositionPro1} />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>
          Take about 2g of ferrous sulphate crystals in a dry boiling tube and
          note the colour of the crystals.
        </li>
        <li>
          Hold the boiling tube with a test tube holder and heat the boiling
          tube over the flame of a burner.
        </li>
        <li>Smell the gas being emitted.</li>
        <li>Observe the colour of the crystals after heating.</li>
      </ul>

      <h2 className={classes.secondaryTag}>To use the simulator:</h2>

      <p>
        You can select the type of reaction form ‘Select the type of reaction’
        drop down list.
      </p>

      <p>
        <strong>Thermal Decomposition</strong>
      </p>

      <ul>
        <li>
          You can select the sample form ‘Select the sample’ drop down list.
        </li>
        <li>To start the experiment, click on the ‘Start’ button.</li>
        <li>
          To put copper carbonate into the test tube, drag the spatula over the
          test tube.
        </li>
        <li>To turn on the burner, click on the knob of the burner.</li>
        <li>
          To heat the contents of the test tube, drag the test tube over the
          burner.
        </li>
        <li>Wait for some time to complete the reaction.</li>
        <li>
          You can see the chemical equation of the corresponding reaction on the
          side menu.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Electrolytic Decomposition</strong>
      </p>

      <ul>
        <li>
          You can select the sample form ‘Select the sample’ drop down list.
        </li>
        <li>Adjust the resistance of the rheostat using the slider.</li>
        <li>To start/stop the experiment, click on the ‘Switch On’ button.</li>
        <li>
          You can see the chemical equation of the corresponding reaction on the
          side menu.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Photodecomposition</strong>
      </p>

      <ul>
        <li>
          You can select the sample form ‘Select the sample’ drop down list.
        </li>
        <li>Use the slider to select the power of light from the source.</li>
        <li>
          Use the slider to select the distance of the source from the sample.
        </li>
        <li>To start/stop the experiment, click on the ‘Start’ button.</li>
        <li>
          You can see the chemical equation of the corresponding reaction on the
          side menu.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
        <br />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Observations:</h1>

      <ul>
        <li>The ferrous sulphate crystals are light green in colour.</li>
        <li>
          The gas emitted has the characteristic odour of burning sulphur.
        </li>
        <li>On heating, the colour changes from light green to white.</li>
        <li>
          On further heating, the white substance changes to dark brown solid.
        </li>
      </ul>

      <h1 className={classes.headTag}>Inference:</h1>

      <p>
        <img alt="" src={DecompositionPro2} />
      </p>

      <ul>
        <li>
          Ferrous sulphate crystals contain water molecules (FeSO<sub>4</sub>.
          7H<sub>2</sub>O). On heating, ferrous sulphate crystals lose water and
          anhydrous ferrous sulphate (FeSO<sub>4</sub>) is formed. So their
          colour changes from light green to white.
        </li>
        <li>
          On further heating, anhydrous ferrous sulphate decomposes to form
          ferric oxide (Fe<sub>2</sub>O<sub>3</sub>), sulphur dioxide (SO
          <sub>2</sub>) and sulphur trioxide (SO<sub>3</sub>). So, the gas
          emitted smells like burning sulphur.&nbsp;
        </li>
      </ul>

      <ul>
        <li>
          In this reaction, the single reactant FeSO<sub>4 </sub>decomposes to
          form three different products. So, the reaction is a decomposition
          reaction.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>
          Do not point the mouth of the boiling tube at your neighbours or
          yourself.
        </li>
        <li>
          &nbsp;Waft gases emitted from ferrous sulphate on heating gently
          towards your nose holding the test tube at a distance. The gases SO
          <sub>2</sub> and SO<sub>3</sub> are very harmful, so do not take a
          deep breath when smelling the odour of the gases.
        </li>
        <li>Always use a test tube holder while heating the test tube.</li>
      </ol>

      <p>
        <strong>Let’s do the experiment!</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Decomposition Reaction. Retrieved 1
          April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=80&cnt=2
        </Typography>
      </div>
    </div>
  );
}
