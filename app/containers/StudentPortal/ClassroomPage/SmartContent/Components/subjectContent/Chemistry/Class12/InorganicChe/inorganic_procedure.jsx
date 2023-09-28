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
      <h1 className={classes.headTag}>
        A. Preparation of pure sample of Ferrous ammonium sulphate (Mohr’s salt)
        
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <ul>
        <li>Ferrous sulphate</li>
        <li>Ammonium sulphate</li>
        <li>Dil. Sulphuric acid</li>
        <li>Ethyl alcohol</li>
        <li>Distilled water</li>
        <li>Beakers</li>
        <li>China dish</li>
        <li>Funnel</li>
        <li>Glass rod</li>
        <li>Tripod stand</li>
        <li>Wire gauze</li>
        <li>Burner</li>
        <li>Wash bottle&nbsp;</li>
        <li>Measuring jar</li>
        <li>Electronic balance</li>
      </ul>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ol>
        <li>
          We’ll first take 7g ferrous sulphate 3.5g ammonium sulphate in a clean
          250ml beaker.
        </li>
        <li>
          To this add about 2-3ml of dil.sulphuric acid to prevent the
          hydrolysis of ferrous sulphate.
        </li>
        <li>In another beaker, boil about 20ml of water for 5 minutes.</li>
        <li>
          Add the boiling hot water to the contents in the first beaker in small
          quantities at a time.
        </li>
        <li>
          Stir the contents of the beaker with a glass rod until the salts have
          completely dissolved.
        </li>
        <li>Filter the solution into a china dish.</li>
        <li>
          Now heat the solution in the china dish until its crystallisation
          point is reached. Then transfer the solution into a crystallising dish
          and keep it undisturbed.
        </li>
        <li>On cooling, crystals of Mohr’s salt separate.</li>
        <li>
          Decant the mother liquor and wash the crystals with a small quantity
          of alcohol and then dry the crystals by placing them between filter
          paper pads.
        </li>
        <li>Find the weight of the crystals.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ol>
        <li>&nbsp;Weight of the crystals obtained = ....g</li>
        <li>&nbsp;Colour of the crystals = ....</li>
        <li>&nbsp;Shape of the crystals = ....</li>
      </ol>

      <h1 className={classes.headTag}>
        B. Preparation of pure sample of potash alum (Fitkari) [K<sub>2</sub>SO
        <sub>4</sub>.Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.24H<sub>2</sub>
        O]
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <ul>
        <li>Potassium sulphate</li>
        <li>Aluminium sulphate</li>
        <li>Dil. Sulphuric acid</li>
        <li>Distilled water</li>
        <li>Beakers</li>
        <li>China dish</li>
        <li>Funnel</li>
        <li>Glass rod</li>
        <li>Tripod stand</li>
        <li>Wire gauze</li>
        <li>Burner</li>
        <li>Wash bottle</li>
        <li>Measuring jar</li>
        <li>Electronic balance</li>
      </ul>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ol>
        <li>Take 2.5g potassium sulphate crystals in a clean beaker.</li>
        <li>
          To this add 20ml of distilled water and stir using a glass rod until
          the crystals completely dissolve.
        </li>
        <li>Take 10g aluminium sulphate in another beaker.</li>
        <li>
          Add about 20ml of distilled water and 1ml of dil.sulphuric acid to it.
        </li>
        <li>Heat the contents of the beaker for about 5 minutes.</li>
        <li>Mix the two solutions in a china dish.</li>
        <li>
          Heat the solution in the china dish for some time to concentrate it to
          the crystallisation point.
        </li>
        <li>
          Transfer the solution into a crystallising dish and do not disturb it.
        </li>
        <li>On cooling crystals of potash alum separate.</li>
        <li>
          Decant the mother liquor and wash the crystals with a small quantity
          of ice-cold water.
        </li>
        <li>Dry the crystals by placing them between filter paper pads.</li>
        <li>Find &nbsp;the weight of the crystals.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ol>
        <li>Weight of the crystals obtained = ....g</li>
        <li>Colour of the crystals = ....</li>
        <li>Shape of the crystals = ....</li>
      </ol>

      <h1 className={classes.headTag}>C. Preparation of the complex Potassium trioxalatoferrate (III) </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <ul>
        <li>Ferric chloride</li>
        <li>Hydrated oxalic acid</li>
        <li>Hydrated potassium oxalate</li>
        <li>Potassium hydroxide</li>
        <li>Distilled water</li>
        <li>Beakers</li>
        <li>China dish</li>
        <li>Funnel</li>
        <li>Glass rod</li>
        <li>Tripod stand</li>
        <li>Wire gauze</li>
        <li>Burner</li>
        <li>Wash bottle&nbsp;</li>
        <li>Measuring jar</li>
        <li>Electronic balance</li>
      </ul>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ol>
        <li>
          Take 3.5g of anhydrous ferric chloride in a250ml beaker and dissolve
          it in 50ml water.
        </li>
        <li>
          In another beaker dissolve 4g of potassium hydroxide in 50ml water.
        </li>
        <li>
          Add potassium hydroxide to ferric chloride solution in small
          proportions while stirring constantly.
        </li>
        <li>
          Filter the precipitate of ferric hydroxide formed through a Buchner
          funnel and wash it with distilled water.
        </li>
        <li>
          In another beaker, take 4g of hydrated oxalic acid and 5.5g of
          hydrated potassium oxalate.
        </li>
        <li>
          Add about 100ml of water and stir thoroughly to get a clear solution.
        </li>
        <li>
          Add the freshly prepared ferric hydroxide precipitate in small amounts
          to the above solution while stirring constantly until the precipitate
          dissolves.
        </li>
        <li>
          Filter the above solution into a china dish and heat over a sand bath
          until its crystallisation point is reached.
        </li>
        <li>
          Place the china dish in a beaker full of cold water and keep it aside
          for filtration.
        </li>
        <li>
          Cover the china dish with a piece of black paper because the complex
          is sensitive to light.
        </li>
        <li>
          Decant the mother liquor, wash the crystals with a small amount of
          ethyl alcohol and dry them between the folds of filter paper.
        </li>
        <li>Find &nbsp;the weight of the crystals.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ol>
        <li>Weight of the crystals obtained = ....g</li>
        <li>Colour of the crystals = ....</li>
      </ol>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <p>
        You can select a compound from ‘Select the compound’ drop down list.
      </p>

      <p>Ferrous ammonium sulphate</p>

      <ul>
        <li>
          Drag the watch glass to the beaker to transfer 7 g ferrous sulphate
          into it.
        </li>
        <li>
          Drag the watch glass to the beaker to add 3.5 g ammonium sulphate to
          the beaker containing ferrous sulphate.
        </li>
        <li>
          Drag the measuring jar to the beaker to pour 3 ml dil. H<sub>2</sub>SO
          <sub>4</sub> into it.
        </li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>
          Drag the beaker to pour 20 ml hot water into the beaker containing
          ferrous sulphate and ammonium sulphate.
        </li>
        <li>
          Drag the glass rod to the beaker to stir the contents of the beaker.
        </li>
        <li>
          Drag the beaker to the funnel to filter the solution into the china
          dish.
        </li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the glass rod to the china dish to stir the solution.</li>
        <li>
          Drag the china dish to the crystallising dish to transfer the
          solution.
        </li>
        <li>
          Drag the watch glass to the crystallising dish to cover the dish with
          it.
        </li>
        <li>
          Drag the crystallising dish to the cold water trough to place the dish
          in it.
        </li>
        <li>Wait for some time to cool the solution.</li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>
          Drag the crystallising dish to the beaker to decant the mother liquor
          into it.
        </li>
        <li>
          Drag the bottle to the crystallising dish to pour ethyl alcohol into
          it.
        </li>
        <li>
          Drag the crystallising dish to shake it and wash the crystals with
          alcohol.
        </li>
        <li>
          Drag the crystallising dish to the filter paper to transfer the
          crystals.
        </li>
        <li>
          Drag the other filter paper to the filter paper containing crystals to
          dry the crystals.
        </li>
        <li>
          Drag the filter paper to the watch glass to transfer the crystals into
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>Note: Click on the ‘HELP’ button to see the instructions.</p>

      <p>&nbsp;Potash alum</p>

      <ul>
        <li>
          Drag the watch glass to the beaker to add 2.5 g potassium sulphate
          into 20 ml distilled water.
        </li>
        <li>
          Drag the watch glass to the beaker to add 10 g aluminium sulphate into
          20 ml distilled water.
        </li>
        <li>
          Drag the measuring jar to the beaker to pour 1 ml dil. dil. H
          <sub>2</sub>SO<sub>4</sub> into it.
        </li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>
          Drag the beaker to the burner to place it over the wire gauze and heat
          aluminium sulphate solution.
        </li>
        <li>
          Drag the beaker to the china dish to transfer aluminium sulphate
          solution into it.
        </li>
        <li>
          Drag the beaker containing potassium sulphate solution to the china
          dish to transfer the solution into it.
        </li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the glass rod to the china dish to stir the solution.</li>
        <li>
          Drag the china dish to the crystallising dish to transfer the
          solution.
        </li>
        <li>
          Drag the watch glass to the crystallising dish to cover the dish with
          it.
        </li>
        <li>
          Drag the crystallising dish to the cold water trough to place the dish
          in it.
        </li>
        <li>Wait for some time to cool the solution.</li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>
          Drag the crystallising dish to the beaker to decant the mother liquor
          into it.
        </li>
        <li>
          Drag the bottle to the crystallising dish to pour ethyl alcohol-cold
          water mixture into it.
        </li>
        <li>
          Drag the crystallising dish to shake it and wash the crystals with
          alcohol-cold water mixture.
        </li>
        <li>
          Drag the crystallising dish to the filter paper to transfer the
          crystals into it.
        </li>
        <li>
          Drag the other filter paper to the filter paper containing crystals to
          dry the crystals.
        </li>
        <li>
          Drag the filter paper to the watch glass to transfer the crystals into
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>Note: Click on the ‘HELP’ button to see the instructions.</p>

      <p>Potassium trioxalatoferrate (III)</p>

      <ul>
        <li>
          Drag the watch glass to the beaker to add 3.5 g ferric chloride into
          50 ml distilled water.
        </li>
        <li>
          Drag the watch glass to the beaker to add 4 g potassium hydroxide into
          50 ml distilled water.
        </li>
        <li>
          Drag the glass rod to the beaker containing potassium hydroxide to
          stir the contents of the beaker.
        </li>
        <li>
          Drag the beaker to add potassium hydroxide solution to the beaker
          containing ferric chloride solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>
          Drag the filter paper to the Buchner funnel to place it in the funnel.
        </li>
        <li>
          Drag the beaker to the Buchner funnel to filter the contents of the
          beaker.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>
          Drag the watch glass to the beaker to add 4 g hydrated oxalic acid
          into 100 ml distilled water.
        </li>
        <li>
          Drag the watch glass to the beaker to add 5.5 g hydrated potassium
          oxalate to the beaker.
        </li>
        <li>
          Drag the watch glass to the beaker to add ferric hydroxide precipitate
          into the solution of potassium hydroxide and oxalic acid.
        </li>
        <li>
          Drag the beaker to the funnel to filter the solution into the china
          dish.
        </li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the glass rod to the china dish to stir the solution.</li>
        <li>
          Drag the china dish to the cold water trough to place the dish in it.
        </li>
        <li>
          Drag the black paper to the cold water trough to cover the china dish
          with it.
        </li>
        <li>Wait for some time to cool the solution in the china dish.</li>
        <li>Click on the “Next” button to go to the next process.</li>
        <li>
          Drag the bottle to the china dish to pour ethyl alcohol into it.
        </li>
        <li>
          Drag the china dish to shake it and wash the crystals with ethyl
          alcohol.
        </li>
        <li>
          Drag the china dish to the filter paper to transfer the crystals into
          it.
        </li>
        <li>
          Drag the other filter paper to the filter paper containing crystals to
          dry the crystals.
        </li>
        <li>
          Drag the filter paper to the watch glass to transfer the crystals into
          it.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ol>
        <li>Do not concentrate the solution too much.</li>
        <li>
          To get large crystals, let the concentrated solution cool slowly and
          remain undisturbed.
        </li>
        <li>
          Do not heat the solution of ferrous sulphate and ammonium sulphate for
          a long time as it may oxidise ferrous ions to ferric ions.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Preparation of Inorganic Compounds.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=114&cnt=2
        </Typography>
      </div>
    </div>
  );
}
