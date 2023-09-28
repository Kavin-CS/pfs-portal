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
import SoftHardPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-pro1.png';
import SoftHardPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/SoftHard1/softhard-pro2.png';

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
      <h1 className={classes.headTag}>Materials required:</h1>

      <ul>
        <li>Three beakers</li>
        <li>Three test tubes</li>
        <li>Distilled water</li>
        <li>Well water</li>
        <li>2 g Calcium chloride</li>
        <li>Three glass rods</li>
        <li>Three pieces of soap each weighing 1 g&nbsp;</li>
        <li>Measuring cylinder&nbsp;</li>
        <li>Measuring scale&nbsp;&nbsp;</li>
        <li>Cloth pieces (5 cm x 5 cm ) &nbsp;&nbsp;&nbsp;</li>
        <li>Ink&nbsp; &nbsp;&nbsp;&nbsp;</li>
        <li>Dropper</li>
      </ul>

      <h1 className={classes.headTag}>Real Lab Procedure:</h1>

      <ul>
        <li>Take three beakers and label them as A, B and C.</li>
        <li>
          In beaker A, put 20ml of distilled water using a measuring cylinder.
        </li>
        <li>
          In beaker B, put 20 ml of water obtained from a well using another
          measuring cylinder.
        </li>
        <li>
          In beaker C, add 20 ml of distilled water. To this, add 2 g of calcium
          chloride and stir with a glass rod till it dissolves.
        </li>
        <li>Take three soap pieces, each weighing 1g.</li>
        <li>Add one soap piece to each beaker A, B and C.</li>
        <li>
          Stir the contents in the beakers with separate glass rods to ensure
          that soap has dissolved.
        </li>
        <li>
          In case the soap does not dissolve completely, heat the beaker gently
          on a Bunsen flame with constant stirring.
        </li>
        <li>
          In beaker A, the soap solution formed is almost clear, in beaker B,
          some turbidity is observed and in beaker C scum is formed.
        </li>
        <li>
          Take three test tubes and label them as A, B and C and place them in a
          test tube rack.
        </li>
        <li>
          Pour 10 ml of soap solution from beaker A into test tube A and 10 ml
          of soap solution from beaker B into test tube B and 10 ml of soap
          solution from beaker C into test tube C, using separate measuring
          cylinders.
        </li>
        <li>
          Measure the initial length of each soap solution with a measuring
          scale.
        </li>
        <li>Hold the test tube A by hand.</li>
        <li>
          Close its mouth with the thumb and shake it thoroughly 10 times in
          upward-downward direction.
        </li>
        <li>It is observed that lather has formed in the test tube.</li>
        <li>
          Measure the length of foam and the final length of the soap solution
          with the measuring scale.
        </li>
        <li>Repeat the above four steps for test tubes B and C.</li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure:</h1>

      <p>
        To start the experiment, select any one of the procedure&nbsp; from
        ‘Select Procedure’ drop down list.
      </p>

      <p>If the procedure selected is,</p>

      <p>
        <u>Distilled water</u>
      </p>

      <ul>
        <li>
          Drag the soap piece towards the beaker to add it into the beaker
          containing distilled water.
        </li>
        <li>Click on the glass rod to stir the mixture in the beaker.</li>
        <li>Turn on the burner by clicking on the ‘knob’ of the burner.</li>
        <li>
          Drag the beaker towards the Bunsen burner to place it over the burner
          and gently heat it.
        </li>
        <li>Click on the glass rod to stir the mixture in the beaker.</li>
        <li>Turn off the burner by clicking on the ‘knob’ of the burner.</li>
        <li>Click on the information to see the inference.</li>
        <li>Click on the ‘NEXT STEP’ button to go to the next process.</li>
        <li>Click on the test tube to move it up.</li>
        <li>Click on the beaker to pour soap solution into the test tube.</li>
        <li>Click on the test tube to zoom it.</li>
        <li>
          Drag the scale towards the test tube and measure the initial length of
          the soap solution.
        </li>
        <li>Click on the close button to go to the previous stage.</li>
        <li>Click on the test tube to shake it up and down.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>Click on the test tube to zoom it.&nbsp;</li>
        <li>
          Drag the scale towards the test tube and measure the length of the
          lather and final length of the soap solution.
        </li>
        <li>Click on the ‘NEXT STEP’ button to go to the next process.</li>
        <li>
          Drag the cloth piece containing ink spot towards the beaker to put it
          into the beaker containing soap solution.
        </li>
        <li>Click on the beaker to see the zoomed view of cloth.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment anytime by clicking on the ‘Reset’ button.
        </li>
      </ul>

      <div>
        <u>Well water</u>
      </div>

      <ul>
        <li>
          Drag the soap piece towards the beaker to add it into the beaker
          containing well water.
        </li>
        <li>Click on the glass rod to stir the mixture in the beaker.</li>
        <li>Turn on the burner by clicking on the ‘knob’ of the burner.</li>
        <li>
          Drag the beaker towards the Bunsen burner to place it over the burner
          and gently heat it.
        </li>
        <li>Click on the glass rod to stir the mixture in the beaker.</li>
        <li>Turn off the burner by clicking on the ‘knob’ of the burner.</li>
        <li>Click on the information to see the inference.</li>
        <li>Click on the ‘NEXT STEP’ button to go to the next process.</li>
        <li>Click on the test tube to move it up.</li>
        <li>Click on the beaker to pour soap solution into the test tube.</li>
        <li>Click on the test tube to zoom it.</li>
        <li>
          Drag the scale towards the test tube and measure the initial length of
          the soap solution.
        </li>
        <li>Click on the close button to go to the previous stage.</li>
        <li>Click on the test tube to shake it up and down.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>Click on the test tube to zoom it.&nbsp;</li>
        <li>
          Drag the scale towards the test tube and measure the length of the
          lather and final length of the soap solution.
        </li>
        <li>Click on the ‘NEXT STEP’ button to go to the next process.</li>
        <li>
          Drag the cloth piece containing ink spot towards the beaker to put it
          into the beaker containing soap solution.
        </li>
        <li>Click on the beaker to see the zoomed view of cloth.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment anytime by clicking on the ‘Reset’ button.
        </li>
      </ul>

      <div>
        <u>
          Distilled water + CaCl<sub>2</sub>&nbsp;(s)
        </u>
      </div>

      <ul>
        <li>
          Drag the soap piece towards the beaker to add it into the beaker
          containing distilled water with dissolved calcium chloride.
        </li>
        <li>Click on the glass rod to stir the mixture in the beaker.</li>
        <li>Turn on the burner by clicking on the ‘knob’ of the burner.</li>
        <li>
          Drag the beaker towards the Bunsen burner to place it over the burner
          and gently heat it.
        </li>
        <li>Click on the glass rod to stir the mixture in the beaker.</li>
        <li>Turn off the burner by clicking on the ‘knob’ of the burner.</li>
        <li>Click on the information to see the inference.</li>
        <li>Click on the ‘NEXT STEP’ button to go to the next process.</li>
        <li>Click on the test tube to move it up.</li>
        <li>Click on the beaker to pour soap solution into the test tube.</li>
        <li>Click on the test tube to zoom it.</li>
        <li>
          Drag the scale towards the test tube and measure the initial length of
          the soap solution.
        </li>
        <li>Click on the close button to go to the previous stage.</li>
        <li>Click on the test tube to shake it up and down.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>Click on the test tube to zoom it.&nbsp;</li>
        <li>
          Drag the scale towards the test tube and measure the length of the
          lather and final length of the soap solution.
        </li>
        <li>Click on the ‘NEXT STEP’ button to go to the next process.</li>
        <li>
          Drag the cloth piece containing ink spot towards the beaker to put it
          into the beaker containing soap solution.
        </li>
        <li>Click on the beaker to see the zoomed view of cloth.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment anytime by clicking on the ‘Reset’ button.
        </li>
      </ul>

      <h1 className={classes.headTag}>&nbsp;Observations:</h1>

      <h1 className={classes.headTag}>
        <img alt="" src={SoftHardPro1} />
      </h1>

      <ul>
        <li>Take three pieces of white cloth of size 5 cm x 5 cm each.</li>
        <li>
          Put a drop of ink in the centre of each cloth by means of a dropper
          and allow it to dry.
        </li>
        <li>
          Place one piece of cloth with ink spot in the remaining soap solution
          in beaker A, another piece of cloth in beaker B and the third piece of
          cloth in beaker C.
        </li>
        <li>Leave the three beakers undisturbed for about 10 min.</li>
        <li>Remove the pieces of cloth from the beakers and rub each piece.</li>
        <li>
          The ink spot on the cloth in soap solution A has almost disappeared
        </li>
        <li>
          The ink spot on the soap cloth in soap solution B partially
          disappeared.
        </li>
        <li>
          There is no change in the colour of the ink spot on the piece of cloth
          dipped in soap solution C, and some scum has been deposited on the
          surface of the cloth piece.&nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Conclusions:</h1>

      <p>
        <img alt="" src={SoftHardPro2} />
      </p>

      <h1 className={classes.headTag}>Precautions:</h1>

      <ul>
        <li>
          &nbsp;Use the same sample and same weight of soap for the beakers A, B
          and C.
        </li>
        <li>
          While stirring the soap solution, do not spill any solution out of the
          beaker.
        </li>
        <li>
          In case the soap does not dissolve completely, heat the beaker gently
          with constant stirring on a Bunsen flame. Place the wire gauze on the
          tripod stand, to ensure heating is gentle and evaporation of water is
          avoided. Evaporation will reduce the volume of the water.
        </li>
        <li>
          Carefully measure the same quantity of soap solution from the beakers
          A, B and C to put in the experimental test tubes A, B and C.
        </li>
        <li>
          Give equal number of shakes to the test tubes A, B and C in the same
          way, without spilling any soap solution.
        </li>
        <li>Immediately measure the length of foam produced.</li>
        <li>
          The quantity of ink put on each piece of cloth should be equal.
          
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Cleaning Capacity of Soap with Hard and
          Soft Water. Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=3&sim=120&cnt=2
        </Typography>
      </div>
    </div>
  );
}
