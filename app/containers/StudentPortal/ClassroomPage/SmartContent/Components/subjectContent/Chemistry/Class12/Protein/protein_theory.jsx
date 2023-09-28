import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import ProteinThe1 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Protein1/protein-the1.jpg';
import ProteinThe2 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Protein1/protein-the2.jpg';
import ProteinThe3 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Protein1/protein-the3.jpg';
import ProteinThe4 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Protein1/protein-the4.jpg';
import ProteinThe5 from '../../../../../../../../../assets/Images/Subjects/Chemistry/Protein1/protein-the5.jpg';

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
      <h1 className={classes.headTag}>Objective</h1>

      <p>Our objective is to study some simple tests of proteins.</p>

      <h1 className={classes.headTag}>The Theory</h1>

      <p>
        Food is a necessary material which must be supplied to the body for its
        normal and proper functioning. It is the main source of energy and
        promotes growth. It regulates body processes like assimilation and
        digestion and sustains life. Every good food contains some important
        nutrition like proteins, carbohydrates, fats, vitamins, minerals and
        water. All these nutrients are important for health and they work
        together to build new cells in our body and keep the body working
        properly.
      </p>

      <p>
        <img
          alt=""
          src={ProteinThe1}
          
        />
      </p>

      <h2 className={classes.secondaryTag}>What are Proteins?</h2>

      <p>
        Protein is an important macronutrient essential for survival. They are
        constituent of calls and hence are present in all living bodies. 10-35%
        of calories should come from protein. Protein is found in meats,
        poultry, fish, meat substitutes, cheeses, milk etc.
      </p>

      <p>
        Proteins are large biological molecules composed of α-amino acids (Amino
        acid in which amino group is attached to α-carbon, which exist as
        zwitter ions and are crystalline in nature). They contain carbon,
        hydrogen, oxygen, nitrogen and sometimes phosphorous and sulphur.
      </p>

      <p>
        <img
          alt=""
          src={ProteinThe2}
          
        />
      </p>

      <p>
        Amino acids are molecules contain both amino (NH<sub>2</sub>) and
        carboxylic (COOH) group. Amino acid molecules undergo condensation
        reaction to form a specific type of linkage known as peptide linkage.
      </p>

      <p>
        Depending on the number of amino acid molecules involved in the
        condensation reaction, the products formed are classified as;
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Dipeptide</strong>
      </h3>

      <p>
        They are the products formed by the condensation of two α-amino acid
        molecules.
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Tripeptide</strong>
      </h3>

      <p>
        They are formed by the condensation of three α-amino acid molecules.
      </p>

      <p>
        If large number of amino acid molecules combine, the product formed is
        called polypeptide. A polypeptide having molecular mass greater than
        10000 is called a protein. Proteins differ from one another primarily in
        their sequence of amino acid. There are about more than 20 amino acids.
        Some amino acids are not made by the body and are supplied through diet.
        They are called essential amino acids.
      </p>

      <h2 className={classes.secondaryTag}>Some Important Tests for the Detection of Proteins</h2>

      <h3 className={classes.secondaryTag}>
        <strong>Biuret test</strong>
      </h3>

      <p>
        This test is used to detect the presence of peptide bond. When treated
        with copper sulphate solution in presence of alkali (NaOH or KOH),
        protein reacts with copper (II) ions to form a violet coloured complex
        called biuret.
      </p>

      <p>
        <img
          alt=""
          src={ProteinThe3}
          width='700px'
        />
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Xanthoproteic test</strong>
      </h3>

      <p>
        It is an identification test of protein and it gives a positive result
        with those proteins with amino acid carrying aromatic group. When
        protein is treated with hot concentrated nitric acid, a yellow coloured
        substance is formed. The yellow colour is due to xanthoproteic acid
        which is formed by the nitration of certain amino acids present in
        protein such as tyrosine and tryptophan.
      </p>

      <p>
        <img
          alt=""
          src={ProteinThe4}
          width='700px'
        />
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Ninhydrin test</strong>
      </h3>

      <p>
        This is a test for amino acids and proteins with free –NH<sub>2</sub>{' '}
        group. When such an –NH<sub>2</sub> group reacts with ninhydrin, an
        intense blue coloured complex is formed.
      </p>

      <p>
        <img
          alt=""
          src={ProteinThe5}
          width='700px'
        />
      </p>

      <h3 className={classes.secondaryTag}>
        <strong>Millon’s test</strong>
      </h3>

      <p>
        When egg albumin is treated with Millon’s reagent, it first gives a
        white coloured precipitate which then changes to brick red on boiling.
        Gelatin does not give this test.
      </p>

      <h1 className={classes.headTag}>Learning Outcome</h1>

      <ul>
        <li>Students understand various identification tests for proteins.</li>
        <li>
          Students acquire skill to perform the experiment in the real lab.
          
        </li>
      </ul>
      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2013). Qualitative Analysis of Proteins.
          Retrieved 29 March 2021, from
          amrita.olabs.edu.in/?sub=73&brch=8&sim=140&cnt=1
        </Typography>
      </div>
    </div>
  );
}
