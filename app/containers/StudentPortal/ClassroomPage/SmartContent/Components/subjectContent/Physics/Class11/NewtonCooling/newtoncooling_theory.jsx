import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import NewtonCoolingThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonCooling1/newtoncool-the1.png';
import NewtonCoolingThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonCooling1/newtoncool-the2.png';
import NewtonCoolingThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonCooling1/newtoncool-the3.png';
import NewtonCoolingThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonCooling1/newtoncool-the4.png';
import NewtonCoolingThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonCooling1/newtoncool-the5.png';
import NewtonCoolingThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonCooling1/newtoncool-the6.jpg';

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
    fontSize: 17,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        To study the relationship between the temperature of a hot body and its
        time of cooling by plotting a cooling curve.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        This<strong>&nbsp;Law of Cooling</strong> is named after the famous
        English Physicist Sir Isaac Newton, who conducted the first experiments
        on the nature of cooling.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>Statement of the Law :</em>
      </h2>

      <p>
        According to Newton’s Law of Cooling, the rate of cooling of a body is
        directly proportional to the difference in temperatures of the body (T)
        and the surrounding (T<sub>0</sub>), provided difference in temperature
        should not exceed by 30<sup>0</sup>C.
      </p>

      <p>From the above statement,</p>

      <p>
        <img
          alt=""
          src={NewtonCoolingThe1}
        />
      </p>

      <p>
        For a body of mass m, specific heat s, and temperature T kept in
        surrounding of temperature T<sub>0</sub>;
      </p>

      <p>
        <img
          alt=""
          src={NewtonCoolingThe2}
        />
      </p>

      <p>Now, the rate of cooling,</p>

      <p>
        <img
          alt=""
          src={NewtonCoolingThe3}
        />
      </p>

      <p>Hence ,</p>

      <p>
        <img
          alt=""
          src={NewtonCoolingThe4}
        />
      </p>

      <p>
        Since the mass and the specific heat of the body are taken as constants,
        the rate of change of temperature with time can be written as,
      </p>

      <p>
        <img
          alt=""
          src={NewtonCoolingThe5}
        />
      </p>

      <p>
        The above equation explains that, as the time increases, the difference
        in temperatures of the body and surroundings decreases and hence, the
        rate of fall of temperature also decreases.
      </p>

      <p>It can be graphically represented as,</p>

      <p>
        <img alt="" src={NewtonCoolingThe6} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students understand the different modes of transfer of heat.</li>
        <li>
          Students identify the variables which affect the cooling rate of a
          substance.
        </li>
        <li>Students verify Newton’s Law of Cooling.</li>
        <li>
          Students understand the relationship between temperature and time of
          cooling of objects.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Newton's Law of Cooling(Thermal
          Radiation). Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=21&cnt=1
        </Typography>
      </div>
    </div>
  );
}
