import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

import CPFThe1 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-the1.jpg';
import CPFThe2 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-the2.jpg';
import CPFThe3 from '../../../../../../../../../assets/Images/Subjects/Biology/CPF1/cpf-the3.jpg';

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

      <p>
        Our objective is to detect the presence of carbohydrates, protein and
        fats and to show their presence in suitable plant and animal materials.
      </p>

      <h1 className={classes.headTag}>Theory</h1>

      <p>
        The food we eat is one of the necessary factors in our daily life that
        provides nutritional support for the human body. Food consists of both
        organic and inorganic substances. Carbohydrates, fats and proteins are
        the main organic substances present in the food, which provide energy.
      </p>

      <h3 className={classes.secondaryTag}>Let’s start with carbohydrates.</h3>

      <h2 className={classes.secondaryTag}>What are Carbohydrates?</h2>

      <p>
        One of the main components of our daily diet is carbohydrates. This type
        of foods includes sugars, starch and fibres. They are composed of sugar
        molecules that contain carbon, hydrogen and oxygen.
      </p>

      <h3 className={classes.secondaryTag}>
        Carbohydrates are classified into simple carbohydrates and complex
        carbohydrates.
      </h3>

      <h2 className={classes.secondaryTag}>Simple Carbohydrates</h2>

      <p>
        Simple carbohydrates are composed of one or two sugar units. Because of
        their smaller size, simple carbohydrates can be broken down and can be
        absorbed by the body easily. So they act as the quickest source of
        energy. They are found in fruits in the form of fructose, milk in the
        form of lactose and table sugar in the form of sucrose.
      </p>

      <p>
        There are two types of simple carbohydrates: Monosaccharides and
        Disaccharides.
      </p>

      <p>
        Monosaccharides are the simplest carbohydrates, consisting of only one
        sugar unit.&nbsp; Glucose, fructose and galactose are examples of
        monosaccharides. They have the capability of reducing cupric (Cu2+) ions
        into cuprous (Cu+) ions due to the presence of free aldehydic and
        ketonic groups&nbsp; and are called reducing sugars. These reducing
        sugars give positive results in Benedict’s test and Fehling’s test
        because they reduce the cupric ion present in the Benedict’s and
        Fehling’s solution and form a precipitate of cuprous oxide. Depending
        upon the concentration of sugar, green, orange or brick red precipitates
        are obtained.
      </p>

      <p>
        <img alt="" src={CPFThe1} />
      </p>

      <p>
        Disaccharides are composed of two chemically-linked monosaccharide
        units. Sucrose, lactose and maltose are examples of disaccharides.
        Sucrose is a non-reducing disaccharide. When it is boiled with HCl,
        sucrose undergoes hydrolysis to form glucose and fructose, which gives
        positive result with Benedict’s and Fehling’s solutions.
      </p>

      <h2 className={classes.secondaryTag}>Complex Carbohydrates</h2>

      <p>
        Complex carbohydrates are composed of long chains of simple carbohydrate
        units. Because of their larger size, they can be broken down into simple
        carbohydrates.
      </p>

      <p>
        Complex carbohydrates can be classified as Oligosaccharides and
        Polysaccharides.
      </p>

      <p>
        Oligosaccharides consist of less than 10 monosaccharide units.
        Disaccharides are also a class of oligosaccharides. Raffinose and
        stachyose are examples of oligosaccharides.
      </p>

      <p>
        Carbohydrates, made up of large number of monosaccharide units, are
        called polysaccharides. Starch, glycogen and cellulose are example of
        polysaccharides. Starch gives a blue-black complex with iodine.
      </p>

      <h2 className={classes.secondaryTag}>What are Proteins?</h2>

      <p>
        Proteins are large biological molecules made up of large number of amino
        acid units. Amino acids are molecules consisting of both the amino
        (-NH2) group and carboxylic group (-COOH). In proteins, the amino acid
        units are linked together by specific linkages called peptide linkages.
        Because of the complex nature of protein, our body takes a longer time
        to break down protein molecules. Compared to carbohydrates, proteins are
        a much slower and longer-lasting source of energy. Most proteins are
        soluble in acidic or alkaline solutions, but insoluble in water.
      </p>

      <p>
        Proteins give colour reactions due to one or more radicals or groups
        present in the complex protein molecules. All proteins do not give all
        colour reactions because all of them do not contain the same amino acid
        units. This property of protein can be used for the detection of protein
        in a given sample.
      </p>

      <p>
        Biuret test is a method used for the detection of peptide bond in a
        protein molecule. In the Biuret test, the nitrogen atoms in the peptide
        chain react with copper ions in the reagent to form a violet coloured
        complex.
      </p>

      <p>
        <img alt="" src={CPFThe2} />
      </p>

      <p>
        Xanthoproteic test is used for the identification of protein containing
        aromatic amino acid units.&nbsp; By heating with nitric acid, the
        benzene ring in the amino acid unit is nitrated and forms a yellow
        coloured nitro-compound which turns to orange colour with alkali.
      </p>

      <p>
        <img alt="" src={CPFThe3} />
      </p>

      <h2 className={classes.secondaryTag}>What are Fats?</h2>

      <p>
        Fats are complex molecules made up of fatty acids and glycerol. Our body
        needs fats for growth and energy. Fats contain carbon, hydrogen and
        sometimes oxygen. Phosphorous, nitrogen and sulphur are also present in
        some fats. They are insoluble in water, but soluble in non polar s like
        chloroform and benzene. They are found stored in many oil seeds and some
        animal tissues. They produce translucent spots on paper due to the
        diffraction of light. They also give a pink colour with azo dye, sudan
        III.
      </p>

      <h1 className={classes.headTag}>Learning Outcomes:</h1>

      <ul>
        <li>
          Students understand the characteristics of carbohydrates, proteins and
          fats.
        </li>
        <li>
          Students learn the tests to detect the presence of carbohydrates,
          proteins and fats.
        </li>
        <li>
          Students will be able to do the experiment more accurately in the real
          lab once they understand the steps through the animation and
          simulation.
        </li>
      </ul>

      <div className={classes.wrap}>
        <h1 className={classes.headTag}>Acknowledgement:</h1>
        <Typography>
          amrita.olabs.edu.in,. (2015). Detection of Carbohydrates, Proteins and
          Fats. Retrieved 6 April 2021, from
          amrita.olabs.edu.in/?sub=79&brch=17&sim=205&cnt=1
        </Typography>
      </div>
    </div>
  );
}
