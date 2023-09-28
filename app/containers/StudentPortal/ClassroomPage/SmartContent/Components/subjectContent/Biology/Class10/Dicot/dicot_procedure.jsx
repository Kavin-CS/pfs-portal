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

import DicotPro1 from '../../../../../../../../../assets/Images/Subjects/Biology/Dicot1/dicot-pro1.jpg';


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
        <img alt="" src={DicotPro1} />
      </p>

      <h1 className={classes.headTag}>Pea Seed</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ol>
        <li>
          Take some pea seeds and put them in a beaker containing distilled
          water.
        </li>
        <li>Soak the pea seeds overnight.</li>
        <li>
          Take one seed from the beaker using a forceps and place it in a watch
          glass.
        </li>
        <li>
          Remove the seed coat of the pea seed, using the forceps and the
          needle.
        </li>
        <li>
          Pick the seed using the forceps and place it on the stage plate of the
          dissection microscope.
        </li>
        <li>
          Separate the two cotyledons of the pea seed using the forceps and the
          needle.
        </li>
        <li>Observe the seed through the dissection microscope.&nbsp;</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>Pea seeds are round in shape.</li>
        <li>
          One end of the embryonic axis called the plumule, lies enclosed
          between the two cotyledons. It develops into the shoot.
        </li>
        <li>
          We can see a epicotyl and a hypocotyl on each seed, which is located
          above the root and below the stalk of the cotyledon.
        </li>
        <li>
          The other end of the embryonic axis called the radicle, protrudes
          outside the cotyledons. This develops in to the root.
        </li>
        <li>
          The pea seed contains two thick fleshy cotyledons which are foods
          storage organs.
        </li>
        <li>
          Since two cotyledons are seen in pea seeds, they are dicot
          seeds.&nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Gram Seed</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ol>
        <li>
          Take some gram seeds and put them in a beaker containing distilled
          water.
        </li>
        <li>Soak the gram seeds overnight.</li>
        <li>
          Take one seed from the beaker using a forceps and place it in a watch
          glass.
        </li>
        <li>
          Remove the seed coat of the gram seed, using the forceps and the
          needle.
        </li>
        <li>
          Pick the seed using the forceps and place it on the stage plate of the
          dissection microscope.
        </li>
        <li>
          Separate the two cotyledons of the gram seed using the forceps and the
          needle.
        </li>
        <li>Observe the seed through the dissection microscope.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>Gram seeds are round in shape.</li>
        <li>We can easily identify a scar called hilum.</li>
        <li>
          A micropyle can be observed on the gram seed through which the seed
          imbibes water.
        </li>
        <li>
          The gram seed contains two thick fleshy cotyledons that are foods
          storage organs.
        </li>
        <li>
          We can observe a plumule on the gram seed which giving rise to the
          first true leaves.
        </li>
        <li>
          The radicle is the embryonic root inside the seed which grows downward
          in the soil.
        </li>
        <li>Above the radicle we can see an embryonic stem or hypocotyl.</li>
        <li>
          Since two cotyledons are seen in gram seeds, they are dicot seeds.
        </li>
      </ul>

      <h1 className={classes.headTag}>Red Kidney Bean</h1>

      <h2 className={classes.secondaryTag}>Real Lab Procedure</h2>

      <ol>
        <li>
          Take some seeds of red kidney bean and put them in a beaker containing
          distilled water.
        </li>
        <li>Soak the bean seeds overnight.</li>
        <li>
          Take one seed from the beaker using a forceps and place it in a watch
          glass.
        </li>
        <li>
          Remove the seed coat of the bean seed, using the forceps and the
          needle.
        </li>
        <li>
          Pick the seed using the forceps and place it on the stage plate of the
          dissection microscope.
        </li>
        <li>
          Separate the two cotyledons of the bean seed using the forceps and the
          needle.
        </li>
        <li>Observe the seed through the dissection microscope.</li>
      </ol>

      <h2 className={classes.secondaryTag}>Observations</h2>

      <ul>
        <li>The beans are kidney shaped.</li>
        <li>There is a scar along the notch called the hilum.</li>
        <li>
          A small pore called micropyle is located at one end of the hilum.
        </li>
        <li>
          One end of the embryonic axis called the plumule lies enclosed between
          the two cotyledons. It develops into the shoot.
        </li>
        <li>We can observe a hypocotyl which is an embryonic stem.</li>
        <li>
          The other end of the embryonic axis called the radicle protrudes
          outside the cotyledons. This develops in to the root.
        </li>
        <li>
          The kidney bean seed contains two thick fleshy cotyledons that are
          foods storage organs.
        </li>
        <li>
          Since two cotyledons are seen in bean seeds, they are dicot seeds.
        </li>
      </ul>

      <h1 className={classes.headTag}>
        Simulator Procedure (as performed through the{' '}
        <a href="http://www.olabs.co.in/" target="_blank">
          Online Labs
        </a>
        )
      </h1>

      <ul>
        <li>
          To change the type of the seed use the drop down list, ‘Select the
          seed type:’
        </li>
        <li>
          To change the sample seed use the drop down list, ‘Select the sample
          seed:’
        </li>
        <li>Drag the forceps towards the seed and remove the seed cover.</li>
        <li>
          Drag and drop the seed onto the stage of the microscope using the
          forceps.
        </li>
        <li>
          Drag the needle and forceps toward the seed to separate the two
          cotyledons.
        </li>
        <li>
          Click on the eye piece of the compound microscope to enlarge the view
          of&nbsp; seeds.
        </li>
        <li>
          Drag and place the correct choice to the corresponding part of seed
          embryo. (If the choice is wrong, the selection goes back.)
        </li>
        <li>Click on the information icon to see the inference.</li>
        <li>
          You can redo the experiment anytime by clicking on the ‘Reset’ button.
        </li>
      </ul>

      <h1 className={classes.headTag}>Precautions</h1>

      <ul>
        <li>Seed should be soaked overnight in distilled water.</li>
        <li>
          Be careful when removing the seed coat from the seed, to avoid damage
          to it.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Embryo of Dicot Seeds. Retrieved 6 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=16&sim=135&cnt=2
        </Typography>
      </div>
    </div>
  );
}
