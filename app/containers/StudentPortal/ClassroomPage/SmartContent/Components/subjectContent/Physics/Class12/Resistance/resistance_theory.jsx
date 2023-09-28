import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import ResistanceThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the1.jpg';
import ResistanceThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the2.png';
import ResistanceThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the3.jpg';
import ResistanceThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the4.jpg';
import ResistanceThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the5.png';
import ResistanceThe6 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the6.png';
import ResistanceThe7 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the7.png';
import ResistanceThe8 from '../../../../../../../../../assets/Images/Subjects/Physics/Resistance1/resistance-the8.png';

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
      <h1 className={classes.headTag}>&nbsp;Our Objective:</h1>

      <p>
        To find the resistance of a given wire using a metre bridge and hence
        determine the specific resistance of its materials.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>Wheatstone’s principle</h2>

      <p>
        <img alt="" src={ResistanceThe1} />
      </p>

      <p>
        &nbsp;The metre bridge is operates under Wheatstone’s principle.
        &nbsp;Here, four resistors P, Q, R, and S are connected to form the
        network ABCD. The terminals A and C are connected to a battery, and the
        terminals C and D are connected to a galvanometer through keys K1 and K2
        respectively. &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  In the balancing
        condition, there is no deflection on the galvanometer. Then,
      </p>

      <p>
        <img alt="" src={ResistanceThe2} />
      </p>

      <p>&nbsp;</p>

      <h2 className={classes.secondaryTag}>
        Metre Bridge apparatus&nbsp;&nbsp;
      </h2>

      <p>
        The metre bridge, also known as the slide wire bridge consists of a one
        metre long wire of uniform cross sectional area, fixed on a wooden
        block. A scale is attached to the block. Two gaps are formed on it by
        using thick metal strips in order to make the Wheat stone’s bridge. The
        terminal B between the gaps is used to connect galvanometer and jockey.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img alt="" src={ResistanceThe3} />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <img alt="" src={ResistanceThe4} />
      </p>

      <p>
        A resistance wire is introduced in gap S and the resistance box is in
        gap R. One end of the galvanometer is connected to terminal D and its
        other end is connected to a jockey. As the jockey slides over the wire
        AC, it shows zero deflection at the balancing point (null point).
      </p>

      <p>
        If the length AB is <img alt="" src={ResistanceThe5} />, then the length
        BC is &nbsp;( 100-<em>l&nbsp;</em>).
      </p>

      <p>Then, according to Wheatstone’s principle;&nbsp;</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
        <img alt="" src={ResistanceThe6} />
        &nbsp;
      </p>

      <p>Now, the unknown resistance can be calculated as,</p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
        <img alt="" src={ResistanceThe7} />
      </p>

      <p>
        The specific resistance or resistivity of the material of the wire can
        be then calculated by using the relation,
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
        <img alt="" src={ResistanceThe8} />
        &nbsp;;&nbsp;Where L be the length of the wire and r be its radius.
      </p>

      <h1 className={classes.headTag}>
        <br />
        &nbsp;Learning Outcomes:
      </h1>

      <ul>
        <li>
          Students understand Wheatstone’s bridge and Wheatstone’s principle.
        </li>
        <li>Students verify Wheatstone’s principle.</li>
        <li>
          Students correlate the principle of Wheatstone’s bridge with metre
          bridge experiment.
        </li>
      </ul>

      

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Metre Bridge-Resistance of a wire.
          Retrieved 22 March 2021, from
          amrita.olabs.edu.in/?sub=1&brch=6&sim=146&cnt=1
        </Typography>
      </div>
    </div>
  );
}
