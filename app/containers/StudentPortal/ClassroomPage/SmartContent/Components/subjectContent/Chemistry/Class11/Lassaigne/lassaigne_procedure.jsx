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

import LassaignePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro1.jpg';
import LassaignePro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro2.jpg';
import LassaignePro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro3.jpg';
import LassaignePro4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro4.jpg';

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
      <h1 className={classes.headTag}>Preparation of Sodium Fusion Extract (Lassaigne’s Extract)</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img alt="" src={LassaignePro1} width="75%;" />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>Take a small piece of dry sodium&nbsp; in a fusion tube.</li>
        <li>
          Heat the tube slightly on a Bunsen burner so that the sodium melts to
          a shining globule.
        </li>
        <li>Add a pinch of the organic compound.</li>
        <li>
          Heat it slowly to start with so that the compound reacts with sodium
          metal.
        </li>
        <li>Now heat the tube strongly till it becomes red hot.</li>
        <li>
          Plunge the red hot tube into a china dish containing distilled water.
        </li>
        <li>Crush the contents with a glass rod and heat to boiling point.</li>
        <li>Stop heating and remove the insoluble matter by filtration.</li>
        <li>The filtrate is called Lassaigne's Extract.</li>
      </ul>

      <h1 className={classes.headTag}>Detection of Nitrogen</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={LassaignePro2}
          width="70%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure&nbsp;</h2>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
      >
        <thead>
          <tr>
            <th
              align="center"
              scope="col"
              
              width="500"
            >
              Experiment
            </th>
            <th align="center" scope="col" width="150">
              Observation
            </th>
            <th align="center" scope="col" width="150">
              Inference
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              To a small portion of the Lassaigne’s extract, add 2 ml of freshly
              prepared ferrous sulphate solution and heat. Now add 2-3 drops of
              ferric chloride solution and acidify with conc. hydrochloric acid
              .
            </td>
            <td>Appearance of a prussian blue coloration</td>
            <td>Presence of Nitrogen in the compound.</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Detection of Sulphur</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={LassaignePro3}
          width="70%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure&nbsp;</h2>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
      >
        <thead>
          <tr>
            <th align="center" scope="col">
              Test
            </th>
            <th align="center" scope="col">
              Experiment
            </th>
            <th align="center" scope="col">
              Observation
            </th>
            <th align="center" scope="col">
              Inference
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sodium nitroprusside Test</td>
            <td>
              To a small portion of Lassaigne's extract, add a few drops of
              sodium nitroprusside solution.
            </td>
            <td>Appearance of a purple colouration.</td>
            <td>Presence of sulphur in the compound.</td>
          </tr>
          <tr>
            <td>Lead acetate Test</td>
            <td>
              Acidify a small portion of Lassaigne's extract with a few drops of
              acetic acid and add a few drops of lead acetate solution.
            </td>
            <td>A black precipitate forms.</td>
            <td>Presence of sulphur in the compound.</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Detection of Halogens</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img
          alt=""
          src={LassaignePro4}
          width="70%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>&nbsp;Real Lab Procedure&nbsp;</h2>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
      >
        <thead>
          <tr>
            <th align="center" scope="col">
              Test
            </th>
            <th align="center" scope="col">
              Experiment
            </th>
            <th align="center" scope="col">
              Observation
            </th>
            <th align="center" scope="col">
              Inference
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3">Silver nitrate Test</td>
            <td rowspan="3">
              To a small portion of Lassaigne's extract add 1 ml of conc. nitric
              acid and boil for some time. Cool the contents and to it add
              silver nitrate solution.
            </td>
            <td>A white precipitate soluble in ammonium hydroxide forms.</td>
            <td>Presence of chlorine in the&nbsp; compound.</td>
          </tr>
          <tr>
            <td>
              Pale yellow precipitate sparingly soluble in ammonium hydroxide
              forms.
            </td>
            <td>Presence of bromine in&nbsp; compound.</td>
          </tr>
          <tr>
            <td>Yellow precipitate insoluble in ammonium hydroxide forms.</td>
            <td>Presence of iodine in&nbsp; compound.</td>
          </tr>
          <tr>
            <td rowspan="2">Carbon disulphide Test</td>
            <td rowspan="2">
              Acidify a small portion of Lassaigne's extracts with dil. HCl and
              add a few drops of carbon disulphide. Now add freshly prepared
              chlorine water and shake vigorously.
            </td>
            <td>Appearance of orange colour in the carbon disulphide layer.</td>
            <td>Presence of bromine in&nbsp; compound.</td>
          </tr>
          <tr>
            <td>Appearance of violet colour in the carbon disulphide layer.</td>
            <td>Presence of iodine in&nbsp; compound.</td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the&nbsp;
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <h2 className={classes.secondaryTag}>Detection of Nitrogen</h2>

      <ul>
        <li>
          You can select the unknown element from the ‘Select the unknown
          element’ drop down list.
        </li>
        <li>
          Select the identification test from the ‘Select the identification
          test’ drop down list.
        </li>
        <li>
          To pour ferrous sulphate (FeSO<sub>4</sub>) solution into the
          Lassaigne’s extract, drag the test tube towards it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube over the Bunsen burner to heat it.</li>
        <li>Drag the test tube to place it back.</li>
        <li>
          To pour conc. HCl into the test tube containing Lassaigne’s extract,
          drag the dropper towards the test tube.
        </li>
        <li>
          To pour ferric chloride (FeCl<sub>3</sub>) solution into the test tube
          containing Lassaigne’s extract, drag the dropper towards the test
          tube.
        </li>
        <li>To see the inference, click on the inference icon.</li>
        <li>
          You can choose the correct answer from ‘Select the element’ drop down
          list.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Detection of Sulphur</h2>

      <ul>
        <li>
          You can select the unknown element from the ‘Select the unknown
          element’ drop down list.
        </li>
        <li>
          You can select the identification test from the ‘Select the
          identification test’ drop down list.
        </li>
        <li>
          You can select the identification method from the ‘Select the method’
          drop down list.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>a) Sodium nitroprusside test:</h3>

      <ul>
        <li>Lassaigne’s extract is taken in a test tube.</li>
        <li>
          Drag the dropper towards the test tube to pour the sodium
          nitroprusside solution into it.
        </li>
        <li>To see the inference, click on the inference icon.</li>
        <li>
          You can choose the correct answer from ‘Select the element’ drop down
          list.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h3 className={classes.secondaryTag}>b) Lead acetate test:</h3>

      <ul>
        <li>
          To pour acetic acid into the test tube containing Lassaigne’s extract,
          drag the test tube containing acetic acid towards it.
        </li>
        <li>
          To pour lead acetate solution into the test tube containing
          Lassaigne’s extract, drag the dropper towards the test tube.
        </li>
        <li>To see the inference, click on the inference icon.</li>
        <li>
          You can choose the correct answer from ‘Select the element’ drop down
          list.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Detection of Chlorine</h2>

      <h3 className={classes.secondaryTag}>Silver nitrate test</h3>

      <ul>
        <li>
          You can select the unknown element from the ‘Select the unknown
          element’ drop down list.
        </li>
        <li>
          You can select the identification test from the ‘Select the
          identification test’ drop down list.
        </li>
        <li>
          To pour conc. HNO<sub>3</sub> into the test tube containing
          Lassaigne’s extract, drag the test tube towards it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube over the Bunsen burner to heat it.</li>
        <li>Once done, drag the test tube to place it back.</li>
        <li>
          To pour silver nitrate (AgNO<sub>3</sub>) solution into the test tube
          containing Lassaigne’s extract, drag the dropper towards the test
          tube.
        </li>
        <li>
          To pour ammonium hydroxide (NH<sub>4</sub>OH) solution into the test
          tube containing Lassaigne’s extract, drag the dropper towards the test
          tube.
        </li>
        <li>To see the inference, click on the inference icon.</li>
        <li>
          You can choose the correct answer from ‘Select the element’ drop down
          list.
        </li>
        <li>You can click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Detection of Bromine and Iodine</h2>

      <ul>
        <li>
          You can select the unknown element from ‘Select the unknown element’
          drop down list.
        </li>
        <li>
          You can select the identification test from ‘Select the identification
          test’ drop down list.
        </li>
        <li>
          You can select the identification method from ‘Select the method’ drop
          down list.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>a) Silver nitrate test:</h3>

      <ul>
        <li>
          To pour conc. HNO<sub>3</sub> into the test tube containing
          Lassaigne’s extract, drag the test tube towards it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube over the Bunsen burner to heat it.</li>
        <li>Drag the test tube to place it back.</li>
        <li>
          To pour silver nitrate (AgNO<sub>3</sub>) solution into the test tube
          containing Lassaigne’s extract, drag the dropper towards the test
          tube.
        </li>
        <li>
          To pour ammonium hydroxide (NH<sub>4</sub>OH) solution into the test
          tube containing Lassaigne’s extract, drag the dropper towards the test
          tube.
        </li>
        <li>To see the inference, click on the inference icon.</li>
        <li>
          You can choose the correct answer from ‘Select the element’ drop down
          list.
        </li>
        <li>You can click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <h3 className={classes.secondaryTag}>b) Carbon disulphide test:</h3>

      <ul>
        <li>
          To pour dil. HCl into the test tube containing Lassaigne’s extract ,
          drag the dropper towards the test tube.
        </li>
        <li>
          To pour Carbon disulphide into the test tube containing Lassaigne’s
          extract , drag the dropper towards the test tube.
        </li>
        <li>
          To pour chlorine water into the test tube containing Lassaigne’s
          extract, drag the test tube towards it.
        </li>
        <li>
          Drag the test tube to take it from the test tube stand and to shake it
          well.
        </li>
        <li>To see the inference, click on the inference icon.</li>
        <li>
          You can choose the correct answer from ‘Select the element’ drop down
          list.
        </li>
        <li>You can click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘HELP’ button to see the
        instructions.
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ul>
        <li>
          Sodium metal is highly reactive. When exposed to air, it reacts even
          with the moisture present in the atmosphere. It also reacts with the
          sweat of hands. Hence do not hold it with hands. Always use forceps
          while handling sodium.
        </li>
        <li>
          Before using sodium, press it within the folds of the filter paper to
          remove kerosene oil.
        </li>
        <li>
          Use dry ignition tubes for sodium fusion. Sodium reacts with water
          violently.
        </li>
        <li>
          Put the unused sodium piece back in the bottle containing kerosene
          oil. Do not throw it into the sink.
        </li>
        <li>
          Repeat the process of sodium fusion with three ignition tubes. This is
          to ensure that the fusion has taken place.
        </li>
        <li>
          After immersing the red hot ignition tube in water, break it with a
          glass rod gently. Boil the contents for 2-3 minutes so as to extract
          the soluble sodium salts in water.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Elements: Lassaigne's Test.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=149&cnt=2
        </Typography>
      </div>
    </div>
  );
}
