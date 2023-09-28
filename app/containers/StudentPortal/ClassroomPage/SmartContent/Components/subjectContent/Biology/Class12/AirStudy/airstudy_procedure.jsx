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

import AirStudyPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/AirStudy1/airstudy-pro1.jpg';

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
        <img alt="" src={AirStudyPro1} width="90%;" />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>Take 8–10 feet long piece of twine thread.</li>
        <li>
          Take five leaves and tie them on the thread leaving a foot distance in
          between.
        </li>
        <li>Make three such long threads tied with leaves.</li>
        <li>
          Take some petroleum jelly and apply an extremely thin layer of
          petroleum jelly on surface of each leaf.
        </li>
        <li>Make a bundle of these leaves and pack them in polythene bags.</li>
        <li>
          Make three such bundles of smeared leaves and mark them as A, B and C.
        </li>
        <li>
          Carefully weigh each bundle of leaves along with the polythene bags
          and record values in the table.
        </li>
        <li>
          Select three different spots in a manner that one has heavy vehicular
          traffic, one has moderate traffic and one has no vehicular traffic.
        </li>
        <li>
          At spot ' heavy vehicular traffic ' expose each leaf of bundle 'A' by
          stretching the attached thread and tie the two ends to two poles at 10
          feet height above ground.
        </li>
        <li>
          Similarly expose leaf bundle 'B' at ‘moderate traffic' and leaf bundle
          'C' at ' no vehicular traffic'.
        </li>
        <li>Keep leaves exposed for about two hours.</li>
        <li>
          After exposure, collect the leaves from the spot and carefully
          re-bundle exposed leaves and place them, along with the string, in the
          corresponding polythene covers.
        </li>
        <li>At the end of the experiment, return to the laboratory.</li>
        <li>
          Reweigh each bundle of exposed leaves along with their respective
          polythene covers and record the values in the table.
        </li>
        <li>
          The weight of suspended particles can be calculated by the difference
          between the weight of leaves after exposure and weight of leaves
          before exposure.
        </li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <table
        align="center"
        border="1"
        cellpadding="1"
        cellspacing="1"
        class="responsive_table"
      >
        <tbody>
          <tr>
            <td textAlign="center;">Site</td>
            <td textAlign="center;">Weight of leaves before exposure (W1)</td>
            <td>
              <p>Weight of leaves after exposure (W1)</p>
            </td>
            <td textAlign="center;">Weight of Suspended Particles</td>
          </tr>
          <tr>
            <td textAlign="center;">Heavy Vehicular Traffic</td>
            <td textAlign="center;">15.400</td>
            <td textAlign="center;">15.610</td>
            <td textAlign="center;">0.210</td>
          </tr>
          <tr>
            <td textAlign="center;">Moderate Traffic</td>
            <td textAlign="center;">15.900</td>
            <td textAlign="center;">16.930</td>
            <td textAlign="center;">0.130</td>
          </tr>
          <tr>
            <td textAlign="center;">No Traffic</td>
            <td textAlign="center;">20.070</td>
            <td textAlign="center;">20.100</td>
            <td textAlign="center;">0.030</td>
          </tr>
        </tbody>
      </table>

      <p>
        The atmosphere in highly populated area is very rich in dust, smoke and
        suspended particulate matter all due to vehicular exhausts and
        industrial emission. From the table we can see that the weight of
        suspended particles in heavy vehicular traffic spot and moderate traffic
        is greater when compared to the no vehicular spot.
      </p>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the Online Labs)
      </h1>

      <ul>
        <li>
          Note the weight of the leaf bundle displayed in the weighing machine.
        </li>
        <li>
          You can enter the value in the corresponding site in the worksheet.
        </li>
        <li>
          Click and drag the leaf bundle from weighing machine and drop into the
          particular site.
        </li>
        <li>A timer is shown and you need to wait till the timer stops.</li>
        <li>
          Click and drag the leaf bundle back onto the weighing machine to weigh
          it again.
        </li>
        <li>
          You can enter the value in the corresponding site in the worksheet.
        </li>
        <li>
          Based on the values entered, the worksheet gives the weight of
          suspended particles.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of pollutants in Air. Retrieved 5
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=18&sim=240&cnt=2
        </Typography>
      </div>
    </div>
  );
}
