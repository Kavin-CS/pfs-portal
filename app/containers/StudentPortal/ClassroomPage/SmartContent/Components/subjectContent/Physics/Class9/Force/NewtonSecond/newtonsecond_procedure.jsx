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
import NewtonSecondPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonSecond1/newtonsecond-pro1.png';


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

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>
        <br />
        Materials Required:
      </h1>

      <p>
        <img
          alt=""
          src={NewtonSecondPro1}
        />
        <br />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Real Lab Procedure&nbsp;</h1>

      <p>
        1. Arrange the apparatus as shown in figure.
        <br />
        2. A suitable mass is hung on the weight hanger.
        <br />
        3. Release the weight on the weight hanger.
        <br />
        4. Start the timer to record the time of travel of the cart as it starts
        moving.
        <br />
        5. Note the distance moved and the time taken by the cart.
        <br />
        6. Calculate the acceleration of the object by equation a= 2S/t2.
        <br />
        7. Calculate M2g and (M1+M<sub>2</sub>)a.
        <br />
        8. Hence Newton’s Second Law is verified.
      </p>

      <h1 className={classes.headTag}>Simulator procedure:</h1>

      <p>
        1. The simulation can be performed in three different environments
        –Earth, Uranus and Jupiter. To do this, choose any one of the above
        environments from the drop down box, ‘Select the environment’.
        <br />
        2. Select the desired vertical mass, M<sub>2</sub> and Cart mass, M
        <sub>1</sub> using respective slider.
        <br />
        3. Also select the desired distance by moving the slider.
        <br />
        4. Now, Click on the “Start” button to start the experiment.
        <br />
        5. Observe the time and note it down.
        <br />
        6. Using the time and distance calculate the acceleration of the object.
        <br />
        7. Also find M<sub>2</sub>g and (M1+M2)a separately.
        <br />
        8. Hence Newton’s Second Law is verified.
      </p>

      <h1 className={classes.headTag}>Observation:</h1>

      <p>
        <br />
        Vertical Mass, M<sub>2</sub> (g) Cart Mass, M<sub>1</sub> (g) Distance
        travelled by the cart, S (cm) Time, t (s) Acceleration of the object, a=
        2S/t<sup>2</sup> (m/s<sup>2</sup>)
      </p>

      <p>
        Calculation:
        <br />
        F= M<sub>2</sub>g<br />M<sub>2</sub>=……………………..g
        <br />M<sub>2</sub>= ……………………….Kg
        <br />
        =…………………kg m/s<sup>2</sup>
        <br />
        F= (M<sub>1</sub>+M<sub>2</sub>)a
        <br />
        (M<sub>1</sub>+M<sub>2</sub>) =………………….g
        <br />
        (M1+M<sub>2</sub>) =………………….kg
      </p>

      <h1 className={classes.headTag}>Result:</h1>

      <p>
        Calculate M2g and (M<sub>1</sub>+M<sub>2</sub>)a. It is found to be
        same. Hence Newton’s Second Law of Motion is verified.
      </p>

      <p>
        <strong>
          Try out the experiment and see if you can verify Newton’s Second Law!
        </strong>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Verification of Newton's Second Law.
          Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=44&cnt=2
        </Typography>
      </div>
    </div>
  );
}
