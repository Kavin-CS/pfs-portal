import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import BeamThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Beam1/beam-the1.jpg';
import BeamThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Beam1/beam-the2.png';
import BeamThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Beam1/beam-the3.png';


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
        To find the mass of the given body by sensibility method, using a beam
        balance.&nbsp;
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        The beam balance is a device used for the determination of the mass of a
        body under gravitation.&nbsp;&nbsp;
      </p>

      <p>
        <img alt="" src={BeamThe1} />
      </p>

      <p>
        It consists of a&nbsp;beam supported at the centre by an agate knife
        edge resting on a support moving&nbsp;inside a vertical pillar. The beam
        carries a light pointer which moves over a scale. There are
        two&nbsp;stirrups at the ends of the beam which carries two scale pans
        of equal masses along with adjusting&nbsp;nuts. These can be adjusted to
        make the pointer &nbsp;oscillate within the scale when the balance
        is&nbsp;raised. The balance is mounted on a platform provided with three
        leveling screws which make the&nbsp;pillar vertical. There is a plumb
        line which shows whether the pillar is vertical or not.&nbsp;The balance
        is enclosed in a glass case in order to avoid disturbances due to air.
      </p>

      <p>Correct mass of the body using the beam balance,&nbsp;</p>

      <p>
        <img
          alt=""
          src={BeamThe2}
        />
        ------------------------(1)
        <br />
        &nbsp;
        <br />
        Where,
        <br />
        W &nbsp; - Mass in the pan
        <br />R<sub>0</sub> - Zero resting point
        <br />
        R &nbsp; - Resting point with the body counter-poised with weight
        W&nbsp;
        <br />
        S &nbsp; - Sensibility of the balance.&nbsp;
        <br />
        The sensibility S, the weight required to shift the resting point by one
        division is calculated from the equation,
        <br />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={BeamThe3}
        />
      </p>

      <p>
        R<sub>1</sub> – Resting point with 10 mg in the right pan
      </p>

      <h1 className={classes.headTag}>Learning outcomes</h1>

      <ul>
        <li>Students able to know the working principle of beam balance.</li>
        <li>Students learn about the sensibility of beam balance.</li>
      </ul>


      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Beam Balance. Retrieved 23 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=185&cnt=1
        </Typography>
      </div>
    </div>
  );
}
