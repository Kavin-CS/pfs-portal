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
import EthanoicPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Ethanoic1/ethanoic-pro1.png';


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
          src={EthanoicPro1}
        />
      </p>

      <h1 className={classes.headTag}>Procedure:&nbsp;</h1>

      <h2 className={classes.secondaryTag}>
        &nbsp;Try the experiments below and observe the different properties of
        acetic acid in a real lab:
      </h2>

      <div>
        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
          marginLeft="34px;"
        >
          <tbody>
            <tr>
              <td align="center" valign="middle">
                Experiment
              </td>
              <td align="center" valign="middle">
                Observation
              </td>
              <td align="center" valign="middle">
                Inference
              </td>
            </tr>
            <tr>
              <td valign="middle">
                Odour:Take a small amount of acetic acid in a test tube and
                detect its odour by wafting.
              </td>
              <td valign="middle">
                Pungent smell.
              </td>
              <td valign="middle">
                It has an irritating pungent smell.
              </td>
            </tr>
            <tr>
              <td valign="middle">
                Solubility in water: Take a small amount of water in a test tube
                and add a small amount of acetic acid to it and shake well.
              </td>
              <td valign="middle">
                A homogeneous solution is formed.
              </td>
              <td valign="middle">
                Acetic acid is soluble in water.
              </td>
            </tr>
            <tr>
              <td valign="middle">
                Effect on litmus:Take a small amount of acetic acid in a test
                tube and dip a strip of blue litmus paper in it.
              </td>
              <td valign="middle">
                Blue litmus turns red.
              </td>
              <td valign="middle">
                It is acidic in nature.
              </td>
            </tr>
            <tr>
              <td valign="middle">
                Reaction with sodium bicarbonate: Take a small quantity of
                sodium bicarbonate solution in a boiling tube. Cork the tube
                with a double bore cork and insert a thistle funnel into the
                tube. Then place a boiling tube containing lime water near the
                tube containing NaHCO<sub>3</sub> solution. Insert one end of
                the delivery tube into the tube containing NaHCO<sub>3</sub>{' '}
                solution and the other end into the tube containing lime water.
                Now, add acetic acid into NaHCO<sub>3</sub> solution through the
                thistle funnel and observe the change in colour of the lime
                water.
              </td>
              <td valign="middle">
                A gas is evolved which turns lime water milky
              </td>
              <td valign="middle">
                The gas produced is carbon dioxide due to the action of CH
                <sub>3</sub>COOH on NaHCO<sub>3</sub>, which turns lime water
                milky.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>To perform the experiments using the simulator.&nbsp;</h2>

      <p>You can select the test by clicking on the corresponding icon.</p>

      <h4 className={classes.secondaryTag}>Solubility in water</h4>

      <ul>
        <li>
          To pour acetic acid into water, drag the test tube towards the test
          tube containing water.
        </li>
        <li>To shake the test tube, click on it.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the test.</li>
      </ul>

      <h4 className={classes.secondaryTag}>Odour</h4>

      <ul>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the test.</li>
      </ul>

      <h4 className={classes.secondaryTag}>Effect on litmus</h4>

      <ul>
        <li>
          To take acetic acid, drag the dropper towards the test tube and dip it
          in the test tube.
        </li>
        <li>
          To put acetic acid on the blue litmus paper, drag the dropper towards
          it.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the test.</li>
      </ul>

      <h4 className={classes.secondaryTag}>
        Reaction with NaHCO<sub>3</sub>
      </h4>

      <ul>
        <li>
          To pour acetic acid into sodium bicarbonate solution, drag the conical
          flask towards the thistle funnel.
        </li>
        <li>
          You can see that some gas bubbles are produced inside the test tube
          containing sodium bicarbonate.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the test.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ol>
        <li>Never smell acetic acid directly.</li>
        <li>
          Keep the mouth of the test tube away from you and your classmates'
          face.
        </li>
        <li>Use the chemicals judiciously.</li>
      </ol>

      

      <p>
        <strong>Try the experiments and observe the changes!!</strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Properties of Acetic Acid (Ethanoic
          Acid). Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=11&cnt=2
        </Typography>
      </div>
    </div>
  );
}
