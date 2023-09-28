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
import OsmosisImg from '../../../../../../../../../assets/Images/Subjects/Biology/Osmosis1.jpg';
import OsmosisImg2 from '../../../../../../../../../assets/Images/Subjects/Biology/Osmosis2.jpg';

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
        <h1 className={classes.headTag}>Objective</h1>

        <p>Our objective is that to study osmosis using a potato osmometer.</p>

        <h1 className={classes.headTag}>Theory</h1>

        <h2 className={classes.secondaryTag}>What is Osmosis?</h2>

        <p>
          Osmosis is the process in which solvent molecules moves through a
          semi-permeable membrane from a region of higher concentration to a
          region of lower concentration until the amount of fluid is equalised
          on both sides of the semipermeable membrane.&nbsp;&nbsp;
        </p>

        <p>
          The fluid that passes through the semipermeable membrane is known as
          the solvent, while the dissolved substance in the fluid is known as
          the solute.&nbsp; The mixture of solvent and solute makes up a
          solution.
        </p>

        <p>
          <img alt="" src={OsmosisImg} />
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>Cause for Osmosis</h2>

        <p>
          Osmosis occurs due to the free energy of the solvent molecule in two
          regions. Pure water or solvent has more free energy compared to that
          present in a solution. Therefore during osmosis, solvent or water
          moves through the semipermeable membrane from a region of its high
          free energy to a region of its low free energy.
        </p>

        <h2 className={classes.secondaryTag}>Importance of Osmosis</h2>

        <p>
          Osmosis plays a critical role in plant and animal cells.&nbsp; It
          helps in the distribution of nutrients and in the release of waste
          products. The living cells of both plant and animals are surrounded by
          a semipermeable membrane known as the cell membrane. The membrane
          forms a selective barrier between the cell and its environment and
          does not allow toxic substances from the surroundings to enter into
          the cell. The selective permeability allows the cell to regulate the
          flow of necessary substances into and out of the cell. In plants
          osmosis is also responsible for absorbing water and minerals from the
          soil by using the semipermeable membrane of the root.
        </p>

        <h2 className={classes.secondaryTag}>Types of Solutions</h2>

        <h3>Hypotonic Solution</h3>

        <p>These are solutions with low solute levels.</p>

        <h3>Hypertonic Solution</h3>

        <p>Solutions with high solute levels are known as hypertonic.</p>

        <h3>Isotonic Solution</h3>

        <p>
          If both solutions have the same amount of solute concentration they
          are then known as isotonic solution.
        </p>

        <h2 className={classes.secondaryTag}>
          Occurence of Osmosis in Different Solution Types
        </h2>

        <h3>Hypotonic Solution</h3>

        <p>
          If we place living cells in a hypotonic solution the water moves into
          the cell because of the higher concentration of water than in the
          cell.&nbsp; The cell then swells to become turgid.
        </p>

        <h3>Hypertonic Solution</h3>

        <p>
          If we place living cells in a hypertonic solution the water moves out
          of the cell because of the lower concentration of water than the cell.
          The cell then shrinks and becomes plamolyzed.
        </p>

        <h3>Isotonic Solution</h3>

        <p>
          If we place living cells in an isotonic solution, it won’t show any
          change because of the equal concentration of water on either side. The
          cell remains as it is.&nbsp;
        </p>

        <p>
          <img alt="" src={OsmosisImg2} />
        </p>

        <p>
          The phonomenon of osmosis can be demonstrated using an osmometer, a
          device that shows the occurrence of osmosis.
        </p>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <ul>
          <li>Students understand the concept of osmosis.</li>
          <li>Students understand the cause for osmosis.</li>
          <li>
            Students understand the importance of osmosis in plant and animal
            cells.
          </li>
          <li>
            Students will be able to do the experiment more accurately in the
            real lab once they understand the steps through the animation and
            simulation.
          </li>
        </ul>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2014). Study of Osmosis. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=182&cnt=2
        </Typography>
      </div>
    </div>
  );
}
