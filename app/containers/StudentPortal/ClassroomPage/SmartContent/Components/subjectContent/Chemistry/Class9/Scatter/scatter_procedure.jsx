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
import WaterPro1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Water1/water-pro1.png';

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
    minHeight: '70px',
    marginLeft: '2%',
    marginRight: 'auto',
    background: 'white',
    padding: 12,
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
      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Procedure performed in Rutherford scattering experiment:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Apparatus:</span>
      </h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Radioactive source emitting alpha particles, a thin sheet of gold
            foil, a fluorescent detection screen.
          </span>
        </span>
      </p>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">Procedure:</span>
      </h3>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Rutherford's experiment with the gold foil was done by his
            assistants, Geiger and Marsden. An alpha source was set up. Alpha
            particles are helium nuclei, two protons and two neutrons. A
            lead(Pb) block with a slit served as the source. A radioactive
            substance (giving Alpha particle emission) &nbsp;was put inside. The
            slit acted as the only means of escape for the alpha particles. The
            slit was pointed at the thin gold foil. The foil was set up a short
            distance from the source and in a line with the opening in the lead
            block.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Using the foil as the center of the collision or scattering events,
            they took a long strip of material that was coated with zinc sulfide
            and set it up in an almost complete circle.
          </span>
        </span>
      </p>

      <p>
        <span fontSize="14px;">
          <span fontFamily="arial,helvetica,sans-serif;">
            They turned off the light. That way they could see the
            scintillations, the little blinks of light that resulted when an
            alpha particle hit the screen.They expected all the particles to go
            right through the thin gold foil, but they noticed some reactions
            along the sides.
          </span>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          Procedure - As performed in simulation:
        </span>
      </h2>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp; &nbsp; View 1 (Normal View):
        </span>
      </h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on "<strong>Show Labels</strong>" to understand different
              apparatus used in this lab.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Uncheck the "<strong>Show Help</strong>" to hide the instructions.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on "<strong>Start Emission</strong>" to start emission of
              alpha (a) particles.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Observe the behaviour of the alpha particle when they fall on the
              thin sheet of gold foil.
            </span>
          </span>
        </li>
      </ul>

      <h3 className={classes.secondaryTag}>
        <span fontFamily="arial,helvetica,sans-serif;">
          &nbsp; &nbsp; View 2 (Zoomed View):
        </span>
      </h3>

      <ul>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on "<strong>Show Labels</strong>" to understand different
              apparatus used in this lab.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Uncheck the "<strong>Show Help</strong>" to hide the instructions.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on "<strong>Start Emission</strong>" to start emission of
              alpha (a) particles.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Observe the behaviour of the alpha particle when they fall on the
              thin sheet of gold foil.
            </span>
          </span>
        </li>
        <li>
          <span fontSize="14px;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Click on "<strong>Experiment conclusion</strong>" to view
              conclusion of&nbsp;Rutherford scattering experiment.
            </span>
          </span>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Rutherford's Scattering Experiment.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=88&cnt=2
        </Typography>
      </div>
    </div>
  );
}
