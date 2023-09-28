import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ScatterThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Scatter1/scatter-the1.jpg';


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
      <h2 className={classes.secondaryTag}>Objective:</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          To demonstrate the scattering of alpha particles by gold foil.
        </span>
      </p>

      <h2  className={classes.secondaryTag} textAlign = "justify;">
        <span fontFamily="arial,helvetica,sans-serif;">Background:</span>
      </h2>

      <p textAlign = "justify;">
        <span fontFamily="arial,helvetica,sans-serif;">
          Model for the structure of an atom had been first proposed by J.J.
          Thomson. Later, followed many theories however, Rutherford's model was
          finally accepted as the correct nuclear model. Rutherford had shown
          his model with help of an experiment.
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Rutherford's scattering experiment:</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>&nbsp;Rutherford's model of an atom :</strong>
        </span>
      </p>

      <p marginBbottom="0cm;" textAlign="justify;">
        <span fontFamily="arial,helvetica,sans-serif;">
          Ernest Rutherford was interested in knowing how the electrons are
          arranged within an atom
          <span color="rgb(153, 51, 102); ">.</span> Rutherford designed
          an experiment for this. In this experiment, fast moving alpha
          (α)-particles were made to fall on a thin gold foil.
        </span>
      </p>

      <ul marginLeft="40px;">
        <li textAlign = "justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            He selected a gold foil because he wanted as thin a layer as
            possible. This gold foil was about 1000 atoms thick.
          </span>
        </li>
        <li textAlign = "justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            α-particles are doubly-charged helium ions. Since they have a mass
            of 4µ, the fast-moving α-particles have a considerable amount of
            energy.&nbsp;
          </span>
        </li>
      </ul>

      <p textAlign = "justify;">
        <span fontFamily="arial,helvetica,sans-serif;">
          It was expected that α-particles would be deflected by the sub-atomic
          particles in the gold atoms. Since the α-particles were much heavier
          than the protons, he did not expect to see large
          deflections.&nbsp;But, the α-particle scattering experiment gave
          totally unexpected results .
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Observations of Rutherford's scattering experiment:</h2>

      <div float="left">
        <p>As we can see in Fig. 1.</p>

        <ol start="1">
          <li>
            <span fontFamily="arial,helvetica,sans-serif;">
              Most of the fast moving α-particles passed straight through the
              gold foil.
            </span>
          </li>
          <li textAlign = "justify;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Some of the α-particles were deflected by the foil by small
              angles.
            </span>
          </li>
          <li textAlign = "justify;">
            <span fontFamily="arial,helvetica,sans-serif;">
              Surprisingly one out of every 12,000 alpha particles appeared to
              rebound.
            </span>
          </li>
        </ol>

        <p textAlign = "justify;">
          <img
            alt=""
            src={ScatterThe1}
            width= "400px;" height="209px;"
          />
        </p>

        <p textAlign = "justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
          <span lineHeight= "1.6;">Fig. (1)</span>
        </p>
      </div>

      <p>
        <span fontSize="9px;">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Source:&nbsp;
          <a href="http://chemistry.tutorvista.com/nuclear-chemistry/rutherford-scattering.html">
            http://chemistry.tutorvista.com/nuclear-chemistry/rutherford-scattering.html
          </a>
        </span>
      </p>

      <h2 className={classes.secondaryTag}>
        Conclusion of Rutherford's scattering experiment:
      </h2>

      <ol>
        <li>
          <span fontFamily="arial,helvetica,sans-serif;">
            Most of the space inside the atom is empty because most of the
            α-particles passed through the gold foil without getting deflected.
          </span>
        </li>
        <li textAlign = "justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Very few particles were deflected from their path, indicating that
            the positive charge of the atom occupies very little space.
          </span>
        </li>
        <li textAlign = "justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            A very small fraction of α-particles were deflected by very large
            angles, indicating that all the positive charge and mass of the gold
            atom were concentrated in a very small volume within the atom.
          </span>
        </li>
      </ol>

      <p textAlign = "justify;">
        <span fontFamily="arial,helvetica,sans-serif;">
          From the data he also calculated that the radius of the nucleus is
          about{' '}
          <strong>
            10<sup>5</sup> times
          </strong>{' '}
          less than the radius of the atom.
        </span>
      </p>

      <h2 className={classes.secondaryTag}>Rutherford's Nuclear Model Of Atom</h2>

      <p>
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>
            On the basis of his experiment,&nbsp;
            <b textAlign = "justify; line-height: 1.6;">
              Rutherford put forward the model of an atom, which had the
              following features:
            </b>
          </strong>
        </span>
      </p>

      <ol>
        <li marginBottom="0cm;" textAlign="justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            There is a positively charged centre in an atom called the nucleus.
            Nearly all the mass of an atom resides in the nucleus.
          </span>
        </li>
        <li marginBottom="0cm;" textAlign="justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            The electrons revolve around the nucleus in well-defined orbits.
          </span>
        </li>
        <li marginBottom="0cm;" textAlign="justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            The size of the nucleus is very small as compared to the size of the
            atom.
          </span>
        </li>
      </ol>

      <p marginBottom="0cm;" textAlign="justify;">
        <span fontFamily="arial,helvetica,sans-serif;">
          Rutherford's alpha particle scattering experiment shows the presence
          of nucleus in the atom.
        </span>
      </p>

      <p marginBottom="0cm;" textAlign="justify;">
        <span fontFamily="arial,helvetica,sans-serif;">
          <strong>
            It also gives the following important information about the nucleus
            of an atom:&nbsp;
          </strong>
        </span>
      </p>

      <ol>
        <li marginBottom="0cm;" textAlign="justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Nucleus of an atom is positively charged.&nbsp;
          </span>
        </li>
        <li marginBottom="0cm;" textAlign="justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            <span lineHeight= "1.6;">
              Nucleus of an atom is very dense and hard.
            </span>
          </span>
        </li>
        <li marginBottom="0cm;" textAlign="justify;">
          <span fontFamily="arial,helvetica,sans-serif;">
            Nucleus of an atom is very small as compared to the size of the atom
            as a whole.&nbsp;
          </span>
        </li>
      </ol>

      <p marginBottom="0cm;" textAlign="justify;">
        <span fontFamily="arial,helvetica,sans-serif;">
          Rutherford model of atom is also called{' '}
          <strong>Nuclear model of atom</strong>.
        </span>
      </p>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          cdac.olabs.edu.in,. (2012). Rutherford's Scattering Experiment.
          Retrieved 3 April 2021, from
          cdac.olabs.edu.in/?sub=75&brch=12&sim=88&cnt=1
        </Typography>
      </div>
    </div>
  );
}
