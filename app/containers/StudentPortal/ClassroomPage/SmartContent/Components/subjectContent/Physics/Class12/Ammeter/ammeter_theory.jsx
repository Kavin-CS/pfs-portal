import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import AmmeterThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometerAmmeter_theory1.png';
import AmmeterThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Ammeter1/galvanometerAmmeter_theory2.png';

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
      <h1 className={classes.headTag}>Our Objective:</h1>

      <p>
        To convert the given galvanometer (of known resistance and figure of
        merit) into an ammeter of desired range and to verify the same.
      </p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <h2 className={classes.secondaryTag}>What is a Galvanometer?</h2>

      <p>
        A galvanometer is a device used to detect feeble electric currents in a
        circuit.&nbsp; It has a coil pivoted (or suspended) between concave pole
        faces of a strong laminated horse shoe magnet.&nbsp; When an electric
        current passes through the coil, it deflects.&nbsp;&nbsp; The deflection
        is proportional to the current passed. The galvanometer coil has a
        moderate resistance (about 100 ohms) and the galvanometer itself has a
        small current carrying capacity (1 mA).
      </p>

      <h2>What is an Ammeter?</h2>

      <p>
        An ammeter is a device used for measuring large electric currents in
        circuits.&nbsp; For this purpose, it is put in series with the circuit
        in which the current is to be measured.
      </p>

      <h2 className={classes.secondaryTag}>
        How to convert a Galvanometer into an Ammeter?
      </h2>

      <p>
        A galvanometer can detect only small currents.&nbsp; Thus, to measure
        large currents it is converted into an ammeter.&nbsp; It can be
        converted into an ammeter by connecting a low resistance called shunt
        resistance in parallel to the galvanometer.
      </p>

      <p>
        Let G be the resistance of the galvanometer and Ig be the current for
        full scale deflection in the galvanometer, the value of the shunt
        resistance required to convert the galvanometer into an ammeter of 0 to
        I ampere is,
      </p>
      <math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
        {' '}
        <mi>S</mi> <mo>=</mo>{' '}
        <mfrac>
          {' '}
          <mrow>
            {' '}
            <msub>
              {' '}
              <mi>I</mi>{' '}
              <mrow class="MJX-TeXAtom-ORD">
                {' '}
                <mi>g</mi>{' '}
              </mrow>{' '}
            </msub>{' '}
            <mo>×!-- × --</mo> <mi>G</mi>{' '}
          </mrow>{' '}
          <mrow>
            {' '}
            <mi>I</mi> <mo>−!-- − --</mo>{' '}
            <msub>
              {' '}
              <mi>I</mi>{' '}
              <mrow class="MJX-TeXAtom-ORD">
                {' '}
                <mi>g</mi>{' '}
              </mrow>{' '}
            </msub>{' '}
          </mrow>{' '}
        </mfrac>{' '}
      </math>
      <p>
        Ig is calculated using the equation, Ig = nk, where n is the number of
        divisions on the galvanometer and k is the figure of merit of
        galvanometer.
      </p>
      <h2 className={classes.secondaryTag}>
        What is figure of merit of a galvanometer?
      </h2>
      <p>
        The figure of merit of a galvanometer is defined as the current required
        in producing a unit deflection in the scale of the galvanometer.&nbsp;
        It is represented by the symbol k and is given by the equation,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp; <img alt="" src={AmmeterThe1} />
        <br />
        Where E is the e.m.f. of the cell and θ is the deflection produced with
        resistance R.
      </p>

      <p>
        Let ‘l’ be the length of the resistance wire required for a resistance
        of S ohm,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img alt="" src={AmmeterThe2} />
      </p>

      <p>
        where, r is the radius of the wire and ρ is the resistivity of the
        material of the wire.
      </p>
      <h1 className={classes.headTag}>Learning Outcomes:</h1>
      <p>The student learns the following concepts:</p>
      <ul>
        <li>Galvanometer</li>
        <li>Ammeter</li>
        <li>Figure of merit</li>
        <li>Shunt resistance</li>
        <li>
          How a galvanometer can be converted into an ammeter.
          <br />
          &nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Conversion of Galvanometer to Ammeter.
          Retrieved 19 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=26&cnt=1
        </Typography>
      </div>
    </div>
  );
}
