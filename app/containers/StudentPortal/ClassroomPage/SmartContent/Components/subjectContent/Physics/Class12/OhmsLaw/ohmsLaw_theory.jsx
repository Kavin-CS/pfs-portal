import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import OhmsLaw from '../../../../../../../../../assets/Images/Subjects/Physics/content.jpg';
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
  HeadTag: {
    fontSize: 20,
  },
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.HeadTag}>Aim:</h1>

      <p>
        &nbsp;To determine the resistance per cm of a given wire by plotting a
        graph of potential difference versus current, and hence to determine its
        resistivity.
      </p>

      <h1 className={classes.HeadTag}>The Theory:</h1>

      <p>What does Ohm's Law state?</p>
      <img src={OhmsLaw} />
      <p />

      <p>
        According to the Ohm's law, "The current flowing through a conductor is
        directly proportional to the potential difference across its ends
        provided the physical conditions (temperature, dimensions, pressure) of
        the conductor remains the same." If I be the current flowing through a
        conductor and V be the potential difference across its ends, then
        according to Ohm's Law,
      </p>

      <h2>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501051176_image014(3).jpg"
        />
      </h2>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501051201_image015(7).jpg"
        />
      </p>

      <p>
        where, R is the constant of proportionality. It is known as resistance
        of the conductor. Or
      </p>

      <h2>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501051257_image016(9).jpg"
        />
      </h2>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; ..the working formula
      </p>

      <p>
        R depends upon the material, temperature and dimensions of the
        conductor.
      </p>

      <p>
        In S.I. units, the potential difference V is measured in volt and the
        current I in ampere, the resistance R is measured in ohm.
      </p>

      <p>How do we establish the current-voltage relationship?</p>

      <p>
        To establish the current-voltage relationship, it is to be shown that
        the ratio V /&nbsp;I remains constant for a given resistance, therefore
        a graph between the potential difference(V) and the current (I) must be
        a straight line.
      </p>

      <p>How then do we find the unknown values of resistance?</p>

      <p>
        It is the constant ratio that gives the unknown values of
        resistance,&nbsp;
      </p>

      <h2>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501051275_image016(9).jpg"
        />
      </h2>

      <p>
        For a wire of uniform cross-section, the resistance depends on the
        length l and the area of cross-section A. It also depends on the
        temperature of the conductor. At a given temperature the resistance,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501052586_Untitled-1.jpg"
        />
        <br />
        &nbsp;where ρ is the specific resistance or resistivity and is
        characteristic of the material of wire.
      </p>

      <p>
        Hence, the specific resistance or resistivity of the material of the
        wire,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501052959_Untitled-2.jpg"
        />
      </p>

      <p>
        If 'r' is the radius of the wire, then the cross sectional area, A
        =&nbsp;πr². Then the specific resistance or resistivity of the material
        of the wire is,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          alt=""
          src="//amrita.olabs.edu.in/userfiles/1/1501058042_Untitled-3.jpg"
        />
      </p>

      <h1 className={classes.HeadTag}>Learning Outcomes:</h1>

      <ul>
        <li>Students learn Ohm’s law.</li>
        <li>
          Students know the relation between voltage, current and
          resistance.&nbsp;
        </li>
        <li>
          Students learn how to find out the resistivity of the material
          &nbsp;of a give wire.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.HeadTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Ohm's law and resistance. Retrieved 25
          February 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=22&cnt=1
        </Typography>
      </div>
    </div>
  );
}
