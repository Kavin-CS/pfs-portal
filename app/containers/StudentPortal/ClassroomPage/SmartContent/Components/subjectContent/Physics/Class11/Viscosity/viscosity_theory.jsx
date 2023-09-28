import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ViscosityThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-the1.png';
import ViscosityThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-the2.png';
import ViscosityThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-the3.png';
import ViscosityThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Viscosity1/viscosity-the4.png';


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
        To determine the coefficient of viscosity of a given viscous liquid by
        measuring terminal velocity of a given spherical body.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>How do you define viscosity?</h2>

      <p>
        &nbsp;Viscosity is the property of a fluid by virtue of which an
        internal resistance comes into play when the liquid is in motion, and
        opposes the relative motion between its different layers. Thus, it is
        the resistance of a fluid to flow.
      </p>

      <p>
        When liquid flows over flat surface, a backward viscous force acts
        tangentially to every layer. This force depends upon the area of the
        layer, velocity of the layer, and the distance of the layer from the
        surface.&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          alt=""
          src={ViscosityThe1}
        />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          alt=""
          src={ViscosityThe2}
        />
        &nbsp; &nbsp; &nbsp; &nbsp; Where η&nbsp;is the{' '}
        <em fontWeight='normal'>
          <strong>coefficient of viscosity</strong>
        </em>{' '}
        of the liquid.
      </p>

      <h2 className={classes.secondaryTag}>&nbsp;&nbsp;Stoke’s Law</h2>

      <p>
        Stoke’s law was established by an English scientist Sir George G Stokes
        (1819-1903).&nbsp;
      </p>

      <p>
        When a spherical body moves down through an infinite column of highly
        viscous liquid, it drags the layer of the liquid in contact with it. As
        a result, the body experiences a retarding force.&nbsp;
      </p>

      <p>Then according to Stokes law, the viscous drag force,&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;
        <img
          alt=""
          src={ViscosityThe3}
        />
        &nbsp;,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; where, &nbsp;r - Radius of the spherical body
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp;v - Velocity of the spherical body&nbsp;
      </p>

      <p>
        It gives the relationship between retarding force and velocity. When
        viscous force plus buoyant force becomes equal to force due to gravity,
        the net force becomes zero. The sphere then descends with a constant
        terminal velocity (v&nbsp;<sub>t</sub>).
      </p>

      <p>Now, &nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src={ViscosityThe4}
        />
        &nbsp;&nbsp;
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;where,
        &nbsp;ρ&nbsp;- Density of the liquid
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; σ&nbsp;- Density of the
        spherical body &nbsp; &nbsp;
      </p>

      <h1>&nbsp;</h1>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students understand the behavior and properties of fluids</li>
        <li>Students get the knowledge about viscosity of liquids.</li>
        <li>
          Students understand the quantity, coefficient of viscosity and the
          various factors affecting its value.
        </li>
        <li>Students get the concept of terminal velocity.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Viscosity of a liquid - Stoke's method.
          Retrieved 24 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=225&cnt=1
        </Typography>
      </div>
    </div>
  );
}
