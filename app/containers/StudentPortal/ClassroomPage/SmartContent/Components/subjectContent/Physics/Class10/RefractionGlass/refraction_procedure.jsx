import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import RefractionGlassPro1 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractionGlass1/refractionglass-pro1.png';
import RefractionGlassPro2 from '../../../../../../../../../assets/Images/Subjects/Physics/RefractionGlass1/refractionglass-pro2.png';


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
  headTag: {
    fontSize: 20,
  },
  secondaryTag: {
    fontSize: 18,
  },
}));

export default function Procedure() {
  const classes = useStyles();
  return (
    <div class="divContent">
      <h2 className={classes.headTag}>As performed in the real lab:</h2>

      <h3 className={classes.secondaryTag}>Apparatus:</h3>

      <p>
        A drawing board, rectangular glass slab, office pins, sheet of white
        paper, a protractor and sharply pointed pencil.
      </p>

      <h3 className={classes.secondaryTag}>Procedure:</h3>

      <ol>
        <li>
          Fix a sheet of white paper on a drawing board with drawing pins. Place
          the given glass slab nearly in the middle of the sheet.
        </li>
        <li>
          Mark the boundary of the glass slab with a sharp pencil and label it
          as PQRS after removing the slab from its position.
        </li>
        <li>
          On the line PQ mark a point E and draw a normal N1EN2 at it. Draw a
          line AE making angle AEN1 with the normal.The angle should neither too
          small nor too large (say about 40 degree).
        </li>
        <li>
          Now place the glass slab again on its boundary PQRS and fix two pins A
          and B vertically about 10 cm apart on the line AE (say points A and
          B).
        </li>
        <li>
          Look through the glass slab along the plane of the paper from the side
          SR and move your head until the images of the two pins A and B are
          seen clearly. Closing your one eye ,adjust the position of your head
          in such a way that the images of the pins A and B lie in the same
          straight line.
        </li>
        <li>
          Fix two other pins C and D vertically in such a way that the images of
          the pins A and B and pins C and D, all these four, lie in the same
          straight line. Ensure that the feet of the pins ( not their heads )
          lie in the same straight line.
        </li>
        <li>
          Remove the slab and also the pins from the board and encircle the
          pin-pricks on the paper,with a sharp pencil.
        </li>
        <li>
          Join the points D and C and produce the line DC towards the slab so
          that it meets the boundary line RS at the point F. Join the points e
          and F. Thus for the incident ray represented by line AE, the refracted
          ray and the emergant ray are represented by EF and FD respectively.
        </li>
        <li>
          On the line RS draw a normal N1'FN2' &nbsp;at point F. Now, with a
          protractor, measure angle AEN1, angle FEN2 and angle DFN2' labelled as
          angle i, angle r and angle e respectively.&nbsp;
        </li>
        <li>
          Now place the glass slab at some other position on the sheet of paper
          fixed on the board and repeat all the above steps again taking another
          angle of incidence.
        </li>
        <li>
          Measure the angle of incidence i.e angle of refraction, angle of
          emergence, again.
        </li>
        <li>
          Make a record of your observations in the observation table as shown
          below.
        </li>
      </ol>

      <p>
        <img
          alt=""
          height="371"
          src={RefractionGlassPro1}
          width="605"
        />
      </p>

      <h3 className={classes.secondaryTag}>&nbsp;Observation Table :</h3>

      <p>
        &nbsp;
        <img
          alt=""
          height="176"
          src={RefractionGlassPro2}
          width="665"
        />
      </p>

      <h2 className={classes.headTag}>As performed in the simulator:</h2>

      <ol>
        <li>
          Click on&nbsp;<strong>Show values</strong>&nbsp;checkbox
          to&nbsp;display&nbsp;the{' '}
          <strong>
            refractive&nbsp;indices&nbsp;of&nbsp;air&nbsp;and glass
          </strong>
          ,&nbsp;<strong>angle&nbsp;of&nbsp;incidence</strong>&nbsp;and{' '}
          <strong>angle&nbsp;of&nbsp;refraction</strong>.
        </li>
        <li>
          <span>Move the </span>
          <strong>Observer</strong>
          <span> to get an approximate </span>
          <strong>emergent</strong>
          <span> ray.</span>
        </li>
        <li>
          <span>
            Note down the <strong>angle&nbsp;of&nbsp;incidence</strong>,&nbsp;
            <strong>angle&nbsp;of&nbsp;refraction</strong>&nbsp;and&nbsp;
          </span>
          <strong>angle of emergence </strong>
          <span>in the</span>
          <strong> Observation Table</strong>
          <span>.</span>
        </li>
        <li>
          To view the actual emergent ray click on<strong> Emergent Ray</strong>{' '}
          checkbox.
        </li>
        <li>
          Use the slider to change the&nbsp;
          <strong>angle&nbsp;of&nbsp;incidence</strong>, and repeat the above
          steps.
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2011). To study refraction of light in
          rectangular glass slab. Retrieved 25 March 2021, from
          cdac.olabs.edu.in/?sub=74&brch=9&sim=37&cnt=2
        </Typography>
      </div>
    </div>
  );
}
