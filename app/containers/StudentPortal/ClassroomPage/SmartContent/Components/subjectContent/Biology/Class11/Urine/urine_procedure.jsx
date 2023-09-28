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
      <h1 className={classes.headTag}>Benedict's Test</h1>

      <h1 className={classes.headTag}>Materials required:</h1>

      <p>
        Test tube, test tube holder, urine sample, measuring cylinders,
        Benedict’s solution and burner.
      </p>

      <h1 className={classes.headTag}>Procedure:</h1>

      <ul>
        <li>
          Take 2 ml urine sample in a measuring cylinder from the urine sample
          bottle.
        </li>
        <li>Take a test tube and pour the urine sample in it.</li>
        <li>Take 5 ml Benedict’s reagent in a measuring cylinder.</li>
        <li>
          Add Benedict’s reagent to the test tube that contains urine sample.
        </li>
        <li>
          Using a test tube holder, hold the test tube firmly and heat it for 2
          minutes on the burner.
        </li>
        <li>Keep shaking the test tube while heating.</li>
        <li>
          A yellow precipitate appears which indicates the presence of sugar in
          urine.
        </li>
        <li>
          Depending upon the concentration of sugar in the urine, either green,
          yellow, or brick red precipitates are formed.
        </li>
      </ul>

      <h1 className={classes.headTag}>Fehling's test</h1>

      <h1 className={classes.headTag}>Materials required</h1>

      <p>
        Test tube, test tube holder, urine sample, measuring cylinders,
        Fehling’s solution A, Fehling’s solution B and burner.
      </p>

      <h1 className={classes.headTag}>Procedure</h1>

      <ul>
        <li>
          Take 2 ml urine sample in a measuring cylinder from the urine sample
          bottle.
        </li>
        <li>Take a test tube and pour the urine sample in it.</li>
        <li>Take 2 ml Fehling’s solution A in a measuring cylinder.</li>
        <li>
          Add Fehling’s solution A to the test tube that contains urine sample.
        </li>
        <li>Take 2 ml Fehling’s solution B in a measuring cylinder.</li>
        <li>
          Add Fehling’s solution B to the test tube that contains urine sample.
        </li>
        <li>
          Using a test tube holder, hold the test tube firmly and heat it gently
          for 2 minutes on the burner.
        </li>
        <li>Keep shaking the test tube while heating.</li>
        <li>
          A green precipitate appears which indicates the presence of traces of
          sugar in urine.
        </li>
        <li>
          Depending upon the concentration of sugar in the urine, either green,
          yellow or brick red precipitates are formed.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <p>
        You can select the test from the ‘Select type of test’ drop down list.
      </p>

      <h2 className={classes.secondaryTag}>Benedict's Test</h2>

      <ul>
        <li>
          Drag the dropper containing Benedict’s reagent towards the test tube
          to pour the reagent into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Fehling’s Test</h2>

      <ul>
        <li>
          Drag the dropper containing the Fehling’s reagent A towards the test
          tube to pour the reagent into it.
        </li>
        <li>
          Drag the dropper containing the Fehling’s reagent B towards the test
          tube to pour the reagent into it.
        </li>
        <li>Click on the knob of the burner to turn it on.</li>
        <li>Drag the test tube towards the burner to heat it.</li>
        <li>Click on the information icon to see the inference.</li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Sugar in Urine. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=207&cnt=2
        </Typography>
      </div>
    </div>
  );
}
