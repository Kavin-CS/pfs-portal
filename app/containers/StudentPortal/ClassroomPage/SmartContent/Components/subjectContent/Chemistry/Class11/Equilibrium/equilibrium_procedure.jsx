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

import EquilibriumPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Equilibrium1/equilibrium-pro1.jpg';

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

      <p>
        <img alt="" src={EquilibriumPro1} />
      </p>

      <h1 className={classes.headTag}>The Procedure</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Take 10 ml of 0.1 M FeCl<sub>3</sub> solution in a measuring cylinder
          and pour it into a clean beaker.
        </li>
        <li>To this, add 10 ml of 0.1 M KSCN using a measuring cylinder.</li>
        <li>
          A deep red colour is obtained due to the formation of the complex,
          [Fe(SCN)(H<sub>2</sub>O)<sub>5</sub>]<sup>2+</sup> (aq).
        </li>
        <li>
          Dilute the deep red solution by adding 50 ml of distilled water.
        </li>
        <li>Take four test tubes and label them as A, B, C and D.</li>
        <li>
          Add 10 ml of the deep red solution to each test tube using a measuring
          cylinder.
        </li>
        <li>Place the test tubes in the test tube stand.</li>
        <li>
          Add 5 ml of distilled water into test tube A; 5 ml of 0.1 M FeCl
          <sub>3</sub> solution to test tube B; 5 ml of 0.1 M KSCN solution to
          test tube C and 5 ml of 0.1 M KCl solution into the test tube D.
        </li>
        <li>Shake all the test tubes well.</li>
        <li>
          Now compare the intensity of the colours in the test tubes, B, C and D
          with the red colour in test tube A taken as the reference test tube.
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
          You can select the test solution from the 'Select the test solution'
          drop down list.
        </li>
        <li>
          You can select the control tube from the 'Select the control tube'
          drop down list.
        </li>
        <li>
          Drag the dropper containing the reagent towards any one of the test
          tube to pour the reagent into it.
        </li>
        <li>
          You can see the inference of different tests by clicking on the
          inference icon.
        </li>
        <li>
          The chemical reaction and equilibrium constant can be seen on the side
          menu.
        </li>
        <li>You can redo the experiment by clicking on the 'Reset' button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <p>
        <strong>Observations are given in the table.</strong>
      </p>

      <table
        border="1"
        cellpadding="0"
        cellspacing="0"
        class="responsive_table"
      >
        <tbody>
          <tr>
            <td>
              <p>
                <b>&nbsp;</b>
                <b>Test tube</b>
              </p>
            </td>
            <td>
              <p>
                <b>&nbsp;</b>
                <b>Substances added at equilibrium</b>
              </p>
            </td>
            <td>
              <p>
                <b>&nbsp;</b>
                <b>Change in colour</b>
              </p>
            </td>
            <td>
              <p>
                <b>Effect on the&nbsp;</b>
                <b>concentration of&nbsp;</b>
                <b>
                  [Fe(SCN)(H<sub>2</sub>O)<sub>5</sub>]<sup>2+</sup>
                </b>
              </p>
            </td>
            <td>
              <p>
                <b>&nbsp;</b>
                <b>Shift of equilibrium</b>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>A </p>
            </td>
            <td>
              <p>5 ml of water</p>
            </td>
            <td>
              <p>Reference colour</p>
            </td>
            <td>
              <p>-</p>
            </td>
            <td>
              <p>-</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>B </p>
            </td>
            <td>
              <p>
                5 ml of 0.1 M FeCl<sub>3</sub> solution
              </p>
            </td>
            <td>
              <p>Colour deepens</p>
            </td>
            <td>
              <p>Increases</p>
            </td>
            <td>
              <p>Towards right</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>C </p>
            </td>
            <td>
              <p>5 ml of 0.1 M KSCN solution</p>
            </td>
            <td>
              <p>Colour deepens</p>
            </td>
            <td>
              <p>Increases</p>
            </td>
            <td>
              <p>Towards right</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>D</p>
            </td>
            <td>
              <p>5 ml of 0.1 M KCl solution</p>
            </td>
            <td>
              <p>Colour becomes lighter</p>
            </td>
            <td>
              <p>Increases</p>
            </td>
            <td>
              <p>Towards left</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h1 className={classes.headTag}>Conclusions</h1>

      <ul>
        <li>
          The intensity of red colour corresponds to the concentration of
          complex [Fe(SCN)(H<sub>2</sub>O)<sub>5</sub>]<sup>2+</sup> and if the
          concentration of this ion increases, the colour intensity will also
          increase.
        </li>
        <li>
          Increase in concentration of either of the reactants (Fe<sup>3+</sup>{' '}
          ions or SCN<sup>-</sup> ions) shifts the equilibrium in the forward
          direction (towards right).
        </li>
        <li>
          Decrease in concentration of any of the reactants shifts the
          equilibrium in the backward direction (towards left).
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Use test tubes of almost identical diameter.</li>
        <li>Dilute solutions of thiocyanate should be used.</li>
        <li>
          The intensity of colour of a solution should be compared by keeping it
          and the reference side by side and then observing them from the top of
          the test tube.&nbsp;&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Chemical Equilibrium. Retrieved 30 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=7&sim=112&cnt=2
        </Typography>
      </div>
    </div>
  );
}
