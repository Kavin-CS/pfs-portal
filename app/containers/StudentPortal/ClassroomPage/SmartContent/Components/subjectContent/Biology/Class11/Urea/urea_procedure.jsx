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

import UreaPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Urea1/urea-pro1.jpg';
import UreaPro2 from '../../../../../../../../../assets/Images/Subjects/Biology/Urea1/urea-pro2.jpg';

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
      <h1 className={classes.headTag}>Sodium Hypobromite Test</h1>

      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img alt="" src={UreaPro1} maxWidth="70%;" />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <ul>
        <li>
          Take 2 ml urine sample in a measuring cylinder from the urine sample
          bottle.
        </li>
        <li>Take a test tube and pour the urine sample into the test tube.</li>
        <li>Using a dropper, take sodium hypobromite solution.</li>
        <li>
          Add few drops of sodium hypobromide solution to the urine sample.
        </li>
        <li>
          Brisk effervescence of nitrogen appears in the test tube which
          indicates presence of urea in the urine.
        </li>
      </ul>

      <h1 className={classes.headTag}>Urease test</h1>

      <h1 className={classes.headTag}>Materials required:</h1>

      <p>
        <img alt="" src={UreaPro2} width="700px;" />
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <ul>
        <li>
          Take 5 ml urine sample in a measuring cylinder from the urine sample
          bottle.
        </li>
        <li>Take a test tube and pour the urine sample into the test tube.</li>
        <li>Using a dropper, take some phenol red indicator.</li>
        <li>Add 4-5 drops of phenol red indicator to the test tube.</li>
        <li>Use a fresh dropper to take few drops of 2% Na2CO3.</li>
        <li>
          Add Na2CO3 solution drop by drop until a pink colour develops in the
          test tube.
        </li>
        <li>Take few drops of 1% acetic acid using a fresh dropper.</li>
        <li>
          Add 1% acetic acid to the test tube drop by drop until the pink colour
          disappears.
        </li>
        <li>Using a spatula, take some urease powder from the watch glass.</li>
        <li>Add urease powder to the test tube and shake it well.</li>
        <li>
          The pink or red colour appearing in the solution indicates the
          presence of urea in urine.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <p>
        You can select the type of test from the ‘Select type of test’ drop down
        list.
      </p>

      <h2 className={classes.secondaryTag}>Sodium Hypobromite Test</h2>

      <ul>
        <li>
          Drag the dropper containing the sodium hypobromite solution towards
          the test tube to pour the solution into it
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Urease Test</h2>

      <ul>
        <li>
          Drag the dropper containing the Phenol red indicator towards the test
          tube to pour the indicator solution into it
        </li>
        <li>
          Drag the dropper containing the Na2CO3 towards the test tube to pour
          the solution into it
        </li>
        <li>
          Drag the dropper containing the Acetic acid towards the test tube to
          pour the solution into it
        </li>
        <li>
          Drag the spatula containing the urease powder towards the test tube to
          put the powder into it
        </li>
        <li>Drag the test tube to shake.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment by clicking on the ‘Reset’
          button.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Urea in Urine. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=206&cnt=2
        </Typography>
      </div>
    </div>
  );
}
