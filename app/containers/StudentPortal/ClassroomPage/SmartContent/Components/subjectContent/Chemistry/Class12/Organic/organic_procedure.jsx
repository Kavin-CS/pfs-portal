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
      <h1 className={classes.headTag}>A. Preparation of acetanilide from aniline</h1>

      <h2 className={classes.secondaryTag}>Materials Required&nbsp;</h2>

      <ul>
        <li>Aniline -10ml</li>
        <li>Acetic anhydride - 10ml</li>
        <li>Glacial acetic acid - 10ml</li>
        <li>Conical flask</li>
        <li>RB flask</li>
        <li>Funnel</li>
        <li>Filter paper</li>
        <li>Buchner funnel</li>
        <li>Water condenser</li>
        <li>Wire gauze</li>
        <li>Tripod stand</li>
        <li>Burner</li>
        <li>Measuring jar</li>
      </ul>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ol>
        <li>
          Take 10ml of acetic anhydride in a clean dry 250ml RB flask and add
          10ml of glacial acetic acid and shake the contents thoroughly.
        </li>
        <li>To this mixture add 10ml of aniline and fit a water condenser.</li>
        <li>Boil this mixture over a sand bath for 10min.</li>
        <li>
          Pour the liquid from the RB flask into 200ml ice-cold water taken in a
          beaker. While adding stir the contents of the beaker vigorously using
          a glass rod.
        </li>
        <li>
          Filter the white precipitate formed and wash it with cold water.
        </li>
        <li>
          Recrystallisation of Acetanilide: Take the crude acetanilide in the
          beaker and add 50ml of a mixture of 1 volume of acetic acid and 2
          volumes of water. Heat to dissolve the solid. Filter the hot solution
          into a conical flask and cool the filtrate in ice. Filter off the
          crystals of acetanilide formed and dry them by pressing them between
          the folds of a filter paper and measure the weight of the crystals.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>The weight of acetanilide= __________ g.</p>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>Handle the chemicals with care.</li>
        <li>Freshly distilled aniline should be used to get good results.</li>
        <li>
          Prolonged heating and use of excess of acetic anhydride should be
          avoided.
        </li>
        <li>
          Reaction mixture should first cooled and then poured in ice-cold water
          otherwise hydrolysis of acetanilide may take place.
        </li>
      </ul>

      <h1 className={classes.headTag}>B. Preparation of dibenzal acetone</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <ul>
        <li>Benzaldehyde - 2.5ml</li>
        <li>Acetone - 1ml</li>
        <li>10% NaOH solution - 5ml</li>
        <li>Rectified spirit - 25ml</li>
        <li>Conical flask</li>
        <li>Beaker</li>
        <li>Test tube</li>
        <li>Funnel</li>
        <li>Filter papers</li>
        <li>Burner&nbsp;</li>
      </ul>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ol>
        <li>
          Take 2.5ml of benzaldehyde, 10ml of acetone and 25ml of rectified
          spirit in a conical flask. Cork the flask and shake it to obtain a
          clear solution.
        </li>
        <li>
          Take 5ml of 10% NaOH solution in a test tube and add this to conical
          flask drop by drop by shaking the flask. Maintain the temperature of
          the reaction mixture between 20-25<sup>o</sup>C while adding the
          sodium hydroxide solution.
        </li>
        <li>
          Cork the flask again and shake vigorously for about 10min, releasing
          the pressure time to time.
        </li>
        <li>
          Allow it to stand for about 20min at room temperature and then cool in
          ice water for a few minutes.
        </li>
        <li>Filter the yellow coloured solid and wash it with water.</li>
        <li>
          Recrystallisation of Dibenzal acetone: Dissolve the above yellow
          coloured crude solid in minimum amount of hot rectified spirit and
          then allow it to cool slowly. Pale yellow crystals of dibenzal acetone
          separate. Filter the crystals and dry them by pressing them between
          the folds of a filter paper, and then measure the weight of the
          crystals.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>The weight of Dibenzal acetone = ___________ g.</p>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>Handle the chemicals with care.</li>
        <li>
          Add NaOH dropwise to the reaction mixture while shaking of the flask
          continously.
        </li>
        <li>
          Wash the precipitate with water to remove traces of NaOH sticking to
          it.
        </li>
        <li>
          Use minimum amount of rectified spirit to dissolve the crude sample
          for crystallisation.
        </li>
      </ul>

      <h1 className={classes.headTag}>C. Preparation of p-nitro acetanilide from acetanilide</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <ul>
        <li>Acetanilide- 5g</li>
        <li>Glacial acetic acid- 5ml</li>
        <li>Conc.sulphuric acid -10ml</li>
        <li>Fuming nitric acid -2ml</li>
        <li>Methylated spirit -20ml</li>
        <li>Test tubes</li>
        <li>Glass rod</li>
        <li>Beaker</li>
        <li>Buchner funnel</li>
        <li>Filter paper</li>
      </ul>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ol>
        <li>
          Take 5g powdered acetanilide and 5ml of glacial acetic acid in a
          conical flask and stir the mixture using a glass rod.
        </li>
        <li>
          Take 2ml of fuming nitric acid in a clean test tube and cool it in a
          freezing mixture taken in a beaker. Carefully add 2ml of
          conc.sulphuric acid drop by drop while constantly shaking and cooling
          it.
        </li>
        <li>
          Add 8ml of conc.sulphuric acid drop by drop into the conical flask
          containing acetanilide and glacial acetic acid and cool it in a
          freezing mixture. Stir the contents and wait until the temperature
          becomes less than 5<sup>o</sup>C.
        </li>
        <li>
          To the cooled contents in the flask, add the nitrating mixture
          prepared in the 2nd step, drop by drop while stirring constantly.
          While adding the nitrating mixture, the temperature of the mixture in
          the flask should not rise above 25<sup>o</sup>C. Remove the conical
          flask from the freezing mixture and allow it to stand for 30min at
          room temperature.
        </li>
        <li>
          Pour the contents of the flask into a beaker containing crushed ice.
          Stir it well and filter the precipitate obtained and wash it
          thoroughly with cold water.
        </li>
        <li>
          Recrystallisation of p-Nitro acetanilide: Dissolve the precipitate
          obtained above in 20ml methylated spirit. Warm it to get a clear
          solution. Filter the hot solution and cool the filtrate in ice.
          P-Nitro acetanilide is obtained as colourless crystals. Wash the
          crystals with cold water and then dry the crystals and measure the
          weight of the crystals.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>The weight of p-nitroacetanilide = __________ g.</p>

      <h2 className={classes.secondaryTag}>Precautions</h2>

      <ul>
        <li>Handle the chemicals with care.</li>
        <li>
          During the addition of nitrating mixture, the temperature of the
          reaction mixture should not rise above 25 <sup>o</sup>C.
        </li>
        <li>Addition of fuming nitric acid should be done drop wise.</li>
        <li>
          Do not inhale the vapours of nitric acid as they are very corrosive in
          nature. Addition of nitrating mixture may preferably be done in a fume
          cupboard.
        </li>
      </ul>

      <h1 className={classes.headTag}>D. Preparation of 2-naphthol aniline dye</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <ul>
        <li>Aniline -4.5ml</li>
        <li>sodium nitrite- 4g</li>
        <li>2-Naphthol -7g</li>
        <li>conc.HCl -10ml</li>
        <li>glacial acetic acid -40ml</li>
        <li>Conical flask</li>
        <li>Beaker</li>
        <li>Buchner funnel</li>
        <li>Bunsen burner</li>
        <li>Filter paper</li>
      </ul>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <h3 className={classes.secondaryTag}>Real Lab Procedure</h3>

      <ol>
        <li>
          Take 4.5g of aniline, 10ml of Conc. HCl and 20ml of water in a conical
          flask. Cool this solution to 5<sup>o</sup>C by placing the flask in
          ice-cold water.
        </li>
        <li>
          In a 100ml beaker, dissolve 4g of sodium nitrite in 20ml water and
          then cool this solution to 5<sup>o</sup>C.
        </li>
        <li>
          Slowly add sodium nitrite solution to the solution of aniline in
          Conc.HCl. A diazotized solution is formed.
        </li>
        <li>
          In a 250ml beaker dissolve 7g of 2-naphthol in 60ml of 10% NaOH
          solution and cool this solution to 5<sup>o</sup>C.
        </li>
        <li>
          Then add the diazotized solution to the naphthol solution while
          stirring constantly. Immediately a deep red colour develops and the
          2-Naphthol aniline dye rapidly separates as red crystals.
        </li>
        <li>
          Allow the above mixture to stand in a freezing mixture for 30minutes,
          while stirring occasionally. Filter the solution through a Buchner
          funnel and wash the precipitate with water and dry it.
        </li>
        <li>
          Recrystallisation of 2-naphthol aniline dye: Take about 40ml of acetic
          acid in a beaker and add a small amount of the precipitate into it.
          Warm the contents of the beaker to get a clear solution. Then filter
          the hot solution and cool the filtrate in ice. Red coloured crystals
          of 2-Naphthol aniline dye separate. Wash the crystals with ethanol and
          then dry the crystals by placing them between filter papers and
          measure the weight of the crystals obtained.
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>The weight of 2-Naphthol aniline dye = _____________ g.</p>

      <h2 className={classes.secondaryTag}>Precaution</h2>

      <ul>
        <li>
          The solution of aniline in hydrochloric acid should be cooled to 5
          <sup>o</sup>C, and this temperature should be maintained throughout
          the addition of sodium nitrite solution.
        </li>
        <li>
          Addition of sodium nitrite should be very slow because the reaction is
          exothermic and may cause the temperature to rise.
        </li>
        <li>
          Always add diazonium chloride solution to 2-naphthol solution for dye
          formation and not vice-versa.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://amrita.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h2>

      <p>
        <u>Acetanilide</u>
      </p>

      <ul>
        <li>
          Drag the measuring jar to the RB flask to add 10 ml glacial acetic
          acid into 10 ml acetic anhydride.
        </li>
        <li>Drag the RB flask to shake its contents.</li>
        <li>
          Drag the measuring jar to the RB flask to add 10 ml aniline to it.
        </li>
        <li>Drag the RB flask to shake its contents.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Click on the knob of the burner to turn it on and heat the contents of
          RB flask for 10 minutes.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the RB flask to the trough to place it in water and cool the
          contents for 10 minutes.
        </li>
        <li>
          Drag the RB flask to the beaker to pour the contents into 200 ml ice
          cold water.
        </li>
        <li>
          You can see that white precipitate of acetanilide is formed in the
          beaker.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the Buchner funnel to filter the precipitate of
          acetanilide.
        </li>
        <li>
          Drag the bottle to the Buchner funnel to wash the precipitate with
          distilled water.
        </li>
        <li>
          To go to the recrystallization process, click on the
          ‘Recrystallization of acetanilide’ button.
        </li>
        <li>
          Drag the beaker to the beaker containing precipitate of acetanilide to
          pour of acetic acid –water mixture (3:1) into it.
        </li>
        <li>Drag the beaker to the burner to heat its contents.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the funnel to filter the hot solution of
          acetanilide into the conical flask.
        </li>
        <li>
          Drag the conical flask to the ice bath to cool the contents for 10
          minutes.
        </li>
        <li>On cooling crystals of acetanilide separate out.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the conical flask to the Buchner funnel to filter the crystals of
          acetanilide.
        </li>
        <li>
          Click and drag the spatula to the Buchner funnel to take the crystals
          and drag it back to the filter paper to transfer the crystals into the
          filter paper.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          You can see the white shining flakes of acetanilide in the watch
          glass.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the<strong> ‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>
        <strong>
          <u>Dibenzal acetone</u>
        </strong>
      </p>

      <ul>
        <li>
          Drag the measuring jar to the conical flask to pour 25 ml rectified
          spirit into the mixture of 1 ml acetone and 2.5 ml benzaldehyde.
        </li>
        <li>
          Drag the dropper to the conical flask to add 5ml 10% NaOH solution to
          it.
        </li>
        <li>Drag the conical flask to shake the contents for 10 minutes.</li>
        <li>
          To place the conical flask in cold water, click on the button ‘Place
          the conical flask in dish containing cold water’.
        </li>
        <li>Drag the cork to the conical flask to close the flask.</li>
        <li>Drag the conical flask to shake the contents for 10 minutes.</li>
        <li>Leave the flask undisturbed for 20 minutes at room temperature.</li>
        <li>
          Drag the conical flask to the trough to place it in cold water and
          cool the contents for 15 minutes.
        </li>
        <li>
          You can see that pale yellow precipitate of dibenzal acetone is formed
          in the conical flask.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the conical flask to the Buchner funnel to filter the precipitate
          of dibenzal acetone.
        </li>
        <li>
          Drag the bottle to the Buchner funnel to wash the precipitate with
          distilled water.
        </li>
        <li>
          To go to the recrystallization process, click on the
          ‘Recrystallization of dibenzal acetone’ button.
        </li>
        <li>
          Drag the beaker to the beaker containing precipitate of dibenzal
          acetone to pour 25 ml hot rectified spirit into it.
        </li>
        <li>
          Leave the beaker undisturbed for 20 minutes to slowly cool the hot
          solution.
        </li>
        <li>
          You can see that pale yellow crystals of dibenzal acetone are formed
          in the solution.
        </li>
        <li>
          Drag the beaker to the Buchner funnel to filter the crystals of
          dibenzal acetone.
        </li>
        <li>Click on ‘Next’ button to go to the next process.</li>
        <li>
          You can see the pale yellow crystals of dibenzal acetone in the watch
          glass.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the<strong> ‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>
        <strong>
          <u>p- Nitroacetanilide</u>
        </strong>
      </p>

      <ul>
        <li>
          Drag the measuring jar to the conical flask to add 5 ml glacial acetic
          acid into 5 g acetanilide.
        </li>
        <li>Drag the conical flask to the trough to place it in water.</li>
        <li>
          Drag the dropper to the conical flask to add 8 ml conc. H<sub>2</sub>
          SO<sub>4</sub> to it.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Click on the glass rod to stir the contents of the conical flask.
        </li>
        <li>
          Drag the dropper to the test tube in the freezing mixture to take the
          mixture of 2 ml fuming nitric acid and 2 ml conc. H<sub>2</sub>SO
          <sub>4</sub> from the test tube.
        </li>
        <li>
          Drag the dropper to the conical flask to add the mixture of fuming
          nitric acid and conc. H<sub>2</sub>SO<sub>4</sub> to it.
        </li>
        <li>
          Drag the conical flask to leave it undisturbed for 30 minutes at room
          temperature.
        </li>
        <li>
          Drag the conical flask to the beaker to pour the solution into crushed
          ice.
        </li>
        <li>
          You can see that precipitate of p–nitroacetanilide separates out.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the Buchner funnel to filter the precipitate of
          p–nitroacetanilide.
        </li>
        <li>
          Drag the bottle to the Buchner funnel to wash the precipitate with
          distilled water.
        </li>
        <li>
          To go to the recrystallization process, click on the
          ‘Recrystallization of p-nitroacetanilide’ button.
        </li>
        <li>
          Drag the beaker to the beaker containing precipitate of
          p–nitroacetanilide to pour methylated spirit into it.
        </li>
        <li>Drag the beaker to the burner to heat the contents.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the funnel to filter the hot solution of
          p-nitroacetanlide into the conical flask.
        </li>
        <li>
          Drag the conical flask to the ice bath to cool the hot solution for 10
          minutes.
        </li>
        <li>
          On cooling, colourless crystals of p-nitroacetanilide separate out.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the conical flask to the Buchner funnel to filter the crystals of
          p–nitroacetanilide.
        </li>
        <li>
          Click and drag the spatula to the Buchner funnel to take the crystals
          and drag it back to the filter paper to transfer the crystals into the
          filter paper.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          You can see the colourless crystals of p–nitroacetanilide in the watch
          glass.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note: </strong>Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <p>
        <u>
          <strong>2-Naphthol aniline Dye</strong>
        </u>
      </p>

      <ul>
        <li>
          Drag the measuring jar to the conical flask to add 10 ml Conc.HCl into
          4.5 ml aniline.
        </li>
        <li>
          Drag the measuring jar to the conical flask to add 20 ml water to it.
        </li>
        <li>
          Drag the conical flask to the ice bath to cool the contents for 30
          minutes.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the beaker containing 4 g sodium nitrite to add 20
          ml distilled water to it.
        </li>
        <li>
          Drag the beaker to the ice bath to cool the prepared sodium nitrite
          solution for 20 minutes.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the conical flask to add sodium nitrite solution to
          it.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the beaker containing 7 g of 2- naphthol to add 60
          ml 10% NaOH to it.
        </li>
        <li>
          Drag the beaker to the ice bath to cool the alkaline solution of
          2-naphthol for 20 minutes.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the conical flask to the beaker to add the diazotised solution
          into the beaker containing alkaline solution of 2- naphthol.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Click on the glass rod to stir the contents of the beaker and cool it
          for 30 minutes.
        </li>
        <li>Deep red precipitate of 2-naphthol aniline dye is formed.</li>
        <li>
          Drag the beaker to the Buchner funnel to filter the precipitate of
          2-naphthol aniline dye.
        </li>
        <li>
          To go to the recrystallization process, click on the
          ‘Recrystallization of 2-naphthol aniline dye’ button.
        </li>
        <li>
          Drag the beaker to the beaker containing precipitate of 2-naphthol
          aniline dye to add 40 ml glacial acetic acid to it.
        </li>
        <li>Drag the beaker to the burner to heat the contents.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the beaker to the funnel to filter the hot solution of 2-naphthol
          aniline dye into the conical flask.
        </li>
        <li>
          Drag the conical flask to the ice bath to cool the contents for 10
          minutes.
        </li>
        <li>
          On cooling deep red crystals of 2-naphthol aniline dye separate out.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the conical flask to the Buchner funnel to filter the crystals of
          2-naphthol aniline dye.
        </li>
        <li>
          Click and drag the spatula to the Buchner funnel to take the crystals
          and drag it back to the filter paper to transfer the crystals into the
          filter paper.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          You can see the deep red crystals of 2-naphthol aniline dye in the
          watch glass.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note:</strong> Click on the <strong>‘HELP’</strong> button to
        see the instructions.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Preparation of Organic Compounds.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=116&cnt=2
        </Typography>
      </div>
    </div>
  );
}
