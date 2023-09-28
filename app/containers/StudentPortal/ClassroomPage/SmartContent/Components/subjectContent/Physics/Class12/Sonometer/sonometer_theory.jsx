import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import SonometerThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the1.jpg';
import SonometerThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the2.jpg';
import SonometerThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the3.png';
import SonometerThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the4.png';
import SonometerThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the5.png';
import SonometerThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the6.png';
import SonometerThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the7.png';
import SonometerThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/Sonometer1/sono-the8.jpg';

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
        To determine the frequency of alternating current using a sonometer.
      </p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <p>
        A sonometer is an apparatus used to study the transverse vibrations of
        stretched strings. It is in the form of a hollow wooden rectangular box.
        On the wooden rectangular box there are two bridges and a pulley at one
        end.&nbsp; A wire string is attached to one end of the wooden box, run
        over the bridges and pulley and carries a weight hanger at the free end
        as shown in figure below.
      </p>

      <p>
        <img
          alt=""
          src={SonometerThe1}
          
        />
      </p>

      <p>
        A sonometer is used to determine the frequency of alternating current. A
        step down transformer is used for the determination of frequency of A.C.
        because the voltage of the A.C. mains is 220V, which is dangerous. The
        step down transformer reduces this voltage to 6 volts.
      </p>

      <p>
        The string wire of the sonometer is a non-magnetic metallic wire like
        brass or copper. A horse shoe magnet is placed at the middle of the
        sonometer wire so that the magnetic field is applied perpendicular to
        the sonometer wire in a horizontal plane.
        <br />
        When an alternating current of definite frequency passes through the
        wire there will be interaction between the magnetic field and the
        current carrying conductor. So a force will act on the conductor in a
        direction perpendicular to both the field and the direction of
        current.&nbsp;
      </p>

      <p>
        When A.C. is passing through the conductor, since the current direction
        reverses periodically, the direction of force also reverse periodically
        and hence, the conductor vibrates. Since the current flowing is
        alternating, the wire vibrates with a frequency equal to the frequency
        of A. C. By adjusting the length of the vibrating wire segment, this
        frequency can be made equal to the natural frequency of the wire
        segment. Then the resonance takes place and the wire vibrates with
        maximum amplitude. At this stage, the length of the wire segment is
        called the resonating length and it increases with increase in the mass
        of the suspended weights.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img
          alt=""
          src={SonometerThe2}
          
        />
      </p>

      <p>
        When the length ‘l’ of the sonometer wire vibrates with maximum
        amplitude, the frequency of the applied A.C. is equal to the natural
        frequency of the wire.
      </p>

      <p>
        <img
          alt=""
          src={SonometerThe3}
          
        />
        <br />
        Where T = Mg , the tension of the wire and 'm' is the linear density of
        the wire.
      </p>

      <p>
        <img
          alt=""
          src={SonometerThe4}
          
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={SonometerThe5}
          
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={SonometerThe6}
        />
      </p>

      <p>
        If r is the radius of the wire, and&nbsp; ρ is the density of its
        material, m = πr²ρ
      </p>

      <p>
        The graph between mass (M) of the suspended weights and square of the
        resonating length (l2) by taking M along X-axis and l2 along Y-axis is
        drawn. The graph should be a straight sloping line. The slope of the
        line AB/BC gives the value of M/l<sup>2</sup>, which is a constant.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={SonometerThe7}
          
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={SonometerThe8} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          Students will be able to relate the tension of the wire, linear
          density of the wire and the resonating&nbsp;&nbsp; length of the wire.
        </li>
        <li>
          Students will be able to derive the relationship between frequency of
          alternating current and the resonating length of the wire.
        </li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). AC Sonometer. Retrieved 19 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=6&sim=151&cnt=1
        </Typography>
      </div>

      <p>&nbsp;</p>
    </div>
  );
}
