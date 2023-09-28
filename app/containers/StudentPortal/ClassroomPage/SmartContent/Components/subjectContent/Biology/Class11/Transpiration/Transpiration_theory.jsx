import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import TranspirationTheory from '../../../../../../../../../assets/Images/Subjects/Biology/transpiration-theory.jpg';

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
          Our objective is to compare the rate of transpiration between the
          upper and lower surfaces of a leaf.
        </p>

        <h1 className={classes.headTag}>Theory</h1>

        <h2 className={classes.secondaryTag}>What is Transpiration?</h2>

        <p>
          Transpiration is the process of water movement through a plant and its
          evaporation into the atmosphere from its aerial parts. In leaves and
          in young shoots the epidermal layer contains minute microscopic pore
          like structures called stomata. Transpiration occurs chiefly through
          the stomata of the leaves.&nbsp; The stomata are mainly concerned with
          exchange of gases during the process of photosynthesis and
          respiration. Each stomata has a slit like opening called the stomatal
          pore, which is surrounded by two special cells called the guard cells.
          These special cells help to regulate the rate of transpiration by
          opening and closing the stomata.
        </p>

        <p>
          <img
            alt=""
            style={{ width: '700px', height: '500px' }}
            src={TranspirationTheory}
          />
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.secondaryTag}>Importance of Transpiration</h2>

        <ol>
          <li>Transpiration helps in the absorption of water from the soil.</li>
          <li>
            The absorbed water is transported from the roots to the leaves
            through the xylem vessels that are greatly influenced by
            transpiration pull.
          </li>
          <li>
            Transpiration helps to cool down the plant surface during
            evaporation.
          </li>
        </ol>

        <h2 className={classes.secondaryTag}>
          <strong>
            Environmental Factors that Affect the Rate of Transpiration
          </strong>
        </h2>

        <ol>
          <li>
            Light:Stomata are triggered to open in light so plants transpire
            more rapidly in the presence of light than in the dark.
          </li>
          <li>
            Temperature: Plants transpire more rapidly at higher temperatures
            because water evaporates more rapidly as the temperature rises.
          </li>
          <li>
            Humidity:Humidity is expressed as the percentage of water vapour
            present in the atmosphere. The higher the relative humidity of the
            outside atmosphere, the lower the rate of transpiration.
          </li>
          <li>
            Wind:When there is no breeze, the air surrounding a leaf surface
            becomes increasingly humid, thus decreasing the rate of
            transpiration. The increase in the wind velocity increases the rate
            of transpiration by removing the humidity from the leaf surface.
          </li>
        </ol>

        <p>
          In different plants, distribution, number, size and type of stomata
          vary. Even within a plant, the upper and lower surfaces of the leaf
          may have different distributions. In some plants a greater number of
          stomata is present on the on the lower surface than on the upper
          surface of the leaf. Therefore, the loss of water from the lower
          surface is greater than from the upper surface.&nbsp;
        </p>

        <p>
          We can study the rate of transpiration from the two surfaces of a leaf
          by comparing the loss of water vapour from the two surfaces of the
          leaf.
        </p>

        <p>
          Rate of transpiration can be easily demonstrated by cobalt chloride
          paper test.&nbsp; Dry cobalt chloride paper that is blue in colour
          turns pink when it comes in contact with water. Using this property of
          cobalt chloride paper we can demonstrate water loss during
          transpiration.
        </p>

        <p>
          We can measure the rate of transpiration by using the time taken for
          the paper to change its colour from blue to pink.
        </p>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <ul>
          <li>Students understand the concept of transpiration.</li>
          <li>Students understand the importance of transpiration.</li>
          <li>
            Students understand the factors that affect the rate of
            transpiration.
          </li>
          <li>
            Students will be able to do the experiment more accurately in the
            real lab once they understand the steps through the animation and
            simulation.&nbsp;
          </li>
        </ul>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
        amrita.olabs.edu.in,. (2015). Rate of Transpiration. Retrieved 4 March 2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=127&cnt=400 
        </Typography>
      </div>
    </div>
  );
}
