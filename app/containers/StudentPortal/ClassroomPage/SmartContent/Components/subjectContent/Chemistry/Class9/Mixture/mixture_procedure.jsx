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
import MixturePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Mixture1/mixture-pro1.png';


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
      <h1 className={classes.headTag}>Materials Required:&nbsp;</h1>

      <p>
        <img
          alt=""
          src={MixturePro1}
          width="86%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:&nbsp;</h2>

      <h3 className={classes.secondaryTag}>Preparation of mixture using iron filings and sulphur powder:</h3>

      <p>
        Take about 14g of fine iron filings and 8g of sulphur powder in a big
        petridish or a beaker. Mix them well to prepare a mixture of iron
        filings and sulphur powder. Label the mixture A.
      </p>

      <h3 className={classes.secondaryTag}>Preparation of compound using iron filings and sulphur powder:</h3>

      <p>
        Take about 14g of fine iron fillings and 8g sulphur powder in a china
        dish. Mix them well and heat the contents of the china dish, first
        gently, then strongly. Stir it constantly till a black mass, i.e.,
        <strong> compound </strong>of sulphur and iron is formed. When a black
        mass is formed, cool it and powder the black mass. Label the compound
        powder as B.
      </p>

      <h3 className={classes.secondaryTag}>
        To distinguish between the iron filings and sulphur powder mixture and
        compound on the basis of:
      </h3>

      <ul>
        <li>
          Appearance: Homogeneity and Heterogeneity:Take some powder A (iron
          filings and sulphur powder mixture) in one watch glass and mixture B
          black mass (compound) powder in another watch glass. Observe both of
          them carefully. Record your observations in a table.
          <br />
          &nbsp;
        </li>
        <li>
          Behaviour towards magnet: Place a small quantity of mixture: A in a
          watch glass and move a magnet over it.
          <br />
          Place a small quantity of B (black powder) in another watch glass and
          move the same magnet over it. Examine the movement of the magnet and
          record your observations.
        </li>
        <li>
          Action of Carbon Disulphide:Take a small quantity of A in a watch
          glass and add 1ml of carbon disulphide (CS<sub>2</sub>) to it. Observe
          the mixture for some time and then record your observations.
          <br />
          Take a small quantity of compound B in another watch glass and add 1ml
          of CS<sub>2</sub> to it. Observe the compound for some time and record
          your observations. &nbsp;
        </li>
        <li>
          Effect of Heat: Take a small quantity of mixture A in a test tube and
          heat it. Observe the change in the mixture after some time.
          <br />
          Take a small quantity of compound powder B in a test tube and heat it
          for the same period as powder A was heated. Observe the change
        </li>
        <li>
          Effect of heating with dil. HCl:Take a small quantity of mixture A in
          a test tube and add few drops of dil. HCl into it. Then heat the
          contents of the test tube gently and collect the gas formed in another
          test tube. Then bring a glowing match stick near the mouth of the test
          tube in which gas is collected and record your observations.
          <br />
          Now take a small quantity of compound B in a test tube and add few
          drops of dil. HCl into it. Then heat the contents of the test tube
          gently and pass the gas evolved through copper sulphate solution taken
          in another test tube and record your observations.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/">Online Labs</a>)
      </h2>

      <p>You can select the test from ‘Select the test’ dropdown list.</p>

      <h4 className={classes.secondaryTag}>Basis of appearance</h4>

      <ul>
        <li>
          You can select the Mixture/Compound by clicking on the respective
          icon.
        </li>
        <li>Stir the sample by clicking on the glass rod.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <h4 className={classes.secondaryTag}>Behavior towards magnet</h4>

      <ul>
        <li>
          You can select the Mixture/Compound by clicking on the respective
          icon.
        </li>
        <li>
          To test the magnetic property of the sample, drag the magnet towards
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <h4 className={classes.secondaryTag}>Action with Carbon disulphide</h4>

      <p>
        You can select the Mixture/Compound by clicking on the respective icon.
      </p>

      <p>
        <u>Mixture</u>
      </p>

      <ul>
        <li>
          To pour carbon disulphide into the test tube, drag the dropper towards
          it.
        </li>
        <li>Click on the test tube to shake its contents.</li>
        <li>
          Drag the test tube towards the petridish to pour the upper solution
          into it.
        </li>
        <li>
          Wait for two minutes for the carbon disulphide to evaporate from the
          petridish.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Compound</u>
      </p>

      <ul>
        <li>
          To pour carbon disulphide into the test tube, drag the dropper towards
          it.
        </li>
        <li>Click on the test tube to shake its contents.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <h4 className={classes.secondaryTag}>Action of heat</h4>

      <ul>
        <li>
          You can select the Mixture/Compound by clicking on the respective
          icon.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <h4 className={classes.secondaryTag}>Action with dil. HCl</h4>

      <p>
        You can select the Mixture/Compound by clicking on the respective icon.
      </p>

      <p>
        <u>Mixture</u>
      </p>

      <ul>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Gas bubbles are produced in the test tube that then pases through the
          bent tube into the empty test tube on the test tube rack.
        </li>
        <li>To remove the bent tube from both the test tubes, click on it.</li>
        <li>
          Drag the match stick towards the mouth of the test tube on the test
          tube rack.&nbsp;
        </li>
        <li>
          It extinguishes the burining matchstick with a mild explosion while
          producing a popping sound.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>
        <u>Compound </u>
      </p>

      <ul>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Gas bubbles are produced in the test tube that then passes through the
          bent tube into the test tube on the rack thus forming a black
          precipitate.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <p>You can click on the ‘Reset’ button to redo the experiment.</p>

      <p>
        <strong>Note:</strong> Click on the ‘HELP’ button to see the
        instructions
      </p>

      <h2 className={classes.secondaryTag}>Observations and Inference:&nbsp;</h2>

      <div>
        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
          marginLeft="35px;"
        >
          <tbody>
            <tr>
              <td rowspan="2" textAlign= "center;">
                SI.No
              </td>
              <td rowspan="2" textAlign= "center;">
                Experiment
              </td>
              <td colspan="2" textAlign= "center;">
                Observations
              </td>
              <td rowspan="2" textAlign= "center;">
                Inference
              </td>
            </tr>
            <tr>
              <td textAlign= "center;">A</td>
              <td textAlign= "center;">B</td>
            </tr>
            <tr>
              <td textAlign= "center;">1.</td>
              <td>Observation with naked eye, i.e., appearance</td>
              <td>
                Yellow powder in which some iron filing is visible, i.e.,
                heterogeneous.
              </td>
              <td>
                On heating A, B is obtained which is black in colour. No iron
                filings visible, i.e., homogeneous.
              </td>
              <td>
                Iron and sulphur powder retain their properties in A. In B, iron
                and sulphur both loose their properties due to the reaction
                <br />
                Fe + S-&gt; FeS
                <br />
                Iron +Sulphur -&gt; Ferrous sulphide.
              </td>
            </tr>
            <tr>
              <td textAlign= "center;">2.</td>
              <td>Behaviour towards a magnet.</td>
              <td>Iron filings cling to magnet.</td>
              <td>No particle attaches to magnet.</td>
              <td>
                In A, iron retains its properties. In B, iron has lost its
                properties.
              </td>
            </tr>
            <tr>
              <td textAlign= "center;">&nbsp;3.</td>
              <td>
                Behaviour towards carbon disulphide (CS<sub>2</sub> - a
                solvent).
              </td>
              <td>Sulphur dissolves first and reappears after some time.</td>
              <td>&nbsp;No change is observed.</td>
              <td>
                In A, sulphur retains its properties. In B, sulphur has lost its
                original properties after reaction with Fe.
              </td>
            </tr>
            <tr>
              <td textAlign= "center;">&nbsp;4.</td>
              <td>&nbsp;Effect of heat</td>
              <td>A black mass is obtained which is homogeneous.</td>
              <td>&nbsp;No change.</td>
              <td>
                Mixture of iron filings and sulphur powder forms compound FeS on
                heating.
                <br />
                <br />
                Compound FeS does not show any reaction on heating.
              </td>
            </tr>
            <tr>
              <td textAlign= "center;">&nbsp;5.</td>
              <td>Effect of heating with dil.HCl</td>
              <td>
                On heating, a gas is formed. On bringing the glowing match stick
                near the mouth of the test tube, the flame dips out producing a
                popping sound and with a mild explosion.
              </td>
              <td>
                On heating, a gas is evolved. On passing the gas through copper
                sulphate solution, a black precipitate is formed.
              </td>
              <td>
                In A iron reacts with dil. HCl to form hydrogen gas which
                extinguishes the burning match stick with a mild explosion and
                producing a popping sound. In B, the compound FeS react with
                dil. HCl to produce H<sub>2</sub>S gas which reacts with copper
                sulphate solution to form a black precipitate of copper
                sulphide.
                <br />
                FeS (s) + 2HCl (aq) --&gt; FeCl<sub>2</sub> (aq) + H<sub>2</sub>
                S (g)
                <br />
                CuSO<sub>4</sub> (aq) + H<sub>2</sub>S (g) --&gt; CuS (s) + H
                <sub>2</sub>SO<sub>4</sub> (aq)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Result:</h2>

      <ol>
        <li>
          When iron filings and sulphur powder are mixed, both retain their
          properties. It means they have not undergone any chemical reaction.
          Therefore, mixing of iron and sulphur is a physical change.
        </li>
        <li>
          When iron filings and sulphur powder are mixed and heated they undergo
          a chemical reaction&nbsp; and form ferrous sulphide (FeS). It is a new
          substance which has properties entirely different from Fe and
          S.Therefore, heating of mixture of iron and sulphur powder is a
          chemical change.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Care should be taken while heating iron and sulphur mixture.</li>
        <li>
          Do not brong carbon disulphide near the burner (carbon disulphide is
          volatile and its vapours catch fire).
        </li>
        <li>
          Do not inhale gases evolved directly, for example, hydrogen
          sulphide.&nbsp;
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Distinguish Between Mixture and
          Compound. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=70&cnt=2
        </Typography>
      </div>
    </div>
  );
}
