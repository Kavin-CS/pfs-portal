import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import FrictionThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the1.jpg';
import FrictionThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the2.png';
import FrictionThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the3.png';
import FrictionThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the4.png';
import FrictionThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the5.png';
import FrictionThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the6.png';
import FrictionThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the7.png';
import FrictionThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the8.png';
import FrictionThe9 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the9.png';
import FrictionThe10 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the10.png';
import FrictionThe11 from '../../../../../../../../../assets/Images/Subjects/Physics/Friction1/friction-the11.png';


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
      <h1 className={classes.headTag}>Objectives</h1>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1.&nbsp;&nbsp; &nbsp;To study the
        relationship between force of limiting friction and normal
        reaction.&nbsp;
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2.&nbsp;&nbsp; &nbsp;To find the
        co-efficient of friction between a block and a horizontal surface.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;When one body
        makes an attempt to slide over another body, an opposing force called
        the force of friction arises as a reaction to the applied force, and
        acts in the opposite direction.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Static friction is the type of
        friction that exists when two objects touch each other at rest. It has a
        limiting value called limiting friction, which is equal to the least
        force required to move the body from rest. When the external force F is
        increased, a stage comes when the body is just at the verge of moving.
        At this stage, the force of friction is at the maximum, and is
      </p>

      <p>
        <strong>
          <img alt="" src={FrictionThe1} />
        </strong>
      </p>

      <p>
        called <strong>limitin</strong>
        <strong>g friction.</strong>
      </p>

      <p>It is found experimentally that limiting frictional force,</p>

      <p>
        <img
          alt=""
          src={FrictionThe2}
        />
      </p>

      <p>
        where &nbsp;
        <img
          alt=""
          src={FrictionThe3}
        />
        &nbsp;is called the coefficient of static friction. It is a
        dimensionless constant, but depends on the nature of surfaces in
        contact.
      </p>

      <p>
        When the applied force, F, is increased further (beyond the limiting
        frictional force), the body begins to move, then the force opposing the
        motion is called the <strong>kinetic or sliding friction</strong>. The
        kinetic friction is less than the limiting friction. The force of
        kinetic friction{' '}
        <img
          alt=""
          src={FrictionThe4}
        />
        &nbsp;where{' '}
        <img
          alt=""
          src={FrictionThe5}
        />
        &nbsp;is called the coefficient of kinetic friction.
        <br />
        &nbsp;
      </p>

      <p>
        &nbsp;
        <img
          alt=""
          src={FrictionThe6}
          
        />
      </p>

      <h3 className={classes.secondaryTag}>The Laws of Static Friction are:</h3>

      <p>
        i. &nbsp;The magnitude of limiting friction depends upon the nature and
        state of polish of the two surfaces in contact.
        <br />
        ii. The magnitude of limiting friction is independent of area and shape
        of surfaces in contact as long as the normal reaction &nbsp;
        &nbsp;remains the same.
        <br />
        iii. The magnitude of limiting friction 'F' is directly proportional to
        normal reaction 'R' between the two surfaces in contact.
        <br />
        &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src={FrictionThe7}
        />
      </p>

      <p>
        &nbsp; &nbsp;
        <img
          alt=""
          src={FrictionThe8}
        />
      </p>

      <p>
        where{' '}
        <img
          alt=""
          src={FrictionThe9}
        />
        &nbsp;is called the coefficient of friction which is a measure of
        friction based on the type of material that are in contact.
      </p>

      <p>
        &nbsp;{' '}
        <img
          alt=""
          src={FrictionThe10}
        />
        &nbsp;The coefficient of friction,&nbsp;
        <img
          alt=""
          src={FrictionThe11}
        />
      </p>

      <p>
        A graph can be drawn with normal reaction, R along X axis and limiting
        friction, F along Y axis and it is a straight line.
      </p>

   

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>Students understand underlying concepts of friction.</li>
        <li>
          They learn about limiting friction, normal reaction and its
          relationship.
        </li>
        <li>They understand coefficient of friction.</li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Friction. Retrieved 23 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=5&sim=191&cnt=1
        </Typography>
      </div>
    </div>
  );
}
