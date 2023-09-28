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
import MetnailProcedure from '../../../../../../../../../assets/Images/Subjects/Biology/MetanilProcedure.jpg';

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
    // font-family: 'Noto Sans','Noto Sans Malayalam','Noto Sans Telugu', sans-serif;
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
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
          <img alt="" src={MetnailProcedure} />
        </p>

        <h1 className={classes.headTag}>Real Lab Procedure</h1>

        <ul>
          <li>Take a clean test tube from the test tube rack.</li>
          <li>Transfer some dal into this test tube using a spatula.</li>
          <li>Pour some distilled water into this test tube.</li>
          <li>Shake the solution properly to mix the compounds.</li>
          <li>Allow it to stand for 30 minutes.</li>
          <li>
            Draw out concentrated hydrochloric acid from its bottle using a
            dropper.
          </li>
          <li>
            Add a few drops of concentrated hydrochloric acid into the test
            solution.
          </li>
        </ul>

        <h1 className={classes.headTag}>
          Simulator Procedure (as performed through the{' '}
          <a href="http://www.olabs.co.in/" target="_blank">
            Online Labs
          </a>
          )
        </h1>

        <ul>
          <li>
            You can select the food sample by clicking on the corresponding
            icon.
          </li>
          <li>
            Click and drag the distilled water bottle towards the test tube to
            add water to the test tube containing the food sample.
          </li>
          <li>
            Allow the test tube containing sample to stand till the needle of
            the clock stops moving.
          </li>
          <li>
            Click and drag the dropper towards the test tube to add conc.HCl to
            the test tube.
          </li>
          <li>
            Based on your observation, indicate the presence of Metanil yellow
            in the selected sample by clicking on the ‘Yes’ or 'No' radio
            button.
          </li>
          <li>
            You can redo the experiment by clicking on the ‘Reset’ button.
          </li>
        </ul>

        <p>
          <strong>Note: </strong>If the solution turns pink colour, it indicates
          the presence of adulterant Metanil yellow in the test material.
        </p>

        <h1 className={classes.headTag}>Observation</h1>

        <p>
          On adding conc. Hydrochloric acid to the sample, it turns pink in
          colour.
        </p>

        <h1 className={classes.headTag}>Inference</h1>

        <p>
          The pink colour indicates the presence of the adulterant Metanil
          yellow in the test sample.
        </p>

        <h1 className={classes.headTag}>Precaution</h1>

        <p>Use conc. Hydrochloric acid judiciously.</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag} className={classes.header}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Detection of Adulterant in Dal.
          Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=15&sim=122&cnt=270
        </Typography>
      </div>
    </div>
  );
}
