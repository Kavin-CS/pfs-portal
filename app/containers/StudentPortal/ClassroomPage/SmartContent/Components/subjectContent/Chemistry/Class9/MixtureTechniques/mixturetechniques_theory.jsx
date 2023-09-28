import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import MixtureTechniquesThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-the1.png';
import MixtureTechniquesThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-the2.png';
import MixtureTechniquesThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-the3.png';
import MixtureTechniquesThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureTechniques1/mixtech-the4.png';


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
        To separate the components of a mixture using the following techniques:
      </p>

      <ul>
        <li>Separating funnel</li>
        <li>Chromatography</li>
        <li>Centrifugation</li>
        <li>Simple distillation</li>
        <li>Fractional distillation</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>
        How is a homogeneous mixture different from a heterogeneous mixture?
      </h2>

      <p>
        Most materials in our surroundings are mixtures of two or more
        components. Mixtures are either homogeneous or heterogeneous.
        Homogeneous mixtures are uniform in composition, but{' '}
        <strong>heterogeneous mixtures are not uniform in composition.</strong>
      </p>

      <p>
        Air is a homogeneous mixture and oil in water is a heterogeneous
        mixture. Homogeneous and heterogeneous mixtures can be separated into
        their components by several physical methods. The choice of separation
        techniques is based on the type of mixture and difference in the
        chemical properties of the constituents of a mixture.
      </p>

      <h2 className={classes.secondaryTag}>What are types of separation techniques?</h2>

      <p>Various types of separation processes are:&nbsp;</p>

      <ul>
        <li>Crystallization</li>
        <li>Filtration</li>
        <li>Decantation</li>
        <li>Sublimation</li>
        <li>Evaporation</li>
        <li>Simple distillation</li>
        <li>Fractional distillation</li>
        <li>Chromatography</li>
        <li>Centrifugation</li>
        <li>Separating funnel</li>
        <li>Magnetic separation</li>
        <li>Precipitation</li>
      </ul>

      <h2 className={classes.secondaryTag}>Let’s discuss some of the separation techniques</h2>

      <p>
        <u>Using a separating funnel:</u>
      </p>

      <p>
        A separating funnel is used for the separation of components of a
        mixture between two immiscible liquid phases. One phase is the aqueous
        phase and the other phase is an organic solvent. This separation is
        based on the differences in the densities of the liquids. The liquid
        having more density forms the lower layer and the liquid having less
        density forms the upper layer.
      </p>

      <p>Applications: &nbsp;</p>

      <ul>
        <li>To separate a mixture of oil and water.</li>
        <li>To separate a mixture of kerosene oil and water.</li>
      </ul>

      <p>
        <u>Chromatography:</u>
      </p>

      <p>
        Chromatography is a separation technique used to separate the different
        components in a liquid mixture. It was introduced by a Russian Scientist
        Michael Tswett.{' '}
        <strong>
          Chromatography involves the sample being dissolved in a particular
          solvent called mobile phase
        </strong>
        . The mobile phase may be a gas or liquid. The mobile phase is then
        passed through another phase called stationary phase. The stationary
        phase may be a solid packed in a glass plate or a piece of
        chromatography paper.
      </p>

      <p>
        The various components of the mixture travel at different speeds,
        causing them to separate. There are different types of chromatographic
        techniques such as column chromatography, TLC, paper chromatography, and
        gas chromatography.
      </p>

      <p>
        Paper chromatography is one of the important chromatographic methods.
        Paper chromatography uses paper as the stationary phase and a liquid
        solvent as the mobile phase. In paper chromatography, the sample is
        placed on a spot on the paper and the paper is carefully dipped into a
        solvent. The solvent rises up the paper due to capillary action and the
        components of the mixture rise up at different rates and thus are
        separated from one another.
      </p>

      <p>
        <img
          alt=""
          src={MixtureTechniquesThe1}
        />
      </p>

      <p>Applications: &nbsp;</p>

      <ul>
        <li>To separate colors in a dye.</li>
        <li>To separate pigments from natural colors.</li>
        <li>To separate drugs from blood.</li>
      </ul>

      <p>
        <u>Centrifugation:</u>
      </p>

      <p>
        Sometimes the solid particles in a liquid are very small and can pass
        through a filter paper. For such particles, the filtration technique
        cannot be used for separation. Such mixtures are separated by
        centrifugation. So,{' '}
        <strong>
          centrifugation is the process of separation of insoluble materials
          from a liquid where normal filtration does not work well.
        </strong>{' '}
        The centrifugation is based on the size, shape, and density of the
        particles, viscosity of the medium, and the speed of rotation. The
        principle is that the denser particles are forced to the bottom and the
        lighter particles stay at the top when spun rapidly.
      </p>

      <p>
        The apparatus used for centrifugation is called a centrifuge. The
        centrifuge consists of a centrifuge tube holder called rotor. The rotor
        holds balanced centrifugal tubes of equal amounts of the solid-liquid
        mixture. On rapid rotation of the rotor, the centrifuge tubes rotate
        horizontally and due to the centrifugal force, the denser insoluble
        particles separate from the liquid. When the rotation stops, the solid
        particles end up at the bottom of the centrifuge tube with liquid at the
        top.
      </p>

      <p>
        <img alt="" src={MixtureTechniquesThe2} />
      </p>

      <p>Applications:&nbsp;</p>

      <ul>
        <li>Used in diagnostic laboratories for blood and urine tests.</li>
        <li>Used in dairies and home to separate butter from cream.</li>
        <li>Used in washing machines to squeeze water from wet clothes.</li>
      </ul>

      <p>
        <u>Simple distillation</u>:
      </p>

      <p>
        Simple distillation is a method used for the separation of components of
        a mixture containing two miscible liquids that boil without
        decomposition and have sufficient difference in their boiling points.
      </p>

      <p>
        The distillation process involves heating a liquid to its boiling
        points, and transferring the vapors into the cold portion of the
        apparatus, then condensing the vapors and collecting the condensed
        liquid in a container. In this process, when the temperature of a liquid
        rises, the vapor pressure of the liquid increases. When the vapor
        pressure of the liquid and the atmospheric pressure reach the same
        level, the liquid passes into its vapor state. The vapors pass over the
        heated portion of the apparatus until they come into contact with the
        cold surface of the water-cooled condenser. When the vapor cools, it
        condenses and passes down the condenser and is collected into a receiver
        through the vacuum adapter.
      </p>

      <p>
        <img
          alt=""
          src={MixtureTechniquesThe3}
        />
      </p>

      <p>&nbsp;Applications: &nbsp;</p>

      <ul>
        <li>Separation of acetone and water.</li>
        <li>Distillation of alcohol.</li>
      </ul>

      <p>
        <u>Fractional distillation:</u>
      </p>

      <p>
        Fractional distillation is used for the separation of a mixture of two
        or more miscible liquids for which the difference in boiling points is
        less than 25K. The apparatus for fractional distillation is similar to
        that of simple distillation, except that a fractionating column is
        fitted in between the distillation flask and the condenser.
      </p>

      <p>
        A simple fractionating column is a tube packed with glass beads. The
        beads provide surface for the vapors to cool and condense repeatedly.
        When vapors of a mixture are passed through the fractionating column,
        because of the repeated condensation and evaporation, the vapors of the
        liquid with the lower boiling point first pass out of the fractionating
        column, condense and are collected in the receiver flask. The other
        liquid, with a slightly higher boiling point, can be collected in
        similar fashion in another receiver flask.
      </p>

      <p>
        <img
          alt=""
          src={MixtureTechniquesThe4}
        />
      </p>

      <p>Applications:</p>

      <ul>
        <li>Separation of different fractions from petroleum products.</li>
        <li>Separation of a mixture of methanol and ethanol.</li>
      </ul>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol start="1" type="1">
        <li>
          Student understands the following terms: solvent extraction,
          chromatography, RF , centrifugation, simple&nbsp; distillation,
          fractional distillation, etc.
        </li>
        <li>
          Student acquires skills to perform experiments using the following
          techniques in the chemistry lab:
          <ul type="disc">
            <li>Solvent extraction using separating funnel</li>
            <li>Paper Chromatography</li>
            <li>Centrifuge machine</li>
            <li>Simple distillation &amp; fractional distillation</li>
          </ul>
        </li>
        <li>
          Student can identify the components in the mixture based on the
          knowledge of Rf value, boiling point, density, etc.
        </li>
        <li>
          Student is able to select &amp; design the&nbsp; above techniques
          based on the&nbsp; chemical and physical properties&nbsp; of the
          components in the mixture.
        </li>
        <li>
          Students&nbsp; acquire the skill&nbsp; to arrange the requirements for
          each technique through the animations, simulators and videos.
        </li>
        <li>
          Students will be able to select and perform suitable separation
          techniques based on the available information about the nature of the
          components in the mixture.
        </li>
      </ol>

      <p>Let’s try out these separation techniques……</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Separation of Mixtures Using Different
          Techniques. Retrieved 3 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=96&cnt=1
        </Typography>
      </div>
    </div>
  );
}
