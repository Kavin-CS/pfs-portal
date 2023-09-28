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
import PhotosynthesisProcedure from '../../../../../../../../../assets/Images/Subjects/Biology/PhotosynthesisProcedure.jpg';

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
      <h1 className={classes.headTag}>Materials Required</h1>

      <p>
        <img alt="" src={PhotosynthesisProcedure} />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ol>
        <li>
          Take a healthy potted plant and keep it in a dark place for 2-3 days,
          this de-starches the leaves.
        </li>
        <li>Cut out two uniform strips of black paper.</li>
        <li>
          Select a healthy de-starched leaf and cover a portion of the leaf on
          both sides using these two uniform pieces of black paper.
        </li>
        <li>
          Fix both the ends of the black paper to the leaf using paper clips.
        </li>
        <li>Now, place the potted plant in sunlight for a whole day.</li>
        <li>
          Pluck the covered leaf in the late afternoon and remove the black
          paper from the leaf.
        </li>
        <li>
          Take a beaker containing distilled water and place it over a hot plate
          and boil the water.
        </li>
        <li>
          Put the experimental leaf in to the boiling water and boil it for 5-10
          minutes till the leaf becomes soft.
        </li>
        <li>
          Remove the beaker from the hot plate and allow it to cool for some
          time.
        </li>
        <li>
          Take another beaker containing distilled water and place it over the
          hot plate and boil it at about 60<sup>o</sup>C.
        </li>
        <li>Pour some alcohol into a clean boiling tube.</li>
        <li>
          Place the boiling tube in the beaker with water that is being boiled.
        </li>
        <li>Remove the leaf from the beaker using a forceps.</li>
        <li>Place the leaf in the boiling tube containing alcohol.</li>
        <li>
          Keep the boiling tube in the beaker till the leaf becomes colourless.
        </li>
        <li>Remove the leaf from the boiling tube using the forceps.</li>
        <li>
          Dip the leaf in a beaker containing distilled water and wash it.
        </li>
        <li>Now place the leaf in a Petri dish.</li>
        <li>
          Using a dropper take few drops of iodine solution and pour this drop
          by drop on the leaf.
        </li>
      </ol>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ol>
        <li>
          To increase or decrease the watts of the power source use the ‘Select
          the power source’ drop down list.
        </li>
        <li>
          You can change the distance between the plant and the power source
          using the ‘Select the distance of the power source’ drop down list.
        </li>
        <li>
          The colour of the light can be changed from the ‘Select the colour of
          the filter’ drop down list.
        </li>
        <li>Click on the ‘Start’ button to start the experiment.</li>
        <li>
          You can determine the rate of photosynthesis by count the number of
          oxygen bubbles rising from the plant.
        </li>
        <li>Click on the ‘Stop’ button to stop the experiment.</li>
        <li>
          Once you stop the experiment, you will see tool tips that give you the
          number of bubbles that were produced by the plant and the time take.
        </li>
        <li>
          Below is given a worksheet were you can enter the readings and compare
          it with different conditions.
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ol>

      <p>
        <strong>Note: </strong>Oxygen is the by-product of photosynthesis. A
        higher number of oxygen bubbles indicate a higher rate of
        photosynthesis, whereas lesser number of oxygen bubbles indicates a
        lower rate of photosynthesis. You can determine the rate of
        photosynthesis by altering the power sources (40W, 100W), increasing or
        decreasing the distance between the power source and the plant (50cm,
        100 cm) and varying the colours of the light source (blue, green and
        red).
      </p>

      <h1 className={classes.headTag}>Observation</h1>

      <ul>
        <li>
          After iodine treatment, the colour of the exposed portion of the leaf
          turns blue-black.
        </li>
        <li>
          The colour of the unexposed portion of the leaf turns pale yellowish
          brown.
        </li>
      </ul>

      <h1 className={classes.headTag}>Inference</h1>

      <p>
        We know that starch is one of the end products of photosynthesis and our
        observation shows that only those areas of the leaf exposed to sunlight
        turned blue-black on contact with iodine. Since starch turns blue-black
        on contact with iodine, the portions of the leaf that turned blue-black
        indicates photosynthetic activity, while the unexposed portion shows the
        reverse. This clearly indicates that light is essential for
        photosynthesis.
      </p>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>The experimental leaf should be healthy.</li>
        <li>
          Clip the black paper carefully to the leaf, so that the covered
          portion does not receive any sunlight.
        </li>
        <li>
          After boiling the leaf in the alcohol, it should be washed in water.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Importance of Light in Photosynthesis.
          Retrieved 4 March 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=126&cnt=316
        </Typography>
      </div>
    </div>
  );
}
