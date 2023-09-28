import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PaperChromThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/PaperChrom1/paperchrom-the1.jpg';
import PaperChromThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/PaperChrom1/paperchrom-the2.jpg';

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
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        Our objective is to separate and study plant pigments by paper
        chromatography.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        Before going into detail, let’s understand the role of pigments in
        plants.
      </p>

      <p>
        Photosynthetic plants convert light energy from the sun to chemical food
        energy.&nbsp; During photosynthesis, molecules referred to as pigments
        are used to capture light energy.&nbsp; Pigments are chemical compounds
        which reflect only certain wavelengths of visible light.&nbsp; Plant
        leaves contain four primary pigments: chlorophyll a (dark green),
        chlorophyll b (yellowish-green), xanthophylls (yellow) and carotenoids
        (orange).&nbsp;
      </p>

      <p>
        To separate and visualize the four primary pigments of green plants, we
        can use a simple technique called chromatography.
      </p>

      <h1 className={classes.headTag}>What is Chromatography?</h1>

      <p>
        Chromatography is a technique used to separate molecules on the basis of
        differences in size, shape, mass, charge, solubility and adsorption
        properties. The term chromatography is derived from Greek words
        Chroma-colour and Graphe-write. There are many types of chromatography:
        paper chromatography, column chromatography, thin layer chromatography
        and partition chromatography. These techniques involve the interaction
        between three components: the mixture to be separated, a solid phase and
        a solvent.
      </p>

      <h1 className={classes.headTag}>How does paper chromatography work?</h1>

      <p>
        In paper chromatography, the mixture is spotted onto the paper, dried
        and the solvent is allowed to flow along the sheet by capillary
        attraction.&nbsp; As the solvent slowly moves through the paper, the
        different compounds of the mixture separate into different coloured
        spots. The paper is dried and the position of different compounds is
        visualized. The principle behind the paper chromatography is that the
        most soluble substances move further on the filter paper than the least
        soluble substances.&nbsp;Different plant pigments can be separated by
        using the technique of paper chromatography.
      </p>

      <p>
        <img alt="" src={PaperChromThe1} />
      </p>

      <h1 className={classes.headTag}>What is Retention Factor or Rf value?</h1>

      <p>
        Retention factor or R_f value is applied in chromatography to make the
        technique more scientific than a mere analysis. The retention factor or
        Rf is defined as the distance travelled by the compound divided by the
        distance traveled by the solvent.
        <br />
        R_f=(Distance travelled by the compound)/(Distance travelled by the
        solvent)
      </p>

      <p>
        <img
          alt=""
          src={PaperChromThe2}
          maxWidth="52%;"
        />
      </p>

      <p>Diagrammatic example that demonstrates Rf value:</p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students will understand the principle behind chromatography
          techniques.
        </li>
        <li>
          Students will learn about different types of pigments occurring in a
          plant leaves.
        </li>
        <li>Students will learn how to calculate the Retention factor.</li>
        <li>
          Students will be able to do the experiment more accurately in the real
          lab once they understand the steps through the animation and
          simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Paper Chromatography. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=124&cnt=1
        </Typography>
      </div>
    </div>
  );
}
