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
      <h1 className={classes.headTag}>Preparation of Lyophilic Sols</h1>

      <h2 className={classes.secondaryTag}>1. Preparation of colloidal solution (sol) of starch</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>Soluble starch</li>
        <li>Distilled water</li>
        <li>250 ml beaker</li>
        <li>50 ml beaker</li>
        <li>Glass rod</li>
        <li>Funnel</li>
        <li>Filter-paper</li>
        <li>Pestle and mortar</li>
        <li>Tripod stand</li>
        <li>Wire-gauze</li>
        <li>Bunsen burner</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>
          Weigh a small quantity (500mg or 1 g) of soluble starch on an
          electronic balance.
        </li>
        <li>
          Transfer the weighed quantity of starch into a mortar and add few
          drops of distilled water.
        </li>
        <li>
          Grind the starch using the pestle to make a thin paste and transfer
          the paste into a 50 ml beaker.
        </li>
        <li>
          Take about 100 ml of distilled water in a 250 ml beaker and heat the
          beaker till the water starts to boil.
        </li>
        <li>
          Pour the starch paste slowly into the boiling water while stirring
          using a glass rod.
        </li>
        <li>
          Continue boiling for about 10 minutes and then allow the beaker to
          cool.
        </li>
        <li>
          Filter the contents of the beaker, through a filter paper fixed in a
          funnel and collect the filtrate.
        </li>
        <li>Label the filtrate as Starch Sol.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>
          The apparatus used for preparing the sol should be properly cleaned.
        </li>
        <li>Distilled water should be used for preparing sols in water.</li>
        <li>
          Starch should be converted into a fine paste before adding to boiling
          water.
        </li>
        <li>Starch paste should be added in a thin stream to boiling water.</li>
        <li>
          Constant stirring of the contents is necessary during the preparation
          of the sol.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Dialysis of starch sol containing sodium chloride through a parchment
        membrane
      </h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>Starch sol containing sodium chloride</li>
        <li>Silver nitrate solution</li>
        <li>Iodine solution</li>
        <li>400 ml beaker</li>
        <li>Funnel with long stem</li>
        <li>Parchment membrane</li>
        <li>Dropper</li>
        <li>Test tubes</li>
        <li>Iron stand with clamp</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>Take a parchment bag and fold it in the shape of a bag.</li>
        <li>Tie it to the end of the stem of a funnel with a thread.</li>
        <li>
          Pour the given starch sol containing sodium chloride into the
          parchment bag through the funnel till the bag is two-third full.
        </li>
        <li>
          Take a 400 ml beaker and fill it upto three-fourth with distilled
          water and place it over an iron stand.
        </li>
        <li>
          Dip the parchment bag into the distilled water and fix the funnel in
          position using a clamp.
        </li>
        <li>Allow it to stand for about half an hour.</li>
        <li>
          Withdraw about 1 ml of water from the beaker using a dropper and
          transfer it into a test tube.
        </li>
        <li>Add a few drops of iodine solution to the test tube.</li>
        <li>
          As no blue colour appears, it indicates the absence of starch in
          water. This means that starch molecules do not diffuse through a
          parchment membrane.
        </li>
        <li>
          Now withdraw another 1 ml of water from the beaker and transfer it
          into another test tube.
        </li>
        <li>Add a few drops of silver nitrtate solution to it.</li>
        <li>
          A white precipitate of silver chloride is produced immediately
          indicating the presence of chloride ions and hence NaCl in water. It
          means that sodium ions and chloride ions diffuse through the parchment
          membrane. As Na+ and Cl<sup>-</sup> diffuse out of the starch sol, it
          gets free from the ions gradually.
        </li>
        <li>
          In order to check whether NaCl is completely removed change the water
          in the beaker with fresh distilled water and again place the parchment
          bag containing sol in it.
        </li>
        <li>
          After about 10 minutes, test for the presence of Cl<sup>- </sup>ions.
        </li>
        <li>
          If no white precipitate is formed, Cl<sup>-</sup> ions are absent and
          dialysis is complete otherwise dialysis should be continued.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>Fill only two-third of the parchment bag with sol.</li>
        <li>There should be no leakage of sol from the bag into the beaker.</li>
        <li>Use distilled water for dialysis.</li>
      </ul>

      <h2 className={classes.secondaryTag}>2. Preparation of colloidal solution of gum</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>Gum</li>
        <li>Distilled water</li>
        <li>250 ml beaker</li>
        <li>50 ml beaker</li>
        <li>Glass rod</li>
        <li>Funnel</li>
        <li>Filter-paper</li>
        <li>Pestle and mortar</li>
        <li>Tripod stand</li>
        <li>Wire-gauze</li>
        <li>Bunsen burner</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>
          Take a small quantity (500mg or 1g) of gum in a mortar and add a few
          drops of distilled water.
        </li>
        <li>
          Grind the gum using the pestle to make a thin paste and transfer the
          paste into a 50 ml beaker.
        </li>
        <li>
          Take about 100 ml of distilled water in a 250 ml beaker and heat the
          beaker (do not boil).
        </li>
        <li>
          Pour the gum paste slowly into the warm water while stirring using a
          glass rod.
        </li>
        <li>
          Continue heating for about 10 minutes and then allow the beaker to
          cool.
        </li>
        <li>
          Filter the contents of the beaker, through a filter paper fixed in a
          funnel and collect the filtrate.
        </li>
        <li>Label the filtrate as Gum Sol.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>
          The apparatus used for preparing the sol should be properly cleaned.
        </li>
        <li>Distilled water should be used for preparing sols in water.</li>
        <li>
          Gum should be converted into a fine paste before adding to warm water.
        </li>
        <li>
          Constant stirring of the contents is necessary during the preparation
          of the sol.
        </li>
        <li>
          Instead of boiling water, warm water is to be used since gum is quite
          soluble in warm water.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>3. Preparation of colloidal solution (sol) of egg albumin</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>Egg</li>
        <li>Distilled water</li>
        <li>5% NaCl solution</li>
        <li>Beakers</li>
        <li>Glass rod</li>
        <li>Funnel</li>
        <li>Filter-paper</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>
          Break the outer shell of an egg by striking it with a glass rod.
        </li>
        <li>
          Collect the colourless liquid along with the yellow yolk in a beaker.
        </li>
        <li>
          Decant the colourless liquid into another beaker. This colourless
          liquid is known as egg albumin.
        </li>
        <li>Take 100 ml of 5% NaCl solution in a 250 ml beaker.</li>
        <li>
          Add egg albumin into the NaCl solution in small proportions while
          constantly stirring.
        </li>
        <li>
          Filter the contents of the beaker through a filter paper fixed in a
          funnel and collect the filtrate.
        </li>
        <li>Label the filtrate as Egg-Albumin sol.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>
          The apparatus used for preparing the sol should be properly cleaned.
        </li>
        <li>Distilled water should be used for preparing sols in water.</li>
        <li>
          Egg albumin sol is prepared at room temperature because in hot
          solution the precipitation of egg albumin takes place.
        </li>
        <li>
          The yellow yolk should be separated completely from the egg albumin
          before using the later in the experiment.
        </li>
        <li>
          Addition of egg albumin should be done very slowly and while
          constantly stirring so as to disperse the colloidal particles well in
          the solution.
        </li>
      </ul>

      <h1 className={classes.headTag}>Preparation of Lyophobic Sols</h1>

      <h2 className={classes.secondaryTag}>1. Preparation of aluminium hydroxide sol</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>2% solution of aluminium chloride</li>
        <li>Distilled water</li>
        <li>250 ml conical flask</li>
        <li>250 ml beaker</li>
        <li>Boiling tube</li>
        <li>Glass tube</li>
        <li>Funnel</li>
        <li>Dropper</li>
        <li>RB flask</li>
        <li>Iron stand with clamp</li>
        <li>Wire gauze</li>
        <li>Tripod stand</li>
        <li>Bunsen burner</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>
          Take a 250 ml conical flask and clean it using the steaming out
          process.
        </li>
        <li>
          To this cleaned conical flask, add 100 ml of distilled water using a
          measuring cylinder.
        </li>
        <li>
          Bring the water to boil by placing the flask over a Bunsen burner.
        </li>
        <li>
          Add aluminium chloride solution dropwise to the boiling water using a
          dropper.
        </li>
        <li>
          Continue heating until a white coloured solution of aluminium
          hydroxide is obtained.
        </li>
        <li>
          Note: Replace the water lost by evaporation during boiling at regular
          intervals.
        </li>
        <li>
          Keep the contents of the conical flask undisturbed for some time at
          room temperature.
        </li>
        <li>Label the solution as Aluminium Hydroxide Sol.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>
          The apparatus required for the preparation of the sol should be
          thoroughly cleaned through the steaming out process.
        </li>
        <li>Add aluminium chloride solution dropwise.</li>
        <li>Heating is continued till the desired sol is obtained.</li>
        <li>
          Hydrochloric acid formed as a result of hydrolysis of aluminium
          chloride is removed by dialysis process otherwise it would destabilise
          the sol.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Dialysis of aluminium hydroxide sol</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>Aluminum hydroxide sol</li>
        <li>Silver nitrate solution</li>
        <li>400 ml beaker</li>
        <li>Funnel with long stem</li>
        <li>Parchment membrane</li>
        <li>Dropper</li>
        <li>Test tubes</li>
        <li>Iron stand with clamp</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>Take a parchment bag and fold it in the shape of a bag.</li>
        <li>Tie it to the end of the stem of a funnel with a thread.</li>
        <li>
          Pour the aluminium hydroxide sol into the parchment bag through the
          funnel till two-third of the bag is full.
        </li>
        <li>
          Take a 400 ml beaker and fill it three-fourth with distilled water and
          place it over an iron stand.
        </li>
        <li>
          Dip the parchment bag into the distilled water and fix the funnel in
          position using a clamp.
        </li>
        <li>Allow it to stand for about half an hour.</li>
        <li>
          Withdraw about 1 ml of water from the beaker using a dropper and
          transfer it into a test tube.
        </li>
        <li>Add a few drops of silver nitrtate solution to it.</li>
        <li>
          A white precipitate of silver chloride is produced immediately
          indicating the presence of chloride ions in water. It means that
          chloride ions diffuse through the parchment membrane. As Cl
          <sup>-</sup> diffuse out of the sol, it gets free from the ions
          gradually.
        </li>
        <li>
          In order to check whether Cl<sup>- </sup>is completely removed or not
          replace water in the beaker with fresh distilled water and again place
          the parchment bag containing sol in it.
        </li>
        <li>
          After about 10 minutes, test for the presence of Cl<sup>-</sup> ions.
        </li>
        <li>
          If no white precipitate is formed, Cl<sup>- </sup>ions are absent and
          dialysis is complete otherwise dialysis should be continued.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>Fill only two-third of the parchment bag with sol.</li>
        <li>There should be no leakage of sol from the bag into the beaker.</li>
        <li>Use distilled water for dialysis.</li>
      </ul>

      <h2 className={classes.secondaryTag}>2. Preparation of ferric hydroxide sol</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>2% solution of ferric chloride</li>
        <li>Distilled water</li>
        <li>250 ml conical flask</li>
        <li>250 ml beaker</li>
        <li>Glass tube</li>
        <li>Funnel</li>
        <li>Dropper</li>
        <li>RB flask</li>
        <li>Iron stand with clamp</li>
        <li>Wire gauze</li>
        <li>Tripod stand</li>
        <li>Bunsen burner</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>
          Take a 250 ml conical flask and clean it using the steaming out
          process.
        </li>
        <li>
          To this cleaned conical flask, add 100 ml of distilled water using a
          measuring cylinder.
        </li>
        <li>
          Bring the water to boil by placing the flask over a Bunsen burner.
        </li>
        <li>
          Add ferric chloride solution dropwise to the boiling water using a
          dropper.
        </li>
        <li>
          Continue heating until a deep red or brown solution of ferric
          hydroxide is obtained.
        </li>
        <li>
          Note: Replace the water lost by evaporation during boiling at regular
          intervals.
        </li>
        <li>
          Keep the contents of the conical flask undisturbed for some time at
          room temperature.
        </li>
        <li>Label the solution as Ferric Hydroxide Sol.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>
          Since ferric hydroxide sol is affected by impurities, the apparatus
          required for the preparation of sol should be thoroughly cleaned by
          the steaming out process.
        </li>
        <li>Add ferric chloride solution dropwise.</li>
        <li>Heating is continued till the desired sol is obtained.</li>
        <li>
          Hydrochloric acid formed as a result of hydrolysis of ferric chloride
          is removed by dialysis process otherwise it would destabilise the sol.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Dialysis of ferric hydroxide sol</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>Ferric hydroxide sol</li>
        <li>Silver nitrate solution</li>
        <li>400 ml beaker</li>
        <li>Funnel with long stem</li>
        <li>Parchment membrane</li>
        <li>Dropper</li>
        <li>Test tubes</li>
        <li>Iron stand with clamp</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>Take a parchment bag and fold it in the shape of a bag.</li>
        <li>Tie it to the end of the stem of a funnel with a thread.</li>
        <li>
          Pour the given Ferric hydroxide sol into the parchment bag through the
          funnel till two-third of the bag is full.
        </li>
        <li>
          Take a 400 ml beaker and fill it three-fourth with distilled water and
          place it over an iron stand.
        </li>
        <li>
          Dip the parchment bag into distilled water and fix the funnel in
          position using a clamp.
        </li>
        <li>Allow it to stand for about half an hour.</li>
        <li>
          Withdraw about 1 ml of water from the beaker using a dropper and
          transfer it into a test tube.
        </li>
        <li>Add a few drops of silver nitrtate solution to it.</li>
        <li>
          A white precipitate of silver chloride is produced immediately
          indicating the presence of chloride ions in water. It means that
          chloride ions diffuse through the parchment membrane. As Cl
          <sup>-</sup> diffuse out of the sol, it gets free from the ions
          gradually.
        </li>
        <li>
          In order to check whether Cl<sup>- </sup>is completely removed or not
          replace water in the beaker by fresh distilled water and again place
          the parchment bag containing sol in it.
        </li>
        <li>
          After about 10 minutes, test for the presence of Cl<sup>-</sup> ions.
        </li>
        <li>
          If no white precipitate is formed, Cl<sup>-</sup> ions are absent and
          dialysis is complete otherwise dialysis should be continued.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>Fill only two-third of the parchment bag with sol.</li>
        <li>There should be no leakage of sol from the bag into the beaker.</li>
        <li>Use distilled water for dialysis.</li>
      </ul>

      <h2 className={classes.secondaryTag}>3. Preparation of arsenious sulphide sol</h2>

      <h3 className={classes.secondaryTag}>Materials Required</h3>

      <ul>
        <li>Solid arsenious oxide</li>
        <li>
          H<sub>2</sub>S gas
        </li>
        <li>Distilled water</li>
        <li>250 ml conical flasks</li>
        <li>250 ml beakers</li>
        <li>RB flask</li>
        <li>Glass tube</li>
        <li>Funnel</li>
        <li>Glass rod</li>
        <li>Filter paper</li>
        <li>Iron stand with clamp</li>
        <li>Tripod stand</li>
        <li>Wire gauze</li>
        <li>Bunsen burner</li>
      </ul>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ul>
        <li>Clean a 250 ml conical flask by the steaming out process.</li>
        <li>
          To this cleaned flask, add 0.2 g of arsenious oxide and 100 ml of
          distilled water.
        </li>
        <li>
          Boil the solution for about 10 minutes (while stirring using a glass
          rod) on a Bunsen burner.
        </li>
        <li>
          Filter the hot solution into another beaker through a flutted filter
          paper.
        </li>
        <li>
          Pass a slow current of H<sub>2</sub>S gas into to arsenious oxide
          solution.
        </li>
        <li>
          The solution develops a yellow colour due to the formation of
          arsenious sulphide.
        </li>
        <li>
          Continue passing H<sub>2</sub>S till the intensity of colour does not
          change further.
        </li>
        <li>
          Expel excess of H<sub>2</sub>S gas from the sol by boiling the sol
          till the escaping gas does not turn lead acetate paper black.
        </li>
        <li>
          Filter the solution through a flutted filter paper and collect the
          yellow filtrate in a dry conical flask.
        </li>
        <li>Label it as Arsenious Sulphide Sol.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Precautions</h3>

      <ul>
        <li>
          Use cleaned apparatus since As<sub>2</sub>S<sub>3</sub> sol is
          affected by even traces of impurities.
        </li>
        <li>
          Handle arsenious oxide with care since it is highly poisonous. Wash
          your hand immediately every time you handle this chemical. Do not eat
          or drink while doing this experiment.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <p>You can select the sol from ‘Select the sol’ drop down list.</p>

      <p>
        <strong>Lyophilic Sols</strong>
      </p>

      <p>You can select the sample from ‘Select the sample’ drop down list.</p>

      <p>
        <u>Starch</u>
      </p>

      <ul>
        <li>
          Drag the beaker to the burner to place it over the wire gauze and boil
          100 ml distilled water.
        </li>
        <li>Click on the ‘knob’ of the burner to turn it on.</li>
        <li>
          Drag the watch glass to the beaker to transfer 1 g starch paste into
          boiling water.
        </li>
        <li>Drag the glass rod to the beaker to stir the contents.</li>
        <li>Continue boiling for 10 minutes.</li>
        <li>
          Drag the beaker to the funnel to filter the prepared starch sol.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To go to the dialysis process sol, click on the ‘Dialysis of starch
          sol’ button.
        </li>
        <li>
          Drag the conical flask to the funnel to pour starch sol into the
          parchment bag dipped in distilled water.
        </li>
        <li>Allow it to stand for 30 minutes.</li>
        <li>Drag the dropper to the beaker to take water in it.</li>
        <li>
          Drag the dropper to add iodine solution to the 1<sup>st</sup> test
          tube.
        </li>
        <li>You cannot see any characteristic change in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>Drag the dropper to the beaker to take water in it.</li>
        <li>
          Drag the dropper to add silver nitrate solution to the 2<sup>nd</sup>{' '}
          test tube.
        </li>
        <li>
          You can see the formation of white precipitate in the test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To replace water in the beaker, click on the ‘Replace the water’
          button.
        </li>
        <li>Allow it to stand for 10 minutes.</li>
        <li>Drag the dropper to the beaker to take water in it.</li>
        <li>
          Drag the dropper to add silver nitrate solution to the 2<sup>nd</sup>{' '}
          test tube.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>
        <u>Gum</u>
      </p>

      <ul>
        <li>
          Drag the beaker to the burner to place it over the wire gauze and warm
          100 ml distilled water.
        </li>
        <li>Click on the ‘knob’ of the burner to turn it on.</li>
        <li>
          Drag the watch glass to the beaker to transfer 1 g gum paste into the
          hot water.
        </li>
        <li>Drag the glass rod to the beaker to stir the contents.</li>
        <li>Continue heating for 10 minutes.</li>
        <li>Drag the beaker to the funnel to filter the prepared gum sol.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>
        <u>Egg Albumin</u>
      </p>

      <ul>
        <li>
          Drag the beaker to the beaker containing 5% NaCl solution to transfer
          egg albumin into it.
        </li>
        <li>Drag the glass rod to the beaker to stir the contents.</li>
        <li>
          Drag the beaker to the funnel to filter the prepared egg albumin sol.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <p>
        <strong>Lyophobic Sols</strong>
      </p>

      <p>You can select the sample from ‘Select the sample’ drop down list.</p>

      <p>
        <u>Aluminium hydroxide</u>
      </p>

      <ul>
        <li>Click on the ‘knob’ of the burner to turn it on.</li>
        <li>
          Drag the conical flask to the burner to place it over the wire gauze
          and boil 100 ml distilled water.
        </li>
        <li>
          Drag the dropper to the conical flask to drop aluminium chloride
          solution into it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To go to the dialysis process sol, click on the ‘Dialysis of aluminium
          hydroxide sol’ button.
        </li>
        <li>
          Drag the conical flask to the funnel to pour aluminium hydroxide sol
          into the parchment bag dipped in distilled water.
        </li>
        <li>Allow it to stand for 30 minutes.</li>
        <li>
          Drag the dropper to the beaker to take water in it and drop water into
          the 1<sup>st</sup> test tube.
        </li>
        <li>
          Drag the dropper to add silver nitrate solution into the test tube.
        </li>
        <li>
          You can see the formation of white precipitate in the test tube.
        </li>
        <li>Click on the on the inference icon to see the inference.</li>
        <li>
          To replace water in the beaker, click on the ‘Replace distilled water
          from the beaker’ button.
        </li>
        <li>Allow it to stand for 10 minutes.</li>
        <li>
          Drag the dropper to the beaker to take water in it and drop water into
          the 2<sup>nd</sup> test tube.
        </li>
        <li>
          Drag the dropper to add silver nitrate solution to the test tube.
        </li>
        <li>You cannot see any characteristic changes in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’ </strong>button to
        see the instructions.
      </p>

      <p>
        <u>Ferric hydroxide</u>
      </p>

      <ul>
        <li>
          Drag the conical flask to the burner to place it over the wire gauze
          and boil 100 ml distilled water.
        </li>
        <li>Click on the ‘knob’ of the burner to turn it on.</li>
        <li>
          Drag the dropper to the conical flask to drop ferric chloride solution
          into it.
        </li>
        <li>Wait for some time to complete the reaction.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To go to the dialysis process sol, click on the ‘Dialysis of ferric
          hydroxide sol’ button.
        </li>
        <li>
          Drag the conical flask to the funnel to pour ferric hydroxide sol into
          the parchment bag dipped in distilled water.
        </li>
        <li>Allow it to stand for 30 minutes.</li>
        <li>
          Drag the dropper to the beaker to take water in it and drop water into
          the 1<sup>st</sup> test tube.
        </li>
        <li>
          Drag the dropper to add silver nitrate solution to the test tube.
        </li>
        <li>
          You can see the formation of white precipitate in the test tube.
        </li>
        <li>Click on the on the inference icon to see the inference.</li>
        <li>
          To replace water in the beaker, click on the ‘Replace the water’
          button.
        </li>
        <li>Allow it to stand for 10 minutes.</li>
        <li>
          Drag the dropper to the beaker to take water in it and drop water into
          the 2<sup>nd</sup> test tube.
        </li>
        <li>
          Drag the dropper to add silver nitrate solution to the test tube.
        </li>
        <li>You cannot see any characteristic changes in the test tube.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>
        <u>Arsenious sulphide</u>
      </p>

      <ul>
        <li>
          Drag the watch glass to the conical flask to add 0.2 g arseniuos oxide
          into 100 ml distilled water.
        </li>
        <li>
          Drag the conical flask to the burner to place it over the wire gauze.
        </li>
        <li>Click on the ‘knob’ of the burner to turn it on.</li>
        <li>Drag the conical flask to the funnel to filter the solution.</li>
        <li>
          Click on the ‘knob’ of the Kipp’s apparatus to pass hydrogen sulphide
          gas through the solution.
        </li>
        <li>Drag the beaker to the burner to place it over the wire gauze.</li>
        <li>Click on the ‘knob’ of the burner o turn it on.</li>
        <li>Drag the beaker to the funnel to filter the solution.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To pass H<sub>2</sub>S gas through the solution, click on the ‘Pass H
          <sub>2</sub>S gas through arsenous acid’ button.
        </li>
        <li>
          Click on the ‘knob’ of the Kipp’s apparatus to pass hydrogen sulphide
          gas through the solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>Drag the beaker to the burner to place it over the wire gauze.</li>
        <li>
          Click on the ‘knob’ of the burner to turn it on and heat the sol for 5
          minutes.
        </li>
        <li>To filter the sol, click on the ‘Filter the solution’ button.</li>
        <li>
          Drag the beaker to the funnel to filter the arseniuos sulphide sol.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Preparation of Lyophilic and Lyophobic
          Sols. Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=34&cnt=2
        </Typography>
      </div>
    </div>
  );
}
