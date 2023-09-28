import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import QuadratFrequencyThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/QuadratFrequency1/quadratfrequency-the1.jpg';

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
      <h1 className={classes.headTag}>Aim</h1>

      <p>Our aim is to study plant population frequency by quadrat method.</p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        In ecology it is useful to know the frequency of certain plant species
        in a certain place, or at a certain time. Frequency can be defined as
        the degree of uniformity of the occurrence of individuals of a species
        within a plant community.&nbsp; However, finding the frequency of plant
        species is very difficult for a large populations or extensive habitats.
        A widely used method for plant frequency sampling is by quadrat method.
      </p>

      <h2 className={classes.secondaryTag}>Quadrat Method</h2>

      <p>
        Scientists usually calculate the plant population frequency using the
        quadrat method. A quadrat is a sample plot of a specific size used for
        the study of population or a community. Quadrats are used in many
        different scientific disciplines like vegetation assessment, including
        plant density, plant frequency and plant biomass. Frequency is highly
        influenced by the size and shape of the quadrats used. The area that is
        chosen for study must not be so big that it cannot be sampled
        adequately, or so small that the habitat is difficult for sampling. For
        herbaceous vegetation a metre square quadrat is normally used.
      </p>

      <h2 className={classes.secondaryTag}>Frequency</h2>

      <p>
        Determining plant population frequency using quadrat method has become
        popular primarily because it is relatively simple and objective.
        Frequency indicates the number of times a plant species is present
        within a given number of sample quadrats. It is measured by noting the
        presence of a species in random sample areas which are distributed as
        widely as possible throughout the area of study. Once analyzed, the
        sample data enables the scientist to calculate population frequency of
        the entire population by the following method:
        <br />
        %Frequency=(Number of sampling units in which the species occurs)/(Total
        number of sampling units employed for the study)*100)
      </p>

      <h2 className={classes.secondaryTag}>How to calculate population frequency?</h2>

      <p>
        The image below depicts a plot which is divided into seven quadrats.
      </p>

      <p>
        <img alt="" src={QuadratFrequencyThe1} />
      </p>

      <p>
        Observe the presence sunflower plant in each quadrat.&nbsp; In this
        case, sunflowers are present in five quadrats among the seven.
      </p>

      <p>Hence, the percentage frequency of sunflower is:</p>

      <p>%Frequency=5/7*100=71.42</p>

      <h2 className={classes.secondaryTag}>Variations in Plant Distribution</h2>

      <p>
        Variation in distribution is caused by several factors like soil
        conditions, vegetative propagation, quantity and dispersal of seeds,
        grazing or other biotic activities and predation by insects or diseases.
        Some species abundantly spread all over the area have a chance of
        occurring in all the sampling quadrats and therefore, its frequency will
        be 100. The plants with high frequency are wide in distribution.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>Students understand the term quadrate method.</li>
        <li>
          Students understand how to calculate plant population frequency.
        </li>
        <li>
          Students do the experiment better in the real lab having gone through
          the animation and simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of plant population frequency by
          quadrat method. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=238&cnt=1
        </Typography>
      </div>
    </div>
  );
}
