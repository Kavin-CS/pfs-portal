import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import DiodeThe1 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-the1.jpg';
import DiodeThe2 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-the2.jpg';
import DiodeThe3 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-the3.jpg';
import DiodeThe4 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-the4.jpg';
import DiodeThe5 from '../../../../../../../../../assets/Images/Subjects/Physics/Diode1/diode-the5.jpg';

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
      <h1 className={classes.headTag}>Objective</h1>

      <p>
        To draw the I-V characteristic curve of a p-n junction diode in forward
        bias and reverse bias.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <h2 className={classes.secondaryTag}>
        <strong>Semiconductors</strong>
      </h2>

      <p>
        Semiconductors are materials with electrical conductivity intermediate
        between that of a conductor and an insulator. In semiconducting
        materials thermal energy is enough to cause a number of electrons to
        release from valance band to conduction band, in which they are
        relatively free. Common semiconducting materials are silicon, germanium,
        gallium, arsenide etc.
      </p>

      <p>Semiconductors are classified as;</p>

      <p>
        <em fontWeight='normal'>
          <strong>Intrinsic semiconductors :</strong>
        </em>
        Pure semiconducting materials like crystalline form of germanium and
        silicon, with equal concentration of electrons and holes.
      </p>

      <p>
        <strong>
          <em fontWeight='normal'>Extrinsic semiconductors :</em>
        </strong>
        Semiconducting material with the addition of suitable impurity atoms
        through doping.&nbsp;
      </p>

      <p>
        Extrinsic semiconductors can be{' '}
        <strong>
          <em>p-type</em>
        </strong>{' '}
        or{' '}
        <strong>
          <em fontWeight='normal'>n-type</em>
        </strong>{' '}
        depending on the impurities added to it. A p- type semiconductor is
        formed when adding pentavalent impurities like phosphorus, arsenic,
        antimony etc. to an intrinsic semiconductor. If the impurities added are
        trivalent atoms, we get the n- type semiconductor.
      </p>

      <p>
        <img alt="" src={DiodeThe1} />
      </p>

      <p>
        <strong>Semiconductor Diodes</strong>
      </p>

      <p>
        Semiconductor diode is simply the combination of a p-type and an n-type
        material. It is formed by doping half of the silicon crystal with
        trivalent impurity (p-type) and the other half with pentavalent impurity
        (n-type). It has the characteristics of passing current in one direction
        only. If there is no voltage is applied across the junction, electrons
        will diffuse through the junction to p - side and holes will diffuse
        through the junction to n - side and they combine with each other. Thus
        the acceptor atom near the p - side and donor atom near n – side are
        left unutilized and is called the depletion layer. An electron field is
        generated by these uncovered charges which called the barrier potential.
        This opposes further diffusion of carriers and is known as depletion
        region.
      </p>

      <p>
        <img alt="" src={DiodeThe2} />
      </p>

      <p>
        <strong>Biasing in diodes</strong>
      </p>

      <p>
        Biasing in general means the application of dc voltage across the
        terminals of a device for a particular operation. Two types of biasing
        are possible in a p-n junction diode. They are;
      </p>

      <h3 className={classes.secondaryTag}>
        <em fontWeight='normal'>
          <strong>Forward Biasing :&nbsp;</strong>
        </em>
      </h3>

      <p>
        <em fontWeight='normal'>
          <strong>
            <img alt="" src={DiodeThe3} />
          </strong>
        </em>
      </p>

      <p>
        Forward biasing occurs when the positive end of the diode is connected
        to the positive terminal of the battery, and its negative end to the
        negative terminal of the battery. Here, majority carriers from both
        sides move towards and cross the junction and current flows through the
        junction. This current is known as the forward current and is the order
        of 10-3 A. The size of the depletion layer decreases in forward
        biasing.&nbsp;
      </p>

      <h3 className={classes.secondaryTag}>
        <em fontWeight='normal'>
          <strong>Reverse Biasing :</strong>
        </em>
      </h3>

      <p>
        <em fontWeight='normal'>
          <strong>
            <img alt="" src={DiodeThe4} />
          </strong>
        </em>
      </p>

      <p>
        Reverse biasing occurs when the positive end of the diode is connected
        to the negative terminal of the battery, and its negative end to the
        positive terminal of the battery. Here, majority carriers from both
        sides move away from the junction and thus no current flows through the
        junction. A very small current will made at the junction due to the
        movement of minority charge carriers across the junction.&nbsp;
      </p>

      <p>
        <br />
        <strong>Characteristics of a p-n junction diode</strong>
      </p>

      <p>
        It generally shows the relation between bias voltage and current of a
        diode. The V-I characteristics of a diode can be forward or reverse. The
        graph showing the forward bias voltage and forward current is known as
        the forward characteristics, and that showing the reverse bias voltage
        and reverse current is known as the reverse characteristics.
      </p>

      <p>
        <img alt="" src={DiodeThe5} />
      </p>

      <p>
        The forward characteristics of a diode is non linear. The forward
        current increases slowly in the beginning and shows a sudden rise at a
        certain value of forward voltage. This voltage is known as the threshold
        voltage or Knee voltage. This is because the resistance is very low in
        forward biased condition. The current in the reverse bias is due to the
        flow of minority carriers. The reverse current shows a sudden increase
        at a particular region. The corresponding voltage is termed as the
        reverse breakdown voltage.&nbsp;
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ul>
        <li>Students understand p-n junction diodes and their working.</li>
        <li>Students learn the different types of biasing in diodes.</li>
        <li>Students understand the concept of diode characteristics.</li>
        <li>
          Students learn the different terms associated with p-n junction
          diodes.
        </li>
      </ul>

     

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2016). Diode characteristics. Retrieved 22
          March 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=233&cnt=1
        </Typography>
      </div>

      <p>&nbsp;</p>
    </div>
  );
}
