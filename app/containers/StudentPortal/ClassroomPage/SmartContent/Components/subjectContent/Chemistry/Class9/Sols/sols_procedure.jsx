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
import SolsPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Sols1/sols-pro1.png';

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
          src={SolsPro1}
          width="952px;" height= "493px;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <h3 className={classes.secondaryTag}>Preparation of a true solution of common salt, sugar and alum</h3>

      <p>
        Take three beakers with 90 ml water in each. Label them as A, B, and C.
        Add 10 g of finely powdered common salt, sugar and alum (
        <strong>phitkari</strong>) in beakers A, B and C respectively. Stir the
        solutions in each beaker thoroughly with the help of a glass rod and
        when ready keep them for further use.
        <br />
        &nbsp;
      </p>

      <ul>
        <li>
          Preparation of a suspension of soil, chalk powder and fine sand in
          water
        </li>
      </ul>

      <p>
        Take three beakers. Put 90 ml of water in each beaker. Label them as D,
        E, and F. Add 10 g of&nbsp; fine soil (without litter), fine chalk
        powder and fine sand in beaker A, B and C respectively. Stir the
        contents of each beaker well with the help of a glass rod.
      </p>

      <ul>
        <li>A colloidal of starch in water</li>
      </ul>

      <p>
        Mix 1% dry corn starch with 3 ml of distilled water. To this add 97 ml
        of boiling distilled water. Stir it well. Heat it for 2 minutes stirring
        the solution constantly. Cool it and store it for further use. Label the
        test tube as G.
      </p>

      <ul>
        <li>A colloidal of egg albumin in water</li>
      </ul>

      <p>
        <strong>
          Take 1 g of egg albumin (the colourless fluid found around the yellow
          yolk) and 5 ml of distilled water in a beaker. Mix it well. Slowly add
          95 ml of distilled water while stirring continuously. After mixing,
          add a few drops of acid (dil.HCl/dil.H<sub>2</sub>SO<sub>4 </sub>or
          acetic acid) and stir well. The clear solution of albumin and water
          will become turbid. Label the test tube as H.
        </strong>
      </p>

      <table
        border="1"
        cellpadding="0"
        cellspacing="0"
        class="responsive_table"
        marginLeft="34px;"
        width="922"
      >
        <tbody>
          <tr>
            <td width="109">Property to be tested</td>
            <td width="248">Experimental procedure</td>
            <td width="251">Observations</td>
            <td width="196">Inference</td>
          </tr>
          <tr>
            <td rowspan="3">1.Transparency</td>
            <td rowspan="3" width="248">
              Paste small strips of same coloured cellophane paper on one side
              of each test tube, i.e., A, B, C and D, E, F and G and H.
              <br />
              Arrange test tubes in groups according to solution, suspension and
              colloid. Now observe the coloured paper of each test tube of the
              set from the other side of the test tube through the liquid one by
              one.
            </td>
            <td valign="top" width="251">
              Coloured spot is clearly seen from the other side of test tubes A,
              B and C.
            </td>
            <td valign="top" width="196">
              A true solution is transparent.
            </td>
          </tr>
          <tr>
            <td valign="top" width="251">
              Coloured spot is not visible from other side of test tubes D, E
              and F.
            </td>
            <td valign="top" width="196">
              A suspension is opaque.
            </td>
          </tr>
          <tr>
            <td valign="top" width="251">
              Coloured spot appears dim from the other side of test tubes G and
              H.
            </td>
            <td valign="top" width="196">
              A colloid is translucent.
            </td>
          </tr>
          <tr>
            <td rowspan="4">&nbsp;2. Filtration</td>
          </tr>
          <tr>
            <td width="248">
              Filter the contents of test tubes A, B and C separately.
            </td>
            <td valign="top" width="251">
              No residue is left on the filter paper. A clear filtrate is
              obtained.
            </td>
            <td valign="top" width="196">
              Solid particles cannot be separated from true solution by
              filtration.
            </td>
          </tr>
          <tr>
            <td valign="top" width="248">
              Filter the contents of test tubes D, E and F separately.
              <br />
              &nbsp;
            </td>
            <td valign="top" width="251">
              Particulate suspension is seen on the filter paper in each case
              but filtrate is a clear liquid.
            </td>
            <td valign="top" width="196">
              Suspended components of a suspension can be separated by
              filtration.
            </td>
          </tr>
          <tr>
            <td width="248">
              Filter the contents of test tubes G&nbsp;and H separately.
            </td>
            <td valign="top" width="251">
              No residue left on the filter paper in both the cases. But
              filtrate obtained is translucent.
            </td>
            <td valign="top" width="196">
              Components causing colloid&nbsp; cannot be separated by
              filtration.
            </td>
          </tr>
          <tr>
            <td rowspan="3">&nbsp;3. Stability</td>
            <td rowspan="3" width="248">
              Leave the test tubes A, B, C, D, E, F, G and H&nbsp;for some
              time&nbsp; (15 to 20 minutes).
            </td>
            <td valign="top" width="251">
              No change. The solution remains as it is without any settlement in
              test tubes A, B and C.
            </td>
            <td width="196">
              The true solutions are stable and do not show deposition of
              components.
            </td>
          </tr>
          <tr>
            <td valign="top" width="251">
              In test tubes D, E, F there is gradual settlement of solid
              particles at the bottom.
            </td>
            <td width="196">
              Suspension is unstable and show settlement of heavier particles.
            </td>
          </tr>
          <tr>
            <td valign="top" width="251">
              No change is observed in test tubes G&nbsp;and H.
            </td>
            <td width="196">
              Colloids are stable. Their solute particles do not settle down
              when left undisturbed.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className={classes.secondaryTag}>Simulator Procedure:</h2>

      <p>
        <strong>
          You can select the property from ‘Select the property’ drop down list.
        </strong>
      </p>

      <p>
        <strong>
          You can select the sample by clicking on the respective icon.
        </strong>
      </p>

      <p>
        <strong>
          Place the mouse over each test tube to see the names of the samples
          selected.
        </strong>
      </p>

      <p>
        <strong>
          <strong>Transparency</strong>
        </strong>
      </p>

      <ul>
        <li>
          To check the transparency of the sample, drag the cellophane paper
          behind the sample.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>
          <strong>&nbsp;Filtration</strong>
        </strong>
      </p>

      <ul>
        <li>To filter the sample, drag the test tube towards the funnel.</li>
        <li>
          Click on the funnel to see the zoomed viewed of the filter paper and
          the residue left behind on the filter paper after filtration. &nbsp;
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>
          <strong>Stability</strong>
        </strong>
      </p>

      <ul>
        <li>
          To check the stability of the sample, click on the ‘Start’ button of
          the timer and wait for 20 minutes to view the settlement of particles
          in the sample.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>
          <strong>Tyndall effect</strong>
        </strong>
      </p>

      <ul>
        <li>
          To fix the test tube in the stand, drag the test tube towards it.
        </li>
        <li>
          Drag the light source towards the test tube fixed in the stand, to
          correctly view the Tyndall effect.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>
          <strong>Note:</strong> Click on the ‘<strong>HELP</strong>’ button to
          see the instructions.
        </strong>
      </p>

      <h2 className={classes.secondaryTag}>Inferences:</h2>

      <ol start="1" type="1">
        <li>
          Colloidal solutions are somewhat translucent and their particles can
          pass through filter paper to give translucent filtrate. No residue
          particles are left as residue on the filter paper.
        </li>
        <li>
          True solutions are transparent. They pass through filter paper leaving
          no residue on the filter paper. The filtrate is also transparent.
        </li>
        <li>
          Suspensions are somewhat&nbsp; opaque or dull. They leave residue
          particles on filter paper on filtration. The filtrate is more or less
          clear and transparent.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>
          While filtering a solution drop the contents along a glass rod into
          the funnel.
        </li>
        <li>Keep the sample undisturbed while checking stability.</li>
        <li>Handle acids carefully.&nbsp;</li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Distinguishing Between Solutions.
          Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=28&cnt=2
        </Typography>
      </div>
    </div>
  );
}
