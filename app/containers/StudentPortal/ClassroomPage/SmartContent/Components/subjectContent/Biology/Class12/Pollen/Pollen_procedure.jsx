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
import PollyProcedure from '../../../../../../../../../assets/Images/Subjects/Biology/PolllyProcedure.jpg';

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
    <div className={classes.divContent}>
      <div class="divContent">
        <h1 className={classes.headTag}>Materials Required</h1>

        <p>
          <img
            alt=""
            style={{ width: '750px', height: '550px' }}

            src={PollyProcedure}
          />
        </p>

        <h1 className={classes.headTag}>Real Lab Procedure</h1>

        <ul>
          <li>
            Prepare the pollen germination medium by dissolving 10 grams
            sucrose, 10 milligrams boric acid, 30 milligrams magnesium sulphate
            and 20 milligrams potassium nitrate in 100ml of distilled water.
          </li>
          <li>Using a glass rod, stir the solution to mix it well.</li>
          <li>
            Using a dropper, take some nutrient solution and put two drops on a
            clean glass slide.
          </li>
          <li>
            Take a mature flower and dust a few pollen grains from its stamen on
            to the drop on the slide.
          </li>
          <li>
            After 5 minutes, place the glass slide on the stage of the compound
            microscope.
          </li>
          <li>
            Observe the slide through the microscope regularly for about half an
            hour.
          </li>
        </ul>

        <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

        <ul>
          <li>
            Click and drag the dropper towards the beaker containing germination
            medium to take the medium.
          </li>
          <li>
            Drag the dropper towards the glass slide to pour a few drops
            germination medium into the glass slide.
          </li>
          <li>
            Drag the flower towards the glass slide to dust the pollen grains.
          </li>
          <li>
            Drag and place the glass slide onto the stage of the compound
            microscope.
          </li>
          <li>
            Click on the eyepiece of the compound microscope to view the pollen
            germination.
          </li>
          <li>
            You can redo the experiment by clicking on the ‘Reset’ button.
          </li>
        </ul>

        <h1 className={classes.headTag}>Observations</h1>

        <p>
          The pollen grain is uninucleate (has one nucleus) in the beginning. At
          the time of liberation, it becomes 2 celled, with a small generative
          cell and a vegetative cell.
        </p>

        <p>
          In the nutrient medium, the pollen grain germinates. The tube cell
          enlarges and comes out of the pollen grain through one of the germ
          pores to form a pollen tube. The tube nucleus descends to the tip of
          the pollen tube. The generative cell also passes into it. It soon
          divides into two male gametes.
        </p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Pollen Germination. Retrieved
          28 February 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=228&cnt=618
        </Typography>
      </div>
    </div>
  );
}
