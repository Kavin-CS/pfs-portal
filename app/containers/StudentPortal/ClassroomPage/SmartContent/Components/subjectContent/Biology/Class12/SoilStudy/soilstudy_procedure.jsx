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

import SoilStudyPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-pro1.jpg';
import SoilStudyPro2 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-pro2.jpg';
import SoilStudyPro3 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-pro3.jpg';
import SoilStudyPro4 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-pro4.jpg';
import SoilStudyPro5 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-pro5.jpg';
import SoilStudyPro6 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-pro6.jpg';

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
      <ol>
        <li>
          <h1 className={classes.headTag}>To Study pH of Different Types of Soil</h1>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img
          alt=""
          src={SoilStudyPro1}
          width="90%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>Let’s first prepare the soil solution.</li>
        <li>
          Take roadside soil from the watch glass and dissolve it into the
          beaker containing water to make soil solution.
        </li>
        <li>Similarly, repeat the same procedure for other soil samples.</li>
        <li>
          Take a funnel, place a filter paper in it and keep it on a test tube.
        </li>
        <li>
          Take roadside soil solution and filter the solution through the filter
          paper and collect the filtrates in a test tube.
        </li>
        <li>
          Repeat the same procedure for other samples with fresh filter papers.
        </li>
        <li>The soil solution is now ready for testing ph.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Using pH Paper</h2>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>
        <img
          alt=""
          src={SoilStudyPro2}
          width="90%;"
        />
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>Take a pH paper booklet.</li>
        <li>
          Tear pH paper strips from the booklet and place 4 strips on the tile.
        </li>
        <li>
          Using a dropper, take some roadside soil solution from the test tube.
        </li>
        <li>Put 1 to 2 drops of solution on the first pH strip on the tile.</li>
        <li>
          Using fresh droppers, do the same procedure for garden soil, humus
          rich and riverside soil.
        </li>
        <li>Wait for some time for the pH paper strip to dry.</li>
        <li>
          Note the colour and compare with the colour chart given on the broad
          range indicator paper and get a rough estimate of pH of the sample
          solutions.
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>Observations:</h3>

      <p>
        We can observe that the roadside soil has pH 7, garden soil and humus
        rich soil have ph 6 and riverside soil has pH 8.
      </p>

      <h2 className={classes.secondaryTag}>Using Universal Indicator Solution</h2>

      <h3 className={classes.secondaryTag}>Materials Required:</h3>

      <p>
        <img
          alt=""
          src={SoilStudyPro3}
          width="90%;"
        />
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ul>
        <li>Using a dropper, take some universal indicator solution.</li>
        <li>
          Put 5 drops of indicator solution into the test tube that contain
          water samples from roadside soil, garden soil, humus rich and
          riverside soil.
        </li>
        <li>Note the colour developed and compare it with the colour chart.</li>
      </ul>

      <h3 className={classes.secondaryTag}>Observation:</h3>

      <p>
        We can observe that the roadside soil has pH 7, garden soil and humus
        rich soil have ph 6 and riverside soil has pH 8.
      </p>

      <ol start="2">
        <li>
          <h1 className={classes.headTag}>To Study Moisture Content of Soil</h1>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img
          alt=""
          src={SoilStudyPro4}
          width="90%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Real Lab Procedure:</h2>

      <ul>
        <li>
          Take watch glass containing garden soil and put it into a crucible.
        </li>
        <li>Weigh the crucible with soil sample on a weighing balance.</li>
        <li>Take crucible and place it over the Bunsen burner.</li>
        <li>Heat the soil for some time till the soil becomes dry.</li>
        <li>Weigh the crucible again to record the weight of dry soil.</li>
        <li>
          Take watch glass containing roadside soil and put it into a crucible.
        </li>
        <li>Weigh the crucible with soil sample on a weighing balance.</li>
        <li>Take crucible and place it over the Bunsen burner.</li>
        <li>Heat the soil for some time till the soil becomes dry.</li>
        <li>Weigh the crucible again to record the weight of dry soil.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>
        Record the initial and final weights of each sample and the difference
        between initial and final weights in the form of a table.
      </p>

      <h2 className={classes.secondaryTag}>Conclusion</h2>

      <p>
        Garden soil shows higher difference between initial and final weight
        indicating higher moisture content in the garden soil than the roadside
        soil.
      </p>

      <ol start="3">
        <li>
          <h1 className={classes.headTag}>Water Holding Capacity of Soil</h1>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img
          alt=""
          src={SoilStudyPro5}
          width="90%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Procedure</h2>

      <ul>
        <li>
          Take watch glass containing garden soil and put it into a mortar.
        </li>
        <li>Using a pestle, grind the sample into fine powder.</li>
        <li>Take a filter paper and place it in the bottom of the tin box.</li>
        <li>Weigh the tin along with the filter paper and note its weight.</li>
        <li>Transfer the fine powdered soil sample into the tin box.</li>
        <li>
          Take a glass rod and tap the box gently several times, so that soil is
          compactly filled and forms a uniform layer at the top.
        </li>
        <li>Weigh the tin box along with soil sample and note its weight.</li>
        <li>Take a Petri dish filled with water.</li>
        <li>
          Take two small glass rods and place them parallel to and at a small
          distance from each other.
        </li>
        <li>
          Place the soil filled tin on the two glass rods in such a manner that
          its bottom is in contact with water.
        </li>
        <li>
          Leave the set up undisturbed till water appears on the upper surface
          of the soil. Wait till entire soil surface is wet.
        </li>
        <li>
          Remove the tin and allow all the gravitational water to flow out from
          the bottom.
        </li>
        <li>
          When no more water percolates, wipe the bottom to dry it with a filter
          paper.
        </li>
        <li>Weigh them again and note its weight.</li>
      </ul>

      <h2 className={classes.secondaryTag}>Observation</h2>

      <p>
        Record all the values into the table and calculate the percentage of
        water holding capacity of the garden soil.
      </p>

      <ol start="4">
        <li>
          <h1 className={classes.headTag}>To Study the Texture of the Soil</h1>
        </li>
      </ol>

      <h2 className={classes.secondaryTag}>Materials Required:</h2>

      <p>
        <img
          alt=""
          src={SoilStudyPro6}
          width="90%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Procedure:</h2>

      <ul>
        <li>Take 50 gm of soil sample and put it into a measuring cylinder.</li>
        <li>
          Take beaker containing water and pour some water into the measuring
          cylinder.
        </li>
        <li>Shake the measuring cylinder to mix the sample.</li>
        <li>Allow the soil particles to settle down.</li>
        <li>
          Record the thickness of the layers formed by different types of
          particles in the measuring cylinder.
        </li>
        <li>
          The thickness of clay particles in measuring cylinder is 21%, silt
          particles is 18% and sand particles is 61 %.
        </li>
        <li>
          Using a textural triangle, draw lines corresponding to the percentage
          of clay, silt and sand.&nbsp;
        </li>
        <li>The lines which intersect indicate the soil type we have.</li>
        <li>
          Here, the sample soil consists of 21% clay, 61% sand, and 18% silt;
          hence, the soil type is sandy clay loam.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <p>
        You can select the experiment from the ‘Select the test drop down list
        (Moisture Content Test, Water Holding Capacity, pH Test and Texture
        Test).
      </p>

      <ol>
        <li>
          <h2 className={classes.secondaryTag}>Moisture Content Test</h2>

          <ul>
            <li>
              You can select the soil sample by clicking on the corresponding
              icon.
            </li>
            <li>
              Click and drag the spatula towards crucible to transfer some soil
              sample into it.
            </li>
            <li>
              Click and drag the crucible to place it on the weighing machine.
            </li>
            <li>Note the weight of the sample, as the initial weight (x).</li>
            <li>The initial weight (x) can be entered in the worksheet.</li>
            <li>
              Click and drag the weighed sample from the weighing machine and
              drop it on a burner.
            </li>
            <li>Click on the knob of the burner to turn it on.</li>
            <li>A timer is shown and you need to wait till the timer stops.</li>
            <li>
              Click and drag the soil sample back onto the weighing machine to
              weigh it again.
            </li>
            <li>
              Note the weight of the soil sample, as the final weight (y).
            </li>
            <li>The final weight (y) can be entered in the worksheet.</li>
            <li>
              Based on the values entered, the worksheet gives the moisture
              content in soil.
            </li>
            <li>
              You can redo the experiment by clicking on the ‘Reset’ button.
            </li>
          </ul>
        </li>
        <li>
          <h2 className={classes.secondaryTag}>Water Holding Capacity</h2>

          <ul>
            <li>Click and drag the filter paper and drop it on the tin box.</li>
            <li>
              Click and drag the tin box to place it on the weighing machine.
            </li>
            <li>Note the weight of the tin box with filter paper (x).</li>
            <li>The weight (x) can be entered in the worksheet.</li>
            <li>
              Click and drag the weighed tin box from the weighing machine and
              place it on the table.
            </li>
            <li>
              Click and drag the spatula towards tin box to transfer some soil
              sample into it.
            </li>
            <li>
              Click and drag the glass rod towards the tin box to compactly fill
              the soil
            </li>
            <li>
              Click and drag the tin box back onto the weighing machine to weigh
              it again.
            </li>
            <li>Note the weight of the soil sample with tin box (y).</li>
            <li>The weight (y) can be entered in the worksheet.</li>
            <li>
              Click and drag the weighed sample from the weighing machine and
              place it on a Petri dish containing water.
            </li>
            <li>
              Click and drag the tin upwards to allow all the gravitational
              water to flow out from the bottom.
            </li>
            <li>
              Click and drag the tin box back onto the weighing machine to take
              the final weight.
            </li>
            <li>
              Note the weight of the soil sample with water, as the final weight
              (z).
            </li>
            <li>The final weight (z) can be entered in the worksheet.</li>
            <li>
              Based on the values entered, the worksheet gives the water
              retained by the soil sample.
            </li>
            <li>
              You can redo the experiment by clicking on the ‘Reset’ button.
            </li>
          </ul>
        </li>
        <li>
          <h2 className={classes.secondaryTag}>pH Test</h2>

          <ul>
            <li>
              Choose any one of the soil solution in the beakers by clicking on
              it.
            </li>
            <li>There are two ways of finding the pH value of the solution:</li>
          </ul>

          <ol start="1">
            <li>
              <h3 className={classes.secondaryTag}>Using the pH strip:</h3>

              <ul>
                <li>
                  Click and drag the dropper from the stand and move into the
                  solution in the beaker to collect the soil sample.
                </li>
                <li>
                  Still holding the dropper, move it from the beaker over to the
                  pH strip and release it.
                </li>
                <li>
                  To find the pH value of the solution, select the colour from
                  the colour chart by clicking and dragging it to the pH strip
                  and comparing it.
                </li>
                <li>
                  The colour that matches the spot on the pH strip indicates the
                  pH value of the solution.
                </li>
              </ul>
            </li>
            <li>
              <h3 className={classes.secondaryTag}>Using the Universal Indicator:</h3>

              <ul>
                <li>
                  Click and drag the dropper from the Universal Indicator bottle
                  and move it into the solution in the beaker to drop the
                  Universal Indicator into it.
                </li>
                <li>
                  To find the pH value of the solution, select the colour from
                  the colour chart by clicking and dragging it next to the
                  solution in the beaker and comparing it.
                </li>
                <li>
                  The colour that matches the solution in the beaker indicates
                  the pH value of the solution.
                </li>
              </ul>
            </li>
          </ol>

          <ul>
            <li>
              Note:
              <ul>
                <li>
                  Once test is done using the Universal Indicator, you cannot do
                  it with the pH strip. To do it with the pH strip, click the
                  ‘Reset’ button and vice versa.
                </li>
                <li>
                  The ‘Reset’ button can be used to redo the experiment with
                  other soil solutions.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2 className={classes.secondaryTag}>Texture Test</h2>

          <ul>
            <li>
              Click and drag the spatula towards measuring cylinder to transfer
              some soil sample into it.
            </li>
            <li>
              Click and drag the distilled water bottle towards the measuring
              cylinder to add water to the measuring cylinder containing the
              soil sample.
            </li>
            <li>
              Click and drag to shake the solution properly to mix the soil
              sample.
            </li>
            <li>Allow the soil particles to settle down.</li>
            <li>A timer is shown and you need to wait till the timer stops.</li>
            <li>
              Click on the check box “Soil Texture Triangle” to view the
              textural triangle.
            </li>
            <li>
              You can identify the type of soil for selected sample by clicking
              on the corresponding box in the textural triangle.
            </li>
            <li>
              You can redo the experiment by clicking on the ‘Reset’ button.
            </li>
          </ul>
        </li>
      </ol>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Physical Properties of Soil.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=235&cnt=2
        </Typography>
      </div>
    </div>
  );
}
