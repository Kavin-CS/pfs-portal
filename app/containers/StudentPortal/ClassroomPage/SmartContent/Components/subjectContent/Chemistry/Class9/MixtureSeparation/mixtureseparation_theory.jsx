import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import MixtureSeparationThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureSeparation1/mixtureseparation-the1.jpg';
import MixtureSeparationThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureSeparation1/mixtureseparation-the2.jpg';
import MixtureSeparationThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureSeparation1/mixtureseparation-the3.jpg';
import MixtureSeparationThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureSeparation1/mixtureseparation-the4.jpg';
import MixtureSeparationThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/MixtureSeparation1/mixtureseparation-the5.png';

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
        To separate the components of a mixture of ammonium chloride, salt and
        sand.
      </p>

      <h1 className={classes.headTag}>The Principle:</h1>

      <p>
        The variety of things with different sizes and shapes in our universe is
        made up of a material called matter.
      </p>

      <h2 className={classes.secondaryTag}>What is Matter?</h2>

      <p>
        <strong>
          Commonly,&nbsp; “matter” is defined as anything that has a mass and a
          volume.
        </strong>{' '}
        Matter is made up of small particles. The air, food, plants, animals,
        stars and everything is matter.
        <strong>
          {' '}
          Matter commonly exists in three different states - solid, liquid and
          gas.{' '}
        </strong>
        These states of matter arise due to the variation in the characteristics
        of the particles of matter.
      </p>

      <h2 className={classes.secondaryTag}>What is a solid state?</h2>

      <p>
        <img alt="" src={MixtureSeparationThe1} />
      </p>

      <p>
        The branch of chemistry that deals with the synthesis, structure and
        properties of solid phase materials is called the Solid-state chemistry.
        It is also called materials chemistry. Solids have definite shape and
        volume. They are structurally rigid and resist the change of shape or
        volume. They have a tendency to maintain their shape when subjected to
        outside force. Unlike liquid, a solid object does not flow to take on
        the shape of its container. The atoms, molecules or ions which make up a
        solid may be arranged in an orderly repeating pattern (crystalline
        solid) or irregularly (amorphous solid).
      </p>

      <h2 className={classes.secondaryTag}>What is a liquid state?</h2>

      <p>
        <img alt="" src={MixtureSeparationThe2} />
      </p>

      <p>
        Liquids have no definite shape, but have a definite volume. They take up
        the shape of a container in which they are kept. As liquids flow, they
        change shape and they are not rigid. In liquid, particles move freely
        and the space between each particle is greater than that in solid state.
        Pure substances that are liquid under normal conditions include water,
        ethanol, etc. Density of a liquid is usually close to that of a solid,
        and much higher than that of a gas. At a temperature below the boiling
        point, any matter in liquid form will evaporate, and at a temperature
        below the freezing point, a liquid will tend to crystallize, changing to
        its solid form.
      </p>

      <h2 className={classes.secondaryTag}>What is a gaseous state?</h2>

      <p>
        <img alt="" src={MixtureSeparationThe3} />
      </p>

      <p>
        In the gaseous state, particles have no order of arrangement. Also gases
        have no definite shape. In the gaseous state, particles move randomly
        and hit the walls of the vessel and exert pressure on the walls of the
        container. Gases are highly compressible as compared to solids and
        liquids. Due to its high compressibility, large volumes of gas can be
        compressed into a small cylinder and transported easily. The liquefied
        petroleum gas (LPG) cylinder that we get in our home for cooking or the
        oxygen supplied to hospitals in cylinders is compressed gas.
        <br />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Changes in states of a matter</h1>

      <p>
        Matter will change from one state to another at specific conditions of
        temperature and pressure. Following are the interconversions of the
        three states of matter.
      </p>

      <p>
        <img
          alt=""
          src={MixtureSeparationThe4}
        />
      </p>

      <p>&nbsp;</p>

      <ul>
        <li>&nbsp;Fusion and Solidification</li>
        <li>
          The process by which a solid changes to liquid is called fusion and
          the reverse process is called solidification.
        </li>
        <li>Vaporization and Condensation</li>
        <li>
          The process by which liquid changes to vapour is called vaporization
          and the reverse process is called condensation.
        </li>
        <li>Sublimation</li>
        <li>
          Some solids, on heating, directly change into vapour, and vapour on
          cooling changes to solid.
        </li>
      </ul>

      <p>
        The inter-conversion of three states of matter is explained using the
        picture given right.
      </p>

      <h1 className={classes.headTag}>Mixture</h1>

      <p>
        Most of the matter in our surroundings exists as mixtures of two or more
        components. Examples: milk, soil, sea water, etc. A mixture shows the
        properties of its constituent elements. The components of a mixture can
        be separated by physical methods like handpicking, filtration and so on.
        Sometimes special techniques have to be used for the separation of the
        components of a mixture.
      </p>

      <h2 className={classes.secondaryTag}>
        Separation of components from a mixture of sand, ammonium chloride and
        salt
      </h2>

      <p>
        <img
          alt=""
          src={MixtureSeparationThe5}
        />
      </p>

      <h3 className={classes.secondaryTag}>Sublimation</h3>

      <p>
        Sublimation is the process of transition of a substance from the solid
        to the gaseous state without passing through the liquid state. To
        separate mixtures that contain a sublimate with volatile component from
        a non-sublimate impurity, the sublimation process is used. Ammonium
        chloride changes directly from solid to gaseous state on heating. The
        gaseous form of ammonium chloride can be cooled easily to get a pure
        solid. Other examples of solids which sublime are camphor, naphthalene,
        anthracene, iodine, etc.
      </p>

      <p>
        The remaining components of the mixture are salt and sand. Salt is
        soluble in water and sand is a non-water soluble substance that can be
        separated by the process of filtration. The insoluble sand remains in
        the filter paper while the filtrate contains the dissolved salt.
      </p>

      <h3 className={classes.secondaryTag}>Evaporation Technique</h3>

      <p>
        Evaporation technique is used to separate salt from the filtrate. Common
        salt does not decompose during evaporation. As the water evaporates,
        fewer and fewer water molecules are present to keep the salt particles
        apart. The salt therefore recrystallizes and can be collected.
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol start="1" type="1">
        <li>
          Students understand the terms mixture, sublimation, filteration and
          evaporation.
        </li>
        <li>
          Students acquire skilsl to perform the separation of components of a
          mixture using the following technique:
          <ul type="disc">
            <li>Sublimation</li>
            <li>Filtration</li>
            <li>Evaporation</li>
          </ul>
        </li>
        <li>
          Student analyzes the method suitable to separate ammonium chloride,
          salt and sand from their mixture.
        </li>
        <li>
          Students get strong knowledge about different physical states of the
          components of the given mixture.
        </li>
        <li>
          Based on the knowledge of solubility, sublimation, etc., the students
          are able to design suitable separation techniques for the components
          of the mixture given to them.
        </li>
        <li>
          Students visualize the way these separations are done in the
          experiment which will help them to arrange the things properly in the
          lab.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Separation of Components of a Mixture.
          Retrieved 1 April 2021, from
          amrita.olabs.edu.in/?sub=73&brch=2&sim=39&cnt=1
        </Typography>
      </div>
    </div>
  );
}
