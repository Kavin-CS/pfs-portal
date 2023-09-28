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
import MixtureTechniquesPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-pro1.png';
import MixtureTechniquesPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-pro2.png';
import MixtureTechniquesPro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-pro3.png';
import MixtureTechniquesPro4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-pro4.png';
import MixtureTechniquesPro5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-pro5.png';
import MixtureTechniquesPro6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-pro6.png';
import MixtureTechniquesPro7 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-pro7.png';


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
      <h1 className={classes.headTag}>Separating Funnel:</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={MixtureTechniquesPro1} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>Fix a separating funnel in a stand.</li>
        <li>
          Pour about 50ml of a mixture of oil and water through a filter funnel
          into a separating funnel.
        </li>
        <li>Close the separating funnel using a lid.</li>
        <li>Take the funnel from the stand and invert it.</li>
        <li>Now shake the funnel gently and slowly.</li>
        <li>
          Now, open the stopcock of the separating funnel to release the
          pressure inside the funnel.
        </li>
        <li>
          Place the funnel in the stand and allow the two liquids to separate
          completely.
        </li>
        <li>
          Take a beaker and place it below the separating funnel and open the
          lid of the separating funnel.
        </li>
        <li>
          Open the stopcock of the separating funnel and pour the lower layer of
          water carefully into the beaker.
        </li>
        <li>
          Close the stopcock of the separating funnel as the oil reaches the
          separating funnel.
        </li>
        <li>
          Place another beaker below the separating funnel to collect oil from
          the separating funnel.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Simulation Procedure:</h2>

      <ul>
        <li>
          Select the separation technique,"Separating Funnel" from ‘Select the
          technique’ drop down list.
        </li>
        <li>
          You can select the mixture from ‘Selected mixture’ drop down list.
        </li>
        <li>
          Drag the beaker containing mixture to pour the mixture into the
          separating funnel.
        </li>
        <li>
          Click on the filter funnel to remove it from the separating funnel.
        </li>
        <li>Wait for some time to close the separating funnel with the lid.</li>
        <li>Drag the separating funnel to take it out from the stand.</li>
        <li>Click on the separating funnel to shake it well.</li>
        <li>
          Click on the stopcock of the separating funnel to open it and release
          the pressure inside the funnel.
        </li>
        <li>Drag the separating funnel to place it back to the stand.</li>
        <li>
          Drag the beaker to place it below the separating funnel and collect
          the lower layer liquid.
        </li>
        <li>
          Click on the stopcock of the separating funnel to pour the liquid
          carefully into the beaker.
        </li>
        <li>
          Click on the stopcock to close it as the liquid reaches the stopcock.
        </li>
        <li>Drag the beaker containing liquid to place it back.</li>
        <li>
          Drag another beaker to place it below the separating funnel to collect
          the upper layer liquid.
        </li>
        <li>
          Click on the stopcock of the separating funnel to drain the liquid
          carefully into the beaker.
        </li>
        <li>Drag the beaker containing liquid to place it back.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
      </p>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          Two separate layers of oil and water are formed: water at the bottom
          and oil at the top.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Inferences:&nbsp;</h2>

      <ul>
        <li>
          The immiscible liquids separate out in layers depending on their
          densities.
        </li>
        <li>
          The denser liquid will fall to the bottom, forming the lower layer,
          and the lighter liquid forms the top layer.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Use the glass ware carefully.</li>
        <li>
          Open the stopcock of the separating funnel after shaking to release
          the pressure inside the funnel.
        </li>
      </ol>

      

      <h1 className={classes.headTag}>Chromatography:</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={MixtureTechniquesPro2} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>
          Take a Whatman filter paper strip and draw a line with a pencil above
          4cm from one end. Now, draw another line lengthwise from the centre of
          the paper. Then name the point at which the two lines intersect as P.
        </li>
        <li>
          With the help of a fine capillary tube, put a drop of the mixture of
          red and blue inks at the point P. Let it dry in air.
        </li>
        <li>
          Put another drop on the same spot and dry again, so that the spot is
          rich in mixture.
        </li>
        <li>
          Pour equal amounts of isopropyl alcohol and distilled water into a
          chromatographic chamber and mix it well using a glass rod. It is used
          as the solvent.
        </li>
        <li>
          Suspend the filter paper vertically in the chromatographic chamber
          containing solvent in such a way that the pencil line remains about
          2cm above the solvent level.
        </li>
        <li>Close the jar with its lid and keep it undisturbed.</li>
        <li>
          Notice the rising solvent along with the red and blue inks. After the
          solvent has risen about 15 cm, you will notice two different spots of
          blue and red colors on the filter paper.
        </li>
        <li>
          Take the filter paper out of the jar and mark the distance that the
          solvent has risen on the paper with a pencil. This is called the
          solvent front.
        </li>
        <li>
          Dry the filter paper and put pencil marks on the centre of red and
          blue ink spots.
        </li>
        <li>
          Measure the distance of the two spots from the original line and the
          distance of the solvent from the original line.
        </li>
        <li>
          Calculate the Rf values of red and blue inks by using the formula
        </li>
      </ul>

      <p>
        <img alt="" src={MixtureTechniquesPro3} />
      </p>

      <h2 className={classes.secondaryTag}>Simulator Procedure:</h2>

      <ul>
        <li>
          Select the separation technique,"Chromatography" from ‘Select the
          technique’ drop down list.
        </li>
        <li>
          You can select the mixture from ‘Selected mixture’ drop down list.
        </li>
        <li>
          To take the sample, drag the capillary tube towards the beaker and
          drag it back towards the filter paper to drop the sample on the point
          ‘P’.
        </li>
        <li>To open the chromatographic chamber, click on the lid.</li>
        <li>
          Drag the filter paper to dip it in the chromatographic chamber
          containing solvent.
        </li>
        <li>Click on the lid to close the chromatographic chamber.</li>
        <li>
          You can see that the components of the mixture rising along with the
          solvent.
        </li>
        <li>Wait till the solvent reaches its maximum height.</li>
        <li>
          Click on the filter paper to take it out from the chromatographic
          chamber.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can measure the distance travelled by the solvent (solvent front)
          and the distance travelled by each component of the mixture from the
          original line using a scale by clicking on the ‘Show scale’ check box.
        </li>
        <li>
          Drag the scale towards the marked lines and measure the distance.
        </li>
        <li>
          You can verify the values by entering the values in the respective
          check boxes on the left side menu.
        </li>
        <li>
          You can calculate the Rf value of each component using the equation of
          Rf value and can verify your result by entering the values in the
          respective check boxes.{' '}
          <strong>
            (Round up the decimal values. Eg: 0.775 should be rounded up to
            0.78)
          </strong>
          .
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
      </p>

      <p>
        <img alt="" src={MixtureTechniquesPro4} />
      </p>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>Observations are recorded in a table:</li>
      </ul>

      <div>
        <table align="center" border="1" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td valign="top" width="43">
                <strong>SI No. </strong>
              </td>
              <td textAlign="center;" valign="top" width="43">
                <strong>Component</strong>
              </td>
              <td valign="top" width="206">
                <strong>
                  Distance travelled by the components from the original line
                  (cm)
                </strong>
              </td>
              <td valign="top" width="246">
                <strong>
                  Distance travelled by the solvent from the original line (cm)
                </strong>
              </td>
              <td valign="top" width="246">
                <strong>
                  R<sub>f</sub> Values
                </strong>
              </td>
            </tr>
            <tr>
              <td valign="top" width="43">
                1&nbsp;
              </td>
              <td valign="top" width="43">
                Red
              </td>
              <td valign="top" width="206">
                &nbsp;
              </td>
              <td valign="top" width="246">
                &nbsp;
              </td>
              <td valign="top" width="246">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td valign="top" width="43">
                2
              </td>
              <td valign="top" width="43">
                Blue
              </td>
              <td valign="top" width="206">
                &nbsp;
              </td>
              <td valign="top" width="246">
                &nbsp;
              </td>
              <td valign="top" width="246">
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Inferences:&nbsp;</h2>

      <ul>
        <li>
          R
          <sub>
            <em>f </em>
          </sub>
          value of red ink = ……………
        </li>
        <li>
          R
          <sub>
            <em>f </em>
          </sub>
          value of blue ink = …………..
          <br />
          &nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Use the glass ware carefully.</li>
        <li>Use gloves while handling chemicals.</li>
        <li>
          Carefully suspend the filter paper in the chromatographic chamber
          containing solvent in such a way that the pencil line remains about
          2cm above the solvent level.
        </li>
        <li>
          Always close the lid on chromatographic chamber so that the chamber is
          saturated with the solvent vapors.
        </li>
      </ol>

      

      <h1 className={classes.headTag}>Centrifugation:</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={MixtureTechniquesPro5} />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:&nbsp;</h2>

      <ul>
        <li>
          Take a centrifuge tube and fill 3/4<sup>th</sup> of it with milk.
        </li>
        <li>Place the centrifuge tube in one of the holes of the rotor.</li>
        <li>
          Take another centrifuge tube and fill 3/4<sup>th</sup> of it with
          distilled water.
        </li>
        <li>
          Place it opposite the first centrifuge tube to balance the rotor in
          the centrifuge machine.
        </li>
        <li>
          Close the centrifuge machine and centrifuge the milk for 2 minutes.
        </li>
        <li>
          Stop the centrifuge machine and take the centrifuge tube containing
          milk from the machine.
        </li>
        <li>Observe the changes.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Simulator Procedure:&nbsp;</h2>

      <ul>
        <li>
          Select the separation technique,"Centrifugation" from ‘Select the
          technique’ drop down list.
        </li>
        <li>
          You can select the mixture from ‘Selected mixture’ drop down list.
        </li>
        <li>Click on the lid of the centrifuge machine to open it.</li>
        <li>
          Drag each centrifuge tube to place it in the centrifuge machine. (The
          tubes should be placed in the opposite holes for balance).
        </li>
        <li>Click on the lid of the centrifuge machine to close it.</li>
        <li>
          Click on the green button to turn on the centrifuge machine and wait
          till the centrifugation is over.
        </li>
        <li>Click on the lid of the centrifuge machine to open it.</li>
        <li>Click on the centrifuge tube containing sample.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
      </p>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          The fat rises to the top resulting in a cream layer at the top and
          skim milk (plasma phase of milk) at the bottom.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Inferences:</h2>

      <ul>
        <li>
          The denser particles are forced to the bottom and the lighter
          particles stay at the top when spun rapidly.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Close lids at all times during operation.</li>
        <li>Always cap tubes before centrifugation.</li>
        <li>
          Do not operate the centrifuge without the rotor properly balanced.
        </li>
        <li>
          Do not open the lid while the rotor is moving. Allow the centrifuge to
          come to a complete stop before opening.
        </li>
        <li>
          Stop the centrifuge immediately if an unusual condition (noise or
          vibration) begins and check load balances.&nbsp;
        </li>
      </ol>

      <h1 className={classes.headTag}>Simple Distillation:</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img
          alt=""
          src={MixtureTechniquesPro6}
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>
          Take about 100ml of mixture of acetone and distilled water in a 250ml
          RB flask.
        </li>
        <li>Place it in a heating mantle and then clamp it.</li>
        <li>Add some porcelain chips to the mixture.</li>
        <li>Then, connect a distilling head to the RB flask.</li>
        <li>
          Then, connect a thermometer adapter to the distilling head and insert
          a thermometer through the thermometer adapter.
        </li>
        <li>
          Next, connect a water condenser to the outlet of the distilling head.
        </li>
        <li>Clamp the water condenser.</li>
        <li>Then, connect a vacuum adapter to the water condenser.</li>
        <li>
          Then connect a 100ml RB flask to the vacuum adapter and clamp the RB
          flask and place the RB flask in an ice bath.
        </li>
        <li>
          Then, connect a rubber tube between the inlet of the condenser and the
          tap to allow the cold water to enter.
        </li>
        <li>
          Connect another rubber tube to the outlet of the condenser to pour the
          hot water from the condenser to the sink.
        </li>
        <li>Heat the mixture until it boils.</li>
        <li>Observe the changes.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Simulator Procedure:</h2>

      <ul>
        <li>
          Select the separation technique,"Simple Distillation" from ‘Select the
          technique’ drop down list.
        </li>
        <li>
          You can select the mixture from ‘Selected mixture’ drop down list.
        </li>
        <li>
          You can see the zoomed view of the thermometer on the right side.
        </li>
        <li>Click on the 'Start' button to start the experiment.</li>
        <li>
          You can see that upon heating, temperature increases and at a
          particular temperature one of the components of the mixture boils and
          the vapors pass through the condenser, are condensed and are collected
          in another RB flask.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘HELP’ button to see the
        instructions.
      </p>

      <h2 className={classes.secondaryTag}>Observations:&nbsp;</h2>

      <ul>
        <li>
          Acetone vaporizes at 56°C, condenses and can be collected in the 100ml
          flask from the condenser outlet.
        </li>
        <li>Water is left behind in the flask.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Inference:</h2>

      <ul>
        <li>
          Simple distillation is used for the separation of a mixture containing
          two miscible liquids that boil without decomposition and have
          sufficient difference in their boiling points.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Use glass ware and heating mantle very carefully.</li>
        <li>Use gloves while handling chemicals.</li>
        <li>Connect apparatus properly.</li>
        <li>Add porcelain chips to avoid bumping of liquid while boiling.</li>
        <li>
          Turn on the condenser water supply to provide a gentle, but steady
          stream, of cooling water before starting the experiment.
        </li>
      </ol>

      <h1 className={classes.headTag}>Fractional Distillation:</h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <h2 className={classes.secondaryTag}>
        <img
          alt=""
          src={MixtureTechniquesPro7}
        />
      </h2>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>
          Take about 100ml of the mixture of methanol and ethanol in a 250ml RB
          flask.
        </li>
        <li>Place it in a heating mantle and then clamp it.</li>
        <li>Add some porcelain chips to the mixture.</li>
        <li>Connect a fractionating column to the RB flask and clamp it.</li>
        <li>Connect a distilling head to the fractionating column.</li>
        <li>
          Connect a thermometer adapter to the distilling head and insert a
          thermometer through the thermometer adapter.
        </li>
        <li>
          Connect a water condenser to the outlet of the distilling head and
          clamp it.
        </li>
        <li>Connect a vacuum adapter to the water condenser.</li>
        <li>
          Connect a 100ml RB flask to the vacuum adapter and clamp the RB flask
          and place the RB flask in an ice bath.
        </li>
        <li>
          Connect a rubber tube between the inlet of the condenser and the tap
          to allow the cold water to enter.
        </li>
        <li>
          Connect another rubber tube to the outlet of the condenser to pour the
          hot water from the condenser to the sink.
        </li>
        <li>Heat the mixture until it boils.</li>
        <li>Observe the changes.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Simulator Procedure:</h2>

      <ul>
        <li>
          Select the separation technique,"Fractional Distillation" from ‘Select
          the technique’ drop down list.
        </li>
        <li>
          You can select the mixture from ‘Selected mixture’ drop down list.
        </li>
        <li>
          You can see the zoomed view of the thermometer on the left side.
        </li>
        <li>
          Click on the 'Start' button/start button of the heating mantle to
          switch it on and boil the mixture.
        </li>
        <li>
          You can see that the temperature increases and at a particular
          temperature, one of the components of the mixture boils and the vapors
          pass through the condenser, are condensed, and are collected in
          another RB flask.
        </li>
        <li>Drag the ice box downwards.</li>
        <li>
          Drag the RB flask containing separated component&nbsp;to remove it
          from the vacuum adapter and place it on the stand.
        </li>
        <li>
          Drag the empty RB flask to connect it to the vacuum adapter and
          collect the other component.
        </li>
        <li>Click on the 'Start' button to boil the remaining solution.</li>
        <li>
          You can see that at a particular temperature, the other component of
          the mixture boils and the vapors pass through the condenser , are
          condensed and get collected in the RB flask.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
      </p>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          Methanol vaporizes at 65°C and passes out of the fractionating column,
          condenses, and is collected in the RB flask.
        </li>
        <li>
          Ethanol vaporizes at 78°C and passes out of the fractionating column,
          condenses, and is collected in another RB flask.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Inference:</h2>

      <ul>
        <li>
          Fractional distillation is used for the separation of two or more
          miscible liquids for which the difference in boiling points is less
          than 25K.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Use glass ware and heating mantle very carefully.</li>
        <li>Use gloves while handling chemicals.</li>
        <li>Connect apparatus properly.</li>
        <li>Add porcelain chips to avoid bumping of liquid while boiling.</li>
        <li>
          Turn on the condenser water supply to provide a gentle, but steady
          stream, of cooling water before starting the experiment.
        </li>
        <li>
          When working with flammable liquids such as ethanol care should be
          taken to eliminate any fire hazards.
          <br />
          &nbsp;
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Separation of Mixtures Using Different
          Techniques. Retrieved 3 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=96&cnt=2
        </Typography>
      </div>
    </div>
  );
}
