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
import PlasmolysisPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Plasmolysis1/plasmolysis-pro1.jpg';

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
      <h1 className={classes.headTag}>Materials Required</h1>

      <p>
        <img
          alt=""
          src={PlasmolysisPro1}
          width="90%;"
        />
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <ul>
        <li>Take two glass slides and place them on the table.</li>
        <li>Take a rhoeo leaf from the Petri dish.</li>
        <li>Fold the leaf and tear it along the lower side of the leaf.</li>
        <li>
          Using a forceps, pull out two small segments of thin transparent layer
          from the lower epidermis of the rhoeo leaf.
        </li>
        <li>Place the epidermal peels on both glass slides.</li>
        <li>
          Using a dropper, take some sodium chloride 0.1% solution from the
          beaker.
        </li>
        <li>Put 1 to 2 drops of solution on one slide.</li>
        <li>
          Using another dropper, take sodium chloride 5% solution from the
          beaker.
        </li>
        <li>Put 1 to 2 drops of solution on the next slide.</li>
        <li>Place a cover slip over the peel of both slides using a needle.</li>
        <li>Place the slides one by one under the compound microscope.</li>
        <li>Observe them under the microscope.</li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <ul>
        <li>
          You can select the concentration of NaCl solution using the drop down
          list, ‘Select the concentration of NaCl solution: ’
        </li>
        <li>
          Drag and drop the slide onto the stage of the compound microscope.
        </li>
        <li>
          Click on the eye piece of the compound microscope to view the cells.
        </li>
        <li>
          We can observe a controlled normal cell and a user selected cell.
        </li>
        <li>Click on the start button to start the experiment.</li>
        <li>A timer is shown and you need to wait till the timer stops.</li>
        <li>
          Based on your observation, you can indicate the type of solution used
          for selected sample by clicking on the corresponding check box.
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment anytime by clicking on the ‘Reset’ button.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observation</h1>

      <p>
        After half an hour we can observe that cells in sodium chloride 0.1%
        solution appear turgid, while cells in the sodium chloride 5 % solution
        show plasmolysis.
      </p>

      <h1 className={classes.headTag}>Conclusion</h1>

      <p>
        When plant cells are immersed in sodium chloride 5 % solution or
        concentrated salt solution, water moves through the cell membrane into
        the surrounding medium because the water concentration inside the cell
        is greater than that which is outside the cell. Ultimately the
        protoplasm causes shrinkage and assumes spherical shape. This is called
        plasmolysis. When a plant cell is immersed in sodium chloride 0.1%
        solution or dilute salt solution, the water moves into the cell because
        of the higher concentration of water outside the cell than inside the
        cell.&nbsp; The cell then swells and becomes turgid.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Take the epidermal peel from the lower surface of rhoeo leaf.</li>
        <li>Do not let the peel dry out.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Plasmolysis. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=199&cnt=2
        </Typography>
      </div>
    </div>
  );
}
