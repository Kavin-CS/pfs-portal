import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CrystallisationThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Crystallisation1/crystallisation-the1.png';
import CrystallisationThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Crystallisation1/crystallisation-the2.png';
import CrystallisationThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Crystallisation1/crystallisation-the3.png';


const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        Our Objective is to prepare the crystals of the following substances
        form their impure samples through crystallisation;
      </p>

      <ol>
        <li>Copper sulphate</li>
        <li>Potash alum</li>
        <li>Benzoic acid&nbsp;</li>
      </ol>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What happens during crystallisation?</h2>

      <p>
        The chemicals used for various purposes should be pure, completely free
        from any type of impurities. Method of purification of a substance
        depends upon the nature of impurities present in it. There are various
        methods for the purification of substances, e.g., filtration,
        evaporation, decantation, distillation, and crystallization.
        Crystallisation is one of the very important purification techniques,
        purifying substances by removing unwanted by-products. Crystalline
        compounds are generally purified via this crystallisation process.
      </p>

      <p>
        The principle behind the crystallisation is that the amount of solute
        that can be dissolved by a solvent increases with temperature.
      </p>

      <p>
        In crystallisation, the impure substance is dissolved in a suitable
        solvent to reach its nearly saturated solution at a temperature higher
        than the room temperature. At this high temperature, the solute has very
        high solubility in that solvent, so a much smaller quantity of hot
        solvent is needed for dissolving the solute than the solvent at room
        temperature.&nbsp; When the solution is cooled, the pure substance is
        crystallised. The solution left behind is called mother liquor. All the
        impurities are left behind in the mother liquor. The purification method
        depends on the differences in solubility between the compound and the
        impurity.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>
        Let us discuss the basic steps involved in the crystallisation process
      </h2>

      <h3 className={classes.secondaryTag}>Solvent and solute selection</h3>

      <p>
        Choosing an appropriate solvent is the important process of
        crystallisation, as crystallisation works only when a proper solvent is
        used. It is important to choose a solvent that will not dissolve the
        substance at room temperature. But as the temperature of the solvent
        increases, the solubility of the solute also increases. At the same
        time, the impurities that are present must either be soluble in the
        solvent at room temperature or must be insoluble in the solvent at a
        high temperature. If the solvent is not hot when the dissolution is
        carried out, too much solvent will be used, leading to diminished yield.
      </p>

      <h3 className={classes.secondaryTag}>Dissolving the solute in the solvent</h3>

      <p>
        Add a small portion of the solvent to the beaker containing impure
        sample and boiling chips while the sample is heating.&nbsp; Stir the
        contents gently. Add enough solvent to dissolve the solute to get a
        saturated solution at the boiling point of the solvent. If too much
        solvent is used, the recovery of the substance will be decreased.
      </p>

      <h3 className={classes.secondaryTag}>Filtration of the hot solution</h3>

      <p>
        If the hot solution contains insoluble impurities, it can be removed by
        the process of filtration. For this process, Place a filter paper cone
        in a funnel and wet the filter paper with a spray of water to fix it
        inside the funnel properly. Place the funnel on a funnel stand and put a
        china dish below the funnel.
      </p>

      <p>
        Note: The stem of the funnel should touch the wall of the china dish to
        avoid the solution splashing out.
      </p>

      <h3 className={classes.secondaryTag}>Crystallisation of the filtrate</h3>

      <p>
        To concentrate the filtrate, heat the china dish containing filtrate
        gently with constant stirring. This is done to ensure uniform
        evaporation and to prevent formation of a solid crust. When the volume
        of the solution is reduced to one half, dip one end of a glass rod in
        the concentrated solution and cool the drop by blowing on it. The
        formation of a thin crust indicates that the crystallisation point has
        been obtained.&nbsp;
      </p>

      <h3 className={classes.secondaryTag}>Cooling the concentrated solution</h3>

      <p>
        Once it is determined that the solution is saturated with the compound,
        it is allowed to cool slowly at room temperature.
      </p>

      <p>
        In order to cool the concentrated solution, pour the solution into a
        crystallising dish and keep it undisturbed. As the solution cools,
        crystals separate. Once the sample is cooled to room temperature, place
        it in an ice bath or in cold water to complete the crystallisation.
      </p>

      <p>
        If the crystallisation does not start immediately, add a seed crystal or
        scratch inside the vessel containing the concentrated solution with a
        glass rod.
      </p>

      <h3 className={classes.secondaryTag}>Separation and drying of crystals</h3>

      <p>
        The crystals formed are separated by either decanting the mother liquor
        or by the process of filtration.&nbsp; Wash the crystals with cold water
        or alcohol. The crystals can be dried by pressing them gently between
        sheets of filter paper.&nbsp; They can also be dried by spreading them
        on a porous plate or by placing the crystals in a vacuum desiccator. The
        crystals have a definite geometry, and therefore a definite shape.
      </p>

      <h2 className={classes.secondaryTag}>Let us discuss the crystallisation of some samples</h2>

      <h3 className={classes.secondaryTag}>
        Crystallisation of copper sulphate (CuSO<sub>4</sub>.5H<sub>2</sub>O)
      </h3>

      <p>
        To crystallise copper sulphate, dissolve it in water and add a small
        quantity of dilute sulphuric acid to prevent the hydrolysis of copper
        sulphte. The impurities left behind in the solution are removed by
        filtration. The filtrate is concentrated to the crystallisation point
        and then cooled. On cooling, transparent blue crystals of copper
        sulphate separate. The copper sulphate crystal formed has triclinic
        shape
      </p>

      <p>
        <img alt="" src={CrystallisationThe1} />
      </p>

      <h3 className={classes.secondaryTag}>Crystallisation of Potash Alum</h3>

      <p>
        Potash alum is highly water soluble. To prepare pure crystals of potash
        alum, dissolve the sample in distilled water and remove the insoluble
        impurities by filtration. This solution is concentrated to the
        crystallisation point and cooled.&nbsp; Colourless transparant crystals
        of potash alum separate. The soluble impurities are left behind in the
        mother liquor. Potash alum has an octahedral geometry.
      </p>

      <p>
        <img alt="" src={CrystallisationThe2} />
      </p>

      <h3 className={classes.secondaryTag}>Crystallisation of Benzoic Acid</h3>

      <p>
        Benzoic acid is a colourless crystalline solid. It is highly soluble in
        hot water, but poorly soluble in cold water. It can be recrystallised by
        dissolving it in hot water. The hot solution obtained is filtered and
        cooled. Upon cooling, opaque white crystals of benzoic acid crystallise.
      </p>

      <p>
        <img alt="" src={CrystallisationThe3} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the term ‘crystallisation’ from the experiment.
        </li>
        <li>
          Students understand different steps of a crystallisation process.
        </li>
        <li>
          Students acquire skill to perform the crystallisation using the
          following;
          <ul>
            <li>Copper sulphate</li>
            <li>Potash alum</li>
            <li>Benzoic acid</li>
          </ul>
        </li>
        <li>
          Students may be able to do the experiment using other samples once
          they visualise the steps.&nbsp;
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Purification of Impure Samples by
          Crystallization. Retrieved 30 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=7&sim=110&cnt=1
        </Typography>
      </div>
    </div>
  );
}
