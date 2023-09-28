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

import AlbuminPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Albumin1/albumin-pro1.jpg';
import AlbuminPro2 from '../../../../../../../../../assets/Images/Subjects/Biology/Albumin1/albumin-pro2.jpg';

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
      <h1 className={classes.headTag}>Sulphosalicylic Acid Test</h1>

      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          alt=""
          src={AlbuminPro1}
        />
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <ul>
        <li>
          Take 2 ml urine sample in a measuring cylinder from the urine sample
          bottle.
        </li>
        <li>Take a test tube and pour the urine in the test tube.</li>
        <li>Using a dropper, take some sulphosalicylic acid.</li>
        <li>
          Add few drops of sulphosalicylic acid in the test tube containing
          urine. A whitish color appears in the solution.
        </li>
        <li>
          Using a test tube holder, hold the test tube firmly and heat it gently
          upon a burner.
        </li>
        <li>
          A whitish or cloudy turbid solution indicates the presence of albumin
          in the urine sample.
        </li>
      </ul>

      <h1 className={classes.headTag}>Heller’s Test</h1>

      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          alt=""
          src={AlbuminPro2}
        />
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <ul>
        <li>
          Take 5 ml concentrated nitric acid in a measuring cylinder from the
          reagent bottle.
        </li>
        <li>
          Pour the concentrated nitric acid in a test tube from the measuring
          cylinder.
        </li>
        <li>Using a dropper, take some urine from the urine sample bottle.</li>
        <li>
          Now incline the test tube and add sample of urine by means of a
          dropper along the inner side of the test tube so that it forms a layer
          over the nitric acid.
        </li>
        <li>
          The presence of white ring at the junction of two layers indicates the
          presence of albumin in the urine.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <p>
        You can select the type of test from the ‘Select type of test’ drop down
        list.
      </p>

      <h2 className={classes.secondaryTag}>Sulphosalicylic acid Test</h2>

      <ul>
        <li>
          Drag the dropper containing the sulphosalicylic acid towards the test
          tube to pour the solution into it
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Heller’s Test</h2>

      <ul>
        <li>
          Drag the dropper containing the urine sample towards the test tube to
          pour the sample into it
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Albumin in Urine. Retrieved
          6 April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=208&cnt=2
        </Typography>
      </div>
    </div>
  );
}
