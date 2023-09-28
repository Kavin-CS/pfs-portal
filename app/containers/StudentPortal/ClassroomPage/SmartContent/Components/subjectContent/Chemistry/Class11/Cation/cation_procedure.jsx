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

      <h2 className={classes.secondaryTag}>Preliminary Tests</h2>

      <h2 className={classes.secondaryTag}>Physical Examination</h2>

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
              <td>&nbsp;Experiment</td>
              <td>&nbsp;Observation</td>
              <td>&nbsp;Inference</td>
            </tr>
            <tr>
              <td rowspan="7">
                Colour:Note down the colour of the given salt.
              </td>
              <td>Blue or Bluish green</td>
              <td>
                May be Cu<sup>2+</sup>&nbsp; or Ni<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Greenish</td>
              <td>
                May be Ni<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Light Green</td>
              <td>
                May be Fe<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Dark brown</td>
              <td>
                May be Fe<sup>3+</sup>
              </td>
            </tr>
            <tr>
              <td>Pink</td>
              <td>
                May be Co<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Light pink,flesh colour or earthy colour</td>
              <td>
                May be Mn<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>White</td>
              <td>
                May be Cu<sup>2+</sup>, Ni<sup>2+</sup>, Fe<sup>2+</sup>, Fe
                <sup>3+</sup> and Co<sup>2+</sup> etc are absent.{' '}
                <sup>&nbsp;&nbsp;&nbsp;&nbsp; </sup>
              </td>
            </tr>
            <tr>
              <td>
                Smell: Take a pinch of the salt between your fingers and rub
                with a drop of water. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td>
                Ammoniacal smell
                <br />
                &nbsp;
              </td>
              <td>
                May be NH<sub>4</sub>+
              </td>
            </tr>
            <tr>
              <td rowspan="1">Density</td>
              <td>Heavy</td>
              <td rowspan="1">
                May be the salt of Pb<sup>2+</sup> or Ba<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td rowspan="2">Deliquescence</td>
              <td rowspan="3">Salt absorbs moisture and becomes paste like.</td>
              <td>
                If coloured, may be Cu(NO<sub>3</sub>)<sub>2</sub> ot FeCl
                <sub>3</sub>.
              </td>
            </tr>
            <tr>
              <td>
                If colourless, Maly be Zn(NO<sub>3</sub>)<sub>2</sub>, chlorides
                of Zn<sup>2+</sup>, Mg<sup>2+</sup> etc.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={classes.secondaryTag}>Charcoal Cavity Test</h2>

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
              <td colspan="3">Observation</td>
              <td rowspan="3">Inference</td>
            </tr>
            <tr>
              <td rowspan="7" width="300">
                First make a small cavity on a charcoal box using a borer. Mix a
                small quantity of the salt with double its quantity of sodium
                carbonate in a watch glass. Place the mixture in the cavity made
                on the block of charcoal. Moisten the mixture with a drop of
                water. Direct the reducing flame of the Bunsen burner on the
                cavity by means of a mouth blowpipe. Heat strongly for sometime
                and record the observations.
              </td>
              <td colspan="2">&nbsp;Residue</td>
              <td rowspan="2" width="100">
                Metallic bead
              </td>
            </tr>
            <tr>
              <td width="80">Hot</td>
              <td width="80">Cold</td>
            </tr>
            <tr>
              <td>Yellow</td>
              <td>White</td>
              <td>None</td>
              <td>
                Zn<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Brown</td>
              <td>Yellow</td>
              <td>Grey bead which marks the paper</td>
              <td>
                Pb<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>Red beads or scales</td>
              <td>
                Cu<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>White residue which glows</td>
              <td>None</td>
              <td>None</td>
              <td>
                Ba<sup>2+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Black</td>
              <td>None</td>
              <td>None</td>
              <td>Nothing definite - generally coloured salt</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Note:</strong> To obtain a reducing flame, with the help of a
        mouth blow pipe make the Bunsen burner flame luminous by closing the air
        holes of the burner. Keep the nozzle of the blow pipe just outside the
        flame and blow gently on to the cavity.
      </p>

      <h2 className={classes.secondaryTag}>Cobalt Nitrate Test (Ash Test)</h2>

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
              <td>Observation (colour of the residue)</td>
              <td>Inference</td>
            </tr>
            <tr>
              <td rowspan="4">
                Put one or two drops of cobalt nitrate solution on the white
                residue left after charcoal cavity test. Heat for one or two
                minutes using a blow pipe in oxidising flame. Observe the colour
                of the residue and draw the inference.
              </td>
              <td>Green</td>
              <td rowspan="1">
                Zn<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Pink</td>
              <td rowspan="1">
                Mg<sup>2+</sup>
              </td>
            </tr>
            <tr>
              <td>Blue</td>
              <td rowspan="1">
                Al<sup>3+</sup>
              </td>
            </tr>
            <tr>
              <td>Black</td>
              <td rowspan="1">
                It is due to the formation of CoO. No definite indication.
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Note:</strong>
        </p>

        <ul>
          <li>
            Perform the cobalt nitrate tset only if the residue in the charcoal
            cavity test is white.
          </li>
          <li>
            Do not put more than 2 drops of cobalt nitrate on the white residue
            during cobalt nitrate test. Excess cobalt nitrate may decompose to
            give cobalt oxide which is black in colour.
          </li>
          <li>
            Use dilute solution of cobalt nitrate during cobalt nitrate test.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>Flame test</h2>

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
                <td width="500">Experiment</td>
                <td>Observation(colour of the flame)</td>
                <td>Inference</td>
              </tr>
              <tr>
                <td rowspan="6">
                  Clean the platinum wire by dipping it in conc.HCl taken in a
                  watch glass and then heat it strongly in the flame. This
                  process is repeated till the wire imparts no colour to the
                  flame. Now prepare a paste of the mixture with conc.HCl, in a
                  clean watch glass. Place a small amount of this paste on the
                  platinum wire loop and introduce it into the flame. Note the
                  colour imparted to the flame.
                </td>
                <td>Brick - red (not persistent)</td>
                <td rowspan="1">
                  Ca<sup>2+</sup>
                </td>
              </tr>
              <tr>
                <td>Crimson - red (persistent)</td>
                <td rowspan="1">
                  Sr<sup>2+</sup>
                </td>
              </tr>
              <tr>
                <td>Grassy - green (Persistent)</td>
                <td rowspan="1">
                  Ba<sup>2+</sup>
                </td>
              </tr>
              <tr>
                <td>Bright bluish - gree</td>
                <td rowspan="1">
                  Cu<sup>2+</sup>
                </td>
              </tr>
              <tr>
                <td>Green flashes</td>
                <td rowspan="1">
                  Zn<sup>2+</sup> or Mn<sup>2+</sup>
                </td>
              </tr>
              <tr>
                <td>Dull bluish - white</td>
                <td rowspan="1">
                  Pb<sup>2+</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={classes.secondaryTag}>Confirmatory Tests</h2>

        <p>
          Before carrying out the confirmatory tests for analysis of cations,
          the salt has to be dissolved in some suitable solvent to prepare its
          solution.
        </p>

        <h3 className={classes.secondaryTag}>Preparation of Solution for Confirmatory Tests of Cations</h3>

        <p>
          The very first essential step is to prepare a clear and transparent
          solution of the salt under investigation. For this purpose, the
          following solvents are tried one after another in a systematic order.
        </p>

        <ul>
          <li>Distilled water (cold or hot)</li>
          <li>Dilute HCl (cold or hot)</li>
          <li>Conc. HCl (cold or hot)</li>
        </ul>

        <p>
          In case the salt does not dissolve in a particular solvent even on
          heating, try the next solvent.
        </p>

        <h3 className={classes.secondaryTag}>Procedure</h3>

        <p>
          Take a small quantity of the given salt in a test tube. Add some
          suitable solvent to it and shake well. If it does not dissolve, heat
          the contents gently for sometime. If it does not dissolve even after
          heating for sometime, take the fresh quantity of the salt again and
          treat it in a similar manner with next solvent. The clear solution
          thus obtained is labelled as Original Solution (O.S).
        </p>

        <h3 className={classes.secondaryTag}>
          Analysis of Group-Zero (NH<sub>4</sub>
          <sup>+</sup>)
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
                  To a small amount of solid salt taken in a test tube, add some
                  concentrated solution of sodium hydroxide and heat the
                  contents.
                </td>
                <td>Characteristic ammoniacal smell.</td>
                <td>
                  The gas evolved is NH<sub>3</sub>. Presence of Group Zero (NH
                  <sub>4</sub>
                  <sup>+</sup>).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={classes.secondaryTag}>
          Confirmation of NH<sub>4</sub>
          <sup>+</sup>
        </h2>

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
                  To a small amount of solid salt taken in a test tube, add some
                  concentrated solution of sodium hydroxide and heat the
                  contents.&nbsp;
                  <br />
                  <br />
                  Bring a glass rod dipped in dil. HCl near the mouth of the
                  test tube.
                </td>
                <td>
                  A gas with ammoniacal smell is evolved.
                  <br />
                  <br />
                  White fumes is produced.
                </td>
                <td>
                  The gas evolved is ammonia which gives white fumes with HCl
                  due to the formation of NH<sub>4</sub>Cl. Presence of NH
                  <sub>4</sub>
                  <sup>+ </sup>is confirmed.
                </td>
              </tr>
              <tr>
                <td>
                  Nessler’s Reagent test:
                  <br />
                  When the gas evolved in the above test is passed through
                  Nessler's reagent taken in a test tube.
                </td>
                <td>Brown precipitate is formed</td>
                <td>
                  The brown precipitate is due to the formation of H<sub>2</sub>
                  N.HgO.HgI. Presence of NH<sub>4</sub>
                  <sup>+</sup> is confirmed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>Analysis of Group I</h3>

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
                  To a small amount of salt solution taken in a test tube, add
                  dil. hydrochloric acid. Centrifuge and wash the precipitate.
                </td>
                <td>White precipitate is formed</td>
                <td>
                  The white precipitate may due to the formation of PbCl
                  <sub>2</sub>. Presence of group I (Pb<sup>2+</sup>).
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={classes.secondaryTag}>
          Confirmation of Pb<sup>2+</sup>
        </h2>

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
                <td colspan="3">
                  Boil the white precipitate&nbsp; with 5-10 m of water -
                  Precipitate dissolves - PbCl<sub>2</sub> is soluble in hot
                  water - Divide the solution into three parts.
                </td>
              </tr>
              <tr>
                <td>1.Cool one part of the solution.</td>
                <td>White crystalline precipitate is formed.</td>
                <td>
                  On cooling, precipitate settle down as PbCl<sub>2</sub>.
                  Presence of Pb<sup>2+</sup> ion is confirmed.
                </td>
              </tr>
              <tr>
                <td>
                  2. Potassium iodide test:
                  <br />
                  To the second part of the solution, add potassium iodide
                  solution.
                </td>
                <td>Yellow precipitate is formed.</td>
                <td>
                  Yellow precipitate is due to the formation of PbI<sub>2</sub>.
                  Presence of Pb2+ ion is confirmed.
                </td>
              </tr>
              <tr>
                <td>
                  3. Potassium chromate test:
                  <br />
                  To the third part of the solution add potassium chromate
                  solution.
                </td>
                <td>Yellow precipitate is formed.</td>
                <td>
                  Yellow precipitate is due to the formation of PbCrO
                  <sub>4</sub>. Presence of Pb<sup>2+</sup> ion is confirmed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Note:&nbsp;</strong>
        </p>

        <ul>
          <li>
            If the original solution is prepared in cold dilute hydrochloric
            acid, first group is absent.
          </li>
          <li>
            If the original solution is prepared in conc. hydrochloric acid,
            simply add water. White ppt. shows the presence of first group.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Analysis of Group II (Copper Group)</h3>

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
                  Take about 2 ml of the original solution in a test tube. Add
                  some dil. HCl and warm the contents. Through this solution
                  pass H2S gas from the Kipp's apparatus by pressing the nozzle.
                </td>
                <td>Formation of the black precipitate.</td>
                <td>
                  The black precipitate may be due to the formation of PbS or
                  CuS. Presence of Group II (Pb<sup>2+</sup> or Cu<sup>2+</sup>
                  ).
                </td>
              </tr>
              <tr>
                <td>Formation of the yellow precipitate.</td>
                <td>
                  The yellow precipitate may be due to the formation of As
                  <sub>2</sub>S<sub>3</sub>.Presence of Group II (As
                  <sup>3+</sup>).
                </td>
              </tr>
              <tr>
                <td colspan="3">Centrifuge and separate the precipitate.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>Confirmation of Group II Cations</h3>

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
                <td colspan="2">
                  <p>
                    Black precipitate (Pb<sup>2+</sup> or Cu<sup>2+</sup>)
                  </p>
                  Heat the black precipitate with minimum quantity (1-2 ml) of
                  50% HNO<sub>3</sub> in a tests tube - Precipitate dissolves.
                  <br />
                  <br />
                  Inference:Black precipitate dissolves in 50% HNO<sub>
                    3
                  </sub>{' '}
                  either due to the formation of Pb(NO<sub>3</sub>)<sub>2</sub>{' '}
                  or due to the formation of Cu(NO<sub>3</sub>)<sub>2</sub>.
                  <br />
                  <br />
                  To one part of the above solution, add dil. H<sub>2</sub>SO
                  <sub>4</sub> and alcohol.
                </td>
                <td>
                  Yellow precipitate As<sup>3+</sup>
                </td>
              </tr>
              <tr>
                <td>
                  White precipitate –<br />
                  <br />
                  Inference: On adding H<sub>2</sub>SO<sub>4</sub>, white
                  precipitate of lead sulphate, PbSO<sub>4</sub> is formed.
                  <br />
                  <br />
                  Dissolve the precipitate in hot ammonium acetate solution and
                  divide the solution into two parts:
                </td>
                <td>
                  No white precipitate. To rest of the solution add NH
                  <sub>4</sub>OH in excess -&nbsp;Blue coloured solution (Cu
                  <sup>2+</sup>)<br />
                  <br />
                  Inference:The blue coloured solution is due to the formation
                  of [Cu(NH<sub>3</sub>)<sub>4</sub>][NO<sub>3</sub>]
                  <sub>2</sub> by the reaction between Cu(NO<sub>3</sub>)
                  <sub>2</sub> and NH<sub>4</sub>OH.
                </td>
                <td>
                  Add some Conc. HNO<sub>3</sub> into the yellow precipitate in
                  a test tube –Precipitate dissolves.
                  <br />
                  <br />
                  Inference:The yellow residue of As<sub>2</sub>S<sub>3</sub> is
                  dissolved in Conc. HNO<sub>3</sub> forming arsenic acid, H
                  <sub>3</sub>AsO<sub>4</sub>.<br />
                  <br />
                  Divide the solution into two parts.
                </td>
              </tr>
              <tr>
                <td>Confirmation</td>
                <td>Confirmation</td>
                <td>Confirmation</td>
              </tr>
              <tr>
                <td>
                  1. Potassium iodide test:
                  <br />
                  To one part of the solution in a test tube add potassium
                  iodide solution -&nbsp;Yellow precipitate is formed -The ppt
                  dissolves in boiling water and on cooling recrystalises.
                  <br />
                  <br />
                  Inference: Yellow precipitate is due to the formation of Lead
                  iodide, PbI<sub>2</sub>. Presence of Pb<sup>2+</sup> is
                  confirmed.
                </td>
                <td>
                  1. Potassium ferrocyanide test:
                  <br />
                  To one part of the blue solution in a test tube add few drops
                  of acetic acid and potassium ferrocyanide solution - Chocolate
                  brown precipitate is formed.
                  <br />
                  <br />
                  Inference: The chocolate brown precipitate is due to the
                  formation of Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]. Presence of
                  Cu<sup>2+</sup> is confirmed.
                </td>
                <td>
                  1. Ammonium molybdate test:
                  <br />
                  To a part of the solution in a test tube, add ammonium
                  molybdate solution and heat - Yellow precipitateis formed.
                  <br />
                  <br />
                  Inference:Yellow precipitate is due to the formation of
                  ammonium arseno molybdate ((NH4)<sub>3</sub>AsO<sub>4</sub>
                  .12MoO<sub>3</sub>). Presence of As<sup>3+</sup> is confirmed.
                </td>
              </tr>
              <tr>
                <td>
                  2. Potassium chromate test:
                  <br />
                  To another part of the solution, add potassium chromate
                  solution.–Yellow precipitate is formed –Add some NaOH solution
                  to this precipitate –Precipitate dissolves.
                  <br />
                  <br />
                  Inference:Yellow precipitate is due to the formation of lead
                  chromate. Presence of Pb<sup>2+</sup> is confirmed.
                </td>
                <td>
                  2. Potassium iodide test:
                  <br />
                  To another part of the blue solution add acetic acid and
                  potassium iodide solution -White precipitate is formed in
                  brown coloured solution.
                  <br />
                  <br />
                  Inference: White precipitate formed is Cu<sub>2</sub>I
                  <sub>2</sub>. Brown colour of the solution is due to the
                  formation of iodine. Presence of Cu<sup>2+</sup> is confirmed.
                </td>
                <td>
                  2. Magnesia mixture test:
                  <br />
                  To the second part of the solution, add NH<sub>4</sub>OH
                  solution to make it alkaline and add magnesia mixture - White
                  precipitate is formed.
                  <br />
                  <br />
                  Inference:The white precipitate is due to the formation of
                  Mg(NH<sub>4</sub>)<sub>2</sub>AsO<sub>4</sub>. Presence of As
                  <sup>3+</sup> is confirmed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>Analysis of Group III (Iron Group)</h3>

        <p>
          In case, first and second groups are absent proceed for group III with
          the original solution.
        </p>

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
                  Take about 5 ml of salt solution in a test tube and add 4-5
                  drops of conc. HNO<sub>3</sub>. Boil the solution for some
                  time. Add to it about 2 g of solid NH<sub>4</sub>Cl and boil
                  again.
                  <br />
                  Cool the solution by placing the test tube in a beaker full of
                  water. Add excess of ammonium hydroxide to it and shake.
                </td>
                <td>Reddish brown precipitate.</td>
                <td>
                  Reddish brown precipitate may be due to the formation of
                  ferric hydroxide, Fe(OH)<sub>3</sub>. Presence of Group III
                  cation (Fe<sup>3+</sup>).
                </td>
              </tr>
              <tr>
                <td>White precipitate.</td>
                <td>
                  White precipitate may be due to the formation of aluminium
                  hydroxide, Al(OH)<sub>3</sub>. Presence of Group III cation
                  (Al<sup>3+</sup>)
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  Centrifuge and separate out the precipitate.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>&nbsp;Confirmation of Group - III Cations:</h3>

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
                <td width="450">
                  &nbsp;Reddish Brown precipitate (Fe<sup>3+</sup>)
                </td>
                <td rowspan="2">
                  &nbsp;White precipitate (Al<sup>3+</sup>)<br />
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td width="450">
                  Dissolve the reddish brown ppt. in dilute HCl, and divide the
                  solution into two parts.
                </td>
              </tr>
              <tr>
                <td width="450">&nbsp;Confirmation</td>
                <td>&nbsp;Confirmation</td>
              </tr>
              <tr>
                <td width="450">
                  1. Pottassium ferrocynaide test:
                  <br />
                  To one part of the above solution in a test tube add potassium
                  ferrocyanide solution -&nbsp;Prussian blue colouration.
                  <br />
                  <br />
                  Inference: Prussian blue colour is due to the formation of
                  ferric ferrocyanide, Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]
                  <sub>3</sub>. Presence of Fe<sup>3+</sup> is confirmed.
                </td>
                <td>
                  1. Lake test:
                  <br />
                  Disolve the white ppt. in dilute hydrochloric acid. Add to it
                  two drops of blue litmus solution. To this, add NH<sub>4</sub>
                  OH dropwise till blue colour develops -{' '}
                  <strong>
                    Blue precipitate floating in colourless solution.
                    <br />
                    <br />
                    Inference: The precipitate formed is aluminium hydroxide.
                    Blue colour absorbs on this precipitate. Presence of Al
                    <sup>3+</sup> is confirmed.
                  </strong>
                </td>
              </tr>
              <tr>
                <td width="450">
                  2. Potassium sulphocyanide test:
                  <br />
                  To the second part of the solution, add a little potassium
                  sulphocyanide solution - Blood red colouration.
                  <br />
                  <br />
                  Inference:Blood red colouration is due to the formation of
                  Ferric sulphocyanide, Fe(CNS)<sub>3</sub>. Presence of Fe
                  <sup>3+</sup> is confirmed.
                </td>
                <td>
                  2. Cobalt nitrate/Charcoal cavity test:
                  <br />
                  Take a charcoal box with a small cavity in it. Take a small
                  amount of salt in a watch glass. Mix it with solid sodium
                  carbonate whose quantity is 2 times that of the salt. Put this
                  mixture in the cavity. Add a drop of water to the mixture.
                  Then direct the reducing flame of the Bunsen burner on the
                  cavity using the blowpipe. Heat strongly for sometime - A
                  white residue is formed.
                  <br />
                  Put one or two drops of cobalt nitrate solution on the white
                  residue left after the cavity in the charcoal cavity test.
                  Direct oxidizing flame into the mixture using blow pipe and
                  observe the colour of the residue - Blue mass is formed.
                  <br />
                  <br />
                  Inference: The blue mass is due to the formation of Al
                  <sub>2</sub>O<sub>3</sub>.CoO. Presence of Al<sup>3+</sup> is
                  confirmed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>Analysis of Group IV (Zinc Group)</h3>

        <p>
          If there is no ppt. in the third group, then use the same ammonical
          solution for the fourth group.
        </p>

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
                <td rowspan="3">
                  Pass H<sub>2</sub>S gas through the Ammonical solution.{' '}
                  <strong>(</strong>Ammoniacal solution: - Take about 5 ml of
                  salt solution in a test tube and add 4-5 drops of conc. HNO
                  <sub>3</sub>. Boil the solution for some time. Add to it about
                  2 g of solid NH<sub>4</sub>Cl and boil again. Cool the
                  solution by placing the test tube in a beaker full of water.
                  Add excess of ammonium hydroxide to it and shake
                  <strong>).</strong>
                </td>
                <td>Black precipitate</td>
                <td rowspan="1">
                  Black precipitate may be due to the formation of CoS or NiS.
                  Presence of Group IV cation.
                </td>
              </tr>
              <tr>
                <td>Buff (flesh) coloured precipitate</td>
                <td rowspan="1">
                  Buff coloured precipitate may be due to the formation of MnS.
                  Presence of Group cation.
                </td>
              </tr>
              <tr>
                <td>Dull white precipitate</td>
                <td rowspan="1">
                  Dull white precipitate may be due to the formation of ZnS.
                  Presence of Group IV cation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>Confirmation of Group - IV Cations:</h3>

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
                <td colspan="2">
                  Black precipitate (Co<sup>2+</sup>&nbsp;or Ni<sup>2+</sup>)
                  <br />
                  Observe the colour of the original salt. If the salt is purple
                  or deep violet in colour, perform confirmatory tests for Co
                  <sup>2+</sup> and if it is greenish, perform confirmatory
                  tests for Ni<sup>2+</sup> with the original solution.
                </td>
                <td width="250">
                  Buff (flesh) coloured precipitate (Mn<sup>2+</sup>)
                </td>
                <td width="250">
                  Dull white precipitate (Zn<sup>2+</sup>)<br />
                  To the dull white precipitate, add some dil. HCl and heat the
                  contents – The precipitate dissolves with the evolution of H
                  <sub>2</sub>S gas. Divide the solution into two parts.
                  <br />
                  <br />
                  Inference: The white precipitate of ZnS dissolves in dil. HCl
                  to form ZnCl<sub>2</sub> with the evolution of H<sub>2</sub>S
                  gas.
                </td>
              </tr>
              <tr>
                <td width="200">
                  &nbsp;Confirmation of Co<sup>2+</sup>
                </td>
                <td width="200">
                  &nbsp;Confirmation of Ni<sup>2+</sup>
                </td>
                <td width="250">
                  Confirmation of Mn<sup>2+</sup>
                </td>
                <td width="250">
                  Confirmation of Zn<sup>2+</sup>
                </td>
              </tr>
              <tr>
                <td width="200">
                  1. Potassium nitrite test:
                  <br />
                  To one part of the original salt solution in a tests tube, add
                  ammonium hydroxide to neutralize the solution. Add acetic acid
                  and a crystal of potassium nitrite. Warm the test tube -
                  Yellow precipitate is formed.
                  <br />
                  <br />
                  Inference: The yellow precipitate is due to the formation of
                  potassium cobalti nitrite, K<sub>3</sub>[Co(NO<sub>2</sub>)
                  <sub>6</sub>]. Presence of Co<sup>2+</sup> is confirmed.
                </td>
                <td width="200">
                  1. Dimethyl glyoxime test:
                  <br />
                  To one part of the original salt solution taken in a test
                  tube, add ammonium hydroxide solution and few drops of
                  dimethyl glyoxime - Bright rose red precipitate is obtained.
                  <br />
                  <br />
                  Inference: The bright red colour is due to the formation of Ni
                  – dimethyl glyoxime complex; Ni(dmgH)<sub>2</sub>. Presence of
                  Ni<sup>2+</sup> is confirmed.
                </td>
                <td width="250">
                  1. Sodium hydroxide-Br<sub>2</sub> test:
                  <br />
                  To one part of salt solution in a test tube, add NaOH solution
                  - A white precipitate is formed - Add Bromine water to white
                  precipitate -&nbsp;{' '}
                  <strong>
                    White precipitate turns black or brown.
                    <br />
                    <br />
                    Inference:White precipitate is due to the formation of
                    manganese hydroxide, Mn(OH)<sub>2</sub>.Mn(OH)<sub>2</sub>{' '}
                    turns brown on adding Br<sub>2</sub> water due to the
                    oxidation of Mn(OH)<sub>2</sub> to MnO(OH)<sub>2</sub>.
                    Presence of Mn<sup>2+</sup> is confirmed.
                  </strong>
                </td>
                <td width="250">
                  1. Sodium hydroxide test:
                  <br />
                  To one part of the above solution in a test tube, add sodium
                  hydroxide (NaOH) solution dropwise - A
                  <strong>
                    {' '}
                    white precipitate is formed - Add more NaOH to the white
                    precipitate - The white ppt. dissolves.
                    <br />
                    <br />
                    Inference:The white precipitate is due to the formation of
                    zinc hydroxide, Zn(OH)<sub>2</sub> which is soluble in
                    excess NaOH due to the formation of Na<sub>2</sub>ZnO
                    <sub>2</sub>. Presence of Zn<sup>2+</sup> is confirmed.
                  </strong>
                </td>
              </tr>
              <tr>
                <td width="200">
                  2. Ammonium thiocyanate ether test:
                  <br />
                  To another part of the original salt solution in a test tube,
                  add about 1 ml of ether. Add crystals of ammonium thiocyanate
                  and shake the test tube well. Keep the solution undisturbed
                  for some time –Blue colouration in the ethereal layer.
                  <br />
                  <br />
                  Inference:Blue colour is due to the formation of ammonium
                  cobalti thiocyanate, (NH<sub>4</sub>)<sub>2</sub>[Co(CNS)
                  <sub>4</sub>]. Presence of Co<sup>2+</sup> is confirmed.
                </td>
                <td width="200">
                  2. Sodium hydroxide - Br<sub>2</sub> test:
                  <br />
                  To another part of the original salt solution in a test tube,
                  add sodium hydroxide (in excess) –{' '}
                  <strong>
                    Green precipitate is formed - Add bromine water to the above
                    ppt.. Boil the content - <strong>A</strong>
                    <strong> black precipitate</strong> is formed.
                    <br />
                    <br />
                    Inference:The green precipitate is due to the formation of
                    Ni(OH)<sub>2</sub>.The black precipitate is due to the
                    formation of nickelic hydroxide, Ni(OH)<sub>3</sub>.
                    Presence of Ni
                    <sup>
                      <sub>2+</sub>
                    </sup>{' '}
                    is confirmed.
                  </strong>
                </td>
                <td width="250">
                  2. Lead peroxide test:
                  <br />
                  To black ppt. obtained in above test (Sodium hydroxide-Br
                  <sub>2</sub> test), add conc. HNO<sub>3</sub> and lead
                  peroxide solution. Boil, cool and allow to settle -
                  <strong>
                    {' '}
                    Pink coloured solution is formed.
                    <br />
                    <br />
                    Inference:The pink colour is due to the formation of HMnO
                    <sub>4</sub>. Presence of Mn<sup>2+</sup> is confirmed.
                  </strong>
                </td>
                <td width="250">
                  2. Potassium ferrocyanide test:
                  <br />
                  To the second part above solution in a test tube, add
                  potassium ferrocyanide solution - White or bluish white
                  precipitate is formed.
                  <br />
                  <br />
                  Inference: The white or bluish white precipitate is due to the
                  formation of Zn<sub>2</sub>[Fe(CN)<sub>6</sub>]. Presence of
                  Zn<sup>2+ </sup>is confirmed.
                </td>
              </tr>
              <tr>
                <td width="200">
                  3. Borax bead test:Take some borax using the loop of platimun
                  wire and heat it on a burner, it swells and form transparent
                  colourless glassy bead. Touch the hot bead in the platinum
                  wire with the coloured salt and is heated again in both
                  oxidising and reducing flames. Note colour of the beads in
                  both flames.- A deep blue bead is obtained in oxidising and
                  reducing flames.
                  <br />
                  <br />
                  Inference:Presence of Co<sup>2+</sup> is confirmed.
                </td>
                <td width="200">
                  3. Borax bead test:
                  <br />
                  Take some borax using the loop of platimun wire and heat it on
                  a burner, it swells and form transparent colourless glassy
                  bead. Touch the hot bead in the platinum wire with the
                  coloured salt and is heated again in both oxidising and
                  reducing flames. Note colour of the beads in both flames.- A
                  brown bead in oxidizing and grey bead in reducing flame is
                  obtained.
                  <br />
                  <br />
                  Inference:Presence of Ni<sup>2+</sup> is confirmed.
                </td>
                <td width="250">
                  3. Borax bead test:
                  <br />
                  Take some borax using the loop of platimun wire and heat it on
                  a burner, it swells and form transparent colourless glassy
                  bead. Touch the hot bead in the platinum wire with the
                  coloured salt and is heated again in both oxidising and
                  reducing flames. Note colour of the beads in both flames-A
                  pinkish on oxidising and colourless bead on reducing flames.
                  <br />
                  <br />
                  Inference: Presence of Mn<sup>2+</sup> is confirmed.
                </td>
                <td width="250">
                  2. Cobalt nitrate/Charcoal cavity test:
                  <br />
                  Take a charcoal box with a small cavity in it. Take a small
                  amount of salt in a wach glass. Add solid sodium carbonate
                  whose quantity is 2 time that of the salt into the cavity. Put
                  this mixture in the cavity. Add a drop of water to the
                  mixture. Then direct the reducing flame of Bunsen burner on
                  the cavity by means of blowpipe. Heat strongly for sometime -
                  A white residue is formed.
                  <br />
                  Put one or two drops of cobalt nitrate solution on the white
                  residue left after the cavity in the charcoal cavity test.
                  Direct oxidizing flame into the mixture using blow pipe and
                  observe the colour of the residue - Green mass is formed.
                  <br />
                  <br />
                  Inference:The blue mass is due to the formation of ZnO.CoO.
                  Presence of Zn<sup>2+</sup> is confirmed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>Analysis of Group V (Calcium Group)</h3>

        <p>
          If the fourth group is absent, then proceed for radicals of group V.
        </p>

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
                  To the original salt solution, add 2-3 grams of solid NH
                  <sub>4</sub>Cl, boil and cool the contents and add NH
                  <sub>4</sub>OH till the solution smells ammonia. Then add
                  ammonium carbonate solution.
                  <br />
                  <br />
                  Centrifuge the precipitate and wash with water. Add hot dilute
                  acetic acid into the precipitate.
                  <br />
                  <br />
                  Divide the solution into three parts.
                </td>
                <td>
                  White precipitate is formed and which is dissolved in hot dil.
                  acetic acid..
                </td>
                <td>
                  Th white precipitate may due to the formation of carbonates of
                  Ba<sup>2+</sup>, Sr<sup>2+</sup> or Ca<sup>2+</sup>. These
                  insoluble carbonate dissolves in acetic acid due to the
                  formation of soluble acetates of Ba2+, Sr2+ or Ca2+. Presence
                  of Group V cation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.secondaryTag}>Confirmation of Group - V Cations</h3>

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
                <td>
                  Confirmaton of Ba<sup>2+</sup>
                </td>
                <td>
                  Confirmation of Sr<sup>2+</sup>
                </td>
                <td>
                  Confirmation of Ca<sup>2+</sup>
                </td>
              </tr>
              <tr>
                <td>
                  1. Potassium chromate test:
                  <br />
                  To one part of the above solution in a test tube, add a few
                  drops of potassium chromate solution - Yellow precipitate is
                  formed.
                  <br />
                  <br />
                  Inference:The yellow precipitate is due to the formation of
                  barium chromate, BaCrO<sub>4</sub>. Presence of Ba
                  <sup>2+</sup> is confirmed.
                </td>
                <td>
                  1. Ammonium sulphate test:
                  <br />
                  To second part of the above solution in a test tube, add 1 ml
                  of ammonium sulphate solution and warm the contents - White
                  precipitate is formed.
                  <br />
                  <br />
                  Inference: The white precipitate is due to the formation of
                  strontium sulphate, SrSO<sub>4</sub>. Presence of Sr
                  <sup>2+</sup> is confirmed.
                </td>
                <td>
                  1. Ammonium oxalate test:
                  <br />
                  To third part of the above solution in a test tube, add 1 ml
                  of drops of ammonium oxalate solution. Add a little ammonium
                  hydroxide to it and scratch the sides of the test tube with a
                  glass rod - White precipitate is formed.
                  <br />
                  <br />
                  Inference: The white precipitate is due to the formation of
                  calcium oxalate, CaC<sub>2</sub>O<sub>4</sub>. Presence of Ca
                  <sup>2+</sup> is confirmed.
                </td>
              </tr>
              <tr>
                <td>
                  2. Flame test:
                  <br />
                  Take a small amount of the salt in a watch glass and add few
                  drops of conc. HCl. Mix the contents well to make a paste. Dip
                  a cleaned platinum wire into this paste and introduce the wire
                  into the non-luminous flame. Note the colour imparted on the
                  flame -Grassy green flame.
                  <br />
                  <br />
                  Inference:Presence of Ba<sup>2+</sup> is confirmed.
                </td>
                <td>
                  2. Flame test:
                  <br />
                  Take a small amount of the salt in a watch glass and add few
                  drops of conc. HCl. Mix the contents well to make a paste. Dip
                  a cleaned platinum wire into this paste and introduce the wire
                  into the non-luminous flame. Note the colour imparted on the
                  flame - Crimson red flame
                  <br />
                  <br />
                  Inference:Presence of Sr<sup>2+</sup> is confirmed.
                </td>
                <td>
                  2. Flame test:
                  <br />
                  Take a small amount of the salt in a watch glass and add few
                  drops of conc. HCl. Mix the contents well to make a paste. Dip
                  a cleaned platinum wire into this paste and introduce the wire
                  into the non-luminous flame. Note the colour imparted on the
                  flame - Brick red flame.
                  <br />
                  <br />
                  Inference:Presence of Ca<sup>2+</sup> is confirmed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>&nbsp;Note:&nbsp; </strong>
        </p>

        <ul>
          <li>
            Proceed to test for group V cations in the order, Ba<sup>2+</sup>,
            Sr<sup>2+</sup>, Ca<sup>2+</sup>.&nbsp; If&nbsp; Ba<sup>2+</sup> is
            confirmed do not test for Sr<sup>2+</sup> or Ca<sup>2+</sup>.
            Similarly if Sr<sup>2+</sup> is confirmed, do note test for Ca
            <sup>2+</sup>.
          </li>
          <li>
            Original solution can be perferably used for testing Sr<sup>2+</sup>{' '}
            and Ca<sup>2+</sup>.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Analysis of Group VI (Magnesium Group)</h3>

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
                  1. Ammonium Phosphate test:
                  <br />
                  <br />
                  To a part of the original salt solution in a test tube, add
                  some solid NH<sub>4</sub>Cl and solution of NH<sub>4</sub>OH
                  in slight excess. Then add ammonium phosphate solution and rub
                  the sides of the test-tube with a glass rod.
                </td>
                <td>A white precipitate is formed.</td>
                <td>
                  The white precipitate is due to the formation of magnesium
                  ammonium phosphate, Mg(NH<sub>4</sub>)PO<sub>4</sub>. Presence
                  of Mg<sup>2+</sup> is confirmed.
                </td>
              </tr>
              <tr>
                <td>
                  2. Cobalt nitrate/Charcoal cavity test:
                  <br />
                  <br />
                  Take a charcoal box with a small cavity in it. Take a small
                  amount of salt in a wach glass. Add solid sodium carbonate
                  whose quantity is 2 time that of the salt into the cavity. Put
                  this mixture in the cavity. Add a drop of water to the
                  mixture. Then direct the reducing flame of Bunsen burner on
                  the cavity by means of blowpipe. Heat strongly for sometime -
                  A white residue is formed.
                  <br />
                  Put one or two drops of cobalt nitrate solution on the white
                  residue left after the cavity in the charcoal cavity test.
                  Direct oxidizing flame into the mixture using blow pipe and
                  observe the colour of the residue -
                </td>
                <td>Pink mass is formed.</td>
                <td>
                  Pink mass is due to the formation of MgO.CoO. Presence of Mg
                  <sup>2+</sup> is confirmed.
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
          You can select the Preliminary test from “Select the preliminary test”
          drop down list.
        </p>

        <h3 className={classes.secondaryTag}>Colour Test</h3>

        <ul>
          <li>Note down the color of original salt.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Smell Test</h3>

        <ul>
          <li>
            Drag the original salt to the watch glass to put it into the watch
            glass.
          </li>
          <li>
            Drag the dropper to the watch glass to drop water into the sample.
          </li>
          <li>
            Drag the hand to the watch glass to rub the pre-wetted salt with the
            fingers.
          </li>
          <li>If ammoniacal smell, ammonium ion is present.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>If no characteristics smell, you can go to the next test.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Dry Heating Test</h3>

        <ul>
          <li>
            Drag the original salt to the test tube to put it into the test
            tube.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Wait for some time to cool the contents of the test tube.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>If no characteristics change, you can go to the next test.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Charcoal Cavity Test</h3>

        <ul>
          <li>
            Drag the spatula to the watch glass to add sodium carbonate into the
            original salt.
          </li>
          <li>
            Drag the glass rod to the watch glass to mix the contents of the
            watch glass.
          </li>
          <li>
            Drag the charcoal box near the watch glass to place it in the table.
          </li>
          <li>Drag the spatula to the watch glass to take the mixture.</li>
          <li>
            Drag the spatula to the charcoal box to put the mixture in the
            cavity.
          </li>
          <li>
            Drag the bottle to the charcoal box to add water into the mixture.
          </li>
          <li>Drag the tongs to the charcoal box to hold the box.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Click on the air adjusting disc to close the air hole to get the
            reducing flame.
          </li>
          <li>
            Drag the tongs to the burner to place the charcoal box near the
            flame.
          </li>
          <li>
            Drag the blow pipe to the burner to direct the reducing flame and
            heat the mixture.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the tongs to the watch glass to return the charcoal box to
            table and cool the residue.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>If no characteristics change, you can go to the next test.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Cobalt Nitrate Test</h3>

        <ul>
          <li>
            Drag the dropper to the charcoal box to add cobalt nitrate solution
            into the residue left in the charcoal box.
          </li>
          <li>Drag the tongs to the charcoal box to hold the box.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag the tongs to the burner to place the charcoal box near the
            flame.
          </li>
          <li>
            Drag the blow pipe to the burner to direct the oxidizing flame and
            heat the mixture.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>If no characteristics change, you can go to the next test.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Flame Test</h3>

        <ul>
          <li>
            Drag the original salt to the watch glass to put it into the watch
            glass.
          </li>
          <li>
            Drag the dropper to the watch glass to pour concentrated
            Hydrochloric acid into the sample.
          </li>
          <li>
            Drag the glass rod to the watch glass to mix the contents well and
            to make a paste.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag the platinum wire to watch glass to dip it into the paste and
            drag it to the Bunsen burner to introduce it into the non-luminous
            flame.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>If no characteristics change, you can go to the next test.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Borax Bead Test</h3>

        <ul>
          <li>
            Drag the watch glass containing borax to the original salt to place
            it near the salt.
          </li>
          <li>
            Drag the platinum wire to the watch glass to dip it in the borax
            powder.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag platinum wire to the burner to heat the borax powder in the
            oxidizing flame.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag platinum wire to the watch glass to dip it in the original
            salt.
          </li>
          <li>
            Click on the knob of the burner to turn it on to get the oxidizing
            flame/ Click on the air adjusting disc to close the air hole to get
            the reducing flame.
          </li>
          <li>
            Drag platinum wire to the burner to heat the contents in the
            oxidizing/reducing flame.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Wait for some time to cool the bead on the platinum wire loop.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          You can select the group analysis test from “Select group analysis”
          drop down list.
        </p>

        <h3 className={classes.secondaryTag}>Group zero</h3>

        <ul>
          <li>
            Drag the original salt to the test tube to drop it into the test
            tube.
          </li>
          <li>Drag the dropper to the test tube to drop NaOH into it.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the analysis, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group I</h3>

        <ul>
          <li>
            Drag the dropper to the test tube to drop the salt solution into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop dil. HCl into the test
            tube.
          </li>
          <li>Click on the 'Next' button to go to the next step.</li>
          <li>Drag the dropper to the test tube to drop water into it.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the analysis, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group II</h3>

        <ul>
          <li>Drag the dropper to the test tube to drop dil. HCl into it.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the ‘Next’ button to go to the next process.</li>
          <li>
            Drag the test tube to the Kipp’s apparatus to pass H<sub>2</sub>S
            gas through the solution.
          </li>
          <li>Click on the nozzle to open/close the Kipp’s apparatus.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>Click on the ‘Next’ button to go to the next process.</li>
          <li>To redo the analysis, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group III</h3>

        <ul>
          <li>
            Drag the dropper to the test tube to drop Conc.HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag ammonium chloride (NH<sub>4</sub>Cl) to the test tube to put it
            into the test tube.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag the test tube holder to the test tube to hold the test tube.
          </li>
          <li>
            Drag the test tube holder to the beaker to place the test tube in
            water to cool the solution.
          </li>
          <li>
            Drag the test tube holder to remove the test tube from the beaker.
          </li>
          <li>
            Drag the dropper to the test tube to drop NH<sub>4</sub>OH into it.
          </li>
          <li>Click on the test tube to shake it well.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the analysis, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group IV</h3>

        <ul>
          <li>
            Drag the dropper to the test tube to drop Conc.HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag ammonium chloride (NH<sub>4</sub>Cl) to the test tube to put it
            into the test tube.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag the test tube holder to the test tube to hold the test tube.
          </li>
          <li>
            Drag the test tube holder to the beaker to place the test tube in
            water to cool the solution.
          </li>
          <li>
            Drag the test tube holder to remove the test tube from the beaker.
          </li>
          <li>
            Drag the dropper to the test tube to drop NH<sub>4</sub>OH into it.
          </li>
          <li>Click on the test tube to shake it well.</li>
          <li>Click on the ‘Next’ button to go to the next process.</li>
          <li>
            Drag the test tube to the Kipp’s apparatus to pass H<sub>2</sub>S
            gas through the solution.
          </li>
          <li>Click on the nozzle to open/close the Kipp’s apparatus.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the analysis, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group V</h3>

        <ul>
          <li>
            Drag ammonium chloride (NH<sub>4</sub>Cl) to the test tube to put it
            into the test tube.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Wait for some time to cool the solution.</li>
          <li>
            Drag the dropper to the test tube to drop ammonium hydroxide
            solution into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop ammonium carbonate
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>Click on the ‘Next’ button to go to the next process.</li>
          <li>
            Drag the dropper to the test tube to drop hot dil. CH<sub>3</sub>
            COOH (acetic acid) into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>Click on the ‘Next’ button to go to the next process.</li>
          <li>To redo the analysis, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          You can select the cation from ‘Select the cation’ drop down list.
        </p>

        <p>
          You can select the confirmatory tests from ‘Select the confirmatory
          tests’ drop down list.
        </p>

        <h3 className={classes.secondaryTag}>Group Zero- Ammonium&lt;</h3>

        <p>
          <u>Sodium Hydroxide Test</u>
        </p>

        <ul>
          <li>
            Drag the original salt to the test tube to drop it into the test
            tube.
          </li>
          <li>Drag the dropper to the test tube to drop NaOH into it.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag the glass rod to the bottle to dip it in dil. HCl and drag it
            to the test tube to hold it over the mouth of the test tube.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Nessler’s Reagent Test</u>
        </p>

        <ul>
          <li>
            Drag the original salt to the test tube to drop it into the test
            tube.
          </li>
          <li>Drag the dropper to the test tube to drop NaOH into it.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag the cork to the test tube to close the test tube with it.
          </li>
          <li>
            Drag the delivery tube to the test tube to insert it between the
            test tube and Nessler’s reagent.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (I) - Lead (II)</h3>

        <p>
          <u>Cool the Solution</u>
        </p>

        <ul>
          <li>Drag the dropper to the test tube to drop water into it.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            To cool the contents of the test tube, drag the test tube to the
            beaker and place it in the beaker containing cold water.
          </li>
          <li>Drag the test tube to remove it from the beaker.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Potassium Iodide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop potassium iodide solution
            into it.
          </li>
          <li>Potassium Chromate Test</li>
          <li>
            Drag the dropper to the test tube to drop potassium chromate
            solution into it.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (II) - Lead (II)</h3>

        <p>
          <u>Potassium Iodide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop 50% HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
            <sub>4</sub> into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop ethyl alcohol (C
            <sub>2</sub>H<sub>5</sub>OH) into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>Click on the ‘Next’ button to go to the next process.</li>
          <li>
            Drag the dropper to the test tube to drop hot ammonium acetate
            solution into the test tube.
          </li>
          <li>
            Drag the dropper to the test tube to drop potassium iodide solution
            into it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>
            Drag the test tube to the beaker to place it in the beaker
            containing water and cool it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Potassium Chromate Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop 50% HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
            <sub>4</sub> into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop ethyl alcohol (C
            <sub>2</sub>H<sub>5</sub>OH) into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>Click on the ‘Next’ button to go to the next process.</li>
          <li>
            Drag the dropper to the test tube to drop hot ammonium acetate
            solution into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop potassium chromate
            solution into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop NaOH solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (II) - Copper (II)</h3>

        <p>
          <u>Potassium Ferrocyanide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop 50% HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
            <sub>4</sub> into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop ethyl alcohol (C
            <sub>2</sub>H<sub>5</sub>OH) into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop ammonium hydroxide
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop acetic acid into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop potassium ferrocyanide
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Potassium Iodide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop 50% HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop dil. H<sub>2</sub>SO
            <sub>4</sub> into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop ethyl alcohol (C
            <sub>2</sub>H<sub>5</sub>OH) into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop ammonium hydroxide
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop acetic acid into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop potassium iodide solution
            into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (II) - Arsenic (III)</h3>

        <p>
          <u>Ammonium Molybdate Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop Conc. HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop ammonium molybdate
            solution into it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Magnesia Mixture Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop Conc. HNO<sub>3</sub> into
            it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop NH<sub>4</sub>OH solution
            into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop Magnesia mixture into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (III) - Iron (III)</h3>

        <p>
          <u>Potassium Ferrocyanide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop dil. HCl into the test
            tube.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop Potassium ferrocyanide
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Potassium Sulphocyanide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop dil. HCl into the test
            tube.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop Potassium sulphocyanide
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (III) - Aluminium (III)</h3>

        <p>
          <u>Lake Test</u>
        </p>

        <ul>
          <li>Drag the dropper to the test tube to drop dil. HCl into it.</li>
          <li>
            Drag the dropper to the test tube to drop blue litmus solution into
            it.
          </li>
          <li>
            Drag the dropper to the test tube to drop NH4OH solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Charcoal Cavity Test/ Cobalt Nitrate Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Charcoal Cavity Test/ Cobalt Nitrate Test
            in the ‘Preliminary Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (IV) - Cobalt (II)</h3>

        <p>
          <u>Potassium Nitrite Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop NH<sub>4</sub>OH into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop acetic acid into it.
          </li>
          <li>
            Drag the spatula to the test tube to put potassium nitrite crystals
            into it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Ammonium thiocyanate - Ether Test</u>
        </p>

        <ul>
          <li>Drag the dropper to the test tube to drop ether into it.</li>
          <li>
            Drag the spatula to the test tube to add ammonium thiocyanate into
            it.
          </li>
          <li>Drag the test tube from the stand to shake it well.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Borax bead Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Borax Bead Test in the ‘Preliminary
            Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (IV) - Nickel (II)</h3>

        <p>
          <u>Dimethyl glyoxime Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop NH<sub>4</sub>OH solution
            into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop dimethyl glyoxime into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>
            Sodium hydroxide – Br<sub>2</sub> Test
          </u>
        </p>

        <ul>
          <li>Drag the dropper to the test tube to drop NaOH into it.</li>
          <li>
            Drag the dropper to the test tube to drop bromine water into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Borax Bead Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Borax Bead Test in the ‘Preliminary
            Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (IV) - Manganese (II)</h3>

        <p>
          <u>
            Sodium hydroxide – Br<sub>2</sub> Test
          </u>
        </p>

        <ul>
          <li>Drag the dropper to the test tube to drop dil. HCl into it.</li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>Drag the dropper to the test tube to drop NaOH into it.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop bromine water into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Lead Peroxide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop Conc. HNO<sub>3</sub> into
            it.
          </li>
          <li>
            Drag the spatula to the test tube to add lead peroxide into it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Wait for some time to cool the solution.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Borax Bead Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Borax Bead Test in the ‘Preliminary
            Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (IV) - Zinc (II)</h3>

        <p>
          <u>Sodium Hydroxide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop NaOH solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>
            Drag the dropper to the test tube to drop more NaOH solution into
            it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Potassium Ferrocyanide Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop potassium ferrocyanide
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Charcoal Cavity Test/ Cobalt Nitrate Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Charcoal Cavity Test/ Cobalt Nitrate Test
            in the ‘Preliminary Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (V) - Barium (II)</h3>

        <p>
          <u>Potassium Chromate Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop potassium chromate
            solution into it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Flame Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Flame Test in the ‘Preliminary Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (V) - Strontium (II)</h3>

        <p>
          <u>Ammonium Sulphate Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop ammonium sulphate solution
            into it.
          </li>
          <li>Click on the knob of the burner to turn it on.</li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Flame Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Flame Test in the ‘Preliminary Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (V) - Calcium (II)</h3>

        <p>
          <u>Ammonium Oxalate Test</u>
        </p>

        <ul>
          <li>
            Drag the dropper to the test tube to drop ammonium oxalate solution
            into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop ammonium hydroxide
            solution into it.
          </li>
          <li>
            Drag the glass rod to the test tube to rub the sides of the test
            tube with it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Flame Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Flame Test in the ‘Preliminary Tests’.
          </li>
        </ul>

        <h3 className={classes.secondaryTag}>Group (VI) – Magnesium (II)</h3>

        <p>
          <u>Ammonium Phosphate Test</u>
        </p>

        <ul>
          <li>
            Drag ammonium chloride (NH<sub>4</sub>Cl) to the test tube to put it
            into the test tube.
          </li>
          <li>
            Drag the dropper to the test tube to drop excess NH<sub>4</sub>OH
            into it.
          </li>
          <li>
            Drag the dropper to the test tube to drop ammonium phosphate [(NH
            <sub>4</sub>)<sub>3</sub>PO<sub>4</sub>] solution into it.
          </li>
          <li>
            Drag the glass rod towards the test tube to rub the sides of the
            test tube with it.
          </li>
          <li>Click on the inference icon to see the inference.</li>
          <li>To redo the test, click on the ‘Reset’ button.</li>
        </ul>

        <p>
          <u>Charcoal Cavity Test/ Cobalt Nitrate Test</u>
        </p>

        <ul>
          <li>
            Refer to the procedure for Charcoal Cavity Test/ Cobalt Nitrate Test
            in the ‘Preliminary Tests’.
          </li>
        </ul>

        <p>
          <strong>Note:</strong> Click on the <strong>'HELP'</strong> button to
          see the instructions.
        </p>

        <h1 className={classes.headTag}>Precautions</h1>

        <ul>
          <li>Handle the apparatus and chemicals with care.</li>
          <li>
            When heating a solution in a test tube, students should hold the
            test tube with a proper holder.
          </li>
          <li>
            While heating, the mouth of the test tube should not point towards
            the student or any other person in the lab.
          </li>
          <li>
            Students should wear lab coats and goggles while performing the
            experiment.
          </li>
        </ul>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Qualitative Analysis of Cations.
          Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=180&cnt=2
        </Typography>
      </div>
    </div>
  );
}
