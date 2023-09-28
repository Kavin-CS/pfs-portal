import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import PotentiometerCell1 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_theory1.png'
import PotentiometerCell2 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_theory2.png'
import PotentiometerCell3 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_theory3.png'
import PotentiometerCell4 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_theory4.png'
import PotentiometerCell5 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_theory5.png'
import PotentiometerCell6 from '../../../../../../../../../assets/Images/Subjects/Physics/PotentiometerCell/comparisonemf_theory6.png'

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
        To compare the emf’s of two given primary cells using a potentiometer.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>
        <strong>Potentiometer</strong>
      </h2>

      <p>
        Potentiometer is a device used to compare the e.m.f. (electromotive
        force) of two cells, to measure the internal resistance of a cell, and
        potential difference across a resistor. It consists of a long wire of
        uniform cross-sectional area and of 10 m in length. The material of wire
        should have a high resistivity and low temperature coefficient.
        &nbsp;The wires are stretched parallel to each other on a wooden board.
        The wires are joined in series by using thick copper strips. A metre
        scale is also attached on the wooden board.
      </p>

      <p>
        The potentiometer works on the principle that when a constant current
        flows through a wire of uniform cross sectional area, potential
        difference between its two points is directly proportional to the length
        of the wire between the two points.&nbsp;
      </p>

      <h2>
        <strong>Electromotive force (e.m.f) of a cell</strong>
      </h2>

      <p>
        Electromotive force (emf) is a measurement of the energy that causes
        current to flow through a circuit. &nbsp;It is the energy provided by a
        cell or battery per coulomb of charge passing through it. It can also be
        defined as the potential difference across the terminals of a cell, when
        no current flows through it. Electromotive force is also known as
        voltage, and it is measured in volts. Electromotive force is not truly a
        force; rather, it is a measurement of energy per unit charge.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={PotentiometerCell1}
        />
        &nbsp; &nbsp; &nbsp;, where E is the energy and Q is the charge.
      </p>

      <p>
        Using a potentiometer, we can determine the emf of a cell by obtaining
        the balancing length l. &nbsp;Here, the fall of potential along the
        length l of the potentiometer wire is equal to the emf of the cell, as
        no current is being drawn from the cell.&nbsp;
      </p>

      <p>Then,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;{' '}
        <img
          alt=""
          src={PotentiometerCell2}
        />{' '}
        &nbsp; &nbsp; or, &nbsp;{' '}
        <img
          alt=""
          src={PotentiometerCell3}
        />{' '}
        &nbsp;; &nbsp;&nbsp;&nbsp; where k is the potential gradient along the
        wire.
      </p>

      <p>
        Thus it is possible to compare the emf’s of two given cells by measuring
        the respective balancing lengths l<sub>1</sub> and l<sub>2</sub>.
      </p>

      <p>
        ie; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <img
          alt=""
          src={PotentiometerCell4}
        />{' '}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; and &nbsp; &nbsp; &nbsp;{' '}
        <img
          alt=""
          src={PotentiometerCell5}
        />{' '}
        &nbsp; &nbsp;&nbsp;
      </p>

      <p>
        or&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <img
          alt=""
          src={PotentiometerCell6}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the potentiometer apparatus, its parts and how to
          use it.
        </li>
        <li>Students learn the concept of electromotive force in cells.</li>
        <li>
          Students are able to construct circuits based on circuit diagrams.
        </li>
        <li>
          Students understand the different components used in the experiment.
        </li>
      </ul>
      
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The potentiometer- Comparison of emf.
          Retrieved 18 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=231&cnt=1
        </Typography>
      </div>
    </div>
  );
}
