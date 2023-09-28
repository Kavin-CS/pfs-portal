import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import NewtonThirdThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonThird1/newtonthird-the1.jpg';
import NewtonThirdThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonThird1/newtonthird-the2.jpg';
import NewtonThirdThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonThird1/newtonthird-the3.jpg';
import NewtonThirdThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonThird1/newtonthird-the4.jpg';
import NewtonThirdThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonThird1/newtonthird-the5.jpg';
import NewtonThirdThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/NewtonThird1/newtonthird-the6.jpg';


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

      <p>To study the Third Law of Motion using two spring balances.&nbsp;</p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Newton’s Third Law of Motion states: ‘To every action there is an equal
        and opposite reaction’.&nbsp;
      </p>

      <p>
        It must be remembered that action and reaction always act on different
        objects. The Third Law of Motion indicates that when one object exerts a
        force on another object, the second object instantaneously exerts a
        force back on the first object. These two forces are always equal in
        magnitude, but opposite in direction.&nbsp;
      </p>

      <p>
        These forces act on different objects and so they do not cancel each
        other. Thus, Newton’s Third Law of Motion describes the relationship
        between the forces of interaction between two objects.&nbsp;&nbsp;
      </p>

      <p>
        Whenever two bodies interact with each other, the force exerted by the
        first body on the second is called action. The force exerted by the
        second body on the first body is called reaction. The action and
        reaction are equal and opposite.&nbsp;
      </p>

      <p>
        For example, when we placed a wooden block on the ground, this block
        exerts a force equal to its weight, W = mg acting downwards to the
        ground. This is the action force.&nbsp;The ground exerts an equal and
        opposite force W’ = mg on the block in the upward direction. This is the
        reaction force.
      </p>

      <p>
        <img alt="" src={NewtonThirdThe1} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>Applications of Newton’s Third Law of Motion</h2>

      <p>
        1.<b>A gun recoils when a bullet is fired from it</b>: When a bullet is
        fired from a gun, the gun exerts a force on the bullet in the forward
        direction. This is the action force. The bullet also exerts an equal
        force on the gun in the backward direction. This is the reaction force.
        Due to the large mass of the gun it moves only a little distance
        backward by giving a jerk at the shoulder of the gunman. The backward
        movement of the gun is called the recoil of the gun.
      </p>

      <p>&nbsp;</p>

      <p>
        <img alt="" src={NewtonThirdThe2} />
      </p>

      <p>&nbsp;</p>

      <p>
        <b>2.</b>
        <b>A man walking on the ground</b>
      </p>

      <p>
        <b>
          <img alt="" src={NewtonThirdThe3} />
        </b>
      </p>

      <p>
        &nbsp;<b>3.</b>
        <b>Rowing a boat</b>&nbsp;
      </p>

      <p>&nbsp;</p>

      <p>
        <img alt="" src={NewtonThirdThe4} />
      </p>

      <p>&nbsp;</p>

      <p>
        <b>4.</b>
        <b>A person is moving forward during swimming</b>
      </p>

      <p>
        <img alt="" src={NewtonThirdThe5} />
      </p>

      <p>&nbsp;</p>

      <p>
        <b>5.</b>
        <b>Rocket propulsion</b>
      </p>

      <p>
        <img alt="" src={NewtonThirdThe6} />
      </p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <p>The student will understand:</p>

      <ol>
        <li>Action force</li>
        <li>Reaction force</li>
        <li>Newton’s Third Law of Motion.</li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2012). Newton's Third law of Motion. Retrieved
          26 March 2021, from amrita.olabs.edu.in/?sub=1&brch=1&sim=105&cnt=1
        </Typography>
      </div>
    </div>
  );
}
