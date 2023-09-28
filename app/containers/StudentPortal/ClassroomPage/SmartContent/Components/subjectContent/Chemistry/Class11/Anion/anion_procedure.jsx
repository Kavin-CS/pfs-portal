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

import LassaignePro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro1.jpg';
import LassaignePro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro2.jpg';
import LassaignePro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro3.jpg';
import LassaignePro4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Lassaigne1/lassaigne-pro4.jpg';

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

      <h2 className={classes.secondaryTag}>Prelimimatry Tests</h2>

      <h3 className={classes.secondaryTag}>Physical Examination of the Salt</h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="2">
                Smell:&nbsp;Add a drop of water to a pinch of the salt and rub
                it between the fingers.
              </td>
              <td>Vinegar like smell.</td>
              <td rowspan="1">
                &nbsp;May be CH<sub>3</sub>COO<sup>-</sup>
              </td>
            </tr>
            <tr>
              <td>Smell like that of rotten eggs.</td>
              <td rowspan="1">
                May be S<sup>2- </sup>
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;<strong>Density</strong>
              </td>
              <td>&nbsp;Light fluffy powder.</td>
              <td>
                &nbsp;May be CO<sub>3</sub>
                <sup>2-</sup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Dry Heating Test</h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td colspan="2">
                (a) Colourless and odourless gas
              </td>
            </tr>
            <tr>
              <td rowspan="13">
                Heat a small quantity of the salt in a dry test tube.
              </td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>Colourless and odourless gas turns lime water milky.</td>
              <td>
                The gas evolved is CO<sub>2</sub>. CO<sub>3</sub>
                <sup>2-</sup> or C<sub>2</sub>O<sub>4</sub>
                <sup>2-</sup> may be present.
              </td>
            </tr>
            <tr>
              <td colspan="2">
                (b) Colourless gas with odour
              </td>
            </tr>
            <tr>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Colourless gas with the smell of rotten eggs, and turns lead
                acetate paper black.
              </td>
              <td>
                The gas evolved is H<sub>2</sub>S. Hydrated S<sup>2-</sup> may
                be present.
              </td>
            </tr>
            <tr>
              <td>
                Colourless gas with smell of burning sulphur.
              </td>
              <td>
                The gas evolved is SO<sub>2</sub>. SO<sub>3</sub>
                <sup>2-</sup> may be present.
              </td>
            </tr>
            <tr>
              <td>
                Colourless gas with pungent smell, gives white fumes with
                ammonia.
              </td>
              <td>
                The gas evolved is HCl. Cl<sup>-</sup> may be present.
              </td>
            </tr>
            <tr>
              <td>Colourless gas with the smell of vinegar.</td>
              <td>
                CH<sub>3</sub>COO<sup>-</sup> may be present.
              </td>
            </tr>
            <tr>
              <td colspan="2">
                (c) Coloured gases
              </td>
            </tr>
            <tr>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Reddish brown fumes that turns ferrous sulphate solution black.
              </td>
              <td>
                The gas evolved is NO<sub>2</sub>. NO<sub>2</sub>
                <sup>-</sup> or NO<sub>3</sub>
                <sup>-</sup> may be present.
              </td>
            </tr>
            <tr>
              <td>
                Greenish yellow gas that turns the starch iodide paper blue.
              </td>
              <td>
                Chlorine gas is evolved. Cl<sup>-</sup> may be present.
              </td>
            </tr>
            <tr>
              <td>Dark violet vapours that turns starch paper blue.</td>
              <td>
                Iodine vapours are formed. I<sup>-</sup> may be present.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Dilute Sulphuric Acid Test</h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="5">
                Take a small quantity of the salt in a test tube and add 1-2 ml
                of dilute sulphuric acid.
              </td>
              <td>
                Colourless odourless gas with brisk effervescence, turns lime
                water milky.
              </td>
              <td rowspan="1">
                The gas evolved is CO<sub>2</sub>. This may be due to the
                presence of CO<sub>3</sub>
                <sup>2-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                Colourless gas with pungent smell, turns acidified potasium
                dichromate paper or solution green.
              </td>
              <td rowspan="1">
                The gas evolved is SO<sub>2</sub>. This may be due to the
                presence of SO<sub>3</sub>
                <sup>2-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                Colourless gas with smell like that of rotten eggs, turns lead
                acetate paper black.
              </td>
              <td rowspan="1">
                The gas evolved is H<sub>2</sub>S. This may be due to the
                presence of S<sup>2-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                Reddish brown gas with pungent smell, turns ferrous sulphate
                solution black.
              </td>
              <td rowspan="1">
                The gas evolved is NO<sub>2</sub>. This may be due to the
                presence of NO<sub>2</sub>
                <sup>-</sup>.
              </td>
            </tr>
            <tr>
              <td>No gas is evolved.</td>
              <td rowspan="1">
                &nbsp;CO<sub>3</sub>
                <sup>2-</sup>, SO<sub>3</sub>
                <sup>2-</sup>, S<sup>2-</sup>, NO<sub>2</sub>
                <sup>-</sup> etc may be absent.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Concentrated Sulphuric Acid Test</h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="4">
                To a small quantity of salt in a test tube, add 1-2 ml of conc.
                sulpuric acid.
              </td>
              <td>
                Colourless gas with pungent smell, form white fumes with aqueous
                ammonia when a glass rod dipped in aqueous ammonia is shown over
                the mouth of the test tube.
              </td>
              <td rowspan="1">
                The gas evolved is HCl. This may be due to the presence of Cl
                <sup>-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                Reddish brown gas with pungent smell, turns starch paper yellow.
              </td>
              <td rowspan="1">
                The gas evolved is Br<sub>2</sub>. This may be due to the
                presence of Br<sup>-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                Deep violet vapours with pungent smell, turns starch paper blue.
              </td>
              <td rowspan="1">
                The gas evolved is I<sub>2</sub>. This may be due to the
                presence of I<sup>-</sup>.
              </td>
            </tr>
            <tr>
              <td>Colourless gas which turns lime water milky.</td>
              <td rowspan="1">
                The gas evolved is CO<sub>2</sub>. This may be due to the
                presence of C<sub>2</sub>O<sub>4</sub>
                <sup>2-</sup>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Independent Group Test</h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                1) Sulphate: Boil a small amount of salt with dil. HCl in a test
                tube. Filter the contents, and to the filtrate add few drops of
                BaCl<sub>2</sub> solution.
              </td>
              <td>A white precipitate is formed.</td>
              <td>
                The white precipitate is BaSO<sub>4</sub>. This indicates the
                presence of SO<sub>4</sub>
                <sup>2-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                2) Phosphate: Boil a small amount of salt with conc. HNO
                <sub>3</sub> in a test tube and add few drops of ammonium
                molybdate solution.
              </td>
              <td>A yellow precipitate is formed.</td>
              <td>
                The yellow precipitate is ammonium phosphate molybdate. This
                indicates the presence of PO<sub>4</sub>
                <sup>3-</sup>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>Potassium Permanganate Test</h3>

      <div>
        &gt;
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="3">
                To a pinch of the salt in a test tube add about 2 ml of dil.H
                <sub>2</sub>SO<sub>4</sub>. Boil off any gas evolved and add
                little more of dil. H<sub>2</sub>SO<sub>4</sub> and then
                potassium permanganate dropwise.
              </td>
              <td>
                Potassium permanganate is decolourised with the evolution of
                chlorine.
              </td>
              <td rowspan="1">
                This may be due to the presence of Cl<sup>-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                Potassium permanganate is decolourised with the evolution of
                bromine.
              </td>
              <td rowspan="1">
                This may be due to the presence of Br<sup>-</sup>.
              </td>
            </tr>
            <tr>
              <td>
                Potassium permanganate is decolourised with the evolution of
                iodine.
              </td>
              <td rowspan="1">This may be due to the presence of I-.</td>
            </tr>
            <tr>
              <td>
                To a pinch of the salt in a test tube add about 2 ml of dil.H
                <sub>2</sub>SO<sub>4</sub>. Boil off any gas evolved and add
                little more of dil. H<sub>2</sub>SO<sub>4</sub> and then
                potassium permanganate dropwise and warm the test tube.
              </td>
              <td>
                Potassium permanganate is decolourised with the evolution of CO
                <sub>2</sub>.
              </td>
              <td>
                This may be due to the presence of C<sub>2</sub>O<sub>4</sub>
                <sup>2-</sup>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Confirmatory Tests</h2>

      <h3 className={classes.secondaryTag}>
        Confirmation of Carbonate, CO<sub>3</sub>
        <sup>2-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Dil. HCl test:To a portion of the salt solution, add dil HCl.
                <br />
                <br />
                Pass the gas evolved through lime water.
              </td>
              <td>
                Brisk effervescence and evolution of colourless odourless gases.
                <br />
                <br />
                Lime water turns milky.
              </td>
              <td>
                The gas evolved is CO<sub>2</sub>. CO<sub>2</sub> reacts with
                lime water to form white precipitate of CaCO<sub>3</sub> which
                is responsible for the milkness.
              </td>
            </tr>
            <tr>
              <td>
                <strong>
                  Magnesium sulphate test:To a portion of the salt solution, add
                  magnesium sulphate (MgSO<sub>4</sub>) solution.
                </strong>
              </td>
              <td>Formation of white precipitate.</td>
              <td>
                The white precipitate is MgCO<sub>3</sub>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Note:</strong>
        <em> </em>&nbsp;
      </p>

      <ul>
        <li>
          Do not use sodium carbonate extract for performing the tests of
          carbonate because it contains sodium carbonate.
        </li>
        <li>
          Perform magnesium sulphate test only in case of soluble
          carbonate.&nbsp;
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>
        Confirmation of Sulphite, SO<sub>3</sub>
        <sup>2-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Barium chloride test: To a portion of the salt solution in a
                test tube add barium chloride (BaCl<sub>2</sub>) solution.
                <br />
                <br />
                Add small amount of dil. HCl to the precipitate.
              </td>
              <td>
                A white precipitate is formed
                <br />
                <br />
                The precipitate dissolves with the evolution of gas.
              </td>
              <td>
                The white precipitate is barium sulphite.
                <br />
                <br />
                Barium sulphite dissolves in dil. HCl with the liberation of SO
                <sub>2</sub> gas.
              </td>
            </tr>
            <tr>
              <td>
                Potassium dichromate test: To a portion of aqueous solution of
                salt, add potassium dichromate solution acidified with dil.H
                <sub>2</sub>SO<sub>4</sub>
              </td>
              <td>A green colour is obtained</td>
              <td>This confirms the presence of sulphite ion.</td>
            </tr>
            <tr>
              <td>
                <strong>Potassium permanganate test:</strong> To the aqueous
                solution of the salt add few drops of potassium permanganate
                solution acidified with dil. H<sub>2</sub>SO<sub>4</sub>.
              </td>
              <td>
                Colour of KMnO<sub>4</sub> solution gets discharged.
              </td>
              <td>This confirms the presence of sulphite ion.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Sulphide, S<sup>2-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Sodium nitroprusside test:Take a portion of salt solution in a
                test tube and add a few drops of sodium nitroprusside solution.
              </td>
              <td>Purple or violet colouration is obtained.</td>
              <td>
                The purple or violet colouration is due to the formation of Na
                <sub>4</sub>[Fe(CN)<sub>5</sub>NOS].
              </td>
            </tr>
            <tr>
              <td>
                <strong>Lead acetate test: </strong>To a portion of salt
                solution add lead acetate solution.
              </td>
              <td>A black precipitate is obtained.</td>
              <td>The black precipitate is lead sulphide (PbS).</td>
            </tr>
            <tr>
              <td>
                Cadmium carbonate test: To a portion of aqueous solution of
                salt, add a suspension of cadmium carbonate in water.
              </td>
              <td>A yellow precipitate is formed.</td>
              <td>The yellow precipitate is cadmium sulphide (CdS).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Nitrite, NO<sub>2</sub>
        <sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Ferrous sulphate test: Take a portion of aqueous solution, add
                some dil. acetic acid and ferrous sulphate solution.
              </td>
              <td>A dark brown or black colouration is obtained.</td>
              <td>
                The black colour is due to the formation of FeSO<sub>4</sub>.NO.
              </td>
            </tr>
            <tr>
              <td>
                Starch-iodide test: To a portion of aqueous solution add a few
                drops of dilute H<sub>2</sub>SO<sub>4</sub> and a few drops of
                potassium iodide solution followed by freshly prepared starch
                solution.
              </td>
              <td>A blue solution is obtained.</td>
              <td>
                Iodine liberated during the reaction forms a blue-black complex
                with strach.
              </td>
            </tr>
            <tr>
              <td>
                Diphenylamine test:To a portion of aqueous solution, add few
                drops of diphenylamine.
              </td>
              <td>A deep blue colouration is obtained.</td>
              <td>
                In the presence of nitrite diphenylamine gets oxidised, giving a
                blue colouration.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Nitrate, NO<sub>3</sub>
        <sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>
                <inference />
              </td>
            </tr>
            <tr>
              <td>
                Diphenylamine test: Add a few drops of diphenylalamine to a part
                of aqueous solution of the salt.
              </td>
              <td>A deep blue colouration is obtained.</td>
              <td>
                In the presence of nitrate diphenylamine gets oxidised, giving a
                blue colouration.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Copper chip test:</strong> Heat a small quantity of the
                original salt with concentrated sulphuric acid and a few copper
                chips.
              </td>
              <td>Dark brown fumes of nitrogen dioxide are evolved</td>
              <td>
                The reddish-brown fumes is due to the formation of NO
                <sub>2</sub> gas.
              </td>
            </tr>
            <tr>
              <td>
                Brown Ring test: Add a small quantity of freshly prepared
                solution of ferrous sulphate to a part of the aqueous solution
                and then pour concentrated sulphuric acid slowly along the sides
                of the test tube.
              </td>
              <td>
                A dark brown ring is formed at the junction of the layers of the
                acid and the solution.
              </td>
              <td>
                The brown ring is due to the formation of nitrosonium complex,
                [Fe(NO)(H<sub>2</sub>O)<sub>5</sub>]SO<sub>4</sub>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Chloride, Cl<sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Silver nitrate test: Acidify a portion of aqueous solution with
                dil. HNO<sub>3</sub>. Boil for some time, cool and add AgNO
                <sub>3</sub> solution.
              </td>
              <td>
                A white precipitate is formed which is soluble in ammonium
                hydroxide.
              </td>
              <td>
                The white precipitate is silver chloride which dissolved in
                ammonium hydroxide to form the soluble complex, [Ag(NH
                <sub>3</sub>)<sub>2</sub>]Cl.
              </td>
            </tr>
            <tr>
              <td>
                Maganese dioxide test:Heat a pinch of the salt with a small
                quantity of MnO4 and conc. H<sub>2</sub>SO<sub>4</sub>.
              </td>
              <td>
                Evolution of greenish yellow gas having a pungent irritating
                smell. It turns moist starch-iodide paper blue.
              </td>
              <td>
                The greenish yellow gas is due to the formation of chlorine gas.
              </td>
            </tr>
            <tr>
              <td>
                Chromyl chloride test: Mix a small quantity of the salt with a
                small amount of powdered potassium dichromate. Take the mixture
                in a test tube and add conc. H<sub>2</sub>SO<sub>4</sub>.<br />
                <br />
                Heat the test tube and pass the red vapours evolved into the gas
                detector containing NaOH solution. To the yellow solution thus
                obtained, add dil. CH3COOH and lead acetate solution.
                <br />
                &nbsp;
              </td>
              <td>A yellow precipitate is formed.</td>
              <td>
                The red fumes is due to the formation of chromyl chloride (CrO
                <sub>2</sub>Cl<sub>2</sub>).
                <br />
                CrO<sub>2</sub>Cl<sub>2 </sub>reacts with NaOH to form yellow
                solution of sodium chromate (Na<sub>2</sub>CrO<sub>4</sub>).
                <br />
                Na<sub>2</sub>CrO<sub>4</sub> reacts with lead acetate in
                presence of dil. acetic acid to form yellow precipitate of lead
                chromate (PbCrO<sub>4</sub>).
                <br />
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Bromide, Br<sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Silver nitrate test:Acidify a portion of aqueous with dil. HNO
                <sub>3</sub>. Boil, cool and add AgNO<sub>3</sub> solution.
              </td>
              <td>
                A light yellow precipitate is formed which is partially soluble
                in NH<sub>4</sub>OH.
              </td>
              <td>
                The pale yellow precipitate is silver bromide which is sparingly
                soluble in ammonium hydroxide.
              </td>
            </tr>
            <tr>
              <td>
                Maganese dioxide test: Heat a small quantity of the salt with
                solid MnO<sub>4</sub> and conc. H<sub>2</sub>SO<sub>4</sub>.
              </td>
              <td>
                Evolution of yellow brown vapour of bromine which turn starch
                paper yellow.
              </td>
              <td>The brown vapours is due to the formation of bromine gas.</td>
            </tr>
            <tr>
              <td>
                Chlorine water test:Acidify a portion of aqueous solution with
                dil. HCl and add 1-2 ml of carbon disulphide and then chlorine
                water. Shake vigorously and allow it to stand.
              </td>
              <td>Carbon disulphide layer acquires orange colouration.</td>
              <td>
                Bromine liberated during the reaction being soluble in carbon
                disulphide (CS<sub>2</sub>) imparts an orange colour to the CS
                <sub>2</sub> layer.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Note:</strong> Chlorine water is prepared by adding drop wise
        conc. HCl to a small volume of KMnO<sub>4</sub> solution till the pink
        colour is just discharged, the resulting solution is chlorine water.
      </p>

      <h3 className={classes.secondaryTag}>
        Confirmation of Iodide, I<sup>-</sup>&nbsp;
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Silver nitrate test:Acidify a portion of aqueous solution with
                dil. HNO<sub>3</sub>. Boil, cool and add AgNO<sub>3</sub>{' '}
                solution.
              </td>
              <td>
                A yellow precipitate is formed which is insoluble in NH
                <sub>4</sub>OH.
              </td>
              <td>
                The yellow precipitate is silver iodide which is insoluble in
                ammonium hydroxide.
              </td>
            </tr>
            <tr>
              <td>
                Maganese dioxide test:Heat a small quantity of the salt with
                solid MnO<sub>2</sub> and conc. H<sub>2</sub>SO<sub>4</sub>.
              </td>
              <td>
                Evolution of violet vapours of iodine which turn starch paper
                blue.
              </td>
              <td>
                The violet vapours are due to the formation of iodine gas.
              </td>
            </tr>
            <tr>
              <td>
                Chlorine water test:Acidify a part of aqueous solution with dil.
                HCl, and add 1-2 ml of carbon disulphide and then chlorine
                water. Shake vigorously and allow it to stand.
              </td>
              <td>Carbon disulphide layer acquires violet colouration.</td>
              <td>
                Iodine liberated during the reaction being soluble in carbon
                disulphide (CS<sub>2</sub>) imparts an orange colour to the CS
                <sub>2</sub> layer.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Acetate, CH<sub>3</sub>COO<sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Oxalic acid test:<p>&nbsp;</p>
              </td>
              <td>
                Take a small quantity of the salt in a watch glass. Mix it with
                solid oxalic acid. Prepare a paste of it with a few drops of
                water. Rub the paste and smell it.
              </td>
              <td>Smells like that of vinegar.</td>
              <td>Presence of acetate ion.</td>
            </tr>
            <tr>
              <td>
                Ester test:<p>&nbsp;</p>
              </td>
              <td>
                Take a small quantity of the salt in a test-tube. Add conc. H
                <sub>2</sub>SO<sub>4</sub> (2 ml) and heat. Now ethyl alcohol (1
                ml). Shake. Pour the contents of the tube in a beaker full of
                water. Stir.
              </td>
              <td>Pleasant fruity smell of ester.</td>
              <td>
                The fruity smell is due to the formation of ethyl acetate.
              </td>
            </tr>
            <tr>
              <td>
                Ferric chloride test:<p>&nbsp;</p>
              </td>
              <td>
                Take the salt solution. Add neutral ferric chloride solution.
                Filter. Divide the filtrate into two portions.
                <br />
                <br />
                (i) To one part, add water and boil.
                <br />
                <br />
                (ii) To second part, add dil. HCl.
              </td>
              <td>
                Reddish coloured filtrate.
                <br />
                <br />
                Reddish brown precipitate.
                <br />
                <br />
                Reddish colour disappears.
              </td>
              <td>
                The reddish coloured filtrate is due to the formation of (CH
                <sub>3</sub>COO)<sub>3</sub>Fe.
                <br />
                <br />
                The reddish brown precipitate is due to the formation of (CH
                <sub>3</sub>COO) (OH<sub>2</sub>) Fe.
                <br />
                <br />
                This confirms the presence of acetate ion.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Oxalate, C<sub>2</sub>O<sub>4</sub>
        <sup>2</sup>
        <sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Calcium chloride test: Take a water extract. Add small amount
                dil. acetic acid and boil off CO<sub>2</sub>. Add calcium
                chloride solution.
                <br />
                <br />
                Add dil HNO<sub>3</sub> to the white precipitate and warm.
              </td>
              <td>
                White precipitate is formed.
                <br />
                <br />
                The precipitate dissolves.
              </td>
              <td>
                The white precipitate is calcium oxalate (CaC<sub>2</sub>O
                <sub>4</sub>) and is dissolved in dil.HNO<sub>3</sub>.
              </td>
            </tr>
            <tr>
              <td>
                Potassium permanganate test:Take a pinch of the salt in test
                tube and add. dil. Sulphuric acid. Warm to 60-70 °C and add 2-3
                drops of KMnO<sub>4</sub> solution.
              </td>
              <td>
                Pink colour of KMnO<sub>4</sub> solution is decolourised with
                the evolution of CO<sub>2</sub> gas.
              </td>
              <td>
                The pink colour of potassium permanganate is decolourised with
                the evolution of carbon dioxide gas.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Sulphate, SO<sub>4</sub>
        <sup>2</sup>
        <sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Barium chloride test:To a part of aqueous solution of the salt
                add barium chloride solution.
                <br />
                <br />
                Add dil. HCl to the white precipitate and shake.
                <br />
                &nbsp;
              </td>
              <td>
                A white precipitate is formed.
                <br />
                <br />
                The white precipitate is insoluble in dil. HCl.
              </td>
              <td>
                The white precipitate is barium sulphate (BaSO<sub>4</sub>)
                which is insoluble in dil. HCl
              </td>
            </tr>
            <tr>
              <td>
                Match stick test:Mix a small amount of the salt with sodium
                carbonate and a little powdered charcoal so as to get a paste.
                Take some of this paste on one end of a wooden splinter and heat
                in the reducing flame till the mass fuses. Dip the fused mass
                into sodium nitroprusside solution taken in a china dish.
              </td>
              <td>Violet streaks are produced</td>
              <td>This confirms the presence of sulphate.</td>
            </tr>
            <tr>
              <td>
                Lead acetate test:To a part of aqueous solution of the salt add
                lead acetate solution. Add excess of hot ammonium acetate to
                this precipitate.
              </td>
              <td>
                A white precipitate is formed which is insoluble in excess of
                hot ammonium acetate solution.
              </td>
              <td>
                The white precipitate is lead sulphate (PbSO<sub>4</sub>) which
                is insoluble in excess of hot ammonium acetate.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={classes.secondaryTag}>
        Confirmation of Phosphate, PO<sub>4</sub>
        <sup>3</sup>
        <sup>-</sup>
      </h3>

      <div>
        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          width="82%;"
        >
          <tbody>
            <tr>
              <td>Experiment</td>
              <td>Observation</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td>
                Ammonium molybdate test:To the aqueous solution add concentrated
                nitric acid and boil. Add ammonium molybdate solution in excess
                and again boil.
              </td>
              <td>A yellow precipitate is formed.</td>
              <td>
                The deep yellow precipitate is ammonium phosphate molybdate.
              </td>
            </tr>
            <tr>
              <td>
                Magnesia mixture test:Take a portion of aqueous solution. Add
                magnesia mixture and allow to stand.
              </td>
              <td>A white precipitate is obtained.</td>
              <td>
                The white precipitate is magnesium ammonium phosphate (Mg(NH
                <sub>4</sub>)PO<sub>4</sub>).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <p>
        You can select the preliminary tests from ‘Select the preliminary test’
        drop down list.
      </p>

      <h3 className={classes.secondaryTag}>Physical Examination</h3>

      <ul>
        <li>
          Drag the original salt to the watch glass to put it into the watch
          glass.
        </li>
        <li>Drag the dropper to the watch glass to add water to the sample.</li>
        <li>
          Drag the hand to the watch glass to rub the pre-wetted salt with the
          fingers.
        </li>
        <li>If vinegar like smell is produced, acetate is present.</li>
        <li>If rotten eggs smell is produced, sulphide is present.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If no smell is produced from the salt, you can go to the next test.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Dry Heating Test</h3>

      <p>
        <u>Colourless and Odourless Gas</u>
      </p>

      <ul>
        <li>Drag the cork to the test tube to close the test tube.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the delivery tube to the test tube to insert one end into the
          test tube through the cork.
        </li>
        <li>
          Drag test tube containing lime water to the delivery tube to insert
          the other end of the delivery tube in the lime water.
        </li>
        <li>
          If the lime water turns milky, either carbonate or oxalate is present.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If no characteristic change is seen, you can go to the next test.
        </li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Colourless Gas with Odour</u>
      </p>

      <ul>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the lead acetate paper to the test tube to hold it over the mouth
          of the test tube.
        </li>
        <li>If the lead acetate paper turns black, sulphide is present.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If sulphide is absent, drag the glass rod to the bottle to dip it in
          ammonia solution and again drag it to the test tube to hold it over
          the mouth of the test tube.
        </li>
        <li>If white fumes are produced, chloride is present.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If no characteristic change is seen, you can go to the next test.
        </li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Coloured Gases</u>
      </p>

      <p>Click on the knob of the burner to turn it on.</p>

      <ul>
        <li>
          If greenish yellow gas is evolved, drag the strach - Iodide paper to
          the test tube to hold it over the mouth of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If reddish brown vapours are evolved, drag the strach paper to the
          test tube to hold it over the mouth of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If dark violet vapours are evolved, drag the strach paper to the test
          tube to hold it over the mouth of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If reddish brown gas is evolved, drag the cork to the test tube to
          close the test tube.
        </li>
        <li>
          Drag the delivery tube to the test tube to insert one end into the
          test tube through the cork.
        </li>
        <li>
          Drag test tube containing ferrous sulphate solution&nbsp; to the
          delivery tube to insert the other end of the delivery tube in the
          ferrous sulphate solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If no characteristic change is seen, you can go to the next test.
        </li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Dilute Sulphuric Acid Test</h3>

      <ul>
        <li>
          Drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
          <sub>4</sub> into the salt.
        </li>
        <li>
          If colourless gas with the smell of rotten egg is evolved, drag the
          lead acetate paper to the test tube to hold it in the gas evolved from
          the mouth of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If colourless gas with the smell of burning sulphur is evolved, drag
          the acidified potassium dichromate paper to the test tube to hold it
          in the gas evolved from the mouth of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If reddish brown fumes are evolved, drag the cork to the test tube to
          close the test tube. Then drag the delivery tube to the test tube to
          insert one end into the test tube through the cork. Finally drag the
          test tube containing ferrous sulphate solution to the delivery tube to
          insert the other end of the delivery tube in the ferrous sulphate
          solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If colourless odourless gas with brisk effervescence is seen, drag the
          cork to the test tube to close the test tube. Then drag the delivery
          tube to the test tube to insert one end into the test tube through the
          cork. Finally, drag the test tube containing lime water to the
          delivery tube to insert the other end of the delivery tube in the lime
          water.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If no characteristic change is seen, you can go to the next test.
        </li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Potassium Permanganate Test</h3>

      <ul>
        <li>
          Drag the original salt to the test tube to put it into the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Again drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop potassium permanganate
          solution into it.
        </li>
        <li>
          If the colour of potassium permanganate is decolourised, either
          chlorine or bromide or iodide is present.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If potassium permanganate is not decolourised, click on the knob of
          the burner to turn it on and heat the solution.
        </li>
        <li>
          If the colour of potassium permanganate is decolourised, oxalate is
          present.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If no characteristic change is seen, you can go to the next test.
        </li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Concentrated Sulphuric Acid Test</h3>

      <ul>
        <li>Drag the original salt to put it into the test tube.</li>
        <li>
          Drag the dropper to the test tube to drop conc. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>
          If colourless gas with pungent smell is evolved, drag the glass rod to
          the bottle containing aqueous ammonia to dip it in ammonia solution
          and again drag it to the test tube to hold it in the colourless gas.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>If white fumes are produced, chloride is present.</li>
        <li>
          If reddish brown gas with pungent smell is evolved, drag the starch
          paper to the test tube to hold it in the reddish–brown gas.
        </li>
        <li>If the starch paper turns yellow, bromide is present.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If deep violet vapours with pungent smell is evolevd, drag the starch
          paper to the tests tube to hold it in the violet vapours.
        </li>
        <li>If the starch paper turns blue, iodide is present.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If colourless gas is evolved, drag the cork to the test tube to close
          the test tube. Then drag the delivery tube to the test tube to insert
          it in between the test tube and lime water.
        </li>
        <li>If lime water turns milky, oxalate is present.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If no characteristic change is seen, you can go to the next test.
        </li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Independent Group Test</h3>

      <ul>
        <li>
          Drag the dropper to the test tube to drop dil.HCl into the salt.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the funnel to the test tube placed in the stand to place it over
          the test tube.
        </li>
        <li>
          Drag the test tube to the funnel to filter the solution in the test
          tube.
        </li>
        <li>
          Drag the dropper to drop barium chloride solution into the solution in
          the test tube.
        </li>
        <li>If white precipitate is formed, sulphate is present.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          If sulphate is absent, drag the dropper to the test tube to drop conc.
          HNO<sub>3</sub> into the salt.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the dropper to drop ammonium molybdate solution into it.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        You can select the confirmatory tests from ‘Select the confirmation
        test’ drop down list.
      </p>

      <h3 className={classes.secondaryTag}>Confirmation of Carbonate</h3>

      <p>
        <u>Dilute HCl Test</u>
      </p>

      <ul>
        <li>Drag the dropper to the test tube to drop dil.HCl into it.</li>
        <li>Drag the cork to the test tube to close the test tube.</li>
        <li>
          Drag the delivery tube to the test tube to insert it into the test
          tube through the cork.
        </li>
        <li>
          Drag test tube containing lime water towards the delivery tube to
          insert the other end of the delivery tube in the lime water.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Magnesium sulphate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop magnesium sulphate solution
          into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Sulphite</h3>

      <p>
        <u>Barium chloride Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop barium chloride solution
          into it.
        </li>
        <li>Drag the dropper to the test tube to drop dil.HCl into it.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Potassium Permanganate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop acidified potassium
          permanganate solution into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Potassium Dichromate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop acidified potassium
          dichromate solution into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Sulphide</h3>

      <p>
        <u>Sodium Nitroprusside Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop sodium nitroprusside
          solution into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Lead Acetate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop lead acetate solution into
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Cadmium Carbonate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop cadmium carbonate suspension
          into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Nitrite</h3>

      <p>
        <u>Ferrous Sulphate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop ferrous sulphate solution
          into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop dilute acetic acid into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Starch Iodide Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop dil.H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop potassium iodide solution
          into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop starch solution into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Diphenylamine Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop diphenylamine into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Nitrate</h3>

      <p>
        <u>Diphenylamine Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop diphenylamine into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Copper Chips Test</u>
      </p>

      <ul>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the dropper to the test tube to drop conc.H<sub>2</sub>SO
          <sub>4</sub> into the salt in the test tube.
        </li>
        <li>
          Drag the forceps towards the test tube to put the copper chips into
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Brown Ring Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop ferrous sulphate solution
          into the test tube containing salt solution.
        </li>
        <li>
          Drag the dropper to the test tube to drop conc.H<sub>2</sub>SO
          <sub>4</sub> slowly along the sides of the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Chloride</h3>

      <p>
        <u>Silver Nitrate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop salt solution into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop dil. HNO<sub>3</sub> into
          it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the dropper to the test tube to drop silver nitrate solution into
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Manganese Dioxide Test</u>
      </p>

      <ul>
        <li>
          Drag the original salt to the test tube to put it into the test tube.
        </li>
        <li>
          Drag manganese dioxide to the test tube to put it into the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to drop conc. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the starch-iodide paper to the test tube to hold it in the gas
          evolved from the test tube.&nbsp;&nbsp; &nbsp;
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Chromyl Chloride Test</u>
      </p>

      <ul>
        <li>
          Drag the original salt to the test tube to put it into the test tube.
        </li>
        <li>
          Drag the potassium dichromate powder to the test tube to put it into
          the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to drop conc. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Drag the cork to the test tube to close the test tube.</li>
        <li>
          Drag the delivery tube to the test tube to insert it into the test
          tube through the cork.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the dropper to the test tube to drop dil. acetic acid (CH
          <sub>3</sub>COOH) into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop lead acetate solution into
          it.
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Bromide</h3>

      <p>
        <u>Silver Nitrate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop salt solution into it.
        </li>
        <li>Drag the dropper to the test tube to drop dil. HNO3 into it.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the dropper to the test tube to drop silver nitrate solution into
          it.
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Manganese Dioxide Test</u>
      </p>

      <ul>
        <li>
          Drag the original salt to the test tube to put it into the test tube.
        </li>
        <li>
          Drag manganese dioxide to the test tube to put it into the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to drop conc. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the starch paper to the test tube to hold it in the gas evolved
          from the test tube.&nbsp;&nbsp; &nbsp;
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Chlorine Water Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop salt solution into it.
        </li>
        <li>Drag the dropper to the test tube to drop dil.HCl into it.</li>
        <li>
          Drag the dropper to the test tube to drop carbon disulphide into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop chlorine water into it.
        </li>
        <li>Drag the test tube to shake it.</li>
        <li>Click on the inference icon to see the inference</li>
        <li>
          To redo the test, click on the ‘Reset button’.&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Iodide</h3>

      <p>
        <u>Silver Nitrate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop salt solution into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop dil. HNO<sub>3</sub> into
          it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the dropper to the test tube to drop silver nitrate solution into
          it.
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Manganese Dioxide Test</u>
      </p>

      <ul>
        <li>
          Drag the original salt to the test tube to put it into the test tube.
        </li>
        <li>
          Drag manganese dioxide to the test tube to put it into the test tube.
        </li>
        <li>
          Drag the dropper to the test tube to drop conc. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the starch paper to the test tube to hold it in the gas evolved
          from the test tube.&nbsp;&nbsp; &nbsp;
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Chlorine Water Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop salt solution into it.
        </li>
        <li>Drag the dropper to the test tube to drop dil.HCl into it.</li>
        <li>
          Drag the dropper to the test tube to drop carbon disulphide into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop chlorine water into it.
        </li>
        <li>Drag the test tube to shake it.</li>
        <li>Click on the inference icon to see the inference</li>
        <li>
          To redo the test, click on the ‘Reset button’.&nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Acetate</h3>

      <p>
        <u>Oxalic Acid Test</u>
      </p>

      <ul>
        <li>Drag the watch glass to place it in the table.</li>
        <li>
          Drag the original salt to the watch glass to put it into the watch
          glass.
        </li>
        <li>
          Drag the oxalic acid crystals to the watch glass to put it into watch
          glass.
        </li>
        <li>
          Drag the bottle of distilled water to the table and drag the dropper
          to the watch glass to drop distilled water into the mixture.
        </li>
        <li>
          Drag the hand to the watch glass to rub the pre-wetted mixture with
          the fingers.&nbsp;&nbsp; &nbsp;
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>
          To redo the test, click on the ‘Reset button’.&nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <p>
        <u>Ester Test</u>
      </p>

      <ul>
        <li>
          Drag the original salt to the test tube to put it into the test tube.
        </li>
        <li>
          Drag the bottle of conc.H<sub>2</sub>SO<sub>4</sub> to the table and
          drag the dropper to the test tube to drop conc. H<sub>2</sub>SO
          <sub>4</sub> into the salt.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the bottle of ethyl alcohol to the table and drag the dropper to
          the test tube to drop ethyl alcohol into it.
        </li>
        <li>
          Drag the beaker containing water near the burner to place it on the
          table.
        </li>
        <li>
          Click on the test tube and drag it to shake it well and pour the
          contents into beaker containing water.
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>
          To redo the test, click on the ‘Reset button’.&nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <p>
        <u>Ferric Chloride Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the first test tube placed in the test tube rack
          to drop the salt solution into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop ferric chloride solution
          into it.
        </li>
        <li>
          Drag the filter funnel to the second test tube in the test tube rack
          to place it over the test tube.
        </li>
        <li>
          Drag the test tube to the funnel to filter the contents into the
          second test tube through the funnel.
        </li>
        <li>
          Drag the test tube to the stand to pour half of the reddish coloured
          filtrate into the test tube fixed to the stand.
        </li>
        <li>
          Drag the dropper to the stand to drop water into the test tube
          containing reddish coloured filtrate.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the dropper to the test tube in the test tube rack to drop dil.
          HCl into the reddish coloured filtrate.&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To redo the test, click on the ‘Reset button’.&nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Oxalate</h3>

      <p>
        <u>Calcium Chloride Test</u>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp;
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop salt solution into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop acetic acid (C<sub>2</sub>H
          <sub>4</sub>O<sub>2</sub>) into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the dropper to the test tube to drop calcium chloride solution
          into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop dil.HNO<sub>3</sub> into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To redo the test, click on the ‘Reset button’.&nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <p>
        <u>Potassium Permanganate Test</u>&nbsp;&nbsp; &nbsp;
      </p>

      <ul>
        <li>
          Drag the original salt to the test-tube to put it into test tube.
        </li>
        <li>
          Drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>
          Drag the dropper to the test tube to drop potassium permanganate
          solution into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To redo the test, click on the ‘Reset button’.&nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Sulphate</h3>

      <p>
        <u>Barium Chloride Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop barium chloride solution
          into it.
        </li>
        <li>Drag the dropper to the test tube to drop dil.HCl into it.</li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Match Stick Test</u>
      </p>

      <ul>
        <li>
          Drag the spatula to the watch glass to add sodium carbonate to the
          original salt.
        </li>
        <li>
          Drag the spatula to the watch glass to put powdered charcoal into it.
        </li>
        <li>
          Drag the bottle of distilled water to the watch glass to drop water
          into the mixture.
        </li>
        <li>Drag the glass rod to the watch glass to mix the contents.</li>
        <li>
          Drag the dish containing sodium nitroprusside solution to the watch
          glass to place it on the table.
        </li>
        <li>
          Click on the knob of the burner to turn it on and click on the air
          adjusting disc to close the air hole to get the reducing flame.
        </li>
        <li>
          Drag the match stick to the watch glass to dip it into the mixture.
        </li>
        <li>
          Drag the match stick to the burner to heat the mixture on the tip of
          the match stick in the reducing flame.
        </li>
        <li>
          Drag the match stick towards the dish to dip the fused mass into the
          sodium nitroprusside solution.
        </li>
        <li>Click on the inference icon to see the inference</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Lead Acetate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop lead acetate solution into
          it.
        </li>
        <li>
          Drag the dropper to the test tube to drop hot ammonium acetate
          solution into it.&nbsp;&nbsp; &nbsp;
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Confirmation of Phosphate</h3>

      <p>
        <u>Ammonium Molybdate Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop conc. HNO<sub>3</sub> into
          it.
        </li>
        <li>
          Click on the knob of the burner to turn it on and boil the contents.
        </li>
        <li>
          Drag the dropper to the test tube to drop excess of ammonium molybdate
          solution into it.
        </li>
        <li>
          Click on the knob of the burner to turn it on and again boil the
          contents.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <p>
        <u>Magnesia Mixture Test</u>
      </p>

      <ul>
        <li>
          Drag the dropper to the test tube to drop salt solution into it.
        </li>
        <li>
          Drag the dropper to the test tube to drop magnesia mixture into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the test, click on the ‘Reset button’.</li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Handle the chemicals and apparatus with care.</li>
        <li>
          When heating a solution in a test tube, students should hold the test
          tube with a proper holder.
        </li>
        <li>
          While heating, the mouth of the test tube should not point towards the
          student or any other person in the lab.
        </li>
        <li>
          Students should wear lab coats and goggles while performing the
          experiment.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Qualitative Analysis of Anions.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=31&cnt=2
        </Typography>
      </div>
    </div>
  );
}
