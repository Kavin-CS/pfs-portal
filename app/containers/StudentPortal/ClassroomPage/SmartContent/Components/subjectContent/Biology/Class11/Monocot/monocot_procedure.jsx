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
import MonocotPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Monocot1/monocot-pro1.jpg';

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
        <img
          alt=""
          src={MonocotPro1}
        />
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>Take a blade and a sunflower stem to be sectioned.</li>
        <li>Dip the top of the material and the blade in water.</li>
        <li>
          Hold the material to be sectioned horizontally between the thump and
          the first finger of your left hand.
        </li>
        <li>
          Hold the blade in the right hand with the edge of the blade facing you
          and handle at right angles to it.
        </li>
        <li>Cut the sections of the material quickly using the blade.</li>
        <li>Transfer the sections in Petri dish containing water.</li>
        <li>
          Using a brush, select a thin uniform and complete section and place it
          on the glass slide.
        </li>
        <li>Using a dropper, take some safranin solution.</li>
        <li>
          Pour one drop of safranin solution over the section and allow it to
          stand for two minutes.
        </li>
        <li>Remove&nbsp; excess stain using a filter paper.</li>
        <li>Pour a drop of glycerine over the section.</li>
        <li>
          Place a coverslip gently on the section with the aid of a needle.
        </li>
        <li>Remove the excess glycerine using a filter paper.</li>
        <li>
          Repeat the same procedure for the sunflower root, maize stem and maize
          root and prepare the slides.
        </li>
        <li>Observe each section under the microscope.</li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through Online Labs)
      </h1>

      <ul>
        <li>
          To select a particular transverse section of stem or root sample,
          click on the corresponding icon.
        </li>
        <li>
          Click and drag the prepared slide of sample and place it on the stage
          of the compound microscope.
        </li>
        <li>
          Click on the eye piece of the compound microscope to view the
          transverse section of the sample.
        </li>
        <li>
          The power of the lens can be changed by selecting the required lens
          power from the drop down list ‘Select objective lens’.
        </li>
        <li>
          You can move the slide to observe each part of the sample by clicking
          on the directional arrow of the ‘Slide adjustment’.
        </li>
        <li>To repeat the experiment, click the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Precaution</h1>

      <ul>
        <li>
          Dip the top of the material and blade in water before cutting the
          section.
        </li>
        <li>Brush should be used while handling the section.</li>
        <li>Remove extra glycerine with filter paper.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Characteristics of Dicot and Monocot
          Stem and Root. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=192&cnt=2
        </Typography>
      </div>
    </div>
  );
}
