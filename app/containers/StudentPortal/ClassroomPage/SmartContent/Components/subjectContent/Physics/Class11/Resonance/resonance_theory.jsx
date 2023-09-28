import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ResonanceThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the1.jpg';
import ResonanceThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the2.jpg';
import ResonanceThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the3.jpg';
import ResonanceThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the4.jpg';
import ResonanceThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the5.png';
import ResonanceThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the6.png';
import ResonanceThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the7.png';
import ResonanceThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the8.png';
import ResonanceThe9 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the9.png';
import ResonanceThe10 from '../../../../../../../../../assets/Images/Subjects/Physics/Resonance1/resonance-the10.png';


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
        To find the velocity of sound in air at room temperature using the
        resonance column by determining two resonance positions. Also find the
        velocity of sound in air at 0<sup>0</sup>C.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>Stationary waves&nbsp;</em>
      </h2>

      <p>
        <em fontWeight='normal'>
          <strong>
            <img alt="" src={ResonanceThe1} />
          </strong>
        </em>
      </p>

      <p>&nbsp;</p>

      <p>
        Stationary waves are produced by the superposition of two waves of same
        frequency and amplitude travelling with same velocity in opposite
        directions. Due to the constructive interference, these waves produce
        certain fixed points along the medium which undergo zero displacement.
        These points of no displacement are known as <strong>nodes</strong>.
        Midway between every nodes are regions of maximum displacement. These
        points are called <strong>antinodes</strong>.
      </p>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>Production of longitudinal stationary waves in air column</em>
      </h2>

      <p>
        <em fontWeight='normal'>
          <strong>
            <img alt="" src={ResonanceThe2} />
          </strong>
        </em>
      </p>

      <p>
        Standing waves can be formed in a tube of air due to the interference of
        longitudinal sound waves travelling in opposite directions. In a pipe
        closed at one end, the closed end is a displacement node and the open
        end is a displacement antinode.&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>
        <em fontWeight='normal'>About Resonance column apparatus</em>
      </h2>

      <p>
        Vibration of air column can be set up in a resonance column apparatus.
        It consists of a long metal tube held vertically in a tall jar
        containing the water. The tube can be fixed in vertical position. The
        length of the air column can be varied by raising or lowering the tube.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img alt="" src={ResonanceThe3} />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={ResonanceThe4} />
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </p>

      <p>
        Here, the surface of water will act as the closed end. When a vibrated
        tuning fork is held above the open end, longitudinal waves are sent down
        the air column. These waves are reflected at the water surface and thus
        produce standing waves. Nodes are produced at the water surface and
        antinodes are produced at the open end.&nbsp;
      </p>

     

      <p>
        When the frequency of waves in the air column becomes equal to the
        natural frequency of tuning fork, a loud sound is produced in the air
        column. It is the condition for resonance. It occurs only when the
        length of air column is proportional to one-fourth of the wavelength of
        sound waves having frequency equal to frequency of tuning fork.&nbsp;
      </p>

      <p>&nbsp;ie; &nbsp; For first resonance,&nbsp;&nbsp;&nbsp;&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
        <img
          alt=""
          src={ResonanceThe5}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
      </p>

      <p>&nbsp; &nbsp; &nbsp; &nbsp;For second resonance,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
        <img
          alt=""
          src={ResonanceThe6}
        />
        &nbsp;
      </p>

      <p>From the above equations we get the relation,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={ResonanceThe7}
        />
      </p>

      <p>
        Thus the velocity of sound waves on air at room temperature can be found
        as,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;{' '}
        <img
          alt=""
          src={ResonanceThe8}
        />
        &nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ie;{' '}
        <img
          alt=""
          src={ResonanceThe9}
        />
        &nbsp; &nbsp;which can be calculated.
      </p>

      <p>
        If v be the velocity of sound in air at temperature t°C, then the
        velocity of sound at 0<sup>°</sup>C can be calculated as,&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp
        <img
          alt=""
          src={ResonanceThe10}
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the concept of standing waves and the various
          terms related to them.
        </li>
        <li>
          Students learn the relation between frequency, wavelength and velocity
          of a wave.
        </li>
        <li>Students understand transverse and longitudinal waves.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Resonance Column. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=36&cnt=1
        </Typography>
      </div>
    </div>
  );
}
