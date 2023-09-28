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
import ReactionProcedure1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionProcedure1.png';
import ReactionProcedure2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionProcedure2.png';
import ReactionProcedure3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionProcedure3.png';
import ReactionProcedure4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionProcedure4.png';
import ReactionProcedure5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionProcedure5.png';
import ReactionEqu1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionEqu1.png';
import ReactionEqu2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionEqu2.png';
import ReactionEqu3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionEqu3.png';
import ReactionEqu4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionEqu4.png';
import ReactionEqu5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionEqu5.png';
import ReactionEqu6 from '../../../../../../../../../assets/Images/Subjects/Chemistry/ReactionEqu6.png';

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
      <h1 className={classes.headTag}>
        <u>Burning of Magnesium in Air</u>
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={ReactionProcedure1} />
      </p>

      <h2 className={classes.secondaryTag}>Lab Procedure:&nbsp;</h2>

      <div>
        <table
          border="1"
          cellpadding="0"
          cellspacing="0"
          class="responsive_table"
        >
          <tbody>
            <tr>
              <td valign="top" width="43">
                SI No.
              </td>
              <td valign="top" width="476">
                Experiment
              </td>
              <td valign="top" width="180">
                Observation
              </td>
              <td valign="top" width="210">
                Inference
              </td>
            </tr>
            <tr>
              <td valign="top" width="33">
                1&nbsp;
              </td>
              <td valign="top" width="476">
                Take a piece of magnesium ribbon and rub it with&nbsp; sand
                paper to remove dirt from its surface.
              </td>
              <td valign="top" width="180">
                It looks silvery white.
              </td>
              <td valign="top" width="210">
                Colour of magnesium metal is silvery white.
              </td>
            </tr>
            <tr>
              <td valign="top" width="43">
                2
              </td>
              <td valign="top" width="476">
                Hold the magnesium ribbon with the help of a pair of tongs,
                light the magnesium and collect the ash of burnt ribbon in a
                china dish.
              </td>
              <td valign="top" width="180">
                It burns brilliantly and a white ash is left behind.
              </td>
              <td valign="top" width="210">
                Magnesium burns in air to form Magnesium oxide (MgO).
              </td>
            </tr>
            <tr>
              <td valign="top" width="43">
                3&nbsp;
              </td>
              <td valign="top" width="476">
                Take a moist red litmus paper and bring it in contact with the
                white ash of MgO.
              </td>
              <td valign="top" width="180">
                Red litmus paper turns blue.
              </td>
              <td valign="top" width="246">
                MgO is basic in nature.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Inferences:</h2>

      <ul>
        <li>
          Magnesium is a silvery white metal that burns in air and utilizes
          atmospheric oxygen from air to form magnesium oxide.
          <p>
            <img align="middle" alt="" src={ReactionEqu1} />
          </p>
        </li>
      </ul>

      <ul>
        <li>
          Magnesium oxide changes the colour of red litmus paper to blue. This
          reaction shows that magnesium oxide is basic in nature.
        </li>
        <li>
          The formation of magnesium oxide is a direct combination reaction of
          two elements: magnesium and oxygen. Magnesium oxide is entirely
          different from the reactants magnesium and oxygen. So, this reaction
          is a chemical change.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>
          The surface of magnesium ribbon should be properly cleaned with sand
          paper.
        </li>
        <li>The white ash of magnesium oxide should not be touched.</li>
        <li>
          Magnesium ribbon should be held by a pair of tongs while burning it.
        </li>
        <li>
          It is better to use sun glasses to protect eyes from dazzling light of
          burning magnesium ribbon.
        </li>
      </ol>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>
        <u>Reaction of Iron Nails with Copper Sulphate Solution in Water</u>
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={ReactionProcedure2} />
      </p>

      <h2 className={classes.secondaryTag}>Lab Procedure:</h2>

      <ul>
        <li>
          Clean two iron nails of sufficient size by rubbing with sand paper so
          that their colour appears greyish.
        </li>
        <li>
          Take sufficient quantity of copper sulphate solution in two test tubes
          and fix one test tube in each stand.
        </li>
        <li>
          Tie one iron nail with a thread and hang it in one test tube so that
          it is completely immersed in copper sulphate solution. Tie the other
          end of the thread with the stand.
        </li>
        <li>
          Keep the other nail in a petri dish for comparison after the
          experiment.
        </li>
        <li>Keep the two test tubes undisturbed for about 15 min.</li>
        <li>
          After 15 min. remove the iron nail immersed in copper sulphate
          solution and put it in the petri dish.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          There is a brown coating on the iron nail which was dipped in the
          copper sulphate solution, whereas the iron nail placed in petri dish
          shows greyish colour of iron.
        </li>
        <li>
          The colour of the copper sulphate solution in which the iron nail was
          dipped turns light greenish, whereas the solution of copper sulphate
          in the other test tube does not change.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Inferences:</h2>

      <ul>
        <li>
          The brown coating on the iron nail shows that copper is deposited on
          the iron nail by displacing iron.
        </li>
        <li>
          The greenish colour of the solution in the test tube shows that Fe
          <sup>2+</sup> ions are present in the solution.
        </li>
        <li>
          This shows that iron is more reactive than copper as Fe<sup>2+</sup>{' '}
          ions have displaced Cu<sup>2+</sup> ions from copper sulphate solution
          and form light greenish coloured ferrous sulphate solution.
        </li>
      </ul>

      <p>
        <img alt="" src={ReactionEqu2} />
      </p>

      <ul>
        <li>
          This is a single displacement reaction in which copper has been
          displaced by iron from copper sulphate solution and a new compound,
          ferrous sulphate, is formed. So, this reaction is a chemical
          change.&nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>
          Clean the iron nails by rubbing them with sand paper to remove rust,
          dust or greasy surface.
        </li>
        <li>
          Keep the control experiment to compare the colour of iron nails and
          copper sulphate solution.
        </li>
        <li>
          Avoid touching copper sulphate solution or a nail dipped in copper
          sulphate solution. As copper sulphate is poisonous.
        </li>
      </ol>

      <h1 className={classes.headTag}>
        <u>Heating of Copper Sulphate</u>
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={ReactionProcedure3} />
      </p>

      <h2 className={classes.secondaryTag}>Lab Procedure:</h2>

      <ul>
        <li>
          Take a small amount of copper sulphate crystals in a dry boiling tube.
        </li>
        <li>Hold the boiling tube with a test tube holder.</li>
        <li>
          Heat the boiling tube over the flame of a burner first gently and then
          strongly.
        </li>
        <li>
          Observe the colour of copper sulphate crystals after heating for some
          time.
        </li>
        <li>Note the water droplets along the sides of the boiling tube.</li>
        <li>Remove the boiling tube from the flame and cool.</li>
        <li>
          Add 2-3 drops of water on the sample of copper sulphate obtained after
          heating.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          On heating, the colour of copper sulphate crystals changes from blue
          to white.
        </li>
        <li>There are water droplets on the walls of the boiling tube.</li>
        <li>On adding 2-3 drops of water white copper sulphate turns blue.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Inferences:</h2>

      <p>
        <img alt="" src={ReactionEqu3} />
      </p>

      <ul>
        <li>
          Copper sulphate crystals contain water of crystallisation (CuSO
          <sub>4</sub>.5H<sub>2</sub>O).
        </li>
        <li>
          On heating, hydrated copper sulphate loses its water molecule and
          forms white coloured anhydrous copper sulphate.&nbsp;
        </li>
      </ul>

      <ul>
        <li>
          On adding water anhydrous copper sulphate changes to hydrated copper
          sulphate.
        </li>
        <li>It is a reversible chemical change.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>
          Keep the mouth of the test tube away from your face and also from
          other classmates.
        </li>
        <li>Always use test tube holder while heating the test tube.</li>
        <li>Take a small quantity of copper sulphate crystals.</li>
      </ol>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>
        <u>Reaction of Zinc with Dilute Sulphuric Acid</u>
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={ReactionProcedure4} />
      </p>

      <h2 className={classes.secondaryTag}>Lab Procedure:</h2>

      <ul>
        <li>
          Take a small quantity of dil. H<sub>2</sub>SO<sub>4</sub> in a conical
          flask.
        </li>
        <li>Add a small quantity of zinc granules&nbsp; to it.</li>
        <li>
          Bring a wet blue and red litmus paper near the mouth of the conical
          flask one by one.
        </li>
        <li>
          Cork the flask with a one bored cork and insert a jet tube through the
          hole in the cork.
        </li>
        <li>Bring a burning candle near the mouth of the fine jet tube.</li>
        <li>
          Pour a small amount of the solution from the conical flask into a test
          tube.
        </li>
        <li>
          Add few drops of sodium hydroxide solution into it. A white gelatinous
          precipitate is formed.
        </li>
        <li>Add excess of NaOH into the gelatinous precipitate.</li>
        <li>The precipitate is soluble in excess of NaOH.</li>
        <li>
          Take a small amount of the solution in another test tube and pass H
          <sub>2</sub>S gas through it using Kipp's apparatus.
        </li>
        <li>A white precipitate is formed.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Observations:</h2>

      <ul>
        <li>
          After adding zinc granules to dil. H<sub>2</sub>SO<sub>4</sub>{' '}
          evolution of gas bubbles occurs.
        </li>
        <li>
          The gas coming out does not change the colour of blue and red litmus
          papers.
        </li>
        <li>
          On bringing the flame, the gas coming out of the jet tube burns
          instantaneously with a small explosion and produce a pop sound and the
          flame dips out.
        </li>
        <li>
          On adding NaOH to the small amount of solution taken from the conical
          flask, white gelatinous precipitate is formed which is soluble in
          excess of NaOH.
        </li>
        <li>
          On passing hydrogen sulphide gas through the solution taken in the
          test tube a white precipitate is formed.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Inferences:</h2>

      <ul>
        <li>
          Zinc reacts with dil.H<sub>2</sub>SO<sub>4</sub> to form zinc sulphate
          and evolve hydrogen gas.
        </li>
      </ul>

      <p>
        <img alt="" src={ReactionEqu4} />
      </p>

      <ul>
        <li>
          The test with red and blue litmus papers shows that hydrogen gas is
          neither acidic nor basic in nature.
        </li>
      </ul>

      <ul>
        <li>
          NaOH reacts with ZnSO<sub>4</sub> to form a white gelatinous
          precipitate of zinc hydroxide (Zn(OH)<sub>2</sub>) which is soluble in
          excess of NaOH.
        </li>
      </ul>

      <p>
        <img alt="" src={ReactionEqu5} />
      </p>

      <ul>
        <li>
          ZnSO<sub>4</sub> reacts with H<sub>2</sub>S to form a white
          precipitate of zinc sulphide (ZnS).
        </li>
      </ul>

      <p>
        <img alt="" src={ReactionEqu6} />
      </p>

      <ul>
        <li>Zinc metal is more reactive than hydrogen.</li>
      </ul>

      <ul>
        <li>
          This is a single displacement reaction of a non-metal by a
          metal.&nbsp;
        </li>
      </ul>

      <ul>
        <li>
          ZnSO<sub>4</sub> is entirely different in chemical composition and
          chemical properties than Zn and H<sub>2</sub>SO<sub>4</sub>. So it is
          a chemical change
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Use the chemicals judiciously.</li>
        <li>Do not inhale gases evolved directly.</li>
        <li>
          Hydrogen gas instantaneously burns with mild explosion. Therefore, a
          fine jet tube should be used to see the burning of hydrogen.
        </li>
        <li>Handle acids and alkalies carefully.</li>
      </ol>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>
        <u>Reaction between Sodium Sulphate and Barium Chloride</u>
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img alt="" src={ReactionProcedure5} />
      </p>

      <h2 className={classes.secondaryTag}>Lab Procedure:</h2>

      <ul>
        <li>
          Take a small amount of barium chloride solution in a test tube and
          pour it into a conical flask.
        </li>
        <li>
          Then take a small amount of sodium sulphate solution in another test
          tube and add it into barium chloride solution taken in the conical
          flask.
        </li>
        <li>
          Stir the contents of the conical flask and keep it undisturbed for
          some time.
        </li>
        <li>
          After some time decant the upper solution from the conical flask and
          add a small amount of dil. HCl to the precipitate in the conical
          flask.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Observation:</h2>

      <ul>
        <li>
          On adding sodium sulphate to barium chloride a white precipitate is
          immediately formed which is insoluble in dil.HCl.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Inferences:</h2>

      <p>&nbsp;</p>

      <ul>
        <li>
          Sodium sulphate chemically reacts with barium chloride in the form of
          their aqueous solution to form a white precipitate of barium
          sulphate.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>

      <ul>
        <li>
          This reaction is a chemical change, as the products are entirely
          different from the reactants in chemical composition and chemical
          properties.&nbsp;
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Simulator Procedure:</h2>

      <p>You can select the reactions by clicking on the respective icons.</p>

      <p>
        <strong>Burning of Magnesium in Air</strong>
      </p>

      <ul>
        <li>To turn on the burner,&nbsp; click on the knob of the burner.</li>
        <li>
          Click on the tongs to burn the magnesium ribbon and drop the ash into
          the china dish.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          Drag the spatula and put some ash (MgO) into the three litmus papers.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Sublimation of Dry Ice</strong>
      </p>

      <ul>
        <li>Keep some pieces of dry ice in a bowl.</li>
        <li>You can see that a gas is formed from the bowl.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>
          Reaction between Sodium Sulphate (Na<sub>2</sub>SO<sub>4</sub> (aq))
          and Barium Chloride (BaCl<sub>2</sub> (aq))
        </strong>
      </p>

      <ul>
        <li>
          Click on the cork to open the bottle containing BaCl<sub>2</sub>{' '}
          solution.
        </li>
        <li>
          To pour BaCl<sub>2</sub> solution into the conical flask, drag the
          bottle towards the conical flask.
        </li>
        <li>
          Click on the cork to open the bottle containing Na<sub>2</sub>SO
          <sub>4 </sub>solution.
        </li>
        <li>
          To pour Na<sub>2</sub>SO<sub>4</sub> solution into the conical flask,
          drag the bottle towards the conical flask.
        </li>
        <li>You can see that a white precipitate is formed.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the conical flask to place a glass rod in it.</li>
        <li>
          Stir the contents of the conical flask by clicking on the glass rod,
          the preciptate will settle down.
        </li>
        <li>
          Now drag the conical flask to decant the upper solution into the
          beaker.
        </li>
        <li>Click on the cork to open the bottle containing dil.HCl.</li>
        <li>
          To pour dil.HCl into the conical flask, drag the bottle towards the
          conical flask.
        </li>
        <li>Click on the conical flask to place a glass rod in it.</li>
        <li>
          Stir the contents of the conical flask by clicking on the glass rod.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>
          Reaction of Iron nails with Copper sulphate solution (CuSO<sub>4</sub>{' '}
          (aq))
        </strong>
      </p>

      <ul>
        <li>
          You can see two test tubes with copper sulphate solution and two
          cleaned iron nails with thread.
        </li>
        <li>
          Drag one iron nail towards one of the test tubes to immerse it in
          copper sulphate solution.
        </li>
        <li>Once its done, wait till the timer shows 15 minutes.</li>
        <li>
          After about 15 minutes you can see that the colour of the solution
          changes from blue to green.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Click on the thread to remove iron nail from the test tube.</li>
        <li>You can see a brown coating on the iron nail.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>
          Heating of Copper Sulphate (CuSO<sub>4</sub>)
        </strong>
      </p>

      <ul>
        <li>To turn on the burner, click on the knob of the burner.</li>
        <li>
          To heat the hydrated copper sulphate, drag the boiling tube holder
          towards the burner.
        </li>
        <li>
          The burner turns off automatically when blue coloured copper sulpahte
          crystals changes its colour to white.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          Drag the dropper towards the beaker to take distilled water and drag
          it back towards the boiling tube to add water into the boiling tube
          containing anhydrous copper sulphate.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Melting of Ice</strong>
      </p>

      <ul>
        <li>Take few ice cubes in a bowl and keep it for some time.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Reaction of Zinc with Dilute Sulphuric Acid</strong>
      </p>

      <p>
        You can select the identification tests by clicking on the respective
        icons given below.
      </p>

      <p>
        <u>
          <strong>1) Litmus test:</strong>
        </u>
      </p>

      <ul>
        <li>
          To add zinc granules into dilute sulphuric acid, drag the spatula
          towards the test tube.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          Drag the litmus papers one by one over the mouth of the test tube to
          check its reaction with the gas coming out of the test tube.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <u>
          <strong>2) Hydrogen pop test</strong>
        </u>
      </p>

      <ul type="disc">
        <li>
          Drag the spatula towards the test tube to add zinc granules into the
          test tube containing dil. H<sub>2</sub>SO<sub>4</sub>.
        </li>
        <li>
          To close the test tube, drag the single bored cork in which a fine jet
          tube is inserted, towards the test tube.
        </li>
        <li>Drag the burning candle towards the mouth of the fine jet tube.</li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <u>
          <strong>
            3) ZnSO<sub>4</sub> (aq) with NaOH (aq)
          </strong>
        </u>
      </p>

      <ul type="disc">
        <li>
          Drag the spatula towards the test tube to add zinc granules into the
          test tube containing dil. H<sub>2</sub>SO<sub>4</sub>.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Wait for some time to complete the reaction.</li>
        <li>
          Drag the dropper to add NaOH into the test tube containing zinc
          sulphate solution.
        </li>
        <li>
          Click on the test tube to shake the contents of the test tube well.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          Again drag the dropper to add excess of NaOH into the test tube.
        </li>
        <li>
          Click on the test tube to shake the contents of the test tube well.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <u>
          <strong>
            4) ZnSO<sub>4</sub> (aq) with H<sub>2</sub>S gas
          </strong>
        </u>
      </p>

      <ul type="disc">
        <li>
          Drag the spatula towards the test tube to add zinc granules into the
          test tube containing dil. H<sub>2</sub>SO<sub>4</sub>.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>Wait for some time to complete the reaction.</li>
        <li>
          To pass H<sub>2</sub>S gas through the solution, drag the test tube
          towards the Kipp's apparatus.
        </li>
        <li>
          Click on the knob of Kipps apparatus to open it and pass H<sub>2</sub>
          S gas through the solution in the test tube.
        </li>
        <li>Click on the knob of Kipps apparatus to close it.</li>
        <li>
          Click on the test tube to shake the contents of the test tube well.
        </li>
        <li>You can see the inference by clicking on the inference icon.</li>
        <li>
          You can check your result by clicking on the icons shown on the right
          side.
        </li>
        <li>Click on the ‘Reset’ button to redo the experiment.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the ‘<strong>HELP</strong>’ button to
        see the instructions.
      </p>

      <h2 className={classes.secondaryTag}>Precautions:</h2>

      <ol>
        <li>Use the chemicals judiciously.</li>
        <li>
          Keep the mouth of the test tube away from your face and also from
          other classmates.
        </li>
        <li>Handle the acids and alkali carefully.</li>
      </ol>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Chemical Reactions. Retrieved 3 March
          2021, from amrita.olabs.edu.in/?sub=73&brch=2&sim=77&cnt=223
        </Typography>
      </div>
    </div>
  );
}
