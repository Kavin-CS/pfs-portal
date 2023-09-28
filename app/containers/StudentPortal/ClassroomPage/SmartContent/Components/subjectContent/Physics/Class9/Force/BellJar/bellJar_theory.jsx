import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ohm-content.jpg';
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
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          To demonstrate that sound needs a material medium for its
          propagation.&nbsp;
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <h2 className={classes.secondaryTag}>What is sound?</h2>

        <p>
          Sound is a mechanical wave that needs a material medium like air,
          water, steel, etc., for its propagation. We can describe a sound wave
          by its frequency, wavelength and velocity. The sound wave is a
          longitudinal wave, ie., the particles of the medium vibrate in a
          direction parallel to the direction of the propagation of the wave.
        </p>

        <h2 className={classes.secondaryTag}>
          A sound wave needs a medium to travel
        </h2>

        <p>
          A sound wave travels in the form of a longitudinal wave and it
          requires a material medium for its propagation.&nbsp; Sound always
          originates from some vibrating body. These vibrations are produced by
          tuning forks, drums, bells, the strings of a guitar, etc.
        </p>

        <p>
          Human voice originates from the vibrations of the vocal chords and the
          sound from the musical instruments is due to the vibrations of the air
          columns. In some cases, the vibrating frequency of the source may be
          so very small or so very large that it is not audible to the&nbsp;
          human ear. The audible frequency ranges from 20 Hz to 20 kHz. The
          frequency below 20 Hz is called infrasonic and the frequency above 20
          kHz is called ultrasonic.
        </p>

        <p>
          The bell jar experiment is a common experiment used to demonstrate
          that sound needs a medium to travel.
        </p>

        <h2 className={classes.secondaryTag}>What is a bell jar?</h2>

        <p>
          A bell jar is a laboratory equipment used for creating a vacuum. It is
          so named as its shape is similar to that of a bell. A bell jar is
          placed on a base which is vented to a hose fitting that can be
          connected via a hose to a vacuum pump. By pumping the air out of the
          bell jar, the air pressure inside the jar can be varied.
        </p>

        <h2 className={classes.secondaryTag}>How does the experiment work?</h2>

        <p>
          The experiment is done by placing an electrical bell in the bell jar.
          As the air is pumped out of the sealed bell jar, the sound from the
          bell jar fades. At a particular vacuum, no more sound is heard from
          the bell, but we can see that the hammer continues hitting the gong
          and sound is produced. However, the sound is not audible to our ears
          because of the vacuum inside the jar. This demonstrates that the sound
          wave cannot travel through vacuum. That is, a sound wave needs a
          material medium for its propagation.&nbsp;
        </p>

        <h1 className={classes.headTag}>Learning outcome</h1>

        <p>
          We can infer that sound needs a material medium for its travel.&nbsp;
        </p>

        <p>&nbsp;</p>
      </div>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
        amrita.olabs.edu.in,. (2012). Bell Jar Experiment. Retrieved 3 March 2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=83&cnt=142 
        </Typography>
      </div>
    </div>
  );
}
