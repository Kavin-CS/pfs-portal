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

;

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
      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <h2 className={classes.secondaryTag}>Tests for Unsaturation</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="2">
                Bromine Test
              </td>
              <td rowspan="2">
                Dissolve a little of the given organic compound in about 2 ml of
                distilled water in a test tube and add few drops of bromine
                water to it and shake well.
              </td>
              <td>
                Disappearance of orange-red colour of bromine.
              </td>
              <td rowspan="1">
                Compound is unsaturated.
              </td>
            </tr>
            <tr>
              <td>No disappearance of orange-red colour.</td>
              <td rowspan="1">Compound is saturated.</td>
            </tr>
            <tr>
              <td rowspan="2">
                Baeyer's Test (Alkaline KMnO<sub>4</sub> Test)
              </td>
              <td rowspan="2">
                Dissolve a little of the given organic compound in about 2 ml of
                distilled water in a test tube and add few drops of alkaline
                solution of KMnO<sub>4</sub> to it and shake well.
              </td>
              <td>
                Disappearance of pink colour of KMnO<sub>4</sub>.
              </td>
              <td rowspan="1">Compound is unsaturated.</td>
            </tr>
            <tr>
              <td>
                No disappearance of pink colour of KMnO<sub>4</sub>.
              </td>
              <td rowspan="1">Compound is saturated.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Tests for Alcoholic Group</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Sodium metal Test
                <br />
                <br />
                <br />
                &nbsp;
              </td>
              <td>
                Take about 1 ml of the given liquid in a dry test tube, add
                about 1gram of anhydrous calcium sulphate and shake well to
                remove water. Filter the liquid into another clean dry test tube
                and add a small piece of sodium metal.
              </td>
              <td>Brisk effervescence is produced.</td>
              <td>
                Brisk effervescence is due to the evolution of hydrogen gas
                indicating the presence of alcoholic group.
              </td>
            </tr>
            <tr>
              <td>Ester Test</td>
              <td>
                Take about 1 ml of the give liquid in a clean dry test tube, add
                about 1 ml glacial acetic acid and 2-3 drops of conc. sulphuric
                acid. Warm the mixture on a water bath for about 10 minutes.
                Pour it into about 20 ml of cold water taken in a beaker and
                smell.
              </td>
              <td>A fruity smell is produced.</td>
              <td>Presence of alcoholic group.</td>
            </tr>
            <tr>
              <td>Ceric ammonium nitrate Test</td>
              <td>
                Take about 1 ml of the given liquid in a clean dry test tube and
                add few drops of ceric ammonium nitrate reagent and shake it
                well.
              </td>
              <td>Pink or red colour is developed.</td>
              <td>Presence of alcoholic group.</td>
            </tr>
            <tr>
              <td>Acetyl chloride Test</td>
              <td>
                Take about 2 ml of the given liquid in a clean dry test tube,
                add 1 g of anhydrous calcium sulphate and shake well to remove
                water. Filter the liquid into another clean dry test tube and to
                the filtrate, add 2-3 drops of acetyl chloride. Shake the test
                tube well and bring a glass rod dipped in ammonium hydroxide
                solution near the mouth of the test tube.
              </td>
              <td>White fumes are produced.</td>
              <td>Presence of alcoholic group.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Distinguishing Tests for Primary, Secondary and tertiary Alcohols</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="3">
                &nbsp;Lucas Test
              </td>
              <td rowspan="3">
                Take about 1 ml of dry alcohol in a clean dry test tube and add
                8-10 drops of Lucas reagent. Shake the mixture well.
              </td>
              <td>If cloudiness appears immediately.</td>
              <td rowspan="1">
                Presence of tertiary alcohol.
              </td>
            </tr>
            <tr>
              <td>If cloudiness appears within five minutes.</td>
              <td rowspan="1">Presence of secondary alcohol.</td>
            </tr>
            <tr>
              <td>If cloudiness appears only upon heating.</td>
              <td rowspan="1">Presence of primary alcohol.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Tests for Phenolic Group</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>Litmus Test</td>
              <td>
                Place a drop of the given liquid (or a crystal if solid) on a
                moist blue litmus paper.
              </td>
              <td>Blue litmus turns to red.</td>
              <td>Presence of phenoilc group.</td>
            </tr>
            <tr>
              <td>Ferric chloride Test</td>
              <td>
                Take about 1 ml of neutral ferric chloride solution in a clean
                test tube and add 2-3 drops of the given liquid (or crystal is
                solid).
              </td>
              <td>Violet colour is seen.</td>
              <td>Presence of phenolic group.</td>
            </tr>
            <tr>
              <td rowspan="3">Liebermann’s Test</td>
              <td>
                Take a small quantity of sodium nitrite in a clean dry test tube
                and add about 1 ml of the given liquid (or crystal if solid).
                Heat the test tube very gently for half a minute and allow it to
                cool. Then add about 1 ml of conc. sulphuric acid and shake the
                test tube to mix the contents.
              </td>
              <td>A deep blue or green colouration is seen.</td>
              <td rowspan="3">Presence of phenolic group.</td>
            </tr>
            <tr>
              <td>Add distilled water carefully to the test tube.</td>
              <td>Colour turns to red.</td>
            </tr>
            <tr>
              <td>Add excess of sodium hydroxide solution to the test tube.</td>
              <td>Deep blue or green colour appears.</td>
            </tr>
            <tr>
              <td>Phthalein Dye Test</td>
              <td>
                Take 1 ml of the given liquid in a clean dry test tube (or
                crystal if solid) and add 1-2 drops of conc. sulphuric acid.
                Heat the test tube for about 1 minute in an oil bath. Cool and
                pour the reaction mixture carefully into a beaker containing 15
                ml of dil. sodium hydroxide solution.
              </td>
              <td>
                Pink colour is seen.
                <br />
                &nbsp;
              </td>
              <td>Presence of phenolic group.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Tests for Aldehydic and Ketonic Groups</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>2,4-Dintrophenyl hydrazine Test</td>
              <td>
                Take a small quantity of the given compound in a clean dry test
                tube, add rectified spirit until the compound just dissolves.
                Now add few drops of 2, 4-dinitrophenyl hydrazine solution. Cork
                the test tube, shake the mixture and allow it to stand for 5
                minutes.
              </td>
              <td>
                Yellow or orange precipitate is formed.
              </td>
              <td>Presence of carbonyl group.</td>
            </tr>
            <tr>
              <td>Sodium bisulphite Test</td>
              <td>
                Take about 2 ml of saturated solution of sodium bisulphite in a
                clean test tube and add a small quantity of the given compound.
                Cork the test tube, shake and leave it for 15-20 minutes.
              </td>
              <td>White crystalline precipitate is formed.</td>
              <td>Presence of carbonyl group.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Differentiating Tests for Aldehydes</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>Schiff’s Test</td>
              <td>
                Dissolve a small quantity of the given compound in a clean test
                tube and add about 1 ml of Schiff’s reagent and shake it well.
              </td>
              <td>Pink colour is seen.</td>
              <td>
                Presence of aldehydic group is confirmed.
              </td>
            </tr>
            <tr>
              <td>Tollen’s Test (Silver mirror test)</td>
              <td>
                Take about 1 ml of silver nitrate solution in a clean test tube
                and add 2-3 ml of dilute NaOH solution. A brown precipitate of
                silver oxide forms. Now add dilute ammonia solution dropwise
                until the brown precipitate of silver oxide just dissolves. To
                this add 3-4 drops of the given liquid (or 0.1 g if solid) and
                warm the test tube on a water bath for about 5 minutes.
              </td>
              <td>Shining silver mirror is formed.</td>
              <td>Presence of aldehydic group is confirmed.</td>
            </tr>
            <tr>
              <td>Fehling’s Test</td>
              <td>
                Take 1 ml each of Fehling’s solution A and B in a test tube. Add
                4-5 drops of the given organic liquid (or 0.2g if solid) and
                warm the test in a water bath for 4-5 minutes.
              </td>
              <td>Red precipitate is formed.</td>
              <td>Presence of aldehydic group is confirmed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Differentiating Tests for Ketones</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                <em>m</em>-Dinitrobenzene Test
              </td>
              <td>
                Take a small quantity of the given compound in a clean test tube
                and add about 0.1g of finely powdered m-dinitrobenzene. Now add
                about 1 ml of dilute sodium hydroxide solution and shake it
                well.
              </td>
              <td>
                Violet colour is formed which slowly fades away.
              </td>
              <td>
                Presence of ketonic group is confirmed.
              </td>
            </tr>
            <tr>
              <td>Sodium nitroprusside Test&nbsp;</td>
              <td>
                Dissolve a small quantity of sodium nitroprusside in about 1 ml
                of distilled water in a clean test tube and then add a small
                quantity of the given compound. Shake the test tube well and add
                sodium hydroxide solution dropwise.
              </td>
              <td>Red colouration.</td>
              <td>Presence of ketonic group is confirmed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Tests for Carboxylic Group</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>Litmus Test</td>
              <td>
                Place a drop of the given liquid (or a crystal if solid) on a
                moist blue litmus paper.&nbsp;
              </td>
              <td>Blue litmus turns to red.</td>
              <td>Presence of carboxylic group.</td>
            </tr>
            <tr>
              <td>Sodium Hydrogen Carbonate Test</td>
              <td>
                Take 1 ml of the given organic compound in a test tube and add a
                pinch of sodium bicarbonate to it.
              </td>
              <td>Brisk effervescence is observed.</td>
              <td>Presence of carboxylic group.</td>
            </tr>
            <tr>
              <td>Ester Test</td>
              <td>
                Take a small quantity of the given organic compound in a clean
                test tube, add 1 ml of ethyl alcohol and 1-2 drops of conc.
                sulphuric acid into it. Heat the reaction mixture on a water
                bath for about 5 minutes. Pour the mixture into a beaker
                containing water.
              </td>
              <td>You get a fruity smell.</td>
              <td>Presence of carboxylic group.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>&nbsp;Tests for Amino Group</h2>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>Solubility Test</td>
              <td>
                Take a small quantity of the given compound in a clean test tube
                and add 2-3 ml of dil.HCl and shake the test tube well.
              </td>
              <td>Compound is soluble in dil.HCl.</td>
              <td>Compound may be amine.</td>
            </tr>
            <tr>
              <td>Litmus Test</td>
              <td>
                Place a drop of the given liquid (or a pinch of solid) on a
                moist red litmus paper.
              </td>
              <td>Red litmus turns to blue.</td>
              <td>Compound may be amine.</td>
            </tr>
            <tr>
              <td>Carbylamines Test</td>
              <td>
                Take a small quantity of solid KOH in a clean dry test tube and
                add about 2 ml of ethanol. Warm the test tube until the pellets
                dissolve. To this add a few drops of chloroform and small amount
                of the given compound and warm gently.
              </td>
              <td>An offensive smell is produced.</td>
              <td>Presence of primary amine.</td>
            </tr>
            <tr>
              <td>Azo-Dye Test</td>
              <td>
                Take three test tubes A, B and C. In test tube A, dissolve a
                small quantity of the compound in 2 ml of HCl. In test tube B,
                prepare an aqueous solution of sodium nitrite. In test tube C,
                dissolve a small quantity of β-naphthol in dilute sodium
                hydroxide. Place all the three test tubes in an ice bath. Now
                add sodium nitrite solution into test tube A and the resulting
                solution is added to test tube C.
              </td>
              <td>Formation of a red or orange dye.</td>
              <td>Presence of aromatic primary amine is confirmed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Distinguishing Tests for Primary, Secondary and Tertiary Amines</p>

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
              <td>Experiment</td>
              <td>Procedure</td>
              <td>observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="3">
                Nitrous acid Test
              </td>
              <td rowspan="3">
                Make a solution of about 1 g of sodium nitrite in about 5 ml
                distilled water in a test tube and cool it in an ice bath. In a
                separate test tube, dissolve a small quantity of the given
                compound in about 1 ml of conc. sulphuric acid and cool this
                also in ice bath. Mix both the solutions.
              </td>
              <td>Bubbles of nitrogen gas.</td>
              <td>
                Presence of primary aliphatic amine.
              </td>
            </tr>
            <tr>
              <td>Formation of a yellow oily layer.</td>
              <td>Presence of secondary amine.</td>
            </tr>
            <tr>
              <td>No visible change.</td>
              <td>Presence of tertiary amine.</td>
            </tr>
            <tr>
              <td rowspan="3">Hinsberg Test</td>
              <td rowspan="3">
                Take a small quantity of the given compound in a clean test
                tube, add about 2 ml of 25% NaOH, 2 ml of water and 1 ml of
                benzene sulphonyl chloride. Shake the mixture for about 10
                minutes and then cool under tap water and note the formation of
                precipitate. Treat the precipitate with 2 ml of conc.HCl.
              </td>
              <td>
                No precipitate (clear solution). On addition of conc. HCl,
                insoluble material is seen.
              </td>
              <td>Presence of primary amine.</td>
            </tr>
            <tr>
              <td>
                Precipitate is formed in the test tube. It does not dissolve in
                conc. HCl.
              </td>
              <td>Presence of secondary amine.</td>
            </tr>
            <tr>
              <td>
                Precipitate is formed in the test tube. It dissolves in conc.
                HCl.
              </td>
              <td>Presence of tertiary amine.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <p>You can select the type from ‘Select the type’ drop down list.</p>

      <h3 className={classes.secondaryTag}>Unsaturation</h3>

      <ul>
        <li>You can select the test from ‘Select the test’ drop down list.</li>
      </ul>

      <p>
        <u>Bromine Water Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to test tube A to add bromine water to the saturated
          compound.
        </li>
        <li>Drag test tube A to shake it well.</li>
        <li>You can see that bromine water does not decolourise.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to test tube B to add bromine water to the
          unsaturated compound.
        </li>
        <li>Drag test tube B to shake it well.</li>
        <li>You can see the decolourisation of bromine water.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>
        <u>Baeyer’s Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to test tube A to add alkaline potassium permanganate
          to the saturated compound.
        </li>
        <li>Drag test tube A to shake it well.</li>
        <li>
          You can see that potassium permanganate solution does not decolourise.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to test tube B to add alkaline potassium permanganate
          to the unsaturated compound.
        </li>
        <li>Drag test tube B to shake it well.</li>
        <li>
          You can see the decolourisation of potassium permanganate solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <h3 className={classes.secondaryTag}>Functional group</h3>

      <ul>
        <li>
          You can select the functional group from ‘Select the functional group’
          drop down list.
        </li>
      </ul>

      <p>
        <strong>Alcohols</strong>
      </p>

      <ul>
        <li>You can select the test from ‘Select the test’ drop down list.</li>
      </ul>

      <p>
        <u>Sodium Metal Test</u>
      </p>

      <ul>
        <li>
          Drag the spatula to test tube A to add anhydrous calcium sulphate to
          the sample.
        </li>
        <li>
          Drag test tube A to shake it well and remove the moisture content in
          the sample.
        </li>
        <li>
          Drag test tube A to test tube B to filter contents of A into B through
          the funnel and filter paper.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the forceps to the bottle containing sodium metal to take a small
          piece of metal. .
        </li>
        <li>
          Drag the forceps to the filter paper to place the sodium metal on the
          filter paper.
        </li>
        <li>
          Drag the other filter paper to the filter paper containing sodium
          metal to press the sodium metal with the paper to dry it.
        </li>
        <li>
          Drag the forceps to the filter paper to take the dry piece of sodium.
        </li>
        <li>
          Drag the forceps to the test tube to put the dry piece of sodium into
          the sample.
        </li>
        <li>
          You can see the formation of brisk effervescence inside the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Ester Test&nbsp;&nbsp; &nbsp;</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add glacial acetic acid to the
          sample.
        </li>
        <li>
          Drag the dropper to the test tube to add Conc. sulphuric acid to the
          sample.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag the test tube to the beaker to place it in the water bath.</li>
        <li>Click on the switch of the hot plate to heat the water bath.</li>
        <li>Wait for 10 minutes to heat the contents of the test tube.</li>
        <li>
          Drag the test tube to the small beaker to pour the contents of the
          test tube into the cold water.
        </li>
        <li>A fruity smell is produced.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Ceric Ammonium Nitrate Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add ceric ammonium nitrate
          solution to the sample.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>You can see the formation of red colour in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Acetyl chloride test</p>

      <ul>
        <li>
          Drag the spatula to test tube A to add anhydrous calcium sulphate to
          the sample.
        </li>
        <li>
          Drag test tube A to shake it well and remove the moisture content in
          the sample.
        </li>
        <li>
          Drag test tube A to test tube B to filter contents of A into B through
          the funnel and filter paper.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the dropper to test tube B to drop acetyl chloride into the
          sample.
        </li>
        <li>Drag test tube B to shake it well.</li>
        <li>
          Drag the glass rod to the bottle to dip it in ammonium hydroxide
          solution and drag it again to test tube B to hold it over the mouth of
          the test tube.
        </li>
        <li>You can see the formation of white fumes from the glass rod.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Iodoform Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop 1% iodine solution into the
          sample.
        </li>
        <li>
          Drag the dropper to the test tube to drop dil. sodium hydroxide
          solution into the sample.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag the test tube to the beaker to place it in the water bath.</li>
        <li>Click on the switch of the hot plate to heat the water bath.</li>
        <li>Wait for 10 minutes to heat the contents of the test tube.</li>
        <li>
          You can see the formation of a yellow precipitate in the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <p>Lucas Test</p>

      <ul>
        <li>
          Drag the dropper to test tube A to drop Lucas reagent into tertiary
          alcohol.
        </li>
        <li>Drag test tube A to shake it well.</li>
        <li>
          You can see the immediate formation of cloudiness in the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to test tube B to drop Lucas reagent into secondary
          alcohol.
        </li>
        <li>Drag test tube B to shake it well for 5 minutes.</li>
        <li>
          You can see the formation of cloudiness in the test tube after 5
          minutes.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to the test tube C to drop Lucas reagent into a
          primary alcohol.
        </li>
        <li>
          Drag test tube C to shake it well and place it over the Bunsen burner.
        </li>
        <li>
          Click on the knob of the burner to turn it on and heat the contents of
          test tube C.
        </li>
        <li>
          You can see the formation of cloudiness in the test tube after
          heating.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
        <li>Note: Click on the ‘HELP’ button to see the instructions.</li>
        <li>Phenols</li>
        <li>You can select the test form ‘Select the test’ drop down list.</li>
        <li>Litmus test</li>
        <li>
          Drag the dropper to the moist blue litmus paper to drop the sample on
          it.
        </li>
        <li>You can see that the blue litmus turns red.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Ferric Chloride Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop the sample into neutral
          ferric chloride solution.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>You can see the formation of violet colour in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Liebermann’s Test</p>

      <ul>
        <li>
          Drag the spatula to the test tube to add sodium nitrite into the
          sample.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube over the Bunsen burner to heat the contents of the
          test tube.
        </li>
        <li>Wait for 10 minutes to cool the contents of the test tube.</li>
        <li>
          Drag the dropper to the test tube to drop Conc. sulphuric acid into
          it.
        </li>
        <li>Drag the test tube to the canvas area to shake it well.</li>
        <li>You can see the formation of a deep blue or green colour.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the dropper to the test tube to drop distilled water into the
          contents of the test tube.
        </li>
        <li>You can see that the colour changes to deep red.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to the test tube to drop excess sodium hydroxide
          solution into the contents of the test tube.
        </li>
        <li>You can see that the colour changes to deep blue or green.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Phthalein Dye Test</p>

      <ul>
        <li>
          Drag the spatula to the test tube to add phthalic anhydride into the
          sample.
        </li>
        <li>
          Drag the dropper to the test tube to drop Conc. sulphuric acid into
          the sample.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag the test tube to the beaker to place it in the oil bath.</li>
        <li>Click on the switch of the hot plate to heat the oil bath.</li>
        <li>Wait for 10 minutes to heat the contents of the test tube.</li>
        <li>Drag the test tube to the rack to return it.</li>
        <li>Wait for 10 minutes to cool the contents of the test tube.</li>
        <li>
          Drag the test tube to the small beaker to pour the contents of the
          test tube into the sodium hydroxide solution.
        </li>
        <li>You can see that a pink colour has developed in the beaker.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <p>Aldehydes</p>

      <ul>
        <li>You can select the test form ‘Select the test’ drop down list.</li>
      </ul>

      <p>Schiff’s Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add Schiff’s reagent into the
          sample.
        </li>
        <li>Drag the test tube to the canvas area to shake it well.</li>
        <li>You can see the formation of pink colour in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Tollen’s Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop silver nitrate solution into
          it.
        </li>
        <li>
          Drag the dropper to the test tube to add dil. sodium hydroxide
          solution to silver nitrate solution.
        </li>
        <li>
          You can see the formation of a brown precipitate in the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to the test tube to add dil. ammonia solution to the
          brown precipitate.
        </li>
        <li>
          You can see that the brown precipitate dissolves in dil. ammonia.
        </li>
        <li>Drag the dropper to the test tube to add the sample to it.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag the test tube to the beaker to place it in the water bath.</li>
        <li>Click on the switch of the hot plate to heat the water bath.</li>
        <li>Wait for 10 minutes to heat the contents of the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Fehling’s Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop Fehling’s solution A into
          the sample.
        </li>
        <li>
          Drag the dropper to the test tube to drop Fehling’s solution B into
          the sample.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag the test tube to the beaker to place it in the water bath.</li>
        <li>Click on the switch of the hot plate to heat the water bath.</li>
        <li>Wait for some time to heat the contents of the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
        <li>Note: Click on the ‘HELP’ button to see the instructions.</li>
        <li>2,4 – Dinitrophenylhydrazine Test</li>
        <li>
          Drag the dropper to the test tube to add rectified spirit into the
          sample.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>
          Drag the dropper to the test tube to add 2,4–dinitrophenylhydrazine
          reagent to the sample.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
        <li>Note: Click on the ‘HELP’ button to see the instructions.</li>
        <li>Sodium Bisulphite Test</li>
        <li>
          Drag the dropper to the test tube to drop saturated solution of sodium
          bisulphite into the sample.
        </li>
        <li>Drag the cork to the test tube to close the test tube with it.</li>
        <li>Drag the test tube to shake it well.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Ketones</p>

      <ul>
        <li>You can select the test form ‘Select the test’ drop down list.</li>
      </ul>

      <p>2,4–Dinitrophenylhydrazine Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add rectified spirit to the
          sample.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>
          Drag the dropper to the test tube to add 2,4–dinitrophenylhydrazine
          reagent into the sample.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Sodium Bisulphite Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop saturated solution of sodium
          bisulphite into the sample.
        </li>
        <li>Drag the cork to the test tube to close the test tube with it.</li>
        <li>Drag the test tube to shake it well.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>m-dinitrobenzene Test</p>

      <ul>
        <li>
          Drag the spatula to the test tube to add m-dinitrobenzene to the
          sample.
        </li>
        <li>
          Drag the dropper to the test tube to add dil. sodium hydroxide to it.
        </li>
        <li>You can see that a violet colour is developed in the test tube.</li>
        <li>Drag the test tube to shake it well.</li>
        <li>You can see that the violet colour slowly fades away.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Sodium Nitroprusside Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add sodium nitroprusside solution
          to the sample.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>
          Drag the dropper to the test tube to drop sodium hydroxide solution
          into it.
        </li>
        <li>You can see the formation of a red colouration.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Carboxylic Acids</p>

      <ul>
        <li>You can select the test form ‘Select the test’ drop down list.</li>
      </ul>

      <p>Litmus Test</p>

      <ul>
        <li>
          Drag the dropper to the moist blue litmus paper to drop the sample on
          it.
        </li>
        <li>You can see that the blue litmus turns red.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Sodium Hydrogen Carbonate Test</p>

      <ul>
        <li>
          Drag the spatula to the test tube to add sodium bicarbonate to the
          sample.
        </li>
        <li>
          You can see the evolution of brisk effervescence in the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <p>Ester Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add ethyl alcohol into the
          sample.
        </li>
        <li>
          Drag the dropper to the test tube to add conc. sulphuric acid into the
          sample.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag the test tube to the beaker to place it in the water bath.</li>
        <li>Click on the switch of the hot plate to heat the water bath.</li>
        <li>Wait for 10 minutes to heat the contents of the test tube.</li>
        <li>
          Drag the test tube to the small beaker to pour the contents of the
          test tube into the cold water.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Amines</p>

      <ul>
        <li>You can select the test form ‘Select the test’ drop down list.</li>
      </ul>

      <p>Solubility Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add dil. HCl into the sample.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Litmus Test</p>

      <ul>
        <li>
          Drag the dropper to the moist red litmus paper to drop the sample on
          it.
        </li>
        <li>You can see that the red litmus turns to blue.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <p>Carbylamines Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add ethanol to potassium
          hydroxide.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube over the burner to warm the contents of the test
          tube.
        </li>
        <li>Drag the dropper to the test tube to add chloroform to it.</li>
        <li>Drag the dropper to the test tube to drop the sample into it.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the test tube over the burner to warm its contents for 10
          minutes.
        </li>
        <li>An offensive smelling compound is produced.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Azo Dye Test</p>

      <ul>
        <li>
          Drag the dropper to the test tube A to add dil. hydrochloric acid to
          the sample.
        </li>
        <li>
          Drag test tube A to shake it well and dissolve the sample in dil. HCl.
        </li>
        <li>
          Drag the dropper to the test tube C to add dil. sodium hydroxide to
          the β-naphthol.
        </li>
        <li>
          Drag test tube C to shake it well and dissolve β-naphthol in dil.NaOH.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag test tubes A, B and C to place them in ice bath.</li>
        <li>Wait for 10 minutes to cool the solutions.</li>
        <li>
          Drag the test tubes to the test tube rack to place them in the rack.
        </li>
        <li>
          Drag test tube B to test tube A to pour sodium nitrite solution into
          the sample.
        </li>
        <li>
          Drag test tube A to test tube C to pour the resulting solution into
          alkaline solution of β-naphthol.
        </li>
        <li>You can see a scarlet red coloured compound in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
        <li>Note: Click on the ‘HELP’ button to see the instructions.</li>
      </ul>

      <p>Nitrous Acid Test</p>

      <ul>
        <li>
          You can select the amine form ‘Select the amine’ drop down list.
        </li>
      </ul>

      <p>&nbsp;Primary Amines</p>

      <ul>
        <li>
          Drag the dropper to test tube A to add Conc. HCl to primary amine.
        </li>
        <li>
          Drag the spatula to test tube B to add sodium nitrite to distilled
          water.
        </li>
        <li>
          Drag test tube A to shake it well and dissolve the compound in Conc.
          HCl.
        </li>
        <li>Drag test tube B to shake it well and dissolve sodium nitrite.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag test tubes A and B to place them in the ice bath.</li>
        <li>Wait for 10 minutes to cool the solutions.</li>
        <li>
          Drag the test tubes to the test tube rack to place them in the rack.
        </li>
        <li>
          Drag test tube B to test tube A to pour sodium nitrite solution into
          primary amine.
        </li>
        <li>You can see the evolution of gas bubbles in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP</strong>’ button to
        see the instructions.
      </p>

      <p>Secondary Amines</p>

      <ul>
        <li>
          Drag the dropper to test tube A to add Conc. HCl to secondary amine.
        </li>
        <li>
          Drag the spatula to test tube B to add sodium nitrite to distilled
          water.
        </li>
        <li>
          Drag test tube A to shake the test tube well and dissolve the compound
          in Conc. HCl.
        </li>
        <li>
          Drag test tube B to shake the test tube well and dissolve sodium
          nitrite.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag test tubes A and B to place them in the ice bath.</li>
        <li>Wait for 10 minutes to cool the solutions.</li>
        <li>Drag the test tubes to the test tube rack to return them.</li>
        <li>
          Drag test tube B to test tube A to pour sodium nitrite solution into
          secondary amine.
        </li>
        <li>
          You can see the formation of a yellow oily layer in the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Tertiary Amines</p>

      <ul>
        <li>
          Drag the dropper to test tube A to add Conc. HCl to tertiary amine.
        </li>
        <li>
          Drag the spatula to test tube B to add sodium nitrite to distilled
          water.
        </li>
        <li>
          Drag test tube A to shake the test tube well and dissolve the compound
          in Conc. HCl.
        </li>
        <li>Drag test tube B to shake it well and dissolve sodium nitrite.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag test tubes A and B to place them in ice bath.</li>
        <li>Wait for 10 minutes to cool the solutions.</li>
        <li>Drag the test tubes to the test tube rack to return them.</li>
        <li>
          Drag test tube B to test tube A to pour sodium nitrite solution into
          tertiary amine.
        </li>
        <li>You cannot see any characteristics changes in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Hinsberg Test</p>

      <ul>
        <li>
          You can select the amine form ‘Select the amine’ drop down list.
        </li>
      </ul>

      <p>Primary Amine</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add 25% sodium hydroxide solution
          to primary amine.
        </li>
        <li>
          Drag the dropper to the test tube to add water to the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to add benzene sulphonyl chloride to
          the test tube.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the test tube to the beaker to place it in the beaker containing
          water.
        </li>
        <li>Wait for 10 minutes to cool the contents of the test tube.</li>
        <li>Drag the test tube to the test tube rack to return it.</li>
        <li>
          Drag the dropper to the test tube to add Conc. hydrochloric acid to
          it.
        </li>
        <li>
          You can see the formation of a white precipitate in the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <p>Secondary Amine</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add 25% sodium hydroxide solution
          into secondary amine.
        </li>
        <li>
          Drag the dropper to the test tube to add water to the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to add benzene sulphonyl chloride to
          the test tube.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the test tube to the beaker to place it in the beaker containing
          water.
        </li>
        <li>Wait for 10 minutes to cool the contents of the test tube.</li>
        <li>
          You can see the formation of a white precipitate in the test tube.
        </li>
        <li>Drag the test tube to the test tube rack to return it.</li>
        <li>
          Drag the dropper to the test tube to add Conc. hydrochloric acid to
          it.
        </li>
        <li>You cannot see any characteristics changes in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>Tertiary Amine</p>

      <ul>
        <li>
          Drag the dropper to the test tube to add 25% sodium hydroxide solution
          to tertiary amine.
        </li>
        <li>
          Drag the dropper to the test tube to add water to the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to add benzene sulphonyl chloride to
          the test tube.
        </li>
        <li>Drag the test tube to shake it well.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the test tube to the beaker to place it in the beaker containing
          water.
        </li>
        <li>Wait for 10 minutes to cool the contents of the test tube.</li>
        <li>
          You can see the formation of a white precipitate in the test tube.
        </li>
        <li>Drag the test tube to the test tube rack to return it.</li>
        <li>
          Drag the dropper to the test tube to add Conc. hydrochloric acid to
          it.
        </li>
        <li>You can see that the white precipitate dissolves.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Tests for the functional groups.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=141&cnt=2
        </Typography>
      </div>
    </div>
  );
}
