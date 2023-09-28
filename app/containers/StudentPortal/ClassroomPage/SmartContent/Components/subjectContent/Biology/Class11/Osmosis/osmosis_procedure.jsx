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
import OsmosisProcedure from '../../../../../../../../../assets/Images/Subjects/Biology/OsmosisProcedure1.jpg';

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
    <div className={classes.divContent}>
      <div class="divContent">
        <h1 className={classes.headTag}>
          Materials Required
          <img alt="" src={OsmosisProcedure} />
        </h1>

        <h1 className={classes.headTag}>Real Lab Procedure</h1>

        <ol>
          <li>
            Place the peeled potato on the tile and using&nbsp;the knife, cut
            both ends of the potato to make it flat.
          </li>
          <li>
            Use the knife to make a cavity at the centre of the potato from one
            of the flat sides almost up to the bottom.
          </li>
          <li>
            Pour distilled water into the Petri dish until it is half full.
          </li>
          <li>Now, place the potato in the Petri dish.</li>
          <li>
            Fill half the cavity made in the potato with 20% sugar solution.
          </li>
          <li>Mark the level of sugar solution in the cavity using a pin.</li>
          <li>The potato now functions as an osmometer.</li>
          <li>Leave the osmometer undisturbed for about two hours.</li>
          <li>
            Mark the rise in the level of the sugar solution in the cavity with
            another pin.
          </li>
        </ol>

        <h1 className={classes.headTag}>
          Simulator Procedure (as performed through the{' '}
          <a href="http://www.olabs.co.in/">Online Labs</a>)
        </h1>

        <ol>
          <li>
            To increase or decrease the concentration of the sugar solution in
            the Petri dish, choose the concentration of sugar from the 'In Petri
            dish: Select the sugar concentration’ drop down list.
          </li>
          <li>
            To increase or decrease the concentration of the sugar solution in
            the potato, choose the concentration of sugar from the ‘In potato:
            Select the sugar concentration’ drop down list.
          </li>
          <li>
            Click on the Check box ‘Cross sectional view’ to view the cross
            section of the potato, that helps view the water level inside
            potato.
          </li>
          <li>
            Drag a pin to mark the initial level of the sugar solution in the
            cavity.
          </li>
          <li>Click on the start button to start the experiment.</li>
          <li>A timer is shown and you need to wait till the timer stops.</li>
          <li>
            Drag another pin and mark the rise in level of the sugar solution in
            the cavity.
          </li>
          <li>Click on the information icon to see the inference.</li>
          <li>
            You can redo the experiment by clicking on the ‘Reset’ button.
          </li>
        </ol>

        <h1 className={classes.headTag}>Observation</h1>

        <p>
          The level of sugar solution in the potato cavity rises after some time
          due to the entry of water into the sugar solution through the
          selectively permeable membrane of the cells of the potato.
        </p>

        <h1 className={classes.headTag}>Conclusion</h1>

        <p>
          The movement of water from the Petri dish to the potato cavity occurs
          because of the difference in the concentration of solvent molecules in
          the two regions: sugar solution in the potato cavity and pure water in
          the Petri dish.
        </p>

        <h1 className={classes.headTag}>Precautions</h1>

        <ul>
          <li>
            The cavity should be deep enough to keep only a thin layer of
            tissues at the base of the potato.
          </li>
          <li>
            The sugar solution should be of sufficiently high osmotic
            concentration as compared to the cell sap of potato cells.
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
        amrita.olabs.edu.in,. (2014). Study of Osmosis. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=182&cnt=2
        </Typography>
      </div>
    </div>
  );
}
