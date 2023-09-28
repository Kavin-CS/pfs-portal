import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import PATissuesThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/PATissues1/patissues-the1.gif';
import PATissuesThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/PATissues1/patissues-the2.gif';
import PATissuesThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/PATissues1/patissues-the3.gif';
import PATissuesThe4 from '../../../../../../../../../assets/Images/Subjects/Biology/PATissues1/patissues-the4.gif';

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
      <h1 className={classes.headTag}>Objectives</h1>

      <ol>
        <li>
          Identify parenchyma and sclerenchyma tissues in plants from the
          prepared slides.
        </li>
        <li>
          Identify striated (striped) muscle fibres and nerve cells in animals
          from the prepared slides.
        </li>
      </ol>

      <h1 className={classes.headTag}>The Theory</h1>

      <h2 className={classes.secondaryTag}>What are Tissues?</h2>

      <p>
        <strong>
          A group of cells having common origin, similar structure and
          performing a definite function is called a tissue.
        </strong>
        &nbsp; Tissues are found in plants and animals.&nbsp; Plants and animals
        are made up of many different kinds of tissues. For example, groups of
        bone cells form bone tissues and muscle cells form muscle tissue.
        Different types of tissues have distinctive architecture best suited for
        what they do.&nbsp; We will see that plant tissues are different from
        animal tissues in many ways.
      </p>

      <h3 className={classes.secondaryTag}>Plant Tissues</h3>

      <p>
        <strong>
          Plant tissues can be grouped into two basic types: meristematic and
          permanent tissues.
        </strong>
      </p>

      <p>
        <img alt="" src={PATissuesThe1} />
      </p>

      <p>&nbsp;</p>

      <h3 className={classes.secondaryTag}>Animal Tissues</h3>

      <p>
        <strong>
          Animal tissues can be grouped into four basic types: epithelial,
          muscular, connective and nervous tissues.
        </strong>
      </p>

      <p>
        <img alt="" src={PATissuesThe2} />
      </p>

      <p>&nbsp;</p>

      

      <h2 className={classes.secondaryTag}>Parenchyma and Sclerenchyma Tissues</h2>

      <h3 className={classes.secondaryTag}>Parenchyma Tissue</h3>

      <p>
        <strong>
          Parenchyma tissues are found in the soft parts of plant such the
          roots, stems, leaves and flowers. The cells in this tissue are loosely
          packed, as they contain large intercellular spaces between them. The
          cells consist of cytoplasm and nucleus that is surrounded by a cell
          wall. Each cell has a vacuole at the centre. The functions of
          parenchyma tissues are storage, photosynthesis, and also to help the
          plant float on water.
        </strong>
      </p>

      <h3 className={classes.secondaryTag}>Sclerenchyma Tissue</h3>

      <p>
        <strong>
          Sclerenchyma tissue consists of thick-walled, dead cells. These cells
          are long, narrow and have hard and extremely thick secondary walls due
          to the uniform distribution of lignin. Lignin deposition is so thick
          that the cell walls become strong, rigid and impermeable to water.
          There are no inter-cellular spaces between sclerenchyma cells. Nucleus
          is absent in the cell. The function of this tissue is to give
          protection and support to the plant.
        </strong>
      </p>

      <p>
        <img alt="" src={PATissuesThe3} />
      </p>

      <h2 className={classes.secondaryTag}>The Striated Muscle Fibre and Nerve Tissues</h2>

      <h3 className={classes.secondaryTag}>Striated Muscle Fibre</h3>

      <p>
        <strong>Striated muscles cells are long and cylindrical fibres</strong>.
        The fibres are enclosed within a membrane called sarcolemma. These
        fibres are multinucleated, which means they have many nuclei. Each cell
        cytoplasm consists of many myofibrils.&nbsp; These are voluntary
        muscles.
      </p>

      <h3 className={classes.secondaryTag}>Nerve Tissue</h3>

      <p>
        <strong>
          The nervous tissue consists of the nerve cells and neurons.
        </strong>
        &nbsp; The large body of the nerve cell is called the{' '}
        <span color="#0000CD;">
          <strong>cyton</strong>
        </span>{' '}
        which contains the cell’s nucleus. The cell body branches out to
        form&nbsp; dendrons.&nbsp; Dendrons further branch out to form fibres
        called{' '}
        <span color="#0000CD;">
          <strong>dendrites.</strong>
        </span>{' '}
        There is also a single long fibre projecting from the cyton called{' '}
        <span color="#0000CD;">
          <strong>axon</strong>
        </span>
        . The neurons in the brain communicate with other nerve cells that reach
        throughout the body forming the body’s nervous system.
      </p>

      <p>
        <img alt="" src={PATissuesThe4} />
      </p>

      <h1 className={classes.headTag}>Learning Outcomes</h1>

      <ol>
        <li>
          Students understand the terms parenchyma tissue, sclerenchyma tissue,
          striped muscle fibres and nerve cells.
        </li>
        <li>
          Students learn about two types of animal tissue- muscle tissue and
          nerve tissues.
        </li>
        <li>
          Students learn about two types of plant tissues- parenchyma and
          sclerenchyma tissues.
        </li>
        <li>
          Students acquire skill to do the experiment after having observed the{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=131&amp;cnt=286">
            animation
          </a>{' '}
          and{' '}
          <a href="http://amrita.olabs.co.in/?sub=79&amp;brch=15&amp;sim=131&amp;cnt=4">
            simulation
          </a>
          .
        </li>
      </ol>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Plant and Animal Tissues. Retrieved 7
          April 2021, from amrita.olabs.edu.in/?sub=79&brch=15&sim=131&cnt=1
        </Typography>
      </div>
    </div>
  );
}
