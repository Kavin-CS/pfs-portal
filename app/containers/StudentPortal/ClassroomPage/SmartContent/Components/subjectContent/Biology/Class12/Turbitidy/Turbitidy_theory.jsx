import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import Turbidity1 from '../../../../../../../../../assets/Images/Subjects/Biology/Turbitidy1.jpg';
import Turbidity2 from '../../../../../../../../../assets/Images/Subjects/Biology/Turbitidy2.jpg';
import Turbidity3 from '../../../../../../../../../assets/Images/Subjects/Biology/Turbitidy3.jpg';

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

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          Our aim is to study different water bodies for pH, clarity and
          presence of any living organisms.
        </p>

        <h1 className={classes.headTag}>Theory</h1>

        <p>
          Water covers about three-quarters of the earth's surface and it is
          essential for all known forms of life. Water is a habitat for a
          variety of plants and animals which have special adaptations to
          survive in their habitats. Some of the characteristics that control
          the quality of water are the turbidity of water, pH of water and
          different types of plants and animals and their density.
        </p>

        <h2 className={classes.secondaryTag}>Turbidity of Water</h2>

        <p>
          Turbidity is the measure of the relative clarity of a liquid.
          Turbidity of the water body determines the depth to which light can
          penetrate and thus affects the distribution and photosynthesis of
          phytoplankton and macrophytes. The more turbid the water body, the
          less is the thickness of its photic zone (the layer of a body of water
          that is penetrated by sufficient sunlight for photosynthesis).
        </p>

        <p>
          Turbidity can be measured using several methods. The easiest and least
          expensive method is through a Secchi disk. Water turbidity can be
          measured with a Secchi disk, a circular white or black-and-white disk
          attached to a tape measure that is lowered through the water to a
          depth where it disappears from view. In clear lakes, the Secchi depth
          may be greater than 10 metres, while in eutrophic lakes, with dense
          growth of algae and other organisms, creating low visibility, the
          Secchi depth can be less than 1 metre.
        </p>

        <p>
          <img alt=""
          style={{ width: '416px', height: '388px' }}
          src={Turbidity1} />
        </p>

        <h2 className={classes.secondaryTag}>pH of Water</h2>

        <p>
          The pH is a measure of the relative amount of free hydrogen and
          hydroxyl ions in an aqueous solution. Solutions with a pH less than 7
          are said to be acidic and with a pH greater than 7 are basic. The pH
          of pure water is 7 at 25°C.
        </p>

        <p>
          <img alt="" src={Turbidity2} />
        </p>

        <p>
          The pH value of a water sample can be determined by indicator dye
          method and electrometric method using a pH meter. For routine
          purposes, the indicator dye method, using universal pH indicator
          solution or paper strips containing the pH indicators, is used.
        </p>

        <h2 className={classes.secondaryTag}>Living Organisms in Water</h2>

        <p>
          The productivity and the trophic state of a water body are determined
          by quantities of nitrogen, phosphorus, and other biologically useful
          nutrients. Nitrogen and phosphorus are nutrients that induce plant
          growth in standing water bodies, so increased concentrations tend to
          result in increased plant growth.
        </p>

        <p>
          A productive water body has high nutrient concentrations, and has a
          very high density of phytoplankton per unit area. These water bodies
          have high amounts of nutrients and dissolved oxygen and bear large
          number of organisms at different trophic levels. A water body with a
          very low density of phytoplankton per unit area is a non-productive
          water body. The status of health of a water body can be determined by
          analyzing water samples for the number and type of organisms present
          in it at a given time.&nbsp; Such assays also help us to find whether
          a water body is polluted, as some of the organisms are strong
          indicators of water pollution. When you look at a water sample with a
          microscope you will likely see a variety of tiny living things.&nbsp;
          Some of them are shown below.
        </p>

        <p>
          <img alt=""
          style={{ width: '420px', height: '238px' }}
          
          src={Turbidity3} />
        </p>

        <h1 className={classes.headTag}>Learning Outcomes</h1>

        <ul>
          <li>
            Students understand the meaning of turbidity of water, pH of water
            and about the different living organisms in water bodies.
          </li>
          <li>Students understand the term Secchi’s disk.</li>
          <li>
            Students do the experiment better in the real lab having gone
            through the animation and simulation.
          </li>
        </ul>

        <p>&nbsp;</p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Studies on Turbidity, pH and Microbial
          Presence in Water. Retrieved 28 February 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=229&cnt=677
        </Typography>
      </div>
    </div>
  );
}
