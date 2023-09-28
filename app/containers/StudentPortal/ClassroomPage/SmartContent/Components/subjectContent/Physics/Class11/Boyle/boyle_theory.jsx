import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import BoyleThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-the1.png';
import BoyleThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-the2.png';
import BoyleThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-the3.png';
import BoyleThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-the4.jpg';
import BoyleThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-the5.png';
import BoyleThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Boyle1/boyle-the6.png';


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
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        To study the variation in volume with pressure for a sample of air at
        constant temperature by plotting graphs between P and V, and between P
        and 1/V.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>Properties of gases and Gas laws</h2>

      <p>
        Gaseous state is a state of matter in which the substance does not have
        any specific shape or volume. It adopts the form and size of its
        container. The fundamental macroscopic properties of gases are pressure,
        volume, temperature and mass of the gas. These can be explained by
        kinetic theory by considering their molecular composition and motion.
        &nbsp;Careful, scientific observation has determined that these
        variables are related to one another, and the values of these properties
        determine the state of the gas.&nbsp;
      </p>

      <p>
        These relationships among pressure, temperature and volume of a gas lead
        to Gas laws. Boyle's Law tells us that the volume of gas increases as
        the pressure decreases. Charles' Law tells us that the volume of gas
        increases as the temperature increases and Avogadro's Law tells us that
        the volume of gas increases as the amount of gas increases. The ideal
        gas law is the combination of the three simple gas laws.
      </p>

      <h3 className={classes.secondaryTag}>Boyle’s Law</h3>

      <p>
        According to Boyle’s Law, the pressure (P) of a given mass of gas is
        inversely proportional to its volume (V), provided that the temperature
        of the gas remains constant.
      </p>

      <p>For an enclosed gas, at constant temperature (T);</p>

      <p>
        <img
          alt=""
          src={BoyleThe1}
        />
      </p>

      <p>
        or,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={BoyleThe2}
        />
      </p>

      <p>
        ie;&nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={BoyleThe3}
        />
      </p>

      <p>
        <img alt="" src={BoyleThe4} />
      </p>

      <p>The quill tube is helpful in verifying Boyle’s law.</p>

      <p>
        Since the volume of gas inside the tube(V) = cross sectional area of the
        tube(a)&nbsp;×&nbsp;length of air column(l),
      </p>

      <p>
        <img
          alt=""
          src={BoyleThe5}
        />
      </p>

      <p>
        So,&nbsp;{' '}
        <img
          alt=""
          src={BoyleThe6}
        />
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ul>
        <li>
          Students learn about the properties of gases and their relationships.
        </li>
        <li>Students understand Boyles law and its applications.</li>
        <li>
          Students understand the relation between pressure and volume of a
          given mass of the gas.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Boyle's Law. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=226&cnt=1
        </Typography>
      </div>
    </div>
  );
}
