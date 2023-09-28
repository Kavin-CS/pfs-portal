import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import QuadratDensityThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/QuadratDensity1/quadratdensity-the1.jpg';

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
      <h1 className={classes.headTag}>Aim </h1>

      <p>Our aim is to study plant population density by the quadrat method.</p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        A population is a group of individuals of the same species which inhabit
        a particular space at a particular time. The number of individuals in a
        population never remains constant. It may increase or decrease due to
        many factors like birth rate, death rate and migration. The number of
        individuals of the species in any unit area at a given time is its
        population density. The unit area may be as small as 5 square
        centimeters to as large as 10 square metres, depending on the size and
        nature of the plant community under study.
      </p>

      <h2 className={classes.secondaryTag}>
        Let’s understand the Quadrat Method.
      </h2>

      <p>
        Counting all individuals in a population is the most accurate way to
        determine its size. However, this approach is not usually feasible,
        especially for large populations or extensive habitats. Scientists
        usually calculate plant populations with the quadrat method. A quadrat
        is a square that encloses an area within a habitat.&nbsp; For herbaceous
        vegetation, a metre square quadrat is normally used.
      </p>

      <p>
        <img alt="" src={QuadratDensityThe1} />
      </p>

      <p>
        Once analyzed, the sample data enables the scientist to calculate the
        population size and population density for the entire population.
        Population density is calculated by counting all the individuals present
        at a given time in a given space, divided by the number of units of area
        or space.
      </p>

      <h3 className={classes.secondaryTag}>
        Population density is calculated as follows:
      </h3>

      <p>
        Density&nbsp;&nbsp; = (Total no.of individuals of the species in all the
        sampling unit (S))/(Total number of sampling units studied (Q))
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>Students understand the term quadrat method.</li>
        <li>Students understand how to calculate plant population density.</li>
        <li>
          Students do the experiment better in the real lab having gone through
          the animation and simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study of plant population density by
          quadrat method. Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=239&cnt=1
        </Typography>
      </div>
    </div>
  );
}
