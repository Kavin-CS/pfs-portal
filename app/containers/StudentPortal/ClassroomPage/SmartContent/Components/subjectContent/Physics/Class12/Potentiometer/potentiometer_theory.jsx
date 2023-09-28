import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

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
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        To measure the internal resistance of a given primary cell using
        potentiometer.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>Potentiometer</h2>

      <p>
        Potentiometer is a device used to measure the internal resistance of a
        cell, to compare the e.m.f. of two cells and potential difference across
        a resistor. It consists of a long wire of uniform cross sectional area
        and of 10 m in length. The material of wire should have a high
        resistivity and low temperature coefficient. &nbsp;The wires are
        stretched parallel to each other on a wooden board. The wires are joined
        in series by using thick copper strips. A metre scale is also attached
        on the wooden board.
      </p>

      <p>
        It works on the principle that when a constant current flows through a
        wire of uniform cross sectional area, potential difference between its
        two points is directly proportional to the length of the wire between
        the two points.&nbsp;
      </p>

      <p>
        <strong>
          Relation between e.m.f., potential difference, and internal resistance
          of a cell
        </strong>
      </p>

      <p>
        If a cell of emf E and internal resistance r, connected to an external
        resistance R, then the circuit has the total resistance (R+r). The
        current I in the circuit is given by,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1513333288_potentiometer_theory1.png"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; or&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1513333300_potentiometr_theory2.png"
        />
      </p>

      <p>
        &nbsp;Hence,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1513333312_potentiometer_theory3.png"
        />
      </p>

      <p>
        This means, V is less than E by an amount equal to the fall of potential
        inside the cell due to its internal resistance.
      </p>

      <p>From the above equation,&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1514608868_CodeCogsEqn-(1).jpg"
        />
      </p>

      <p>Or;&nbsp;&nbsp; The internal resistance of the cell,&nbsp;&nbsp;</p>

      <p>&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1513333426_potentiometer_theory5.png"
        />
        &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        Using a potentiometer, we can adjust the rheostat to obtain the
        balancing lengths l<sub>1</sub> and l<sub>2</sub> of the potentiometer
        for open and closed circuits respectively.&nbsp;
      </p>

      <p>
        <img
          alt=""
          src="http://www.olabs.edu.in/userfiles/1/1601371999_pot1a.jpg"
        />
      </p>

      <p>
        Then, E= k l<sub>1</sub> &nbsp; and &nbsp; V = k l<sub>2</sub> &nbsp;;
        where k is the potential gradient along the wire.&nbsp;
      </p>

      <p>
        Now we can modify the equation for getting the internal resistance of
        the given cell, by using the above relations as;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1513333536_potentiometr_theory6.png"
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students get the idea of potentiometer apparatus and its parts.</li>
        <li>
          Students are able to construct circuits based on circuit diagrams.
        </li>
        <li>
          Students understand the different component used in the experiment.
        </li>
      </ul>

      <p>&nbsp;</p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=1
        </Typography>
      </div>
    </div>
  );
}
