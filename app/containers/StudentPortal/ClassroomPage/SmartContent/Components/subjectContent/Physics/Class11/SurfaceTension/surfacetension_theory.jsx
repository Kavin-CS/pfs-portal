import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SurfaceTensionThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-the1.jpg';
import SurfaceTensionThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-the2.jpg';
import SurfaceTensionThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-the3.jpg';
import SurfaceTensionThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/SurfaceTension1/surface-the4.png';

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
        To determine the surface tension of a liquid by capillary rise method.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>
        How do you define surface tension?
      </h2>

      <p>
        Surface tension is the property of a liquid, by virtue of which its free
        surface at rest behaves like an elastic skin or a stretched rubber
        membrane, with a tendency to contract so as to occupy minimum surface
        area. This property is caused by cohesion of molecules and is
        responsible for much of the behaviors of liquids.
      </p>

      <p>
        The property of surface tension is revealed, for example, by the ability
        of some objects to float on the surface of water, even though they are
        denser than water. &nbsp;Surface tension is also seen in the ability of
        some insects, such as water striders, and even reptiles like basilisk,
        to run on the water’s surface.&nbsp;
      </p>

      <p style={{ display: 'flex' }}>
        &nbsp; &nbsp;
        <img alt="" width="343" src={SurfaceTensionThe1} height="222" />
        &nbsp; &nbsp; &nbsp;
        <img
          width="383"
          alt=""
          src={SurfaceTensionThe2}
          height="222"
          style={{ marginLeft: '48px' }}
        />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        The Theory Behind Surface Tension
      </h2>

      <p>
        Surface tension has been well- explained by the molecular theory of
        matter. According to this theory, cohesive forces among liquid molecules
        are responsible for the phenomenon of surface tension. The molecules
        well inside the liquid are attracted equally in all directions by the
        other molecules. The molecules on the surface experience an inward
        pull.&nbsp;
      </p>

      <p>
        <img alt="" src={SurfaceTensionThe3} />
      </p>

      <p>
        So, a network is formed against the inward pull, in order to move a
        molecule to the liquid surface. &nbsp;It results in a greater potential
        energy on surface molecules. In order to attain minimum potential energy
        and hence stable equilibrium, the free surface of the liquid tends to
        have the minimum surface area and thereby it behaves like a stretched
        membrane.
      </p>

      <p>
        Surface tension is measured as the force acting normally per unit length
        on an imaginary line drawn on the free liquid surface at rest. It is
        represented by the symbol T (or S). It's S.I. The unit is Nm
        <sup>-1</sup> and dimensional formula is M<sup>1</sup>L<sup>0</sup>T
        <sup>-2.</sup>&nbsp;
      </p>

      <h2 className={classes.secondaryTag}>Capillarity in Liquids</h2>

      <p>
        When a capillary tube is dipped in a liquid, the liquid level either
        rises or falls in the capillary tube. &nbsp;The phenomena of rise or
        fall of a liquid level in a capillary tube is called capillarity or
        capillary action.&nbsp;
      </p>

      <h1 className={classes.headTag}>
        <em fontWeight="normal">
          How do we define the surface tension of a liquid through the capillary
          rise method?
        </em>
      </h1>

      <p>
        When a liquid rises in a capillary tube, the weight of the column of the
        liquid of density ρ inside the tube is supported by the upward force of
        surface tension acting around the circumference of the points of
        contact.
      </p>

      <p>Thus, surface tension;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img alt="" src={SurfaceTensionThe4} />
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;Where, &nbsp;h - height of the liquid column above the
        liquid meniscus
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ρ - Density of the liquid
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;r - Inner radius of the
        capillary tube
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; θ - Angle of contact&nbsp;
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>
          Students understand the theory of the surface tension of liquids.
        </li>
        <li>
          Students correlate the property of surface tension with different
          natural phenomena.
        </li>
        <li>Students understand the concept of capillarity in liquids.</li>
        <li>
          They are able to relate surface tension and capillarity.&nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Surface Tension. Retrieved 24 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=224&cnt=554
        </Typography>
      </div>
    </div>
  );
}
