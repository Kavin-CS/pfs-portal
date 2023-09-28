import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import SpectrometerThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-the1.png';
import SpectrometerThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-the2.jpg';
import SpectrometerThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-the3.jpg';
import SpectrometerThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-the4.jpg';
import SpectrometerThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Spectrometer1/spectro-the5.png';

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
        (i) To study the angle of deviation (d) with angle of incidence (i) and
        to find the angle of minimum deviation (D) from i-d curve.
      </p>

      <p>
        (ii) To find the refractive index of the material of the prism using A
        and D.
      </p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <h2 className={classes.secondaryTag}>Prism</h2>

      <p>
        A prism is an optical element. It has polished flat surfaces that
        refract light. The traditional geometric shape of a prism has a
        triangular base and two rectangular sides. It is called triangular
        prism.
      </p>

      <p>
        A prism can be made from materials like glass, plastic and fluorite. It
        can be used to split light into its components.
      </p>

      <h2 className={classes.secondaryTag}>How a Prism Works</h2>

      <p>
        When light travels from one medium to another medium, it is refracted
        and enters the new medium at a different angle. The degree of bending of
        the light's path depends on the angle that the incident beam of light
        makes with the surface of the prism, and on the ratio between the
        refractive indices of the two media. This is called Snell's law.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={SpectrometerThe1}
        />
      </p>

      <p>
        where, n is the refractive index of the material of the prism.
        <br />
        i is the angle of incidence.
        <br />r is the angle of refraction.
      </p>

      <p>
        The refractive index of many materials varies with the wavelength of the
        light used. This phenomenon is called dispersion. This causes light of
        different colors to be refracted differently and to leave the prism at
        different angles, creating an effect similar to a rainbow. This can be
        used to separate a beam of white light into its constituent spectrum of
        colors.
      </p>

      <h2 className={classes.secondaryTag}>
        The relation between Refractive Index (n), Angle of Prism (A) and Angle
        of Minimum Deviation (D)
      </h2>

      <p>Consider the following triangular prism.</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <img alt="" src={SpectrometerThe2} />
        <br />
        The angle A between the two refracting surfaces ABFE and ACDE is called
        the angle of prism.
      </p>

      <p>
        A ray of light suffers two refractions on passing through a prism. If KL
        be a monochromatic light falling on the side AB, it is refracted and
        travels along LM. It once again suffers refraction at M and emerges out
        along MN. The angle through which the emergent ray deviates from the
        direction of incident ray is called angle of deviation 'd'.
      </p>

      <p>
        <img alt="" src={SpectrometerThe3} />
      </p>

      <p>
        As the angle of incidence is increased, angle of deviation 'd' decreases
        and reaches minimum value. If the angle of incidence is further
        increased, the angle of deviation is increased.
      </p>

      <p>
        A graph is drawn between angle of incidence (i) and angle of deviation
        (d) by taking angle of incidence (i) along X-axis and angle of deviation
        (d) along Y-axis. It should be a curved graph.
      </p>

      <p>
        <img alt="" src={SpectrometerThe4} />
      </p>

      <p>
        The angle of minimum deviation is obtained from the graph. Let D be the
        angle of minimum deviation, then the refractive index (n) of the
        material of the prism is calculated using the formula,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={SpectrometerThe5}
        />
      </p>

      <h1 className={classes.headTag}>Learning outcomes:</h1>

      <ul>
        <li>Students understand the working of a prism.</li>
        <li>
          Students will be better able to do the experiment in a real laboratory
          by understanding the procedure.
          <br />
          &nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Refraction through a Prism. Retrieved 22
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=246&cnt=1
        </Typography>
      </div>
    </div>
  );
}
