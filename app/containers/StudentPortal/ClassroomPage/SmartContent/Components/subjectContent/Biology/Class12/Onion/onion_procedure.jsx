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
      <h1 className={classes.headTag}>Materials Required:</h1>

      <p>
        <img
          alt=""
          src={OnionPro1}
          width="90%;"
        />
      </p>

      <h1 className={classes.headTag}>1. Real Lab Procedure:</h1>

      <ul>
        <li>Take an onion and place it on the tile.</li>
        <li>Carefully remove the dry roots present using a sharp blade.</li>
        <li>
          Grow root tips by placing the bulbs in a beaker filled with water.
        </li>
        <li>New roots may take 3–6 days to grow.</li>
        <li>
          Cut off 2–3 cm of freshly grown roots and let them drop into a watch
          glass.
        </li>
        <li>
          Using a forceps, transfer them to the vial containing freshly prepared
          fixative of aceto-alcohol (1:3: glacial acetic acid: ethanol).
        </li>
        <li>Keep the root tips in the fixative for 24 hours.</li>
        <li>
          Using a forceps, take one root and place it on a clean glass slide.
        </li>
        <li>
          Using a dropper, place one drop of N/10 HCl on the root tip followed
          by 2–3 drops of acetocarmine stain.
        </li>
        <li>
          Warm it slightly on burner. Care should be taken that the stain is not
          dried up.
        </li>
        <li>Carefully blot the excess stain using filter paper.</li>
        <li>
          Using a blade, cut the comparatively more stained tip portion of the
          root, retain it on the slide and discard the remaining portion.
        </li>
        <li>After that, put one drop of water on the root tip.</li>
        <li>Mount a cover slip on it using a needle.</li>
        <li>
          Now, slowly tap the cover slip using the blunt end of a needle so that
          the meristematic tissue of the root tip below the cover slip is
          properly squashed and spread as a thin layer of cells.
        </li>
        <li>
          This preparation of onion root tip cells is now ready for the study of
          mitosis.
        </li>
        <li>
          Place the slide under the compound microscope and observe the
          different stages of mitosis.
        </li>
        <li>
          Various stages of mitosis are prophase, metaphase, anaphase and
          telophase.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <ul>
        <li>
          Drag and drop the slide onto the stage of the compound microscope.
        </li>
        <li>
          Click on the eye piece of the compound microscope to view the cells.
        </li>
        <li>
          To change the power of the lens, you can choose a lens from the
          ‘Select objective lens’ drop down list.
        </li>
        <li>
          For coarse adjustments, you can either click on the up and down arrow
          of ‘Coarse adjustment’ knob, or click on the left and right arrows of
          'Course Adjustment' seen on the left control panel.
        </li>
        <li>
          For fine adjustments, you can click on the left and right arrows of
          ‘Fine adjustment’ seen on the left control panel.
        </li>
        <li>
          To observe each part, you can click on the four way directional arrow
          of ‘Slide adjustment’ seen on the left control panel.
        </li>
        <li>You can redo the experiment by clicking on the ‘Reset’ button.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study Mitosis in Onion Root Tip.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=237&cnt=2
        </Typography>
      </div>
    </div>
  );
}
