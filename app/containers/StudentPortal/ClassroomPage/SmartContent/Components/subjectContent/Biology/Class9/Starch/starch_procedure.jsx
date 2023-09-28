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

import StarchPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Starch1/starch-pro1.jpg';

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
          src={StarchPro1}
        />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>Place a potato on a tile.</li>
        <li>Grind or chop the potato into small pieces, using a knife.</li>
        <li>Using a spatula transfer these pieces of potato into a beaker.</li>
        <li>Pour some distilled water into the beaker.</li>
        <li>Place the beaker containing the mixture over a hot plate.</li>
        <li>
          Heat the mixture for 5 minutes while continuously stirring it with a
          glass rod.
        </li>
        <li>Take another beaker and cover its mouth with a muslin cloth.</li>
        <li>
          Secure the muslin cloth around the mouth of the beaker by tying it
          with a thread.
        </li>
        <li>Filter the solution through this beaker.</li>
        <li>
          Now take a clean test tube and pour some of the filtrate into it.
        </li>
        <li>Take a few drops of iodine solution using a dropper.</li>
        <li>Add a couple of these drops into the test solution.</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in">Online Labs</a>)
      </h1>

      <ul>
        <li>
          You can select the type of test from the ‘Select type of the test’
          drop down list.
        </li>
        <li>
          To select a particular food sample, click on the corresponding icon.
        </li>
        <li>
          Click and drag the dropper towards the food sample to pour a few drops
          of Iodine solution into the test sample.
        </li>
        <li>Then drag the dropper back to place it in the Iodine bottle.</li>
        <li>
          Based on your observation, you can indicate the presence of starch in
          the selected sample by clicking on the 'Yes' or 'No' radio button.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note</strong>
        <strong>:</strong> If the solution turns to blue-black colour it
        indicates the presence of starch in the solution.
      </p>

      <h1 className={classes.headTag}>Observation</h1>

      <p>The test solution turns blue-black in colour.</p>

      <h1>Inference</h1>

      <p>
        Iodine reacts with starch to form starch/iodine complex which has a
        blue-black colour. The appearance of blue-black colour confirms the
        presence of starch in the given food sample.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>
          While using iodine solution, be careful, as it is toxic if swallowed
          or inhaled.
        </li>
        <li>
          While heating, care should be taken that the solution does not splash
          on your face.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Starch in Food Samples.
          Retrieved 7 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=121&cnt=2
        </Typography>
      </div>
    </div>
  );
}
