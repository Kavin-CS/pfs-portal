import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ERRSeriesTheory from '../../../../../../../../../assets/Images/Subjects/Physics/ERRSeriesTheory.gif';

import ResisterImg from '../../../../../../../../../assets/Images/Subjects/Physics/SeriesTheory.gif';
import ResisterParallel from '../../../../../../../../../assets/Images/Subjects/Physics/ERRParallel.gif';
import ParallelVoulme from '../../../../../../../../../assets/Images/Subjects/Physics/parallel1.png';
import ParallelCircuit from '../../../../../../../../../assets/Images/Subjects/Physics/resistorParallel2.png';

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
      <div class="divContent">
        <h1 className={classes.headTag}>Our Objective</h1>

        <p>
          To determine the equivalent resistance of two resistors when connected
          in parallel.
        </p>

        <h1 className={classes.headTag}>The Theory</h1>

        <p>
          Before we start learning about parallel circuits, we need to know what
          electrical circuits are and about&nbsp; the types of circuits!
        </p>

        <h2 className={classes.secondaryTag}>Electrical Circuit</h2>

        <p>
          An electric circuit is simply a closed loop through which charges can
          continuously move. An electric circuit basically contains a source of
          electricity, a load resistance, a switch or a key for turning the
          circuit on or off at one's convenience.
        </p>

        <p>
          The diagrammatic representation of an electric circuit is called the
          circuit diagram. &nbsp;
        </p>

        <p>
          <img alt="ERRSeriesTheory" src={ERRSeriesTheory} />
        </p>

        <p>&nbsp;</p>

        <h2 className={classes.headTag}>Types of circuits</h2>

        <p>
          When two or more resistors are connected in such a way that one end of
          one resistance is connected to the starting end of the other, then the
          circuit is called <strong>Series Circuit.</strong>
        </p>

        <p>
          Similarly, if the starting ends of two resistors are joined to a
          point, and the terminal ends of the two are combined and given
          connection to a source of electricity, those circuits are called
          <strong> Parallel Circuit. </strong>
        </p>

        <p>
          Unlike in the series circuit, the current in each branch of a parallel
          circuit will be different. If one branch is broken, current will
        </p>

        <p>
          <img alt="" src={ResisterParallel} />
        </p>

        <p>continue flowing to the other branches.</p>

        <p>
          At our homes all the electronic appliances are connected in parallel
          with each other.&nbsp; This means they all get the full mains voltage,
          so that we can turn on the TV without having to turn on the microwave
          as well.
        </p>

        <h2 className={classes.headTag}>
          Before calculating the equivalent resistance, we need to know what
          resistance is?
        </h2>

        <p>
          Electrical resistance shows how much energy you need when you move the
          charges/current through your devices. If you need lots of energy, then
          the resistance required is also high.
        </p>

        <p>
          Ie., the property of a conductor to oppose the flow of charges through
          it is called its resistance.
        </p>

        <p>
          <br />
          It is measured as resistance
          <img align="middle" alt="" src={ParallelVoulme} />
        </p>

        <p>
          All metals are good conductors so all metal wires have a relatively
          low resistance.
        </p>

        <p>
          The longer a piece of wire the higher is its resistance.&nbsp; Double
          the length means double the resistance.
          <br />
          &nbsp;
        </p>

        <p>
          The resistance of a piece of wire also depends on its thickness /
          cross-sectional area A of the conductor.&nbsp; Double the area means
          half the resistance.&nbsp; A thin wire has a higher resistance than
          the same thick piece.
        </p>

        <p>
          Finally, resistance of a piece of wire depends on its temperature
          also.&nbsp; The higher the temperature the higher is the
          resistance.&nbsp;
        </p>

        <h2 className={classes.headTag}>
          Calculating the effective resistance/total resistance of parallel
          circuits:
        </h2>

        <p>
          Calculating the equivalent resistance of two or more resistors in
          parallel is a little more complicated than calculating the total
          resistance of two or more resistors in series.
          <br />
          <br />
          Given two resistors, R1 and R2, in parallel, the equivalent
          resistance, Rt, is:
        </p>

        <p>
          <img alt="" src={ParallelCircuit} />
        </p>

        <p>
          That is, for a set of parallel resistors, the reciprocal of their
          equivalent
        </p>

        <p>&nbsp;</p>

        <p>
          resistance equals the sum of the reciprocals of their individual
          resistances.
          <br />
          <br />
          Thus, resistance decreases in parallel combination.&nbsp;&nbsp;
          <br />
          <br />
          Using the formula is not too difficult.&nbsp; Simply substitute&nbsp;
          your values for the resistances and then add up the fractions. To find
          the equivalent resistance (Rt), you need to upside down your result.
          <br />
          <br />
          Here, we used Meter Bridge to calculate the effective resistance
          accurately.
          <br />
          The Meter Bridge is a device for measurement of resistance using the
          principle of Wheatstone Network.
        </p>

        <p>
          So, go ahead and try out the experiment as per the procedures and find
          the equivalent resistance!!
        </p>
      </div>
      <div className={classes.wrap}>
        <h1 className={classes.headTag} className={classes.headTag}>
          Acknowledgement:
        </h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). The Potentiometer-Internal resistance of
          a cell. Retrieved 25 February 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=147&cnt=1
        </Typography>
      </div>
    </div>
  );
}
