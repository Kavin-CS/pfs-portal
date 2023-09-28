import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import SpringThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-the1.jpg';
import SpringThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-the2.png';
import SpringThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-the3.png';
import SpringThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-the4.png';
import SpringThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Spring1/spring-the5.png';


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
      <h1 className={classes.headTag}>&nbsp;Objective</h1>

      <p>
        To find the force constant of a helical spring by plotting a graph
        between load and extension.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>What is a helical spring?</h2>

      <p>
        &nbsp; &nbsp; &nbsp;The helical spring, is the most commonly used
        mechanical spring in which a wire is wrapped in a coil that resembles a
        screw thread. It can be designed to carry, pull, or push loads. Twisted
        helical (torsion) springs are used in engine starters and hinges.&nbsp;
      </p>

      <p>Let’s study how we can use the helical spring to do our experiment.</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The helical spring is suspended
        vertically from a rigid support. The pointer is attached horizontally to
        the free end of
      </p>

      <p>
        <img alt="" src={SpringThe1} />
      </p>

      <p>
        spring. A metre scale is kept vertically in such a way that the tip of
        the pointer is over the divisions of the scale; but does not touch the
        scale.&nbsp;
      </p>

      <p>
        Helical spring works on the principle of Hooke’s Law. Hooke’s Law states
        that within the limit of elasticity, stress applied is directly
        proportional to the strain produced.
      </p>

      <p>
        <img
          alt=""
          src={SpringThe2}
        />
      </p>

      <p>
        <img
          alt=""
          src={SpringThe3}
        />
      </p>

      <p>
        When a load ‘F’ is attached to the free end of a spring, then the spring
        elongates through a distance ‘l’ .Here ‘l’ is known as the extension
        produced. According to Hooke’s Law, extension is directly proportional
        to the load.
      </p>

      <p>This can be represented as:</p>

      <p>
        <img
          alt=""
          src={SpringThe4}
        />
      </p>

      <p>
        <img
          alt=""
          src={SpringThe5}
        />
      </p>

      <p>
        where ‘k’ is constant of proportionality. &nbsp;It is called the force
        constant or the spring constant of the spring.
      </p>

      <p>
        A graph is drawn with load M in kg wt along X axis and extension, l in
        metre along the Y axis. The graph is a straight line whose slope will
        give the value of spring constant, k .
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          &nbsp;&nbsp; &nbsp;Students understand the principle of &nbsp;Hooke’s
          Law.
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;They learn about the force constant of a spring.
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;Students understand the relationship between force
          applied and extension produced in a spring.
        </li>
      </ul>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Helical Spring. Retrieved 24 March 2021,
          from amrita.olabs.edu.in/?sub=1&brch=5&sim=197&cnt=1
        </Typography>
      </div>
    </div>
  );
}
