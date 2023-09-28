import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
// import OhmsLaw from '../../../../../../assets/Images/Subjects/Physics/ocontent.jpg';
import screwGauge from '../../../../../../../../../assets/Images/Subjects/Physics/screw-guage-label.jpg';
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
}));

export default function Theory() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h1 className={classes.headTag}>Our Objective</h1>

      <p>Our objective is to use the screw gauge;</p>

      <ul>
        <li>To measure the diameter of the given lead shot.</li>
        <li>To measure the diameter of a given wire and find its volume.</li>
        <li>
          To measure the thickness of a given glass plate and find its volume.
        </li>
        <li>To measure the volume of an irregular lamina.&nbsp;</li>
      </ul>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        The screw gauge is an instrument used for measuring accurately the
        diameter of a thin wire or the thickness of a sheet of metal.&nbsp; It
        consists of a U-shaped frame fitted with a screwed spindle which is
        attached to a thimble.
      </p>

      <p>
        <img alt="" src={screwGauge} />
      </p>

      <p>
        Parallel to the axis of the thimble, a scale graduated in mm is
        engraved. This is called pitch scale. A sleeve is attached to the head
        of the screw.
      </p>

      <p>
        The head of the screw has a ratchet which avoids undue tightening of the
        screw. On the thimble there is a circular scale known as head scale
        which is divided into 50 or 100 equal parts. When the screw is worked,
        the sleeve moves over the pitch scale.
      </p>

      <p>
        A stud with a plane end surface called the anvil is fixed on the ‘U’
        frame exactly opposite to the tip of the screw. When the tip of the
        screw is in contact with the anvil, usually, the zero of the head scale
        coincides with the zero of the pitch scale.
      </p>

      <h1 className={classes.headTag}>Pitch of the Screw Gauge</h1>

      <p>
        The pitch of the screw is the distance moved by the spindle per
        revolution. To find this, the distance advanced by the head scale over
        the pitch scale for a definite number of complete rotation of the screw
        is determined.&nbsp;
      </p>

      <h1 className={classes.headTag}>Least Count of the Screw Gauge</h1>

      <p>
        The Least count (LC) is the distance moved by the tip of the screw, when
        the screw is turned through 1 division of the head scale.
      </p>

      <p>The least count can be calculated using the formula;&nbsp;</p>

      <h1 className={classes.headTag}>Zero Error and Zero Correction</h1>

      <p>
        To get the correct measurement, the zero error must be taken into
        account. For this purpose, the screw is rotated forward till the screw
        just touches the anvil and the edge of cap is on the zero mark of the
        pitch scale. The Screw gauge is held keeping the pitch scale vertical
        with its zero down wards.
      </p>

      <p>
        When this is done, anyone of the following three situations can arise:
        <br />
        &nbsp;
      </p>

      <ul>
        <li>
          The zero mark of the circular scale comes on the reference line. In
          this case, the zero error and the zero correction, both are nil.
        </li>
        <li>
          The zero mark of the circular scale remains above the reference line
          and does not cross it.&nbsp; In this case, the zero error is positive
          and the zero correction is negative depending on how many divisions it
          is above the reference line.
        </li>
        <li>
          The zero mark of the head scale is below the reference line.&nbsp; In
          this case, the zero error is negative and the zero correction is
          positive depending on how many divisions it is below the reference
          line.
        </li>
      </ul>

      <h1 className={classes.headTag}>To find the diameter of the lead shot</h1>

      <p>
        With the lead shot between&nbsp; between the screw and anvil, if the
        edge of the cap lies ahead of the N<sup>th</sup> division of the linear
        scale.
      </p>

      <p>Then, linear scale reading (P.S.R.) = N.</p>

      <p>If nth division of circular scale lies over reference line.</p>

      <p>
        Then, circular scale reading (H.S.R.) = n x (L.C.) (L.C. is least count
        of screw gauge)
      </p>

      <p>Total reading (T.R.) = P.S.R. + corrected H.S.R. = N + (n x L.C.).</p>

      <p>If D be the mean diameter of lead shot,</p>

      <h1 className={classes.headTag}>
        To find the diameter and hence to calculate the volume of the wire
      </h1>

      <p>
        Place the wire between the anvil and the screw and note down the PSR and
        HSR as before.
      </p>

      <p>The diameter of the wire is given by;</p>

      <p>If r is radius of the wire, and l be the mean length of the wire.</p>

      <p>Then, volume of the wire,</p>

      <h1 className={classes.headTag}>
        To find the thickness of the glass plate
      </h1>

      <p>
        The glass plate is gripped between the tip of the screw and the anvil.
        The PSR and HSR are noted as before.
      </p>

      <p>The thickness of the glass plate is;</p>

      <h1 className={classes.headTag}>
        To find the Volume of glass plate (irregular lamina)
      </h1>

      <p>
        Find the thickness, t of irregular lamina as before. Then place the
        lamina over a graph paper and trace its outline on the graph paper. The
        area A of the lamina is taken from the graph paper.
      </p>

      <p>The volume of the glass plate is calculated from the equation;</p>

      <h1 className={classes.headTag}>Learning Outcomes&nbsp;</h1>

      <p>The students learns;</p>

      <ul>
        <li>Different parts of the screw gauge.</li>
        <li>How to use a screw gauge.</li>
        <li>How to calculate the least count of screw gauge.</li>
        <li>
          How to calculate the zero error and zero correction of a screw gauge.
        </li>
        <li>
          How to calculate the volume of a lead shot by measuring its diameter.
        </li>
        <li>
          How to calculate the volume of a glass plate by measuring its
          thickness.
        </li>
        <li>
          How to calculate the volume of a wire by measuring its diameter.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2011). Ohm's law and resistance. Retrieved 25
          February 2021, from amrita.olabs.edu.in/?sub=1&brch=6&sim=22&cnt=1
        </Typography>
      </div>
    </div>
  );
}
