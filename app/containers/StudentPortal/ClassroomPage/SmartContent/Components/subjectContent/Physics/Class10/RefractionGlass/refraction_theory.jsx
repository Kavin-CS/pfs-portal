import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import RefractionGlassThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractionGlass1/refractionglass-the1.png';
import RefractionGlassThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractionGlass1/refractionglass-the2.gif';
import RefractionGlassThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractionGlass1/refractionglass-the3.jpg';
import RefractionGlassThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractionGlass1/refractionglass-the4.jpg';
import RefractionGlassThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractionGlass1/refractionglass-the5.png';

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
      <h2 className={classes.headTag}>Objective:</h2>

      <p>
        To trace the path of a ray of light passing through a rectangular glass
        slab for different angles of incidence and to measure the angle of
        incidence, angle of refraction and angle of emergence and interpret the
        result.
      </p>

      <h2 className={classes.headTag}>Theory:</h2>

      <p>
        When light travels from one medium to another medium, it generally bends
        or refracts. The law of &nbsp;refraction gives us a way of predicting
        the amount of bend. The law of refraction is also known as Snell's law,
        named after Willobrord Snell, who discovered the law in 1621.
      </p>

      <p>
        Snell's law gives the relationship between{' '}
        <strong>angles of incidence</strong> and <strong>refraction</strong> for
        a wave impinging on an interface between two media with different{' '}
        <strong>indices of refraction</strong>.
      </p>
      <p>
        <img
          alt=""
          
          src={RefractionGlassThe1}
          
        />
      </p>

      <p>
        <img
          alt=""
          height="31"
          src={RefractionGlassThe2}
          width="683"
        />
      </p>

      <h2 className={classes.headTag}>Refraction :</h2>

      <p>
        When we talk about the speed of light, we're usually talking about the{' '}
        <strong>speed of light in a vacuum</strong>, which is{' '}
        <strong>
          3.00 x 10<sup>8</sup> m/s
        </strong>
        . When light travels through something else, such as glass, diamond, or
        plastic, it travels at a different speed. The speed of light in a given
        material is related to a quantity called the index of refraction, n,
        which is defined as the ratio of the speed of light in vacuum to the
        speed of light in the medium:
      </p>

      <p>
        <strong>index of refraction: n = c / v</strong>, where the{' '}
        <strong>speed of light</strong> in a medium is '<strong>v</strong>' and
        '<strong>c</strong>' is the <strong>speed of light</strong> in{' '}
        <strong>vacuum</strong>.
      </p>

      <p>
        <strong>
          <span>
            <img
              alt=""
              src={RefractionGlassThe3}
              
            />
          </span>
        </strong>
      </p>

      <h2 className={classes.headTag}>Rules of refraction:</h2>

      <p>
        <strong>Rule-1:</strong> When a light ray travels from a{' '}
        <strong>rarer medium to a denser medium</strong>, the light ray bends{' '}
        <strong>towards the normal</strong>.
      </p>

      <p>
        <strong>Rule-2:</strong> When a light ray travels from a{' '}
        <strong>denser medium to a rarer medium</strong>, the light ray bends{' '}
        <strong>away from the normal</strong>.
        <b >
          <span> </span>
        </b>
      </p>

      <p>
        <img
          alt=""
          src={RefractionGlassThe4}
          
        />
      </p>

      

      <h2 className={classes.headTag}>Examples of refraction:</h2>

      <p>
        If you place a pencil in a glass of water, you will see that the pencil
        appears to be bent. Now, you know for a fact that the pencil is not bent
        at all, it just appears to be so. This is the effect of refraction of
        light.
      </p>

      <p>
        <img
          alt=""
          height="171"
          src={RefractionGlassThe5}
          width="214"
        />
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study refraction of light in
          rectangular glass slab. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=37&cnt=1
        </Typography>
      </div>
    </div>
  );
}

