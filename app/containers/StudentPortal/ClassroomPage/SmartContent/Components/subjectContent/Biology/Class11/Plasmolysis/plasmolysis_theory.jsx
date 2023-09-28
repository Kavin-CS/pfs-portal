import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PlasmolysisThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Plasmolysis1/plasmolysis-the1.jpg';


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
        To demonstrate plasmolysis in peels of Rhoeo plant in hypotonic and
        hypertonic solutions using salt solution.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is plasmolysis?</h2>

      <p>
        Plasmolysis is the process of shrinkage or contraction of the protoplasm
        of a plant cell as a result of loss of water from the cell. Plasmolysis
        is one of the results of osmosis and occurs very rarely in nature, but
        it happens in some extreme conditions. We can induce plasmolysis in the
        laboratory by immersing living cell in a strong salt solution or sugar
        solution to lose water from the cell. Normally people use Rheo or
        Tradescantia plant epidermal cell for experiment because they have
        coloured cell sap which can be clearly visible.
      </p>

      <h2 className={classes.secondaryTag}>Let’s see how water passes through cell membranes</h2>

      <p>
        The cell membrane is a semipermeable membrane that separates the
        interior of all cells from the surrounding environment. The
        semipermeable membrane allows some particles, ions, or water molecules
        across the membrane, but blocks others. Water molecules constantly move
        inside and outside the cell across cell membranes. This free flow of
        water has the very important consequence of enabling cells to absorb
        water.
      </p>

      <h2 className={classes.secondaryTag}>Plasmolysis and deplasmolysis</h2>

      <p>
        When a plant cell is immersed in concentrated salt solution (hypertonic
        solution), water from the cell sap moves out due to exosmosis. Exosmosis
        is the passage of water from higher water concentration to lower water
        concentration through a semipermeable membrane.
      </p>

      <p>
        When a plant cell is placed in concentrated salt solution, water
        concentration inside the cell is greater than that which is outside the
        cell. Therefore, water moves through the cell membrane into the
        surrounding medium. Ultimately the protoplasm separate from the cell
        wall and assumes spherical shape. It is called plasmolysis.
      </p>

      <p>
        When a plasmolysed cell is placed in a hypotonic solution, (i.e., the
        solution having solute concentration lower than the cell sap), the water
        moves into the cell because of the higher concentration of water outside
        the cell than in the cell.&nbsp; The cell then swells to become
        turgid.&nbsp; It is called deplasmolysis.
      </p>

      <p>
        If we place living cells in isotonic solution (i.e., both solutions have
        the same amount of solute concentration), there is no net flow of water
        towards the inside or outside. Here, the water moves in and out of the
        cell and is in equilibrium, so the cells are said to be flaccid.
      </p>

      <p>
        <img
          alt=""
          src={PlasmolysisThe1}
          maxWidth="65%;"
        />
      </p>

      <p>
        <strong>
          Demonstration of plasmolysis and deplasmolysis in peels of the Rheo
          plant.
        </strong>
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ul>
        <li>
          Students understand the concepts of plasmolysis and deplasmolysis.
        </li>
        <li>Students understand the cause for plasmolysis.</li>
        <li>
          Students will be able to do the experiment more accurately in the real
          lab once they understand the steps through the animation and
          simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Study of Plasmolysis. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=199&cnt=1
        </Typography>
      </div>
    </div>
  );
}
