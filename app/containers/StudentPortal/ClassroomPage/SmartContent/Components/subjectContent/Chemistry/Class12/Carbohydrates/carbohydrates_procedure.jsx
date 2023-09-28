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
        <li>Glucose</li>
        <li>Sucrose</li>
        <li>Starch</li>
      </ul>

      <h3 className={classes.secondaryTag}>Reagents</h3>

      <ul>
        <li>Distilled water</li>
        <li>Molisch’s reagent</li>
        <li>Fehling’s solution A</li>
        <li>Fehling’s solution B</li>
        <li>Benedict’s reagent</li>
        <li>Tollen’s reagent</li>
        <li>Iodine solution</li>
      </ul>

      <h3 className={classes.secondaryTag}>Apparatus</h3>

      <ul>
        <li>Test tube</li>
        <li>Dropper</li>
        <li>Beaker</li>
      </ul>

      <h1 className={classes.headTag}>Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <h3 className={classes.secondaryTag}>Solubility test</h3>

      <p>
        Take a small amount of the given sample in a test tube and add 3 ml of
        distilled water into it and shake the test tube well.
      </p>

      <h3 className={classes.secondaryTag}>Observation</h3>

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
              <td>SI No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Glucose</td>
              <td>&nbsp;Soluble</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Sucrose</td>
              <td>&nbsp;Soluble</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Starch</td>
              <td>&nbsp;Insoluble</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Inference</h3>

      <p>
        Glucose and sucrose are soluble in water whereas starch is insoluble in
        water.
      </p>

      <h3 className={classes.secondaryTag}>Molisch’s test</h3>

      <p>
        Take about 2 ml of aqueous solution of the sample in a test tube and add
        few drops of Molisch’s reagent into it. Pour 1 ml conc. H<sub>2</sub>SO
        <sub>4</sub> slowly along the side of the test tube.
      </p>

      <h3 className={classes.secondaryTag}>Observation</h3>

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
              <td>SI No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Glucose</td>
              <td>
                &nbsp;A red violet (purple) ring is formed at the junction of
                two layers.
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Sucrose</td>
              <td>
                &nbsp;A red violet (purple) ring is formed at the junction of
                two layers.
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Starch</td>
              <td>
                &nbsp;A red violet (purple) ring is formed at the junction of
                the two layers.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>&nbsp;Inference</h3>

      <p>Presence of carbohydrate is confirmed.</p>

      <h3 className={classes.secondaryTag}>Fehling’s test</h3>

      <p>
        Take 2 ml of aqueous solution of the sample in a test tube and add 1-2
        ml each of Fehling’s solution A and Fehling’s solution B into it. Keep
        the test tube in a boiling water bath.
      </p>

      <h3 className={classes.secondaryTag}>Observation</h3>

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
              <td>SI No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Glucose</td>
              <td>
                &nbsp;A reddish precipitate is formed.
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Sucrose</td>
              <td>
                &nbsp;No formation of reddish precipitate.
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Starch</td>
              <td>
                &nbsp;No formation of reddish precipitate.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Inference</h3>

      <p>Reddish precipitate indicates the presence of a reducing sugar.</p>

      <h3 className={classes.secondaryTag}>Benedict’s test</h3>

      <p>
        Take 1-2 ml of aqueous solution of the sample in a test tube and add 1-2
        ml of Benedict’s reagent. Keep the test tube in a boiling water bath.
      </p>

      <h3 className={classes.secondaryTag}>Observation</h3>

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
              <td>SI No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Glucose</td>
              <td>
                &nbsp;A reddish precipitate is formed.
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Sucrose</td>
              <td>
                &nbsp;No formation of reddish precipitate.
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Starch</td>
              <td>
                &nbsp;No formation of reddish precipitate.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>&nbsp;Inference</h3>

      <p>Reddish precipitate indicates the presence of a reducing sugar.</p>

      <h3 className={classes.secondaryTag}>Tollen’s test</h3>

      <p>
        Take 2-3 ml of aqueous solution of the sample in a test tube and add 2-3
        ml of Tollen’s reagent. Keep the test tube in a boiling water bath for
        10 minutes.
      </p>

      <h3 className={classes.secondaryTag}>Observation</h3>

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
              <td>SI No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Glucose</td>
              <td>
                &nbsp;A shinning silver mirror is formed.
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Sucrose</td>
              <td>
                &nbsp;No formation of silver mirror.
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Starch</td>
              <td>
                &nbsp;No formation of silver mirror.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Inference</h3>

      <p>
        A shinning silver mirror indicates the presence of a reducing sugar.
      </p>

      <h3 className={classes.secondaryTag}>Iodine test</h3>

      <p>
        Take a small amount of aqueous solution of the sample in a test tube and
        add 1-2 drops of iodine solution into it.
      </p>

      <h3 className={classes.secondaryTag}>Observation</h3>

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
              <td>SI No.</td>
              <td>&nbsp;Sample</td>
              <td>&nbsp;Observation</td>
            </tr>
            <tr>
              <td>1.</td>
              <td>&nbsp;Glucose</td>
              <td>&nbsp;No characteristic change.</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>&nbsp;Sucrose</td>
              <td>&nbsp;No characteristic change.</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>&nbsp;Starch</td>
              <td>&nbsp;A blue colour is formed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Inference</h3>

      <p>Appearance of blue colouration indicates the presence of starch.</p>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <p>You can select the test from ‘Select the test’ drop down list.</p>

      <p>
        <strong>Solubility Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper towards the test tubes to drop water into test tubes
          A, B, C and D respectively.
        </li>
        <li>
          Drag the test tubes A, B, C and D respectively to shake the test tubes
          well.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Molisch’s Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper towards the test tubes to drop Molisch’s reagent into
          test tubes A, B, C and D respectively.
        </li>
        <li>
          Drag test tube A towards the reagent bottles to place it in a slanting
          position.
        </li>
        <li>
          Drag the dropper towards test tube A to drop Conc. H<sub>2</sub>SO
          <sub>4</sub> slowly along the side of the test tube.
        </li>
        <li>
          Drag the test tube B towards the reagent bottles to place it in a
          slanting position.
        </li>
        <li>
          Drag the dropper towards test tube B to drop Conc. H<sub>2</sub>SO
          <sub>4</sub> slowly along the side of the test tube.
        </li>
        <li>
          Drag the test tube C towards the reagent bottles to place it in a
          slanting position.
        </li>
        <li>
          Drag the dropper towards test tube C to drop Conc. H<sub>2</sub>SO
          <sub>4</sub> slowly along the side of the test tube.
        </li>
        <li>
          Drag test tube D towards the reagent bottles to place it in a slanting
          position.
        </li>
        <li>
          Drag the dropper towards test tube D to drop Conc. H<sub>2</sub>SO
          <sub>4</sub> slowly along the side of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Fehling’s Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper towards the test tubes to drop Fehling’s solution A
          into test tubes A, B, C and D respectively.
        </li>
        <li>
          Drag the dropper towards the test tubes to drop Fehling’s solution B
          into test tubes A, B, C and D respectively.
        </li>
        <li>
          To place the test tubes in a water bath, click on the button ‘Place
          the test tubes in water bath’.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Benedict’s Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper towards the test tubes to drop Benedict’s reagent
          into the test tubes A, B, C and D respectively.
        </li>
        <li>
          To place the test tubes in water bath, click on the button ‘Place the
          test tubes in water bath’
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Tollen’s Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper towards the test tubes to drop Tollen’s reagent into
          test tubes A, B, C and D respectively.
        </li>
        <li>Click on the ‘Next’ button to go to the next step.</li>
        <li>
          To place the test tubes in water bath, click on the button ‘Place the
          test tubes in water bath’
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <strong>Iodine Test</strong>
      </p>

      <ul>
        <li>
          Drag the dropper towards the test tubes to drop iodine solution into
          test tubes A, B, C and D respectively.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>To redo the experiment, click on the ‘Reset’ button.</p>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Handle the chemicals with care.</li>
        <li>Heating should be done very carefully.</li>
        <li>Use droppers to take reagents from the bottles.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Qualitative Analysis of Carbohydrates.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=209&cnt=2
        </Typography>
      </div>
    </div>
  );
}
