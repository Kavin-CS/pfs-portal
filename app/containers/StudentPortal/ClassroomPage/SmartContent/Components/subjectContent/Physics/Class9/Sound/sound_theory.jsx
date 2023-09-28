import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SoundThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Sound1/sound-the1.jpg';


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

      <p>To verify the laws of reflections of sound.</p>

      <h1>
        <img alt="" src={SoundThe1} />
      </h1>

      <h1>&nbsp;</h1>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What is reflection?</h2>

      <p>
        Reflection is the change in direction of a wavefront at an interface
        between two different media so that the wavefront returns into the
        medium from which it originated. Common examples include the reflection
        of light, sound and water waves.
      </p>

      <h2 className={classes.secondaryTag}>Do you know how sound propagates?</h2>

      <p>
        Sound propagates through air as a longitudinal wave. The speed of sound
        is determined by the properties of the air, and not by the frequency or
        amplitude of the sound.&nbsp; If a sound is not absorbed or transmitted
        when it strikes a surface, it is reflected. The law for reflection is
        the same as that of light, ie., the angle of&nbsp;incidence&nbsp;of a
        sound wave&nbsp;equals the angle of reflection, just as if it were
        produced by a 'mirror image' of the stimulus on the opposite side of the
        surface.
      </p>

      <h2 className={classes.secondaryTag}>How do we describe the reflection of sound?</h2>

      <p>
        When sound travels in a given medium, it strikes the surface of another
        medium and&nbsp;bounces back in some other direction, this phenomenon is
        called the reflection of sound. The waves are called the incident and
        reflected sound waves.
      </p>

      <h2 className={classes.secondaryTag}>What are incident and reflected sound waves?</h2>

      <p>
        The sound waves that travel towards the reflecting surface are called
        the incident sound waves. The sound waves bouncing back from the
        reflecting surface are called reflected sound waves. For all practical
        purposes, the point of incidence and the point of reflection are the
        same point on the reflecting surface.
      </p>

      <p>
        A perpendicular drawn on the point of incidence is called the normal.
        The angle which the incident sound waves makes with the normal is called
        the angle of incidence, "i". The angle which the reflected sound waves
        makes with the normal is called the angle of reflection, "r".
      </p>

      <h2 className={classes.secondaryTag}>Let’s look at the two laws of reflection</h2>

      <p>
        The following two laws of reflection of light are applicable to sound
        waves as well:
      </p>

      <ul>
        <li>
          The incident wave, the normal to the reflecting surface and the
          reflected wave at the point of incidence lie in the same plane.
        </li>
        <li>
          The angle of incidence ∠i is equal to the angle of
          reflection&nbsp;∠r.&nbsp;&nbsp;
        </li>
      </ul>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <p>
        Student will understand the First and Second Laws of Reflection.
        <br />
        <br />
        <strong>First Law of Reflection</strong>:{' '}
        <em fontWeight='normal'>
          The incident wave, the reflected wave, and the normal at the point of
          incidence lie on the same plane.
        </em>
        <br />
        &nbsp;
        <br />
        <strong>Law of Reflection</strong>:{' '}
        <em fontWeight='normal'>The angle of incidence is equal to the angle of reflection.</em>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Laws of Reflection of Sound. Retrieved
          26 March 2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=1&cnt=1
        </Typography>
      </div>
    </div>
  );
}
