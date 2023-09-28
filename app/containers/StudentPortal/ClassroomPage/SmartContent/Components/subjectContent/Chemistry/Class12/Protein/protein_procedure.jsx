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

      <h3 className={classes.secondaryTag}>Samples</h3>

      <ul>
        <li>&nbsp;Egg albumin</li>
        <li>Gelatin</li>
      </ul>

      <h3 className={classes.secondaryTag}>Reagents</h3>

      <ul>
        <li>NaOH solution</li>
        <li>
          1% CuSO<sub>4</sub> solution
        </li>
        <li>
          Conc. HNO<sub>3</sub>
        </li>
        <li>Ninhydrin solution</li>
        <li>Millon’s reagent</li>
      </ul>

      <h3 className={classes.secondaryTag}>Apparatus</h3>

      <ul>
        <li>Test tube</li>
        <li>Dropper</li>
      </ul>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <h3 className={classes.secondaryTag}>
        <strong>Biuret test</strong>
      </h3>

      <p>
        Take a small quantity of the dispersion of the sample in a test tube and
        add 2 ml of NaOH solution into it. Now add 4-5 drops of 1% CuSO
        <sub>4</sub> solution and warm the mixture for about 5 minutes.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Observation</strong>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          width="500"
        >
          <tbody>
            <tr>
              <td>SI&nbsp;No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Egg albumin dispersion</td>
              <td>&nbsp;Bluish violet colour is formed.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Gelatin dispersion</td>
              <td>&nbsp;Bluish violet colour is formed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>Bluish violet colouration indicates the presence of protein.</p>

      <h3 className={classes.secondaryTag}>
        <strong>Xanthoproteic test</strong>
      </h3>

      <p>
        Take about 2 ml of the sample in a test tube and add few drops of conc.
        HNO<sub>3</sub> into it and heat the test tube.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Observation</strong>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          width="500"
        >
          <tbody>
            <tr>
              <td>SI&nbsp;No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Egg albumin dispersion</td>
              <td>&nbsp;A yellow precipitate is formed.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Gelatin dispersion</td>
              <td>&nbsp;A yellow precipitate is formed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>Yellow precipitate indicates the presence of protein.</p>

      <h3 className={classes.secondaryTag}>
        <strong>Ninhydrin test</strong>
      </h3>

      <p>
        Take 2 ml of the sample in a test tube and add 3-4 drops of Ninhydrin
        solution and boil the contents.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Observation</strong>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          width="500"
        >
          <tbody>
            <tr>
              <td>SI&nbsp;No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Egg albumin dispersion</td>
              <td>&nbsp;Intense blue colour is formed.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Gelatin dispersion</td>
              <td>&nbsp;Intense blue colour is formed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>Intense blue colouration confirms the presence of protein.</p>

      <h3 className={classes.secondaryTag}>
        <strong>Millon’s test</strong>
      </h3>

      <p>
        Take 1-2 ml of the sample in a test tube and add 2 drops of Millon’s
        reagent.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Observation</strong>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          width="500"
        >
          <tbody>
            <tr>
              <td>SI&nbsp;No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Egg albumin dispersion</td>
              <td>
                &nbsp;White precipitate which changes to brick red on boiling.
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Gelatin dispersion</td>
              <td>&nbsp;No characteristic change.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>
        White precipitate which changes to brick red on boiling indicates the
        presence of protein.
      </p>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <p>You can select the test from ‘Select the test’ drop down list.</p>

      <p>
        <strong>Biuret Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tubes to drop NaOH solution into tubes A
          and B respectively.
        </li>
        <li>
          Drag the dropper to the test tubes to drop 1% copper sulphate solution
          into tubes A and B respectively.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag test tube A to the burner to heat the contents of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag test tube B to the burner to heat the contents of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Xanthoproteic Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tubes to drop Conc. Nitric acid into
          tubes A and B respectively.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag test tube A to the burner to heat the contents of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag test tube B to the burner to heat the contents of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Ninhydrin Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tubes to drop Ninhydrin solution into
          tubes A and B respectively.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag test tube A to the burner to heat the contents of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the test tube B to the burner to heat the contents of the test
          tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Millon’s Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube A to drop Millon’s reagent into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to the test tube B to drop Millon’s reagent into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube A to the burner to heat the contents of the test
          tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the test tube B to the burner to heat the contents of the test
          tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>To redo the experiment, click on the ‘Reset’ button.</p>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instruction.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Handle the chemicals with care.</li>
        <li>Heating and Boiling should be done very carefully.</li>
        <li>Use droppers to take reagents from the bottles.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Qualitative Analysis of Proteins.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=140&cnt=2
        </Typography>
      </div>
    </div>
  );
}
