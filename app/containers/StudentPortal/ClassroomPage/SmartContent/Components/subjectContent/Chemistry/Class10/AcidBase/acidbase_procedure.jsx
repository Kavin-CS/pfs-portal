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
import AcidBasePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/AcidBase1/acidbase-pro1.png';


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
      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          alt=""
          src={AcidBasePro1}
          width="91%"
        />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <h2 className={classes.secondaryTag}>&nbsp;To perform in real lab:</h2>

      <p>&nbsp;Action of litmus solution with acid and base.</p>

      

      <div>
        <table
          align="center"
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="top" width="350">
                <h3 className={classes.secondaryTag}>Experiment</h3>
              </td>
              <td valign="top" width="200">
                <h3 className={classes.secondaryTag}>Observation</h3>
              </td>
              <td valign="top" width="280">
                <h3 className={classes.secondaryTag}>Inference</h3>
              </td>
            </tr>
            <tr>
              <td valign="top" width="300">
                <p>
                  Take a little amount of blue and red litmus solutions
                  separately in two test tubes. Add few drops of HCl to each
                  test tube using a dropper.
                </p>
              </td>
              <td valign="middle" width="200">
                <p>Blue litmus turns red.</p>
              </td>
              <td valign="middle" width="280">
                <p>HCl is an acid having pH value below 7.</p>
              </td>
            </tr>
            <tr>
              <td valign="top" width="300">
                <p>
                  Take a little amount of blue and red litmus solutions
                  separately in two test tubes. Add few drops of NaOH to each
                  test tube using a dropper.
                </p>
              </td>
              <td valign="middle" width="200">
                <p>Red litmus turns blue.</p>
              </td>
              <td valign="middle" width="280">
                <p>
                  NaOH is an alkali having pH value more than 7.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        &nbsp;
        <br />
        The evolution of hydrogen gas can be seen by conducting the following
        experiments.
      </p>

      

      <div>
        <table
          align="center"
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="top" width="350">
                <h3 className={classes.secondaryTag}>Experiment</h3>
              </td>
              <td colspan="2" valign="top" width="200">
                <h3 className={classes.secondaryTag}>Observation</h3>
              </td>
              <td valign="top" width="283">
                <h3 className={classes.secondaryTag}>Inference</h3>
              </td>
            </tr>
            <tr>
              <td valign="top" width="366">
                <p>
                  Take some pieces of zinc metal in a boiling tube. Add few
                  drops of HCl into the boiling tube using a dropper. Then place
                  a dropper with a fine jet on the mouth of the tube. Heat the
                  boiling tube. Bring a burning matchstick near the mouth of the
                  fine jet.
                </p>
              </td>
              <td valign="top" width="204">
                <p>
                  A gas is evolved. It extinguishes the burning matchstick and
                  burns itself with mild explosion and produces a popping sound.
                </p>
              </td>
              <td colspan="2" valign="middle">
                <p>
                  The gas evolved is hydrogen which burns with mild explosion.
                </p>
              </td>
            </tr>
            <tr>
              <td valign="middle" width="366">
                <p>
                  Take some pieces of zinc metal in a boiling tube. Add few
                  drops of NaOH into the boiling tube using a dropper. Then
                  place a dropper with a fine jet on the mouth of the tube. Heat
                  the boiling tube. Bring a burning matchstick near the mouth of
                  the fine jet.
                </p>
              </td>
              <td valign="top" width="204">
                <p>
                  A gas is evolved. It extinguishes the burning matchstick and
                  burns itself with mild explosion and produces a popping sound.
                </p>
              </td>
              <td colspan="2" valign="middle">
                <p>
                  The gas evolved is hydrogen which burns with mild explosion.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Action of HCl on solid sodium carbonate</p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="top" width="350">
                <h3 className={classes.secondaryTag}>Experiment</h3>
              </td>
              <td colspan="2" valign="top" width="200">
                <h3 className={classes.secondaryTag}>Observation</h3>
              </td>
              <td valign="top" width="283">
                <h3 className={classes.secondaryTag}>Inference</h3>
              </td>
            </tr>
            <tr>
              <td valign="top" width="366">
                <p>
                  Take a small quantity of solid sodium carbonate in a flask.
                  Then add distilled water into it. Cork the flask with a double
                  bore cork and insert a thistle funnel into the flask. Then
                  place a beaker containing lime water near the flask. Then
                  insert one end of the delivery tube into the flask and the
                  other end into the beaker. Now add HCl into the flask through
                  the thistle funnel and observe the change in colour of the
                  lime water.
                </p>
              </td>
              <td valign="middle" width="204">
                <p>A gas is evolved which turns lime water turns milky.</p>
              </td>
              <td colspan="2" valign="middle">
                <p>
                  The gas produced is carbon dioxide due to the action of HCl on
                  Na<sub>2</sub>CO<sub>3</sub>, which turns lime water milky.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Action of NaOH on solid sodium carbonate</p>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="top" width="350">
                <h3 className={classes.secondaryTag}>Experiment</h3>
              </td>
              <td colspan="2" valign="top" width="200">
                <h3 className={classes.secondaryTag}>Observation</h3>
              </td>
              <td valign="top" width="283">
                <h3 className={classes.secondaryTag}>Inference</h3>
              </td>
            </tr>
            <tr>
              <td valign="top" width="366">
                <p>
                  Take a small quantity of solid sodium carbonate in a test tube
                  and add a little of NaOH solution into it. Then shake the test
                  tube well. Then add few drops of phenolphthalein into the test
                  tube.
                </p>
              </td>
              <td valign="middle" width="204">
                <p>The solution in the test tube turns pink.</p>
              </td>
              <td colspan="2" valign="middle">
                <p>
                  Both NaOH and Na<sub>2</sub>CO<sub>3</sub> are alkali so they
                  do not react but form alkaline solution. Phenolphthalein gives
                  pink colour in an alkaline medium.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Simulator Procedure:</h2>

      <p>
        You can select the sample using ‘Select the sample’ drop down list.
        <br />
        You can select the reactant by clicking on the corresponding icon.
      </p>

      <p>
        <br />
        <strong>Litmus solution (For Acid and Base)</strong>
      </p>

      <ul>
        <li>
          Drag the dropper towards the beaker and dip it in the sample to suck
          the sample solution.
        </li>
        <li>
          Drag the dropper containing sample towards the test tube containing
          red litmus solution to pour the sample.
        </li>
        <li>
          Again drag the dropper towards the beaker and dip it in the sample to
          suck the sample solution.
        </li>
        <li>
          Drag the dropper containing sample towards the test tube containing
          blue litmus solution to pour&nbsp; the sample.
        </li>
        <li>
          You can see the colour change of the litmus solution due to the
          addition of different sample.
        </li>
        <li>
          You can verify your result and can see the inference by clicking on
          the correct icon given under ‘Result’.
        </li>
        <li>Click on the 'Reset' button to restart the test.</li>
      </ul>

      <p>
        <strong>Zinc metal (For Acid and Base)</strong>
      </p>

      <ul>
        <li>
          To pour the sample into the test tube containing zinc metal, drag the
          beaker towards the test tube.
        </li>
        <li>
          To close the test tube, drag the single bored cork (in which a fine
          jet tube is inserted through the hole) towards the test tube.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>You can see that gas bubbles are evolved from the test tube.</li>
        <li>Now, drag the burning match stick over the fine jet tube.</li>
        <li>The flame dips out with a mild explosion.</li>
        <li>
          You can verify your result and can see the inference by clicking on
          the correct icon given under&nbsp; ‘Result’.
        </li>
        <li>Click on the 'Reset' button to restart the test.</li>
      </ul>

      <p>
        <strong>
          Solid Na<sub>2</sub>CO<sub>3</sub> (For Acid)
        </strong>
      </p>

      <ul>
        <li>
          To pour sample into the flask containing&nbsp; mixture of solid sodium
          carbonate and distilled water, drag the beaker towards the thistle
          funnel.
        </li>
        <li>
          You can see that gas bubbles are evolved from the flask and that turns
          lime water milky.
        </li>
        <li>
          You can verify your result and can see the inference by clicking on
          the correct icon given under ‘Result’.
        </li>
        <li>Click on the 'Reset' button to restart the test.</li>
      </ul>

      <p>
        <strong>
          Solid Na<sub>2</sub>CO<sub>3</sub> (For Base)
        </strong>
      </p>

      <ul>
        <li>
          To pour sample into solid sodium carbonate, drag the beaker towards
          the test tube.
        </li>
        <li>
          To pour phenolphthalein into the mixture of solid sodium carbonate and
          the sample, drag the beaker towards the test tube.
        </li>
        <li>
          You can verify your result and can see the inference by clicking on
          the correct icon in the ‘Result’ part.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>
          Take small quantities of zinc, HCl and NaOH for their reaction,
          otherwise large amount of hydrogen produced may cause explosion.
        </li>
        <li>To hydrogen burning take a fine jet.</li>
        <li>
          Add HCl to Na<sub>2</sub>CO<sub>3</sub>, only when apparatus is made
          carefully airtight.
        </li>
        <li>NaOH and HCl are injurious, handle these chemicals carefully.</li>
      </ol>

      <p>
        <strong>So, try out all and observe the changes………………</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Properties of Acids and Bases. Retrieved
          1 April 2021, from amrita.olabs.edu.in/?sub=73&brch=3&sim=6&cnt=25
        </Typography>
      </div>
    </div>
  );
}
