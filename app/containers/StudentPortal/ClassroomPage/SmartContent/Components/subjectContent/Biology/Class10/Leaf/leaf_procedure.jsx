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

import LeafPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Leaf1/leaf-pro1.jpg';

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
        <img alt="" src={LeafPro1} />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ol>
        <li>Pluck a fresh leaf from a balsam plant.</li>
        <li>
          Fold the leaf and carefully tear along the bruised area of the lower
          side of the leaf.
        </li>
        <li>We can see a colourless narrow border along the torn edge.</li>
        <li>
          Carefully pull out the thin membranous transparent layer from the
          lower epidermis using a forceps.
        </li>
        <li>
          Put the epidermis into a watch glass containing distilled water.
        </li>
        <li>
          Take few drops of Safranin solution using a dropper and transfer this
          into another watch glass.
        </li>
        <li>
          Using a brush transfer the epidermis into the watch glass containing
          the Safranin solution.
        </li>
        <li>
          Keep the epidermis for 30 sec in the Safranin solution to stain the
          peel.
        </li>
        <li>
          To remove excess stain sticking to the peel, place it again in the
          watch glass containing water.
        </li>
        <li>Place the peel onto a clean glass slide using the brush.</li>
        <li>
          Take a few drops of glycerine using a dropper and pour this on the
          peel.
        </li>
        <li>Using a needle, place a cover slip over the epidermis gently.</li>
        <li>Drain out the excess glycerine using a blotting paper.</li>
        <li>
          Take the glass slide and place it on the stage of the compound
          microscope.
        </li>
        <li>Examine the slide through the lens of the compound microscope.</li>
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
          You can select the type of view from the ‘Select view’ drop down list
          (it is the 'Binocular view' through which you can view the cell
          structure).
        </li>
        <li>
          Select the permanent slide of the leaf peel from the ‘Select sample’
          drop down list.
        </li>
        <li>
          You can change the power of the lens from the ‘Select objective lens’
          drop down list.
        </li>
        <li>
          For coarse adjustments, you can click on the left and right arrows of
          'Course Adjustment' seen on the left controls panel.
        </li>
        <li>
          For fine adjustments, you can click on the left and right arrows of
          ‘Fine adjustment’ seen on the left controls panel.
        </li>
        <li>
          Using the scroll bar, scroll down the screen for the ‘Slide
          adjustment’, which lets you observe each part by clicking on the four
          way directional arrow.
        </li>
        <li>
          You can select the ‘Identify parts’ check box to see the labelled
          parts of the stomata.
        </li>
        <li>To redo the experiment, click on the ‘Reset’ button.</li>
      </ol>

      <h1 className={classes.headTag}>Observations</h1>

      <ul>
        <li>
          The epidermis is made of uniseriate layers of cells that have distinct
          cell walls, a nucleus and cytoplasm, and are closely packed.
        </li>
        <li>
          The epidermal layers are broken at places. These openings are the
          stomata.
        </li>
        <li>
          Each stoma is guarded by a pair of bean shaped cells that are guard
          cells.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>The epidermal peel should be taken from a freshly-plucked leaf.</li>
        <li>
          Take the epidermal layer from the lower surface of a leaf, as it has
          more stomata.
        </li>
        <li>Always use a clean glass slide.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Demonstration of Stomata on a Leaf Peel.
          Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=16&sim=137&cnt=2
        </Typography>
      </div>
    </div>
  );
}
