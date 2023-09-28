import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import LeafThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Leaf1/leaf-the1.gif';
import LeafThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Leaf1/leaf-the2.gif';


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
        Our objective is to prepare a temporary mount of a leaf peel to show
        stomata.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        Stoma (plural stomata), a word derived from Greek which means ‘mouth’,
        is a pore found in the epidermis of leaves, stems and all other plant
        parts found above the ground. Stomata are thus named because they permit
        the exchange of gases between the atmosphere and the inside of the leaf.
      </p>

      <h2 className={classes.secondaryTag}>Structure of Stomata</h2>

      <p>
        The size and shape of stomata vary in different plants. The structure of
        the stomata consists of a kidney shaped epidermal cell with an opening
        in the centre known as the pore. The stomata are bordered by a pair of
        specialised parenchyma cells known as the guard cells that are
        responsible for regulating the size of its opening, thus saving the
        plant from water loss. When fully stretched, the guard cells expand and
        thereby open the stomata. When the guard cells lose water, they shrink
        and the stomata will close. Guard cells also have large vacuoles. The
        cells that surround the guard cells are known as subsidiary or accessory
        cells. The guard cells in dicot plants are kidney shaped and dumbbell
        shaped in monocots.
      </p>

      <p>
        <img alt="" src={LeafThe1} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>Position of Stomata</h2>

      <p>
        Although stomata are found on the epidermis of leaves, the exact
        positioning is different from plant to plant. Stomata are found on
        either both sides or on just one side of the leaf. When the stomata are
        present on both sides of the leaf, they are called amphistomatic;
        epistomatic, if present on the upper side; and hypostomatic, if present
        on the lower side.
      </p>

      <p>
        The distribution of stomata varies in different plants. There are more
        stomata on plant surfaces in conditions like lower atmospheric carbon
        dioxide concentrations, moist environments and higher light. In dicot
        plants the number of stomata is greater on the lower surface than on the
        upper surface of the leaf. On the other hand, monocot plants have the
        same number of stomata on both surfaces of the leaf. In the case of
        floating plants, stomata is found only on the upper epidermis.
      </p>

      <h2 className={classes.secondaryTag}>Functions of Stomata</h2>

      <p>
        The major function of stomata is the exchange of gases by taking carbon
        dioxide from the atmosphere and giving out oxygen that is used by human
        beings and animals.&nbsp; They help in photosynthesis and transpiration.
      </p>

      <h3 className={classes.secondaryTag}>Photosynthesis</h3>

      <p>
        Photosynthesis is a process used by plants to manufacture food with the
        help of sunlight, carbon dioxide and water. It is through the stomata
        that the plant takes carbon dioxide from the atmosphere. The water
        molecule is broken down into hydrogen and oxygen, and it is through the
        stomata that the oxygen is then released as a by-product in the
        atmosphere. Stomata are the medium of gaseous exchange and cellular
        respiration in plants.
      </p>

      <p>
        <img alt="" src={LeafThe2} />
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>Transpiration</h3>

      <p>
        Transpiration is a process of evaporation of water from the surface of
        the plant. This keeps the plant cool and transfers minerals and other
        materials to different parts of the plant. As the plant takes water from
        the soil, the openings absorb other minerals. For a plant to take water
        from the soil, water needs to evaporate from the surface of the plant.
        Once this happens, pressure is developed that forces the roots to absorb
        water from the soil and transfer it to the tips of the plant. It is
        through the stomata that the major work of evaporation of water is done.
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol>
        <li>Students understand the structure and function of Stomata.</li>
        <li>
          Students understand the processes of photosynthesis and transpiration.
        </li>
        <li>
          Students will be able to perform the experiment more accurately in the
          real lab having observed the{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=137&amp;cnt=248">
            animation
          </a>{' '}
          and{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=137&amp;cnt=4">
            simulation
          </a>
          .&nbsp;
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Demonstration of Stomata on a Leaf Peel.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=137&cnt=1
        </Typography>
      </div>
    </div>
  );
}
