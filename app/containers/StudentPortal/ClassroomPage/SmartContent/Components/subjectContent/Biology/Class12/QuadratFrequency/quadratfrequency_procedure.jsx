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

import QuadratFrequencyPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/QuadratFrequency1/quadratfrequency-pro1.jpg';

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
      <h1 className={classes.headTag}>Materials Requires</h1>

      <p>
        <img
          alt=""
          src={QuadratFrequencyPro1}
          width="900px;" height="300px;"
        />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>
          In the selected site of study, hammer the nails firmly in the soil
          without damaging the vegetation.
        </li>
        <li>Fix four nails to make a square.</li>
        <li>
          Tie each end of the nails using a thread, to make a 1 m X 1 m quadrat.
        </li>
        <li>
          Similarly, make nine more quadrats randomly in the site of
          study.&nbsp;&nbsp;&nbsp; &nbsp;
        </li>
        <li>Select the plant species for study of the population frequency.</li>
        <li>
          Observe the presence of species “A” in the first quadrat and mark it
          in the table.
        </li>
        <li>
          Similarly, check for the presence of species “A” in other quadrats
          respectively and record the data in the table.
        </li>
        <li>
          Observe the presence of species “B” in all quadrats and mark it in the
          table.
        </li>
        <li>
          Repeat the same procedure for species C and record the data in the
          table.
        </li>
        <li>
          We can calculate the frequency of plant populations by this equation:
        </li>
        <li>
          Percentage Frequency=(Number of sampling units in which the species
          occurs)/(Total number of sampling units employed for the study)*100
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
        height="199"
        width="513"
      >
        <tbody>
          <tr>
            <td >Plant Species</td>
            <td colspan="10" rowspan="1" >
              Quadrats employed in the study
            </td>
            <td >
              Number of quadrats in which the species is present (N)
            </td>
            <td >Percentage Frequency F=N/Q*100</td>
          </tr>
          <tr>
            <td >&nbsp;</td>
            <td >I</td>
            <td >II</td>
            <td >III</td>
            <td >IV</td>
            <td >V</td>
            <td >VI</td>
            <td >VII</td>
            <td >VIII</td>
            <td >IX</td>
            <td >X</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
          </tr>
          <tr>
            <td >A</td>
            <td >P</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >5</td>
            <td >50%</td>
          </tr>
          <tr>
            <td >B</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >1</td>
            <td >10%</td>
          </tr>
          <tr>
            <td >C</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >&nbsp;</td>
            <td >P</td>
            <td >4</td>
            <td >40%</td>
          </tr>
        </tbody>
      </table>

      <p>
        Frequency value indicates the number of times a plant species is present
        within a given number of sample quadrats.
      </p>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <ul>
        <li>
          Click on the popup corresponding to each quadrat to enlarge the view.
        </li>
        <li>
          You can select the environment for study from the ‘Select the
          environment’ drop down list.
        </li>
        <li>Observe the presence plant species in the quadrat.</li>
        <li>
          Enter 'Y’ in the worksheet if a particular plant species is present or
          ‘N’ if it is not present.
        </li>
        <li>Click on the back button to show normal view of the quadrat.</li>
        <li>
          Based on the values entered, the worksheet gives the plant population
          frequency for each species.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of plant population frequency by
          quadrat method. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=238&cnt=2
        </Typography>
      </div>
    </div>
  );
}
