import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import OnionThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/Onion1/onion-the1.jpg';
import OnionThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/Onion1/onion-the2.jpg';
import OnionThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/Onion1/onion-the3.jpg';

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
      <h1 className={classes.headTag}>Aim</h1>

      <p>
        Our aim is to prepare a temporary mount of onion root tip to study
        mitosis.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        All organisms are made of cells. For an organism to grow, mature and
        maintain tissue, new cells must be made.&nbsp; All cells are produced by
        division of pre-existing cells. Continuity of life depends on cell
        division.&nbsp; There are two main methods of cell division: mitosis and
        meiosis. In this tutorial we will learn about mitosis.
      </p>

      <h2 className={classes.secondaryTag}>What is Mitosis?</h2>

      <p>
        Mitosis is very important to life because it provides new cells for
        growth and replaces dead cells. Mitosis is the process in which a
        eukaryotic cell nucleus splits in two, followed by division of the
        parent cell into two daughter cells. Each cell division consists of two
        events: cytokinesis and karyokinesis.&nbsp; Karyokinesis is the process
        of division of the nucleus and cytokinesis is the process of division of
        cytoplasm.
      </p>

      <h2 className={classes.secondaryTag}>Events during Mitosis</h2>

      <ol>
        <li>
          <h3 className={classes.secondaryTag}>Prophase:</h3>

          <ol>
            <li>
              <p>
                Mitosis begins at prophase with the thickening and coiling of
                the chromosomes.
              </p>
            </li>
            <li>
              <p>The nuclear membrane and nucleolus shrinks and disappears.</p>
            </li>
            <li>
              <p>
                The end of prophase is marked by the beginning of the
                organization of a group of fibres to form a spindle.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <h3 className={classes.secondaryTag}>Metaphase</h3>

          <ol>
            <li>
              <p>
                The chromosome become thick and two chromatids of each
                chromosome become clear.&nbsp;
              </p>
            </li>
            <li>
              <p>
                Each chromosome attaches to spindle fibres at its centromere.
              </p>
            </li>
            <li>
              <p>The chromosomes are arranged at the midline of the cell.</p>
            </li>
          </ol>
        </li>
        <li>
        <h3 className={classes.secondaryTag}>Anaphase</h3>

          <ol>
            <li>
              <p>
                In anaphase each chromatid pair separates from the centromere
                and move towards the opposite ends of the cell by the spindle
                fibres.
              </p>
            </li>
            <li>
              <p>The cell membrane begins to pinch at the centre.</p>
            </li>
          </ol>
        </li>
        <li>
        <h3 className={classes.secondaryTag}>Telophase</h3>

          <ol>
            <li>
              <p>Chromatids arrive at opposite poles of cell.</p>
            </li>
            <li>
              <p>
                The spindle disappears and the daughter chromosome uncoils to
                form chromatin fibres.
              </p>
            </li>
            <li>
              <p>
                The nuclear membranes and nucleolus re-form and two daughter
                nuclei appear at opposite poles.
              </p>
            </li>
            <li>
              <p>
                Cytokinesis or the partitioning of the cell may also begin
                during this stage.
              </p>
            </li>
          </ol>
        </li>
      </ol>

      <p>
        <img alt="" src={OnionThe1} />
      </p>

      <p>
        The stage, or phase, after the completion of mitosis is called
        interphase.&nbsp; It is the non dividing phase of the cell cycle between
        two successive cell divisions.&nbsp; Mitosis is only one part of the
        cell cycle. Most of the life of a cell is spent in interphase.&nbsp;
        Interphase consist of three stages call G1, S and G2.
      </p>

      <p>
        <img
          alt=""
          src={OnionThe2}
          width="40%;"
        />
      </p>

      <h2 className={classes.secondaryTag}>Mitosis in Onion Root Tip</h2>

      <p>
        The meristamatic cells located in the root tips provide the most
        suitable material for the study of mitosis. The chromosome of
        monocotyledonous plants is large and more visible, therefore, onion root
        tips are used to study mitosis. Based on the kind of cells and species
        of organism, the time taken for mitosis may vary. Mitosis is influenced
        by factors like temperature and time
      </p>

      <p>
        <img
          alt=""
          src={OnionThe3}
          width="50%;"
        />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          <p>Students understand the term mitosis.</p>
        </li>
        <li>
          <p>Students understand the different events during mitosis.</p>
        </li>
        <li>
          <p>
            Students do the experiment better in the real lab having gone
            through the animation and simulation.
          </p>
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Study Mitosis in Onion Root Tip.
          Retrieved 5 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=18&sim=237&cnt=1
        </Typography>
      </div>
    </div>
  );
}
