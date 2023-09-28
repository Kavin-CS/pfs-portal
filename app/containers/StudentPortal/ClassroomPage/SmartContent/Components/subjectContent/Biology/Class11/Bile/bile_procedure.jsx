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

import BilePro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Bile1/bile-pro1.jpg';
import BilePro2 from '../../../../../../../../../assets/Images/Subjects/Biology/Bile1/bile-pro2.jpg';

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
      <h1 className={classes.headTag}>Smith’s Test</h1>

      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          alt=""
          src={BilePro1}
        />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <ul>
        <li>
          Take 1 ml Smith’s reagent in a measuring cylinder from the reagent
          bottle.
        </li>
        <li>
          Pour the Smith’s reagent from the measuring cylinder into a test tube.
        </li>
        <li>Using a dropper, take some urine from the urine sample bottle.</li>
        <li>
          Tilt the test tube and pour the urine along the side of the test tube.
        </li>
        <li>
          A green ring is formed at the junction of two layers indicating the
          presence of bile salt in urine.
        </li>
      </ul>

      <h1 className={classes.headTag}>Pettenkofer’s Test</h1>

      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          alt=""
          src={BilePro2}
        />
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <ul>
        <li>
          Take 2 ml urine in a measuring cylinder from the urine sample bottle.
        </li>
        <li>Pour the urine from the measuring cylinder into a test tube..</li>
        <li>Take some sucrose using a spatula.</li>
        <li>Put the sucrose into the test tube containing urine.</li>
        <li>
          Take 2 ml H<sub>2</sub>SO<sub>4</sub> in a measuring cylinder from the
          reagent bottle.
        </li>
        <li>
          Tilt the test tube and pour the H<sub>2</sub>SO<sub>4</sub> along the
          side of the test tube.
        </li>
        <li>
          Appearance of red colour indicates the presence of bile salt in urine.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the Online Labs)
      </h1>

      <p>
        You can select the type of test from the ‘Select type of test’ drop down
        list.
      </p>

      <h1 className={classes.headTag}>Smith’s Test</h1>

      <ul>
        <li>
          Drag the dropper containing the urine sample towards the test tube to
          pour the sample slowly along the side of the tube.
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Pettenkofer’s Test</h1>

      <ul>
        <li>
          Drag the spatula containing sucrose towards the test tube to put the
          sucrose into it.
        </li>
        <li>
          Drag the dropper containing the Conc. H2SO4 towards the test tube to
          pour the sample into it.
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Bile salt in Urine.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=211&cnt=2
        </Typography>
      </div>
    </div>
  );
}
