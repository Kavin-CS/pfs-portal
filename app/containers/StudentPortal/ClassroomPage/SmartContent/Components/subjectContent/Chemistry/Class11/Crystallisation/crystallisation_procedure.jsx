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

import CrystallisationPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Crystallisation1/crystallisation-pro1.jpg';
import CrystallisationPro2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Crystallisation1/crystallisation-pro2.jpg';
import CrystallisationPro3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Crystallisation1/crystallisation-pro3.jpg';

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
      <h1 className={classes.headTag}>Crystallisation of Copper sulphate</h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        <img alt="" src={CrystallisationPro1} />
      </p>

      <h2 className={classes.secondaryTag}>The Procedure</h2>

      <h3 className={classes.secondaryTag}>Real lab procedure</h3>

      <p>
        <strong>Preparation of the solution</strong>
      </p>

      <ul>
        <li>
          Take about 25-30 ml of distilled water in a beaker and add powdered
          crude copper sulphate while stirring the solution so that the powder
          dissolves.
        </li>
        <li>
          Keep adding the powdered sample till a little of it remains
          undissolved, even if it is stirred thoroughly.
        </li>
        <li>
          Now add 2-3 ml of dil. H<sub>2</sub>SO<sub>4</sub> to make the
          solution clear. This prevents the hydrolysis of copper sulphate.
        </li>
      </ul>

      <p>
        <strong>Filtration of the solution</strong>
      </p>

      <ul>
        <li>
          Take a funnel and fix a filter paper in it and clamp it to a stand.
        </li>
        <li>
          Place a china dish under the funnel. The stem of the funnel should
          touch the wall of the china dish to avoid the solution splashing out.
        </li>
        <li>
          Pour the solution into the funnel over a glass rod and collect the
          filtrate in a china dish. The insoluble impurities are left in the
          filter paper as residue.
        </li>
      </ul>

      <p>
        <strong>Concentration of the filtrate to crystallisation point</strong>
      </p>

      <ul>
        <li>
          Heat the china dish on a sand bath till the solution is reduced to
          about one-third of its original volume.
        </li>
        <li>
          To avoid crust formation on the sides of the dish, stir the solution
          continuously with a glass rod. If crust is formed, it can be dissolved
          in the solution by removing it with the glass rod. Don’t allow the
          solution in the dish to boil.
        </li>
        <li>
          To know if the solution has reached its crystallisation point, use the
          end of the glass rod to remove a drop of the solution and cool it by
          blowing on it. The appearance of a crust or tiny crystals on the glass
          rod shows that the crystallisation point has been reached.
        </li>
        <li>Turn off the burner and stop heating.</li>
        <li>Transfer the hot saturated solution into a crystallising dish.</li>
      </ul>

      <p>
        <strong>Cooling the hot saturated solution</strong>
      </p>

      <ul>
        <li>
          &nbsp;Place the crystallisation dish containing the hot saturated
          solution in a trough containing water filled to the brim and allow it
          to cool slowly for sometime.
        </li>
        <li>
          &nbsp;Deep blue crystals of copper sulphate will be formed. The
          crystallisation will complete after half an hour.
        </li>
      </ul>

      <p>
        <strong>Separation of crystals and drying</strong>
      </p>

      <ul>
        <li>Decant the mother liquor carefully into a beaker.</li>
        <li>
          Wash the crystals with a little ethyl alcohol containing a small
          amount of cold water.
        </li>
        <li>
          Place the crystals on a filter paper which will soak up the solution.
        </li>
        <li>
          Transfer the crystals to another filter paper and dry them by pressing
          gently between the folds of the filter paper or by spreading on a
          porous plate.
        </li>
        <li>
          Transfer the crystals into a dry test tube and cork it.&nbsp;&nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Crystallisation of Potash Alum</h1>

      <h2 className={classes.secondaryTag}>Materials required</h2>

      <p>
        <img alt="" src={CrystallisationPro2} />
      </p>

      <h2 className={classes.secondaryTag}>The Procedure</h2>

      <h3 className={classes.secondaryTag}>Real lab procedure</h3>

      <p>
        <strong>Preparation of solution</strong>
      </p>

      <ul>
        <li>
          Take about 25-30 ml of distilled water in a beaker. Add about 5-6 g of
          crude sample of potash alum to it and stir the contents of the beaker
          with a glass rod until the solution is clear.
        </li>
        <li>
          Warm to dissolve all of the alum present in the sample.&nbsp;&nbsp;
        </li>
      </ul>

      <p>
        <strong>Filtration of the solution</strong>
      </p>

      <ul>
        <li>
          Take a funnel and fix a filter paper in it and clamp it to a stand.
        </li>
        <li>
          Place a china dish under the funnel. The stem of the funnel should
          touch the wall of the china dish to avoid the solution splashing out.
        </li>
        <li>
          Pour the solution into the funnel over a glass rod and collect the
          filtrate in a china dish. The insoluble impurities are left in the
          filter paper as residue.&nbsp;
        </li>
      </ul>

      <p>
        <strong>Concentration of the filtrate to crystallisation</strong>
      </p>

      <ul>
        <li>
          Heat the china dish on a sand bath till the solution is reduced to
          about one-third of its original volume.
        </li>
        <li>
          To avoid crust formation on the sides of the dish, stir the solution
          continuously with a glass rod. If a crust is formed, dissolve it back
          into the solution by removing it with the glass rod. Don’t allow the
          solution in the dish to boil.
        </li>
        <li>
          To know if the solution has reached its crystallisation point, use the
          end of the glass rod to remove a drop of the solution and cool it by
          blowing on it. The appearance of a crust or tiny crystals on the glass
          rod shows that the crystallisation point has been reached.
        </li>
        <li>Turn off the burner and stop heating.</li>
        <li>
          Transfer the hot saturated solution into a crystallising dish.&nbsp;
        </li>
      </ul>

      <p>
        <strong>Cooling the hot saturated solution</strong>
      </p>

      <ul>
        <li>
          Place the crystallisation dish containing the hot saturated solution
          in a beaker containing water filled to the brim and allow it to cool
          slowly for some time.
        </li>
        <li>
          Colourless transparent crystals of potash alum begin to separate.
        </li>
        <li>
          After about half an hour, the crystallisation is complete.&nbsp;
        </li>
      </ul>

      <h4 className={classes.secondaryTag}>5. Separation of crystals and drying&nbsp;</h4>

      <ul>
        <li>Decant off the mother liquor carefully into a beaker.</li>
        <li>Wash the crystals with cold solution of alcohol and water.</li>
        <li>
          Place the crystals on a filter paper which will soak up the solution.
        </li>
        <li>
          Transfer the crystals to another filter paper and dry them by pressing
          gently between the folds of the filter paper.
        </li>
        <li>Transfer the crystals into a dry test tube and cork it.&nbsp;</li>
      </ul>

      <h1 className={classes.headTag}>Crystallisation of Benzoic Acid</h1>

      <h2 className={classes.secondaryTag}>Materials required</h2>

      <p>
        <img
          alt=""
          src={CrystallisationPro3}
        />
      </p>

      <h2 className={classes.secondaryTag}>The Procedure</h2>

      <h3 className={classes.secondaryTag}>Real lab procedure</h3>

      <p>
        <strong>Preparation of solution&nbsp;</strong>
      </p>

      <ul>
        <li>
          Take about 150 ml of distilled water in the beaker and boil the water
          over a Bunsen burner by placing the beaker over a piece of wire gauze
          placed over a tripod stand.
        </li>
        <li>
          In another beaker, take 2-3 g of crude sample of benzoic acid.&nbsp;
          While constantly stirring, gradually add a minimum quantity of boiling
          water just sufficient to dissolve the benzoic acid. If required,
          heating can be used to dissolve the benzoic acid.&nbsp;
        </li>
      </ul>

      <p>
        <strong>Filtration of the solution&nbsp;</strong>
      </p>

      <ul>
        <li>
          Take a funnel and fix a filter paper in it and clamp it to a stand.
        </li>
        <li>
          Fix a fluted filter paper into the funnel and filter the hot solution
          into a beaker.
        </li>
        <li>Insoluble impurities will be left in the filter paper.&nbsp;</li>
      </ul>

      <p>
        <strong>Cooling the hot saturated solution&nbsp;</strong>
      </p>

      <ul>
        <li>Let the filtered solution come to room temperature by itself.</li>
        <li>Now cool it by placing it in a cold water trough.</li>
        <li>Opaque white crystals of benzoic acid begin to separate.&nbsp;</li>
      </ul>

      <p>
        <strong>Separation of crystals and drying&nbsp;</strong>
      </p>

      <ul>
        <li>
          Fix a filter paper in a funnel that is clamped to a stand and separate
          the crystals by filtration.
        </li>
        <li>Wash the crystals with cold water.</li>
        <li>
          Transfer the crystals to another filter paper and dry them by pressing
          gently between the folds of the filter paper.
        </li>
        <li>Transfer the crystals into a dry test tube and cork it.&nbsp;</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the&nbsp;
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <p>
        You can select any one of the sample to perform the experiment by
        clicking on the corresponding sample icon.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Copper Sulphate</h2>

      <ul>
        <li>
          Drag the spatula containing copper sulphate towards the beaker
          containing distilled water and drop it in.
        </li>
        <li>Click on the glass rod to stir the solution.</li>
        <li>
          Drag the measuring cylinder containing conc. H<sub>2</sub>SO
          <sub>4</sub> towards the beaker to pour it into the solution.
        </li>
        <li>Click on the ‘Next’ button.</li>
        <li>
          Drag the beaker towards the funnel to filter the copper sulphate
          solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          We can now click on the ‘Next’ button to go to the next process.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>To stir the solution in the china dish, click on the glass rod.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the china dish towards the crystallisation dish to transfer the
          hot saturated solution of copper sulphate into it.
        </li>
        <li>
          To cool the hot solution, drag the crystallisation dish and place it
          in the trough containing water.
        </li>
        <li>
          Wait for some time for the copper sulphate to recrystallise from the
          solution.
        </li>
        <li>
          Drag the crystallisation dish out of the water trough to place it
          back.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>We can click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the bottle containing ethyl alcohol and water mixture towards the
          crystallisation dish to wash the crystals.
        </li>
        <li>
          Drag the crystallisation dish towards the trough to decant the upper
          solution.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To transfer the crystals into the test tube, drag the filter paper
          containing the crystals toward it.
        </li>
        <li>Drag the cork towards the test tube and close it.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Potash alum</h2>

      <ul>
        <li>
          Drag the spatula containing potash alum towards the beaker containing
          distilled water and drop it in.
        </li>
        <li>Click on the glass rod to stir the solution.</li>
        <li>To go to the next process, click on the ‘Next’ button.</li>
        <li>
          Drag the beaker towards the funnel to filter the potash alum solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To go to the next process, click on the ‘Next’ button.</li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>To stir the solution in the china dish, click on the glass rod.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          Drag the china dish towards the crystallisation dish to transfer the
          hot saturated solution of potash alum into it.
        </li>
        <li>
          To cool the hot solution, drag the crystallisation dish and place it
          in the trough containing water.
        </li>
        <li>
          Wait for some time for potash alum to recrystallise from the solution.
        </li>
        <li>
          Drag the crystallisation dish out of the water trough to place it
          back.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>We can click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the bottle containing alcohol and water mixture towards the
          crystallisation dish to wash the crystals.
        </li>
        <li>
          Drag the crystallisation dish towards the trough to decant the upper
          solution.
        </li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To transfer the crystals into the test tube, drag the filter paper
          containing the crystals toward it.
        </li>
        <li>Drag the cork towards the test tube and close it.</li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Benzoic acid</h2>

      <ul>
        <li>
          Drag the spatula containing benzoic acid towards the beaker containing
          hot water and drop it in.
        </li>
        <li>Click on the glass rod to stir the solution.</li>
        <li>To go to the next process, click on the ‘Next’ button.</li>
        <li>
          Drag the beaker towards the funnel to filter the benzoic acid
          solution.
        </li>
        <li>Click on the inference icon to see the inference.</li>
        <li>To go to the next process, click on the ‘Next’ button.</li>
        <li>
          To cool the hot solution, drag the beaker and place it in the trough
          containing water.
        </li>
        <li>
          Wait for some time for benzoic acid to recrystallise from the
          solution.
        </li>
        <li>Drag the beaker out of the water trough to place it back.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>Drag the beaker towards the funnel to filter its contents.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>Click on the ‘Next’ button to go to the next process.</li>
        <li>
          Drag the bottle containing cold water towards the crystallisation dish
          to wash the crystals.
        </li>
        <li>
          Drag the crystallisation dish towards the trough to decant the upper
          solution.
        </li>
        <li>To go to the next process, click on the ‘Next’ button.</li>
        <li>Click on the inference icon to see the inference.</li>
        <li>
          To transfer the crystals into the test tube, drag the filter paper
          containing the crystals toward it.
        </li>
        <li>Drag the cork towards the test tube and close it.</li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          &nbsp;The filtrate should be evaporated slowly by gently heating
          during concentration.
        </li>
        <li>
          &nbsp;The filtrate is to be evaporated only up to the crystallisation
          point. It should never be heated to dryness. Avoid overheating the
          &nbsp;solution.
        </li>
        <li>
          &nbsp;The solution should be cooled slowly without disturbing it. It
          should never be cooled rapidly.
        </li>
        <li>
          &nbsp;Wash the crystals with the washing liquid 3-4 times, using very
          small amount of the liquid each time.
        </li>
        <li>
          &nbsp;If the crystals obtained are very small, it means that the
          solution has been concentrated more than that required for the
          &nbsp;crystallisation stage.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Purification of Impure Samples by
          Crystallization. Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=110&cnt=2
        </Typography>
      </div>
    </div>
  );
}
