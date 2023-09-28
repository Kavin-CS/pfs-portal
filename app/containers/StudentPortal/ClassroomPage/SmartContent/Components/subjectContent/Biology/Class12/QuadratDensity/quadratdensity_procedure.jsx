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

import QuadratDensityPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/QuadratDensity1/quadratdensity-pro1.jpg';

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
      <h1 className={classes.headTag}>Materials Requires:</h1>

      <p>
        <img alt="" src={QuadratDensityPro1} width="900px;" height="300px;" />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>
          In the selected site of study, hammer the nails firmly without
          damaging the vegetation.
        </li>
        <li>Fix four nails to make a square.</li>
        <li>
          Tie each end of the nails using a thread, to make a 1 m X 1 m quadrat.
        </li>
        <li>
          Similarly make nine more quadrats randomly in the site of
          study.&nbsp;&nbsp;&nbsp; &nbsp;
        </li>
        <li>
          Count the number of individuals of a species “A” present in the first
          quadrat.
        </li>
        <li>Record the data in the table.</li>
        <li>
          Similarly count the number of individuals of the species “A” in other
          quadrats respectively and record the data in the table.
        </li>
        <li>
          Count the number of individuals of a species “B” present in the all
          quadrat.
        </li>
        <li>Record the data in the table.</li>
        <li>
          Repeat the same procedure for species C and record the data in the
          table.
        </li>
        <li>
          We can calculate the density of plant population by this equation:
        </li>
        <li>
          Density =Total number of individuals of the species in all the
          sampling&nbsp; unit (S) / Total number of sampling units studied (Q)
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
        height="221"
        width="559px"
      >
        <tbody>
          <tr>
            <td textAlign="center;">Plant Species</td>
            <td colspan="10" rowspan="1" textAlign="center;">
              Number of individuals in Each quadrats
            </td>
            <td textAlign="center;">Total Number of Individuals (S)</td>
            <td textAlign="center;">Total Number of Quadrats Studied (Q)</td>
            <td textAlign="center;">Density D=(S/Q)</td>
          </tr>
          <tr>
            <td textAlign="center;">&nbsp;</td>
            <td textAlign="center;">I</td>
            <td textAlign="center;">II</td>
            <td textAlign="center;" width="20px">III</td>
            <td textAlign="center;">&nbsp;IV</td>
            <td textAlign="center;">V</td>
            <td textAlign="center;">&nbsp;VI</td>
            <td textAlign="center;">&nbsp;&nbsp;VII</td>
            <td textAlign="center;">&nbsp;&nbsp;&nbsp;VIII</td>
            <td textAlign="center;">&nbsp;IX</td>
            <td textAlign="center;">X&nbsp;</td>
            <td textAlign="center;">&nbsp;</td>
            <td textAlign="center;">&nbsp;</td>
            <td textAlign="center;">&nbsp;</td>
          </tr>
          <tr>
            <td textAlign="center;">A</td>
            <td textAlign="center;">2</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">5</td>
            <td textAlign="center;">7</td>
            <td textAlign="center;">&nbsp;10</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">3</td>
            <td textAlign="center;">&nbsp;27</td>
            <td textAlign="center;">&nbsp;10</td>
            <td textAlign="center;">&nbsp;&nbsp;2.7</td>
          </tr>
          <tr>
            <td textAlign="center;">B</td>
            <td textAlign="center;">1</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">4</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">8</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">3</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">2</td>
            <td textAlign="center;">&nbsp;20</td>
            <td textAlign="center;">&nbsp;10</td>
            <td textAlign="center;">&nbsp;&nbsp;2.0</td>
          </tr>
          <tr>
            <td textAlign="center;">C</td>
            <td textAlign="center;">4</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">3</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">6</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">0</td>
            <td textAlign="center;">1</td>
            <td textAlign="center;">2</td>
            <td textAlign="center;">&nbsp;19</td>
            <td textAlign="center;">&nbsp;10</td>
            <td textAlign="center;">&nbsp;&nbsp;1.9</td>
          </tr>
        </tbody>
      </table>

      <p>
        The density value thus obtained is then expressed as number of
        individuals per unit area.
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the Online Labs)
      </h1>

      <ul>
        <li>
          You can select the environment for study from the ‘Select the
          environment’ drop down list.
        </li>
        <li>
          Click on the popup corresponding to each quadrat to enlarge the view.
        </li>
        <li>
          Count the number of individuals of a species present in each quadrat
          and enter in the worksheet.
        </li>
        <li>Click on the back button to show normal view of the quadrat.</li>
        <li>
          Based on the values entered, the worksheet gives the plant population
          density for each species.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of plant population density by
          quadrat method. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=239&cnt=2
        </Typography>
      </div>
    </div>
  );
}
