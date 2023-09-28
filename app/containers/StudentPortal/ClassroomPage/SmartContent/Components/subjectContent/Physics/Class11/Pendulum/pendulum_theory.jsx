import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PendulumThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-the1.jpg';
import PendulumThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-the2.png';
import PendulumThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-the3.png';
import PendulumThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-the4.png';
import PendulumThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-the5.jpg';
import PendulumThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-the6.png';
import PendulumThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Pendulum1/pendulum-the7.png';


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

      <p>Our objectives are;</p>

      <ul>
        <li>
          To plot a L-T<sup>2</sup> graph using a simple pendulum.
        </li>
        <li>
          To find the effective length of the simple pendulum for a given time
          period using the graph.
        </li>
        <li>To calculate the acceleration due to gravity at a place.</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <h3>
        <img alt="" src={PendulumThe1} />
      </h3>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>What is a Simple Pendulum?</h3>

      <p>
        An ideal simple pendulum consists of a heavy point mass (called bob)
        tied to one end of a perfectly inextensible, flexible and weightless
        string. In practice, we make it by tying a metallic spherical bob to a
        fine cotton stitching thread.
      </p>

      <h3 className={classes.secondaryTag}>Length of a Simple Pendulum</h3>

      <p>
        The distance between the point of suspension of the pendulum and its
        Centre of Gravity (C.G.), which is the C.G. of the bob, is called the
        length of the simple pendulum. It is represented using the aphabet ( l
        ).
      </p>

      <h3 className={classes.secondaryTag}>Time Period of a Simple Pendulum</h3>

      <p>
        Time period is the time taken by the bob of the simple pendulum to make
        one complete oscillation. It is represented by the letter T.
      </p>

      <h3 className={classes.secondaryTag}>Finding the acceleration due to gravity</h3>

      <p>
        The time period of a simple pendulum depends on the length of the
        pendulum (l) and the acceleration due to gravity (g), which is expressed
        by the relation,
        <br />
        &nbsp;
      </p>

      <p>
        &nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»T«/mi»«mo»=«/mo»«mn»2«/mn»«mo»§nbsp;«/mo»«mi mathvariant=¨normal¨»§#960;«/mi»«msqrt»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»g«/mi»«/mfrac»«/msqrt»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»(«/mo»«mn»1«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={PendulumThe2}
          title="Double click to edit"
        />
      </p>

      <p>For small amplitude of oscillations,</p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«mo»=«/mo»«mn»4«/mn»«msup»«mi mathvariant=¨normal¨»§#960;«/mi»«mn»2«/mn»«/msup»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«mi mathvariant=¨normal¨»g«/mi»«/mfrac»«/math»"
          class="Wirisformula"
          src={PendulumThe3}
          title="Double click to edit"
        />
      </p>

      <p>
        ie;&nbsp;
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»g«/mi»«mo»=«/mo»«mn»4«/mn»«msup»«mi mathvariant=¨normal¨»§#960;«/mi»«mn»2«/mn»«/msup»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»(«/mo»«mn»2«/mn»«mo»)«/mo»«/math»"
          class="Wirisformula"
          src={PendulumThe4}
          title="Double click to edit"
        />
      </p>

      <p>
        If we know the value of l and T, we can calculate the acceleration due
        to gravity, g at that place.
      </p>

      <h3 className={classes.secondaryTag}>
        <br />
        The L-T<sup>2 </sup>graph
      </h3>

      <p>
        We can plot a graph between l and T2 by taking l along the X axis and T2
        along the Y axis. The graph is a straight line.&nbsp;
      </p>

      <p>
        &nbsp;
        <img alt="" src={PendulumThe5} />
      </p>

      <p>
        From the graph,{' '}
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mfrac»«mi mathvariant=¨normal¨»l«/mi»«msup»«mi mathvariant=¨normal¨»T«/mi»«mn»2«/mn»«/msup»«/mfrac»«mo»=«/mo»«mfrac»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»B«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»C«/mi»«/mrow»«/mfrac»«mo»=«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«mo»-«/mo»«msup»«mi mathvariant=¨normal¨»cm«/mi»«mn»2«/mn»«/msup»«/math»"
          class="Wirisformula"
          src={PendulumThe6}
          title="Double click to edit"
        />
      </p>

      <p>
        <img
          align="middle"
          alt="«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mi mathvariant=¨normal¨»g«/mi»«mo»=«/mo»«mn»4«/mn»«msup»«mi mathvariant=¨normal¨»§#960;«/mi»«mn»2«/mn»«/msup»«mfenced»«mfrac»«mrow»«mi mathvariant=¨normal¨»A«/mi»«mi mathvariant=¨normal¨»B«/mi»«/mrow»«mrow»«mi mathvariant=¨normal¨»B«/mi»«mi mathvariant=¨normal¨»C«/mi»«/mrow»«/mfrac»«/mfenced»«/math»"
          class="Wirisformula"
          src={PendulumThe7}
          title="Double click to edit"
        />
        &nbsp;
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students get to know about the simple pendulum.</li>
        <li>
          Students understand the relation between the length of the pendulum,
          time period and the acceleration due to gravity at a place.
        </li>
        <li>
          They get an idea about the importance of the l-T<sup>2</sup>{' '}
          graph.&nbsp;
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2014). Simple pendulum. Retrieved 23 March
          2021, from amrita.olabs.edu.in/?sub=1&brch=5&sim=159&cnt=1
        </Typography>
      </div>
    </div>
  );
}
