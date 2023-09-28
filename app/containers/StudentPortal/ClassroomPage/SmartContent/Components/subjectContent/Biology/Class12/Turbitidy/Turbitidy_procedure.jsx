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
import TurbitidyProcedure from '../../../../../../../../../assets/Images/Subjects/Biology/TurbitidyProcedure.jpg';
import TurbitidyProcedure2 from '../../../../../../../../../assets/Images/Subjects/Biology/TurbitidyProcedure2.jpg';
import TurbitidyProcedure3 from '../../../../../../../../../assets/Images/Subjects/Biology/TurbitidyProcedure3.jpg';

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
        <h1 className={classes.headTag}>
          To Study Turbidity of Water Samples using Secchi’s Disc Method
        </h1>

        <h2 className={classes.secondaryTag}>Materials Required:</h2>

        <p>
          <img
            alt=""
            style={{ width: '750px', height: '280px' }}
            src={TurbitidyProcedure}
          />
        </p>

        <h1 className={classes.headTag}>Procedure:</h1>

        <ul>
          <li>Reach the center of the pond in a small boat.</li>
          <li>
            Slowly immerse the Secchi’s disc into water vertically holding the
            rope tightly till the black and white segments of the disc
            disappear.
          </li>
          <li>
            On reaching a particular depth, the disc becomes completely
            invisible.
          </li>
          <li>
            Using a pin, mark the length of the rope when the disc disappears
            (say A cm).
          </li>
          <li>
            Slowly pull up the disc till the black and white segments of the
            disc just reappear.
          </li>
          <li>
            Using a pin, mark the length of the rope where they just reappear.
            (say B cm).
          </li>
          <li>Using a meter tape, find the length of A and B.</li>
          <li>
            Find the mean length (Say X cm) of the rope by the following method.
            X=(A+B)/2
          </li>
        </ul>

        <h1 className={classes.headTag}>Observation:</h1>

        <p>
          The value of X represents the depth of the photic zone up to which
          sunlight penetrates in the water body and photosynthesis takes place.
        </p>

        <h1 className={classes.headTag}>Precaution:</h1>

        <p>
          Students are advised to perform this experiment under the strict
          supervision of a teacher to prevent danger, such as drowning.
        </p>

        <h1 className={classes.headTag}>To Study the pH of Water</h1>

        <h1 className={classes.headTag}>Materials Required:</h1>

        <p>
          <img
            alt=""
            style={{ width: '750px', height: '400px' }}
            src={TurbitidyProcedure2}
          />
        </p>

        <h1 className={classes.headTag}>Procedure</h1>

        <ul>
          <li>Let’s first check the pH of water sample using pH paper.</li>
          <li>
            Take a pH paper strip and dip into the beaker that contains back
            water.
          </li>
          <li>Keep the wet pH paper strip on the tile.</li>
          <li>Do the same procedure for borewell water and pond water.</li>
          <li>Wait for some time to dry the pH paper.</li>
          <li>
            Note the colour and compare with the colour chart given on the broad
            range indicator paper and get a rough estimate of pH of the sample
            solution.
          </li>
          <li>
            We can observe that backwater and bore well water has pH 8 and pond
            water has pH 5.
          </li>
          <li>
            Let’s check the pH of the water sample using universal indicator
            solution.
          </li>
          <li>Using a dropper take some universal indicator solution.</li>
          <li>
            Put 5 drops of indicator solution into the test tube that contains
            water sample.
          </li>
          <li>
            Note the colour developed and compare it with the colour chart.
          </li>
          <li>
            We can observe that backwater and bore well water has pH 8 and pond
            water has pH 5.
          </li>
        </ul>

        <h1 className={classes.headTag}>
          To Analyse Living Organisms in Water Sample
        </h1>

        <h1 className={classes.headTag}>Material Required:</h1>

        <p>
          <img
            alt=""
            style={{ width: '750px', height: '440px' }}
            src={TurbitidyProcedure3}
          />
        </p>

        <h1 className={classes.headTag}>Procedure:</h1>

        <ul>
          <li>Take beaker containing pond water and pour into a test tube.</li>
          <li>
            Leave the water sample undisturbed till the sediment settles to the
            bottom of the test tube.
          </li>
          <li>
            Decant the clear water, leaving concentrated sediment at the bottom
            of the test tube.
          </li>
          <li>
            With the help of a dropper, transfer a drop of water from the test
            tube to the center of a glass slide.
          </li>
          <li>
            Take a cover slip and place it gently on the slide with the aid of a
            needle.
          </li>
          <li>Remove the extra water using a filter paper.</li>
          <li>
            Place this glass slide on the stage of the compound microscope and
            view it.
          </li>
        </ul>

        <h1 className={classes.headTag}>Observations:</h1>

        <p>
          We can observe a large number of different organisms in water sample.
        </p>

        <h1 className={classes.headTag}>
          Simulator Procedure (as performed through the Online Labs)
        </h1>

        <p>
          You can select the experiment from the ‘Select the experiment’ drop
          down list (pH of water samples, urbidity of water samples, living
          organisms in water samples).
        </p>

        <h1 className={classes.headTag}>pH of Water Sample</h1>

        <ul>
          <li>
            Choose any one of the water samples in the beakers by clicking on
            it.
          </li>
          <li>There are two ways of finding the pH value of the solution:</li>
        </ul>

        <h2 className={classes.secondaryTag}>Using the pH strip:</h2>

        <ul>
          <li>
            Click and drag the dropper from the stand and move into the solution
            in the beaker to collect the water sample in the dropper.
          </li>
          <li>
            Still holding the dropper, move it from the beaker over to the pH
            strip and release it.
          </li>
          <li>
            To find the pH value of the solution, select the colour from the
            colour chart by clicking and dragging it to the pH strip and
            comparing it.
          </li>
          <li>
            The colour that matches with the spot on the pH strip indicates the
            pH value of the solution.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>Using the Universal Indicator:</h2>

        <ul>
          <li>
            Click and drag the dropper from the Universal Indicator bottle and
            move it into the solution in the beaker to drop the Universal
            Indicator into it.
          </li>
          <li>
            To find the pH value of the solution, select the colour from the
            colour chart by clicking and dragging it next to the solution in the
            beaker and comparing it.
          </li>
          <li>
            The colour that matches with the solution in the beaker indicates
            the pH value of the solution.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>Note:</h2>

        <ul>
          <li>
            Once test is done using the Universal Indicator, you cannot do it
            with the pH strip. To do it with the pH strip, click the ‘Reset’
            button and vice versa.
          </li>
          <li>
            The ‘Reset’ button can be used to redo the experiment with other
            solutions.
          </li>
        </ul>

        <h1 className={classes.headTag}>Turbidity of Water Sample</h1>

        <ul>
          <li>
            You can select the method of checking turbidity of water from the
            ‘Select the method’ drop down list (Secchi’s disk method and
            measuring cylinder method).
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>Secchi’s disk method:</h2>

        <ul>
          <li>
            You can immerse Secchi’s disc into water by moving the ‘Disc
            movement’ slider.
          </li>
          <li>
            On reaching a particular depth, the disc becomes completely
            invisible.
          </li>
          <li>
            The length of the rope when the disc disappears (say A =95 cm).
          </li>
          <li>
            You can pull up the disc until the black and white segments of the
            disc just appear by moving the ‘Disc movement:’ slider.
          </li>
          <li>
            The length of the rope where they just reappear. (say B =90 cm).
          </li>
          <li>
            We can find the mean length (Say X cm) of the rope by the following
            method. X= (A+B)/2. The mean length shown in the left pane.
          </li>
          <li>
            You can redo the experiment by clicking on the ‘Reset’ button.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>Note:</h2>

        <ul>
          <li>
            The value of X represents the depth of the photic zone up to which
            sunlight penetrates in the water body and photosynthesis takes
            place.
          </li>
          <li>
            You can move the Secchi’s disc by using the up and down arrow
            keyboard keys.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>Measuring Cylinder Method</h2>

        <ul>
          <li>Click on the ‘Start’ button to start the experiment.</li>
          <li>A timer is shown and you need to wait till the timer stops.</li>
          <li>
            Observe the amount of sediment settled at the bottom of each
            cylinder.
          </li>
          <li>Click on the information icon to see the inference.</li>
          <li>
            You can redo the experiment by clicking on the ‘Reset’ button.
          </li>
        </ul>

        <h2 className={classes.secondaryTag}>Note:</h2>

        <ul>
          <li>
            Turbidity is a measure of the amount of suspended particles in the
            water column. Pond water has fewer suspended particles, so it has a
            low turbidity level. Bore well water and backwater have more
            suspended particles, so they have a high turbidity level.
          </li>
        </ul>

        <h1 className={classes.headTag}>Living Organisms in Water</h1>

        <ul>
          <li>
            Choose any one of the water samples by clicking on the corresponding
            icon.
          </li>
          <li>
            Click and drag the dropper from the stand and move into the water
            sample in the vial to collect into the dropper.
          </li>
          <li>
            Still holding the dropper, move it from the vial over to the glass
            slide and release it.
          </li>
          <li>
            Click and drag the cover slip and move towards the glass slide to
            place cover slip on it.
          </li>
          <li>
            Drag and drop the glass slide onto the stage of the compound
            microscope.
          </li>
          <li>
            Click on the eye piece of the compound microscope to view the living
            organism.
          </li>
          <li>
            We can observe a large number of different organisms in the water
            sample.
          </li>
          <li>Click on each species to display its name.</li>
          <li>
            You can redo the experiment by clicking on the ‘Reset’ button.
          </li>
        </ul>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Studies on Turbidity, pH and Microbial
          Presence in Water. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=229&cnt=677
        </Typography>
      </div>
    </div>
  );
}
