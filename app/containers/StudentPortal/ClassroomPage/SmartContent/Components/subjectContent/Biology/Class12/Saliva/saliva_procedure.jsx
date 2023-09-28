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

import OnionPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Onion1/onion-pro1.jpg';

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
      

      <h1 className={classes.headTag}>
        Effect of Different Temperatures on the Activity of Salivary Amylase on
        Starch
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        Three series of test tubes having iodine solution in each, test tubes,
        ice cubes, water, 15 ml 1% starch solution + 3 ml 1% NaCl, saliva
        solution, droppers, thermometer, Bunsen burner and wire gauze.
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Take beaker containing 15 ml of 1% starch solution + 3 ml of 1% NaCl
          solution.
        </li>
        <li>
          Divide and pour this solution into three test tubes and mark them as
          A, B and C.
        </li>
        <li>
          Maintain the temperature of the beaker containing ice cubes at 5°C.
        </li>
        <li>Take beaker containing ice cubes and keep it on the table.</li>
        <li>
          Take another two beakers containing water and heat over the Bunsen
          burner.
        </li>
        <li>Now transfer experimental tube A into a beaker containing ice.</li>
        <li>
          Transfer the second experimental tube B into water bath set at 37°C
          and third experimental tube C into the beaker maintained at 50°C.
        </li>
        <li>
          Using a dropper, take 1 ml saliva solution and transfer the solution
          into test tube A.
        </li>
        <li>
          Similarly, add 1 ml saliva solution into test tube B and test tube C.
        </li>
        <li>
          Immediately, using a dropper, take few drops from experimental tube A
          and transfer this into first series of test tubes having iodine
          solution.
        </li>
        <li>
          Similarly, using fresh droppers, do the same procedure for test tube B
          and test tube C and transfer the solution into second and third series
          of test tubes having iodine solution.
        </li>
        <li>Note this time as zero minute reading.</li>
        <li>
          After an interval of 2 minutes, again take a few drops from each tube
          and add to the iodine tubes and note the change in colour of iodine.
        </li>
        <li>
          Keep on repeating the experiment at an interval of every 2 minutes
          till colour of iodine does not change.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Results</h2>

      <p>
        It takes less time to reach achromic point at 37°C, as the enzyme is
        maximum active at this temperature, while at higher and lower
        temperatures more time is taken to reach the achromic point.
      </p>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        All enzymes are proteinaceous in nature. At lower temperatures, the
        enzyme salivary amylase is deactivated and at higher temperatures, the
        enzyme is denaturated. Therefore, more time will be taken by enzyme to
        digest the starch at lower and higher temperatures. At 37° C, the enzyme
        is most active, hence, takes less time to digest the starch.
      </p>

      <h1 className={classes.headTag}>
        Effect of Different pH on the Activity of Salivary Amylase on Starch
      </h1>

      <h2 className={classes.secondaryTag}>Materials Required</h2>

      <p>
        Three series of test tubes having iodine solution in each, test tubes,
        pH tablets of 5, 6.8 and 8, beaker containing water with thermometer, 15
        ml 1% starch solution + 3 ml 1% NaCl, saliva solution, droppers, Bunsen
        burner and wire gauze.
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ul>
        <li>
          Take a beaker containing 15 ml of 1% starch solution + 3 ml of 1% NaCl
          solution.
        </li>
        <li>
          Divide and pour this solution into three test tubes and mark them as
          A, B and C.
        </li>
        <li>
          Add pH tablet 5 into test tube A, pH tablet 6.8 into test tube B and
          pH tablet 8 into test tube C.
        </li>
        <li>
          Now transfer experimental tube A, B and C into a beaker containing
          water and a thermometer for recording temperature. Temperature of this
          beaker is to be maintained at 37°C.
        </li>
        <li>
          Using a dropper, take 3 ml saliva solution and add 1 ml of solution to
          each of the three test tubes.
        </li>
        <li>
          Immediately using a dropper, take few drops from experimental tube A
          and transfer this into the first series of test tubes having iodine
          solution.
        </li>
        <li>
          Similarly, do the same procedure for test tube B and test tube C and
          transfer the solution into second and third series of test tubes
          having iodine solution.
        </li>
        <li>Note this time as zero minute reading.</li>
        <li>
          After an interval of 2 minutes, again take a drop from each tube and
          add to the iodine tubes and note the change in colour of iodine.
        </li>
        <li>
          Keep on repeating the experiment at an interval of every 2 minutes
          till colour of iodine does not change.
        </li>
      </ul>

      <h2 className={classes.secondaryTag}>Results</h2>

      <p>
        pH 5 is acidic and pH 8 is alkaline, therefore salivary amylase did not
        act in these tubes. Whereas, the enzyme acted in the tube with pH 6.8
        (i.e., slightly acidic) and digested the starch.
      </p>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <ul>
        <li>
          You can select the type of test from the ‘Select the test:’ drop down
          list (Temperature Test and pH Test).
        </li>
        <li>
          You can select the temperature from the ‘Select the temperature:’ drop
          down list or pH from the ‘Select the pH’ drop down list.
        </li>
        <li>
          Click and drag the dropper from the saliva solution bottle and move it
          into the test tube containing starch solution to drop the saliva
          solution into it.
        </li>
        <li>
          Click and drag the dropper from the stand and move into the solution
          in the test tube containing starch and saliva solution to collect the
          sample.
        </li>
        <li>
          Still holding the dropper, move it towards test tube that contains
          iodine solution to drop the mixture into it.
        </li>
        <li>
          Consider time adding as zero minute reading. Reading will show below
          the test tube.
        </li>
        <li>
          After an interval of time, again take a drop from the solution and
          pour into the next test tube containing iodine solution.
        </li>
        <li>Note the change in colour of iodine.</li>
        <li>
          Keep on repeating the procedure after a regular interval of time till
          the colour of iodine does not change.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <p>
        <strong>Note</strong>: If we add saliva on starch, the salivary amylase
        present in saliva gradually acts on starch and converts it into
        maltose.&nbsp; Starch keeps on giving blue colour with iodine till it is
        completely digested into maltose.&nbsp; At this point, no blue colour is
        formed.&nbsp; This is the end point or achromic point.
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Action of Salivary Amylase on Starch.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=236&cnt=2
        </Typography>
      </div>
    </div>
  );
}
