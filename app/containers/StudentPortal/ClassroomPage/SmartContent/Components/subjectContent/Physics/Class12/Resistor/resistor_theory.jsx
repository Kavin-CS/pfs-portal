import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ResistorThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the1.jpg';
import ResistorThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the2.jpg';
import ResistorThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the3.gif';
import ResistorThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the4.jpg';
import ResistorThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the5.gif';
import ResistorThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the6.gif';
import ResistorThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the7.jpg';
import ResistorThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the8.jpg';
import ResistorThe9 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the9.gif';
import ResistorThe10 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the10.gif';
import ResistorThe11 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the11.gif';
import ResistorThe12 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the12.gif';
import ResistorThe13 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the13.gif';
import ResistorThe14 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the14.gif';
import ResistorThe15 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the15.gif';
import ResistorThe16 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the16.gif';
import ResistorThe17 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the17.jpg';
import ResistorThe18 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the18.jpg';
import ResistorThe19 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the19.gif';
import ResistorThe20 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the20.gif';
import ResistorThe21 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the21.gif';
import ResistorThe22 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistor1/resistor-the22.gif';


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

      <p>To verify the laws of resistances in series and parallel.</p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <h2 className={classes.secondaryTag}>Metre Bridge</h2>

      <p>
        The metre bridge, consists of a one metre long wire of uniform cross
        sectional area, fixed on a wooden block. A scale is attached to the
        block. Two gaps are formed on it by using thick metal strips in order to
        make the Wheat stone’s bridge. The terminal B between the gaps is used
        to connect galvanometer and jockey.
      </p>

      <p>
        <img alt="" src={ResistorThe1} />
      </p>

      <p>&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={ResistorThe2} />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        The metre bridge is operates under Wheatstone’s principle. Here, four
        resistors P, Q, R, and S are connected to form the network ABCD.
      </p>

      <p>
        In the balancing condition, there is no deflection on the galvanometer.
        Then,
        <br />
        &nbsp;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="\frac{P}{Q} =\frac{R}{S}"
          src={ResistorThe3}
        />
        <br />A resistance wire is introduced in gap G<sub>1</sub> and the
        resistance box is in gap G<sub>2</sub>. One end of the galvanometer is
        connected to terminal D and its other end is connected to a jockey. As
        the jockey slides over the wire AC, it shows zero deflection at the
        balancing point (null point).
      </p>

      <p>
        <img alt="" src={ResistorThe4} />
      </p>

      <p>&nbsp;</p>

      <p>
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <p>If the length AB is l, then the length BC is ( 100-l ).</p>

      <p>Then, according to Wheatstone’s principle;</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="\frac{X}{R} =\frac{l}{(100-l)}"
          src={ResistorThe5}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        Now, the unknown resistance can be calculated as,
      </p>

      <h2 className={classes.secondaryTag}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="X =\frac{Rl}{(100-l)}"
          src={ResistorThe6}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        Resistors in Series
      </h2>

      <p>
        When two or more resistors are connected such a way that one end of one
        resistor is connected to the starting end of the other, then the circuit
        is called a Series Circuit.
      </p>

      <p>
        <img alt="" src={ResistorThe7}/>
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        When the two resistors X<sub>1</sub> and X<sub>2</sub> are connected in
        series in a circuit, the current I passing through each resistor is
        same.
      </p>

      <p>
        <img alt="" src={ResistorThe8} />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        Using Ohm’s Law, the potential difference V<sub>1</sub> across X
        <sub>1</sub> is:
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="V_{1}=IX_{1}"
          src={ResistorThe9}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="V_{2}=IX_{2}"
          src={ResistorThe10}
        />
        <br />
        Let X<sub>s</sub> be the effective resistance of the two resistors in
        series, and V be the potential difference across the ends.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="V=V_{1}+V_{2}"
          src={ResistorThe11}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="V=IX_{s}"
          src={ResistorThe12}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;{' '}
        <img
          alt="IX_{s}=IX_{1}+IX_{2}"
          src={ResistorThe13}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="IX_{s}=I(X_{1}+X_{2})"
          src={ResistorThe14}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="Hence, \;X_{s}=X_{1}+X_{2}"
          src={ResistorThe15}
        />
      </p>

      <p>
        Thus, when a number of resistors are connected in series, the effective
        resistance is equal to the sum of the individual resistances. This is
        called the law of combination of resistances in series.
      </p>

      <p>
        <img
          alt="i.e, \;X_{s}=X_{1}+X_{2}+X_{3}+X_{4}............+X_{n}"
          src={ResistorThe16}
        />
        <br />
        Adding resistors in series always increases the effective resistance.
      </p>

      <h2>Resistors in Parallel</h2>

      <p>
        If the starting ends of two resistors are joined to a point and the
        terminal ends of the two are combined and given connection to a source
        of electricity,those circuits are called Parallel Circuit.
      </p>

      <p>
        <img alt="" src={ResistorThe17} />
      </p>

      <p>&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
      </p>

      <p>
        When the two resistors X<sub>1</sub> and X<sub>2</sub> are connected in
        parallel in a circuit, the potential difference across X<sub>1</sub> and
        X<sub>2</sub> are the same.
      </p>

      <p>
        <img alt="" src={ResistorThe18} />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <p>Then the current passing through the circuit is,</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="I_{p}=I_{1}+I_{2}"
          src={ResistorThe19}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="i.e,\;\frac{V}{X_{p}} = \frac{V}X_{1}+\frac{V}{X_{2}}"
          src={ResistorThe20}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt="i.e,\;\frac{1}{X_{p}} = \frac{1}X_{1}+\frac{1}{X_{2}}"
          src={ResistorThe21}
        />
        <br />
        If there are ‘n’ number of resistors with different resistances
        connected in parallel, then we have,
      </p>

      <p>
        <img
          alt="i.e,\;\frac{1}{X_{p}} = \frac{1}X_{1}+\frac{1}{X_{2}}+\frac{1}{X_{3}}+\frac{1}{X_{4}}.................+\frac{1}{X_{n}}"
          src={ResistorThe22}
        />
        <br />
        &nbsp;That is, for a set of parallel resistors, the reciprocal of their
        equivalent resistance equals the sum of the reciprocals of their
        individual resistances. Thus, resistance decreases in parallel
        combination.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>The student learns the following concepts:</li>
        <li>Resistance in a circuit.</li>
        <li>
          When two resistors are connected in series, its equivalent resistance
          increases.
        </li>
        <li>Law of combination of resistors connected in series.</li>
        <li>
          When two resistors are connected in parallel, its equivalent
          resistance decreases.
        </li>
        <li>Law of combination of resistors connected in parallel.</li>
      </ul>

     

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Metre bridge- Law of combination of
          resistors. Retrieved 22 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=150&cnt=1
        </Typography>
      </div>
    </div>
  );
}
