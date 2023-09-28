import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import RespirationThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Respiration1/respiration-the1.jpg';
import RespirationThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Respiration1/respiration-the2.jpg';
import RespirationThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/Respiration1/respiration-the3.jpg';


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
        To study the rate of respiration in germinating seeds having different
        substances such as wheat (carbohydrates), mustard (fats) and bean
        (proteins).
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        Respiration is the process during which simple carbohydrates, like
        glucose, break down into simpler substances and liberate carbon dioxide
        and energy.&nbsp; The compound used, or oxidized, during respiration is
        called a respiratory substrate. Carbohydrates, fats, and proteins are
        examples of respiratory substrates, and carbohydrates are the preferred
        respiratory substrate among them. The rate of respiration can be
        measured in terms of gas exchange, that is, consumption of the
        respiratory substrate oxygen, or evolution of carbon dioxide.
      </p>

      <h2 className={classes.secondaryTag}>What is Respiratory Quotient?</h2>

      <p>
        As we know, during aerobic respiration, oxygen is consumed and carbon
        dioxide is released.&nbsp; The respiratory quotient (RQ) is the ratio of
        CO2 produced to that of the O2 consumed while food is being metabolized.
      </p>

      <p>
        <img alt="" src={RespirationThe1} />
      </p>

      <h2 className={classes.secondaryTag}>
        Let’s see how respiratory quotient depends upon different respiratory
        substances.
      </h2>

      <p>
        The respiratory quotient depends upon the type of respiratory substrate
        used during respiration. Different respiratory substrates have different
        numbers of carbon and oxygen atoms in their molecules. So, during
        respiration the amount of carbon dioxide evolved from per gram weight of
        the substrate also differs. The carbohydrates have equal numbers of
        carbon and oxygen in their molecules. When carbohydrates are used as
        substrate, then the RQ will be 1, because equal amounts of carbon
        dioxide and oxygen are evolved and consumed.
      </p>

      <p>
        <img alt="" src={RespirationThe2} />
      </p>

      <p>
        Fats and proteins contain a smaller number of oxygen atoms than carbon
        atoms in their molecules. When fats are used as a substrate in
        respiration, the RQ is less than 1 because the amount of oxygen utilised
        is always higher than the amount of carbon dioxide released.
      </p>

      <p>
        <img
          alt=""
          src={RespirationThe3}
          textAlign="center;"
        />
      </p>

      <p>&nbsp;</p>

      <p>
        Thus, we can study the rate of respiration for different respiratory
        substrates by calculating the amount of carbon dioxide evolved per gm
        weight of the substrate.
      </p>

      <h2 className={classes.secondaryTag}>Let’s see the factors affecting the rate of respiration.</h2>

      <p>
        Here are some of the few factors that affect the rate of respiration.
      </p>

      <ul>
        <li>
          Temperature: At a very high temperature, the rate of respiration
          decreases with time, and at very low temperature, the respiration rate
          is insignificant. Optimum temperature for respiration is 20 - 30oC.
        </li>
        <li>
          Carbon dioxide concentration: The higher the carbon dioxide
          concentration, the lower the rate of respiration. Increase in carbon
          dioxide concentration and absence of oxygen adversely affects the rate
          of aerobic respiration.
        </li>
        <li>
          Water: The respiratory rate increases with the increase in water
          content of the respiring organism.
        </li>
        <li>
          Light: Light controls respiration by raising the temperature of an
          organism.
        </li>
      </ul>

      <p>
        Respiration in plants can be studied in moist germinating seeds that
        release carbon dioxide (CO2) during respiration. The seeds are kept in
        an air tight conical flask. A small test tube containing potassium
        hydroxide (KOH) solution is placed in the flask. Potassium hydroxide
        absorbs carbon dioxide released by the seeds and a partial vacuum is
        created in the flask as a result. This causes the water level in the
        delivery tube to rise. Thus the rise in water level at the end of the
        delivery tube dipping in the beaker proves that germinating seeds
        release carbon dioxide during respiration. In the case of mustard and
        bean seeds the rise in water level is relatively less because these
        seeds use fat and proteins as respiratory substrate and release very
        small amount of carbon dioxide. But in the case wheat grains the rise in
        water level is more because it uses carbohydrate as respiratory
        substrate.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          Students understand the terms respiration and respiratory quotient.
        </li>
        <li>
          Students understand the dependency of respiratory quotient on
          different respiratory substances.
        </li>
        <li>
          Students understand the factors affecting the rate of respiration.
        </li>
        <li>
          Students do the experiment better in the real lab having gone through
          the animation and simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Rate of Respiration. Retrieved 5 April
          2021, from amrita.olabs.edu.in/?sub=79&brch=17&sim=204&cnt=1
        </Typography>
      </div>
    </div>
  );
}
