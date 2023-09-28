import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ocontent.jpg';

import Onion1 from '../../../../../../../../../assets/Images/Subjects/Biology/Onion1.gif';
import Onion2 from '../../../../../../../../../assets/Images/Subjects/Biology/Onion2.gif';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          Our aim is to prepare stained temporary mounts of onion peel and human
          cheek cells and to record the observations.
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <p>
          Before exploring the details of cell structure, let's understand the
          differences in the structure of an onion cell and a human cheek cell.
        </p>

        <h2 className={classes.secondaryTag}>Onion Cell</h2>

        <p>
          An onion is a <strong>multicellular </strong>(consisting of many
          cells) plant organism.
          <strong>
            As in all plant cells, the cell of an onion peel consists of a cell
            wall, cell membrane, cytoplasm, nucleus and a large vacuole.{' '}
          </strong>
          The nucleus is present at the periphery of the cytoplasm. The vacuole
          is prominent and present at the centre of the cell. It is surrounded
          by cytoplasm. The presence of a cell wall and a large vacuole are
          indicators that help identify plant cells, such as seen in the onion
          peel.
        </p>

        <h2 className={classes.secondaryTag}>Human Cheek Cell</h2>

        <p>
          As in all animal cells, the cells of the human cheek do not possess a
          cell wall.&nbsp;A cell membrane that is semi-permeable surrounds the
          cytoplasm. Unlike plant cells, the cytoplasm in an animal cell is
          denser, granular and occupies a larger space. The vacuole in an an
          animal cell is smaller in size, or absent. The nucleus is present at
          the centre of the cytoplasm.The absence of a cell wall and a prominent
          vacuole are indicators that help identify animal cells, such as cells
          seen in the human cheek.
        </p>

        <p>
          <img alt="" src={Onion1} />
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>Cell Organelles</h2>

        <p>
          Have you ever wondered what the inside of a cell looks like? If you
          think about the rooms in our homes, the inside of any animal or plant
          cell has many similar
          <strong> room-like structures called organelles</strong>. Here are
          some names and descriptions of organelles and other parts commonly
          found in cells.
        </p>

        <p>
          <img alt="" src={Onion2} />
        </p>

        <h3>Cell Wall: Protective Coat in Plant Cells</h3>

        <p>
          The presence of a cell wall is what provides the most significant
          difference between plant and animal cells, as it is present only in
          plant cells and covers the cell membrane.The cell wall is rigid and is
          composed of cellulose fibre, polysaccharides, and proteins. Despite
          the rigidity of the cell wall, chemical signals and cellular
          excretions are allowed to pass between cells.
        </p>

        <h3>Cell Membrane: Protective Coat in Animal Cells</h3>

        <p>
          The cell membrane is found in both plants and animals, and it is the
          outer most layer in the animal cell, that separates the contents of
          the cell from the outside world. It consists of both lipids and
          proteins and is{' '}
          <strong>
            selectively permeable, which means it permits only some molecules to
            pass through it.
          </strong>
        </p>

        <h3>Cytoplasm: Cell’s Inner Space</h3>

        <p>
          Cytoplasm is a jelly-like material that is eighty percent water and is
          usually clear in colour. It is also called cytosol. Cytoplasm contains
          all the organelles inside the cell membrane. The cytosol contains
          dissolved nutrients, helps break down waste products, and moves
          material around the cell through a process called{' '}
          <strong>cytoplasmic streaming.</strong>
        </p>

        <h3>Nucleus: The Control Centre</h3>

        <p>
          <strong>
            The nucleus is known as the control centre of the cell
          </strong>
          .It contains the regulatory machinery responsible for all the
          activities inside the cell. It is the largest organelle in the cell
          and{' '}
          <strong>
            it contains the DNA of the cell. DNA contains all the information
            that helps cells live, perform their functions and reproduce.
          </strong>
          The nucleus has a double layered covering called nuclear membrane.
        </p>

        <h3>Vacuoles: Cell’s Storage Space</h3>

        <p>
          <strong>
            A vacuole is a membrane-bound organelle that stores solid and liquid
            contents.
          </strong>
          Vacuoles are found in both animal and plant cells, but are much larger
          in plant cells. Vacuoles are formed by the fusion of multiple membrane
          vesicles and are effectively just larger forms of these. The organelle
          has no basic shape or size; its structure varies according to the
          needs of the cell.
        </p>

        <h2 className={classes.secondaryTag}>
          Similarities and Differences between Plant and Animal Cells
        </h2>

        <p>
          Animal and plant cells have a number of key similarities, but also
          some noted differences. Here are some of the common similarities and
          differences between plant and animal cells.
        </p>

        <table
          align="center"
          border="1"
          cellpadding="1"
          cellspacing="1"
          class="responsive_table"
        >
          <thead>
            <tr>
              <th scope="col">Features</th>
              <th scope="col">Animal Cell</th>
              <th scope="col">Plant Cell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cell Shape</td>
              <td>Round (irregular shape)</td>
              <td>Rectangular (fixed shape)</td>
            </tr>
            <tr>
              <td>Cell Wall</td>
              <td>Absent</td>
              <td>Present and is formed of cellulose</td>
            </tr>
            <tr>
              <td>Cell Membrane</td>
              <td>Present</td>
              <td>Present and is covered by the cell wall</td>
            </tr>
            <tr>
              <td>Nucleus</td>
              <td>Present</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>Vacuole</td>
              <td>One or more small vacuoles</td>
              <td>A large central vacuole taking up 90% of the cell volume</td>
            </tr>
            <tr>
              <td>Plastids</td>
              <td>Present</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>Chloroplast</td>
              <td>Absent&nbsp;</td>
              <td>Present and make their own food&nbsp;</td>
            </tr>
            <tr>
              <td>Endoplasmic Reticulum</td>
              <td>Present</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>Ribosomes</td>
              <td>Present</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>Mitocondria</td>
              <td>Present</td>
              <td>Present</td>
            </tr>
          </tbody>
        </table>

        <h1 className={classes.headTag}>Learning outcomes:</h1>

        <ul>
          <li>
            Students understand the different organelles inside the cell and
            their functions.
          </li>
          <li>
            Students understand difference between animal cells and plant cells.
          </li>
          <li>
            Students acquire skills to do the temporary mounts of cells by
            observing{' '}
            <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=125&amp;cnt=245">
              animation
            </a>{' '}
            and{' '}
            <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=125&amp;cnt=4">
              simulation
            </a>
            .&nbsp;
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2013). Onion and Cheek Cells. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=125&cnt=269 
        </Typography>
      </div>
    </div>
  );
}
