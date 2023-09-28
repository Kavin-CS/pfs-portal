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
import StomataPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Stomata1/stomata-pro1.png';

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

      <h1>
        <img
          alt=""
          src={StomataPro1}
          maxWidth="70%;"
        />
      </h1>

      <h1 className={classes.headTag}>Real Lab Procedure</h1>

      <ul>
        <li>Pluck one fresh leaf of a four-o’clock plant.</li>
        <li>
          Take two watch glasses and pour some distilled water into the both
          watch glasses.
        </li>
        <li>Split the leaf from the four-o’clock plant obliquely.</li>
        <li>
          Take the peel from the upper surface of the leaf using the forceps.
        </li>
        <li>Place the peel into a watch glass containing water.</li>
        <li>
          Take another peel from the lower surface of the leaf using the
          forceps.
        </li>
        <li>Place the peel into the other watch glass containing water.</li>
        <li>
          Using a dropper, take few drops of Safranin solution and put it into
          the two watch glasses.
        </li>
        <li>
          Take two clean glass slides and place the leaf peel on the slides one
          by one, using a brush.
        </li>
        <li>
          Take a blade and cut a small rectangle or square piece from each peel.
        </li>
        <li>
          Take some glycerine using a dropper and put one drop of glycerine on
          both slides.
        </li>
        <li>
          Take a cover slip and place it gently on the peel with the help of a
          needle.
        </li>
        <li>Take the glass slide and place it under compound microscope.</li>
        <li>Observe under the microscope.</li>
        <li>
          Count the number of stomata in the peels of both upper and lower
          epidermis of the leaf appearing in the microscopic field.
        </li>
      </ul>

      <h1 className={classes.headTag}>Simulator Procedure (as performed through the Online Labs)</h1>

      <ul>
        <li>
          You can select the type of view from the ‘Select view’ drop down
          list.&nbsp; To view the leaf structure, select&nbsp; the 'Binocular
          view' .
        </li>
        <li>
          You can select the slide containing the leaf from the ‘Select sample’
          drop down list.
        </li>
        <li>
          The power of the lens can be changed by selecting the required lens
          power from the drop down list ‘Select objective lens’.
        </li>
        <li>
          To coarse focus on the tissue, you can move the tube up and down by
          clicking on the ‘Coarse adjustment’ right and left arrow.
        </li>
        <li>
          To achieve a fine and sharp focus, you can move the tube very slowly
          by clicking on the ‘Fine adjustment’ right and left arrow.
        </li>
        <li>
          You can move the slide to observe each part of the sample by clicking
          on the directional arrow of the ‘Slide adjustment’.
        </li>
        <li>
          Count the number of stomata and epidermal cells in the specimen and
          enter the values into the corresponding text boxes on the left pane.
        </li>
        <li>
          It will calculate the stomatal index and show into ‘Stomatal Index’
          textbox.
        </li>
        <li>To repeat the experiment, click the ‘Reset’ button.</li>
      </ul>

      <h1 className={classes.headTag}>Observations</h1>

      <ul>
        <li>
          The number of stomata is greater in the lower epidermis, and fewer are
          present in the upper epidermis of the leaf taken from a four-o’clock
          plant.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>The curling of the peel should be avoided.</li>
        <li>
          Always use a brush to transfer the peel from watch glass to the slide
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Study of distribution of stomata.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=7&sim=128&cnt=2
        </Typography>
      </div>
    </div>
  );
}
