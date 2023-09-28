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
        <li>Desi ghee</li>
        <li>Vanaspati ghee</li>
        <li>Refined oil- Cotton seed oil &amp; Linseed oil</li>
      </ul>

      <h3 className={classes.secondaryTag}>Reagents</h3>

      <ul>
        <li>Water</li>
        <li>Alcohol</li>
        <li>Chloroform</li>
        <li>
          Potassium bisulphate (KHSO<sub>4</sub>) crystals
        </li>
        <li>Conc. HCl</li>
        <li>2% furfural solution in alcohol</li>
        <li>Huble’s reagent</li>
      </ul>

      <h2 className={classes.secondaryTag}>Apparatus</h2>

      <ul>
        <li>Test tube</li>
        <li>Dropper</li>
        <li>Filter paper</li>
      </ul>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <h3 className={classes.secondaryTag}>
        <strong>Solubility test</strong>
      </h3>

      <p>
        Shake a small amount of the given sample with 5 ml each of water,
        alcohol and chloroform in three test tubes.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Observation and Inference</strong>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
          height="246"
          width="562"
        >
          <tbody>
            <tr>
              <td>SI. No.</td>
              <td>&nbsp;Solvent</td>
              <td>&nbsp;Observation</td>
              <td>&nbsp;Inference</td>
            </tr>
            <tr>
              <td rowspan="2">
                1.
              </td>
              <td rowspan="2">
                Water
              </td>
              <td>Sample is immiscible.</td>
              <td rowspan="1">
                Oil or fat is present.
              </td>
            </tr>
            <tr>
              <td>Sample is miscible.</td>
              <td rowspan="1">Oil or fat is absent.</td>
            </tr>
            <tr>
              <td rowspan="2">
                2.
              </td>
              <td rowspan="2">
                Alcohol
              </td>
              <td>Sample forms a lower layer which dissolves on heating.</td>
              <td rowspan="1">
                Oil or fat is present.
              </td>
            </tr>
            <tr>
              <td>Sample does not dissolve even on heating.</td>
              <td rowspan="1">Oil or fat is absent.</td>
            </tr>
            <tr>
              <td rowspan="2">
                3.
              </td>
              <td rowspan="2">
                Chloroform
              </td>
              <td>Sample is miscible.</td>
              <td rowspan="1">Oil or fat is present.</td>
            </tr>
            <tr>
              <td>Sample is immiscible.</td>
              <td rowspan="1">&nbsp;Oil or fat is absent.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Transluscent Spot test</strong>
      </h3>

      <p>
        Place a little of the substance on a filter paper and press it on the
        folds of the filter paper and unfold the filter paper.
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
              <td>SI. No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Desi ghee</td>
              <td>&nbsp;Transluscent spot appears on the filter paper.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Vanaspati ghee</td>
              <td>&nbsp;Transluscent spot appears on the filter paper.</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Refined oil</td>
              <td>&nbsp;Transluscent spot appears on the filter paper.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>
        On unfolding the filter paper, the appearance of transluscent spot on
        the filter paper indicates the presence of oil or fat.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Acrolein test</strong>
      </h3>

      <p>
        Heat a little of the sample with some crystals of potassium bisulphate
        in a test tube.
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
              <td>
                <strong>SI. No.</strong>
              </td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Desi ghee</td>
              <td>&nbsp;A pungent irritating odour of acrolein.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Vanaspati ghee</td>
              <td>&nbsp;A pungent irritating odour of acrolein.</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Refined oil</td>
              <td>&nbsp;A pungent irritating odour of acrolein.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>
        A pungent irritating odour of acrolein confirms the presence of oil or
        fat.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Baudouin test</strong>
      </h3>

      <p>
        Take 5 ml of melted ghee in a test tube and add 5 ml of conc. HCl and
        2-3 drops of 2% furfural solution in alcohol in it. Shake the test tube
        well. Keep it aside for 5-10 minutes.
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
              <td>
                <strong>SI. No.</strong>
              </td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Vanaspati ghee</td>
              <td>&nbsp;Rose-red colour appears.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Desi ghee</td>
              <td>&nbsp;No formation of rose-red colour.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>
        Rose-red colour is formed due to the presence of seasame oil. Thus
        vanaspati ghee contains seasame oil whereas pure desi ghee does not
        contain seasame oil. So this test is used to distinguish between desi
        ghee and vanaspati ghee.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Huble’s test</strong>
      </h3>

      <p>
        Take two test tubes and label them as I and II. Put 3ml of chloroform
        into each test tube. Then add 3-4 drops of cotton seed oil into test
        tube I and linseed oil in test tube II. Shake the test tubes well and
        add 3 drops of Huble’s reagent in each test tube and observe the fading
        of violet colour in the test tubes.
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
              <td>
                <strong>SI. No.</strong>
              </td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Cotton seed oil</td>
              <td>&nbsp;Violet colour does not fade away.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Linseed oil</td>
              <td>&nbsp;Violet colour fade away.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        <strong>Inference</strong>
      </h3>

      <p>
        The violet colour of iodine fades away in test tube II, while, violet
        colour in test tube I does not fade away indicating that linseed oil is
        more unsaturated than cotton seed oil.
      </p>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs)
        </a>
      </h2>

      <p>You can select the test from ‘Select the test’ drop down list.</p>

      <p>
        <strong>Solubility Test</strong>
      </p>

      <p>
        You can select the solvent from ‘Select the solvent’ drop down list.
      </p>

      <p>
        <u>Water</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube containing desi ghee to drop water
          into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>
          Drag the dropper to the test tube containing vegetable ghee to drop
          water into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>
          Drag the dropper to the test tube containing refined oil to drop water
          into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Alcohol</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube containing desi ghee to drop alcohol
          into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube containing desi ghee to the burner to heat the
          contents of the test tube.
        </li>
        <li>
          Drag the dropper to the test tube containing vegetable ghee to drop
          alcohol into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube containing vegetable ghee to the burner to heat the
          contents of the test tube.
        </li>
        <li>
          Drag the dropper to the test tube containing refined oil to drop
          alcohol into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube containing refined oil to the burner to heat the
          contents of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Chloroform</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube containing desi ghee to drop
          chloroform into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>
          Drag the dropper to the test tube containing vegetable ghee to drop
          chloroform into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>
          Drag the dropper to the test tube containing refined oil to drop
          chloroform into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Translucent Spot Test</strong>
      </p>

      <p>You can select the sample from ‘Select the sample’ drop down list.</p>

      <p>
        <u>Desi Ghee</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the first filter paper to drop desi ghee into it.
        </li>
        <li>
          Drag the second filter paper towards the filter paper containing the
          sample to press the sample with it.
        </li>
        <li>Drag the filter paper towards the lighting candle.</li>
        <li>
          Move the filter paper over the flame, the light will be visible only
          through the spot formed by the ghee.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Vanaspati Ghee</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the first filter paper to drop vanaspati ghee into
          it.
        </li>
        <li>
          Drag the second filter paper towards the filter paper containing the
          sample to press the sample with it.
        </li>
        <li>Drag the filter paper towards the lighting candle.</li>
        <li>
          Move the filter paper over the flame, the light will be visible only
          through the spot formed by the ghee.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Refined Oil</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the first filter paper to drop refined oil into
          it.
        </li>
        <li>
          Drag the second filter paper towards the filter paper containing the
          sample to press the sample with it.
        </li>
        <li>Drag the filter paper towards the lighting candle.</li>
        <li>
          Move the filter paper over the flame, the light will be visible only
          through the spot formed by the oil.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Acrolein Test</strong>
      </p>

      <p>You can select the sample from ‘Select the sample’ drop down list.</p>

      <p>
        <u>Desi Ghee</u>
      </p>

      <ul>
        <li>
          Drag the spatula to the test tube to put potassium bisulphate crystals
          into desi ghee.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube to the burner to heat the contents of the test
          tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Vanaspati Ghee</u>
      </p>

      <ul>
        <li>
          Drag the spatula to the test tube to put potassium bisulphate crystals
          into vanaspati ghee.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube to the burner to heat the contents of the test
          tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Refined Oil</u>
      </p>

      <ul>
        <li>
          Drag the spatula to the test tube to put potassium bisulphate crystals
          into refined oil.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube to the burner to heat the contents of the test
          tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Baudouin Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tubes to drop Conc. HCl into desi ghee
          and vanaspati ghee respectively.
        </li>
        <li>
          Drag the dropper to the test tubes to drop 2% furfural solution in
          alcohol into desi ghee and vanaspati ghee respectively.
        </li>
        <li>Wait for some time to complete the reaction.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Hubble's Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube containing cotton seed oil to drop
          chloroform into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>
          Drag the dropper to the test tube containing cotton seed oil to drop
          Hubble's reagent into it.
        </li>
        <li>
          Drag the dropper to the test tube containing linseed oil to drop
          chloroform into it.
        </li>
        <li>Drag the test tube to shake the contents of the test tube.</li>
        <li>
          Drag the dropper to the test tube containing linseed oil to drop
          Hubble's reagent into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>To redo the experiment, click on the ‘Reset’ button.</p>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Handle the chemicals with care.</li>
        <li>Use lab coats and gloves while performing the experiment.</li>
        <li>Use droppers to take the reagents.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Qualitative Analysis of Oils and Fats.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=210&cnt=2
        </Typography>
      </div>
    </div>
  );
}
