import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SoilStudyThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-the1.jpg';
import SoilStudyThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-the2.jpg';
import SoilStudyThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-the3.jpg';
import SoilStudyThe4 from '../../../../../../../../../assets/Images/Subjects/Biology/SoilStudy1/soilstudy-the4.jpg';


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
      

      <h1 className={classes.headTag}>Our Objective</h1>

      <p>
        Our aim is to collect and study soil for texture, moisture content, pH
        and water holding capacity.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        Soil is the upper humus, containing a layer of the earth, consisting of
        rock and mineral particles mixed with decayed organic matter.&nbsp; Soil
        sustains plant life and contains numerous living organisms. Soil, along
        with air and water, is one of the three most important natural
        resources, which we cannot live without.&nbsp; A productive soil
        contains approximately 46% mineral matter, 4% organic matter, 25 % water
        and 25% air.
      </p>

      <p>An approximate composition of soil shown below</p>

      <p>
        <img
          alt=""
          src={SoilStudyThe1}
          width=" 33%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Let’s see the physical characteristics of soil.</h2>

      <p>
        The physical characteristics of a soil are due to the size of its soil
        particles.&nbsp; Soils are classified according to their particle size
        as follows:
      </p>

      <p>
        <img alt="" src={SoilStudyThe2} />
      </p>

      <h2 className={classes.secondaryTag}>Texture of Soil</h2>

      <p>
        Soil texture is an important physical characteristic of soil which is
        used in both the field and laboratory to determine classes for soils
        based on their physical texture. The soil texture depends upon the
        proportion of the constituent solid particles of different sizes. The
        terms sand, silt, and clay refer to particle size; sand is the largest
        and clay is the smallest. The size of sand particles is 0.05–2 mm, silt
        particles are 0.002–0.05 mm, and clay is smaller than 0.002 mm.
      </p>

      <p>
        The term loam refers to a soil with a combination of sand, silt, and
        clay sized particles.&nbsp; Each texture corresponds to specific
        percentages of sand, silt, or clay.
      </p>

      <p>
        The soil texture triangle is a tool used to visualise and understand the
        meaning of soil texture names.&nbsp; The below figure shows each of the
        12 textural classes based on the percentage of sand, silt, and clay in
        each.
      </p>

      <p>
        <img
          alt=""
          src={SoilStudyThe3}
          width="50%;"
        />
      </p>

      <p>
        If we know the sand, silt, and clay percentages of a soil, then the
        textural class can be identified from the textural triangle. Say for an
        example soil consists of 12% clay, 55% sand and 31% silt, we will see
        how to determine the textural class of the soil.
      </p>

      <p>
        Here, the sample soil has 12% clay, so draw a line corresponding to
        percent clay. Similarly draw the lines for percent sand (55%) and
        percent silt (31%). The lines which intersect indicate the soil type we
        have. From the above sample, soil consists of 12% clay, 55% sand, and
        31% silt; hence the soil type is sandy loam.
      </p>

      <p>
        <img
          alt=""
          src={SoilStudyThe4}
          width="50%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>pH of Soil</h2>

      <p>
        The chemical property of the soil depends upon the presence of different
        types of nutrients and pH of the soil. The soil pH is an indication of
        acidity or alkalinity of soils. The soil pH is important in determining
        the availability of soil minerals.&nbsp; Different plants have differing
        optimum soil pH requirements. The majority of plants prefer a pH of
        around 6 to 7, which is very slightly acidic.
      </p>

      <h2 className={classes.secondaryTag}>Water Holding Capacity of Soil</h2>

      <p>
        One of the main functions of soil is to retain water and make it
        available for the plant to access.&nbsp; All of the water in the soil is
        not available to plants. The amount of water available to plants is
        therefore determined by the number and size of the soil’s pore spaces.
        Water holding capacity of the soil is the amount of water held by the
        capillary spaces of the soil after the percolation of gravitational
        water into the deeper layers.&nbsp; Fine sandy loam, silt loam and silty
        clay loam soil store the largest amount of water, whereas sand, loamy
        sand and sandy loam have limited water storage capacity.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>Students understand the physical properties of soil.</li>
        <li>
          Students understand texture, pH and water holding capacity of soil.
        </li>
        <li>
          Students do the experiment better in the real lab having gone through
          the animation and simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of Physical Properties of Soil.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=235&cnt=1
        </Typography>
      </div>
    </div>
  );
}
