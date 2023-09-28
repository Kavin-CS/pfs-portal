import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import PhotosynthesisImg from '../../../../../../../../../assets/Images/Subjects/Biology/Photosynthesis.gif';
import PhotosynthesisEqu1 from '../../../../../../../../../assets/Images/Subjects/Biology/Photosynthesis1.gif';
import PhotosynthesisEqu2 from '../../../../../../../../../assets/Images/Subjects/Biology/Photosynthesis2.gif';

const useStyles = makeStyles(theme => ({
  divContent: {
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    lineHeight: '1.42857143',
    color: '#333',
    boxSizing: 'border-box',
    textAlign: 'left',
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
  },
  OhmsLawImg: {
    width: '350px',
    height: '210px',
  },
  headTag: {
    fontSize: 20,
  },

  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div class="divContent">
        <h1 className={classes.headTag}>Objective</h1>

        <p>
          Our objective is to show experimentally that light is necessary for
          photosynthesis.
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <p>
          <img alt="" src={PhotosynthesisImg} />
        </p>

        <p>
          Photosynthesis is the process in which light energy is converted into
          chemical energy. Using the energy of light, carbohydrates such as
          sugars are synthesised from carbon dioxide and water.
        </p>

        <p>
          The name photosynthesis is derived from the Greek words,{' '}
          <em>photo</em> for ‘light’ and <em>synthesis</em> meaning ‘putting
          together’. Oxygen is also released, as a waste product. Light is the
          major factor for photosynthesis to take place and by doing this
          experiment we need to prove that light is necessary for
          photosynthesis.
        </p>

        <h2 className={classes.secondaryTag}>The Process of Photosynthesis</h2>

        <p>
          The process of photosynthesis occurs when green plants use the energy
          of light to convert carbon dioxide (CO<sub>2</sub>) and water (H
          <sub>2</sub>O) into carbohydrates. Light energy is absorbed by
          chlorophyll, a photosynthetic pigment of the plant, while air
          containing carbon dioxide and oxygen enters the plant through the leaf
          stomata. An extremely important by-product of photosynthesis is
          oxygen, on which most organisms depend.
        </p>

        <p>
          Glucose, a carbohydrate processed during photosynthesis, is mostly
          used by plants as an energy source to build leaves, flowers, fruits,
          and seeds. Molecules of glucose later combine with each other to form
          more complex carbohydrates such as starch and cellulose. The cellulose
          is the structural material used in plant cell walls. Photosynthesis
          provides the basic energy source for virtually all organisms.
        </p>

        <p>We can express the overall reaction of photosynthesis as:</p>

        <p>
          <img src={PhotosynthesisEqu1} />
        </p>

        <p>
          <img alt="" src={PhotosynthesisEqu2} />
        </p>

        <h2 className={classes.secondaryTag}>
          Where does Photosynthesis occur?
        </h2>

        <p>
          Photosynthesis takes place primarily in leaves and little to none
          occurs in stems. It takes place within specialised cell structures
          called chloroplasts. A leaf has a petiole or the stalk and a lamina,
          the flat portion of the leaf. As its area is broad, the lamina helps
          in the absorption of sunlight and carbon dioxide during
          photosynthesis. Photosynthesis takes place in the chloroplasts that
          have chlorophyll present in them. It is the chlorophyll that absorbs
          light energy from the sun. There are tiny pores called stomata that
          function as roadways for carbon dioxide to enter and oxygen to leave
          the plant.
        </p>

        <h2 className={classes.secondaryTag}>
          Role of the colour of light during Photosynthesis
        </h2>

        <p>
          Did you know that the colour of light plays an important role during
          photosynthesis? Yes, it does. Plants use only certain colours from
          light for the process of photosynthesis. The chlorophyll absorbs blue,
          red and violet light rays. Photosynthesis occurs more in blue and red
          light rays and less, or not at all, in green light rays.
        </p>

        <p>
          The light that is absorbed the best is blue, so this shows the highest
          rate of photosynthesis, after which comes red light. Green light
          cannot be absorbed by the plant, and thus cannot be used for
          photosynthesis. Chlorophyll looks green because it absorbs red and
          blue light, making these colours unavailable to be seen by our eyes.
          It is the green light which is not absorbed that finally reaches our
          eyes, making the chlorophyll appear green.
        </p>

        <h2 className={classes.secondaryTag}>
          Factors affecting Photosynthesis
        </h2>

        <p>
          For a constant rate of photosynthesis, various factors are needed at
          an optimum level. Here are some of the factors affecting
          photosynthesis.
        </p>

        <ul>
          <li>
            Light Intensity:An increased light intensity leads to a high rate of
            photosynthesis and a low light intensity would mean low rate of
            photosynthesis.
          </li>
          <li>
            Concentration of CO<sub>2</sub>: Higher carbon dioxide concentration
            increases the rate of photosynthesis. Normally the carbon dioxide
            concentration of 0.03 to 0.04 percent is sufficient for
            photosynthesis.
          </li>
          <li>
            Temperature:An efficient photosynthesis requires an optimum
            temperature range between 25 to 35<sup>o</sup>C.
          </li>
          <li>
            Water: Water is an essential factor for photosynthesis. The lack of
            water also leads to a problem for carbon dioxide intake. If water is
            scarce,&nbsp; the leaves refuse to open their stomata to keep water
            they have stored inside.
          </li>
          <li>
            Polluted Atmosphere:The pollutants and gases (impure carbon) settle
            on leaves and block the stomata, making it difficult to take in
            carbon dioxide. A polluted atmosphere can lead to a 15 percent
            decrease in the rate of photosynthesis.
          </li>
        </ul>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <ul>
          <li>
            Students understand the concept that light is necessary for
            photosynthesis.
          </li>
          <li>
            Students understand the principle of photosynthesis and the factors
            affecting photosynthesis.
          </li>
          <li>
            Students will be able to do the experiment more accurately in the
            real lab once they understand the steps through the{' '}
            <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=126&amp;cnt=246">
              animation
            </a>{' '}
            and{' '}
            <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=16&amp;sim=126&amp;cnt=4">
              simulation
            </a>
            .
          </li>
        </ul>
      </div>
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
