import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import VelocityThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-the1.jpg';
import VelocityThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-the2.png';
import VelocityThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-the3.jpg';
import VelocityThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-the4.png';
import VelocityThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Velocity1/velocity-the5.png';


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
        To determine the velocity of a pulse propagated through a slinky or a
        stretched string.
      </p>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is meant by a slinky?</h2>

      <p>
        A slinky is a long helical spring, usually made of steel. It is flexible
        and has appreciable elasticity. It produces transverse waves when one
        end is fixed and the other end is stretched and given a jerk at right
        angle to its length. It produces longitudinal waves when compressions
        are given at regular intervals of time at the free end of the slinky. A
        disturbance which propagates through a medium is called wave.
      </p>

      <h2 className={classes.secondaryTag}>What are longitudinal waves?</h2>

      <p>
        In case of longitudinal waves, the particles of the medium vibrate to
        and fro periodically along the direction of propagation of the wave. It
        consists of alternate compressions and rarefactions. For example, waves
        along a compressed spring are longitudinal waves.
      </p>

      <p>
        <img alt="" src={VelocityThe1} />
      </p>

      <p>
        <br />
        <strong>Wavelength (λ)</strong> of longitudinal waves can be defined as:
        <br />
        The distance covered by one complete rarefaction and one complete
        compression. [Or] The distance between two consecutive compressions or
        rarefactions.
      </p>

      <p>
        <strong>Frequency:</strong>&nbsp; The number of vibrations made by a
        particle in the slinky per unit time (one second) is called its
        frequency. It is denoted by the symbol
        <span
          lang="EN-US"
          new=""
          
          times=""
        >
          υ
        </span>{' '}
        (neu).
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»v«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mn»1«/mn»«mi mathvariant=¨normal¨»T«/mi»«/mfrac»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»or«/mi»«mo»§nbsp;«/mo»«mi»§#957;«/mi»«mi mathvariant=¨normal¨»T«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mn»1«/mn»«/math»"
          class="Wirisformula"
          src={VelocityThe2}
          title="Double click to edit"
        />
      </p>

      <p>
        Where T is the time period which is the time taken to complete one
        wavelength.
      </p>

      <h2 className={classes.secondaryTag}>What are transverse waves?</h2>

      <p>
        When the particles of the medium periodically move up and down,
        perpendicular to the direction of propagation of the wave, it is called
        transverse wave. A transverse wave consists of alternate crests and
        troughs. While the wave disturbance moves in the forward direction, the
        medium particles show upward movement, the topmost position of
        displacement is known as crest. The maximum downward displacement is
        known as trough.
      </p>

      <p>
        <img
          alt=""
          height="94"
          src={VelocityThe3}
          width="373"
        />
      </p>

      <p>The wavelength of a transverse wave can be defined as:</p>

      <p>
        Distance between two consecutive crests (C)&nbsp; or Distance between
        two consecutive troughs (T)&nbsp; or Distance covered by one complete
        crest or one complete trough (T).
      </p>

      <p>
        Transfer waves can easily be produced along a slinky or a rope by
        jerking the free end up and down uniformly.
      </p>

      <p>
        <strong>Wavelength (λ)</strong>
      </p>

      <p>
        The distance travelled by the disturbance during the time period is
        known as wavelength ie., length of a wave. It is denoted by the symbol
        λ. The wavelength is equal to the distance between two consecutive
        crests or troughs (in case of transverse wave).
        <br />
        &nbsp;
        <br />
        <strong>Wave Velocity or Pulse Velocity:&nbsp;</strong> Wave velocity is
        the distance travelled by the wave per second.
      </p>

      <p>
        When the wave travels distance, λ in time T, its velocity v is equal to,
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mtable columnalign=¨left¨ rowspacing=¨0¨»«mtr»«mtd»«mi mathvariant=¨normal¨»Velocity«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»v«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»D«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»s«/mi»«mi mathvariant=¨normal¨»tan«/mi»«mi mathvariant=¨normal¨»c«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»t«/mi»«mi mathvariant=¨normal¨»i«/mi»«mi mathvariant=¨normal¨»m«/mi»«mi mathvariant=¨normal¨»e«/mi»«/mrow»«/mfrac»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»Or«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»v«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mi mathvariant=¨normal¨»§#955;«/mi»«mi mathvariant=¨normal¨»T«/mi»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mfrac»«mn»1«/mn»«mi mathvariant=¨normal¨»T«/mi»«/mfrac»«mi mathvariant=¨normal¨»§#955;«/mi»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»Because«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mfrac»«mn»1«/mn»«mi mathvariant=¨normal¨»T«/mi»«/mfrac»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi»§#957;«/mi»«/mtd»«/mtr»«mtr»«mtd/»«/mtr»«mtr»«mtd»«mi mathvariant=¨normal¨»Therefore«/mi»«mo»,«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»v«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi»§#957;«/mi»«mi mathvariant=¨normal¨»§#955;«/mi»«/mtd»«/mtr»«/mtable»«/math»"
          class="Wirisformula"
          src={VelocityThe4}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»Wave«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»velocity«/mi»«mo»§nbsp;«/mo»«mo»=«/mo»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Wave«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»frequency«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»x«/mi»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»Wavelength«/mi»«/math»"
          class="Wirisformula"
          src={VelocityThe5}
          title="Double click to edit"
        />
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ol start="1" type="1">
        <li>
          As crests and troughs are seen when the free end of the slinky is
          jerked at a right angle to its length, the waves propagated through a
          slinky are transverse waves.
        </li>
        <li>
          As&nbsp;compressions and rarefactions are seen when the free end of
          the slinky is compressed periodically, the waves propagated through a
          slinky are longitudinal waves.
        </li>
      </ol>

      <p a="" an="" do="" experiment="" p="" with="">
        &nbsp;Let us do the experiment with a slinky...
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Velocity of a Pulse Propagated Through a
          Slinky. Retrieved 26 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=1&sim=93&cnt=1
        </Typography>
      </div>
    </div>
  );
}
