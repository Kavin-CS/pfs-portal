import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import RefractiveIndexThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-the1.jpg';
import RefractiveIndexThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-the2.png';
import RefractiveIndexThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-the3.jpg';
import RefractiveIndexThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-the4.png';
import RefractiveIndexThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractiveIndex1/refind-the5.png';

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
        To determine the refractive index of a liquid using convex lens by
        parallax method.
      </p>

      <h1 className={classes.headTag}>The Theory:</h1>

      <p>
        <img alt="" src={RefractiveIndexThe1} />
      </p>

      <p>
        In optics, the refractive index or index of refraction n of a material
        is a dimensionless number that describes how light propagates through
        that medium. It is defined as:
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        n = c/v
      </p>

      <p>
        where,&nbsp; c is the speed of light in vacuum and v is the phase
        velocity of light in the medium. For example, the refractive index of
        water is 1.333, meaning that light travels 1.333 times faster in a
        vacuum than it does in water.
      </p>

      <p>
        The refractive index determines how much light is bent, or refracted,
        when entering a material. When light moves from one medium to another,
        it changes its direction, i.e., it is refracted.
      </p>

      <p>
        If i is the angle of incidence of a ray in vacuum and r is the angle of
        refraction, the refractive index n is defined as the ratio of the sine
        of the angle of incidence to the sine of the angle of refraction.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <img
          alt=""
          src={RefractiveIndexThe2}
        />
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>

      <p>
        <img alt="" src={RefractiveIndexThe3} />
      </p>

      <p>
        When a convex lens is placed over some drops of the given liquid on a
        plane mirror, a plano-concave liquid lens is formed between the lens and
        the mirror.
      </p>

      <p>
        &nbsp;If f<sub>1</sub> is the focal length of the convex lens and F is
        the focal length of the combination of convex lens and plano-concave
        liquid lens, the focal length of the liquid lens f<sub>2</sub> is given
        by,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={RefractiveIndexThe4}
        />
      </p>

      <p>
        If R is the radius curvature of the face of the convex lens which is in
        contact with the liquid, then the refractive index of the liquid is,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={RefractiveIndexThe5}
        />
      </p>

      <h1 className={classes.headTag}>Learning outcomes:</h1>

      <ul>
        <li>
          Students understand the terms refractive index and plano–concave
          liquid lens.
        </li>
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
          amrita.olabs.edu.in,. (2016). Refractive Index of a Liquid. Retrieved
          22 March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=247&cnt=1
        </Typography>
      </div>
    </div>
  );
}
