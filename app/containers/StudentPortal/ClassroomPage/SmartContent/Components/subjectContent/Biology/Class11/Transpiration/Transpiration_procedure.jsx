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
import TranspirationProcedure from '../../../../../../../../../assets/Images/Subjects/Biology/transpirationProcedure.jpg';

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
          <img alt="" src={TranspirationProcedure} />
        </p>

        <h1 className={classes.headTag}>Real Lab Procedure</h1>

        <ul>
          <li>
            Take 3 % cobalt chloride solution from beaker and pour into the
            Petri dish.
          </li>
          <li>
            Take some filter paper strips and dip them in the cobalt chloride
            solution.
          </li>
          <li>
            Keep the strips in the solution for 3-5 minutes. They become pink in
            colour when wet.
          </li>
          <li>Remove the strips from the solution using forceps.</li>
          <li>Place the strips on the wire gause to allow them to dry.</li>
          <li>The filter paper becomes blue in colour on drying.</li>
          <li>
            Select one healthy leaf and clean the leaf to remove the water
            droplets using a filter paper.
          </li>
          <li>
            Take the dry pieces of cobalt chloride paper from the wire gause.
          </li>
          <li>
            Place the dried strips of cobalt chloride paper: one on the upper
            and the other on the lower surface of a leaf of the potted plant.
          </li>
          <li>
            Take two glass slides and place one over the upper and the
            other&nbsp; over the lower side of the leaf.
          </li>
          <li>Clip the slides together using binder clips.</li>
          <li>
            Note the time taken by the cobalt chloride paper to change its blue
            colour to pink.
          </li>
        </ul>

        <h1 className={classes.headTag}>
          Simulator Procedure (as performed through the Online Labs)
        </h1>

        <ul>
          <li>
            To select a particular plant, click on the corresponding icon.
          </li>
          <li>Click on the proceed button to view the leaves more closely.</li>
          <li>
            We can observe dried cobalt chloride paper strips which are blue in
            colour on upper and lower surfaces of the leaf.
          </li>
          <li>Click on the start button to start the experiment.</li>
          <li>A timer is shown and you need to wait till the timer stops.</li>
          <li>
            We can observe cobalt chloride paper strips on both surfaces of the
            leaf slowly change their colour from blue to pink.
          </li>
          <li>
            Small icons on both surfaces of the leaf shows the time taken to
            change from blue cobalt chloride paper to pink in colour.
          </li>
          <li>
            The expected colour and the original colour of the cobalt chloride
            paper shows in the left pane of the simulator.
          </li>
          <li>Click on the information icon to see the inference.</li>
          <li>
            You can redo the experiment by clicking on the ‘Reset’ button.
          </li>
        </ul>

        <p>
          Note:Dry cobalt chloride paper that is blue in colour turns pink when
          it comes in contact with water. Using this property of cobalt chloride
          paper we can study the rate of transpiration from the two surfaces of
          a leaf by comparing the loss of water vapour from the two surfaces of
          the leaf.
        </p>

        <h1 className={classes.headTag}>Observation</h1>

        <p>
          The time taken to change colour of the cobalt chloride paper from blue
          to pink on the lower leaf surface is less than the upper surface.
        </p>

        <h1 className={classes.headTag}>Conclusion</h1>

        <p>
          The quick change in the colour of cobalt chloride paper on the lower
          surfaces indicates higher rate of loss of water vapour from this
          surface than the upper one.
        </p>

        <h1 className={classes.headTag}>Precautions</h1>

        <ul>
          <li>Always use a well watered potted plant for the experiment.</li>
          <li>
            Always handle the dried cobalt paper with dry hands or forceps.
          </li>
          <li>
            The leaf surface should not be wet while applying the cobalt
            chloride strips.
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Rate of Transpiration. Retrieved 4 March
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=127&cnt=400
        </Typography>
      </div>
    </div>
  );
}
