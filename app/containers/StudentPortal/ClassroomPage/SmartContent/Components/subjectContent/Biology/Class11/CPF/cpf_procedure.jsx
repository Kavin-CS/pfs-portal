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

import CPFPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro1.jpg';
import CPFPro2 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro2.jpg';
import CPFPro3 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro3.jpg';
import CPFPro4 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro4.jpg';
import CPFPro5 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro5.jpg';
import CPFPro6 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro6.jpg';
import CPFPro7 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro7.jpg';
import CPFPro8 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-pro8.jpg';

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

      <h1 className={classes.headTag}>Test for Carbohydrates</h1>

      <ol>
        <li>
          <h2 className={classes.secondaryTag}>Test For Glucose</h2>

          <ol start="1">
            <li>
              <h2 className={classes.secondaryTag}>Benedict's Test</h2>
            </li>
          </ol>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>
        <img alt="" src={CPFPro1} />
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>Using a dropper, take a small quantity of Benedict’s reagent.</li>
        <li>Add the reagent to the test tube containing banana extract.</li>
        <li>
          Boil the sample over a burner for 2 minutes holding the test tube
          firmly with a test tube holder.
        </li>
        <li>Keep shaking the test tube as it is being heated.</li>
        <li>
          A brick red precipitate appears, indicating the presence of glucose in
          the banana extract.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Conclusion:</h3>

      <p>
        On boiling banana extract with the Benedict’s reagent, the cupric ion
        present in the Benedict’s reagent is reduced by the reducing agent,
        sugar, to form a brick red coloured precipitate of cuprous oxide.
      </p>

      <ol start="2" marginLeft="40px">
        <li>
          <h2 className={classes.secondaryTag}>Fehling's Test</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>
        <img alt="" src={CPFPro2} width="600px;" height="400px;" />
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>Using a dropper, take a small quantity of Fehling’s solution A.</li>
        <li>
          Add the Fehling’s solution A to the test tube containing banana
          extract.
        </li>
        <li>Using a dropper, take a small quantity of Fehling’s solution B.</li>
        <li>
          Add Fehling’s solution B to the test tube containing banana extract.
        </li>
        <li>
          Boil the sample over a burner for 2 minutes, holding the test tube
          firmly with a test tube holder.
        </li>
        <li>Keep shaking the test tube while heating.</li>
        <li>
          A brick red precipitate appears, indicating the presence of glucose in
          the banana extract.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Conclusion:</h3>

      <p>
        The cupric ion present in the Fehling’s solution is reduced on boiling
        by the reducing substance, sugar, to form the brick red coloured
        precipitate of cuprous oxide.
      </p>

      <ol start="2">
        <li>
          <h2 className={classes.secondaryTag}>Test for Sucrose</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>
        <img alt="" src={CPFPro3} width="750px;" height="440px;" />
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>Using a dropper, take a small quantity of concentrated HCl.</li>
        <li>
          Add 2 to 3 drops of concentrated HCl to the test tube containing
          sugarcane extract.
        </li>
        <li>
          Boil the sample over a burner for 2 minutes, holding the test tube
          firmly with a test tube holder.
        </li>
        <li>This hydrolyses sucrose into glucose and fructose.</li>
        <li>Using a dropper, take a small quantity of NaOH solution.</li>
        <li>
          Add few drops of NaOH solution to the test tube to make the solution
          alkaline.
        </li>
        <li>
          Now we can perform Benedict’s test to this solution to test for the
          presence of glucose.
        </li>
        <li>Using a dropper, take a small quantity of Benedict’s reagent.</li>
        <li>Add the reagent to the test tube containing the sample.</li>
        <li>
          Boil the sample over a burner for 2 minutes, holding the test tube
          firmly with a test tube holder.
        </li>
        <li>
          The colour changes from blue to green and finally to orange or brick
          red, indicating the presence of glucose.
        </li>
      </ul>

      <ol start="3">
        <li>
          <h2 className={classes.secondaryTag}>Test for Starch</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <p>
        <img alt="" src={CPFPro4} />
      </p>

      <h3 className={classes.secondaryTag}>Procedure</h3>

      <ul>
        <li>Using a dropper, take a small quantity of iodine solution.</li>
        <li>
          Add 5 drops of iodine solution to the test tube containing potato
          extract.
        </li>
        <li>
          Blue black colour indicates the presence of starch in potato extract.
        </li>
      </ul>

      <h1 className={classes.headTag}>Test for Proteins</h1>

      <ol>
        <li>
          <h2 className={classes.secondaryTag}>Biuret Test</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <p>
        <img alt="" src={CPFPro5} />
      </p>

      <h3 className={classes.secondaryTag}>Procedure</h3>

      <ul>
        <li>Using a dropper, take a small quantity of 40% NaOH solution.</li>
        <li>
          Add a few drops of NaOH solution to the test tube containing egg
          albumin.
        </li>
        <li>Using a dropper, take a small quantity of 1% CuSO4 solution.</li>
        <li>
          Add 2-3 drops of CuSO4 solution to the test tube containing egg
          albumin.
        </li>
        <li>Shake the solution to mix it well.</li>
        <li>
          A violet colour appears in the test tube, which indicates the presence
          of proteins.
        </li>
      </ul>

      <ol start="2">
        <li>
          <h2 className={classes.secondaryTag}>Xanthoproteic Test</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials required</h3>

      <p>
        <img alt="" src={CPFPro6} />
      </p>

      <h3 className={classes.secondaryTag}>Procedure</h3>

      <ul>
        <li>Using a dropper, take a small quantity of concentrated HNO3.</li>
        <li>
          Add 5 drops of Concentrated HNO3 to the test tube containing egg
          albumin.
        </li>
        <li>
          Boil the sample over a burner for 2 minutes, holding the test tube
          firmly with a test tube holder. Yellow precipitate appears in the test
          tube.
        </li>
        <li>Using a dropper, take a small quantity of ammonia solution.</li>
        <li>Add a few drops of ammonia solution to the sample.</li>
        <li>Shake the solution to mix it well.</li>
        <li>
          Yellow ppt. changes to orange in colour, which indicates the presence
          of protein.
        </li>
      </ul>

      <ol start="3">
        <li>
          <h2 className={classes.secondaryTag}>Million’s Test</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <p>
        <img alt="" src={CPFPro7} />
      </p>

      <h3 className={classes.secondaryTag}>Procedure</h3>

      <ul>
        <li>Using a dropper, take a small quantity of Million's regent.</li>
        <li>
          Add few drops of Million's reagent to the test tube containing egg
          albumin.
        </li>
        <li>Wait for some time.</li>
        <li>
          Pink colour appears in the test tube, which indicates the presence of
          protein.
        </li>
      </ul>

      <h1 className={classes.headTag}>Test for Fats</h1>

      <ol>
        <li>
          <h2 className={classes.secondaryTag}>Sudan III Test</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>
        <img alt="" src={CPFPro8} />
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>Using a dropper, take a small quantity of Sudan III reagent.</li>
        <li>
          Add few drops of Sudan III reagent to the test tube containing egg
          albumin.
        </li>
        <li>Shake the solution to mix it well.</li>
        <li>
          Pink droplets appear indicating the presence of fat in the sample.
        </li>
      </ul>

      <ol start="2">
        <li>
          <h2 className={classes.secondaryTag}>Paper Spot Test</h2>
        </li>
      </ol>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>Peanut seeds and piece of white paper.</p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>Take a peanut seed from the watch glass.</li>
        <li>Crush the peanut seed and rub it on a piece of white paper.</li>
        <li>
          Paper becomes translucent at the spot, which indicates the presence of
          fat.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <p>
        You can select the type of test from the ‘Select the food substance’
        drop down list.
      </p>

      <h1 className={classes.headTag}>Carbohydrates</h1>

      <p>
        You can select the type of test from the ‘Select the carbohydrate’ drop
        down list.
      </p>

      <ol>
        <li>
          <h2 className={classes.secondaryTag}>Glucose</h2>
        </li>
      </ol>

      <p>
        You can select the type of test from the ‘Select the Test” drop down
        list.
      </p>

      <ol start="1" marginLeft="40px">
        <li>
          <h3 className={classes.secondaryTag}>Benedict’s Test</h3>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the Benedict’s reagent bottle and move
          it into the test tube containing banana extract to drop the Benedict’s
          reagent into it.
        </li>
        <li>
          Drag the test tube towards the beaker to place it in the water bath.
        </li>
        <li>Click on the switch of the hot plate to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="2" marginLeft="40px">
        <li>
          <h3 className={classes.secondaryTag}>Fehling’s Test</h3>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from Fehling’s solution A and move it into
          the test tube containing banana extract to drop the Fehling’s solution
          A into it.
        </li>
        <li>
          Click and drag the dropper from the Fehling’s solution B bottle and
          move it into the test tube containing banana extract to drop the
          Fehling’s solution B into it.
        </li>
        <li>
          Drag the test tube towards the beaker to place in the water bath.
        </li>
        <li>Click on the switch of the hot plate to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="2">
        <li>
          <h2 className={classes.secondaryTag}>Sucrose</h2>

          <ol start="1">
            <li>
              <h3 className={classes.secondaryTag}>Benedict’s Test</h3>
            </li>
          </ol>
        </li>
      </ol>

      <ul marginLeft="40px">
        <li>
          Click and drag the dropper from the concentrated HCl bottle and move
          it into the test tube containing sugarcane extract to drop the HCl
          into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Click and drag the dropper from the NaOH solution bottle and move it
          into the test tube containing sugarcane extract to drop the NaOH into
          it.
        </li>
        <li>
          Drag the dropper towards test tube B to drop NaOH slowly along the
          side of the test tube.
        </li>
        <li>Click on the next button to continue.</li>
        <li>
          Click and drag the dropper from the Benedict’s reagent bottle and move
          it into the test tube to drop Benedict’s reagent into it.
        </li>
        <li>
          Drag the test tube towards the beaker to place in the water bath.
        </li>
        <li>Click on the switch of the hot plate to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="2" marginLeft="40px">
        <li>
          <h3 className={classes.secondaryTag}>Fehling’s Test</h3>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the concentrated HCl bottle and move
          it into the test tube containing sugarcane extract to drop the HCl
          into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Click and drag the dropper from the NaOH solution bottle and move it
          into the test tube containing sugarcane extract to drop the NaOH into
          it.
        </li>
        <li>Click on the next button to continue.</li>
        <li>
          Click and drag the dropper from Fehling’s solution A and move it into
          the test tube to drop the Fehling’s solution A into it.
        </li>
        <li>
          Click and drag the dropper from the Fehling’s solution B bottle and
          move it into the test tube to drop Fehling’s solution B into it.
        </li>
        <li>
          Drag the test tube towards the beaker to place in the water bath.
        </li>
        <li>Click on the switch of the hot plate to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="3">
        <li>
          <h2 className={classes.secondaryTag}>Starch</h2>

          <ol start="1">
            <li>
              <h2 className={classes.secondaryTag}>Iodine Test</h2>
            </li>
          </ol>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the Iodine bottle and move it into the
          test tube containing potato extract to drop the Iodine solution into
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="2" marginLeft="40px">
        <li>
          <h3 className={classes.secondaryTag}>Benedict’s Test</h3>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the concentrated HCl bottle and move
          it into the test tube containing potato extract to drop the HCl into
          it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Click and drag the dropper from the NaOH solution bottle and move it
          into the test tube to drop the NaOH into it.
        </li>
        <li>Click on the next button to continue.</li>
        <li>
          Click and drag the dropper from the Benedict’s reagent bottle and move
          it into the test tube to drop the Benedict’s reagent into it.
        </li>
        <li>
          Drag the test tube towards the beaker to place in the water bath.
        </li>
        <li>Click on the switch of the hot plate to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="3" marginLeft="40px">
        <li>
          <h3 className={classes.secondaryTag}>Fehling’s Test</h3>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the concentrated HCl bottle and move
          it into the test tube containing potato extract to drop the HCl into
          it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Click and drag the dropper from the NaOH solution bottle and move it
          into the test tube to drop the NaOH into it.
        </li>
        <li>Click on the next button to continue.</li>
        <li>
          Click and drag the dropper from Fehling’s solution A and move it into
          the test tube to drop Fehling’s solution A into it.
        </li>
        <li>
          Click and drag the dropper from the Fehling’s solution B bottle and
          move it into the test tube to drop Fehling’s solution B into it.
        </li>
        <li>
          Drag the test tube towards the beaker to place in the water bath.
        </li>
        <li>Click on the switch of the hot plate to turn it on.</li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <h1 className={classes.headTag}>Proteins</h1>

      <ol>
        <li>
          <h2 className={classes.secondaryTag}>Biuret Test</h2>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the NaOH solution bottle and move it
          into the test tube containing egg albumin to drop the NaOH into it.
        </li>
        <li>
          Click and drag the dropper from the CuSO4 solution bottle and move it
          into the test tube containing egg albumin to drop the CuSO4 into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="2">
        <li>
          <h2 className={classes.secondaryTag}>Xanthoproteic Test</h2>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the concentrated HNO3 solution bottle
          and move it into the test tube containing egg albumin to drop the HNO3
          into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>
          Click and drag the dropper from the NH4OH solution bottle and move it
          into the test tube containing egg albumin to drop the NH4OH into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="3">
        <li>
          <h2 className={classes.secondaryTag}>Million’s Test</h2>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the concentrated Million’s reagent
          bottle and move it into the test tube containing egg albumin to drop
          the Million’s reagent into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <h1 className={classes.headTag}>Fats</h1>

      <ol start="1">
        <li>
          <h2 className={classes.secondaryTag}>Sudan III Test</h2>
        </li>
      </ol>

      <ul>
        <li>
          Click and drag the dropper from the concentrated Sudan III reagent
          bottle and move it into the test tube containing coconut oil to drop
          the Sudan III reagent into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
      </ul>

      <ol start="2">
        <li>
          <h2 className={classes.secondaryTag}>Paper Spot Test</h2>
        </li>
      </ol>

      <ul>
        <li>Drag the hand towards the watch glass to crush the peanut.</li>
        <li>Drag the hand towards the paper to press it.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          You can repeat the experiment by clicking on the ‘Reset’ button.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Carbohydrates, Proteins and
          Fats. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=205&cnt=2
        </Typography>
      </div>
    </div>
  );
}
